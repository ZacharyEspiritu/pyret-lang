({
  requires: [],
  provides: {},
  nativeRequires: ["jp-kernel", "fs"],
  theModule: function(runtime, namespace, uri, Kernel, fs) {

    function startKernel(pyretRepl, restarter) {
      // Grab Pyret function definitions:
      var runInteractions = runtime.getField(pyretRepl, "run-interaction");
      var restartInteractions = runtime.getField(pyretRepl, "restart-interactions");
      var runKernel = runtime.getField(pyretRepl, "run-kernel-interaction");

      // Function that runs all input code using an Pyret REPL instance, which
      // allows it to preserve definitions across inputs according to Jupyter
      // specification:



      // Setup Kernel configuration:
      const tmpFile = ".pyret-kernel.tmp";
      const config = JSON.parse(fs.readFileSync(tmpFile));

      // config.startupCallback = function startupCallback() {
      //   var code = "3 + 3";
      //   this.session.execute(code, {
      //       onSuccess: function() {
      //           console.log("startupCallback: '" + code + "' run successfuly");
      //       },
      //       onError: function() {
      //           console.log("startupCallback: '" + code + "' failed to run");
      //       },
      //   });
      // };

      config.transpile = function transpile(src, callback) {
        // return src;
        // var code;

        async function runInPyretRepl(input) {
          console.log(input);
          let result = new Promise((resolve, reject) => {
            runtime.runThunk(function() {
              return runInteractions.app(input);
            },
            function(res) {
              // console.log(JSON.stringify(result));
              // resolve(result);
              if(runtime.isSuccessResult(res)) {
                resolve(res);
              }
              else {
                reject(res);
              }
            });
          });
          console.log(result);

          return await result;
        }

        // console.log(runtime.runThunk(function() {
        //       return runInteractions.app(src);
        //     },
        //     function(result) {
        //       // console.log(JSON.stringify(result));
        //       // resolve(result);
        //         return result;
        //       // if(runtime.isSuccessResult(result)) {
        //       //   return result;
        //       // }
        //       // else {
        //       //   reject(result);
        //       // }
        //     }));

        // console.log(runInteractions.app(src));

        var result;
        runInPyretRepl(src).then(res => {
          console.log(res);
          var code = "console.log('" + res + "')";
          callback(code);
        });

        // if (result != null) {

        // }
        // else {
        //   setTimeout()
        // }

        // function checkFlag() {
        //   if(flag == false) {
        //     setTimeout(checkFlag, 300); /* this checks the flag every 100 milliseconds*/
        //   } else {
        //     /* do something*/
        //   }
        // }
        // checkFlag();


        // return







        // // console.log(result);
        // var code =

        // console.log(runKernel.app(src));
        //runtime.execThunk(function() {
        //     return runKernel.app(src);
        //   }));
          // function(result) {
          //   console.log(result);
          //   if(runtime.isSuccessResult(result)) {
          //     callback(null, result);
          //   }
          //   else {
          //     callback("invalid", null)
          //   }
          // });

        // var code = "console.log(" + JSON.stringify(result.result.dict.v.val.result.result.dict.answer) + ");";
        // console.log("DONE");
        // while (!code) {}
        // console.log(code);
        // return code;
      };

      try {
        var kernel = new Kernel(config);
      }
      catch (err) {
        console.log(err);
      }

      console.log("4");
      kernel.handlers.is_complete_request = function is_complete_request(request) {
        request.respond(this.iopubSocket, "status", {
            execution_state: "busy"
        });

        runUsingPyretRepl(request.content.code, function(err, result) {
          var content;
          if (err) {
            content = {
                status: "incomplete",
                indent: "",
            };
          }
          else {
            content = {
                status: "complete",
            };
          }

          request.respond(
            this.shellSocket,
            "is_complete_reply",
            content,
            {},
            this.protocolVersion
          );

          request.respond(this.iopubSocket, "status", {
            execution_state: "idle"
          });
        });
      };

      // Interpret a SIGINT signal as a request to interrupt the kernel
      process.on("SIGINT", function() {
        console.log("Interrupting kernel");
        kernel.restart();
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
