"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleSets;
    }
});
var _ruleSet = /*#__PURE__*/ _interop_require_default(require("./ruleSet"));
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
var ruleSetNonTerminalNodesQuery = (0, _query.nodesQuery)("/*/ruleSet");
var RuleSets = /*#__PURE__*/ function() {
    function RuleSets(array) {
        _class_call_check(this, RuleSets);
        this.array = array;
    }
    _create_class(RuleSets, [
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(selectorsList) {
                var outermost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var css = _constants.EMPTY_STRING;
                var length = this.getLength(), selectorsListLength = selectorsList.getLength();
                if (length > 0 && selectorsListLength > 0) {
                    css = this.array.reduce(function(css, ruleSet) {
                        var ruleSetCSS = ruleSet.asCSS(selectorsList, outermost);
                        css = css === null ? ruleSetCSS : "".concat(css).concat(ruleSetCSS);
                        return css;
                    }, null);
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var ruleSetNonTerminalNodes = ruleSetNonTerminalNodesQuery(node), array = ruleSetNonTerminalNodes.map(function(ruleSetNonTerminalNode) {
                    var _$node = ruleSetNonTerminalNode, ruleSet = _ruleSet.default.fromNodeAndTokens(_$node, tokens, RuleSets);
                    return ruleSet;
                }), ruleSets = new RuleSets(array);
                return ruleSets;
            }
        }
    ]);
    return RuleSets;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVTZXQgZnJvbSBcIi4vcnVsZVNldFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBydWxlU2V0Tm9uVGVybWluYWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL3J1bGVTZXRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXRzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGFzQ1NTKHNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCA9IGZhbHNlKSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdExlbmd0aCA9IHNlbGVjdG9yc0xpc3QuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoKGxlbmd0aCA+IDApICYmIChzZWxlY3RvcnNMaXN0TGVuZ3RoID4gMCkpIHtcbiAgICAgIGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIHJ1bGVTZXQpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZVNldENTUyA9IHJ1bGVTZXQuYXNDU1Moc2VsZWN0b3JzTGlzdCwgb3V0ZXJtb3N0KTtcblxuICAgICAgICBjc3MgPSAoY3NzID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgcnVsZVNldENTUyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgIGAke2Nzc30ke3J1bGVTZXRDU1N9YDtcblxuICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgfSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBydWxlU2V0Tm9uVGVybWluYWxOb2RlcyA9IHJ1bGVTZXROb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBydWxlU2V0Tm9uVGVybWluYWxOb2Rlcy5tYXAoKHJ1bGVTZXROb25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBydWxlU2V0Tm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVTZXQgPSBSdWxlU2V0LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucywgUnVsZVNldHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZVNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlU2V0cyA9IG5ldyBSdWxlU2V0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcnVsZVNldHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlU2V0cyIsInJ1bGVTZXROb25UZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiYXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJhc0NTUyIsInNlbGVjdG9yc0xpc3QiLCJvdXRlcm1vc3QiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJzZWxlY3RvcnNMaXN0TGVuZ3RoIiwicmVkdWNlIiwicnVsZVNldCIsInJ1bGVTZXRDU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJydWxlU2V0Tm9uVGVybWluYWxOb2RlcyIsIm1hcCIsInJ1bGVTZXROb25UZXJtaW5hbE5vZGUiLCJSdWxlU2V0IiwicnVsZVNldHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzhEQVBEO3FCQUVPO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1DLCtCQUErQkMsSUFBQUEsaUJBQVUsRUFBQztBQUVqQyxJQUFBLEFBQU1GLHlCQUFOO2FBQU1BLFNBQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRCxLQUFLLENBQUNFLE1BQU07WUFBRTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsYUFBYTtvQkFBRUMsWUFBQUEsaUVBQVk7Z0JBQy9CLElBQUlDLE1BQU1DLHVCQUFZO2dCQUV0QixJQUFNTCxTQUFTLElBQUksQ0FBQ0QsU0FBUyxJQUN2Qk8sc0JBQXNCSixjQUFjSCxTQUFTO2dCQUVuRCxJQUFJLEFBQUNDLFNBQVMsS0FBT00sc0JBQXNCLEdBQUk7b0JBQzdDRixNQUFNLElBQUksQ0FBQ04sS0FBSyxDQUFDUyxNQUFNLENBQUMsU0FBQ0gsS0FBS0k7d0JBQzVCLElBQU1DLGFBQWFELFFBQVFQLEtBQUssQ0FBQ0MsZUFBZUM7d0JBRWhEQyxNQUFNLEFBQUNBLFFBQVEsT0FDUEssYUFDRSxBQUFDLEdBQVFBLE9BQU5MLEtBQWlCLE9BQVhLO3dCQUVuQixPQUFPTDtvQkFDVCxHQUFHO2dCQUNMO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLDBCQUEwQmpCLDZCQUE2QmUsT0FDdkRiLFFBQVFlLHdCQUF3QkMsR0FBRyxDQUFDLFNBQUNDO29CQUNuQyxJQUFNSixTQUFPSSx3QkFDUFAsVUFBVVEsZ0JBQU8sQ0FBQ04saUJBQWlCLENBQUNDLFFBQU1DLFFBaEN2Q2pCO29CQWtDVCxPQUFPYTtnQkFDVCxJQUNBUyxXQUFXLElBcENBdEIsU0FvQ2FHO2dCQUU5QixPQUFPbUI7WUFDVDs7O1dBdkNtQnRCIn0=