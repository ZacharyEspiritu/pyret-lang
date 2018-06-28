import runtime-lib as RT
import load-lib as L
import string-dict as SD
import file as F
import cmdline-lib as CL

import js-file("./jupyter-kernel") as CK

import file("repl.arr") as R
import file("compile-structs.arr") as CS
import file("cli-module-loader.arr") as CLI
import either as E

type Either = E.Either

r = RT.make-runtime()

# make repl to feed kernel input into
repl = R.make-repl(r, [SD.mutable-string-dict:], L.empty-realm(), CLI.default-start-context, lam(): CLI.module-finder end)

fun restart-interactions(src):
  i = repl.make-definitions-locator(lam(): src end, CS.standard-globals)
  repl.restart-interactions(i, CS.default-compile-options)
end

fun get-run-answer(res):
  cases(Either) res block:
    | right(ans) => ans
    | left(err) =>
      print-error("Expected an answer, but got compilation errors:")
      for lists.each(e from err):
        print-error(tostring(e))
      end
  end
end

fun run-interaction(src):
  i = repl.make-interaction-locator(lam(): src end)
  repl.run-interaction(i)
end

fun test(src):
  locator = repl.make-interaction-locator(lam(): src end)
  result  = repl.run-interaction(locator)

  cases (Either) result block:
    | left(errors) =>
      print-error("Expected an answer, but got compilation errors:")
      for lists.each(e from errors):
        print-error(tostring(e))
      end

    | right(answer) =>
      if L.is-success-result(answer):
        to-repr(answer)
      else:
        L.render-error-message(answer)
      end
  end
end

fun run-and-repr(src) -> String:
  result = run-interaction(src)
  value = L.get-result-answer(get-run-answer(result))

  cases (Option) value:
    | some(val) => to-repr(val)
    | none => ""
  end
end

CK.start({
  restart-interactions: restart-interactions,
  run-interaction: run-interaction,
  run-and-repr: run-and-repr,
  repl: repl
})
