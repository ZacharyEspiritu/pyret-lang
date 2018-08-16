/**
 * Significant portions of this code are based on
 * https://github.com/n-riesco/nel/ and https://github.com/n-riesco/jp-kernel/.
 *
 * ---
 *
 * LICENSE from https://github.com/n-riesco/nel/:
 *
 * Unless otherwise indicated, the software in this project is made available under
 * the BSD 3-Clause License.
 *
 * Copyright (c) 2015, Nicolas Riesco and others as credited in the AUTHORS file
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation and/or
 * other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ---
 *
 * LICENSE from https://github.com/n-riesco/jp-kernel/:
 *
 * Unless otherwise indicated, the software in this project is made available under
 * the BSD 3-Clause License.
 *
 * Copyright (c) 2015, Nicolas Riesco and others as credited in the AUTHORS file
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation and/or
 * other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
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

    /**
     * Installs _torepr renderers on the specified runtime.
     * @param {PyretRuntime} installRuntime The runtime to install renderers on
     */
    function installRenderers(installRuntime) {
      var installRtToRepr = installRuntime.ReprMethods._torepr
      if (!installRuntime.ReprMethods.createNewRenderer("$kernel", installRtToRepr)) {
        return;
      }

      function sooper(renderers, valType, val) {
        return renderers.__proto__[valType](val);
      }

      var renderers = installRuntime.ReprMethods["$kernel"];
      renderers["opaque"] = function renderPOpaque(val) {
        // TODO(ZacharyEspiritu): Figure out how to get Images in the notebook,
        // then update this accordingly.
        if (false) { // (image.isImage(val.val)) {
          return renderers.renderImage(val.val);
        } else {
          return sooper(renderers, "opaque", val);
        }
      };
      renderers["cyclic"] = function renderCyclic(val) {
        return sooper(renderers, "cyclic", val);
      };
      // TODO(ZacharyEspiritu): Figure out how to get Images in the notebook,
      // then update this accordingly.
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
      // Note below from CPO:
      // Copied from installRuntime-anf, and tweaked. Probably should be
      // exported from installRuntime-anf instad
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
            base += ", ";
          }
        }
        base += "]";
        return base;
      };
      renderers["ref"] = function(val, implicit, pushTodo) {
        pushTodo(
          undefined,
          undefined,
          val,
          [installRuntime.getRef(val)],
          "render-ref",
          { origVal: val, implicit: implicit });
      };
      renderers["render-ref"] = function(top) {
        return top.done[0];
      };
      renderers["tuple"] = function(t, pushTodo) {
        pushTodo(
          undefined,
          undefined,
          undefined,
          Array.prototype.slice.call(t.vals),
          "render-tuple");
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
        pushTodo(
          undefined,
          val,
          undefined,
          vals,
          "render-object",
          { keys: keys, origVal: val });
      };
      renderers["render-object"] = function(top) {
        var base = "{";
        for (var i = 0; i < top.extra.keys.length; i++) {
          base += top.extra.keys[i] + ": ";
          base += top.done[i];
          if (i + 1 < top.extra.keys.length) {
            base += ", ";
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
            base += ": ";
            base += top.done[numFields - i - 1];
            if (i + 1 < numFields) {
              base += ", ";
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
          // TODO(Zachary): Implement Tables somehow, maybe with HTML mime type,
          // then update this accordingly.
          console.log("TABLE ROW ERROR");
        } else if (installRuntime.ffi.isVSTable(val)) {
          // TODO(Zachary): Implement Tables somehow, maybe with HTML mime type,
          // then update this accordingly.
          console.log("TABLE TABLE ERROR");

        } else {
          var items = installRuntime.ffi.toArray(installRuntime.getField(val, "items"));
          for (var i = 0; i < items.length; i++) {
            base += helper(items[i], values, (i + 1 < items.length));
          }
        }
        if (wantCommaAtEnd) { base += ", "; }
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

    /**
     * Starts a Jupyter kernel.
     * @param  {Object} pyretRepl An Object passed from jupyter-kernel.arr
     *  containing various Pyret functions
     * @param  {Function} restarter Passed from runtime.pauseStack
     */
    function startKernel(pyretRepl, restarter) {

      /**
       * Instantiates a JavaScript interface between the Pyret REPL and the
       * Jupyter kernel.
       * @return {Object} A Javascript object containing functions that
       *  interface with the Pyret REPL functions
       */
      function makeRepl() {
        return runtime.safeCall(function() {
          // Get the REPL functions from jupyter-kernel.arr:
          return runtime.getField(pyretRepl, "make-repl").app();
        }, function(repl) {
          // Load REPL values from the returned Object:
          var pyRestartInteractions = runtime.getField(repl, "restart-interactions");
          var pyRunInteraction      = runtime.getField(repl, "run-interaction");
          var pyCheckParse          = runtime.getField(repl, "check-parse");
          // Create a Javascript object containing easier interfaces to each of
          // the REPL functions:
          return {
            /**
             * Clears the stored definitions in the REPL, then runs the
             * supplied code. This function should not be called while a Pyret
             * stack is running:
             * @param {String} src The Pyret code to run
             * @return {Promise<PyretResult<Either>>} The result of the REPL
             *  interaction
             */
            restartInteractions: function(src) {
              return new Promise(function(resolve, _) {
                runtime.runThunk(() => {
                  return pyRestartInteractions.app(src);
                }, resolve);
              });
            },

            /**
             * Runs the src code in the REPL. If the run is successful, saves
             * the definitions from src in the REPL environment.
             * @param  {String} src The Pyret code to run
             * @return {Promise<PyretResult<Either>>} The result of the REPL
             *  interaction
             */
            runInteraction: function(src) {
              return new Promise(function(resolve, _) {
                runtime.runThunk(() => {
                  return pyRunInteraction.app(src);
                }, resolve);
              });
            },

            /**
             * Returns PyretTrue if `src` is a parsable Pyret program;
             * otherwise, returns false.
             *
             * This function is used to handle `is_complete_request` messages
             * from front-ends. For instance, the Jupyter CLI REPL front-end
             * sends `is_complete_request` whenever the user hits the Enter
             * key in order to determine whether or not to add a newline or
             * send the program for execution.
             *
             * NOTE(ZacharyEspiritu): This is a naive check. The Jupyter
             * protocol recommends sending error messages as soon as we know a
             * program probably will never parse correctly. Currently, if
             * someone introduces a syntax error it will always tell the CLI
             * REPL to enter a newline, which isn't super user-friendly. This
             * is something that doesn't necessarily have to be handled in
             * the kernel, but could be part of a "smarter" parse library.
             *
             * @param  {String} src The Pyret code to check
             * @return {Promise<PyretResult<PyretBoolean>>} The parse result
             */
            checkParse: function(src) {
              return new Promise(function(resolve, _) {
                runtime.runThunk(() => {
                  return pyCheckParse.app(src);
                }, resolve)
              });
            },

            /**
             * Stops any running Pyret process.
             */
            stop: function() {
              runtime.breakAll();
            },

            /**
             * The runtime environment used within the REPL.
             * @type {PyretRuntime}
             */
            runtime: runtime.getField(runtime.getField(repl, "new-runtime"), "runtime").val
          };
        }, "make-repl");
      }

      // Instantiate a REPL:
      var repl = makeRepl();

      // Install the _torepr renderers on the REPL runtime:
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

      /**
       * Represents a Pyret session
       * @param {Object} config Session configuration
       */
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
         *   "starting" (status from the time the server is spawned until the
         *              time the server is ready to receive requests)
         *   "online"   (status when the server is ready to receive requests)
         *   "dead"     (status after receiving a request to kill the server)
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
        // Below code from jp-kernel:
        var id = this._lastContextId + 1;

        log("SESSION: RUN: TASK:", id, task);

        this._currentTask = task;
        this._lastTask = task;
        this._lastContextId = id;

        this._contextTable[id] = task;

        if (task.beforeRun) {
          task.beforeRun();
        }

        // Every task might have a different onStdout function, so we have to
        // setStdout on the repl runtime individually:
        repl.runtime.setStdout(function(str) {
          if (task.onStdout) {
            task.onStdout(str);
          }
        });

        /**
         * Helper function to handle compile errors from calls to
         * repl.runInteraction.
         * @param  {PyretError} compileError The Pyret compile error, retrieved
         *  from PyretFailureResult.exn.exn
         * @return {Promise<String>} Human-readable description of the error
         */
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

        /**
         * Runs the input code in the Pyret REPL.
         * @param  {String} input The Pyret code to run
         * @return {Promise} A Promise containing the result. Resolved if the
         *  run succeeded completely with no errors; otherwise, rejected. If
         *  resolved, the output is an Object containing
         *  reprOutput :: String (the result of the run) and checkMessage ::
         *  String (the result of any test cases that were executed). Otherwise,
         *  returns a String representing a human-readable string of any errors
         *  that occured.
         */
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

        // Run the Pyret code in the REPL:
        runInPyretRepl(task.code).then((result) => {
          // If we're here, we succeeded:

          var reprOutput   = result.reprOutput;
          var checkMessage = result.checkMessage;

          if (task.onStdout) {
            // Only send the test message to stdout if there were any tests
            // defined.
            // NOTE(ZacharyEspiritu): Is there a better way to check for this?
            if (result.checkMessage != "The program didn't define any tests.") {
              task.onStdout(checkMessage);
            }
          }

          // Handle error and success messages
          if (task.onSuccess) {
            // TODO(Zachary): Needs to be updated to support multiple return
            // types other than plain text. This probably should be done in the
            // renderers.
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
          // If we're here, this means some kind of error occured:
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
        // TODO(ZacharyEspiritu): This is a handler for code autocomplete
        // requests.
        //
        // It is not required for compliance with the Jupyter
        // specification, but the infrastructure is here in the event that
        // Pyret eventually gets an autocomplete feature.
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
        // TODO(ZacharyEspiritu): This is a handler for `inspect_request`s.
        // The Jupyter specification for this is "Code can be inspected to show
        // useful information to the user. It is up to the Kernel to decide
        // what information should be displayed, and its formatting." For
        // example, in iPython, typing `x?` where x is any known identifier
        // returns the type of the variable and any associated docstring.
        //
        // It is not required for compliance with the Jupyter
        // specification, but the infrastructure is here in the event that
        // Pyret eventually gets an autocomplete feature.
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

        if (killCB) {
          var EXIT_CODE = 0;
          killCB(EXIT_CODE, signal);
        }
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

      /**
       * This function instantiates an object containing handlers for each of
       * the Jupyter messages.
       *
       * To add a handler for a new message, define a function named the same
       * as the message you want to handle, then add it to the returned Object
       * at the end of this function. This allows us to easily add handlers
       * for new messages without digging into too much source code.
       *
       * Most of this code is taken from
       * https://github.com/n-riesco/jp-kernel/blob/master/lib/handlers_v5.js
       */
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
            request.respond(
              this.shellSocket,
              "execute_reply", {
                status: "error",
                execution_count: this.executionCount,
                ename: "Error",
                evalue: result,
                traceback: []
              }
            );

            request.respond(
              this.iopubSocket,
              "error", {
                execution_count: this.executionCount,
                ename: "Error",
                evalue: result,
                traceback: []
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
       * Kernel configuration.
       *
       * @typedef KernelConfig
       *
       * @property {object}  connection      Frontend connection file
       *
       * @property {string}  cwd             Session current working directory
       *
       * @property {boolean} debug           Enable debug mode
       *
       * @property {boolean} hideExecutionResult
       *                                     Do not show execution results
       *
       * @property {boolean} hideUndefined   Do not show undefined results
       *
       * @property {object}  kernelInfoReply Content of kernel_info_reply message
       *
       * @property {string}  protocolVersion Message protocol version
       *
       * @property {StartupCB}
       *                     startupCallback Callback invoked at session startup.
       *                                     This callback can be used to setup a
       *                                     session; e.g. to register a require
       *                                     extensions.
       */

      /**
       * @class
       * @classdesc Implements a Pyret kernel for Jupyter. Much of this Kernel
       *  code is taken from
       *  https://github.com/n-riesco/jp-kernel/blob/master/lib/jp-kernel.js
       * @param {KernelConfig}  config  Kernel configuration
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
      };

      /**
       * Destroy kernel
       *
       * @param {DestroyCB} [destroyCB] Callback run after the session server has been
       *                                killed and before closing the sockets
       */
      Kernel.prototype.destroy = function(destroyCB) {
        log("Destroying kernel");

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

        repl.stop();
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

      /**
       * @callback RestartCB
       * @param {?Number} code   Exit code from session server if exited normally
       * @param {?String} signal Signal passed to kill the session server
       * @description Callback run after the session server has been restarted
       * @see {@link Kernel.restart}
       */

      /**
       * Interrupts kernel. Used to handle SIGINT signals as the Pyret stop
       * button.
       */
      Kernel.prototype.interrupt = function() {
        log("Interrupting kernel");
        repl.stop();
      }

      // Now that everything's defined, we can start setting up the kernel now:
      log("SETTING UP KERNEL");
      repl.restartInteractions("").then((_) => {
        // NOTE(ZacharyEspiritu): There's something bizzare about the REPL in
        // that the first runInteraction call takes about 10 seconds, and then
        // subsequent calls are nearly instantaneous...this is a somewhat hacky
        // fix for that, but it results in the REPL having a 10 second startup
        // time, which needs to be fixed.
        return repl.runInteraction("");
      }).then((_) => {
        log("REPL READY");
        // Read our Kernel config from the tmp file:
        // TODO(ZacharyEspiritu): Rework this into command-line args, somehow
        const tmpFile = ".pyret-kernel.tmp";
        const config = JSON.parse(fs.readFileSync(tmpFile));

        try {
          var kernel = new Kernel(config);

          process.on("SIGINT", function() {
            console.log("Interrupting kernel");
            kernel.interrupt();
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
            });
        });
      })
    }, {});
  }
})
