#!/usr/bin/env node

var rc = require("./rc.js");
var context = rc.context;
var installKernelAsync = rc.installKernelAsync;
var log = rc.log;
var readPackageJson = rc.readPackageJson;
var parseCommandArgs = rc.parseCommandArgs;
var setJupyterInfoAsync = rc.setJupyterInfoAsync;
var setPaths = rc.setPaths;
var setProtocol = rc.setProtocol;

setPaths(context);

readPackageJson(context);

parseCommandArgs(context, {
    installer: true,

    usageHeader: [
        "Pyret Kernel Installer",
        "",
        "Usage:",
        "",
        "    pyret-install-kernel <options>",
    ].join("\n"),
});

setJupyterInfoAsync(context, function() {
    setProtocol(context);

    installKernelAsync(context, function() {
        log("CONTEXT:", context);
    });
});
