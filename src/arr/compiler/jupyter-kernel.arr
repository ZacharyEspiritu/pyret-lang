provide {
  start: start
} end

import runtime-lib as RT
import load-lib as L
import string-dict as SD
import file as F
import cmdline-lib as CL
import render-error-display as RED

import either as E

import js-file("./jupyter-kernel") as JK

import file("repl.arr") as R
import file("compile-structs.arr") as CS
import file("cli-module-loader.arr") as CLI

type CompileResult = CS.CompileResult
type Either = E.Either

left = E.left
right = E.right

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
    interaction-loc = repl.make-interaction-locator(lam(): src end)
    maybe-result = repl.run-interaction(interaction-loc)
    cases (Either) maybe-result:
      | left(compile-errors) =>
        cases (List) compile-errors:
          | empty => left("")
          | link(f, _) =>
            cases (CompileResult) f:
              | ok(_) => left("an error occured")
              | err(problems) =>
                cases (List) problems:
                  | empty => ""
                  | link(first-problem, _) =>
                    left(RED.display-to-string(first-problem.render-reason(), torepr, empty))
                end
            end
        end
      | right(result) =>
        if L.is-success-result(result):
          right(result)
        else:
          right(result)
        end
    end
  end

  fun render-errors(compile-errors):
    cases (List) compile-errors:
      | empty => ""
      | link(f, r) =>
        RED.display-to-string(f.render-reason(), torepr, empty)
    end
  end

  {
    restart-interactions: restart-interactions,
    run-interaction: run-interaction,
    new-runtime: new-runtime,
    render-errors: render-errors
  }
end

fun start():
  doc: "Initializes a new Jupyter kernel"
  JK.start({
    make-repl: make-repl
  })
end
