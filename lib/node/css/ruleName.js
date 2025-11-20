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
                    css = " ".concat(tagName);
                }
                switch(markdownRuleName){
                    case _markdown.ORDERED_ITEM_MARKDOWN_RULE_NAME:
                        {
                            var tagName1 = _tagName.default[_markdown.ORDERED_LIST_MARKDOWN_RULE_NAME];
                            css = " ".concat(tagName1, " > ").concat(css);
                            break;
                        }
                    case _markdown.UNORDERED_ITEM_MARKDOWN_RULE_NAME:
                        {
                            var tagName2 = _tagName.default[_markdown.UNORDERED_LIST_MARKDOWN_RULE_NAME];
                            css = " ".concat(tagName2, " > ").concat(css);
                            break;
                        }
                    case _markdown.STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME:
                        {
                            var tagName3 = _tagName.default[_markdown.STRONG_TEXT_MARKDOWN_RULE_NAME];
                            css = " ".concat(css, " > ").concat(tagName3);
                            break;
                        }
                }
                if (className !== null) {
                    css = " ".concat(css, ".").concat(className);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uLy4uL25vZGUvY3NzXCI7XG5pbXBvcnQgdGFnTmFtZU1hcCBmcm9tIFwiLi4vLi4vbWFwL3RhZ05hbWVcIjtcbmltcG9ydCBjbGFzc05hbWVNYXAgZnJvbSBcIi4uLy4uL21hcC9jbGFzc05hbWVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU1RST05HX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FLFxuICAgICAgICAgT1JERVJFRF9MSVNUX01BUktET1dOX1JVTEVfTkFNRSxcbiAgICAgICAgIE9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgICBVTk9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgICBVTk9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgICBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZUNTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgbWFya2Rvd25SdWxlTmFtZSgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZU5vZGUoKSxcbiAgICAgICAgICBtYXJrZG93blJ1bGVOYW1lID0gbWFya2Rvd25TdHlsZU5vZGUubWFya2Rvd25SdWxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duUnVsZU5hbWU7XG4gIH1cblxuICBhc0NTUyhjb250ZXh0KSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IG1hcmtkb3duUnVsZU5hbWUgPSB0aGlzLm1hcmtkb3duUnVsZU5hbWUoKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWVNYXBbbWFya2Rvd25SdWxlTmFtZV0sXG4gICAgICAgICAgdGFnTmFtZSA9IHRhZ05hbWVNYXBbbWFya2Rvd25SdWxlTmFtZV07XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY3NzID0gYCAke3RhZ05hbWV9YDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKG1hcmtkb3duUnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtPUkRFUkVEX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FXTtcblxuICAgICAgICBjc3MgPSBgICR7dGFnTmFtZX0gPiAke2Nzc31gO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFVOT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtVTk9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUVdO1xuXG4gICAgICAgIGNzcyA9IGAgJHt0YWdOYW1lfSA+ICR7Y3NzfWA7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX01BUktET1dOX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtTVFJPTkdfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUVdO1xuXG4gICAgICAgIGNzcyA9IGAgJHtjc3N9ID4gJHt0YWdOYW1lfWA7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY3NzID0gYCAke2Nzc30uJHtjbGFzc05hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tTm90aGluZyhSdWxlTmFtZUNTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoUnVsZU5hbWVDU1NOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiUnVsZU5hbWVDU1NOb2RlIiwibWFya2Rvd25SdWxlTmFtZSIsIm1hcmtkb3duU3R5bGVOb2RlIiwiZ2V0TWFya2Rvd25TdHlsZU5vZGUiLCJhc0NTUyIsImNvbnRleHQiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJjbGFzc05hbWUiLCJjbGFzc05hbWVNYXAiLCJ0YWdOYW1lIiwidGFnTmFtZU1hcCIsIk9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUiLCJPUkRFUkVEX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FIiwiVU5PUkRFUkVEX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FIiwiVU5PUkRFUkVEX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FIiwiU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX01BUktET1dOX1JVTEVfTkFNRSIsIlNUUk9OR19URVhUX01BUktET1dOX1JVTEVfTkFNRSIsImZyb21Ob3RoaW5nIiwiQ1NTTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OzBEQVpEOzhEQUNHO2dFQUNFO3lCQUVJO3dCQU0rQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFBLEFBQU1BLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsb0JBQW9CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzdDRixtQkFBbUJDLGtCQUFrQkQsZ0JBQWdCO2dCQUUzRCxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1OLG1CQUFtQixJQUFJLENBQUNBLGdCQUFnQixJQUN4Q08sWUFBWUMsa0JBQVksQ0FBQ1IsaUJBQWlCLEVBQzFDUyxVQUFVQyxnQkFBVSxDQUFDVixpQkFBaUI7Z0JBRTVDLElBQUlTLFlBQVksTUFBTTtvQkFDcEJKLE1BQU0sQUFBQyxJQUFXLE9BQVJJO2dCQUNaO2dCQUVBLE9BQVFUO29CQUNOLEtBQUtXLHlDQUErQjt3QkFBRTs0QkFDcEMsSUFBTUYsV0FBVUMsZ0JBQVUsQ0FBQ0UseUNBQStCLENBQUM7NEJBRTNEUCxNQUFNLEFBQUMsSUFBZ0JBLE9BQWJJLFVBQVEsT0FBUyxPQUFKSjs0QkFFdkI7d0JBQ0Y7b0JBRUEsS0FBS1EsMkNBQWlDO3dCQUFFOzRCQUN0QyxJQUFNSixXQUFVQyxnQkFBVSxDQUFDSSwyQ0FBaUMsQ0FBQzs0QkFFN0RULE1BQU0sQUFBQyxJQUFnQkEsT0FBYkksVUFBUSxPQUFTLE9BQUpKOzRCQUV2Qjt3QkFDRjtvQkFFQSxLQUFLVSxxREFBMkM7d0JBQUU7NEJBQ2hELElBQU1OLFdBQVVDLGdCQUFVLENBQUNNLHdDQUE4QixDQUFDOzRCQUUxRFgsTUFBTSxBQUFDLElBQVlJLE9BQVRKLEtBQUksT0FBYSxPQUFSSTs0QkFFbkI7d0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUYsY0FBYyxNQUFNO29CQUN0QkYsTUFBTSxBQUFDLElBQVVFLE9BQVBGLEtBQUksS0FBYSxPQUFWRTtnQkFDbkI7Z0JBRUEsT0FBT0Y7WUFDVDs7OztZQUVPWSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsWUFBTyxDQUFDRCxXQUFXLENBcEQ5QmxCO1lBb0RpRDs7O1lBRTdEb0IsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixZQUFPLENBQUNDLGFBQWEsQ0F0RDNDcEIsaUJBc0Q2RHFCO1lBQVk7OztXQXREekVyQjtFQUF3Qm1CLFlBQU8ifQ==