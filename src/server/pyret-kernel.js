#!/usr/bin/env node

const pyretClient = require('./client-lib');

const WebSocketClient = require('websocket').client;
const lockFile = require('lockfile');
const childProcess = require('child_process');
const fs = require('fs');
const console = require("console");
const path = require("path");
const vm = require("vm");


// Parse command arguments
const DEFAULT_PORT = 5893;
const DEFAULT_COMPILER = "build/phaseA/pyret.jarr";
const DEFAULT_KERNEL = "src/arr/compiler/jupyter-kernel.arr";
var config = parseCommandArguments();

const tmpFile = ".pyret-kernel.tmp";
fs.writeFileSync(tmpFile, String(JSON.stringify(config)));
startupServer(DEFAULT_PORT);

process.on('SIGINT', function() {
  console.log("Caught interrupt signal, killing and restarting server");
  shutdown();
});



function startupServer(port) {
  const child = childProcess.fork(
    DEFAULT_COMPILER,
    ["-kernel"],
    // ["--run", DEFAULT_KERNEL],
    {
      stdio: [0, 1, 2, 'ipc'],
      execArgv: ["-max-old-space-size=8192"]
    } // To send messages on completion of startup
  );

  return new Promise((resolve, reject) => {
    child.on('message', function(msg) {
      if(msg.type === 'success') {
        child.unref();
        child.disconnect();
        // fs.writeFileSync(pidFile, String(child.pid));
        resolve(msg);
      }
      else {
        reject(msg);
      }
    });
  });
}

/**
 * Parse command arguments
 *
 * @returns {module:jp-kernel~Config} Kernel config
 */
function parseCommandArguments() {
    var config = {
        cwd: process.cwd(),
        hideExecutionResult: false,
        hideUndefined: false,
        protocolVersion: "5.1",
        startupCallback: function() {
            log("startupCallback:", this.startupCallback);
        },
    };

    var usage = (
        "Usage: node pyret-kernel.js " +
        "[--debug] " +
        "[--hide-execution-result] " +
        "[--hide-undefined] " +
        "[--protocol=Major[.minor[.patch]]] " +
        "[--session-working-dir=path] " +
        "[--show-undefined] " +
        "[--startup-script=path] " +
        "connection_file"
    );

    var FLAGS = [
        ["--debug", function() {
            config.debug = true;
        }],
        ["--hide-execution-result", function() {
            config.hideExecutionResult = true;
        }],
        ["--hide-undefined", function() {
            config.hideUndefined = true;
        }],
        ["--protocol=", function(setting) {
            config.protocolVersion = setting;
        }],
        ["--session-working-dir=", function(setting) {
            config.cwd = setting;
        }],
        ["--show-undefined", function() {
            config.hideUndefined = false;
        }],
        ["--startup-script=", function(setting) {
            config.startupScript = setting;
        }],
    ];

    try {
      var connectionFile;

      process.argv.slice(2).forEach(function(arg) {
        for (var i = 0; i < FLAGS.length; i++) {
          var flag = FLAGS[i];
          var label = flag[0];
          var action = flag[1];

          var matchesFlag = (arg.indexOf(label) === 0);
          if (matchesFlag) {
            var setting = arg.slice(label.length);
            action(setting);
            return;
          }
        }

        if (connectionFile) {
          throw new Error("Error: too many arguments");
        }

        connectionFile = arg;
      });

      if (!connectionFile) {
        throw new Error("Error: missing connection_file");
      }

      config.connection = JSON.parse(fs.readFileSync(connectionFile));

    } catch (e) {
      console.error("KERNEL: ARGV:", process.argv);
      console.error(usage);
      console.error(e)
      throw e;
      // throw e;
    }

    var nodeVersion;
    var protocolVersion;
    var ijsVersion;
    var majorVersion = parseInt(config.protocolVersion.split(".")[0]);
    if (majorVersion <= 4) {
      nodeVersion = process.versions.node.split(".")
        .map(function(v) {
          return parseInt(v, 10);
        });
      protocolVersion = config.protocolVersion.split(".")
        .map(function(v) {
          return parseInt(v, 10);
        });
      config.kernelInfoReply = {
        "language": "javascript",
        "language_version": nodeVersion,
        "protocol_version": protocolVersion,
      };
    } else {
      nodeVersion = process.versions.node;
      protocolVersion = config.protocolVersion;
      ijsVersion = JSON.parse(
        fs.readFileSync(path.join(__dirname, "..", "..", "package.json"))
      ).version;
      config.kernelInfoReply = {
        "protocol_version": protocolVersion,
        "implementation": "aye-pyret",
        "implementation_version": ijsVersion,
        "language_info": {
          "name": "pyret",
          "version": nodeVersion,
          "mimetype": "application/pyret",
          "file_extension": ".arr",
        },
        "banner": (
          "Pyret v" + ijsVersion + "\n" +
          "https://github.com/brown-plt/pyret-lang\n"
        ),
        "help_links": [{
          "text": "Pyret Github Repository",
          "url": "https://github.com/brown-plt/pyret-lang",
        }],
      };
    }

    return config;
}
