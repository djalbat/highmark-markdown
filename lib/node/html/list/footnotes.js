"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesListHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _attributeNames = require("../../../attributeNames");
var _ruleNames = require("../../../ruleNames");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var FootnotesListHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(FootnotesListHTMLNode, HTMLNode);
    function FootnotesListHTMLNode() {
        _class_call_check(this, FootnotesListHTMLNode);
        return _call_super(this, FootnotesListHTMLNode, arguments);
    }
    _create_class(FootnotesListHTMLNode, [
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.START_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var attributeValue = this.start; ///
                return attributeValue;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = _ruleNames.FOOTNOTES_LIST_RULE_NAME; ///
                return string;
            }
        }
    ], [
        {
            key: "fromFootnoteItemHTMLTransforms",
            value: function fromFootnoteItemHTMLTransforms(footnoteItemHTMLTransforms) {
                var footnoteItemHTMLNodes = footnoteItemHTMLTransforms.map(function(footnoteItemHTMLTransform) {
                    var footnoteItemHTMLNode = footnoteItemHTMLTransform.getFootnoteItemHTMLNode();
                    return footnoteItemHTMLNode;
                }), childNodes = footnoteItemHTMLNodes, footnotesListHTMLNode = _html.default.fromChildNodes(FootnotesListHTMLNode, childNodes);
                return footnotesListHTMLNode;
            }
        }
    ]);
    return FootnotesListHTMLNode;
} // "use strict";
 //
 // import MarkdownNode from "../../../node/markdown";
 //
 // import { FOOTNOTES_LIST_RULE_NAME } from "../../../ruleNames";
 //
 // export default class FootnotesListMarkdownNode extends MarkdownNode {
 //   constructor(ruleName, childNodes, opacity, precedence, domElement, start) {
 //     super(ruleName, childNodes, opacity, precedence, domElement);
 //
 //     this.start = start;
 //   }
 //
 //   getStart() {
 //     return this.start;
 //   }
 //
 //   clone() { return super.clone(this.start); }
 //
 //   static fromDOMElement(domElement) {
 //     const ruleName = FOOTNOTES_LIST_RULE_NAME,
 //       childNodes = [],
 //       opacity = null,
 //       start = null,
 //       footnotesListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity, start);
 //
 //     footnotesListMarkdownNode.setDOMElement(domElement);
 //
 //     return footnotesListMarkdownNode;
 //   }
 //
 //   static fromFootnoteItemReplacementsAndStart(footnoteItemReplacements, start) {
 //     const ruleName = FOOTNOTES_LIST_RULE_NAME,
 //       childNodes = footnoteItemReplacements.map((footnoteItemReplacement) => {
 //         const footnoteItemReplacementMode = footnoteItemReplacement.getFootnoteItemMarkdownNode(),
 //           childNode = footnoteItemReplacementMode; ///
 //
 //         return childNode;
 //       }),
 //       opacity = null,
 //       footnotesListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity, start);
 //
 //     return footnotesListMarkdownNode;
 //   }
 // }
