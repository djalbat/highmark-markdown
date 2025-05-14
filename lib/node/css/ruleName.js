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
                var markdownRuleName = this.markdownRuleName();
                if (markdownRuleName !== _markdown.DIVISION_MARKDOWN_RULE_NAME) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uLy4uL25vZGUvY3NzXCI7XG5pbXBvcnQgdGFnTmFtZU1hcCBmcm9tIFwiLi4vLi4vbWFwL3RhZ05hbWVcIjtcbmltcG9ydCBjbGFzc05hbWVNYXAgZnJvbSBcIi4uLy4uL21hcC9jbGFzc05hbWVcIjtcbmltcG9ydCBtYXJrZG93blJ1bGVOYW1lcyBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXMvbWFya2Rvd25cIjtcblxuY29uc3QgeyBTVFJPTkdfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgIE9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgIE9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRSxcbiAgICAgICAgVU5PUkRFUkVEX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FLFxuICAgICAgICBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIH0gPSBtYXJrZG93blJ1bGVOYW1lcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVDU1NOb2RlIGV4dGVuZHMgQ1NTTm9kZSB7XG4gIG1hcmtkb3duUnVsZU5hbWUoKSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5tYXJrZG93blJ1bGVOYW1lKCk7IH1cblxuICBhc0NTUyhjb250ZXh0KSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IG1hcmtkb3duUnVsZU5hbWUgPSB0aGlzLm1hcmtkb3duUnVsZU5hbWUoKTtcblxuICAgIGlmIChtYXJrZG93blJ1bGVOYW1lICE9PSBESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUUpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdOYW1lTWFwW21hcmtkb3duUnVsZU5hbWVdO1xuXG4gICAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjc3MgPSBgJHtjc3N9JHt0YWdOYW1lfWA7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAobWFya2Rvd25SdWxlTmFtZSkge1xuICAgICAgICBjYXNlIE9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtPUkRFUkVEX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FXSxcblxuICAgICAgICAgIGNzcyA9IGAke3RhZ05hbWV9ID4gJHtjc3N9YDtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBVTk9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtVTk9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUVdO1xuXG4gICAgICAgICAgY3NzID0gYCR7dGFnTmFtZX0gPiAke2Nzc31gO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtTVFJPTkdfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUVdO1xuXG4gICAgICAgICAgY3NzID0gYCR7Y3NzfSA+ICR7dGFnTmFtZX1gO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lTWFwW21hcmtkb3duUnVsZU5hbWVdO1xuXG4gICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNzcyA9IGAke2Nzc30uJHtjbGFzc05hbWV9YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tTm90aGluZyhSdWxlTmFtZUNTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoUnVsZU5hbWVDU1NOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiUnVsZU5hbWVDU1NOb2RlIiwiU1RST05HX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIiwibWFya2Rvd25SdWxlTmFtZXMiLCJPUkRFUkVEX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FIiwiT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9MSVNUX01BUktET1dOX1JVTEVfTkFNRSIsIlNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUUiLCJtYXJrZG93blJ1bGVOYW1lIiwib3V0ZXJOb2RlIiwiYXNDU1MiLCJjb250ZXh0IiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiRElWSVNJT05fTUFSS0RPV05fUlVMRV9OQU1FIiwidGFnTmFtZSIsInRhZ05hbWVNYXAiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVNYXAiLCJmcm9tTm90aGluZyIsIkNTU05vZGUiLCJmcm9tT3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlCcUJBOzs7MERBZkQ7OERBQ0c7Z0VBQ0U7Z0VBQ0s7eUJBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc3QixJQUFRQyxpQ0FLZ0RDLGlCQUFpQixDQUxqRUQsZ0NBQ0FFLGtDQUlnREQsaUJBQWlCLENBSmpFQyxpQ0FDQUMsa0NBR2dERixpQkFBaUIsQ0FIakVFLGlDQUNBQyxvQ0FFZ0RILGlCQUFpQixDQUZqRUcsbUNBQ0FDLG9DQUNnREosaUJBQWlCLENBRGpFSSxtQ0FDQUMsOENBQWdETCxpQkFBaUIsQ0FBakVLO0FBRU8sSUFBQSxBQUFNUCxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBcUIsT0FBTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0QsZ0JBQWdCO1lBQUk7OztZQUUvREUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1MLG1CQUFtQixJQUFJLENBQUNBLGdCQUFnQjtnQkFFOUMsSUFBSUEscUJBQXFCTSxxQ0FBMkIsRUFBRTtvQkFDcEQsSUFBTUMsVUFBVUMsZ0JBQVUsQ0FBQ1IsaUJBQWlCO29CQUU1QyxJQUFJTyxZQUFZLE1BQU07d0JBQ3BCSCxNQUFNLEFBQUMsR0FBUUcsT0FBTkgsS0FBYyxPQUFSRztvQkFDakI7b0JBRUEsT0FBUVA7d0JBQ04sS0FBS0o7NEJBQWlDO2dDQUNwQyxJQUFNVyxXQUFVQyxnQkFBVSxDQUFDYixnQ0FBZ0MsRUFFM0RTLE9BQU0sQUFBQyxHQUFlQSxPQUFiRyxVQUFRLE9BQVMsT0FBSkg7Z0NBRXRCOzRCQUNGO3dCQUVBLEtBQUtQOzRCQUFtQztnQ0FDdEMsSUFBTVUsV0FBVUMsZ0JBQVUsQ0FBQ1Ysa0NBQWtDO2dDQUU3RE0sTUFBTSxBQUFDLEdBQWVBLE9BQWJHLFVBQVEsT0FBUyxPQUFKSDtnQ0FFdEI7NEJBQ0Y7d0JBRUEsS0FBS0w7NEJBQTZDO2dDQUNoRCxJQUFNUSxXQUFVQyxnQkFBVSxDQUFDZiwrQkFBK0I7Z0NBRTFEVyxNQUFNLEFBQUMsR0FBV0csT0FBVEgsS0FBSSxPQUFhLE9BQVJHO2dDQUVsQjs0QkFDRjtvQkFDRjtvQkFFQSxJQUFNRSxZQUFZQyxrQkFBWSxDQUFDVixpQkFBaUI7b0JBRWhELElBQUlTLGNBQWMsTUFBTTt3QkFDdEJMLE1BQU0sQUFBQyxHQUFTSyxPQUFQTCxLQUFJLEtBQWEsT0FBVks7b0JBQ2xCO2dCQUNGO2dCQUVBLE9BQU9MO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLFlBQU8sQ0FBQ0QsV0FBVyxDQW5EOUJuQjtZQW1EaUQ7OztZQUU3RHFCLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNaLFNBQVM7Z0JBQUksT0FBT1csWUFBTyxDQUFDQyxhQUFhLENBckQzQ3JCLGlCQXFENkRTO1lBQVk7OztXQXJEekVUO0VBQXdCb0IsWUFBTyJ9