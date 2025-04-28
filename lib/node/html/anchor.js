"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AnchorHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _attributeNames = require("../../attributeNames");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var AnchorHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(AnchorHTMLNode, HTMLNode);
    function AnchorHTMLNode() {
        _class_call_check(this, AnchorHTMLNode);
        return _call_super(this, AnchorHTMLNode, arguments);
    }
    _create_class(AnchorHTMLNode, [
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.ID_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var attributeValue = "".concat(this.prepend, "-").concat(this.identifier);
                return attributeValue;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                if (context === undefined) {
                    context = indent; ///
                    indent = null;
                }
                indent = this.adjustIndent(indent);
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context), html = indent === null ? "".concat(startingTag).concat(childNodesHTML).concat(closingTag) : "".concat(indent).concat(startingTag, "\n  ").concat(childNodesHTML).concat(indent).concat(closingTag, "\n  ");
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement;
                var content = this.content(context), textNode = document.createTextNode(content);
                domElement = _get(_get_prototype_of(AnchorHTMLNode.prototype), "createDOMElement", this).call(this, context);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(AnchorHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(AnchorHTMLNode, outerNode);
            }
        }
    ]);
    return AnchorHTMLNode;
} // "use strict";
 //
 // import { EpsilonNode } from "occam-parsers";
 //
 // import MarkdownNode from "../../node/markdown";
 //
 // import { EMPTY_STRING } from "../../constants";
 // import { ANCHOR_RULE_NAME } from "../../ruleNames";
 //
 // export default class AnchorMarkdownNode extends MarkdownNode {
 //   constructor(ruleName, childNodes, opacity, precedence, domElement, prepend, identifier) {
 //     super(ruleName, childNodes, opacity, precedence, domElement, prepend);
 //
 //     this.prepend = prepend;
 //     this.identifier = identifier;
 //   }
 //
 //   getPrepend() {
 //     return this.prepend;
 //   }
 //
 //   getIdentifier() {
 //     return this.identifier;
 //   }
 //
 //   // content(context) {
 //   //   const content = EMPTY_STRING;
 //   //
 //   //   return content;
 //   // }
 //
 //   clone() { return super.clone(this.prepend, this.identifier); }
 //
 //   static fromPrependAndIdentifier(prepend, identifier) {
 //     const epsilonNode = EpsilonNode.fromNothing(),
 //       ruleName = ANCHOR_RULE_NAME,
 //       childNodes = [
 //         epsilonNode
 //       ],
 //       opacity = null,
 //       anchorMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(AnchorMarkdownNode, ruleName, childNodes, opacity, prepend, identifier);
 //
 //     return anchorMarkdownNode;
 //   }
 // }
