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
                return this.outerNode.markdownRuleName();
            }
        },
        {
            key: "asCSS",
            value: function asCSS(context) {
                var css = _constants.EMPTY_STRING;
                var markdownRuleName = this.markdownRuleName(), className = _className.default[markdownRuleName], tagName = _tagName.default[markdownRuleName];
                if (tagName !== null) {
                    css = tagName; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uLy4uL25vZGUvY3NzXCI7XG5pbXBvcnQgdGFnTmFtZU1hcCBmcm9tIFwiLi4vLi4vbWFwL3RhZ05hbWVcIjtcbmltcG9ydCBjbGFzc05hbWVNYXAgZnJvbSBcIi4uLy4uL21hcC9jbGFzc05hbWVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU1RST05HX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FLFxuICAgICAgICAgT1JERVJFRF9MSVNUX01BUktET1dOX1JVTEVfTkFNRSxcbiAgICAgICAgIE9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgICBVTk9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgICBVTk9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgICBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZUNTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgbWFya2Rvd25SdWxlTmFtZSgpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLm1hcmtkb3duUnVsZU5hbWUoKTsgfVxuXG4gIGFzQ1NTKGNvbnRleHQpIHtcbiAgICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgbWFya2Rvd25SdWxlTmFtZSA9IHRoaXMubWFya2Rvd25SdWxlTmFtZSgpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZU1hcFttYXJrZG93blJ1bGVOYW1lXSxcbiAgICAgICAgICB0YWdOYW1lID0gdGFnTmFtZU1hcFttYXJrZG93blJ1bGVOYW1lXTtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBjc3MgPSB0YWdOYW1lOyAgLy8vXG4gICAgfVxuXG4gICAgc3dpdGNoIChtYXJrZG93blJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIE9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IHRhZ05hbWVNYXBbT1JERVJFRF9MSVNUX01BUktET1dOX1JVTEVfTkFNRV07XG5cbiAgICAgICAgY3NzID0gYCR7dGFnTmFtZX0gPiAke2Nzc31gO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFVOT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtVTk9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUVdO1xuXG4gICAgICAgIGNzcyA9IGAke3RhZ05hbWV9ID4gJHtjc3N9YDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdOYW1lTWFwW1NUUk9OR19URVhUX01BUktET1dOX1JVTEVfTkFNRV07XG5cbiAgICAgICAgY3NzID0gYCR7Y3NzfSA+ICR7dGFnTmFtZX1gO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgIGNzcyA9IGAke2Nzc30uJHtjbGFzc05hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tTm90aGluZyhSdWxlTmFtZUNTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoUnVsZU5hbWVDU1NOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiUnVsZU5hbWVDU1NOb2RlIiwibWFya2Rvd25SdWxlTmFtZSIsIm91dGVyTm9kZSIsImFzQ1NTIiwiY29udGV4dCIsImNzcyIsIkVNUFRZX1NUUklORyIsImNsYXNzTmFtZSIsImNsYXNzTmFtZU1hcCIsInRhZ05hbWUiLCJ0YWdOYW1lTWFwIiwiT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRSIsIk9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUiLCJVTk9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUiLCJVTk9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUiLCJTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIiwiU1RST05HX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIiwiZnJvbU5vdGhpbmciLCJDU1NOb2RlIiwiZnJvbU91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7MERBWkQ7OERBQ0c7Z0VBQ0U7eUJBRUk7d0JBTStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXFCLE9BQU8sSUFBSSxDQUFDQyxTQUFTLENBQUNELGdCQUFnQjtZQUFJOzs7WUFFL0RFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQUlDLE1BQU1DLHVCQUFZO2dCQUV0QixJQUFNTCxtQkFBbUIsSUFBSSxDQUFDQSxnQkFBZ0IsSUFDeENNLFlBQVlDLGtCQUFZLENBQUNQLGlCQUFpQixFQUMxQ1EsVUFBVUMsZ0JBQVUsQ0FBQ1QsaUJBQWlCO2dCQUU1QyxJQUFJUSxZQUFZLE1BQU07b0JBQ3BCSixNQUFNSSxTQUFVLEdBQUc7Z0JBQ3JCO2dCQUVBLE9BQVFSO29CQUNOLEtBQUtVLHlDQUErQjt3QkFBRTs0QkFDcEMsSUFBTUYsV0FBVUMsZ0JBQVUsQ0FBQ0UseUNBQStCLENBQUM7NEJBRTNEUCxNQUFNLEFBQUMsR0FBZUEsT0FBYkksVUFBUSxPQUFTLE9BQUpKOzRCQUV0Qjt3QkFDRjtvQkFFQSxLQUFLUSwyQ0FBaUM7d0JBQUU7NEJBQ3RDLElBQU1KLFdBQVVDLGdCQUFVLENBQUNJLDJDQUFpQyxDQUFDOzRCQUU3RFQsTUFBTSxBQUFDLEdBQWVBLE9BQWJJLFVBQVEsT0FBUyxPQUFKSjs0QkFFdEI7d0JBQ0Y7b0JBRUEsS0FBS1UscURBQTJDO3dCQUFFOzRCQUNoRCxJQUFNTixXQUFVQyxnQkFBVSxDQUFDTSx3Q0FBOEIsQ0FBQzs0QkFFMURYLE1BQU0sQUFBQyxHQUFXSSxPQUFUSixLQUFJLE9BQWEsT0FBUkk7NEJBRWxCO3dCQUNGO2dCQUNGO2dCQUVBLElBQUlGLGNBQWMsTUFBTTtvQkFDdEJGLE1BQU0sQUFBQyxHQUFTRSxPQUFQRixLQUFJLEtBQWEsT0FBVkU7Z0JBQ2xCO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7WUFFT1ksS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLFlBQU8sQ0FBQ0QsV0FBVyxDQS9DOUJqQjtZQStDaUQ7OztZQUU3RG1CLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNqQixTQUFTO2dCQUFJLE9BQU9nQixZQUFPLENBQUNDLGFBQWEsQ0FqRDNDbkIsaUJBaUQ2REU7WUFBWTs7O1dBakR6RUY7RUFBd0JrQixZQUFPIn0=