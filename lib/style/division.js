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
                var outermost = true, ruleSetsCSS = this.ruleSets.asCSS(this.selectorsList, outermost), declarationsCSS = this.declarations.asCSS(this.selectorsList, outermost), css = "\n\n".concat(declarationsCSS, "\n").concat(ruleSetsCSS, "\n\n");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kaXZpc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3J1bGVTZXRzXCI7XG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVTZXRzLCBkZWNsYXJhdGlvbnMsIHNlbGVjdG9yc0xpc3QpIHtcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5zZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFNlbGVjdG9yc0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGNvbnN0IG91dGVybW9zdCA9IHRydWUsXG4gICAgICAgICAgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXRzLmFzQ1NTKHRoaXMuc2VsZWN0b3JzTGlzdCwgb3V0ZXJtb3N0KSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyh0aGlzLnNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCksXG4gICAgICAgICAgY3NzID0gYFxuXG4ke2RlY2xhcmF0aW9uc0NTU31cbiR7cnVsZVNldHNDU1N9XG5cbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlVG9rZW5zQW5kU2VsZWN0b3JzTGlzdChub2RlLCB0b2tlbnMsIHNlbGVjdG9yc0xpc3QpIHtcbiAgICBjb25zdCBydWxlU2V0cyA9IFJ1bGVTZXRzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGl2aXNpb24gPSBuZXcgRGl2aXNpb24ocnVsZVNldHMsIGRlY2xhcmF0aW9ucywgc2VsZWN0b3JzTGlzdCk7XG5cbiAgICByZXR1cm4gZGl2aXNpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbiIsInJ1bGVTZXRzIiwiZGVjbGFyYXRpb25zIiwic2VsZWN0b3JzTGlzdCIsImdldFJ1bGVTZXRzIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0U2VsZWN0b3JzTGlzdCIsImFzQ1NTIiwib3V0ZXJtb3N0IiwicnVsZVNldHNDU1MiLCJkZWNsYXJhdGlvbnNDU1MiLCJjc3MiLCJmcm9tTm9kZVRva2Vuc0FuZFNlbGVjdG9yc0xpc3QiLCJub2RlIiwidG9rZW5zIiwiUnVsZVNldHMiLCJmcm9tTm9kZUFuZFRva2VucyIsIkRlY2xhcmF0aW9ucyIsImRpdmlzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzsrREFIQTttRUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVWLElBQUEsQUFBTUEseUJBQU47YUFBTUEsU0FDUEMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRDlCSDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBSkpIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxZQUFZO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxhQUFhO1lBQzNCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksTUFDWkMsY0FBYyxJQUFJLENBQUNSLFFBQVEsQ0FBQ00sS0FBSyxDQUFDLElBQUksQ0FBQ0osYUFBYSxFQUFFSyxZQUN0REUsa0JBQWtCLElBQUksQ0FBQ1IsWUFBWSxDQUFDSyxLQUFLLENBQUMsSUFBSSxDQUFDSixhQUFhLEVBQUVLLFlBQzlERyxNQUFNLEFBQUMsT0FHZkYsT0FEQUMsaUJBQWdCLE1BQ0osT0FBWkQsYUFBWTtnQkFJVixPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQkMsSUFBSSxFQUFFQyxNQUFNLEVBQUVYLGFBQWE7Z0JBQy9ELElBQU1GLFdBQVdjLGlCQUFRLENBQUNDLGlCQUFpQixDQUFDSCxNQUFNQyxTQUM1Q1osZUFBZWUscUJBQVksQ0FBQ0QsaUJBQWlCLENBQUNILE1BQU1DLFNBQ3BESSxXQUFXLElBcENBbEIsU0FvQ2FDLFVBQVVDLGNBQWNDO2dCQUV0RCxPQUFPZTtZQUNUOzs7V0F2Q21CbEIifQ==