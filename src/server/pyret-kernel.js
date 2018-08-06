#!/usr/bin/env node

// Imports:
const WebSocketClient = require('websocket').client;
const childProcess    = require('child_process');
const fs              = require('fs');
const console         = require("console");
const path            = require("path");

// Parse command arguments:
const DEFAULT_COMPILER = "build/phaseA/pyret.jarr";
const KERNEL_FLAG = "-kernel";
var config = parseCommandArguments();

// Write Kernel configuration to temp file:
const tmpFile = ".pyret-kernel.tmp";
fs.writeFileSync(tmpFile, String(JSON.stringify(config)));

// Start Kernel server:
startupServer();

function startupServer() {
  const child = childProcess.fork(
    DEFAULT_COMPILER,
    [KERNEL_FLAG],
    {
      stdio: [0, 1, 2, 'ipc'],
      execArgv: ["-max-old-space-size=8192"]
    } // To send messages on completion of startup
  );

  process.on('SIGINT', function() {
    console.log("Caught interrupt signal, killing and restarting server");
    try {
      const pid = child.pid;
      process.kill(pid, 'SIGINT');
      console.log("Sent kill signal to " + pid);
    }
    catch(e) {
      console.log("No process to quit: " + e);
    }
  });

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
    }

    var nodeVersion;
    var protocolVersion;
    var pyretVersion;
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
      pyretVersion = JSON.parse(
        fs.readFileSync(path.join(__dirname, "..", "..", "package.json"))
      ).version;
      config.kernelInfoReply = {
        "protocol_version": protocolVersion,
        "implementation": "aye-pyret",
        "implementation_version": pyretVersion,
        "language_info": {
          "name": "pyret",
          "version": nodeVersion,
          "mimetype": "application/pyret",
          "file_extension": ".arr",
        },
        "banner": (
          "Pyret v" + pyretVersion + "\n" +
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
