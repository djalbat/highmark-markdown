"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorCSSNode;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
var _tagName = /*#__PURE__*/ _interop_require_default(require("../../map/tagName"));
var _className = /*#__PURE__*/ _interop_require_default(require("../../map/className"));
var _markdown = /*#__PURE__*/ _interop_require_wildcard(require("../../ruleNames/markdown"));
var _constants = require("../../constants");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var STRONG_TEXT_MARKDOWN_RULE_NAME = _markdown.default.STRONG_TEXT_MARKDOWN_RULE_NAME, ORDERED_LIST_MARKDOWN_RULE_NAME = _markdown.default.ORDERED_LIST_MARKDOWN_RULE_NAME, ORDERED_ITEM_MARKDOWN_RULE_NAME = _markdown.default.ORDERED_ITEM_MARKDOWN_RULE_NAME, UNORDERED_ITEM_MARKDOWN_RULE_NAME = _markdown.default.UNORDERED_ITEM_MARKDOWN_RULE_NAME, UNORDERED_LIST_MARKDOWN_RULE_NAME = _markdown.default.UNORDERED_LIST_MARKDOWN_RULE_NAME, STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME = _markdown.default.STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME;
var SelectorCSSNode = /*#__PURE__*/ function(CSSNode) {
    _inherits(SelectorCSSNode, CSSNode);
    function SelectorCSSNode() {
        _class_call_check(this, SelectorCSSNode);
        return _call_super(this, SelectorCSSNode, arguments);
    }
    _create_class(SelectorCSSNode, [
        {
            key: "markdownRuleName",
            value: function markdownRuleName() {
                return this.outerNode.markdownRuleName();
            }
        },
        {
            key: "asCSS",
            value: function asCSS(context) {
                var css;
                var markdownRuleName = this.markdownRuleName();
                // if (ruleNameTerminalNode !== null) {
                if (markdownRuleName === _markdown.DIVISION_MARKDOWN_RULE_NAME) {
                    css = null;
                } else {
                    css = _constants.EMPTY_STRING;
                    var markdownRuleNamesIncludesRuleName = _markdown.default.includes(markdownRuleName);
                    if (markdownRuleNamesIncludesRuleName) {
                        var tagName = _tagName.default[markdownRuleName];
                        if (tagName !== null) {
                            css = "".concat(css).concat(tagName);
                        }
                        switch(markdownRuleName){
                            case ORDERED_ITEM_MARKDOWN_RULE_NAME:
                                {
                                    var tagName1 = _tagName.default[ORDERED_LIST_MARKDOWN_RULE_NAME], css1 = "".concat(tagName1, " > ").concat(css1);
                                    break;
                                }
                            case UNORDERED_ITEM_MARKDOWN_RULE_NAME:
                                {
                                    var tagName2 = _tagName.default[UNORDERED_LIST_MARKDOWN_RULE_NAME];
                                    css = "".concat(tagName2, " > ").concat(css);
                                    break;
                                }
                            case STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME:
                                {
                                    var tagName3 = _tagName.default[STRONG_TEXT_MARKDOWN_RULE_NAME];
                                    css = "".concat(css, " > ").concat(tagName3);
                                    break;
                                }
                        }
                        var className = _className.default[markdownRuleName];
                        if (className !== null) {
                            css = "".concat(css, ".").concat(className);
                        }
                    // const offset = 1,
                    //       remainingContent = remainingContentFromNodeTokensAndOffset(node, tokens, offset);
                    //
                    // css = `${css}${remainingContent}`;
                    }
                }
                // } else {
                //   const offset = 0,
                //         remainingContent = remainingContentFromNodeTokensAndOffset(node, tokens, offset);
                //
                //   css = remainingContent; ///
                // }
                return css;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _css.default.fromNothing(SelectorCSSNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _css.default.fromOuterNode(SelectorCSSNode, outerNode);
            }
        }
    ]);
    return SelectorCSSNode;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uLy4uL25vZGUvY3NzXCI7XG5pbXBvcnQgdGFnTmFtZU1hcCBmcm9tIFwiLi4vLi4vbWFwL3RhZ05hbWVcIjtcbmltcG9ydCBjbGFzc05hbWVNYXAgZnJvbSBcIi4uLy4uL21hcC9jbGFzc05hbWVcIjtcbmltcG9ydCBtYXJrZG93blJ1bGVOYW1lcyBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXMvbWFya2Rvd25cIjtcblxuY29uc3QgeyBTVFJPTkdfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgIE9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgIE9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRSxcbiAgICAgICAgVU5PUkRFUkVEX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FLFxuICAgICAgICBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIH0gPSBtYXJrZG93blJ1bGVOYW1lcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JDU1NOb2RlIGV4dGVuZHMgQ1NTTm9kZSB7XG4gIG1hcmtkb3duUnVsZU5hbWUoKSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5tYXJrZG93blJ1bGVOYW1lKCk7IH1cblxuICBhc0NTUyhjb250ZXh0KSB7XG4gICAgbGV0IGNzcztcblxuICAgIGNvbnN0IG1hcmtkb3duUnVsZU5hbWUgPSB0aGlzLm1hcmtkb3duUnVsZU5hbWUoKTtcblxuICAgIC8vIGlmIChydWxlTmFtZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG1hcmtkb3duUnVsZU5hbWUgPT09IERJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSkge1xuICAgICAgICBjc3MgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgICAgIGNvbnN0IG1hcmtkb3duUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IG1hcmtkb3duUnVsZU5hbWVzLmluY2x1ZGVzKG1hcmtkb3duUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmIChtYXJrZG93blJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFttYXJrZG93blJ1bGVOYW1lXTtcblxuICAgICAgICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjc3MgPSBgJHtjc3N9JHt0YWdOYW1lfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3dpdGNoIChtYXJrZG93blJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIE9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgICAgY29uc3QgdGFnTmFtZSA9IHRhZ05hbWVNYXBbT1JERVJFRF9MSVNUX01BUktET1dOX1JVTEVfTkFNRV0sXG5cbiAgICAgICAgICAgICAgY3NzID0gYCR7dGFnTmFtZX0gPiAke2Nzc31gO1xuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIFVOT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRToge1xuICAgICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtVTk9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUVdO1xuXG4gICAgICAgICAgICAgIGNzcyA9IGAke3RhZ05hbWV9ID4gJHtjc3N9YDtcblxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdOYW1lTWFwW1NUUk9OR19URVhUX01BUktET1dOX1JVTEVfTkFNRV07XG5cbiAgICAgICAgICAgICAgY3NzID0gYCR7Y3NzfSA+ICR7dGFnTmFtZX1gO1xuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZU1hcFttYXJrZG93blJ1bGVOYW1lXTtcblxuICAgICAgICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNzcyA9IGAke2Nzc30uJHtjbGFzc05hbWV9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjb25zdCBvZmZzZXQgPSAxLFxuICAgICAgICAgIC8vICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQobm9kZSwgdG9rZW5zLCBvZmZzZXQpO1xuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gY3NzID0gYCR7Y3NzfSR7cmVtYWluaW5nQ29udGVudH1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnN0IG9mZnNldCA9IDAsXG4gICAgLy8gICAgICAgICByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcbiAgICAvL1xuICAgIC8vICAgY3NzID0gcmVtYWluaW5nQ29udGVudDsgLy8vXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENTU05vZGUuZnJvbU5vdGhpbmcoU2VsZWN0b3JDU1NOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tT3V0ZXJOb2RlKFNlbGVjdG9yQ1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9yQ1NTTm9kZSIsIlNUUk9OR19URVhUX01BUktET1dOX1JVTEVfTkFNRSIsIm1hcmtkb3duUnVsZU5hbWVzIiwiT1JERVJFRF9MSVNUX01BUktET1dOX1JVTEVfTkFNRSIsIk9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUiLCJVTk9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUiLCJVTk9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUiLCJTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIiwibWFya2Rvd25SdWxlTmFtZSIsIm91dGVyTm9kZSIsImFzQ1NTIiwiY29udGV4dCIsImNzcyIsIkRJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSIsIkVNUFRZX1NUUklORyIsIm1hcmtkb3duUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwidGFnTmFtZSIsInRhZ05hbWVNYXAiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVNYXAiLCJmcm9tTm90aGluZyIsIkNTU05vZGUiLCJmcm9tT3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlCcUJBOzs7MERBZkQ7OERBQ0c7Z0VBQ0U7Z0VBQ0s7eUJBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc3QixJQUFRQyxpQ0FLZ0RDLGlCQUFpQixDQUxqRUQsZ0NBQ0FFLGtDQUlnREQsaUJBQWlCLENBSmpFQyxpQ0FDQUMsa0NBR2dERixpQkFBaUIsQ0FIakVFLGlDQUNBQyxvQ0FFZ0RILGlCQUFpQixDQUZqRUcsbUNBQ0FDLG9DQUNnREosaUJBQWlCLENBRGpFSSxtQ0FDQUMsOENBQWdETCxpQkFBaUIsQ0FBakVLO0FBRU8sSUFBQSxBQUFNUCxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBcUIsT0FBTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0QsZ0JBQWdCO1lBQUk7OztZQUUvREUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBSUM7Z0JBRUosSUFBTUosbUJBQW1CLElBQUksQ0FBQ0EsZ0JBQWdCO2dCQUU5Qyx1Q0FBdUM7Z0JBQ3JDLElBQUlBLHFCQUFxQksscUNBQTJCLEVBQUU7b0JBQ3BERCxNQUFNO2dCQUNSLE9BQU87b0JBQ0xBLE1BQU1FLHVCQUFZO29CQUVsQixJQUFNQyxvQ0FBb0NiLGlCQUFpQixDQUFDYyxRQUFRLENBQUNSO29CQUVyRSxJQUFJTyxtQ0FBbUM7d0JBQ3JDLElBQU1FLFVBQVVDLGdCQUFVLENBQUNWLGlCQUFpQjt3QkFFNUMsSUFBSVMsWUFBWSxNQUFNOzRCQUNwQkwsTUFBTSxBQUFDLEdBQVFLLE9BQU5MLEtBQWMsT0FBUks7d0JBQ2pCO3dCQUVBLE9BQVFUOzRCQUNOLEtBQUtKO2dDQUFpQztvQ0FDcEMsSUFBTWEsV0FBVUMsZ0JBQVUsQ0FBQ2YsZ0NBQWdDLEVBRTNEUyxPQUFNLEFBQUMsR0FBZUEsT0FBYkssVUFBUSxPQUFTLE9BQUpMO29DQUV0QjtnQ0FDRjs0QkFFQSxLQUFLUDtnQ0FBbUM7b0NBQ3RDLElBQU1ZLFdBQVVDLGdCQUFVLENBQUNaLGtDQUFrQztvQ0FFN0RNLE1BQU0sQUFBQyxHQUFlQSxPQUFiSyxVQUFRLE9BQVMsT0FBSkw7b0NBRXRCO2dDQUNGOzRCQUVBLEtBQUtMO2dDQUE2QztvQ0FDaEQsSUFBTVUsV0FBVUMsZ0JBQVUsQ0FBQ2pCLCtCQUErQjtvQ0FFMURXLE1BQU0sQUFBQyxHQUFXSyxPQUFUTCxLQUFJLE9BQWEsT0FBUks7b0NBRWxCO2dDQUNGO3dCQUNGO3dCQUVBLElBQU1FLFlBQVlDLGtCQUFZLENBQUNaLGlCQUFpQjt3QkFFaEQsSUFBSVcsY0FBYyxNQUFNOzRCQUN0QlAsTUFBTSxBQUFDLEdBQVNPLE9BQVBQLEtBQUksS0FBYSxPQUFWTzt3QkFDbEI7b0JBRUEsb0JBQW9CO29CQUNwQiwwRkFBMEY7b0JBQzFGLEVBQUU7b0JBQ0YscUNBQXFDO29CQUN2QztnQkFDRjtnQkFDRixXQUFXO2dCQUNYLHNCQUFzQjtnQkFDdEIsNEZBQTRGO2dCQUM1RixFQUFFO2dCQUNGLGdDQUFnQztnQkFDaEMsSUFBSTtnQkFFSixPQUFPUDtZQUNUOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxZQUFPLENBQUNELFdBQVcsQ0F2RTlCckI7WUF1RWlEOzs7WUFFN0R1QixLQUFBQTttQkFBUCxTQUFPQSxjQUFjZCxTQUFTO2dCQUFJLE9BQU9hLFlBQU8sQ0FBQ0MsYUFBYSxDQXpFM0N2QixpQkF5RTZEUztZQUFZOzs7V0F6RXpFVDtFQUF3QnNCLFlBQU8ifQ==