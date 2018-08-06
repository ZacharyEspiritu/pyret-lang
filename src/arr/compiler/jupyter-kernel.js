({
  requires: [
    {
      "import-type": "builtin",
      name: "load-lib"
    },
    {
      "import-type": "builtin",
      name: "render-error-display"
    },
    {
      "import-type": "dependency",
      protocol: "file",
      args: ["repl.arr"]
    },
    {
      "import-type": "dependency",
      protocol: "file",
      args: ["compile-structs.arr"]
    },
    {
      "import-type": "builtin",
      name: "runtime-lib"
    }
  ],
  provides: {},
  nativeRequires: ["fs", "path", "uuid", "jmp", "pyret-base/js/js-numbers"],
  theModule: function(runtime, namespace, uri, loadLib, renderErrorDisplayLib,
                      pyRepl, compileStructs, runtimeLib, fs, path, uuid,
                      jmp, jsnums) {

    function installRenderers(installRuntime) {
      if (!installRuntime.ReprMethods.createNewRenderer("$kernel", installRuntime.ReprMethods._torepr)) return;

      function sooper(renderers, valType, val) {
        return renderers.__proto__[valType](val);
      }

      var renderers = installRuntime.ReprMethods["$kernel"];
      renderers["opaque"] = function renderPOpaque(val) {
        if (false) { // (image.isImage(val.val)) {
          return renderers.renderImage(val.val);
        } else {
          return sooper(renderers, "opaque", val);
        }
      };
      renderers["cyclic"] = function renderCyclic(val) {
        return sooper(renderers, "cyclic", val);
      };
      // renderers["render-color"] = function renderColor(top) {
      // };
      // renderers.renderImage = function renderImage(img) {
      // };
      renderers["number"] = function renderPNumber(num) {
        if (jsnums.isRational(num) && !jsnums.isInteger(num)) {
          return num.toString();
        } else {
          return sooper(renderers, "number", num);
        }
      };
      renderers["nothing"] = function(val) {
        return "";
      }
      renderers["boolean"] = function(val) {
        return sooper(renderers, "boolean", val);
      };
      renderers["string"] = function(val) {
        var escapedUnicode = '"' + replaceUnprintableStringChars(val, true) + '"';
        return escapedUnicode;
      };
      // Copied from installRuntime-anf, and tweaked.  Probably should be exported from installRuntime-anf instad
      var replaceUnprintableStringChars = function (s, toggleUnicode) {
        var ret = [], i;
        for (i = 0; i < s.length; i++) {
          var val = s.charCodeAt(i);
          switch(val) {
            case 7: ret.push('\\a'); break;
            case 8: ret.push('\\b'); break;
            case 9: ret.push('\\t'); break;
            case 10: ret.push('\\n'); break;
            case 11: ret.push('\\v'); break;
            case 12: ret.push('\\f'); break;
            case 13: ret.push('\\r'); break;
            case 34: ret.push('\\"'); break;
            case 92: ret.push('\\\\'); break;
            default:
              if ((val >= 32 && val <= 126) || !toggleUnicode) {
                ret.push( s.charAt(i) );
              }
              else {
                var numStr = val.toString(16).toUpperCase();
                while (numStr.length < 4) {
                  numStr = '0' + numStr;
                }
                ret.push('\\u' + numStr);
              }
              break;
          }
        }
        return ret.join('');
      };
      renderers["method"] = function(val) {
        return "<method:" + val.name + ">";
      };
      renderers["function"] = function(val) {
        return "<function:" + val.name + ">";
      };
      renderers["render-array"] = function(top) {
        var base = "[raw-array: ";
        for (var i = 0; i < top.done.length; i++) {
          base += top.done[i];
          if (i != top.done.length) {
            base += ",";
          }
        }
        base += "]";
        return base;
      };
      renderers["ref"] = function(val, implicit, pushTodo) {
        pushTodo(undefined, undefined, val, [installRuntime.getRef(val)], "render-ref", { origVal: val, implicit: implicit });
      };
      renderers["render-ref"] = function(top) {
        return top.done[0];
      };
      renderers["tuple"] = function(t, pushTodo) {
        pushTodo(undefined, undefined, undefined, Array.prototype.slice.call(t.vals), "render-tuple");
      };
      renderers["render-tuple"] = function(top){
        var base = "{";
        for (var i = top.done.length - 1; i >= 0; i--) {
          base += top.done[i];
          if (i > 0) {
             base += "; ";
          }
        }
        base += "}";
        return base;
      };
      renderers["object"] = function(val, pushTodo) {
        var keys = [];
        var vals = [];
        for (var field in val.dict) {
          keys.push(field); // NOTE: this is reversed order from the values,
          vals.unshift(val.dict[field]); // because processing will reverse them back
        }
        pushTodo(undefined, val, undefined, vals, "render-object", { keys: keys, origVal: val });
      };
      renderers["render-object"] = function(top) {
        var base = "{";
        for (var i = 0; i < top.extra.keys.length; i++) {
          base += top.extra.keys[i] + ": ";
          base += top.done[i];
          if (i + 1 < top.extra.keys.length) {
            base += ",";
          }
        }
        base += "}";
        return base;
      };
      renderers["data"] = function(val, pushTodo) {
        if (false) { // (image.isColor(val)) {
          pushTodo(undefined, undefined, undefined, [], "render-color", val);
        } else {
          return renderers.__proto__["data"](val, pushTodo);
        }
      };
      renderers["render-data"] = function renderData(top) {
        var base = top.extra.constructorName;
        if (top.extra.arity !== -1) {
          base += "(";
          var numFields = top.extra.fields.length;
          for (var i = 0; i < numFields; i++) {
            base += top.extra.fields[i];
            base += top.done[numFields - i - 1];
            if (i + 1 < numFields) {
              base += ",";
            }
          }
          base += ")";
        }
        return base;
      };
      function helper(val, values, wantCommaAtEnd) {
        var base = "";
        if (installRuntime.ffi.isVSValue(val)) {
          base += values.pop();
        }
        else if (installRuntime.ffi.isVSStr(val)) {
          base += installRuntime.unwrap(installRuntime.getField(val, "s"));
        }
        else if (installRuntime.ffi.isVSCollection(val)) {
          base += "[";
          base += installRuntime.unwrap(installRuntime.getField(val, "name"));
          base += ": ";
          var items = installRuntime.ffi.toArray(installRuntime.getField(val, "items"));
          base += groupItems(items, values, 0, items.length);
          base += "]";
        }
        else if (installRuntime.ffi.isVSConstr(val)) {
          base += installRuntime.unwrap(installRuntime.getField(val, "name"));
          base += "(";
          var items = installRuntime.ffi.toArray(installRuntime.getField(val, "args"));
          for (var i = 0; i < items.length; i++) {
            base += helper(items[i], values, (i + 1 < items.length));
          }
          base += ")";
        }
        else if (installRuntime.ffi.isVSSeq(val)) {
          var items = installRuntime.ffi.toArray(installRuntime.getField(val, "items"));
          for (var i = 0; i < items.length; i++) {
            base += helper(items[i], values, (i + 1 < items.length));
          }
        } else if (installRuntime.ffi.isVSRow(val)) {
          // TODO(Zachary): Implement Tables somehow, maybe with HTML mime type
          console.log("TABLE ROW ERROR");

        } else if (installRuntime.ffi.isVSTable(val)) {
          // TODO(Zachary): Implement Tables somehow, maybe with HTML mime type
          console.log("TABLE TABLE ERROR");

        } else {
          var items = installRuntime.ffi.toArray(installRuntime.getField(val, "items"));
          for (var i = 0; i < items.length; i++) {
            base += helper(items[i], values, (i + 1 < items.length));
          }
        }
        if (wantCommaAtEnd) { base += ","; }
        return base;
      }
      function groupItems(items, values, minIdx, maxIdx) {
        var base = "";
        for (var i = minIdx; i < maxIdx; i++) {
          base += helper(items[i], values, (i + 1 < maxIdx));
        }
        return base;
      }
      renderers["render-valueskeleton"] = function renderValueSkeleton(top) {
        return helper(top.extra.skeleton, top.done);
      };
    }

    function startKernel(pyretRepl, restarter) {

      function makeRepl() {
        return runtime.safeCall(function() {
          return runtime.getField(pyretRepl, "make-repl").app();
        }, function(repl) {
          // Load REPL values from the returned Object:
          var pyRestartInteractions = runtime.getField(repl, "restart-interactions");
          var pyRunInteraction = runtime.getField(repl, "run-interaction");
          var pyCheckParse = runtime.getField(repl, "check-parse");
          // Create JS interface to the Pyret REPL:
          var jsRepl = {
            // String -> Either
            // Clears the stored definitions in the REPL and loads src in
            restartInteractions: function(src) {
              return new Promise(function(resolve, _) {
                runtime.runThunk(() => {
                  return pyRestartInteractions.app(src);
                }, resolve);
              });
            },
            // String -> Either
            // Runs the src code in the REPL, and if successful, saves the
            // definitions in the REPL environment
            runInteraction: function(src) {
              return new Promise(function(resolve, _) {
                runtime.runThunk(() => {
                  return pyRunInteraction.app(src);
                }, resolve);
              });
            },
            checkParse: function(src) {
              return new Promise(function(resolve, _) {
                runtime.runThunk(() => {
                  return pyCheckParse.app(src);
                }, resolve)
              });
            },
            // The runtime environment used within the REPL
            runtime: runtime.getField(runtime.getField(repl, "new-runtime"), "runtime").val
          };
          return jsRepl;
        }, "make-repl");
      }

      var repl = makeRepl();
      installRenderers(repl.runtime);


      // Setup logging helpers
      var log;
      var dontLog = function dontLog() {};
      var doLog = function doLog() {
        process.stderr.write("KERNEL: ");
        console.error.apply(this, arguments);
      };

      log = dontLog;

      var Socket = jmp.Socket; // IPython/Jupyter protocol socket
      var zmq = jmp.zmq; // ZMQ bindings

      // Install renderers
      function Session(config) {
        config = config || {};

        /**
         * Queue of tasks to be run
         * @private
         */
        this._tasks = [];

        /**
         * Task currently being run (null if the last running task has finished)
         * @private
         */
        this._currentTask = null;

        /**
         * Table of execution contexts
         * (execution contexts are created to allow asynchronous execution of cells)
         * (indexed by execution context ID)
         * (contexts that complete their execution are removed from this table)
         * @private
         */
        this._contextTable = {};

        /**
         * Table of execution contexts that create a display ID
         * (displays are created to allow multiple outputs per cell)
         * (indexed by execution context ID)
         * (cannot use this._contextTable)
         * @private
         */
        this._displayTable = {};

        /**
         * Last execution context id (0 if none have been created)
         * @private
         */
        this._lastContextId = 0;

        /**
         * Last run task (null if none have been run)
         * @private
         */
        this._lastTask = null;

        /**
         * Session configuration
         * @private
         */
        this._config = {
          cwd: config.cwd,
          stdio: global.DEBUG ? [process.stdin, process.stdout, process.stderr, "ipc"]
                              : ["ignore", "ignore", "ignore", "ipc"],
        };

        /**
         * Server status as a string that can take the following values:
         *   "starting" (status from the time the server is spawned until the time
         *              the server is ready to receive requests);
         *   "online"   (status when the server is ready to receive requests);
         *   "dead"     (status after receiving a request to kill the server
         *              {@link module:nel~Session.kill}).
         * @private
         */
        this._status = "online";
      }

      /**
       * Run a task
       *
       * @private
       */
      Session.prototype._run = function(task) {
        if (this._status === "online" && this._currentTask === null) {
          this._runNow(task);
        }
        else if (this._status !== "dead") {
          this._runLater(task);
        }
      };

      /**
       * Run a task now
       *
       * @private
       */
      Session.prototype._runNow = function(task) {
        var id = this._lastContextId + 1;

        log("SESSION: RUN: TASK:", id, task);

        this._currentTask = task;
        this._lastTask = task;
        this._lastContextId = id;

        this._contextTable[id] = task;

        if (task.beforeRun) {
          task.beforeRun();
        }

        repl.runtime.setStdout(function(str) {
          if (task.onStdout) {
            task.onStdout(str);
          }
        });

        function handleCompileError(compileError) {
          return new Promise((resolve, reject) => {
            runtime.runThunk(() => {
              return runtime.getField(compileError, "render-reason").app();
            },
            (renderResult) => {
              if (runtime.isFailureResult(renderResult)) {
                // An error occured while attempting to `render-reason`:
                var renderExn = renderResult.exn.exn;
                reject(
                  "An error occured while attempting to display an " +
                  + "error that occured during compile-time: " + renderExn);
              }
              else if (runtime.isSuccessResult(renderResult)) {
                // No error occured while calling `render-reason`. Now,
                // use render-error-display library to display the
                // ErrorDisplay to a string:
                var renderedError = renderResult.result;

                runtime.runThunk(() => {
                  // Thunk is equivalent of:
                  // RED.display-to-string(renderedError, torepr, empty)
                  var redValues      = runtime.getField(renderErrorDisplayLib, "values");
                  var pyDisplayToStr = runtime.getField(redValues, "display-to-string");
                  var pyToRepr       = runtime.namespace.get("torepr");
                  var emptyList      = runtime.ffi.makeList([]);
                  return pyDisplayToStr.app(renderedError, pyToRepr, emptyList);
                },
                (displayToStringResult) => {
                  if (runtime.isFailureResult(displayToStringResult)) {
                    // An error occured while attempting to `display-to-string`:
                    var displayExn = displayToStringResult.exn.exn;
                    reject(
                      "An error occured while attempting to display an " +
                      + "error that occured during compile-time: " + displayExn);
                  }
                  else if (runtime.isSuccessResult(displayToStringResult)) {
                    // No error occured, and we now have a human-readable
                    // string reason for the non-compile:
                    var rejectReason = displayToStringResult.result;
                    resolve(rejectReason);
                  }
                  else {
                    // Something unexpected occured:
                    reject("Bad result: " + displayToStringResult);
                  }
                });
              }
              else {
                // Something unexpected occured:
                reject("Bad result: " + renderResult);
              }
            });
          });
        }

        function runInPyretRepl(input) {
          return new Promise((resolve, reject) => {
            const ffi = runtime.ffi;

            repl.runInteraction(input).then((result) => {
              if (runtime.isFailureResult(result)) {
                // Handle compile-time errors:
                var compileExn = result.exn.exn;
                handleCompileError(compileExn).then(reject, reject);
              }
              else if (runtime.isSuccessResult(result)) {
                result = result.result;
                return ffi.cases(ffi.isEither, "is-Either", result, {
                  left: reject,
                  right: (interactionResult) => {
                    var replResult  = runtime.getField(interactionResult, "repl-result");
                    var checkResult = runtime.getField(interactionResult, "check-message");

                    var replRuntime  = repl.runtime;
                    var loadInternal = runtime.getField(loadLib, "internal");
                    var moduleResult = loadInternal.getModuleResultResult(replResult);

                    if (replRuntime.isSuccessResult(moduleResult)) {
                      var runValue    = moduleResult.result;
                      var runAnswer   = replRuntime.getField(runValue, "answer");
                      var replToRepr  = replRuntime.ReprMethods["$kernel"];
                      var reprOutput  = replRuntime.toReprJS(runAnswer, replToRepr);
                      resolve({
                        reprOutput: reprOutput,
                        checkMessage: checkResult
                      });
                    }
                    else {
                      // We redirect failure results to the `left` branch within
                      // jupyter-kernel.arr, so we should never get here:
                      reject("Bad result: " + moduleResult);
                    }
                  }
                });
              }
              else {
                reject("Bad result: " + result);
              }
            }, (err) => {
              reject("Unknown error: " + err);
            });
          });
        };

        runInPyretRepl(task.code).then((result) => {
          var reprOutput   = result.reprOutput;
          var checkMessage = result.checkMessage;

          if (task.onStdout) {
            if (result.checkMessage != "The program didn't define any tests.") {
              task.onStdout(checkMessage);
            }
          }

          // Handle error and success messages
          if (task.onSuccess) {
            // TODO(Zachary): Needs to be updated to support multiple return
            // types other than plain text
            var bundle = {};
            if (reprOutput.toString() && reprOutput !== "") {
              bundle["mime"] = {"text/plain": reprOutput};
            }
            task.onSuccess(bundle);
          }
          else {
            log("SESSION: RECEIVED: SUCCESS: Missing onSuccess callback");
          }

          // Handle message.end
          if (task.afterRun) {
            task.afterRun();
          }
          else {
            log("SESSION: RECEIVED: ERROR: Missing afterRun callback");
          }

          if (task && task === this._currentTask) {
            this._currentTask = null;
            this._runNext();
          }
        }).catch(error => {
          if (task.onStderr) {
            task.onStderr(error);
          }
          else {
            log("SESSION: RECEIVED: STDERR: Missing stderr callback");
          }

          if (task.onError) {
            task.onError(error);
          }
          else {
            log("SESSION: RECEIVED: ERROR: Missing onError callback");
          }

          // Handle message.end
          if (task.afterRun) {
            task.afterRun();
          }
          else {
            log("SESSION: RECEIVED: ERROR: Missing afterRun callback");
          }

          if (task && task === this._currentTask) {
            this._currentTask = null;
            this._runNext();
          }
        });
      };

      /**
       * Run a task later
       *
       * @private
       */
      Session.prototype._runLater = function(task) {
        log("SESSION: QUEUE: TASK:", task);
        this._tasks.push(task);
      };

      /**
       * Run next task (if any)
       *
       * @private
       */
      Session.prototype._runNext = function() {
        var task = this._tasks.shift();

        if (task) {
          this._runNow(task);
        }
      };

      /**
       * Make an execution request
       *
       * @param {String}               code                 Code to execute in session
       * @param                        [callbacks]
       * @param {OnExecutionSuccessCB} [callbacks.onSuccess]
       * @param {OnErrorCB}            [callbacks.onError]
       * @param {BeforeRunCB}          [callbacks.beforeRun]
       * @param {AfterRunCB}           [callbacks.afterRun]
       * @param {OnStdioCB}            [callbacks.onStdout]
       * @param {OnStdioCB}            [callbacks.onStderr]
       * @param {OnDisplayCB}          [callbacks.onDisplay]
       * @param {OnRequestCB}          [callbacks.onRequest]
       */
      Session.prototype.execute = function(code, callbacks) {
        log("SESSION: EXECUTE:", code);

        var task = {
          action: "run",
          code: code,
        };

        if (callbacks) {
          if (callbacks.onSuccess) {
            task.onSuccess = callbacks.onSuccess;
          }
          if (callbacks.onError) {
            task.onError = callbacks.onError;
          }
          if (callbacks.beforeRun) {
            task.beforeRun = callbacks.beforeRun;
          }
          if (callbacks.afterRun) {
            task.afterRun = callbacks.afterRun;
          }
          if (callbacks.onStdout) {
            task.onStdout = callbacks.onStdout;
          }
          if (callbacks.onStderr) {
            task.onStderr = callbacks.onStderr;
          }
          if (callbacks.onDisplay) {
            task.onDisplay = callbacks.onDisplay;
          }
          if (callbacks.onRequest) {
            task.onRequest = callbacks.onRequest;
          }
        }

        this._run(task);
      };

      /**
       * Check if code is complete by checking if it parses
       *
       * @param {String}               code                 Code to execute in session
       * @param                        [callbacks]
       * @param {OnExecutionSuccessCB} [callbacks.onSuccess]
       * @param {OnErrorCB}            [callbacks.onError]
       * @param {BeforeRunCB}          [callbacks.beforeRun]
       * @param {AfterRunCB}           [callbacks.afterRun]
       * @param {OnStdioCB}            [callbacks.onStdout]
       * @param {OnStdioCB}            [callbacks.onStderr]
       * @param {OnDisplayCB}          [callbacks.onDisplay]
       * @param {OnRequestCB}          [callbacks.onRequest]
       */
      Session.prototype.is_complete = async function(code, callbacks) {
        log("SESSION: IS COMPLETE:", code);

        var task = {
          action: "run",
          code: code,
        };

        if (callbacks) {
          if (callbacks.onSuccess) {
            task.onSuccess = callbacks.onSuccess;
          }
          if (callbacks.onError) {
            task.onError = callbacks.onError;
          }
          if (callbacks.beforeRun) {
            task.beforeRun = callbacks.beforeRun;
          }
          if (callbacks.afterRun) {
            task.afterRun = callbacks.afterRun;
          }
          if (callbacks.onStdout) {
            task.onStdout = callbacks.onStdout;
          }
          if (callbacks.onStderr) {
            task.onStderr = callbacks.onStderr;
          }
          if (callbacks.onDisplay) {
            task.onDisplay = callbacks.onDisplay;
          }
          if (callbacks.onRequest) {
            task.onRequest = callbacks.onRequest;
          }
        }

        if (task.beforeRun) {
          task.beforeRun();
        }

        function isComplete(task) {
          return new Promise((resolve, _) => {
            repl.checkParse(task.code).then((parseResult) => {
              if (runtime.isSuccessResult(parseResult)) {
                parseResult = parseResult.result;
                resolve(runtime.isPyretTrue(parseResult));
              }
              else {
                resolve(false);
              }
            });
          });
        }

        var codeComplete = await isComplete(task);

        if (codeComplete) {
          // Code parsed
          if (task.onSuccess) {
            task.onSuccess();
          }
        }
        else {
          // Code did not parse
          if (task.onError) {
            task.onError();
          }
        }

        if (task.afterRun) {
          task.afterRun();
        }
      };

      /**
       * Complete an expression
       *
       * @param {String}                code                  Pyret code
       * @param {Number}                cursorPos             Cursor position in code
       * @param                         [callbacks]
       * @param {OnCompletionSuccessCB} [callbacks.onSuccess]
       * @param {OnErrorCB}             [callbacks.onError]
       * @param {BeforeRunCB}           [callbacks.beforeRun]
       * @param {AfterRunCB}            [callbacks.afterRun]
       * @param {OnStdioCB}             [callbacks.onStdout]
       * @param {OnStdioCB}             [callbacks.onStderr]
       */
      Session.prototype.complete = function(code, cursorPos, callbacks) {
        // TODO (Zachary): brave the seas and potentially add autocomplete
      };

      /**
       * Inspect a Pyret expression
       *
       * @param {String}                code                  Pyret code
       * @param {Number}                cursorPos             Cursor position in code
       * @param                         [callbacks]
       * @param {OnInspectionSuccessCB} [callbacks.onSuccess]
       * @param {OnErrorCB}             [callbacks.onError]
       * @param {BeforeRunCB}           [callbacks.beforeRun]
       * @param {AfterRunCB}            [callbacks.afterRun]
       * @param {OnStdioCB}             [callbacks.onStdout]
       * @param {OnStdioCB}             [callbacks.onStderr]
       */
      Session.prototype.inspect = function(code, cursorPos, callbacks) {
        // TODO (Zachary): determine if this is necessary
      };

      /**
       * Kill session
       *
       * @param {String}              [signal="SIGTERM"] Signal passed to kill the
       *                                                 session server
       * @param {KillCB}              [killCB]           Callback run after the
       *                                                 session server has been
       *                                                 killed
       */
      Session.prototype.kill = function(signal, killCB) {
        this._status = "dead";
      };

      /**
       * Restart session
       *
       * @param {String}               [signal="SIGTERM"] Signal passed to kill the
       *                                                  old session
       * @param {RestartCB}            [restartCB]        Callback run after restart
       */
      Session.prototype.restart = function(signal, restartCB) {
        this.kill(signal || "SIGTERM", (function(code, signal) {
          Session.call(this, this._config);
          if (restartCB) {
            restartCB(code, signal);
          }
        }).bind(this));
      };

      function JmpHandlers() {
        /**
         * Send `status_busy` message
         *
         * @param {module:jmp~Message} request Request message
         * @this Kernel
         */
        function status_busy(request) {
          request.respond(this.iopubSocket, "status", {
            execution_state: "busy"
          });
        }

        /**
         * Send for `status_idle` message
         *
         * @param {module:jmp~Message} request Request message
         * @this Kernel
         */
        function status_idle(request) {
          request.respond(this.iopubSocket, "status", {
            execution_state: "idle"
          });
        }

        /**
         * Handler for `kernel_info_request` messages
         *
         * @param {module:jmp~Message} request Request message
         * @this Kernel
         */
        function kernel_info_request(request) {
          status_busy.call(this, request);

          // Ensure response uses protocolVersion,
          // otherwise the response will be ignored.
          request.respond(
            this.shellSocket,
            "kernel_info_reply",
            this.kernelInfoReply, {},
            this.protocolVersion
          );

          status_idle.call(this, request);
        }

        /**
         * Handler for `execute_request` messages
         *
         * @param {module:jmp~Message} request Request message
         * @this Kernel
         */
        function execute_request(request) {
          var displayIds = {};

          this.session.execute(request.content.code, {
            onSuccess: onSuccess.bind(this),
            onError: onError.bind(this),
            beforeRun: beforeRun.bind(this),
            afterRun: afterRun.bind(this),
            onStdout: onStdout.bind(this),
            onStderr: onStderr.bind(this),
            onDisplay: onDisplay.bind(this),
            onRequest: onRequest.bind(this),
          });

          function beforeRun() {
            status_busy.call(this, request);

            this.executionCount++;

            request.respond(
              this.iopubSocket,
              "execute_input", {
                execution_count: this.executionCount,
                code: request.content.code,
              }
            );
          }

          function afterRun() {
            status_idle.call(this, request);
          }

          function onSuccess(result) {
            request.respond(
              this.shellSocket,
              "execute_reply", {
                status: "ok",
                execution_count: this.executionCount,
                payload: [], // not implemented
                user_expressions: {}, // not implemented,
              }
            );

            if (!result.mime) {
              return;
            }

            if (this.hideExecutionResult) {
              return;
            }

            if (this.hideUndefined &&
              result.mime["text/plain"] === "undefined") {
              return;
            }

            request.respond(
              this.iopubSocket,
              "execute_result", {
                execution_count: this.executionCount,
                data: result.mime,
                metadata: {},
              }
            );
          }

          function onError(result) {
            // TODO (Zachary): determine if parsing of Pyret errors should happen
            // before onError is called or inside of onError itself

            request.respond(
              this.shellSocket,
              "execute_reply", {
                status: "error",
                execution_count: this.executionCount,
                ename: "Error", //result.error.name,
                evalue: result, //result.error.message,
                traceback: [] //result.error.toString(),
              }
            );

            request.respond(
              this.iopubSocket,
              "error", {
                execution_count: this.executionCount,
                ename: "Error", //result.error.name,
                evalue: result, //result.error.message,
                traceback: [] //result.error.toString(),
              }
            );
          }

          function onStdout(data) {
            request.respond(
              this.iopubSocket,
              "stream", {
                name: "stdout",
                text: data.toString(),
              }
            );
          }

          function onStderr(data) {
            request.respond(
              this.iopubSocket,
              "stream", {
                name: "stderr",
                text: data.toString(),
              }
            );
          }

          function onDisplay(update) {
            var content = {
              data: update.mime,
              metadata: {},
            };

            // first call to onDisplay with a display_id sends a display_data
            // subsequent calls send an update_display_data
            var msg_type = "display_data";
            if (update.hasOwnProperty("display_id")) {
              if (displayIds.hasOwnProperty(update.display_id)) {
                msg_type = "update_display_data";
              }
              else {
                displayIds[update.display_id] = true;
              }

              content.transient = {
                display_id: update.display_id,
              };
            }

            request.respond(this.iopubSocket, msg_type, content);
          }

          function onRequest(message, onReply) {
            if (!message) {
              log("REQUEST: Empty request");
              return;
            }

            if (typeof onReply !== "function") {
              log("REQUEST: Missing onReply callback");
              return;
            }

            if (message && message.input) {
              if (!request.content.allow_stdin) {
                log("REQUEST: STDIN: Frontend does not support stdin requests");
                onReply(new Error("Frontend does not support stdin requests"));
                return;
              }

              var response = request.respond(
                this.stdinSocket, "input_request", message.input
              );

              log("REQUEST: STDIN:", response);
              this.onReplies[response.header.msg_id] = onReply;
              this.lastActiveOnReply = onReply;
            }
          }
        }

        /**
         * Handler for `complete_request` messages
         *
         * @param {module:jmp~Message} request Request message
         * @this Kernel
         */
        function complete_request(request) {
          status_busy.call(this, request);

          var content = {
            matches: [],
            cursor_start: request.content.cursor_pos,
            cursor_end: request.content.cursor_pos,
            status: "ok",
          };
          request.respond(this.shellSocket, "complete_reply", content);

          status_idle.call(this, request);
        }

        /**
         * Handler for `history_request` messages
         *
         * @param {module:jmp~Message} request Request message
         * @this Kernel
         */
        function history_request(request) {
          status_busy.call(this, request);

          request.respond(
            this.shellSocket,
            "history_reply", {
              "history": [] // TODO
            }, {},
            this.protocolVersion
          );

          status_idle.call(this, request);
        }

        /**
         * Handler for `inspect_request` messages
         *
         * @param {module:jmp~Message} request Request message
         * @this Kernel
         */
        function inspect_request(request) {
          status_busy.call(this, request);

          var content = {
            status: "error",
            execution_count: this.executionCount,
            ename: "not implemented",
            evalue: "not implemented",
            traceback: "not implemented",
          };
          request.respond(this.shellSocket, "inspect_reply", content);

          status_idle.call(this, request);
        }

        /**
         * Handler for `shutdown_request` messages
         *
         * @param {module:jmp~Message} request Request message
         * @this Kernel
         */
        function shutdown_request(request) {
          status_busy.call(this, request);

          function respond(code, signal) {
            request.respond(
              this.controlSocket, "shutdown_reply", request.content
            );
          }

          if (request.content.restart) {
            this.restart(respond.bind(this));
          }
          else {
            this.destroy(respond.bind(this));
          }

          status_idle.call(this, request);
        }

        /**
         * Handler for `execute_request` messages
         *
         * @param {module:jmp~Message} request Request message
         * @this Kernel
         */
        function is_complete_request(request) {
          var displayIds = {};

          this.session.is_complete(request.content.code, {
            onSuccess: onSuccess.bind(this),
            onError: onError.bind(this),
            beforeRun: beforeRun.bind(this),
            afterRun: afterRun.bind(this),
          });

          function beforeRun() {
            status_busy.call(this, request);
          }

          function afterRun() {
            status_idle.call(this, request);
          }

          function onSuccess(result) {
            request.respond(
              this.shellSocket,
              "is_complete_reply", {
                status: "complete",
              }
            );
          }

          function onError(result) {
            request.respond(
              this.shellSocket,
              "is_complete_reply", {
                status: "incomplete",
              }
            );
          }
        }

        return {
          execute_request: execute_request,
          complete_request: complete_request,
          history_request: history_request,
          inspect_request: inspect_request,
          kernel_info_request: kernel_info_request,
          shutdown_request: shutdown_request,
          is_complete_request: is_complete_request
        };
      }

      /**
       * @class
       * @classdesc Implements a Javascript kernel for IPython/Jupyter.
       * @param {Config}  config  Kernel configuration
       */
      function Kernel(config) {
        var kernel = {};

        /**
         * Configuration provided by IPython
         * @member {Object}
         */
        this.connection = config.connection;
        var scheme = this.connection.signature_scheme.slice("hmac-".length);
        var key = this.connection.key;

        // ZMQ identity
        var identity = uuid.v4();

        /**
         * HeartBeat socket
         * @member {module:zmq~Socket}
         */
        this.hbSocket = zmq.createSocket("rep");
        this.hbSocket.identity = identity;

        /**
         * IOPub socket
         * @member {module:jmp~Socket}
         */
        this.iopubSocket = new Socket("pub", scheme, key);
        this.iopubSocket.identity = identity;

        /**
         * Stdin socket
         * @member {module:jmp~Socket}
         */
        this.stdinSocket = new Socket("router", scheme, key);
        this.stdinSocket.identity = identity;

        /**
         * Shell socket
         * @member {module:jmp~Socket}
         */
        this.shellSocket = new Socket("router", scheme, key);
        this.shellSocket.identity = identity;

        /**
         * Control socket
         * @member {module:jmp~Socket}
         */
        this.controlSocket = new Socket("router", scheme, key);
        this.controlSocket.identity = identity;

        /**
         * Flag to hide execution results
         * @member {Boolean}
         */
        this.hideExecutionResult = config.hideExecutionResult;

        /**
         * Flag to hide undefined results
         * @member {Boolean}
         */
        this.hideUndefined = config.hideUndefined;

        /**
         * Content of kernel_info_reply message
         * @member {object}
         */
        this.kernelInfoReply = config.kernelInfoReply;

        /**
         * Javascript session
         * @member {module:nel~Session}
         */
        this.session = new Session({ cwd: config.cwd });

        /**
         * onReply callbacks indexed by input_request.header.msg_id
         * @member {object}
         */
        this.onReplies = {};

        /**
         * lastActiveOnReply is the last unused onReply callback
         * (workaround for frontends that don't set input_reply.parent_header)
         * @member {?function}
         */
        this.lastActiveOnReply = null;

        /**
         * Callback run at session startup (this callback can be used to setup the
         * kernel session; e.g. to register a require extensions).
         * @member {StartupCB}
         */
        this.startupCallback = config.startupCallback;

        /**
         * Path to a Javascript file to be run on session startup. Path to a folder
         * also accepted, in which case all the Javascript files in the folder will
         * be run.
         * @member {String}
         */
        this.startupScript = config.startupScript;

        /**
         * Number of visible execution requests
         * @member {Number}
         */
        this.executionCount = 0;

        /**
         * IPython/Jupyter protocol version
         * @member {String}
         */
        this.protocolVersion = config.protocolVersion;
        var majorVersion = parseInt(this.protocolVersion.split(".")[0]);

        /**
         * Collection of message handlers that links a message type with the method
         * handling the response
         * @member {Object.<String, Function>}
         * @see {@link module:handler_v4}
         * @see {@link module:handler_v5}
         */
        this.handlers = JmpHandlers();

        this._bindSockets();

        this._initSession();
      }

      /**
       * Bind kernel sockets and hook listeners
       *
       * @private
       */
      Kernel.prototype._bindSockets = function() {
        var address = "tcp://" + this.connection.ip + ":";

        this.hbSocket.on("message", onHBMessage.bind(this));
        this.shellSocket.on("message", onShellMessage.bind(this));
        this.controlSocket.on("message", onControlMessage.bind(this));
        this.stdinSocket.on("message", onStdinMessage.bind(this));

        this.hbSocket.bindSync(address + this.connection.hb_port);
        this.shellSocket.bindSync(address + this.connection.shell_port);
        this.controlSocket.bindSync(address + this.connection.control_port);
        this.stdinSocket.bindSync(address + this.connection.stdin_port);

        this.iopubSocket.bindSync(address + this.connection.iopub_port);

        function onHBMessage(message) {
          this.hbSocket.send(message);
        }

        function onShellMessage(msg) {
          var msg_type = msg.header.msg_type;
          if (this.handlers.hasOwnProperty(msg_type)) {
            try {
              this.handlers[msg_type].call(this, msg);
            }
            catch (e) {
              log("Exception in %s handler: %s", msg_type, e.stack);
            }
          }
          else {
            // Ignore unimplemented msg_type requests
            log("SHELL: Unhandled message type:", msg_type);
          }
        }

        function onControlMessage(msg) {
          var msg_type = msg.header.msg_type;
          if (msg_type === "shutdown_request") {
            this.handlers.shutdown_request.call(this, msg);
          }
          else {
            // Ignore unimplemented msg_type requests
            log("CONTROL: Unhandled message type:", msg_type);
          }
        }

        function onStdinMessage(msg) {
          log("STDIN: RESPONSE:", msg);

          var msg_type = msg.header.msg_type;
          if (msg_type === "input_reply") {
            var onReply;

            var msg_id = msg.parent_header.msg_id;
            if (msg_id) {
              onReply = this.onReplies[msg_id];
            }
            else {
              log("STDIN: Frontend did not set parent_header.msg_id");
              onReply = this.lastActiveOnReply;
            }

            if (!onReply) {
              log(
                "STDIN:",
                "Dropping input_reply because of missing onReply callback",
                this.onReplies
              );
              return;
            }

            if (this.lastActiveOnReply === onReply) {
              this.lastActiveOnReply = null;
            }

            onReply({
              input: msg.content.value
            });
            return;
          }
          else {
            // Ignore unimplemented msg_type requests
            log("STDIN: Unhandled message type:", msg_type);
          }
        }
      };

      /**
       * Initialise session
       *
       * @private
       */
      Kernel.prototype._initSession = function() {
        if (this.startupCallback) {
          this.startupCallback();
        }

        this._runStartupScripts();
      };

      /**
       * Run startup scripts
       *
       * @private
       */
      Kernel.prototype._runStartupScripts = function() {
        var startupScripts;

        if (this.startupScript) {
          var stats = fs.lstatSync(this.startupScript);
          if (stats.isDirectory()) {
            var dir = this.startupScript;
            startupScripts = fs.readdirSync(dir).filter(function(filename) {
              var ext = filename.slice(filename.length - 3).toLowerCase();
              return ext === ".js";
            }).sort().map(function(filename) {
              return path.join(dir, filename);
            });

          }
          else if (stats.isFile()) {
            startupScripts = [this.startupScript];

          }
          else {
            startupScripts = [];
          }
        }
        else {
          startupScripts = [];
        }

        log("startupScript: " + startupScripts);

        startupScripts.forEach((function(script) {
          var code;

          try {
            code = fs.readFileSync(script).toString();
          }
          catch (e) {
            log("startupScript: Cannot read '" + script + "'");
            return;
          }

          this.session.execute(code, {
            onSuccess: function onSuccess() {
              log("startupScript: '" + script + "' run successfuly");
            },
            onError: function onError() {
              log("startupScript: '" + script + "' failed to run");
            }
          });
        }).bind(this));
      };

      /**
       * Destroy kernel
       *
       * @param {DestroyCB} [destroyCB] Callback run after the session server has been
       *                                killed and before closing the sockets
       */
      Kernel.prototype.destroy = function(destroyCB) {
        log("Destroying kernel");

        // TODO(NR) Handle socket `this.stdin` once it is implemented
        this.controlSocket.removeAllListeners();
        this.shellSocket.removeAllListeners();
        this.iopubSocket.removeAllListeners();
        this.hbSocket.removeAllListeners();

        this.session.kill("SIGTERM", function(code, signal) {
          if (destroyCB) {
            destroyCB(code, signal);
          }

          this.controlSocket.close();
          this.shellSocket.close();
          this.iopubSocket.close();
          this.hbSocket.close();
        }.bind(this));
      };

      /**
       * @callback DestroyCB
       * @param {?Number} code   Exit code from session server if exited normally
       * @param {?String} signal Signal passed to kill the session server
       * @description Callback run after the session server has been killed and before
       * the sockets have been closed
       * @see {@link Kernel.destroy}
       */

      /**
       * Restart kernel
       *
       * @param {RestartCB} [restartCB] Callback run after the session server has been
       *                                restarted
       */
      Kernel.prototype.restart = function(restartCB) {
        log("Restarting kernel");

        repl.restartInteractions("").then((_) => {
          this._initSession();
          if (restartCB) {
            restartCB();
          }
        }, (err) => {
          console.error("Couldn't restart: ");
          console.error(err);
        });
      };

      // Actually setting up the kernel now
      log("SETTING UP KERNEL");
      repl.restartInteractions("").then((_) => {
        return repl.runInteraction("");
      }).then((_) => {
        log("REPL READY");
        const tmpFile = ".pyret-kernel.tmp";
        const config = JSON.parse(fs.readFileSync(tmpFile));

        try {
          var kernel = new Kernel(config);

          process.on("SIGINT", function() {
            console.log("Interrupting kernel");
            kernel.restart();
          });
        }
        catch (err) {
          console.log(err);
        }
      }, (err) => {
        console.error("Couldn't restart: ");
        console.error(err);
      });
    }

    return runtime.makeModuleReturn({
      start: runtime.makeFunction(function(pyretRepl, options) {
        return runtime.pauseStack(function(restarter) {
          return runtime.runThunk(function() {
              return startKernel(pyretRepl, restarter);
            },
            function(result) {
              // Ignored intentionally, since replServer just returns
            })
        });
      })
    }, {});
  }
})