(_html.default);
// childNodesAsHTML(indent, context) {
//   const content = this.content(context),
//         childNodesHTML = content; ///
//
//   return childNodesHTML;
// }
_define_property(AnchorHTMLNode, "tagName", "a");
_define_property(AnchorHTMLNode, "className", "anchor");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYW5jaG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5pbXBvcnQgeyBJRF9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmNob3JIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IElEX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBgJHt0aGlzLnByZXBlbmR9LSR7dGhpcy5pZGVudGlmaWVyfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IGluZGVudDsgLy8vXG5cbiAgICAgIGluZGVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgaHRtbCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuICAke2NoaWxkTm9kZXNIVE1MfSR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbiAgYDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gc3VwZXIuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KVxuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgLy8gY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAvLyAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gY29udGVudDsgLy8vXG4gIC8vXG4gIC8vICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICAvLyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJhbmNob3JcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhBbmNob3JIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQW5jaG9ySFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cblxuLy8gXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gaW1wb3J0IHsgRXBzaWxvbk5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuLy9cbi8vIGltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbi8vXG4vLyBpbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG4vLyBpbXBvcnQgeyBBTkNIT1JfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuLy9cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuY2hvck1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4vLyAgIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBwcmVwZW5kLCBpZGVudGlmaWVyKSB7XG4vLyAgICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQsIHByZXBlbmQpO1xuLy9cbi8vICAgICB0aGlzLnByZXBlbmQgPSBwcmVwZW5kO1xuLy8gICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4vLyAgIH1cbi8vXG4vLyAgIGdldFByZXBlbmQoKSB7XG4vLyAgICAgcmV0dXJuIHRoaXMucHJlcGVuZDtcbi8vICAgfVxuLy9cbi8vICAgZ2V0SWRlbnRpZmllcigpIHtcbi8vICAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuLy8gICB9XG4vL1xuLy8gICAvLyBjb250ZW50KGNvbnRleHQpIHtcbi8vICAgLy8gICBjb25zdCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuLy8gICAvL1xuLy8gICAvLyAgIHJldHVybiBjb250ZW50O1xuLy8gICAvLyB9XG4vL1xuLy8gICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMucHJlcGVuZCwgdGhpcy5pZGVudGlmaWVyKTsgfVxuLy9cbi8vICAgc3RhdGljIGZyb21QcmVwZW5kQW5kSWRlbnRpZmllcihwcmVwZW5kLCBpZGVudGlmaWVyKSB7XG4vLyAgICAgY29uc3QgZXBzaWxvbk5vZGUgPSBFcHNpbG9uTm9kZS5mcm9tTm90aGluZygpLFxuLy8gICAgICAgcnVsZU5hbWUgPSBBTkNIT1JfUlVMRV9OQU1FLFxuLy8gICAgICAgY2hpbGROb2RlcyA9IFtcbi8vICAgICAgICAgZXBzaWxvbk5vZGVcbi8vICAgICAgIF0sXG4vLyAgICAgICBvcGFjaXR5ID0gbnVsbCxcbi8vICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShBbmNob3JNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVwZW5kLCBpZGVudGlmaWVyKTtcbi8vXG4vLyAgICAgcmV0dXJuIGFuY2hvck1hcmtkb3duTm9kZTtcbi8vICAgfVxuLy8gfVxuIl0sIm5hbWVzIjpbIkFuY2hvckhUTUxOb2RlIiwiYXR0cmlidXRlTmFtZSIsImNvbnRleHQiLCJJRF9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwicHJlcGVuZCIsImlkZW50aWZpZXIiLCJhc0hUTUwiLCJpbmRlbnQiLCJ1bmRlZmluZWQiLCJhZGp1c3RJbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJodG1sIiwiY3JlYXRlRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJjb250ZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwicGFyZW50RE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKQTs4QkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLCtCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLE9BQU87Z0JBQ25CLElBQU1ELGdCQUFnQkUsaUNBQWlCO2dCQUV2QyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLE9BQU87Z0JBQ3BCLElBQU1FLGlCQUFpQixBQUFDLEdBQWtCLE9BQWhCLElBQUksQ0FBQ0MsT0FBTyxFQUFDLEtBQW1CLE9BQWhCLElBQUksQ0FBQ0MsVUFBVTtnQkFFekQsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVOLE9BQU87Z0JBQ3BCLElBQUlBLFlBQVlPLFdBQVc7b0JBQ3pCUCxVQUFVTSxRQUFRLEdBQUc7b0JBRXJCQSxTQUFTO2dCQUNYO2dCQUVBQSxTQUFTLElBQUksQ0FBQ0UsWUFBWSxDQUFDRjtnQkFFM0IsSUFBTUcsaUJBQWlCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNKLFFBQVFOLFVBQy9DVyxjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDWCxVQUMvQlksYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ1osVUFDN0JhLE9BQU8sQUFBQ1AsV0FBVyxPQUNWLEFBQUMsR0FBZ0JHLE9BQWRFLGFBQStCQyxPQUFqQkgsZ0JBQTRCLE9BQVhHLGNBQ2hDLEFBQUMsR0FBV0QsT0FBVEwsUUFDcEJHLE9BRDZCRSxhQUFZLFFBQ3hCTCxPQUFqQkcsZ0JBQTBCRyxPQUFUTixRQUFvQixPQUFYTSxZQUFXO2dCQUdyQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQmQsT0FBTztnQkFDdEIsSUFBSWU7Z0JBRUosSUFBTUMsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ2hCLFVBQ3ZCaUIsV0FBV0MsU0FBU0MsY0FBYyxDQUFDSDtnQkFFekNELGFBQWEsdUJBeENJakIsMkJBd0NFZ0Isb0JBQU4sSUFBSyxhQUFrQmQ7Z0JBRXBDLElBQU1vQixtQkFBbUJMLFlBQWEsR0FBRztnQkFFekNBLGFBQWFFLFVBQVUsR0FBRztnQkFFMUJHLGlCQUFpQkMsV0FBVyxDQUFDTjtnQkFFN0JBLGFBQWFLLGtCQUFtQixHQUFHO2dCQUVuQyxPQUFPTDtZQUNUOzs7O1lBYU9PLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxhQUFRLENBQUNELFdBQVcsQ0FoRS9CeEI7WUFnRWlEOzs7WUFFN0QwQixLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVEsQ0FBQ0MsYUFBYSxDQWxFNUMxQixnQkFrRTZEMkI7WUFBWTs7O1dBbEV6RTNCO0VBcUVyQixnQkFBZ0I7Q0FDaEIsRUFBRTtDQUNGLCtDQUErQztDQUMvQyxFQUFFO0NBQ0Ysa0RBQWtEO0NBQ2xELEVBQUU7Q0FDRixrREFBa0Q7Q0FDbEQsc0RBQXNEO0NBQ3RELEVBQUU7Q0FDRixpRUFBaUU7Q0FDakUsOEZBQThGO0NBQzlGLDZFQUE2RTtDQUM3RSxFQUFFO0NBQ0YsOEJBQThCO0NBQzlCLG9DQUFvQztDQUNwQyxNQUFNO0NBQ04sRUFBRTtDQUNGLG1CQUFtQjtDQUNuQiwyQkFBMkI7Q0FDM0IsTUFBTTtDQUNOLEVBQUU7Q0FDRixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLE1BQU07Q0FDTixFQUFFO0NBQ0YsMEJBQTBCO0NBQzFCLHVDQUF1QztDQUN2QyxPQUFPO0NBQ1AseUJBQXlCO0NBQ3pCLFNBQVM7Q0FDVCxFQUFFO0NBQ0YsbUVBQW1FO0NBQ25FLEVBQUU7Q0FDRiwyREFBMkQ7Q0FDM0QscURBQXFEO0NBQ3JELHFDQUFxQztDQUNyQyx1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWCx3QkFBd0I7Q0FDeEIsb0pBQW9KO0NBQ3BKLEVBQUU7Q0FDRixpQ0FBaUM7Q0FDakMsTUFBTTtDQUNOLElBQUk7Q0FqSHdDeUIsYUFBUTtBQXFEbEQsc0NBQXNDO0FBQ3RDLDJDQUEyQztBQUMzQyx3Q0FBd0M7QUFDeEMsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQixJQUFJO0FBRUosaUJBNURtQnpCLGdCQTREWjRCLFdBQVU7QUFFakIsaUJBOURtQjVCLGdCQThEWjZCLGFBQVkifQ==