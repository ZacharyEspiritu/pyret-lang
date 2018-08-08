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
import parse-pyret as PP

import js-file("./jupyter-kernel") as JK

import file("repl.arr") as R
import file("compile-structs.arr") as CS
import file("cli-module-loader.arr") as CLI

type CompileResult = CS.CompileResult
type Either = E.Either

left = E.left
right = E.right

fun make-repl():
  doc: "Creates a REPL object specifically for the Jupyter kernel"

  new-runtime = RT.make-runtime()
  repl = R.make-repl(
    new-runtime,
    [SD.mutable-string-dict:],
    L.empty-realm(),
    CLI.default-start-context,
    lam(): CLI.module-finder end)

  fun restart-interactions(src :: String):
    doc: ```
         Clears the definitions in the REPL and initializes it with the input
         src code
         ```
    definitions-loc = repl.make-definitions-locator(lam(): src end, CS.standard-globals)
    repl.restart-interactions(definitions-loc, CS.default-compile-options)
  end

  fun run-interaction(src :: String):
    doc: "Runs the input src code in the REPL"
    # Run input src code in REPL:
    interaction-loc = repl.make-interaction-locator(lam(): src end)
    maybe-result    = repl.run-interaction(interaction-loc)
    # Check status of REPL result:
    cases (Either) maybe-result:
      | left(compile-errors) =>
        # The kernel can only send one error at a time according to the protocol
        # so we're just going to take the first possible error:
        cases (List) compile-errors:
          | empty =>
            # We shouldn't ever get in this branch:
            left("An unknown internal kernel error occured. Please report this as a bug.")
          | link(f, _) =>
            cases (CompileResult) f:
              | ok(_) =>
                # We shouldn't ever get in this branch:
                left("An unknown internal kernel error occured. Please report this as a bug.")
              | err(problems) =>
                cases (List) problems:
                  | empty => ""
                  | link(first-problem, _) =>
                    problem-reason = first-problem.render-reason()
                    left(RED.display-to-string(problem-reason, torepr, empty))
                end
            end
        end
      | right(result) =>
        if L.is-success-result(result):
          right({
            repl-result: result,
            check-message: L.render-check-results(result).message
          })
        else:
          runtime-error-message = L.render-error-message(result).message
          left(runtime-error-message)
        end
    end
  end

  fun check-parse(program :: String) -> Boolean:
    doc: ```
         Checks if the input program parses. Should be used when handling a
         is_complete_request (generally, whether or not hitting the Enter key
         should send a program to the kernel or add a newline to the program)
         ```
    name = "parse-stub"
    maybe-ast = PP.maybe-surface-parse(program, name)
    cases(Either) maybe-ast:
      | left(_) => false
      | right(_) => true
    end
  end

  {
    restart-interactions: restart-interactions,
    run-interaction: run-interaction,
    check-parse: check-parse,
    new-runtime: new-runtime
  }
end

fun start():
  doc: "Initializes a new Jupyter kernel"
  JK.start({
    make-repl: make-repl
  })
end