(_html.default);
_define_property(FootnotesListHTMLNode, "tagName", "ol");
_define_property(FootnotesListHTMLNode, "className", "footnotes");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdC9mb290bm90ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IFNUQVJUX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5pbXBvcnQgeyBGT09UTk9URVNfTElTVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IFNUQVJUX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLnN0YXJ0OyAgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBGT09UTk9URVNfTElTVF9SVUxFX05BTUU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwib2xcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJmb290bm90ZXNcIjtcblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKSB7XG4gICAgY29uc3QgZm9vdG5vdGVJdGVtSFRNTE5vZGVzID0gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMubWFwKChmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb290bm90ZUl0ZW1IVE1MTm9kZSA9IGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0uZ2V0Rm9vdG5vdGVJdGVtSFRNTE5vZGUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZvb3Rub3RlSXRlbUhUTUxOb2RlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBmb290bm90ZUl0ZW1IVE1MTm9kZXMsXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdEhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkTm9kZXMoRm9vdG5vdGVzTGlzdEhUTUxOb2RlLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0SFRNTE5vZGU7XG4gIH1cbn1cblxuLy8gXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuLy9cbi8vIGltcG9ydCB7IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9ydWxlTmFtZXNcIjtcbi8vXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbi8vICAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQsIHN0YXJ0KSB7XG4vLyAgICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQpO1xuLy9cbi8vICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4vLyAgIH1cbi8vXG4vLyAgIGdldFN0YXJ0KCkge1xuLy8gICAgIHJldHVybiB0aGlzLnN0YXJ0O1xuLy8gICB9XG4vL1xuLy8gICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuc3RhcnQpOyB9XG4vL1xuLy8gICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuLy8gICAgIGNvbnN0IHJ1bGVOYW1lID0gRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FLFxuLy8gICAgICAgY2hpbGROb2RlcyA9IFtdLFxuLy8gICAgICAgb3BhY2l0eSA9IG51bGwsXG4vLyAgICAgICBzdGFydCA9IG51bGwsXG4vLyAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBzdGFydCk7XG4vL1xuLy8gICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcbi8vXG4vLyAgICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7XG4vLyAgIH1cbi8vXG4vLyAgIHN0YXRpYyBmcm9tRm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzQW5kU3RhcnQoZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzLCBzdGFydCkge1xuLy8gICAgIGNvbnN0IHJ1bGVOYW1lID0gRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FLFxuLy8gICAgICAgY2hpbGROb2RlcyA9IGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50cy5tYXAoKGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50KSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50TW9kZSA9IGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50LmdldEZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSgpLFxuLy8gICAgICAgICAgIGNoaWxkTm9kZSA9IGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50TW9kZTsgLy8vXG4vL1xuLy8gICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuLy8gICAgICAgfSksXG4vLyAgICAgICBvcGFjaXR5ID0gbnVsbCxcbi8vICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHN0YXJ0KTtcbi8vXG4vLyAgICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7XG4vLyAgIH1cbi8vIH1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNMaXN0SFRNTE5vZGUiLCJhdHRyaWJ1dGVOYW1lIiwiY29udGV4dCIsIlNUQVJUX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJzdGFydCIsImFzU3RyaW5nIiwic3RyaW5nIiwiRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIiwiZnJvbUZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MTm9kZXMiLCJtYXAiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiZm9vdG5vdGVJdGVtSFRNTE5vZGUiLCJnZXRGb290bm90ZUl0ZW1IVE1MTm9kZSIsImNoaWxkTm9kZXMiLCJmb290bm90ZXNMaXN0SFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21DaGlsZE5vZGVzIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7OEJBRWdCO3lCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLE9BQU87Z0JBQ25CLElBQU1ELGdCQUFnQkUsb0NBQW9CO2dCQUUxQyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLE9BQU87Z0JBQ3BCLElBQU1FLGlCQUFpQixJQUFJLENBQUNDLEtBQUssRUFBRyxHQUFHO2dCQUV2QyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVNDLG1DQUF3QixFQUFHLEdBQUc7Z0JBRTdDLE9BQU9EO1lBQ1Q7Ozs7WUFNT0UsS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCQywwQkFBMEI7Z0JBQzlELElBQU1DLHdCQUF3QkQsMkJBQTJCRSxHQUFHLENBQUMsU0FBQ0M7b0JBQ3RELElBQU1DLHVCQUF1QkQsMEJBQTBCRSx1QkFBdUI7b0JBRTlFLE9BQU9EO2dCQUNULElBQ0FFLGFBQWFMLHVCQUNiTSx3QkFBd0JDLGFBQVEsQ0FBQ0MsY0FBYyxDQTlCcENuQix1QkE4QjREZ0I7Z0JBRTdFLE9BQU9DO1lBQ1Q7OztXQWpDbUJqQjtFQW9DckIsZ0JBQWdCO0NBQ2hCLEVBQUU7Q0FDRixxREFBcUQ7Q0FDckQsRUFBRTtDQUNGLGlFQUFpRTtDQUNqRSxFQUFFO0NBQ0Ysd0VBQXdFO0NBQ3hFLGdGQUFnRjtDQUNoRixvRUFBb0U7Q0FDcEUsRUFBRTtDQUNGLDBCQUEwQjtDQUMxQixNQUFNO0NBQ04sRUFBRTtDQUNGLGlCQUFpQjtDQUNqQix5QkFBeUI7Q0FDekIsTUFBTTtDQUNOLEVBQUU7Q0FDRixnREFBZ0Q7Q0FDaEQsRUFBRTtDQUNGLHdDQUF3QztDQUN4QyxpREFBaUQ7Q0FDakQseUJBQXlCO0NBQ3pCLHdCQUF3QjtDQUN4QixzQkFBc0I7Q0FDdEIsb0pBQW9KO0NBQ3BKLEVBQUU7Q0FDRiwyREFBMkQ7Q0FDM0QsRUFBRTtDQUNGLHdDQUF3QztDQUN4QyxNQUFNO0NBQ04sRUFBRTtDQUNGLG1GQUFtRjtDQUNuRixpREFBaUQ7Q0FDakQsaUZBQWlGO0NBQ2pGLHFHQUFxRztDQUNyRyx5REFBeUQ7Q0FDekQsRUFBRTtDQUNGLDRCQUE0QjtDQUM1QixZQUFZO0NBQ1osd0JBQXdCO0NBQ3hCLG9KQUFvSjtDQUNwSixFQUFFO0NBQ0Ysd0NBQXdDO0NBQ3hDLE1BQU07Q0FDTixJQUFJO0NBaEYrQ2tCLGFBQVE7QUFtQnpELGlCQW5CbUJsQix1QkFtQlpvQixXQUFVO0FBRWpCLGlCQXJCbUJwQix1QkFxQlpxQixhQUFZIn0=