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
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                this.domElement = this.createDOMElement(context);
                if (siblingDOMElement !== null) {
                    siblingDOMElement = siblingDOMElement.nextSibling; ///
                }
                parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
                siblingDOMElement = this.domElement; ///
                return siblingDOMElement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2VtYWlsTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBjb250ZW50TWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29udGVudFwiO1xuXG5pbXBvcnQgeyBIUkVGX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgc2Vjb25kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEVtYWlsTGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGlubGluZVRleHQoY29udGV4dCkge1xuICAgIGxldCBpbmxpbmVUZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc3QgaW5kZW50ID0gbnVsbCxcbiAgICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUwgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBpbmxpbmVUZXh0ID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUw7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gaW5saW5lVGV4dDtcbiAgfVxuXG4gIGVtYWlsQWRkcmVzcyhjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGxldCBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGU7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKTtcblxuICAgICAgZW1haWxBZGRyZXNzVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2Vjb25kTGFzdENoaWxkTm9kZSA9IHNlY29uZExhc3QoY2hpbGROb2Rlcyk7XG5cbiAgICAgIGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGVDb250ZW50ID0gZW1haWxBZGRyZXNzVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBlbWFpbEFkZHJlc3MgPSBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBlbWFpbEFkZHJlc3M7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYG1haWx0bzoke2VtYWlsQWRkcmVzc31gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBpZiAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmc7ICAvLy9cbiAgICB9XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudDtcblxuICAgIGNvbnN0IGlubGluZVRleHQgPSB0aGlzLmlubGluZVRleHQoY29udGV4dCk7XG5cbiAgICBpZiAoaW5saW5lVGV4dCAhPT0gbnVsbCkge1xuICAgICAgY29udGVudCA9IGlubGluZVRleHQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBzdXBlci5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudDtcblxuICAgIGNvbnN0IGlubGluZVRleHQgPSB0aGlzLmlubGluZVRleHQoY29udGV4dCk7XG5cbiAgICBpZiAoaW5saW5lVGV4dCAhPT0gbnVsbCkge1xuICAgICAgY29udGVudCA9IGlubGluZVRleHQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShFbWFpbExpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEVtYWlsTGlua01hcmtkb3duTm9kZS5wcm90b3R5cGUsIGNvbnRlbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbWFpbExpbmtNYXJrZG93bk5vZGU7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsInNlY29uZExhc3QiLCJFbWFpbExpbmtNYXJrZG93bk5vZGUiLCJpbmxpbmVUZXh0IiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImluZGVudCIsInNlY29uZENoaWxkTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTCIsImFzSFRNTCIsImVtYWlsQWRkcmVzcyIsImVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwic2Vjb25kTGFzdENoaWxkTm9kZSIsImVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiYXR0cmlidXRlTmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImNoaWxkTm9kZXNBc0hUTUwiLCJjaGlsZE5vZGVzSFRNTCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiY29udGVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0lBOzs7ZUFBQTs7O3lCQTlIK0I7K0RBRU47OERBQ0M7OEJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFRQSxRQUE4QkMseUJBQWMsQ0FBNUNELE9BQU9FLFNBQXVCRCx5QkFBYyxDQUFyQ0MsUUFBUUMsYUFBZUYseUJBQWMsQ0FBN0JFO0FBRXZCLElBQUEsQUFBTUMsc0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7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