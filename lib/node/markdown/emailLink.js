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
                parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2VtYWlsTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBjb250ZW50TWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29udGVudFwiO1xuXG5pbXBvcnQgeyBIUkVGX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgc2Vjb25kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEVtYWlsTGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGlubGluZVRleHQoY29udGV4dCkge1xuICAgIGxldCBpbmxpbmVUZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc3QgaW5kZW50ID0gbnVsbCxcbiAgICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUwgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBpbmxpbmVUZXh0ID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUw7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gaW5saW5lVGV4dDtcbiAgfVxuXG4gIGVtYWlsQWRkcmVzcyhjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGxldCBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGU7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKTtcblxuICAgICAgZW1haWxBZGRyZXNzVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2Vjb25kTGFzdENoaWxkTm9kZSA9IHNlY29uZExhc3QoY2hpbGROb2Rlcyk7XG5cbiAgICAgIGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGVDb250ZW50ID0gZW1haWxBZGRyZXNzVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBlbWFpbEFkZHJlc3MgPSBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBlbWFpbEFkZHJlc3M7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYG1haWx0bzoke2VtYWlsQWRkcmVzc31gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50O1xuXG4gICAgY29uc3QgaW5saW5lVGV4dCA9IHRoaXMuaW5saW5lVGV4dChjb250ZXh0KTtcblxuICAgIGlmIChpbmxpbmVUZXh0ICE9PSBudWxsKSB7XG4gICAgICBjb250ZW50ID0gaW5saW5lVGV4dDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50O1xuXG4gICAgY29uc3QgaW5saW5lVGV4dCA9IHRoaXMuaW5saW5lVGV4dChjb250ZXh0KTtcblxuICAgIGlmIChpbmxpbmVUZXh0ICE9PSBudWxsKSB7XG4gICAgICBjb250ZW50ID0gaW5saW5lVGV4dDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gY29udGVudDtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEVtYWlsTGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oRW1haWxMaW5rTWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgY29udGVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEVtYWlsTGlua01hcmtkb3duTm9kZTtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwic2Vjb25kTGFzdCIsIkVtYWlsTGlua01hcmtkb3duTm9kZSIsImlubGluZVRleHQiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiaW5kZW50Iiwic2Vjb25kQ2hpbGROb2RlIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MIiwiYXNIVE1MIiwiZW1haWxBZGRyZXNzIiwiZW1haWxBZGRyZXNzVGVybWluYWxOb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwiZW1haWxBZGRyZXNzVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJhdHRyaWJ1dGVOYW1lIiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImNoaWxkTm9kZXNBc0hUTUwiLCJjaGlsZE5vZGVzSFRNTCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiY29udGVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0hBOzs7ZUFBQTs7O3lCQXRIK0I7K0RBRU47OERBQ0M7OEJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFRQSxRQUE4QkMseUJBQWMsQ0FBNUNELE9BQU9FLFNBQXVCRCx5QkFBYyxDQUFyQ0MsUUFBUUMsYUFBZUYseUJBQWMsQ0FBN0JFO0FBRXZCLElBQUEsQUFBTUMsc0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsT0FBTztnQkFDaEIsSUFBSUQsYUFBYTtnQkFFakIsSUFBTUUsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLG1CQUFtQkYsV0FBV0csTUFBTTtnQkFFMUMsSUFBSUQscUJBQXFCLEdBQUc7b0JBQzFCLElBQU1FLFNBQVMsTUFDVEMsa0JBQWtCVixPQUFPSyxhQUN6Qk0seUJBQXlCRCxpQkFDekJF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