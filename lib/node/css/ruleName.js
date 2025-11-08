"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameCSSNode;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
var _tagName = /*#__PURE__*/ _interop_require_default(require("../../map/tagName"));
var _className = /*#__PURE__*/ _interop_require_default(require("../../map/className"));
var _constants = require("../../constants");
var _markdown = require("../../ruleNames/markdown");
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
var RuleNameCSSNode = /*#__PURE__*/ function(CSSNode) {
    _inherits(RuleNameCSSNode, CSSNode);
    function RuleNameCSSNode() {
        _class_call_check(this, RuleNameCSSNode);
        return _call_super(this, RuleNameCSSNode, arguments);
    }
    _create_class(RuleNameCSSNode, [
        {
            key: "markdownRuleName",
            value: function markdownRuleName() {
                var markdownStyleNode = this.getMarkdownStyleNode(), markdownRuleName = markdownStyleNode.markdownRuleName();
                return markdownRuleName;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(context) {
                var css = _constants.EMPTY_STRING;
                var markdownRuleName = this.markdownRuleName(), className = _className.default[markdownRuleName], tagName = _tagName.default[markdownRuleName];
                if (tagName !== null) {
                    css = "".concat(tagName);
                }
                switch(markdownRuleName){
                    case _markdown.ORDERED_ITEM_MARKDOWN_RULE_NAME:
                        {
                            var tagName1 = _tagName.default[_markdown.ORDERED_LIST_MARKDOWN_RULE_NAME];
                            css = "".concat(tagName1, " > ").concat(css);
                            break;
                        }
                    case _markdown.UNORDERED_ITEM_MARKDOWN_RULE_NAME:
                        {
                            var tagName2 = _tagName.default[_markdown.UNORDERED_LIST_MARKDOWN_RULE_NAME];
                            css = "".concat(tagName2, " > ").concat(css);
                            break;
                        }
                    case _markdown.STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME:
                        {
                            var tagName3 = _tagName.default[_markdown.STRONG_TEXT_MARKDOWN_RULE_NAME];
                            css = "".concat(css, " > ").concat(tagName3);
                            break;
                        }
                }
                if (className !== null) {
                    css = "".concat(css, ".").concat(className);
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _css.default.fromNothing(RuleNameCSSNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _css.default.fromOuterNode(RuleNameCSSNode, outerNode);
            }
        }
    ]);
    return RuleNameCSSNode;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uLy4uL25vZGUvY3NzXCI7XG5pbXBvcnQgdGFnTmFtZU1hcCBmcm9tIFwiLi4vLi4vbWFwL3RhZ05hbWVcIjtcbmltcG9ydCBjbGFzc05hbWVNYXAgZnJvbSBcIi4uLy4uL21hcC9jbGFzc05hbWVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU1RST05HX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FLFxuICAgICAgICAgT1JERVJFRF9MSVNUX01BUktET1dOX1JVTEVfTkFNRSxcbiAgICAgICAgIE9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgICBVTk9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgICBVTk9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgICBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZUNTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgbWFya2Rvd25SdWxlTmFtZSgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZU5vZGUoKSxcbiAgICAgICAgICBtYXJrZG93blJ1bGVOYW1lID0gbWFya2Rvd25TdHlsZU5vZGUubWFya2Rvd25SdWxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duUnVsZU5hbWU7XG4gIH1cblxuICBhc0NTUyhjb250ZXh0KSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IG1hcmtkb3duUnVsZU5hbWUgPSB0aGlzLm1hcmtkb3duUnVsZU5hbWUoKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWVNYXBbbWFya2Rvd25SdWxlTmFtZV0sXG4gICAgICAgICAgdGFnTmFtZSA9IHRhZ05hbWVNYXBbbWFya2Rvd25SdWxlTmFtZV07XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY3NzID0gYCR7dGFnTmFtZX1gO1xuICAgIH1cblxuICAgIHN3aXRjaCAobWFya2Rvd25SdWxlTmFtZSkge1xuICAgICAgY2FzZSBPUkRFUkVEX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdOYW1lTWFwW09SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUVdO1xuXG4gICAgICAgIGNzcyA9IGAke3RhZ05hbWV9ID4gJHtjc3N9YDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBVTk9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IHRhZ05hbWVNYXBbVU5PUkRFUkVEX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FXTtcblxuICAgICAgICBjc3MgPSBgJHt0YWdOYW1lfSA+ICR7Y3NzfWA7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX01BUktET1dOX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtTVFJPTkdfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUVdO1xuXG4gICAgICAgIGNzcyA9IGAke2Nzc30gPiAke3RhZ05hbWV9YDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICBjc3MgPSBgJHtjc3N9LiR7Y2xhc3NOYW1lfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENTU05vZGUuZnJvbU5vdGhpbmcoUnVsZU5hbWVDU1NOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tT3V0ZXJOb2RlKFJ1bGVOYW1lQ1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVOYW1lQ1NTTm9kZSIsIm1hcmtkb3duUnVsZU5hbWUiLCJtYXJrZG93blN0eWxlTm9kZSIsImdldE1hcmtkb3duU3R5bGVOb2RlIiwiYXNDU1MiLCJjb250ZXh0IiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lTWFwIiwidGFnTmFtZSIsInRhZ05hbWVNYXAiLCJPUkRFUkVEX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FIiwiT1JERVJFRF9MSVNUX01BUktET1dOX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9MSVNUX01BUktET1dOX1JVTEVfTkFNRSIsIlNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUUiLCJTVFJPTkdfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUUiLCJmcm9tTm90aGluZyIsIkNTU05vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OzswREFaRDs4REFDRztnRUFDRTt5QkFFSTt3QkFNK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixJQUFJLENBQUNDLG9CQUFvQixJQUM3Q0YsbUJBQW1CQyxrQkFBa0JELGdCQUFnQjtnQkFFM0QsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQUlDLE1BQU1DLHVCQUFZO2dCQUV0QixJQUFNTixtQkFBbUIsSUFBSSxDQUFDQSxnQkFBZ0IsSUFDeENPLFlBQVlDLGtCQUFZLENBQUNSLGlCQUFpQixFQUMxQ1MsVUFBVUMsZ0JBQVUsQ0FBQ1YsaUJBQWlCO2dCQUU1QyxJQUFJUyxZQUFZLE1BQU07b0JBQ3BCSixNQUFNLEFBQUMsR0FBVSxPQUFSSTtnQkFDWDtnQkFFQSxPQUFRVDtvQkFDTixLQUFLVyx5Q0FBK0I7d0JBQUU7NEJBQ3BDLElBQU1GLFdBQVVDLGdCQUFVLENBQUNFLHlDQUErQixDQUFDOzRCQUUzRFAsTUFBTSxBQUFDLEdBQWVBLE9BQWJJLFVBQVEsT0FBUyxPQUFKSjs0QkFFdEI7d0JBQ0Y7b0JBRUEsS0FBS1EsMkNBQWlDO3dCQUFFOzRCQUN0QyxJQUFNSixXQUFVQyxnQkFBVSxDQUFDSSwyQ0FBaUMsQ0FBQzs0QkFFN0RULE1BQU0sQUFBQyxHQUFlQSxPQUFiSSxVQUFRLE9BQVMsT0FBSko7NEJBRXRCO3dCQUNGO29CQUVBLEtBQUtVLHFEQUEyQzt3QkFBRTs0QkFDaEQsSUFBTU4sV0FBVUMsZ0JBQVUsQ0FBQ00sd0NBQThCLENBQUM7NEJBRTFEWCxNQUFNLEFBQUMsR0FBV0ksT0FBVEosS0FBSSxPQUFhLE9BQVJJOzRCQUVsQjt3QkFDRjtnQkFDRjtnQkFFQSxJQUFJRixjQUFjLE1BQU07b0JBQ3RCRixNQUFNLEFBQUMsR0FBU0UsT0FBUEYsS0FBSSxLQUFhLE9BQVZFO2dCQUNsQjtnQkFFQSxPQUFPRjtZQUNUOzs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxZQUFPLENBQUNELFdBQVcsQ0FwRDlCbEI7WUFvRGlEOzs7WUFFN0RvQixLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLFlBQU8sQ0FBQ0MsYUFBYSxDQXREM0NwQixpQkFzRDZEcUI7WUFBWTs7O1dBdER6RXJCO0VBQXdCbUIsWUFBTyJ9