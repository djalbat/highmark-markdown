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
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(FootnotesListHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(FootnotesListHTMLNode, outerNode);
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
 //   static fromFootnotesItemReplacementsAndStart(footnotesItemReplacements, start) {
 //     const ruleName = FOOTNOTES_LIST_RULE_NAME,
 //       childNodes = footnotesItemReplacements.map((footnotesItemReplacement) => {
 //         const footnotesItemReplacementMode = footnotesItemReplacement.getFootnotesItemMarkdownNode(),
 //           childNode = footnotesItemReplacementMode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdC9mb290bm90ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IFNUQVJUX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IFNUQVJUX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLnN0YXJ0OyAgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwib2xcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJmb290bm90ZXNcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhGb290bm90ZXNMaXN0SFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEZvb3Rub3Rlc0xpc3RIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuXG4vLyBcInVzZSBzdHJpY3RcIjtcbi8vXG4vLyBpbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duXCI7XG4vL1xuLy8gaW1wb3J0IHsgRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL3J1bGVOYW1lc1wiO1xuLy9cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuLy8gICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCwgc3RhcnQpIHtcbi8vICAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCk7XG4vL1xuLy8gICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbi8vICAgfVxuLy9cbi8vICAgZ2V0U3RhcnQoKSB7XG4vLyAgICAgcmV0dXJuIHRoaXMuc3RhcnQ7XG4vLyAgIH1cbi8vXG4vLyAgIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5zdGFydCk7IH1cbi8vXG4vLyAgIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4vLyAgICAgY29uc3QgcnVsZU5hbWUgPSBGT09UTk9URVNfTElTVF9SVUxFX05BTUUsXG4vLyAgICAgICBjaGlsZE5vZGVzID0gW10sXG4vLyAgICAgICBvcGFjaXR5ID0gbnVsbCxcbi8vICAgICAgIHN0YXJ0ID0gbnVsbCxcbi8vICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHN0YXJ0KTtcbi8vXG4vLyAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuLy9cbi8vICAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbi8vICAgfVxuLy9cbi8vICAgc3RhdGljIGZyb21Gb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzQW5kU3RhcnQoZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cywgc3RhcnQpIHtcbi8vICAgICBjb25zdCBydWxlTmFtZSA9IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSxcbi8vICAgICAgIGNoaWxkTm9kZXMgPSBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzLm1hcCgoZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50KSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudE1vZGUgPSBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQuZ2V0Rm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSgpLFxuLy8gICAgICAgICAgIGNoaWxkTm9kZSA9IGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudE1vZGU7IC8vL1xuLy9cbi8vICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbi8vICAgICAgIH0pLFxuLy8gICAgICAgb3BhY2l0eSA9IG51bGwsXG4vLyAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBzdGFydCk7XG4vL1xuLy8gICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuLy8gICB9XG4vLyB9XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdEhUTUxOb2RlIiwiYXR0cmlidXRlTmFtZSIsImNvbnRleHQiLCJTVEFSVF9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwic3RhcnQiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpBOzhCQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxPQUFPO2dCQUNuQixJQUFNRCxnQkFBZ0JFLG9DQUFvQjtnQkFFMUMsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlRixPQUFPO2dCQUNwQixJQUFNRSxpQkFBaUIsSUFBSSxDQUFDQyxLQUFLLEVBQUcsR0FBRztnQkFFdkMsT0FBT0Q7WUFDVDs7OztZQU1PRSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBakIvQk47WUFpQndEOzs7WUFFcEVRLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQUksT0FBT0YsYUFBUSxDQUFDQyxhQUFhLENBbkI1Q1IsdUJBbUJvRVM7WUFBWTs7O1dBbkJoRlQ7RUFzQnJCLGdCQUFnQjtDQUNoQixFQUFFO0NBQ0YscURBQXFEO0NBQ3JELEVBQUU7Q0FDRixpRUFBaUU7Q0FDakUsRUFBRTtDQUNGLHdFQUF3RTtDQUN4RSxnRkFBZ0Y7Q0FDaEYsb0VBQW9FO0NBQ3BFLEVBQUU7Q0FDRiwwQkFBMEI7Q0FDMUIsTUFBTTtDQUNOLEVBQUU7Q0FDRixpQkFBaUI7Q0FDakIseUJBQXlCO0NBQ3pCLE1BQU07Q0FDTixFQUFFO0NBQ0YsZ0RBQWdEO0NBQ2hELEVBQUU7Q0FDRix3Q0FBd0M7Q0FDeEMsaURBQWlEO0NBQ2pELHlCQUF5QjtDQUN6Qix3QkFBd0I7Q0FDeEIsc0JBQXNCO0NBQ3RCLG9KQUFvSjtDQUNwSixFQUFFO0NBQ0YsMkRBQTJEO0NBQzNELEVBQUU7Q0FDRix3Q0FBd0M7Q0FDeEMsTUFBTTtDQUNOLEVBQUU7Q0FDRixxRkFBcUY7Q0FDckYsaURBQWlEO0NBQ2pELG1GQUFtRjtDQUNuRix3R0FBd0c7Q0FDeEcsMERBQTBEO0NBQzFELEVBQUU7Q0FDRiw0QkFBNEI7Q0FDNUIsWUFBWTtDQUNaLHdCQUF3QjtDQUN4QixvSkFBb0o7Q0FDcEosRUFBRTtDQUNGLHdDQUF3QztDQUN4QyxNQUFNO0NBQ04sSUFBSTtDQWxFK0NPLGFBQVE7QUFhekQsaUJBYm1CUCx1QkFhWlUsV0FBVTtBQUVqQixpQkFmbUJWLHVCQWVaVyxhQUFZIn0=