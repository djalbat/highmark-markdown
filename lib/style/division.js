"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Division;
    }
});
var _ruleSets = /*#__PURE__*/ _interop_require_default(require("./ruleSets"));
var _declarations = /*#__PURE__*/ _interop_require_default(require("./declarations"));
var _constants = require("../constants");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Division = /*#__PURE__*/ function() {
    function Division(ruleSets, declarations, selectorsList) {
        _class_call_check(this, Division);
        this.ruleSets = ruleSets;
        this.declarations = declarations;
        this.selectorsList = selectorsList;
    }
    _create_class(Division, [
        {
            key: "getRuleSets",
            value: function getRuleSets() {
                return this.ruleSets;
            }
        },
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "getSelectorsList",
            value: function getSelectorsList() {
                return this.selectorsList;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var outermost = true, ruleSetsCSS = this.ruleSets.asCSS(this.selectorsList, outermost), declarationsCSS = this.declarations.asCSS(this.selectorsList, outermost), css = declarationsCSS === _constants.EMPTY_STRING ? ruleSetsCSS : "".concat(declarationsCSS, "\n").concat(ruleSetsCSS);
                return css;
            }
        }
    ], [
        {
            key: "fromNodeTokensAndSelectorsList",
            value: function fromNodeTokensAndSelectorsList(node, tokens, selectorsList) {
                var ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), division = new Division(ruleSets, declarations, selectorsList);
                return division;
            }
        }
    ]);
    return Division;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kaXZpc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3J1bGVTZXRzXCI7XG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uIHtcbiAgY29uc3RydWN0b3IocnVsZVNldHMsIGRlY2xhcmF0aW9ucywgc2VsZWN0b3JzTGlzdCkge1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLnNlbGVjdG9yc0xpc3QgPSBzZWxlY3RvcnNMaXN0O1xuICB9XG5cbiAgZ2V0UnVsZVNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVNldHM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvcnNMaXN0O1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgY29uc3Qgb3V0ZXJtb3N0ID0gdHJ1ZSxcbiAgICAgICAgICBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1ModGhpcy5zZWxlY3RvcnNMaXN0LCBvdXRlcm1vc3QpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKHRoaXMuc2VsZWN0b3JzTGlzdCwgb3V0ZXJtb3N0KSxcbiAgICAgICAgICBjc3MgPSAoZGVjbGFyYXRpb25zQ1NTID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICAgIHJ1bGVTZXRzQ1NTIDogLy8vXG4gICAgICAgICAgICAgICAgICAgIGAke2RlY2xhcmF0aW9uc0NTU31cbiR7cnVsZVNldHNDU1N9YDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVUb2tlbnNBbmRTZWxlY3RvcnNMaXN0KG5vZGUsIHRva2Vucywgc2VsZWN0b3JzTGlzdCkge1xuICAgIGNvbnN0IHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkaXZpc2lvbiA9IG5ldyBEaXZpc2lvbihydWxlU2V0cywgZGVjbGFyYXRpb25zLCBzZWxlY3RvcnNMaXN0KTtcblxuICAgIHJldHVybiBkaXZpc2lvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uIiwicnVsZVNldHMiLCJkZWNsYXJhdGlvbnMiLCJzZWxlY3RvcnNMaXN0IiwiZ2V0UnVsZVNldHMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRTZWxlY3RvcnNMaXN0IiwiYXNDU1MiLCJvdXRlcm1vc3QiLCJydWxlU2V0c0NTUyIsImRlY2xhcmF0aW9uc0NTUyIsImNzcyIsIkVNUFRZX1NUUklORyIsImZyb21Ob2RlVG9rZW5zQW5kU2VsZWN0b3JzTGlzdCIsIm5vZGUiLCJ0b2tlbnMiLCJSdWxlU2V0cyIsImZyb21Ob2RlQW5kVG9rZW5zIiwiRGVjbGFyYXRpb25zIiwiZGl2aXNpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7K0RBTEE7bUVBQ0k7eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHlCQUFELEFBQUw7YUFBTUEsU0FDUEMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRDlCSDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBSkpIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxZQUFZO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxhQUFhO1lBQzNCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksTUFDWkMsY0FBYyxJQUFJLENBQUNSLFFBQVEsQ0FBQ00sS0FBSyxDQUFDLElBQUksQ0FBQ0osYUFBYSxFQUFFSyxZQUN0REUsa0JBQWtCLElBQUksQ0FBQ1IsWUFBWSxDQUFDSyxLQUFLLENBQUMsSUFBSSxDQUFDSixhQUFhLEVBQUVLLFlBQzlERyxNQUFNLEFBQUNELG9CQUFvQkUsdUJBQVksR0FDL0JILGNBQ0UsQUFBQyxHQUNuQkEsT0FEcUJDLGlCQUFnQixNQUN6QixPQUFaRDtnQkFFRSxPQUFPRTtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQkMsSUFBSSxFQUFFQyxNQUFNLEVBQUVaLGFBQWE7Z0JBQy9ELElBQU1GLFdBQVdlLGlCQUFRLENBQUNDLGlCQUFpQixDQUFDSCxNQUFNQyxTQUM1Q2IsZUFBZWdCLHFCQUFZLENBQUNELGlCQUFpQixDQUFDSCxNQUFNQyxTQUNwREksV0FBVyxJQWxDQW5CLFNBa0NhQyxVQUFVQyxjQUFjQztnQkFFdEQsT0FBT2dCO1lBQ1Q7OztXQXJDbUJuQiJ9