"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _content = /*#__PURE__*/ _interop_require_default(require("../../mixins/content"));
var _attributeNames = require("../../attributeNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, secondLast = _necessary.arrayUtilities.secondLast;
var EmailLinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(EmailLinkMarkdownNode, MarkdownNode);
    var _super = _create_super(EmailLinkMarkdownNode);
    function EmailLinkMarkdownNode() {
        _class_call_check(this, EmailLinkMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(EmailLinkMarkdownNode, [
        {
            key: "inlineText",
            value: function inlineText(context) {
                var inlineText = null;
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length;
                if (childNodesLength !== 1) {
                    var indent = null, secondChildNode = second(childNodes), inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context);
                    inlineText = inlineTextMarkdownNodeHTML; ///
                }
                return inlineText;
            }
        },
        {
            key: "emailAddress",
            value: function emailAddress(context) {
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length;
                var emailAddressTerminalNode;
                if (childNodesLength === 1) {
                    var firstChildNode = first(childNodes);
                    emailAddressTerminalNode = firstChildNode; ///
                } else {
                    var secondLastChildNode = secondLast(childNodes);
                    emailAddressTerminalNode = secondLastChildNode; ///
                }
                var emailAddressTerminalNodeContent = emailAddressTerminalNode.getContent(), emailAddress = emailAddressTerminalNodeContent; ///
                return emailAddress;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var emailAddress = this.emailAddress(context), attributeValue = "mailto:".concat(emailAddress);
                return attributeValue;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var content;
                var inlineText = this.inlineText(context);
                if (inlineText !== null) {
                    content = inlineText; ///
                } else {
                    content = this.content(context);
                }
                var domElement;
                var textNode = document.createTextNode(content);
                domElement = _get(_get_prototype_of(EmailLinkMarkdownNode.prototype), "createDOMElement", this).call(this, context);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content;
                var inlineText = this.inlineText(context);
                if (inlineText !== null) {
                    content = inlineText; ///
                } else {
                    content = this.content(context);
                }
                var childNodesHTML = content;
                return childNodesHTML;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(EmailLinkMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return EmailLinkMarkdownNode;
}(_markdown.default);
Object.assign(EmailLinkMarkdownNode.prototype, _content.default);
var _default = EmailLinkMarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2VtYWlsTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBjb250ZW50TWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29udGVudFwiO1xuXG5pbXBvcnQgeyBIUkVGX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgc2Vjb25kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEVtYWlsTGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGlubGluZVRleHQoY29udGV4dCkge1xuICAgIGxldCBpbmxpbmVUZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc3QgaW5kZW50ID0gbnVsbCxcbiAgICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUwgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBpbmxpbmVUZXh0ID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUw7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gaW5saW5lVGV4dDtcbiAgfVxuXG4gIGVtYWlsQWRkcmVzcyhjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGxldCBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGU7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKTtcblxuICAgICAgZW1haWxBZGRyZXNzVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2Vjb25kTGFzdENoaWxkTm9kZSA9IHNlY29uZExhc3QoY2hpbGROb2Rlcyk7XG5cbiAgICAgIGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGVDb250ZW50ID0gZW1haWxBZGRyZXNzVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBlbWFpbEFkZHJlc3MgPSBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBlbWFpbEFkZHJlc3M7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYG1haWx0bzoke2VtYWlsQWRkcmVzc31gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICBjb25zdCBpbmxpbmVUZXh0ID0gdGhpcy5pbmxpbmVUZXh0KGNvbnRleHQpO1xuXG4gICAgaWYgKGlubGluZVRleHQgIT09IG51bGwpIHtcbiAgICAgIGNvbnRlbnQgPSBpbmxpbmVUZXh0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KTtcbiAgICB9XG5cbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gc3VwZXIuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICBjb25zdCBpbmxpbmVUZXh0ID0gdGhpcy5pbmxpbmVUZXh0KGNvbnRleHQpO1xuXG4gICAgaWYgKGlubGluZVRleHQgIT09IG51bGwpIHtcbiAgICAgIGNvbnRlbnQgPSBpbmxpbmVUZXh0OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50O1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRW1haWxMaW5rTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbWFpbExpbmtNYXJrZG93bk5vZGUucHJvdG90eXBlLCBjb250ZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRW1haWxMaW5rTWFya2Rvd25Ob2RlO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJzZWNvbmRMYXN0IiwiRW1haWxMaW5rTWFya2Rvd25Ob2RlIiwiaW5saW5lVGV4dCIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJpbmRlbnQiLCJzZWNvbmRDaGlsZE5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUwiLCJhc0hUTUwiLCJlbWFpbEFkZHJlc3MiLCJlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsInNlY29uZExhc3RDaGlsZE5vZGUiLCJlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJjcmVhdGVET01FbGVtZW50IiwiY29udGVudCIsImRvbUVsZW1lbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJwYXJlbnRET01FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiY2hpbGROb2Rlc0hUTUwiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRlbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtIQTs7O2VBQUE7Ozt5QkFoSCtCOytEQUVOOzhEQUNDOzhCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBUUEsUUFBOEJDLHlCQUFjLENBQTVDRCxPQUFPRSxTQUF1QkQseUJBQWMsQ0FBckNDLFFBQVFDLGFBQWVGLHlCQUFjLENBQTdCRTtBQUV2QixJQUFBLEFBQU1DLHNDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLE9BQU87Z0JBQ2hCLElBQUlELGFBQWE7Z0JBRWpCLElBQU1FLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxtQkFBbUJGLFdBQVdHLE1BQU07Z0JBRTFDLElBQUlELHFCQUFxQixHQUFHO29CQUMxQixJQUFNRSxTQUFTLE1BQ1RDLGtCQUFrQlYsT0FBT0ssYUFDekJNLHlCQUF5QkQsaUJBQ3pCRSw2QkFBNkJELHVCQUF1QkUsTUFBTSxDQUFDSixRQUFRTDtvQkFFekVELGFBQWFTLDRCQUE2QixHQUFHO2dCQUMvQztnQkFFQSxPQUFPVDtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFWLE9BQU87Z0JBQ2xCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxtQkFBbUJGLFdBQVdHLE1BQU07Z0JBRTFDLElBQUlPO2dCQUVKLElBQUlSLHFCQUFxQixHQUFHO29CQUMxQixJQUFNUyxpQkFBaUJsQixNQUFNTztvQkFFN0JVLDJCQUEyQkMsZ0JBQWlCLEdBQUc7Z0JBQ2pELE9BQU87b0JBQ0wsSUFBTUMsc0JBQXNCaEIsV0FBV0k7b0JBRXZDVSwyQkFBMkJFLHFCQUFzQixHQUFHO2dCQUN0RDtnQkFFQSxJQUFNQyxrQ0FBa0NILHlCQUF5QkksVUFBVSxJQUNyRUwsZUFBZUksaUNBQWlDLEdBQUc7Z0JBRXpELE9BQU9KO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY2hCLE9BQU87Z0JBQ25CLElBQU1nQixnQkFBZ0JDLG1DQUFtQjtnQkFFekMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlbEIsT0FBTztnQkFDcEIsSUFBTVUsZUFBZSxJQUFJLENBQUNBLFlBQVksQ0FBQ1YsVUFDakNrQixpQkFBaUIsQUFBQyxVQUFzQixPQUFiUjtnQkFFakMsT0FBT1E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJuQixPQUFPO2dCQUN0QixJQUFJb0I7Z0JBRUosSUFBTXJCLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNDO2dCQUVuQyxJQUFJRCxlQUFlLE1BQU07b0JBQ3ZCcUIsVUFBVXJCLFlBQVksR0FBRztnQkFDM0IsT0FBTztvQkFDTHFCLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNwQjtnQkFDekI7Z0JBRUEsSUFBSXFCO2dCQUVKLElBQU1DLFdBQVdDLFNBQVNDLGNBQWMsQ0FBQ0o7Z0JBRXpDQyxhQUFhLHVCQXJFWHZCLGtDQXFFaUJxQixvQkFBTixJQUFLLGFBQWtCbkI7Z0JBRXBDLElBQU15QixtQkFBbUJKLFlBQWEsR0FBRztnQkFFekNBLGFBQWFDLFVBQVUsR0FBRztnQkFFMUJHLGlCQUFpQkMsV0FBVyxDQUFDTDtnQkFFN0JBLGFBQWFJLGtCQUFtQixHQUFHO2dCQUVuQyxPQUFPSjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQnRCLE1BQU0sRUFBRUwsT0FBTztnQkFDOUIsSUFBSW9CO2dCQUVKLElBQU1yQixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDQztnQkFFbkMsSUFBSUQsZUFBZSxNQUFNO29CQUN2QnFCLFVBQVVyQixZQUFhLEdBQUc7Z0JBQzVCLE9BQU87b0JBQ0xxQixVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDcEI7Z0JBQ3pCO2dCQUVBLElBQU00QixpQkFBaUJSO2dCQUV2QixPQUFPUTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFN0IsVUFBVSxFQUFFOEIsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0FsR3pIL0IsdUJBa0dpSmdDLFVBQVU3QixZQUFZOEI7WUFBVTs7O1dBbEdqTGpDO0VBQThCa0MsaUJBQVk7QUFxR2hEQyxPQUFPQyxNQUFNLENBQUNwQyxzQkFBc0JxQyxTQUFTLEVBQUVDLGdCQUFhO0lBRTVELFdBQWV0QyJ9