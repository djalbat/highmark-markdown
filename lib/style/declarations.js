"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Declarations;
    }
});
var _declaration = /*#__PURE__*/ _interop_require_default(require("./declaration"));
var _query = require("../utilities/query");
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
var declarationNonTerminalNodesQuery = (0, _query.nodesQuery)("/*/declaration");
var Declarations = /*#__PURE__*/ function() {
    function Declarations(array) {
        _class_call_check(this, Declarations);
        this.array = array;
    }
    _create_class(Declarations, [
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(selectorsList) {
                var css = _constants.EMPTY_STRING;
                var length = this.getLength(), selectorsListLength = selectorsList.getLength();
                if (length > 0 && selectorsListLength > 0) {
                    var declarationsCSS = this.array.reduce(function(declarationsCSS, declaration) {
                        var declarationCSS = declaration.asCSS();
                        declarationsCSS = declarationsCSS === null ? declarationCSS : "".concat(declarationsCSS, "\n").concat(declarationCSS);
                        return declarationsCSS;
                    }, null), selectorsListCSS = selectorsList.asCSS();
                    css = "".concat(selectorsListCSS, " {\n").concat(declarationsCSS, "\n}\n");
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var declarationNonTerminalNodes = declarationNonTerminalNodesQuery(node), array = declarationNonTerminalNodes.map(function(declarationNonTerminalNode) {
                    var _$node = declarationNonTerminalNode, declaration = _declaration.default.fromNodeAndTokens(_$node, tokens);
                    return declaration;
                }), declarations = new Declarations(array);
                return declarations;
            }
        }
    ]);
    return Declarations;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGFzQ1NTKHNlbGVjdG9yc0xpc3QpIHtcbiAgICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0TGVuZ3RoID0gc2VsZWN0b3JzTGlzdC5nZXRMZW5ndGgoKTtcblxuICAgIGlmICgobGVuZ3RoID4gMCkgJiYgKHNlbGVjdG9yc0xpc3RMZW5ndGggPiAwKSkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5hcnJheS5yZWR1Y2UoKGRlY2xhcmF0aW9uc0NTUywgZGVjbGFyYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25DU1MgPSBkZWNsYXJhdGlvbi5hc0NTUygpO1xuXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA9IChkZWNsYXJhdGlvbnNDU1MgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbkNTUyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVjbGFyYXRpb25zQ1NTfVxuJHtkZWNsYXJhdGlvbkNTU31gO1xuXG4gICAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbnNDU1M7XG4gICAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICAgIHNlbGVjdG9yc0xpc3RDU1MgPSBzZWxlY3RvcnNMaXN0LmFzQ1NTKCk7XG5cbiAgICAgIGNzcyA9IGAke3NlbGVjdG9yc0xpc3RDU1N9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxufVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlcyA9IGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBuZXcgRGVjbGFyYXRpb25zKGFycmF5KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJhcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImFzQ1NTIiwic2VsZWN0b3JzTGlzdCIsImNzcyIsIkVNUFRZX1NUUklORyIsInNlbGVjdG9yc0xpc3RMZW5ndGgiLCJkZWNsYXJhdGlvbnNDU1MiLCJyZWR1Y2UiLCJkZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uQ1NTIiwic2VsZWN0b3JzTGlzdENTUyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlcyIsIm1hcCIsImRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlIiwiRGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O2tFQVBHO3FCQUVHO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1DLG1DQUFtQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVyQyxJQUFBLEFBQU1GLDZCQUFOO2FBQU1BLGFBQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRCxLQUFLLENBQUNFLE1BQU07WUFBRTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsYUFBYTtnQkFDakIsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1KLFNBQVMsSUFBSSxDQUFDRCxTQUFTLElBQ3ZCTSxzQkFBc0JILGNBQWNILFNBQVM7Z0JBRW5ELElBQUksQUFBQ0MsU0FBUyxLQUFPSyxzQkFBc0IsR0FBSTtvQkFDN0MsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxNQUFNLENBQUMsU0FBQ0QsaUJBQWlCRTt3QkFDcEQsSUFBTUMsaUJBQWlCRCxZQUFZUCxLQUFLO3dCQUV4Q0ssa0JBQWtCLEFBQUNBLG9CQUFvQixPQUNuQkcsaUJBQ0UsQUFBQyxHQUNuQ0EsT0FEcUNILGlCQUFnQixNQUN0QyxPQUFmRzt3QkFFWSxPQUFPSDtvQkFDVCxHQUFHLE9BQ0hJLG1CQUFtQlIsY0FBY0QsS0FBSztvQkFFNUNFLE1BQU0sQUFBQyxHQUNYRyxPQURhSSxrQkFBaUIsUUFDZCxPQUFoQkosaUJBQWdCO2dCQUdkO2dCQUVBLE9BQU9IO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLDhCQUE4QmxCLGlDQUFpQ2dCLE9BQy9EZCxRQUFRZ0IsNEJBQTRCQyxHQUFHLENBQUMsU0FBQ0M7b0JBQ3ZDLElBQU1KLFNBQU9JLDRCQUNQUixjQUFjUyxvQkFBVyxDQUFDTixpQkFBaUIsQ0FBQ0MsUUFBTUM7b0JBRXhELE9BQU9MO2dCQUNULElBQ0FVLGVBQWUsSUEzQ0p2QixhQTJDcUJHO2dCQUV0QyxPQUFPb0I7WUFDVDs7O1dBOUNtQnZCIn0=