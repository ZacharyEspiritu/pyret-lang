provide *

import ast as A
import global as _
import base as _

data GenericAST:
  | g-op(loc :: Option<A.Loc>, op :: String, args :: List<GenericAST>)
    # Primitive
  | g-str(s :: String)
  | g-num(n :: Number)
  | g-bool(b :: Boolean)
  | g-loc(l :: A.Loc)
    # Variables
  | g-underscore(loc :: A.Loc)
  | g-decl(     loc :: A.Loc, name :: String, serial :: Number, shadows :: Boolean)
  | g-refn(     loc :: A.Loc, name :: String, serial :: Number, global :: Boolean)
  | g-type-decl(loc :: A.Loc, name :: String, serial :: Number, shadows :: Boolean)
  | g-type-refn(loc :: A.Loc, name :: String, serial :: Number, global :: Boolean)
    # Convenience
  | g-list(lst :: List<GenericAST>)
  | g-option(opt :: Option<GenericAST>)
end
