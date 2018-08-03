provide {
  start: start
} end

import runtime-lib as RT
import load-lib as L
import string-dict as SD
import file as F
import cmdline-lib as CL

import js-file("./jupyter-kernel") as JK

import file("repl.arr") as R
import file("compile-structs.arr") as CS
import file("cli-module-loader.arr") as CLI

fun make-repl():
  doc: "Creates a repl specifically for the Jupyter kernel"

  new-runtime = RT.make-runtime()
  repl = R.make-repl(
    new-runtime,
    [SD.mutable-string-dict:],
    L.empty-realm(),
    CLI.default-start-context,
    lam(): CLI.module-finder end)

  fun restart-interactions(src):
    i = repl.make-definitions-locator(lam(): src end, CS.standard-globals)
    repl.restart-interactions(i, CS.default-compile-options)
  end

  fun run-interaction(src):
    i = repl.make-interaction-locator(lam(): src end)
    repl.run-interaction(i)
  end

  {
    restart-interactions: restart-interactions,
    run-interaction: run-interaction,
    new-runtime: new-runtime
  }
end

fun start():
  doc: "Initializes a new Jupyter kernel"
  JK.start({
    make-repl: make-repl
  })
end
