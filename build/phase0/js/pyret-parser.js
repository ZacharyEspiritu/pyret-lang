define(['jglr/jglr'],
/** @param {{Grammar : {fromSerializable : !Function}, Nonterm : !Object, Token : !Object, Rule : !Object}} E */
function(E) {
  const Grammar = E.Grammar;
  const Nonterm = E.Nonterm;
  const Token = E.Token;
  const Rule = E.Rule;

  var g_json = {
    "start": "START",
    "name": "PyretGrammar",
    "acceptStates": [
      1
    ],
    "mode": "RNGLR",
    "derivable": {
      "program": [
        "prelude",
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "ε",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt",
        "block",
        "stmt",
        "block_I0_star",
        "block_I0",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "prelude": [
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "ε",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt"
      ],
      "block": [
        "block_I0_star",
        "ε",
        "block_I0",
        "stmt",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "prelude_I0_opt": [
        "ε",
        "prelude_I0",
        "provide-stmt"
      ],
      "prelude_I1_opt": [
        "ε",
        "prelude_I1",
        "provide-types-stmt"
      ],
      "prelude_I2_star": [
        "ε",
        "prelude_I2",
        "import-stmt"
      ],
      "prelude_I0": [
        "provide-stmt"
      ],
      "provide-stmt": [],
      "prelude_I1": [
        "provide-types-stmt"
      ],
      "provide-types-stmt": [],
      "prelude_I2": [
        "import-stmt"
      ],
      "import-stmt": [],
      "import-source": [
        "import-special",
        "import-name"
      ],
      "comma-names": [],
      "import-special": [],
      "import-name": [],
      "import-special_I3_star": [
        "ε",
        "import-special_I3"
      ],
      "import-special_I3": [],
      "stmt": [
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "record-ann": [],
      "comma-names_I1_star": [
        "ε",
        "comma-names_I1"
      ],
      "comma-names_I1": [],
      "block_I0_star": [
        "ε",
        "block_I0",
        "stmt",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "block_I0": [
        "stmt",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "type-expr": [],
      "newtype-expr": [],
      "let-expr": [],
      "fun-expr": [],
      "data-expr": [],
      "when-expr": [],
      "var-expr": [],
      "rec-expr": [],
      "assign-expr": [],
      "check-test": [
        "binop-expr",
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "check-expr": [],
      "contract-stmt": [],
      "ty-params": [
        "ty-params_I0_opt",
        "ε",
        "ty-params_I0"
      ],
      "ann": [
        "name-ann",
        "record-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "toplevel-binding": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "binop-expr": [
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "binding": [
        "name-binding",
        "tuple-binding"
      ],
      "name-binding": [],
      "tuple-binding": [],
      "tuple-binding_I1_star": [
        "ε",
        "tuple-binding_I1"
      ],
      "tuple-binding_I3_opt": [
        "ε",
        "tuple-binding_I3"
      ],
      "tuple-binding_I5_opt": [
        "ε",
        "tuple-binding_I5"
      ],
      "tuple-binding_I1": [],
      "tuple-binding_I3": [],
      "tuple-binding_I5": [],
      "name-binding_I0_opt": [
        "ε",
        "name-binding_I0"
      ],
      "name-binding_I2_opt": [
        "ε",
        "name-binding_I2"
      ],
      "name-binding_I0": [],
      "name-binding_I2": [],
      "multi-let-expr": [],
      "let-binding": [
        "let-expr",
        "var-expr"
      ],
      "multi-let-expr_I2_star": [
        "ε",
        "multi-let-expr_I2"
      ],
      "multi-let-expr_I3": [],
      "multi-let-expr_I2": [],
      "letrec-expr": [],
      "letrec-expr_I2_star": [
        "ε",
        "letrec-expr_I2"
      ],
      "letrec-expr_I3": [],
      "letrec-expr_I2": [],
      "type-bind": [],
      "newtype-bind": [],
      "type-let-bind": [
        "type-bind",
        "newtype-bind"
      ],
      "type-let-expr": [],
      "type-let-expr_I2_star": [
        "ε",
        "type-let-expr_I2"
      ],
      "type-let-expr_I3": [],
      "type-let-expr_I2": [],
      "contract-stmt_I2": [
        "ann",
        "noparen-arrow-ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "noparen-arrow-ann": [],
      "fun-header": [
        "args"
      ],
      "fun-expr_I3": [],
      "doc-string": [
        "doc-string_I0_opt",
        "ε",
        "doc-string_I0"
      ],
      "where-clause": [
        "where-clause_I0_opt",
        "ε",
        "where-clause_I0"
      ],
      "args": [],
      "return-ann": [
        "return-ann_I0_opt",
        "ε",
        "return-ann_I0"
      ],
      "ty-params_I0_opt": [
        "ε",
        "ty-params_I0"
      ],
      "ty-params_I0": [],
      "ty-params_I0_I0": [],
      "ty-params_I0_I2": [],
      "args_I0": [],
      "args_I1_opt": [
        "ε",
        "args_I1",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "args_I1": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "args_I1_I1_star": [
        "ε",
        "args_I1_I1"
      ],
      "args_I1_I1": [],
      "return-ann_I0_opt": [
        "ε",
        "return-ann_I0"
      ],
      "return-ann_I0": [],
      "doc-string_I0_opt": [
        "ε",
        "doc-string_I0"
      ],
      "doc-string_I0": [],
      "where-clause_I0_opt": [
        "ε",
        "where-clause_I0"
      ],
      "where-clause_I0": [],
      "check-expr_I0": [],
      "check-op": [],
      "check-test_A0_I2_opt": [
        "ε",
        "check-test_A0_I2"
      ],
      "check-test_A0_I2": [],
      "check-test_A0_I2_I1": [],
      "check-op-postfix": [],
      "data-expr_I4_opt": [
        "ε",
        "data-expr_I4",
        "first-data-variant",
        "variant-constructor"
      ],
      "data-expr_I5_star": [
        "ε",
        "data-expr_I5",
        "data-variant"
      ],
      "data-sharing": [
        "data-sharing_I0_opt",
        "ε",
        "data-sharing_I0"
      ],
      "data-expr_I4": [
        "first-data-variant",
        "variant-constructor"
      ],
      "first-data-variant": [
        "variant-constructor"
      ],
      "data-expr_I5": [
        "data-variant"
      ],
      "data-variant": [],
      "variant-constructor": [],
      "variant-members": [],
      "data-with": [
        "data-with_I0_opt",
        "ε",
        "data-with_I0"
      ],
      "variant-members_I1_opt": [
        "ε",
        "variant-members_I1",
        "variant-member",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-members_I1": [
        "variant-member",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-member": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-members_I1_I1_star": [
        "ε",
        "variant-members_I1_I1"
      ],
      "variant-members_I1_I1": [],
      "variant-member_I0_opt": [
        "ε",
        "variant-member_I0"
      ],
      "variant-member_I0": [],
      "data-with_I0_opt": [
        "ε",
        "data-with_I0"
      ],
      "data-with_I0": [],
      "fields": [
        "field"
      ],
      "data-sharing_I0_opt": [
        "ε",
        "data-sharing_I0"
      ],
      "data-sharing_I0": [],
      "when-expr_I2": [],
      "expr": [
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "binop-expr_I1_star": [
        "ε",
        "binop-expr_I1"
      ],
      "binop-expr_I1": [],
      "binop": [],
      "paren-expr": [],
      "id-expr": [],
      "prim-expr": [
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "lambda-expr": [],
      "method-expr": [],
      "app-expr": [],
      "obj-expr": [],
      "tuple-expr": [],
      "tuple-get": [],
      "dot-expr": [],
      "template-expr": [],
      "get-bang-expr": [],
      "update-expr": [],
      "extend-expr": [],
      "if-expr": [],
      "if-pipe-expr": [],
      "cases-expr": [],
      "for-expr": [],
      "user-block-expr": [],
      "inst-expr": [],
      "construct-expr": [],
      "table-select": [],
      "table-extend": [],
      "table-filter": [],
      "table-order": [],
      "table-extract": [],
      "table-update": [],
      "table-expr": [],
      "load-table-expr": [],
      "reactor-expr": [],
      "bad-expr": [],
      "paren-expr_I0": [],
      "num-expr": [],
      "frac-expr": [],
      "bool-expr": [],
      "string-expr": [],
      "lambda-expr_I2": [],
      "method-expr_I2": [],
      "app-args": [],
      "opt-comma-binops": [
        "opt-comma-binops_I0_opt",
        "ε",
        "opt-comma-binops_I0",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "opt-comma-binops_I0_opt": [
        "ε",
        "opt-comma-binops_I0",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "opt-comma-binops_I0": [
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "opt-comma-binops_I0_I1_star": [
        "ε",
        "opt-comma-binops_I0_I1"
      ],
      "opt-comma-binops_I0_I1": [],
      "inst-expr_I3_star": [
        "ε",
        "inst-expr_I3"
      ],
      "inst-expr_I3": [],
      "tuple-fields": [
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "tuple-fields_I1_star": [
        "ε",
        "tuple-fields_I1"
      ],
      "tuple-fields_I2_opt": [
        "ε",
        "tuple-fields_I2"
      ],
      "tuple-fields_I1": [],
      "tuple-fields_I2": [],
      "obj-fields": [
        "obj-field"
      ],
      "obj-field": [],
      "obj-fields_I1_star": [
        "ε",
        "obj-fields_I1"
      ],
      "obj-fields_I2_opt": [
        "ε",
        "obj-fields_I2"
      ],
      "obj-fields_I1": [],
      "obj-fields_I2": [],
      "key": [],
      "obj-field_A1_I2_opt": [
        "ε",
        "obj-field_A1_I2"
      ],
      "obj-field_A1_I2": [],
      "obj-field_A2_I3": [],
      "field": [],
      "fields_I1_star": [
        "ε",
        "fields_I1"
      ],
      "fields_I2_opt": [
        "ε",
        "fields_I2"
      ],
      "fields_I1": [],
      "fields_I2": [],
      "field_A1_I3": [],
      "construct-modifier": [
        "ε"
      ],
      "table-headers": [
        "table-headers_I0_opt",
        "ε",
        "table-headers_I0",
        "table-header"
      ],
      "table-rows": [
        "table-rows_I0_opt",
        "ε",
        "table-rows_I0",
        "table-row"
      ],
      "table-headers_I0_opt": [
        "ε",
        "table-headers_I0",
        "table-header"
      ],
      "table-headers_I0": [
        "table-header"
      ],
      "table-headers_I0_I0_star": [
        "ε",
        "table-headers_I0_I0",
        "list-table-header"
      ],
      "table-header": [],
      "table-headers_I0_I0": [
        "list-table-header"
      ],
      "list-table-header": [],
      "table-header_I1_opt": [
        "ε",
        "table-header_I1"
      ],
      "table-header_I1": [],
      "table-rows_I0_opt": [
        "ε",
        "table-rows_I0",
        "table-row"
      ],
      "table-rows_I0": [
        "table-row"
      ],
      "table-rows_I0_I0_star": [
        "ε",
        "table-rows_I0_I0",
        "table-row"
      ],
      "table-row": [],
      "table-rows_I0_I0": [
        "table-row"
      ],
      "table-items": [
        "table-items_I0_opt",
        "ε",
        "table-items_I0",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0_opt": [
        "ε",
        "table-items_I0",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0": [
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0_I0_star": [
        "ε",
        "table-items_I0_I0",
        "list-table-item"
      ],
      "table-items_I0_I0": [
        "list-table-item"
      ],
      "list-table-item": [],
      "bracket-expr": [],
      "if-expr_I2": [],
      "if-expr_I4_star": [
        "ε",
        "if-expr_I4",
        "else-if"
      ],
      "if-expr_I5_opt": [
        "ε",
        "if-expr_I5"
      ],
      "if-expr_I4": [
        "else-if"
      ],
      "else-if": [],
      "if-expr_I5": [],
      "if-pipe-expr_I1": [],
      "if-pipe-expr_I2_star": [
        "ε",
        "if-pipe-expr_I2",
        "if-pipe-branch"
      ],
      "if-pipe-expr_I3_opt": [
        "ε",
        "if-pipe-expr_I3"
      ],
      "if-pipe-expr_I2": [
        "if-pipe-branch"
      ],
      "if-pipe-branch": [],
      "if-pipe-expr_I3": [],
      "cases-binding": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-binding_I0_opt": [
        "ε",
        "cases-binding_I0"
      ],
      "cases-binding_I0": [],
      "cases-args": [],
      "cases-args_I1_opt": [
        "ε",
        "cases-args_I1",
        "cases-binding",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-args_I1": [
        "cases-binding",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-args_I1_I1_star": [
        "ε",
        "cases-args_I1_I1"
      ],
      "cases-args_I1_I1": [],
      "cases-expr_I1": [],
      "cases-expr_I5": [],
      "cases-expr_I6_star": [
        "ε",
        "cases-expr_I6",
        "cases-branch"
      ],
      "cases-expr_I7_opt": [
        "ε",
        "cases-expr_I7"
      ],
      "cases-expr_I6": [
        "cases-branch"
      ],
      "cases-branch": [],
      "cases-expr_I7": [],
      "cases-branch_I2_opt": [
        "ε",
        "cases-branch_I2",
        "cases-args"
      ],
      "cases-branch_I2": [
        "cases-args"
      ],
      "for-bind": [],
      "for-expr_I3_opt": [
        "ε",
        "for-expr_I3",
        "for-bind"
      ],
      "for-expr_I6": [],
      "for-expr_I3": [
        "for-bind"
      ],
      "for-expr_I3_I1_star": [
        "ε",
        "for-expr_I3_I1"
      ],
      "for-expr_I3_I1": [],
      "column-order": [],
      "column-order_I1": [],
      "table-select_I2_star": [
        "ε",
        "table-select_I2"
      ],
      "table-select_I2": [],
      "table-filter_I2_opt": [
        "ε",
        "table-filter_I2"
      ],
      "table-filter_I2": [],
      "table-filter_I2_I2_star": [
        "ε",
        "table-filter_I2_I2"
      ],
      "table-filter_I2_I2": [],
      "table-update_I2_opt": [
        "ε",
        "table-update_I2"
      ],
      "table-update_I2": [],
      "table-update_I2_I2_star": [
        "ε",
        "table-update_I2_I2"
      ],
      "table-update_I2_I2": [],
      "table-extend_I2_opt": [
        "ε",
        "table-extend_I2"
      ],
      "table-extend-fields": [
        "table-extend-field"
      ],
      "table-extend_I2": [],
      "table-extend_I2_I2_star": [
        "ε",
        "table-extend_I2_I2"
      ],
      "table-extend_I2_I2": [],
      "table-extend-fields_I0_star": [
        "ε",
        "table-extend-fields_I0",
        "list-table-extend-field"
      ],
      "table-extend-field": [],
      "table-extend-fields_I2_opt": [
        "ε",
        "table-extend-fields_I2"
      ],
      "table-extend-fields_I0": [
        "list-table-extend-field"
      ],
      "list-table-extend-field": [],
      "table-extend-fields_I2": [],
      "table-extend-field_A0_I1_opt": [
        "ε",
        "table-extend-field_A0_I1"
      ],
      "table-extend-field_A0_I1": [],
      "table-extend-field_A1_I1_opt": [
        "ε",
        "table-extend-field_A1_I1"
      ],
      "table-extend-field_A1_I1": [],
      "load-table-expr_I3_opt": [
        "ε",
        "load-table-expr_I3",
        "load-table-specs",
        "load-table-spec"
      ],
      "load-table-expr_I3": [
        "load-table-specs",
        "load-table-spec"
      ],
      "load-table-specs": [
        "load-table-spec"
      ],
      "load-table-specs_I0_star": [
        "ε",
        "load-table-specs_I0",
        "load-table-spec"
      ],
      "load-table-spec": [],
      "load-table-specs_I0": [
        "load-table-spec"
      ],
      "name-ann": [],
      "arrow-ann": [],
      "app-ann": [],
      "pred-ann": [],
      "dot-ann": [],
      "tuple-ann": [],
      "record-ann_I1_opt": [
        "ε",
        "record-ann_I1",
        "ann-field"
      ],
      "record-ann_I1": [
        "ann-field"
      ],
      "ann-field": [],
      "record-ann_I1_I1_star": [
        "ε",
        "record-ann_I1_I1"
      ],
      "record-ann_I1_I1": [],
      "tuple-ann_I2_star": [
        "ε",
        "tuple-ann_I2"
      ],
      "tuple-ann_I3_opt": [
        "ε",
        "tuple-ann_I3"
      ],
      "tuple-ann_I2": [],
      "tuple-ann_I3": [],
      "noparen-arrow-ann_I0_opt": [
        "ε",
        "noparen-arrow-ann_I0",
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "noparen-arrow-ann_I0": [
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "comma-anns": [
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "arrow-ann_I0": [],
      "arrow-ann_I1_opt": [
        "ε",
        "arrow-ann_I1",
        "comma-anns",
        "record-ann",
        "ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "arrow-ann_I1": [
        "comma-anns",
        "record-ann",
        "ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "app-ann_I0": [
        "name-ann",
        "dot-ann"
      ],
      "comma-anns_I1_star": [
        "ε",
        "comma-anns_I1"
      ],
      "comma-anns_I1": [],
      "pred-ann_I2": [],
      "START": [
        "program",
        "ε",
        "prelude",
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt",
        "block",
        "stmt",
        "block_I0_star",
        "block_I0",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ]
    },
    "rulesByOldId": {
      "0": {
        "name": "program",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "1": {
        "name": "prelude",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "2": {
        "name": "prelude_I0_opt",
        "position": 0,
        "symbols": []
      },
      "3": {
        "name": "prelude_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0"
          }
        ]
      },
      "4": {
        "name": "prelude_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-stmt"
          }
        ]
      },
      "5": {
        "name": "prelude_I1_opt",
        "position": 0,
        "symbols": []
      },
      "6": {
        "name": "prelude_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I1"
          }
        ]
      },
      "7": {
        "name": "prelude_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-types-stmt"
          }
        ]
      },
      "8": {
        "name": "prelude_I2_star",
        "position": 0,
        "symbols": []
      },
      "9": {
        "name": "prelude_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2"
          }
        ]
      },
      "10": {
        "name": "prelude_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt"
          }
        ]
      },
      "11": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "INCLUDE"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "12": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "13": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "14": {
        "name": "import-source",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special"
          }
        ]
      },
      "15": {
        "name": "import-source",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-name"
          }
        ]
      },
      "16": {
        "name": "import-special",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "17": {
        "name": "import-special_I3_star",
        "position": 0,
        "symbols": []
      },
      "18": {
        "name": "import-special_I3_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3"
          }
        ]
      },
      "19": {
        "name": "import-special_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "20": {
        "name": "import-name",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "21": {
        "name": "provide-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Nonterm",
            "name": "stmt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "22": {
        "name": "provide-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "23": {
        "name": "provide-types-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "24": {
        "name": "provide-types-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "25": {
        "name": "comma-names",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "26": {
        "name": "comma-names_I1_star",
        "position": 0,
        "symbols": []
      },
      "27": {
        "name": "comma-names_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1"
          }
        ]
      },
      "28": {
        "name": "comma-names_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "29": {
        "name": "block",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          }
        ]
      },
      "30": {
        "name": "block_I0_star",
        "position": 0,
        "symbols": []
      },
      "31": {
        "name": "block_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "block_I0"
          }
        ]
      },
      "32": {
        "name": "block_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "stmt"
          }
        ]
      },
      "33": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-expr"
          }
        ]
      },
      "34": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-expr"
          }
        ]
      },
      "35": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "36": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fun-expr"
          }
        ]
      },
      "37": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr"
          }
        ]
      },
      "38": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "when-expr"
          }
        ]
      },
      "39": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "40": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rec-expr"
          }
        ]
      },
      "41": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "assign-expr"
          }
        ]
      },
      "42": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test"
          }
        ]
      },
      "43": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr"
          }
        ]
      },
      "44": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "contract-stmt"
          }
        ]
      },
      "45": {
        "name": "type-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "46": {
        "name": "newtype-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "47": {
        "name": "let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "48": {
        "name": "binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "49": {
        "name": "binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding"
          }
        ]
      },
      "50": {
        "name": "tuple-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "51": {
        "name": "tuple-binding_I1_star",
        "position": 0,
        "symbols": []
      },
      "52": {
        "name": "tuple-binding_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1"
          }
        ]
      },
      "53": {
        "name": "tuple-binding_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "54": {
        "name": "tuple-binding_I3_opt",
        "position": 0,
        "symbols": []
      },
      "55": {
        "name": "tuple-binding_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3"
          }
        ]
      },
      "56": {
        "name": "tuple-binding_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "57": {
        "name": "tuple-binding_I5_opt",
        "position": 0,
        "symbols": []
      },
      "58": {
        "name": "tuple-binding_I5_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5"
          }
        ]
      },
      "59": {
        "name": "tuple-binding_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "60": {
        "name": "name-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "61": {
        "name": "name-binding_I0_opt",
        "position": 0,
        "symbols": []
      },
      "62": {
        "name": "name-binding_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0"
          }
        ]
      },
      "63": {
        "name": "name-binding_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SHADOW"
          }
        ]
      },
      "64": {
        "name": "name-binding_I2_opt",
        "position": 0,
        "symbols": []
      },
      "65": {
        "name": "name-binding_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I2"
          }
        ]
      },
      "66": {
        "name": "name-binding_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "67": {
        "name": "toplevel-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "68": {
        "name": "multi-let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LET"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "69": {
        "name": "multi-let-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "70": {
        "name": "multi-let-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2"
          }
        ]
      },
      "71": {
        "name": "multi-let-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          }
        ]
      },
      "72": {
        "name": "multi-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "73": {
        "name": "multi-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "74": {
        "name": "let-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "75": {
        "name": "let-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "76": {
        "name": "letrec-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LETREC"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "77": {
        "name": "letrec-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "78": {
        "name": "letrec-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2"
          }
        ]
      },
      "79": {
        "name": "letrec-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "80": {
        "name": "letrec-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "81": {
        "name": "letrec-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "82": {
        "name": "type-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "83": {
        "name": "newtype-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "84": {
        "name": "type-let-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-bind"
          }
        ]
      },
      "85": {
        "name": "type-let-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-bind"
          }
        ]
      },
      "86": {
        "name": "type-let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE-LET"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "87": {
        "name": "type-let-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "88": {
        "name": "type-let-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2"
          }
        ]
      },
      "89": {
        "name": "type-let-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          }
        ]
      },
      "90": {
        "name": "type-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "91": {
        "name": "type-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "92": {
        "name": "contract-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "contract-stmt_I2"
          }
        ]
      },
      "93": {
        "name": "contract-stmt_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "94": {
        "name": "contract-stmt_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann"
          }
        ]
      },
      "95": {
        "name": "fun-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FUN"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "fun-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "96": {
        "name": "fun-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "97": {
        "name": "fun-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "98": {
        "name": "fun-header",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "99": {
        "name": "ty-params",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_opt"
          }
        ]
      },
      "100": {
        "name": "ty-params_I0_opt",
        "position": 0,
        "symbols": []
      },
      "101": {
        "name": "ty-params_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0"
          }
        ]
      },
      "102": {
        "name": "ty-params_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I2"
          }
        ]
      },
      "103": {
        "name": "ty-params_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LANGLE"
          }
        ]
      },
      "104": {
        "name": "ty-params_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "105": {
        "name": "ty-params_I0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "106": {
        "name": "ty-params_I0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "107": {
        "name": "args",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I0"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "108": {
        "name": "args_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "109": {
        "name": "args_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "110": {
        "name": "args_I1_opt",
        "position": 0,
        "symbols": []
      },
      "111": {
        "name": "args_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1"
          }
        ]
      },
      "112": {
        "name": "args_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "113": {
        "name": "args_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "114": {
        "name": "args_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1"
          }
        ]
      },
      "115": {
        "name": "args_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "116": {
        "name": "return-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0_opt"
          }
        ]
      },
      "117": {
        "name": "return-ann_I0_opt",
        "position": 0,
        "symbols": []
      },
      "118": {
        "name": "return-ann_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0"
          }
        ]
      },
      "119": {
        "name": "return-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "120": {
        "name": "doc-string",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0_opt"
          }
        ]
      },
      "121": {
        "name": "doc-string_I0_opt",
        "position": 0,
        "symbols": []
      },
      "122": {
        "name": "doc-string_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0"
          }
        ]
      },
      "123": {
        "name": "doc-string_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DOC"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "124": {
        "name": "where-clause",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0_opt"
          }
        ]
      },
      "125": {
        "name": "where-clause_I0_opt",
        "position": 0,
        "symbols": []
      },
      "126": {
        "name": "where-clause_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0"
          }
        ]
      },
      "127": {
        "name": "where-clause_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "128": {
        "name": "check-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECK"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "129": {
        "name": "check-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "130": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECKCOLON"
          }
        ]
      },
      "131": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLESCOLON"
          }
        ]
      },
      "132": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "133": {
        "name": "check-test_A0_I2_opt",
        "position": 0,
        "symbols": []
      },
      "134": {
        "name": "check-test_A0_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2"
          }
        ]
      },
      "135": {
        "name": "check-test_A0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_I1"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "136": {
        "name": "check-test_A0_I2_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "137": {
        "name": "check-test_A0_I2_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "138": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op-postfix"
          }
        ]
      },
      "139": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "140": {
        "name": "data-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DATA"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I4_opt"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-sharing"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "141": {
        "name": "data-expr_I4_opt",
        "position": 0,
        "symbols": []
      },
      "142": {
        "name": "data-expr_I4_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I4"
          }
        ]
      },
      "143": {
        "name": "data-expr_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "first-data-variant"
          }
        ]
      },
      "144": {
        "name": "data-expr_I5_star",
        "position": 0,
        "symbols": []
      },
      "145": {
        "name": "data-expr_I5_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5"
          }
        ]
      },
      "146": {
        "name": "data-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-variant"
          }
        ]
      },
      "147": {
        "name": "variant-constructor",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "variant-members"
          }
        ]
      },
      "148": {
        "name": "first-data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "149": {
        "name": "first-data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "150": {
        "name": "data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "151": {
        "name": "data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "152": {
        "name": "variant-members",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "153": {
        "name": "variant-members_I1_opt",
        "position": 0,
        "symbols": []
      },
      "154": {
        "name": "variant-members_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1"
          }
        ]
      },
      "155": {
        "name": "variant-members_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "156": {
        "name": "variant-members_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "157": {
        "name": "variant-members_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1"
          }
        ]
      },
      "158": {
        "name": "variant-members_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "variant-member"
          }
        ]
      },
      "159": {
        "name": "variant-member",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "160": {
        "name": "variant-member_I0_opt",
        "position": 0,
        "symbols": []
      },
      "161": {
        "name": "variant-member_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0"
          }
        ]
      },
      "162": {
        "name": "variant-member_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "163": {
        "name": "data-with",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0_opt"
          }
        ]
      },
      "164": {
        "name": "data-with_I0_opt",
        "position": 0,
        "symbols": []
      },
      "165": {
        "name": "data-with_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0"
          }
        ]
      },
      "166": {
        "name": "data-with_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WITH"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "167": {
        "name": "data-sharing",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0_opt"
          }
        ]
      },
      "168": {
        "name": "data-sharing_I0_opt",
        "position": 0,
        "symbols": []
      },
      "169": {
        "name": "data-sharing_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0"
          }
        ]
      },
      "170": {
        "name": "data-sharing_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SHARING"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "171": {
        "name": "var-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "VAR"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "172": {
        "name": "rec-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REC"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "173": {
        "name": "assign-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONEQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "174": {
        "name": "when-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WHEN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "when-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "175": {
        "name": "when-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "176": {
        "name": "when-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "177": {
        "name": "binop-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "178": {
        "name": "binop-expr_I1_star",
        "position": 0,
        "symbols": []
      },
      "179": {
        "name": "binop-expr_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1"
          }
        ]
      },
      "180": {
        "name": "binop-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "181": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PLUS"
          }
        ]
      },
      "182": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DASH"
          }
        ]
      },
      "183": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "184": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SLASH"
          }
        ]
      },
      "185": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LEQ"
          }
        ]
      },
      "186": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GEQ"
          }
        ]
      },
      "187": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALEQUAL"
          }
        ]
      },
      "188": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SPACESHIP"
          }
        ]
      },
      "189": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALTILDE"
          }
        ]
      },
      "190": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEQ"
          }
        ]
      },
      "191": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "192": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "193": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "AND"
          }
        ]
      },
      "194": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "OR"
          }
        ]
      },
      "195": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CARET"
          }
        ]
      },
      "196": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IS"
          }
        ]
      },
      "197": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALEQUAL"
          }
        ]
      },
      "198": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALTILDE"
          }
        ]
      },
      "199": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISSPACESHIP"
          }
        ]
      },
      "200": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISROUGHLY"
          }
        ]
      },
      "201": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOT"
          }
        ]
      },
      "202": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALEQUAL"
          }
        ]
      },
      "203": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALTILDE"
          }
        ]
      },
      "204": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTSPACESHIP"
          }
        ]
      },
      "205": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISES"
          }
        ]
      },
      "206": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESOTHER"
          }
        ]
      },
      "207": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIES"
          }
        ]
      },
      "208": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIESNOT"
          }
        ]
      },
      "209": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESSATISFIES"
          }
        ]
      },
      "210": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESVIOLATES"
          }
        ]
      },
      "211": {
        "name": "check-op-postfix",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESNOT"
          }
        ]
      },
      "212": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr"
          }
        ]
      },
      "213": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "214": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prim-expr"
          }
        ]
      },
      "215": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "lambda-expr"
          }
        ]
      },
      "216": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "method-expr"
          }
        ]
      },
      "217": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-expr"
          }
        ]
      },
      "218": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-expr"
          }
        ]
      },
      "219": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-expr"
          }
        ]
      },
      "220": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-get"
          }
        ]
      },
      "221": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-expr"
          }
        ]
      },
      "222": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "template-expr"
          }
        ]
      },
      "223": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "get-bang-expr"
          }
        ]
      },
      "224": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "update-expr"
          }
        ]
      },
      "225": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "extend-expr"
          }
        ]
      },
      "226": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr"
          }
        ]
      },
      "227": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr"
          }
        ]
      },
      "228": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr"
          }
        ]
      },
      "229": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr"
          }
        ]
      },
      "230": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "user-block-expr"
          }
        ]
      },
      "231": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr"
          }
        ]
      },
      "232": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr"
          }
        ]
      },
      "233": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr"
          }
        ]
      },
      "234": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr"
          }
        ]
      },
      "235": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr"
          }
        ]
      },
      "236": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select"
          }
        ]
      },
      "237": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend"
          }
        ]
      },
      "238": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter"
          }
        ]
      },
      "239": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order"
          }
        ]
      },
      "240": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extract"
          }
        ]
      },
      "241": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update"
          }
        ]
      },
      "242": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-expr"
          }
        ]
      },
      "243": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr"
          }
        ]
      },
      "244": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-expr"
          }
        ]
      },
      "245": {
        "name": "template-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DOTDOTDOT"
          }
        ]
      },
      "246": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNTERMINATED-STRING"
          }
        ]
      },
      "247": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNTERMINATED-BLOCK-COMMENT"
          }
        ]
      },
      "248": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAD-OPER"
          }
        ]
      },
      "249": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAD-NUMBER"
          }
        ]
      },
      "250": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNKNOWN"
          }
        ]
      },
      "251": {
        "name": "paren-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "252": {
        "name": "paren-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "253": {
        "name": "paren-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "254": {
        "name": "id-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "255": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "num-expr"
          }
        ]
      },
      "256": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "frac-expr"
          }
        ]
      },
      "257": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bool-expr"
          }
        ]
      },
      "258": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "string-expr"
          }
        ]
      },
      "259": {
        "name": "num-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NUMBER"
          }
        ]
      },
      "260": {
        "name": "frac-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RATIONAL"
          }
        ]
      },
      "261": {
        "name": "bool-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TRUE"
          }
        ]
      },
      "262": {
        "name": "bool-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FALSE"
          }
        ]
      },
      "263": {
        "name": "string-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "264": {
        "name": "lambda-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LAM"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "265": {
        "name": "lambda-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "266": {
        "name": "lambda-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "267": {
        "name": "lambda-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "268": {
        "name": "method-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "method-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "269": {
        "name": "method-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "270": {
        "name": "method-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "271": {
        "name": "app-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "app-args"
          }
        ]
      },
      "272": {
        "name": "app-args",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "273": {
        "name": "opt-comma-binops",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_opt"
          }
        ]
      },
      "274": {
        "name": "opt-comma-binops_I0_opt",
        "position": 0,
        "symbols": []
      },
      "275": {
        "name": "opt-comma-binops_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0"
          }
        ]
      },
      "276": {
        "name": "opt-comma-binops_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1_star"
          }
        ]
      },
      "277": {
        "name": "opt-comma-binops_I0_I1_star",
        "position": 0,
        "symbols": []
      },
      "278": {
        "name": "opt-comma-binops_I0_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1"
          }
        ]
      },
      "279": {
        "name": "opt-comma-binops_I0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "280": {
        "name": "inst-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "281": {
        "name": "inst-expr_I3_star",
        "position": 0,
        "symbols": []
      },
      "282": {
        "name": "inst-expr_I3_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3"
          }
        ]
      },
      "283": {
        "name": "inst-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "284": {
        "name": "tuple-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "285": {
        "name": "tuple-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "286": {
        "name": "tuple-fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "287": {
        "name": "tuple-fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1"
          }
        ]
      },
      "288": {
        "name": "tuple-fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "289": {
        "name": "tuple-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "290": {
        "name": "tuple-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2"
          }
        ]
      },
      "291": {
        "name": "tuple-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "292": {
        "name": "tuple-get",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "NUMBER"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "293": {
        "name": "obj-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "294": {
        "name": "obj-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "295": {
        "name": "obj-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "296": {
        "name": "obj-fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "297": {
        "name": "obj-fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1"
          }
        ]
      },
      "298": {
        "name": "obj-fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "obj-field"
          }
        ]
      },
      "299": {
        "name": "obj-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "300": {
        "name": "obj-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I2"
          }
        ]
      },
      "301": {
        "name": "obj-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "302": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "303": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "304": {
        "name": "obj-field_A1_I2_opt",
        "position": 0,
        "symbols": []
      },
      "305": {
        "name": "obj-field_A1_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2"
          }
        ]
      },
      "306": {
        "name": "obj-field_A1_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "307": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A2_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "308": {
        "name": "obj-field_A2_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "309": {
        "name": "obj-field_A2_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "310": {
        "name": "fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "311": {
        "name": "fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "312": {
        "name": "fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1"
          }
        ]
      },
      "313": {
        "name": "fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "field"
          }
        ]
      },
      "314": {
        "name": "fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "315": {
        "name": "fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I2"
          }
        ]
      },
      "316": {
        "name": "fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "317": {
        "name": "field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "318": {
        "name": "field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "field_A1_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "319": {
        "name": "field_A1_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "320": {
        "name": "field_A1_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "321": {
        "name": "key",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "322": {
        "name": "construct-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "construct-modifier"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "323": {
        "name": "construct-modifier",
        "position": 0,
        "symbols": []
      },
      "324": {
        "name": "construct-modifier",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LAZY"
          }
        ]
      },
      "325": {
        "name": "table-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "table-rows"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "326": {
        "name": "table-headers",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_opt"
          }
        ]
      },
      "327": {
        "name": "table-headers_I0_opt",
        "position": 0,
        "symbols": []
      },
      "328": {
        "name": "table-headers_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0"
          }
        ]
      },
      "329": {
        "name": "table-headers_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-header"
          }
        ]
      },
      "330": {
        "name": "table-headers_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "331": {
        "name": "table-headers_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0"
          }
        ]
      },
      "332": {
        "name": "table-headers_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-header"
          }
        ]
      },
      "333": {
        "name": "list-table-header",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "334": {
        "name": "table-header",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "335": {
        "name": "table-header_I1_opt",
        "position": 0,
        "symbols": []
      },
      "336": {
        "name": "table-header_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header_I1"
          }
        ]
      },
      "337": {
        "name": "table-header_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "338": {
        "name": "table-rows",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_opt"
          }
        ]
      },
      "339": {
        "name": "table-rows_I0_opt",
        "position": 0,
        "symbols": []
      },
      "340": {
        "name": "table-rows_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0"
          }
        ]
      },
      "341": {
        "name": "table-rows_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "342": {
        "name": "table-rows_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "343": {
        "name": "table-rows_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0"
          }
        ]
      },
      "344": {
        "name": "table-rows_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "345": {
        "name": "table-row",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "346": {
        "name": "table-items",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_opt"
          }
        ]
      },
      "347": {
        "name": "table-items_I0_opt",
        "position": 0,
        "symbols": []
      },
      "348": {
        "name": "table-items_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0"
          }
        ]
      },
      "349": {
        "name": "table-items_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "350": {
        "name": "table-items_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "351": {
        "name": "table-items_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0"
          }
        ]
      },
      "352": {
        "name": "table-items_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-item"
          }
        ]
      },
      "353": {
        "name": "list-table-item",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "354": {
        "name": "reactor-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REACTOR"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "355": {
        "name": "dot-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "356": {
        "name": "bracket-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "357": {
        "name": "get-bang-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "358": {
        "name": "extend-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "359": {
        "name": "update-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "360": {
        "name": "if-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I5_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "361": {
        "name": "if-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "362": {
        "name": "if-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "363": {
        "name": "if-expr_I4_star",
        "position": 0,
        "symbols": []
      },
      "364": {
        "name": "if-expr_I4_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4"
          }
        ]
      },
      "365": {
        "name": "if-expr_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "else-if"
          }
        ]
      },
      "366": {
        "name": "if-expr_I5_opt",
        "position": 0,
        "symbols": []
      },
      "367": {
        "name": "if-expr_I5_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I5"
          }
        ]
      },
      "368": {
        "name": "if-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "369": {
        "name": "else-if",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "370": {
        "name": "if-pipe-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ASK"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "371": {
        "name": "if-pipe-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "372": {
        "name": "if-pipe-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "373": {
        "name": "if-pipe-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "374": {
        "name": "if-pipe-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2"
          }
        ]
      },
      "375": {
        "name": "if-pipe-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-branch"
          }
        ]
      },
      "376": {
        "name": "if-pipe-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "377": {
        "name": "if-pipe-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3"
          }
        ]
      },
      "378": {
        "name": "if-pipe-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "379": {
        "name": "if-pipe-branch",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "380": {
        "name": "cases-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "381": {
        "name": "cases-binding_I0_opt",
        "position": 0,
        "symbols": []
      },
      "382": {
        "name": "cases-binding_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0"
          }
        ]
      },
      "383": {
        "name": "cases-binding_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "384": {
        "name": "cases-args",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "385": {
        "name": "cases-args_I1_opt",
        "position": 0,
        "symbols": []
      },
      "386": {
        "name": "cases-args_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1"
          }
        ]
      },
      "387": {
        "name": "cases-args_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "388": {
        "name": "cases-args_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "389": {
        "name": "cases-args_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1"
          }
        ]
      },
      "390": {
        "name": "cases-args_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "cases-binding"
          }
        ]
      },
      "391": {
        "name": "cases-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CASES"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I5"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I7_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "392": {
        "name": "cases-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "393": {
        "name": "cases-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "394": {
        "name": "cases-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "395": {
        "name": "cases-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "396": {
        "name": "cases-expr_I6_star",
        "position": 0,
        "symbols": []
      },
      "397": {
        "name": "cases-expr_I6_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6"
          }
        ]
      },
      "398": {
        "name": "cases-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch"
          }
        ]
      },
      "399": {
        "name": "cases-expr_I7_opt",
        "position": 0,
        "symbols": []
      },
      "400": {
        "name": "cases-expr_I7_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I7"
          }
        ]
      },
      "401": {
        "name": "cases-expr_I7",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "402": {
        "name": "cases-branch",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "403": {
        "name": "cases-branch_I2_opt",
        "position": 0,
        "symbols": []
      },
      "404": {
        "name": "cases-branch_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch_I2"
          }
        ]
      },
      "405": {
        "name": "cases-branch_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args"
          }
        ]
      },
      "406": {
        "name": "for-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "407": {
        "name": "for-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FOR"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I6"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "408": {
        "name": "for-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "409": {
        "name": "for-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3"
          }
        ]
      },
      "410": {
        "name": "for-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "411": {
        "name": "for-expr_I3_I1_star",
        "position": 0,
        "symbols": []
      },
      "412": {
        "name": "for-expr_I3_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1"
          }
        ]
      },
      "413": {
        "name": "for-expr_I3_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "for-bind"
          }
        ]
      },
      "414": {
        "name": "for-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "415": {
        "name": "for-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "416": {
        "name": "column-order",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "column-order_I1"
          }
        ]
      },
      "417": {
        "name": "column-order_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ASCENDING"
          }
        ]
      },
      "418": {
        "name": "column-order_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DESCENDING"
          }
        ]
      },
      "419": {
        "name": "table-select",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-SELECT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "420": {
        "name": "table-select_I2_star",
        "position": 0,
        "symbols": []
      },
      "421": {
        "name": "table-select_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2"
          }
        ]
      },
      "422": {
        "name": "table-select_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "423": {
        "name": "table-filter",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-FILTER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "424": {
        "name": "table-filter_I2_opt",
        "position": 0,
        "symbols": []
      },
      "425": {
        "name": "table-filter_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2"
          }
        ]
      },
      "426": {
        "name": "table-filter_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "427": {
        "name": "table-filter_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "428": {
        "name": "table-filter_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2"
          }
        ]
      },
      "429": {
        "name": "table-filter_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "430": {
        "name": "table-order",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-ORDER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "431": {
        "name": "table-extract",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTRACT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "432": {
        "name": "table-update",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-UPDATE"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "433": {
        "name": "table-update_I2_opt",
        "position": 0,
        "symbols": []
      },
      "434": {
        "name": "table-update_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2"
          }
        ]
      },
      "435": {
        "name": "table-update_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "436": {
        "name": "table-update_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "437": {
        "name": "table-update_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2"
          }
        ]
      },
      "438": {
        "name": "table-update_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "439": {
        "name": "table-extend",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTEND"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "440": {
        "name": "table-extend_I2_opt",
        "position": 0,
        "symbols": []
      },
      "441": {
        "name": "table-extend_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2"
          }
        ]
      },
      "442": {
        "name": "table-extend_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "443": {
        "name": "table-extend_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "444": {
        "name": "table-extend_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2"
          }
        ]
      },
      "445": {
        "name": "table-extend_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "446": {
        "name": "table-extend-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "447": {
        "name": "table-extend-fields_I0_star",
        "position": 0,
        "symbols": []
      },
      "448": {
        "name": "table-extend-fields_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0"
          }
        ]
      },
      "449": {
        "name": "table-extend-fields_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-extend-field"
          }
        ]
      },
      "450": {
        "name": "table-extend-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "451": {
        "name": "table-extend-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2"
          }
        ]
      },
      "452": {
        "name": "table-extend-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "453": {
        "name": "list-table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "454": {
        "name": "table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "455": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 0,
        "symbols": []
      },
      "456": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1"
          }
        ]
      },
      "457": {
        "name": "table-extend-field_A0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "458": {
        "name": "table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "OF"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "459": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 0,
        "symbols": []
      },
      "460": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1"
          }
        ]
      },
      "461": {
        "name": "table-extend-field_A1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "462": {
        "name": "load-table-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LOAD-TABLE"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "463": {
        "name": "load-table-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "464": {
        "name": "load-table-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3"
          }
        ]
      },
      "465": {
        "name": "load-table-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs"
          }
        ]
      },
      "466": {
        "name": "load-table-specs",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "467": {
        "name": "load-table-specs_I0_star",
        "position": 0,
        "symbols": []
      },
      "468": {
        "name": "load-table-specs_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0"
          }
        ]
      },
      "469": {
        "name": "load-table-specs_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "470": {
        "name": "load-table-spec",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SOURCECOLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "471": {
        "name": "load-table-spec",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SANITIZE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "472": {
        "name": "user-block-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "473": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "474": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "475": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann"
          }
        ]
      },
      "476": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann"
          }
        ]
      },
      "477": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "pred-ann"
          }
        ]
      },
      "478": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "479": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann"
          }
        ]
      },
      "480": {
        "name": "name-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "481": {
        "name": "record-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "482": {
        "name": "record-ann_I1_opt",
        "position": 0,
        "symbols": []
      },
      "483": {
        "name": "record-ann_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1"
          }
        ]
      },
      "484": {
        "name": "record-ann_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1_star"
          }
        ]
      },
      "485": {
        "name": "record-ann_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "486": {
        "name": "record-ann_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1"
          }
        ]
      },
      "487": {
        "name": "record-ann_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann-field"
          }
        ]
      },
      "488": {
        "name": "ann-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "489": {
        "name": "tuple-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "490": {
        "name": "tuple-ann_I2_star",
        "position": 0,
        "symbols": []
      },
      "491": {
        "name": "tuple-ann_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2"
          }
        ]
      },
      "492": {
        "name": "tuple-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "493": {
        "name": "tuple-ann_I3_opt",
        "position": 0,
        "symbols": []
      },
      "494": {
        "name": "tuple-ann_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3"
          }
        ]
      },
      "495": {
        "name": "tuple-ann_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "496": {
        "name": "noparen-arrow-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "497": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 0,
        "symbols": []
      },
      "498": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0"
          }
        ]
      },
      "499": {
        "name": "noparen-arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "500": {
        "name": "arrow-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I0"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "501": {
        "name": "arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "502": {
        "name": "arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "503": {
        "name": "arrow-ann_I1_opt",
        "position": 0,
        "symbols": []
      },
      "504": {
        "name": "arrow-ann_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1"
          }
        ]
      },
      "505": {
        "name": "arrow-ann_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "506": {
        "name": "app-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I0"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "507": {
        "name": "app-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "508": {
        "name": "app-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "509": {
        "name": "comma-anns",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "510": {
        "name": "comma-anns_I1_star",
        "position": 0,
        "symbols": []
      },
      "511": {
        "name": "comma-anns_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1"
          }
        ]
      },
      "512": {
        "name": "comma-anns_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "513": {
        "name": "pred-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "pred-ann_I2"
          },
          {
            "type": "Nonterm",
            "name": "id-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "514": {
        "name": "pred-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "515": {
        "name": "pred-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "516": {
        "name": "dot-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "517": {
        "name": "START",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "program"
          }
        ]
      },
      "789": {
        "name": "program",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "876": {
        "name": "prelude",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "1139": {
        "name": "prelude_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0"
          }
        ]
      },
      "1185": {
        "name": "prelude_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-stmt"
          }
        ]
      },
      "4255": {
        "name": "program",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "4257": {
        "name": "block",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          }
        ]
      },
      "8712": {
        "name": "prelude",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "8843": {
        "name": "prelude_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I1"
          }
        ]
      },
      "8888": {
        "name": "prelude_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-types-stmt"
          }
        ]
      },
      "9069": {
        "name": "id-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "9108": {
        "name": "string-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "9191": {
        "name": "provide-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "9237": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-expr"
          }
        ]
      },
      "9239": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-expr"
          }
        ]
      },
      "9241": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "9243": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fun-expr"
          }
        ]
      },
      "9245": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr"
          }
        ]
      },
      "9247": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "when-expr"
          }
        ]
      },
      "9249": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "9251": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rec-expr"
          }
        ]
      },
      "9253": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "assign-expr"
          }
        ]
      },
      "9255": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test"
          }
        ]
      },
      "9257": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr"
          }
        ]
      },
      "9259": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "contract-stmt"
          }
        ]
      },
      "9269": {
        "name": "check-test",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "9739": {
        "name": "toplevel-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "9741": {
        "name": "binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "9743": {
        "name": "binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding"
          }
        ]
      },
      "10078": {
        "name": "name-binding_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0"
          }
        ]
      },
      "10080": {
        "name": "name-binding_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SHADOW"
          }
        ]
      },
      "10082": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr"
          }
        ]
      },
      "10206": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr"
          }
        ]
      },
      "10280": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr"
          }
        ]
      },
      "10368": {
        "name": "paren-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "10403": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECKCOLON"
          }
        ]
      },
      "10446": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLESCOLON"
          }
        ]
      },
      "10489": {
        "name": "paren-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "10605": {
        "name": "binop-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "10982": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr"
          }
        ]
      },
      "11019": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "11056": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prim-expr"
          }
        ]
      },
      "11093": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "lambda-expr"
          }
        ]
      },
      "11130": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "method-expr"
          }
        ]
      },
      "11167": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-expr"
          }
        ]
      },
      "11204": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-expr"
          }
        ]
      },
      "11241": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-expr"
          }
        ]
      },
      "11278": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-get"
          }
        ]
      },
      "11315": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-expr"
          }
        ]
      },
      "11352": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "template-expr"
          }
        ]
      },
      "11389": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "get-bang-expr"
          }
        ]
      },
      "11426": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "update-expr"
          }
        ]
      },
      "11463": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "extend-expr"
          }
        ]
      },
      "11500": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr"
          }
        ]
      },
      "11537": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr"
          }
        ]
      },
      "11574": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr"
          }
        ]
      },
      "11611": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr"
          }
        ]
      },
      "11648": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "user-block-expr"
          }
        ]
      },
      "11685": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr"
          }
        ]
      },
      "11722": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr"
          }
        ]
      },
      "11759": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select"
          }
        ]
      },
      "11796": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend"
          }
        ]
      },
      "11833": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter"
          }
        ]
      },
      "11870": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order"
          }
        ]
      },
      "11907": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extract"
          }
        ]
      },
      "11944": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update"
          }
        ]
      },
      "11981": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-expr"
          }
        ]
      },
      "12018": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr"
          }
        ]
      },
      "12055": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-expr"
          }
        ]
      },
      "12092": {
        "name": "template-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DOTDOTDOT"
          }
        ]
      },
      "12243": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "num-expr"
          }
        ]
      },
      "12280": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "frac-expr"
          }
        ]
      },
      "12317": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bool-expr"
          }
        ]
      },
      "12354": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "string-expr"
          }
        ]
      },
      "12391": {
        "name": "num-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NUMBER"
          }
        ]
      },
      "12428": {
        "name": "frac-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RATIONAL"
          }
        ]
      },
      "12465": {
        "name": "bool-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "TRUE"
          }
        ]
      },
      "12502": {
        "name": "bool-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "FALSE"
          }
        ]
      },
      "13457": {
        "name": "block_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "stmt"
          }
        ]
      },
      "13500": {
        "name": "block_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "block_I0"
          }
        ]
      },
      "17911": {
        "name": "prelude",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "18175": {
        "name": "provide-types-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "18220": {
        "name": "provide-types-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "18396": {
        "name": "provide-stmt",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Nonterm",
            "name": "stmt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "18544": {
        "name": "check-test",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op-postfix"
          }
        ]
      },
      "18546": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "IS"
          }
        ]
      },
      "18578": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALEQUAL"
          }
        ]
      },
      "18610": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALTILDE"
          }
        ]
      },
      "18642": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISSPACESHIP"
          }
        ]
      },
      "18674": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISROUGHLY"
          }
        ]
      },
      "18706": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOT"
          }
        ]
      },
      "18738": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALEQUAL"
          }
        ]
      },
      "18770": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALTILDE"
          }
        ]
      },
      "18802": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTSPACESHIP"
          }
        ]
      },
      "18834": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISES"
          }
        ]
      },
      "18866": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESOTHER"
          }
        ]
      },
      "18898": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIES"
          }
        ]
      },
      "18930": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIESNOT"
          }
        ]
      },
      "18962": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESSATISFIES"
          }
        ]
      },
      "18994": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESVIOLATES"
          }
        ]
      },
      "19026": {
        "name": "check-op-postfix",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESNOT"
          }
        ]
      },
      "19028": {
        "name": "key",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "19048": {
        "name": "tuple-fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "19079": {
        "name": "obj-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "19255": {
        "name": "ty-params",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_opt"
          }
        ]
      },
      "19258": {
        "name": "ty-params_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0"
          }
        ]
      },
      "19266": {
        "name": "ty-params_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LANGLE"
          }
        ]
      },
      "19268": {
        "name": "ty-params_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "19461": {
        "name": "obj-fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "19498": {
        "name": "name-binding",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "19503": {
        "name": "let-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "19507": {
        "name": "let-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "19649": {
        "name": "type-let-bind",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-bind"
          }
        ]
      },
      "19653": {
        "name": "type-let-bind",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-bind"
          }
        ]
      },
      "20051": {
        "name": "binop-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "20584": {
        "name": "app-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "app-args"
          }
        ]
      },
      "21124": {
        "name": "construct-modifier",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LAZY"
          }
        ]
      },
      "21198": {
        "name": "table-headers",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_opt"
          }
        ]
      },
      "21201": {
        "name": "table-headers_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0"
          }
        ]
      },
      "21381": {
        "name": "if-pipe-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "21384": {
        "name": "if-pipe-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "21428": {
        "name": "cases-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "21433": {
        "name": "cases-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "21883": {
        "name": "prelude_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2"
          }
        ]
      },
      "21928": {
        "name": "prelude_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt"
          }
        ]
      },
      "22337": {
        "name": "record-ann_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1"
          }
        ]
      },
      "22339": {
        "name": "record-ann_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1_star"
          }
        ]
      },
      "22345": {
        "name": "name-ann",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "22357": {
        "name": "arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "22363": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "22368": {
        "name": "contract-stmt_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "22370": {
        "name": "comma-anns",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "22418": {
        "name": "contract-stmt",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "contract-stmt_I2"
          }
        ]
      },
      "22420": {
        "name": "contract-stmt_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann"
          }
        ]
      },
      "22422": {
        "name": "arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "22428": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "22429": {
        "name": "app-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "22435": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann"
          }
        ]
      },
      "22440": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann"
          }
        ]
      },
      "22445": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "pred-ann"
          }
        ]
      },
      "22450": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "22451": {
        "name": "app-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "22457": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann"
          }
        ]
      },
      "22464": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0"
          }
        ]
      },
      "22466": {
        "name": "noparen-arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "22481": {
        "name": "assign-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONEQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "22490": {
        "name": "let-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "22494": {
        "name": "check-test_A0_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2"
          }
        ]
      },
      "22616": {
        "name": "args_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "22621": {
        "name": "fun-header",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "22647": {
        "name": "args_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "22652": {
        "name": "tuple-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "22685": {
        "name": "tuple-binding_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1"
          }
        ]
      },
      "22691": {
        "name": "lambda-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "22736": {
        "name": "lambda-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "22990": {
        "name": "comma-names",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "23022": {
        "name": "tuple-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "23059": {
        "name": "obj-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "23096": {
        "name": "obj-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "23109": {
        "name": "name-binding",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "23111": {
        "name": "name-binding_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I2"
          }
        ]
      },
      "23257": {
        "name": "user-block-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "23650": {
        "name": "check-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "23661": {
        "name": "when-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "23704": {
        "name": "when-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "23751": {
        "name": "opt-comma-binops_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1_star"
          }
        ]
      },
      "23858": {
        "name": "opt-comma-binops",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_opt"
          }
        ]
      },
      "23860": {
        "name": "opt-comma-binops_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0"
          }
        ]
      },
      "23931": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "23962": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "23993": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "24024": {
        "name": "binop-expr_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1"
          }
        ]
      },
      "24090": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PLUS"
          }
        ]
      },
      "24121": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DASH"
          }
        ]
      },
      "24152": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SLASH"
          }
        ]
      },
      "24183": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LEQ"
          }
        ]
      },
      "24214": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GEQ"
          }
        ]
      },
      "24245": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALEQUAL"
          }
        ]
      },
      "24276": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SPACESHIP"
          }
        ]
      },
      "24307": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALTILDE"
          }
        ]
      },
      "24338": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NEQ"
          }
        ]
      },
      "24369": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "AND"
          }
        ]
      },
      "24400": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "OR"
          }
        ]
      },
      "24431": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CARET"
          }
        ]
      },
      "24462": {
        "name": "dot-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "24576": {
        "name": "get-bang-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "24650": {
        "name": "paren-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "24730": {
        "name": "method-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "24775": {
        "name": "method-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "24931": {
        "name": "table-rows",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_opt"
          }
        ]
      },
      "24933": {
        "name": "table-rows_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0"
          }
        ]
      },
      "24942": {
        "name": "table-header",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "24955": {
        "name": "table-headers_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-header"
          }
        ]
      },
      "24960": {
        "name": "table-headers_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0"
          }
        ]
      },
      "24962": {
        "name": "table-headers_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-header"
          }
        ]
      },
      "25007": {
        "name": "fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "25013": {
        "name": "if-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "25058": {
        "name": "if-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "25385": {
        "name": "table-filter_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2"
          }
        ]
      },
      "25507": {
        "name": "table-update_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2"
          }
        ]
      },
      "25548": {
        "name": "table-extend_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2"
          }
        ]
      },
      "25603": {
        "name": "import-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "INCLUDE"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "25649": {
        "name": "import-name",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "25738": {
        "name": "import-source",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special"
          }
        ]
      },
      "25783": {
        "name": "import-source",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-name"
          }
        ]
      },
      "25928": {
        "name": "record-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "25973": {
        "name": "record-ann_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1_star"
          }
        ]
      },
      "25993": {
        "name": "comma-anns",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "26043": {
        "name": "arrow-ann_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "26050": {
        "name": "arrow-ann_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1"
          }
        ]
      },
      "26060": {
        "name": "newtype-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "26062": {
        "name": "check-test",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "26064": {
        "name": "check-test_A0_I2_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "26126": {
        "name": "check-test_A0_I2_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "26157": {
        "name": "fun-header",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "26160": {
        "name": "return-ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0_opt"
          }
        ]
      },
      "26163": {
        "name": "return-ann_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0"
          }
        ]
      },
      "26196": {
        "name": "args_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "26214": {
        "name": "args_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1"
          }
        ]
      },
      "26217": {
        "name": "tuple-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "26221": {
        "name": "tuple-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "26223": {
        "name": "tuple-fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1"
          }
        ]
      },
      "26226": {
        "name": "tuple-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2"
          }
        ]
      },
      "26230": {
        "name": "tuple-binding_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "26231": {
        "name": "tuple-binding_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "26236": {
        "name": "tuple-binding_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3"
          }
        ]
      },
      "26281": {
        "name": "doc-string",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0_opt"
          }
        ]
      },
      "26325": {
        "name": "doc-string_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0"
          }
        ]
      },
      "26413": {
        "name": "comma-names",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "26423": {
        "name": "ty-params_I0",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I2"
          }
        ]
      },
      "26426": {
        "name": "ty-params_I0_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "26429": {
        "name": "ty-params_I0_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "26437": {
        "name": "obj-field_A1_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2"
          }
        ]
      },
      "26531": {
        "name": "obj-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "26535": {
        "name": "obj-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "26537": {
        "name": "obj-fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1"
          }
        ]
      },
      "26540": {
        "name": "obj-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I2"
          }
        ]
      },
      "26542": {
        "name": "obj-field",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "26548": {
        "name": "name-binding_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "26602": {
        "name": "multi-let-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2"
          }
        ]
      },
      "26606": {
        "name": "multi-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "26649": {
        "name": "multi-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "26696": {
        "name": "letrec-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "26739": {
        "name": "letrec-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "26819": {
        "name": "letrec-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2"
          }
        ]
      },
      "26835": {
        "name": "type-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "26878": {
        "name": "type-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "26958": {
        "name": "type-let-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2"
          }
        ]
      },
      "26962": {
        "name": "fun-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "27007": {
        "name": "fun-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "27083": {
        "name": "var-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "VAR"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "27085": {
        "name": "rec-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "REC"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "27089": {
        "name": "opt-comma-binops_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1_star"
          }
        ]
      },
      "27096": {
        "name": "app-args",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "27176": {
        "name": "binop-expr_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "27520": {
        "name": "table-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "table-rows"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "27557": {
        "name": "table-rows_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "27558": {
        "name": "table-rows_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "27561": {
        "name": "table-rows_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0"
          }
        ]
      },
      "27563": {
        "name": "table-row",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "27652": {
        "name": "table-header",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "27656": {
        "name": "table-header_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header_I1"
          }
        ]
      },
      "27660": {
        "name": "list-table-header",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "27662": {
        "name": "reactor-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "REACTOR"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "27705": {
        "name": "fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "28091": {
        "name": "if-pipe-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2"
          }
        ]
      },
      "28094": {
        "name": "if-pipe-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-branch"
          }
        ]
      },
      "28097": {
        "name": "if-pipe-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3"
          }
        ]
      },
      "28144": {
        "name": "for-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "28187": {
        "name": "for-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3"
          }
        ]
      },
      "28229": {
        "name": "table-select_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2"
          }
        ]
      },
      "28269": {
        "name": "table-filter_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "28357": {
        "name": "table-update_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "28404": {
        "name": "table-extend_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "28487": {
        "name": "load-table-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3"
          }
        ]
      },
      "28489": {
        "name": "load-table-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs"
          }
        ]
      },
      "28643": {
        "name": "ann-field",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "28649": {
        "name": "record-ann_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1"
          }
        ]
      },
      "28652": {
        "name": "dot-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "28658": {
        "name": "pred-ann_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "28660": {
        "name": "pred-ann_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "28670": {
        "name": "comma-anns_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1"
          }
        ]
      },
      "28690": {
        "name": "noparen-arrow-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "28705": {
        "name": "type-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "28744": {
        "name": "return-ann_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "28768": {
        "name": "args_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "28775": {
        "name": "args",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I0"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "28779": {
        "name": "tuple-fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "28782": {
        "name": "tuple-binding",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "28965": {
        "name": "doc-string_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "DOC"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "29013": {
        "name": "comma-names_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1"
          }
        ]
      },
      "29017": {
        "name": "obj-field_A1_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "29022": {
        "name": "obj-field_A2_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "29067": {
        "name": "obj-field_A2_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "29115": {
        "name": "obj-fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "obj-field"
          }
        ]
      },
      "29119": {
        "name": "multi-let-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          }
        ]
      },
      "29160": {
        "name": "letrec-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "29201": {
        "name": "type-bind",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "29205": {
        "name": "newtype-bind",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "29209": {
        "name": "type-let-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          }
        ]
      },
      "29252": {
        "name": "check-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECK"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "29254": {
        "name": "first-data-variant",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "29296": {
        "name": "data-expr_I4_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I4"
          }
        ]
      },
      "29301": {
        "name": "data-expr_I4",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "first-data-variant"
          }
        ]
      },
      "29306": {
        "name": "first-data-variant",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "29311": {
        "name": "when-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "WHEN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "when-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "29316": {
        "name": "opt-comma-binops_I0_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1"
          }
        ]
      },
      "29322": {
        "name": "inst-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "29359": {
        "name": "inst-expr_I3_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3"
          }
        ]
      },
      "29362": {
        "name": "extend-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "29399": {
        "name": "tuple-get",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "NUMBER"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "29436": {
        "name": "update-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "29673": {
        "name": "table-row",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "29676": {
        "name": "table-items",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_opt"
          }
        ]
      },
      "29679": {
        "name": "table-items_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0"
          }
        ]
      },
      "29856": {
        "name": "table-header_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "29962": {
        "name": "field",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "29966": {
        "name": "fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "29970": {
        "name": "fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "29972": {
        "name": "fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1"
          }
        ]
      },
      "29975": {
        "name": "fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I2"
          }
        ]
      },
      "30101": {
        "name": "if-pipe-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "30112": {
        "name": "if-pipe-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "ASK"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "30193": {
        "name": "for-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "30274": {
        "name": "table-select_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "30314": {
        "name": "table-filter_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "30321": {
        "name": "column-order",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "column-order_I1"
          }
        ]
      },
      "30323": {
        "name": "column-order_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ASCENDING"
          }
        ]
      },
      "30325": {
        "name": "column-order_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DESCENDING"
          }
        ]
      },
      "30327": {
        "name": "table-order",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-ORDER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "30364": {
        "name": "table-extract",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTRACT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "30401": {
        "name": "table-update_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "30451": {
        "name": "table-extend_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "30505": {
        "name": "load-table-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LOAD-TABLE"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "30542": {
        "name": "load-table-specs",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "30543": {
        "name": "load-table-specs_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "30547": {
        "name": "load-table-specs_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0"
          }
        ]
      },
      "30759": {
        "name": "import-stmt",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "30804": {
        "name": "import-stmt",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "30849": {
        "name": "record-ann_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann-field"
          }
        ]
      },
      "30857": {
        "name": "comma-anns_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "30861": {
        "name": "tuple-ann_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "30870": {
        "name": "tuple-ann_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2"
          }
        ]
      },
      "30873": {
        "name": "tuple-ann_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3"
          }
        ]
      },
      "30880": {
        "name": "app-ann",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I0"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "30885": {
        "name": "check-test_A0_I2",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_I1"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "30921": {
        "name": "args_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1"
          }
        ]
      },
      "30926": {
        "name": "tuple-binding",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "30928": {
        "name": "tuple-binding_I5_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5"
          }
        ]
      },
      "30967": {
        "name": "where-clause",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0_opt"
          }
        ]
      },
      "30969": {
        "name": "where-clause_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0"
          }
        ]
      },
      "30971": {
        "name": "where-clause_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "30973": {
        "name": "comma-names_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "30977": {
        "name": "obj-field",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "30983": {
        "name": "multi-let-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LET"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31020": {
        "name": "letrec-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LETREC"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31057": {
        "name": "type-let-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE-LET"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31116": {
        "name": "variant-constructor",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "variant-members"
          }
        ]
      },
      "31122": {
        "name": "first-data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "31127": {
        "name": "data-with",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0_opt"
          }
        ]
      },
      "31132": {
        "name": "data-with_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0"
          }
        ]
      },
      "31178": {
        "name": "first-data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "31183": {
        "name": "opt-comma-binops_I0_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "31186": {
        "name": "inst-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31266": {
        "name": "construct-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "construct-modifier"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "31305": {
        "name": "table-items_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "31405": {
        "name": "table-items_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0"
          }
        ]
      },
      "31436": {
        "name": "table-items_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-item"
          }
        ]
      },
      "31480": {
        "name": "field_A1_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "31525": {
        "name": "field_A1_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "31573": {
        "name": "fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "field"
          }
        ]
      },
      "31613": {
        "name": "if-expr_I4_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4"
          }
        ]
      },
      "31617": {
        "name": "if-expr_I4",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "else-if"
          }
        ]
      },
      "31621": {
        "name": "if-expr_I5_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I5"
          }
        ]
      },
      "31623": {
        "name": "if-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "31629": {
        "name": "if-pipe-branch",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "31635": {
        "name": "if-pipe-expr_I3",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "31637": {
        "name": "cases-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "31640": {
        "name": "cases-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "31684": {
        "name": "for-bind",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "31690": {
        "name": "for-expr_I3_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1"
          }
        ]
      },
      "31814": {
        "name": "table-select",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-SELECT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31851": {
        "name": "table-filter",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-FILTER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31891": {
        "name": "table-filter_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2"
          }
        ]
      },
      "31897": {
        "name": "table-update_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2"
          }
        ]
      },
      "31900": {
        "name": "table-update",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-UPDATE"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31940": {
        "name": "table-extend_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2"
          }
        ]
      },
      "31943": {
        "name": "table-extend",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTEND"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31992": {
        "name": "table-extend-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "31999": {
        "name": "table-extend-fields_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0"
          }
        ]
      },
      "32001": {
        "name": "table-extend-fields_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-extend-field"
          }
        ]
      },
      "32029": {
        "name": "load-table-spec",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SOURCECOLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "32215": {
        "name": "pred-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "pred-ann_I2"
          },
          {
            "type": "Nonterm",
            "name": "id-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "32220": {
        "name": "tuple-ann_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "32223": {
        "name": "tuple-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "32228": {
        "name": "arrow-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I0"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "32233": {
        "name": "args_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "32236": {
        "name": "tuple-binding_I5",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "32238": {
        "name": "lambda-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "32275": {
        "name": "where-clause_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "32288": {
        "name": "variant-members_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1"
          }
        ]
      },
      "32290": {
        "name": "variant-members_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "32299": {
        "name": "variant-member_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0"
          }
        ]
      },
      "32303": {
        "name": "variant-member_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "32307": {
        "name": "data-with_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "WITH"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "32329": {
        "name": "data-expr_I5_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5"
          }
        ]
      },
      "32334": {
        "name": "data-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-variant"
          }
        ]
      },
      "32349": {
        "name": "data-sharing",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0_opt"
          }
        ]
      },
      "32352": {
        "name": "data-sharing_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0"
          }
        ]
      },
      "32358": {
        "name": "lambda-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "LAM"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32395": {
        "name": "method-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "method-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32432": {
        "name": "list-table-item",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "32466": {
        "name": "if-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "IF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I5_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32503": {
        "name": "if-expr_I5",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "32509": {
        "name": "if-pipe-branch",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "32666": {
        "name": "for-expr_I3_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "for-bind"
          }
        ]
      },
      "32669": {
        "name": "for-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "32712": {
        "name": "for-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "32792": {
        "name": "table-filter_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "32795": {
        "name": "table-update_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "32798": {
        "name": "table-extend_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "32808": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1"
          }
        ]
      },
      "32813": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1"
          }
        ]
      },
      "32815": {
        "name": "list-table-extend-field",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "32816": {
        "name": "table-extend-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "32819": {
        "name": "table-extend-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "32821": {
        "name": "table-extend-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2"
          }
        ]
      },
      "32843": {
        "name": "import-special",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "32888": {
        "name": "import-special_I3_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3"
          }
        ]
      },
      "32897": {
        "name": "fun-expr",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "FUN"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "fun-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32899": {
        "name": "variant-members",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "32905": {
        "name": "variant-members_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "32912": {
        "name": "variant-member",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "32917": {
        "name": "data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "32922": {
        "name": "data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "32927": {
        "name": "data-sharing_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SHARING"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "32933": {
        "name": "else-if",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "32979": {
        "name": "cases-expr_I6_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6"
          }
        ]
      },
      "32982": {
        "name": "cases-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch"
          }
        ]
      },
      "32985": {
        "name": "cases-expr_I7_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I7"
          }
        ]
      },
      "33024": {
        "name": "table-extend-field_A0_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "33025": {
        "name": "table-extend-field_A1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "33110": {
        "name": "load-table-spec",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "SANITIZE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "33114": {
        "name": "import-special_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "33117": {
        "name": "obj-field",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A2_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33123": {
        "name": "variant-members_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1"
          }
        ]
      },
      "33126": {
        "name": "data-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "DATA"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I4_opt"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-sharing"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33128": {
        "name": "data-variant",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "33133": {
        "name": "data-variant",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "33141": {
        "name": "else-if",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33154": {
        "name": "cases-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "CASES"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I5"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I7_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33191": {
        "name": "for-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "FOR"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I6"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33228": {
        "name": "table-extend-field",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "33311": {
        "name": "variant-members_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "variant-member"
          }
        ]
      },
      "33314": {
        "name": "field",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "field_A1_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33333": {
        "name": "cases-branch_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args"
          }
        ]
      },
      "33338": {
        "name": "cases-branch_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch_I2"
          }
        ]
      },
      "33340": {
        "name": "cases-expr_I7",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33353": {
        "name": "cases-binding_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "33357": {
        "name": "cases-args_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "33366": {
        "name": "cases-binding_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0"
          }
        ]
      },
      "33372": {
        "name": "cases-args_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1"
          }
        ]
      },
      "33374": {
        "name": "cases-branch",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33377": {
        "name": "cases-expr_I7",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33379": {
        "name": "table-extend-field",
        "position": 6,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "OF"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "33382": {
        "name": "cases-args_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "33389": {
        "name": "cases-binding",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "33392": {
        "name": "cases-args",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "33394": {
        "name": "cases-branch",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33400": {
        "name": "cases-args_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1"
          }
        ]
      },
      "33403": {
        "name": "cases-args_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "cases-binding"
          }
        ]
      }
    },
    "actionsByOldId": {
      "0": "Rule.defaultAction",
      "1": "Rule.defaultAction",
      "2": "Rule.Inline",
      "3": "Rule.Inline",
      "4": "Rule.Inline",
      "5": "Rule.Inline",
      "6": "Rule.Inline",
      "7": "Rule.Inline",
      "8": "Rule.Inline",
      "9": "Rule.ListSnoc(\"prelude_I2_star\", \"prelude_I2\", true)",
      "10": "Rule.Inline",
      "11": "Rule.defaultAction",
      "12": "Rule.defaultAction",
      "13": "Rule.defaultAction",
      "14": "Rule.defaultAction",
      "15": "Rule.defaultAction",
      "16": "Rule.defaultAction",
      "17": "Rule.Inline",
      "18": "Rule.ListSnoc(\"import-special_I3_star\", \"import-special_I3\", true)",
      "19": "Rule.Inline",
      "20": "Rule.defaultAction",
      "21": "Rule.defaultAction",
      "22": "Rule.defaultAction",
      "23": "Rule.defaultAction",
      "24": "Rule.defaultAction",
      "25": "Rule.defaultAction",
      "26": "Rule.Inline",
      "27": "Rule.ListSnoc(\"comma-names_I1_star\", \"comma-names_I1\", true)",
      "28": "Rule.Inline",
      "29": "Rule.defaultAction",
      "30": "Rule.Inline",
      "31": "Rule.ListSnoc(\"block_I0_star\", \"block_I0\", true)",
      "32": "Rule.Inline",
      "33": "Rule.defaultAction",
      "34": "Rule.defaultAction",
      "35": "Rule.defaultAction",
      "36": "Rule.defaultAction",
      "37": "Rule.defaultAction",
      "38": "Rule.defaultAction",
      "39": "Rule.defaultAction",
      "40": "Rule.defaultAction",
      "41": "Rule.defaultAction",
      "42": "Rule.defaultAction",
      "43": "Rule.defaultAction",
      "44": "Rule.defaultAction",
      "45": "Rule.defaultAction",
      "46": "Rule.defaultAction",
      "47": "Rule.defaultAction",
      "48": "Rule.defaultAction",
      "49": "Rule.defaultAction",
      "50": "Rule.defaultAction",
      "51": "Rule.Inline",
      "52": "Rule.ListSnoc(\"tuple-binding_I1_star\", \"tuple-binding_I1\", true)",
      "53": "Rule.Inline",
      "54": "Rule.Inline",
      "55": "Rule.Inline",
      "56": "Rule.Inline",
      "57": "Rule.Inline",
      "58": "Rule.Inline",
      "59": "Rule.Inline",
      "60": "Rule.defaultAction",
      "61": "Rule.Inline",
      "62": "Rule.Inline",
      "63": "Rule.Inline",
      "64": "Rule.Inline",
      "65": "Rule.Inline",
      "66": "Rule.Inline",
      "67": "Rule.defaultAction",
      "68": "Rule.defaultAction",
      "69": "Rule.Inline",
      "70": "Rule.ListSnoc(\"multi-let-expr_I2_star\", \"multi-let-expr_I2\", true)",
      "71": "Rule.Inline",
      "72": "Rule.Inline",
      "73": "Rule.Inline",
      "74": "Rule.defaultAction",
      "75": "Rule.defaultAction",
      "76": "Rule.defaultAction",
      "77": "Rule.Inline",
      "78": "Rule.ListSnoc(\"letrec-expr_I2_star\", \"letrec-expr_I2\", true)",
      "79": "Rule.Inline",
      "80": "Rule.Inline",
      "81": "Rule.Inline",
      "82": "Rule.defaultAction",
      "83": "Rule.defaultAction",
      "84": "Rule.defaultAction",
      "85": "Rule.defaultAction",
      "86": "Rule.defaultAction",
      "87": "Rule.Inline",
      "88": "Rule.ListSnoc(\"type-let-expr_I2_star\", \"type-let-expr_I2\", true)",
      "89": "Rule.Inline",
      "90": "Rule.Inline",
      "91": "Rule.Inline",
      "92": "Rule.defaultAction",
      "93": "Rule.Inline",
      "94": "Rule.Inline",
      "95": "Rule.defaultAction",
      "96": "Rule.Inline",
      "97": "Rule.Inline",
      "98": "Rule.defaultAction",
      "99": "Rule.defaultAction",
      "100": "Rule.Inline",
      "101": "Rule.Inline",
      "102": "Rule.Inline",
      "103": "Rule.Inline",
      "104": "Rule.Inline",
      "105": "Rule.Inline",
      "106": "Rule.Inline",
      "107": "Rule.defaultAction",
      "108": "Rule.Inline",
      "109": "Rule.Inline",
      "110": "Rule.Inline",
      "111": "Rule.Inline",
      "112": "Rule.Inline",
      "113": "Rule.Inline",
      "114": "Rule.ListSnoc(\"args_I1_I1_star\", \"args_I1_I1\", true)",
      "115": "Rule.Inline",
      "116": "Rule.defaultAction",
      "117": "Rule.Inline",
      "118": "Rule.Inline",
      "119": "Rule.Inline",
      "120": "Rule.defaultAction",
      "121": "Rule.Inline",
      "122": "Rule.Inline",
      "123": "Rule.Inline",
      "124": "Rule.defaultAction",
      "125": "Rule.Inline",
      "126": "Rule.Inline",
      "127": "Rule.Inline",
      "128": "Rule.defaultAction",
      "129": "Rule.defaultAction",
      "130": "Rule.Inline",
      "131": "Rule.Inline",
      "132": "Rule.defaultAction",
      "133": "Rule.Inline",
      "134": "Rule.Inline",
      "135": "Rule.Inline",
      "136": "Rule.Inline",
      "137": "Rule.Inline",
      "138": "Rule.defaultAction",
      "139": "Rule.defaultAction",
      "140": "Rule.defaultAction",
      "141": "Rule.Inline",
      "142": "Rule.Inline",
      "143": "Rule.Inline",
      "144": "Rule.Inline",
      "145": "Rule.ListSnoc(\"data-expr_I5_star\", \"data-expr_I5\", true)",
      "146": "Rule.Inline",
      "147": "Rule.defaultAction",
      "148": "Rule.defaultAction",
      "149": "Rule.defaultAction",
      "150": "Rule.defaultAction",
      "151": "Rule.defaultAction",
      "152": "Rule.defaultAction",
      "153": "Rule.Inline",
      "154": "Rule.Inline",
      "155": "Rule.Inline",
      "156": "Rule.Inline",
      "157": "Rule.ListSnoc(\"variant-members_I1_I1_star\", \"variant-members_I1_I1\", true)",
      "158": "Rule.Inline",
      "159": "Rule.defaultAction",
      "160": "Rule.Inline",
      "161": "Rule.Inline",
      "162": "Rule.Inline",
      "163": "Rule.defaultAction",
      "164": "Rule.Inline",
      "165": "Rule.Inline",
      "166": "Rule.Inline",
      "167": "Rule.defaultAction",
      "168": "Rule.Inline",
      "169": "Rule.Inline",
      "170": "Rule.Inline",
      "171": "Rule.defaultAction",
      "172": "Rule.defaultAction",
      "173": "Rule.defaultAction",
      "174": "Rule.defaultAction",
      "175": "Rule.Inline",
      "176": "Rule.Inline",
      "177": "Rule.defaultAction",
      "178": "Rule.Inline",
      "179": "Rule.ListSnoc(\"binop-expr_I1_star\", \"binop-expr_I1\", true)",
      "180": "Rule.Inline",
      "181": "Rule.defaultAction",
      "182": "Rule.defaultAction",
      "183": "Rule.defaultAction",
      "184": "Rule.defaultAction",
      "185": "Rule.defaultAction",
      "186": "Rule.defaultAction",
      "187": "Rule.defaultAction",
      "188": "Rule.defaultAction",
      "189": "Rule.defaultAction",
      "190": "Rule.defaultAction",
      "191": "Rule.defaultAction",
      "192": "Rule.defaultAction",
      "193": "Rule.defaultAction",
      "194": "Rule.defaultAction",
      "195": "Rule.defaultAction",
      "196": "Rule.defaultAction",
      "197": "Rule.defaultAction",
      "198": "Rule.defaultAction",
      "199": "Rule.defaultAction",
      "200": "Rule.defaultAction",
      "201": "Rule.defaultAction",
      "202": "Rule.defaultAction",
      "203": "Rule.defaultAction",
      "204": "Rule.defaultAction",
      "205": "Rule.defaultAction",
      "206": "Rule.defaultAction",
      "207": "Rule.defaultAction",
      "208": "Rule.defaultAction",
      "209": "Rule.defaultAction",
      "210": "Rule.defaultAction",
      "211": "Rule.defaultAction",
      "212": "Rule.defaultAction",
      "213": "Rule.defaultAction",
      "214": "Rule.defaultAction",
      "215": "Rule.defaultAction",
      "216": "Rule.defaultAction",
      "217": "Rule.defaultAction",
      "218": "Rule.defaultAction",
      "219": "Rule.defaultAction",
      "220": "Rule.defaultAction",
      "221": "Rule.defaultAction",
      "222": "Rule.defaultAction",
      "223": "Rule.defaultAction",
      "224": "Rule.defaultAction",
      "225": "Rule.defaultAction",
      "226": "Rule.defaultAction",
      "227": "Rule.defaultAction",
      "228": "Rule.defaultAction",
      "229": "Rule.defaultAction",
      "230": "Rule.defaultAction",
      "231": "Rule.defaultAction",
      "232": "Rule.defaultAction",
      "233": "Rule.defaultAction",
      "234": "Rule.defaultAction",
      "235": "Rule.defaultAction",
      "236": "Rule.defaultAction",
      "237": "Rule.defaultAction",
      "238": "Rule.defaultAction",
      "239": "Rule.defaultAction",
      "240": "Rule.defaultAction",
      "241": "Rule.defaultAction",
      "242": "Rule.defaultAction",
      "243": "Rule.defaultAction",
      "244": "Rule.defaultAction",
      "245": "Rule.defaultAction",
      "246": "Rule.defaultAction",
      "247": "Rule.defaultAction",
      "248": "Rule.defaultAction",
      "249": "Rule.defaultAction",
      "250": "Rule.defaultAction",
      "251": "Rule.defaultAction",
      "252": "Rule.Inline",
      "253": "Rule.Inline",
      "254": "Rule.defaultAction",
      "255": "Rule.defaultAction",
      "256": "Rule.defaultAction",
      "257": "Rule.defaultAction",
      "258": "Rule.defaultAction",
      "259": "Rule.defaultAction",
      "260": "Rule.defaultAction",
      "261": "Rule.defaultAction",
      "262": "Rule.defaultAction",
      "263": "Rule.defaultAction",
      "264": "Rule.defaultAction",
      "265": "Rule.Inline",
      "266": "Rule.Inline",
      "267": "Rule.defaultAction",
      "268": "Rule.defaultAction",
      "269": "Rule.Inline",
      "270": "Rule.Inline",
      "271": "Rule.defaultAction",
      "272": "Rule.defaultAction",
      "273": "Rule.defaultAction",
      "274": "Rule.Inline",
      "275": "Rule.Inline",
      "276": "Rule.Inline",
      "277": "Rule.Inline",
      "278": "Rule.ListSnoc(\"opt-comma-binops_I0_I1_star\", \"opt-comma-binops_I0_I1\", true)",
      "279": "Rule.Inline",
      "280": "Rule.defaultAction",
      "281": "Rule.Inline",
      "282": "Rule.ListSnoc(\"inst-expr_I3_star\", \"inst-expr_I3\", true)",
      "283": "Rule.Inline",
      "284": "Rule.defaultAction",
      "285": "Rule.defaultAction",
      "286": "Rule.Inline",
      "287": "Rule.ListSnoc(\"tuple-fields_I1_star\", \"tuple-fields_I1\", true)",
      "288": "Rule.Inline",
      "289": "Rule.Inline",
      "290": "Rule.Inline",
      "291": "Rule.Inline",
      "292": "Rule.defaultAction",
      "293": "Rule.defaultAction",
      "294": "Rule.defaultAction",
      "295": "Rule.defaultAction",
      "296": "Rule.Inline",
      "297": "Rule.ListSnoc(\"obj-fields_I1_star\", \"obj-fields_I1\", true)",
      "298": "Rule.Inline",
      "299": "Rule.Inline",
      "300": "Rule.Inline",
      "301": "Rule.Inline",
      "302": "Rule.defaultAction",
      "303": "Rule.defaultAction",
      "304": "Rule.Inline",
      "305": "Rule.Inline",
      "306": "Rule.Inline",
      "307": "Rule.defaultAction",
      "308": "Rule.Inline",
      "309": "Rule.Inline",
      "310": "Rule.defaultAction",
      "311": "Rule.Inline",
      "312": "Rule.ListSnoc(\"fields_I1_star\", \"fields_I1\", true)",
      "313": "Rule.Inline",
      "314": "Rule.Inline",
      "315": "Rule.Inline",
      "316": "Rule.Inline",
      "317": "Rule.defaultAction",
      "318": "Rule.defaultAction",
      "319": "Rule.Inline",
      "320": "Rule.Inline",
      "321": "Rule.defaultAction",
      "322": "Rule.defaultAction",
      "323": "Rule.defaultAction",
      "324": "Rule.defaultAction",
      "325": "Rule.defaultAction",
      "326": "Rule.defaultAction",
      "327": "Rule.Inline",
      "328": "Rule.Inline",
      "329": "Rule.Inline",
      "330": "Rule.Inline",
      "331": "Rule.ListSnoc(\"table-headers_I0_I0_star\", \"table-headers_I0_I0\", true)",
      "332": "Rule.Inline",
      "333": "Rule.defaultAction",
      "334": "Rule.defaultAction",
      "335": "Rule.Inline",
      "336": "Rule.Inline",
      "337": "Rule.Inline",
      "338": "Rule.defaultAction",
      "339": "Rule.Inline",
      "340": "Rule.Inline",
      "341": "Rule.Inline",
      "342": "Rule.Inline",
      "343": "Rule.ListSnoc(\"table-rows_I0_I0_star\", \"table-rows_I0_I0\", true)",
      "344": "Rule.Inline",
      "345": "Rule.defaultAction",
      "346": "Rule.defaultAction",
      "347": "Rule.Inline",
      "348": "Rule.Inline",
      "349": "Rule.Inline",
      "350": "Rule.Inline",
      "351": "Rule.ListSnoc(\"table-items_I0_I0_star\", \"table-items_I0_I0\", true)",
      "352": "Rule.Inline",
      "353": "Rule.defaultAction",
      "354": "Rule.defaultAction",
      "355": "Rule.defaultAction",
      "356": "Rule.defaultAction",
      "357": "Rule.defaultAction",
      "358": "Rule.defaultAction",
      "359": "Rule.defaultAction",
      "360": "Rule.defaultAction",
      "361": "Rule.Inline",
      "362": "Rule.Inline",
      "363": "Rule.Inline",
      "364": "Rule.ListSnoc(\"if-expr_I4_star\", \"if-expr_I4\", true)",
      "365": "Rule.Inline",
      "366": "Rule.Inline",
      "367": "Rule.Inline",
      "368": "Rule.Inline",
      "369": "Rule.defaultAction",
      "370": "Rule.defaultAction",
      "371": "Rule.Inline",
      "372": "Rule.Inline",
      "373": "Rule.Inline",
      "374": "Rule.ListSnoc(\"if-pipe-expr_I2_star\", \"if-pipe-expr_I2\", true)",
      "375": "Rule.Inline",
      "376": "Rule.Inline",
      "377": "Rule.Inline",
      "378": "Rule.Inline",
      "379": "Rule.defaultAction",
      "380": "Rule.defaultAction",
      "381": "Rule.Inline",
      "382": "Rule.Inline",
      "383": "Rule.Inline",
      "384": "Rule.defaultAction",
      "385": "Rule.Inline",
      "386": "Rule.Inline",
      "387": "Rule.Inline",
      "388": "Rule.Inline",
      "389": "Rule.ListSnoc(\"cases-args_I1_I1_star\", \"cases-args_I1_I1\", true)",
      "390": "Rule.Inline",
      "391": "Rule.defaultAction",
      "392": "Rule.Inline",
      "393": "Rule.Inline",
      "394": "Rule.Inline",
      "395": "Rule.Inline",
      "396": "Rule.Inline",
      "397": "Rule.ListSnoc(\"cases-expr_I6_star\", \"cases-expr_I6\", true)",
      "398": "Rule.Inline",
      "399": "Rule.Inline",
      "400": "Rule.Inline",
      "401": "Rule.Inline",
      "402": "Rule.defaultAction",
      "403": "Rule.Inline",
      "404": "Rule.Inline",
      "405": "Rule.Inline",
      "406": "Rule.defaultAction",
      "407": "Rule.defaultAction",
      "408": "Rule.Inline",
      "409": "Rule.Inline",
      "410": "Rule.Inline",
      "411": "Rule.Inline",
      "412": "Rule.ListSnoc(\"for-expr_I3_I1_star\", \"for-expr_I3_I1\", true)",
      "413": "Rule.Inline",
      "414": "Rule.Inline",
      "415": "Rule.Inline",
      "416": "Rule.defaultAction",
      "417": "Rule.Inline",
      "418": "Rule.Inline",
      "419": "Rule.defaultAction",
      "420": "Rule.Inline",
      "421": "Rule.ListSnoc(\"table-select_I2_star\", \"table-select_I2\", true)",
      "422": "Rule.Inline",
      "423": "Rule.defaultAction",
      "424": "Rule.Inline",
      "425": "Rule.Inline",
      "426": "Rule.Inline",
      "427": "Rule.Inline",
      "428": "Rule.ListSnoc(\"table-filter_I2_I2_star\", \"table-filter_I2_I2\", true)",
      "429": "Rule.Inline",
      "430": "Rule.defaultAction",
      "431": "Rule.defaultAction",
      "432": "Rule.defaultAction",
      "433": "Rule.Inline",
      "434": "Rule.Inline",
      "435": "Rule.Inline",
      "436": "Rule.Inline",
      "437": "Rule.ListSnoc(\"table-update_I2_I2_star\", \"table-update_I2_I2\", true)",
      "438": "Rule.Inline",
      "439": "Rule.defaultAction",
      "440": "Rule.Inline",
      "441": "Rule.Inline",
      "442": "Rule.Inline",
      "443": "Rule.Inline",
      "444": "Rule.ListSnoc(\"table-extend_I2_I2_star\", \"table-extend_I2_I2\", true)",
      "445": "Rule.Inline",
      "446": "Rule.defaultAction",
      "447": "Rule.Inline",
      "448": "Rule.ListSnoc(\"table-extend-fields_I0_star\", \"table-extend-fields_I0\", true)",
      "449": "Rule.Inline",
      "450": "Rule.Inline",
      "451": "Rule.Inline",
      "452": "Rule.Inline",
      "453": "Rule.defaultAction",
      "454": "Rule.defaultAction",
      "455": "Rule.Inline",
      "456": "Rule.Inline",
      "457": "Rule.Inline",
      "458": "Rule.defaultAction",
      "459": "Rule.Inline",
      "460": "Rule.Inline",
      "461": "Rule.Inline",
      "462": "Rule.defaultAction",
      "463": "Rule.Inline",
      "464": "Rule.Inline",
      "465": "Rule.Inline",
      "466": "Rule.defaultAction",
      "467": "Rule.Inline",
      "468": "Rule.ListSnoc(\"load-table-specs_I0_star\", \"load-table-specs_I0\", true)",
      "469": "Rule.Inline",
      "470": "Rule.defaultAction",
      "471": "Rule.defaultAction",
      "472": "Rule.defaultAction",
      "473": "Rule.defaultAction",
      "474": "Rule.defaultAction",
      "475": "Rule.defaultAction",
      "476": "Rule.defaultAction",
      "477": "Rule.defaultAction",
      "478": "Rule.defaultAction",
      "479": "Rule.defaultAction",
      "480": "Rule.defaultAction",
      "481": "Rule.defaultAction",
      "482": "Rule.Inline",
      "483": "Rule.Inline",
      "484": "Rule.Inline",
      "485": "Rule.Inline",
      "486": "Rule.ListSnoc(\"record-ann_I1_I1_star\", \"record-ann_I1_I1\", true)",
      "487": "Rule.Inline",
      "488": "Rule.defaultAction",
      "489": "Rule.defaultAction",
      "490": "Rule.Inline",
      "491": "Rule.ListSnoc(\"tuple-ann_I2_star\", \"tuple-ann_I2\", true)",
      "492": "Rule.Inline",
      "493": "Rule.Inline",
      "494": "Rule.Inline",
      "495": "Rule.Inline",
      "496": "Rule.defaultAction",
      "497": "Rule.Inline",
      "498": "Rule.Inline",
      "499": "Rule.Inline",
      "500": "Rule.defaultAction",
      "501": "Rule.Inline",
      "502": "Rule.Inline",
      "503": "Rule.Inline",
      "504": "Rule.Inline",
      "505": "Rule.Inline",
      "506": "Rule.defaultAction",
      "507": "Rule.Inline",
      "508": "Rule.Inline",
      "509": "Rule.defaultAction",
      "510": "Rule.Inline",
      "511": "Rule.ListSnoc(\"comma-anns_I1_star\", \"comma-anns_I1\", true)",
      "512": "Rule.Inline",
      "513": "Rule.defaultAction",
      "514": "Rule.Inline",
      "515": "Rule.Inline",
      "516": "Rule.defaultAction",
      "517": "Rule.defaultAction"
    },
    "flagsByOldId": {},
    "rules": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130,
      131,
      132,
      138,
      139,
      133,
      134,
      135,
      136,
      137,
      140,
      141,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160,
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      234,
      235,
      236,
      237,
      238,
      239,
      240,
      241,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250,
      251,
      252,
      253,
      254,
      255,
      256,
      257,
      258,
      259,
      260,
      261,
      262,
      263,
      264,
      267,
      265,
      266,
      265,
      266,
      268,
      269,
      270,
      271,
      272,
      273,
      274,
      275,
      276,
      277,
      278,
      279,
      280,
      281,
      282,
      283,
      284,
      285,
      286,
      287,
      288,
      289,
      290,
      291,
      292,
      293,
      294,
      295,
      296,
      297,
      298,
      299,
      300,
      301,
      302,
      303,
      307,
      304,
      305,
      306,
      308,
      309,
      310,
      311,
      312,
      313,
      314,
      315,
      316,
      317,
      318,
      319,
      320,
      321,
      322,
      323,
      324,
      325,
      326,
      327,
      328,
      329,
      330,
      331,
      332,
      333,
      334,
      335,
      336,
      337,
      338,
      339,
      340,
      341,
      342,
      343,
      344,
      345,
      346,
      347,
      348,
      349,
      350,
      351,
      352,
      353,
      354,
      355,
      356,
      357,
      358,
      359,
      360,
      361,
      362,
      363,
      364,
      365,
      366,
      367,
      368,
      369,
      370,
      371,
      372,
      373,
      374,
      375,
      376,
      377,
      378,
      379,
      380,
      381,
      382,
      383,
      384,
      385,
      386,
      387,
      388,
      389,
      390,
      391,
      392,
      393,
      394,
      395,
      396,
      397,
      398,
      399,
      400,
      401,
      402,
      403,
      404,
      405,
      406,
      407,
      408,
      409,
      410,
      411,
      412,
      413,
      414,
      415,
      416,
      417,
      418,
      419,
      420,
      421,
      422,
      423,
      424,
      425,
      426,
      427,
      428,
      429,
      430,
      431,
      432,
      433,
      434,
      435,
      436,
      437,
      438,
      439,
      440,
      441,
      442,
      443,
      444,
      445,
      446,
      447,
      448,
      449,
      450,
      451,
      452,
      453,
      454,
      458,
      455,
      456,
      457,
      459,
      460,
      461,
      462,
      463,
      464,
      465,
      466,
      467,
      468,
      469,
      470,
      471,
      472,
      473,
      474,
      475,
      476,
      477,
      478,
      479,
      480,
      481,
      482,
      483,
      484,
      485,
      486,
      487,
      488,
      489,
      490,
      491,
      492,
      493,
      494,
      495,
      496,
      497,
      498,
      499,
      500,
      501,
      502,
      503,
      504,
      505,
      506,
      507,
      508,
      509,
      510,
      511,
      512,
      513,
      514,
      515,
      516,
      517
    ],
    "rnTable": [
      {
        "program": {
          "push": 1
        },
        "prelude": {
          "push": 2
        },
        "prelude_I0_opt": {
          "push": 3
        },
        "prelude_I0": {
          "push": 4
        },
        "provide-stmt": {
          "push": 5
        },
        "'PROVIDE": {
          "push": 6
        },
        "$": {
          "reductions": [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        }
      },
      {
        "$": {
          "accept": true
        }
      },
      {
        "block": {
          "push": 7
        },
        "block_I0_star": {
          "push": 8
        },
        "$": {
          "reductions": [
            [
              789,
              8
            ],
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "prelude_I1_opt": {
          "push": 9
        },
        "prelude_I1": {
          "push": 10
        },
        "provide-types-stmt": {
          "push": 11
        },
        "'PROVIDE-TYPES": {
          "push": 12
        },
        "$": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              5,
              4
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              5,
              4
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              876,
              94
            ],
            [
              5,
              4
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1139,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1185,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 13,
          "reductions": [
            [
              61,
              13
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "stmt": {
          "push": 15
        },
        "'STAR": {
          "push": 16
        },
        "type-expr": {
          "push": 17
        },
        "newtype-expr": {
          "push": 18
        },
        "let-expr": {
          "push": 19
        },
        "fun-expr": {
          "push": 20
        },
        "data-expr": {
          "push": 21
        },
        "when-expr": {
          "push": 22
        },
        "var-expr": {
          "push": 23
        },
        "rec-expr": {
          "push": 24
        },
        "assign-expr": {
          "push": 25
        },
        "check-test": {
          "push": 26
        },
        "check-expr": {
          "push": 27
        },
        "contract-stmt": {
          "push": 28
        },
        "'TYPE": {
          "push": 29
        },
        "'NEWTYPE": {
          "push": 30
        },
        "toplevel-binding": {
          "push": 31
        },
        "binop-expr": {
          "push": 32
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 36
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "multi-let-expr": {
          "push": 40
        },
        "'LET": {
          "push": 41
        },
        "'BLOCK": {
          "push": 42
        },
        "letrec-expr": {
          "push": 43
        },
        "'LETREC": {
          "push": 44
        },
        "type-let-expr": {
          "push": 45
        },
        "'TYPE-LET": {
          "push": 46
        },
        "'FUN": {
          "push": 47
        },
        "'PARENAFTERBRACE": {
          "push": 48
        },
        "'CHECK": {
          "push": 49
        },
        "check-expr_I0": {
          "push": 50
        },
        "'CHECKCOLON": {
          "push": 51
        },
        "'EXAMPLESCOLON": {
          "push": 52
        },
        "'PARENSPACE": {
          "push": 53
        },
        "'DATA": {
          "push": 54
        },
        "'VAR": {
          "push": 55
        },
        "'REC": {
          "push": 56
        },
        "'WHEN": {
          "push": 57
        },
        "expr": {
          "push": 58
        },
        "paren-expr": {
          "push": 59
        },
        "id-expr": {
          "push": 60
        },
        "prim-expr": {
          "push": 61
        },
        "lambda-expr": {
          "push": 62
        },
        "method-expr": {
          "push": 63
        },
        "app-expr": {
          "push": 64
        },
        "obj-expr": {
          "push": 65
        },
        "tuple-expr": {
          "push": 66
        },
        "tuple-get": {
          "push": 67
        },
        "dot-expr": {
          "push": 68
        },
        "template-expr": {
          "push": 69
        },
        "get-bang-expr": {
          "push": 70
        },
        "update-expr": {
          "push": 71
        },
        "extend-expr": {
          "push": 72
        },
        "if-expr": {
          "push": 73
        },
        "if-pipe-expr": {
          "push": 74
        },
        "cases-expr": {
          "push": 75
        },
        "for-expr": {
          "push": 76
        },
        "user-block-expr": {
          "push": 77
        },
        "inst-expr": {
          "push": 78
        },
        "construct-expr": {
          "push": 79
        },
        "table-select": {
          "push": 80
        },
        "table-extend": {
          "push": 81
        },
        "table-filter": {
          "push": 82
        },
        "table-order": {
          "push": 83
        },
        "table-extract": {
          "push": 84
        },
        "table-update": {
          "push": 85
        },
        "table-expr": {
          "push": 86
        },
        "load-table-expr": {
          "push": 87
        },
        "reactor-expr": {
          "push": 88
        },
        "'DOTDOTDOT": {
          "push": 89
        },
        "paren-expr_I0": {
          "push": 90
        },
        "num-expr": {
          "push": 91
        },
        "frac-expr": {
          "push": 92
        },
        "bool-expr": {
          "push": 93
        },
        "string-expr": {
          "push": 94
        },
        "'NUMBER": {
          "push": 95
        },
        "'RATIONAL": {
          "push": 96
        },
        "'TRUE": {
          "push": 97
        },
        "'FALSE": {
          "push": 98
        },
        "'LAM": {
          "push": 99
        },
        "'METHOD": {
          "push": 100
        },
        "'LBRACK": {
          "push": 101
        },
        "'TABLE": {
          "push": 102
        },
        "'REACTOR": {
          "push": 103
        },
        "'IF": {
          "push": 104
        },
        "'ASK": {
          "push": 105
        },
        "'CASES": {
          "push": 106
        },
        "'FOR": {
          "push": 107
        },
        "'TABLE-SELECT": {
          "push": 108
        },
        "'TABLE-FILTER": {
          "push": 109
        },
        "'TABLE-ORDER": {
          "push": 110
        },
        "'TABLE-EXTRACT": {
          "push": 111
        },
        "'TABLE-UPDATE": {
          "push": 112
        },
        "'TABLE-EXTEND": {
          "push": 113
        },
        "'LOAD-TABLE": {
          "push": 114
        }
      },
      {
        "$": {
          "reductions": [
            [
              4255,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 13,
          "reductions": [
            [
              61,
              13
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "stmt": {
          "push": 115
        },
        "block_I0": {
          "push": 116
        },
        "type-expr": {
          "push": 17
        },
        "newtype-expr": {
          "push": 18
        },
        "let-expr": {
          "push": 19
        },
        "fun-expr": {
          "push": 20
        },
        "data-expr": {
          "push": 21
        },
        "when-expr": {
          "push": 22
        },
        "var-expr": {
          "push": 23
        },
        "rec-expr": {
          "push": 24
        },
        "assign-expr": {
          "push": 25
        },
        "check-test": {
          "push": 26
        },
        "check-expr": {
          "push": 27
        },
        "contract-stmt": {
          "push": 28
        },
        "'TYPE": {
          "push": 29
        },
        "'NEWTYPE": {
          "push": 30
        },
        "toplevel-binding": {
          "push": 31
        },
        "binop-expr": {
          "push": 32
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 36
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "multi-let-expr": {
          "push": 40
        },
        "'LET": {
          "push": 41
        },
        "'BLOCK": {
          "push": 42
        },
        "letrec-expr": {
          "push": 43
        },
        "'LETREC": {
          "push": 44
        },
        "type-let-expr": {
          "push": 45
        },
        "'TYPE-LET": {
          "push": 46
        },
        "'FUN": {
          "push": 47
        },
        "'PARENAFTERBRACE": {
          "push": 48
        },
        "'CHECK": {
          "push": 49
        },
        "check-expr_I0": {
          "push": 50
        },
        "'CHECKCOLON": {
          "push": 51
        },
        "'EXAMPLESCOLON": {
          "push": 52
        },
        "'PARENSPACE": {
          "push": 53
        },
        "'DATA": {
          "push": 54
        },
        "'VAR": {
          "push": 55
        },
        "'REC": {
          "push": 56
        },
        "'WHEN": {
          "push": 57
        },
        "expr": {
          "push": 58
        },
        "paren-expr": {
          "push": 59
        },
        "id-expr": {
          "push": 60
        },
        "prim-expr": {
          "push": 61
        },
        "lambda-expr": {
          "push": 62
        },
        "method-expr": {
          "push": 63
        },
        "app-expr": {
          "push": 64
        },
        "obj-expr": {
          "push": 65
        },
        "tuple-expr": {
          "push": 66
        },
        "tuple-get": {
          "push": 67
        },
        "dot-expr": {
          "push": 68
        },
        "template-expr": {
          "push": 69
        },
        "get-bang-expr": {
          "push": 70
        },
        "update-expr": {
          "push": 71
        },
        "extend-expr": {
          "push": 72
        },
        "if-expr": {
          "push": 73
        },
        "if-pipe-expr": {
          "push": 74
        },
        "cases-expr": {
          "push": 75
        },
        "for-expr": {
          "push": 76
        },
        "user-block-expr": {
          "push": 77
        },
        "inst-expr": {
          "push": 78
        },
        "construct-expr": {
          "push": 79
        },
        "table-select": {
          "push": 80
        },
        "table-extend": {
          "push": 81
        },
        "table-filter": {
          "push": 82
        },
        "table-order": {
          "push": 83
        },
        "table-extract": {
          "push": 84
        },
        "table-update": {
          "push": 85
        },
        "table-expr": {
          "push": 86
        },
        "load-table-expr": {
          "push": 87
        },
        "reactor-expr": {
          "push": 88
        },
        "'DOTDOTDOT": {
          "push": 89
        },
        "paren-expr_I0": {
          "push": 90
        },
        "num-expr": {
          "push": 91
        },
        "frac-expr": {
          "push": 92
        },
        "bool-expr": {
          "push": 93
        },
        "string-expr": {
          "push": 94
        },
        "'NUMBER": {
          "push": 95
        },
        "'RATIONAL": {
          "push": 96
        },
        "'TRUE": {
          "push": 97
        },
        "'FALSE": {
          "push": 98
        },
        "'LAM": {
          "push": 99
        },
        "'METHOD": {
          "push": 100
        },
        "'LBRACK": {
          "push": 101
        },
        "'TABLE": {
          "push": 102
        },
        "'REACTOR": {
          "push": 103
        },
        "'IF": {
          "push": 104
        },
        "'ASK": {
          "push": 105
        },
        "'CASES": {
          "push": 106
        },
        "'FOR": {
          "push": 107
        },
        "'TABLE-SELECT": {
          "push": 108
        },
        "'TABLE-FILTER": {
          "push": 109
        },
        "'TABLE-ORDER": {
          "push": 110
        },
        "'TABLE-EXTRACT": {
          "push": 111
        },
        "'TABLE-UPDATE": {
          "push": 112
        },
        "'TABLE-EXTEND": {
          "push": 113
        },
        "'LOAD-TABLE": {
          "push": 114
        },
        "$": {
          "reductions": [
            [
              4257,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              4257,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              4257,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              4257,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              4257,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              4257,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              4257,
              0
            ]
          ]
        }
      },
      {
        "prelude_I2_star": {
          "push": 117
        },
        "$": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              8,
              5
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              8,
              5
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              8712,
              5
            ],
            [
              8,
              5
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              8843,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              8888,
              0
            ]
          ]
        }
      },
      {
        "'STAR": {
          "push": 118
        },
        "record-ann": {
          "push": 119
        },
        "'LBRACE": {
          "push": 120
        }
      },
      {
        "'COLONCOLON": {
          "push": 121
        },
        "'COLONEQUALS": {
          "push": 122
        },
        "$": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9069,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              9108,
              0
            ]
          ]
        }
      },
      {
        "'END": {
          "push": 123
        }
      },
      {
        "$": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9191,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9237,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9239,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9241,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9243,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9245,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9247,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9249,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9251,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9253,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9255,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9257,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9259,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 124
        }
      },
      {
        "'NAME": {
          "push": 125
        }
      },
      {
        "'EQUALS": {
          "push": 126
        }
      },
      {
        "check-op": {
          "push": 127
        },
        "check-op-postfix": {
          "push": 128
        },
        "'IS": {
          "push": 129
        },
        "'ISEQUALEQUAL": {
          "push": 130
        },
        "'ISEQUALTILDE": {
          "push": 131
        },
        "'ISSPACESHIP": {
          "push": 132
        },
        "'ISROUGHLY": {
          "push": 133
        },
        "'ISNOT": {
          "push": 134
        },
        "'ISNOTEQUALEQUAL": {
          "push": 135
        },
        "'ISNOTEQUALTILDE": {
          "push": 136
        },
        "'ISNOTSPACESHIP": {
          "push": 137
        },
        "'RAISES": {
          "push": 138
        },
        "'RAISESOTHER": {
          "push": 139
        },
        "'SATISFIES": {
          "push": 140
        },
        "'SATISFIESNOT": {
          "push": 141
        },
        "'RAISESSATISFIES": {
          "push": 142
        },
        "'RAISESVIOLATES": {
          "push": 143
        },
        "'RAISESNOT": {
          "push": 144
        },
        "$": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9269,
              0
            ]
          ]
        }
      },
      {
        "'EQUALS": {
          "reductions": [
            [
              9739,
              0
            ]
          ]
        }
      },
      {
        "'FROM": {
          "reductions": [
            [
              9741,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              9741,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              9741,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              9741,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9741,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              9741,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              9741,
              0
            ]
          ]
        }
      },
      {
        "'FROM": {
          "reductions": [
            [
              9743,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              9743,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              9743,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              9743,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9743,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              9743,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              9743,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 145,
          "reductions": [
            [
              51,
              10
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "ty-params": {
          "push": 146
        },
        "binop-expr": {
          "push": 147
        },
        "'LBRACE": {
          "push": 148,
          "reductions": [
            [
              51,
              10
            ]
          ]
        },
        "tuple-binding_I1_star": {
          "push": 149
        },
        "'RBRACE": {
          "push": 150
        },
        "multi-let-expr": {
          "push": 40
        },
        "'LET": {
          "push": 41
        },
        "'BLOCK": {
          "push": 42
        },
        "letrec-expr": {
          "push": 43
        },
        "'LETREC": {
          "push": 44
        },
        "type-let-expr": {
          "push": 45
        },
        "'TYPE-LET": {
          "push": 46
        },
        "fun-header": {
          "push": 151
        },
        "ty-params_I0_opt": {
          "push": 152
        },
        "ty-params_I0": {
          "push": 153
        },
        "ty-params_I0_I0": {
          "push": 154
        },
        "'LANGLE": {
          "push": 155
        },
        "'LT": {
          "push": 156
        },
        "'PARENAFTERBRACE": {
          "push": 48,
          "reductions": [
            [
              99,
              18
            ],
            [
              100,
              19
            ]
          ]
        },
        "'PARENSPACE": {
          "push": 53
        },
        "'REF": {
          "push": 157
        },
        "expr": {
          "push": 58
        },
        "paren-expr": {
          "push": 59
        },
        "id-expr": {
          "push": 60
        },
        "prim-expr": {
          "push": 61
        },
        "lambda-expr": {
          "push": 62
        },
        "method-expr": {
          "push": 63
        },
        "app-expr": {
          "push": 64
        },
        "obj-expr": {
          "push": 65
        },
        "tuple-expr": {
          "push": 66
        },
        "tuple-get": {
          "push": 67
        },
        "dot-expr": {
          "push": 68
        },
        "template-expr": {
          "push": 69
        },
        "get-bang-expr": {
          "push": 70
        },
        "update-expr": {
          "push": 71
        },
        "extend-expr": {
          "push": 72
        },
        "if-expr": {
          "push": 73
        },
        "if-pipe-expr": {
          "push": 74
        },
        "cases-expr": {
          "push": 75
        },
        "for-expr": {
          "push": 76
        },
        "user-block-expr": {
          "push": 77
        },
        "inst-expr": {
          "push": 78
        },
        "construct-expr": {
          "push": 79
        },
        "table-select": {
          "push": 80
        },
        "table-extend": {
          "push": 81
        },
        "table-filter": {
          "push": 82
        },
        "table-order": {
          "push": 83
        },
        "table-extract": {
          "push": 84
        },
        "table-update": {
          "push": 85
        },
        "table-expr": {
          "push": 86
        },
        "load-table-expr": {
          "push": 87
        },
        "reactor-expr": {
          "push": 88
        },
        "'DOTDOTDOT": {
          "push": 89
        },
        "paren-expr_I0": {
          "push": 90
        },
        "num-expr": {
          "push": 91
        },
        "frac-expr": {
          "push": 92
        },
        "bool-expr": {
          "push": 93
        },
        "string-expr": {
          "push": 94
        },
        "'NUMBER": {
          "push": 95
        },
        "'RATIONAL": {
          "push": 96
        },
        "'TRUE": {
          "push": 97
        },
        "'FALSE": {
          "push": 98
        },
        "'LAM": {
          "push": 99
        },
        "'METHOD": {
          "push": 158
        },
        "tuple-fields": {
          "push": 159
        },
        "obj-fields": {
          "push": 160
        },
        "obj-field": {
          "push": 161
        },
        "key": {
          "push": 162
        },
        "'LBRACK": {
          "push": 101
        },
        "'TABLE": {
          "push": 102
        },
        "'REACTOR": {
          "push": 103
        },
        "'IF": {
          "push": 104
        },
        "'ASK": {
          "push": 105
        },
        "'CASES": {
          "push": 106
        },
        "'FOR": {
          "push": 107
        },
        "'TABLE-SELECT": {
          "push": 108
        },
        "'TABLE-FILTER": {
          "push": 109
        },
        "'TABLE-ORDER": {
          "push": 110
        },
        "'TABLE-EXTRACT": {
          "push": 111
        },
        "'TABLE-UPDATE": {
          "push": 112
        },
        "'TABLE-EXTEND": {
          "push": 113
        },
        "'LOAD-TABLE": {
          "push": 114
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              99,
              18
            ],
            [
              100,
              19
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              51,
              10
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 163
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10078,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10080,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10082,
              0
            ]
          ]
        }
      },
      {
        "let-expr": {
          "push": 164
        },
        "var-expr": {
          "push": 165
        },
        "toplevel-binding": {
          "push": 31
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 166
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "let-binding": {
          "push": 167
        },
        "'VAR": {
          "push": 55
        },
        "'NAME": {
          "reductions": [
            [
              61,
              13
            ]
          ]
        }
      },
      {
        "block": {
          "push": 168
        },
        "block_I0_star": {
          "push": 8
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        }
      },
      {
        "let-expr": {
          "push": 169
        },
        "toplevel-binding": {
          "push": 31
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 166
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "'NAME": {
          "reductions": [
            [
              61,
              13
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10280,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 170
        },
        "'NEWTYPE": {
          "push": 171
        },
        "type-bind": {
          "push": 172
        },
        "newtype-bind": {
          "push": 173
        },
        "type-let-bind": {
          "push": 174
        }
      },
      {
        "'NAME": {
          "push": 175
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10368,
              0
            ]
          ]
        }
      },
      {
        "'STRING": {
          "push": 176
        }
      },
      {
        "block": {
          "push": 177
        },
        "block_I0_star": {
          "push": 8
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10403,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10446,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10489,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 178
        }
      },
      {
        "toplevel-binding": {
          "push": 179
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 166
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "'NAME": {
          "reductions": [
            [
              61,
              13
            ]
          ]
        }
      },
      {
        "toplevel-binding": {
          "push": 180
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 166
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "'NAME": {
          "reductions": [
            [
              61,
              13
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 181
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 182
        },
        "'LBRACE": {
          "push": 148
        },
        "multi-let-expr": {
          "push": 40
        },
        "'LET": {
          "push": 41
        },
        "'BLOCK": {
          "push": 42
        },
        "letrec-expr": {
          "push": 43
        },
        "'LETREC": {
          "push": 44
        },
        "type-let-expr": {
          "push": 45
        },
        "'TYPE-LET": {
          "push": 46
        },
        "'PARENAFTERBRACE": {
          "push": 48
        },
        "'PARENSPACE": {
          "push": 53
        },
        "expr": {
          "push": 58
        },
        "paren-expr": {
          "push": 59
        },
        "id-expr": {
          "push": 60
        },
        "prim-expr": {
          "push": 61
        },
        "lambda-expr": {
          "push": 62
        },
        "method-expr": {
          "push": 63
        },
        "app-expr": {
          "push": 64
        },
        "obj-expr": {
          "push": 65
        },
        "tuple-expr": {
          "push": 66
        },
        "tuple-get": {
          "push": 67
        },
        "dot-expr": {
          "push": 68
        },
        "template-expr": {
          "push": 69
        },
        "get-bang-expr": {
          "push": 70
        },
        "update-expr": {
          "push": 71
        },
        "extend-expr": {
          "push": 72
        },
        "if-expr": {
          "push": 73
        },
        "if-pipe-expr": {
          "push": 74
        },
        "cases-expr": {
          "push": 75
        },
        "for-expr": {
          "push": 76
        },
        "user-block-expr": {
          "push": 77
        },
        "inst-expr": {
          "push": 78
        },
        "construct-expr": {
          "push": 79
        },
        "table-select": {
          "push": 80
        },
        "table-extend": {
          "push": 81
        },
        "table-filter": {
          "push": 82
        },
        "table-order": {
          "push": 83
        },
        "table-extract": {
          "push": 84
        },
        "table-update": {
          "push": 85
        },
        "table-expr": {
          "push": 86
        },
        "load-table-expr": {
          "push": 87
        },
        "reactor-expr": {
          "push": 88
        },
        "'DOTDOTDOT": {
          "push": 89
        },
        "paren-expr_I0": {
          "push": 90
        },
        "num-expr": {
          "push": 91
        },
        "frac-expr": {
          "push": 92
        },
        "bool-expr": {
          "push": 93
        },
        "string-expr": {
          "push": 94
        },
        "'NUMBER": {
          "push": 95
        },
        "'RATIONAL": {
          "push": 96
        },
        "'TRUE": {
          "push": 97
        },
        "'FALSE": {
          "push": 98
        },
        "'LAM": {
          "push": 99
        },
        "'METHOD": {
          "push": 100
        },
        "'LBRACK": {
          "push": 101
        },
        "'TABLE": {
          "push": 102
        },
        "'REACTOR": {
          "push": 103
        },
        "'IF": {
          "push": 104
        },
        "'ASK": {
          "push": 105
        },
        "'CASES": {
          "push": 106
        },
        "'FOR": {
          "push": 107
        },
        "'TABLE-SELECT": {
          "push": 108
        },
        "'TABLE-FILTER": {
          "push": 109
        },
        "'TABLE-ORDER": {
          "push": 110
        },
        "'TABLE-EXTRACT": {
          "push": 111
        },
        "'TABLE-UPDATE": {
          "push": 112
        },
        "'TABLE-EXTEND": {
          "push": 113
        },
        "'LOAD-TABLE": {
          "push": 114
        }
      },
      {
        "'PARENNOSPACE": {
          "push": 183
        },
        "'LANGLE": {
          "push": 184
        },
        "binop-expr_I1_star": {
          "push": 185
        },
        "app-args": {
          "push": 186
        },
        "'DOT": {
          "push": 187
        },
        "'BANG": {
          "push": 188
        },
        "$": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10605,
              38
            ],
            [
              178,
              38
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10982,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11019,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11056,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11093,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11130,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11167,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11241,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11278,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11315,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11352,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11389,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11426,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11463,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11500,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11537,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11574,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11648,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11685,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11722,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11759,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11796,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11833,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11870,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11907,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11944,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11981,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12018,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12055,
              0
            ]
          ]
        },
            [
    ]