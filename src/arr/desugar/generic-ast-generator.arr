import file('../compiler/visitors/ast-transformer.arr') as AT
import ast as A
import ast-visitors as AV
import parse-pyret as SP
import file as F

dummy = A.dummy-loc
is-strip-annotation = false

fun make-node-1(typ :: String, id :: A.Expr) -> A.Expr:
  A.s-app(dummy, AT.make-id(typ), [list: id])
end

fun make-list(lst :: List<A.Expr>) -> A.Expr:
  A.s-construct(dummy, A.s-construct-normal, AT.make-id("list"), lst)
end

in-file = 'src/arr/trove/ast.arr'
out-file = 'src/arr/desugar/generic-ast-visitor.arr'
p = AT.read(in-file)
{collected-variants; collected-data-definitions} = AT.collect-ast(p)
shadow get-arg-type = AT.get-arg-type(_, collected-data-definitions)

fun serialize-visitor-transform(variant :: AT.SimplifiedVariant) -> A.Expr:
  cases (AT.SimplifiedVariant) variant block:
    | simplified-variant(type-name, name, members) =>
      args = for map(b from members):
        # assume b is s-bind
        id = AT.bind-to-id(b)
        arg-type = get-arg-type(b.ann)
        if arg-type.is-visitable():
          cases (AT.VisitableArgType) arg-type:
            | arg-visitable => AT.make-visit-self(id)
            | arg-list(_) => make-node-1("g-list", AT.make-complex-visit(id, "list"))
            | arg-option(_) => make-node-1("g-option", AT.make-complex-visit(id, "option"))
          end
        else:
          fun make-node-complex(
            tag :: String,
            meth :: String,
            inner :: AT.Tag
          ) -> A.Expr:
            # assume inner is one level deep
            shadow inner = cases (AT.Tag) inner:
              | t-str => "g-str"
              | t-num => "g-num"
              | t-bool => "g-bool"
              | t-loc => "g-loc"
            end
            make-node-1(
              tag,
              AT.make-method-call(id, meth, [list: AT.make-id(inner)]))
          end
          cases (AT.Tag) AT.get-tag(b.ann):
            | t-str => make-node-1("g-str", id)
            | t-num => make-node-1("g-num", id)
            | t-bool => make-node-1("g-bool", id)
            | t-loc => make-node-1("g-loc", id)
            | t-list(inner) => make-node-complex("g-list", "map", inner)
            | t-option(inner) => make-node-complex("g-option", "and-then", inner)
          end
        end
      end
      {opt-loc; shadow args} = cases (List) members:
        | empty => {AT.make-name("none"); args}
        | link(first, rest) =>
          cases (AT.Tag) AT.get-tag(first.ann):
            | t-loc =>
              {make-node-1("some", AT.bind-to-id(first)); args.drop(1)}
            | else =>
              {AT.make-name("none"); args}
          end
      end
      A.s-app(dummy, AT.make-id("g-op"), [list: A.s-str(dummy, name), opt-loc, make-list(args)])
    | simplified-singleton-variant(_, name, _) =>
      A.s-app(dummy, AT.make-id("g-op"), [list: A.s-str(dummy, name), AT.make-name("none"), make-list(empty)])
  end
end

body = [list:
  AT.visitor-maker(
    collected-variants,
    "generic-ast-visitor",
    serialize-visitor-transform,
    is-strip-annotation,
    '{}'),
]

fun get-arg-list(lst :: List<A.Bind>) -> List<A.Expr>:
  for map_n(i from 0, _ from lst):
    [list: AT.make-method-call(AT.make-id('args'), 'get', [list: A.s-num(dummy, i)])]
      ^ A.s-app(dummy, AT.make-id('degeneric'), _)
  end
end

if-pipes = for map(variant from collected-variants):
  cases (AT.SimplifiedVariant) variant:
    | simplified-variant(_, name, members) =>
      arg-list = cases (List) members:
        | empty => empty
        | link(first, rest) =>
          cases (AT.Tag) AT.get-tag(first.ann):
            | t-loc =>
              link(A.s-dot(dummy, AT.make-id('maybe-loc'), 'value'), get-arg-list(rest))
            | else => get-arg-list(members)
          end
      end
      A.s-app(dummy, AT.make-id(name),arg-list)
    | simplified-singleton-variant(_, name, _) => AT.make-id(name)
  end
    ^ A.s-if-pipe-branch(
        dummy,
        A.s-op(dummy, dummy, 'op==', AT.make-id('op'), A.s-str(dummy, variant.name)),
        _)
end

degeneric-str = ```
fun degeneric(g):
  cases (GenericAST) g:
    | g-op(maybe-loc, op, args) => ...
    | g-str(s) => s
    | g-num(n) => n
    | g-bool(b) => b
    | g-loc(l) => l
    | g-underscore(l) => s-underscore(l)
    | g-list(lst) => lst.map(degeneric)
    | g-option(opt) => opt.and-then(degeneric)
  end
end
```

degeneric = SP.surface-parse(degeneric-str, '').visit(AV.default-map-visitor.{
  method s-template(self, _):
    A.s-if-pipe(dummy, if-pipes, false)
  end
})

out-program =
  A.s-program(dummy,
    A.s-provide-all(dummy),
    A.s-provide-types-none(dummy),
    [list:
      A.s-include(dummy, A.s-const-import(dummy, "ast")),
      A.s-include(dummy, A.s-const-import(dummy, "generic-ast-structs")),
      A.s-import(dummy, A.s-const-import(dummy, "global"), A.s-underscore(dummy)),
      A.s-import(dummy, A.s-const-import(dummy, "base"), A.s-underscore(dummy))],
    A.s-block(dummy, body + degeneric.block.stmts))

as-string = '# THIS FILE IS AUTOMATICALLY GENERATED FROM generic-ast-generator.arr. PLEASE DO NOT EDIT.\n' + out-program.tosource().pretty(80).join-str("\n")

F.output-file(out-file, false).display(as-string)
