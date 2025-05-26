"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmailLinkHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _attributeNames = require("../../../attributeNames");
var _dom = require("../../../utilities/dom");
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
var EmailLinkHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(EmailLinkHTMLNode, HTMLNode);
    function EmailLinkHTMLNode() {
        _class_call_check(this, EmailLinkHTMLNode);
        return _call_super(this, EmailLinkHTMLNode, arguments);
    }
    _create_class(EmailLinkHTMLNode, [
        {
            key: "isSimple",
            value: function isSimple() {
                return this.outerNode.isSimple();
            }
        },
        {
            key: "content",
            value: function content(context) {
                var emailAddress = this.emailAddress(context), content = emailAddress; ///
                return content;
            }
        },
        {
            key: "emailAddress",
            value: function emailAddress(context) {
                return this.outerNode.emailAddress(context);
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
                var domElement;
                var simple = this.isSimple();
                if (!simple) {
                    _get(_get_prototype_of(EmailLinkHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                } else {
                    domElement = this.createDOMElement(context);
                    this.setDOMElement(domElement);
                    siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(domElement, parentDOMElement);
                    parentDOMElement = domElement; ///
                    var content = this.content(context), textNode = document.createTextNode(content);
                    domElement = textNode; ///
                    (0, _dom.insertAfterwards)(domElement, parentDOMElement, siblingDOMElement);
                }
                domElement = this.getDOMElement();
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                var simple = this.isSimple();
                if (!simple) {
                    _get(_get_prototype_of(EmailLinkHTMLNode.prototype), "unmount", this).call(this, parentDOMElement, context);
                    return;
                }
                var domElement;
                {
                    domElement = this.getDOMElement();
                    var _$parentDOMElement = domElement, firstChild = domElement.firstChild;
                    domElement = firstChild; ///
                    (0, _dom.remove)(domElement, _$parentDOMElement);
                }
                domElement = this.getDOMElement();
                (0, _dom.remove)(domElement, parentDOMElement);
                this.resetDOMElement();
            }
        },
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var plainText;
                var simple = this.isSimple();
                if (simple) {
                    var emailAddress = this.emailAddress(context);
                    plainText = emailAddress; ///
                } else {
                    plainText = _get(_get_prototype_of(EmailLinkHTMLNode.prototype), "asPlainText", this).call(this, context);
                }
                return plainText;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML;
                var simple = this.isSimple();
                if (simple) {
                    var emailAddress = this.emailAddress(context);
                    childNodesHTML = "".concat(emailAddress, "\n");
                } else {
                    childNodesHTML = _get(_get_prototype_of(EmailLinkHTMLNode.prototype), "childNodesAsHTML", this).call(this, indent, context);
                }
                return childNodesHTML;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(EmailLinkHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(EmailLinkHTMLNode, outerNode);
            }
        }
    ]);
    return EmailLinkHTMLNode;
}(_html.default);
_define_property(EmailLinkHTMLNode, "tagName", "a");
_define_property(EmailLinkHTMLNode, "className", "email-link");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9lbWFpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcywgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYWlsTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBpc1NpbXBsZSgpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmlzU2ltcGxlKCk7IH1cblxuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSB0aGlzLmVtYWlsQWRkcmVzcyhjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50ID0gZW1haWxBZGRyZXNzOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZW1haWxBZGRyZXNzKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmVtYWlsQWRkcmVzcyhjb250ZXh0KTsgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgZW1haWxBZGRyZXNzID0gdGhpcy5lbWFpbEFkZHJlc3MoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBgbWFpbHRvOiR7ZW1haWxBZGRyZXNzfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKCFzaW1wbGUpIHtcbiAgICAgIHN1cGVyLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgaW5zZXJ0QWZ0ZXIoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpIDpcbiAgICAgICAgICBpbnNlcnRCZWZvcmVoYW5kKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gICAgfVxuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmICghc2ltcGxlKSB7XG4gICAgICBzdXBlci51bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICB7XG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gZG9tRWxlbWVudC5maXJzdENoaWxkXG5cbiAgICAgIGRvbUVsZW1lbnQgPSBmaXJzdENoaWxkOyAgLy8vXG5cbiAgICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLnJlc2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGxldCBwbGFpblRleHQ7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSB0aGlzLmVtYWlsQWRkcmVzcyhjb250ZXh0KTtcblxuICAgICAgcGxhaW5UZXh0ID0gZW1haWxBZGRyZXNzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgcGxhaW5UZXh0ID0gc3VwZXIuYXNQbGFpblRleHQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGNoaWxkTm9kZXNIVE1MO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgZW1haWxBZGRyZXNzID0gdGhpcy5lbWFpbEFkZHJlc3MoY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7ZW1haWxBZGRyZXNzfVxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBzdXBlci5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJlbWFpbC1saW5rXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRW1haWxMaW5rSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEVtYWlsTGlua0hUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiRW1haWxMaW5rSFRNTE5vZGUiLCJpc1NpbXBsZSIsIm91dGVyTm9kZSIsImNvbnRlbnQiLCJjb250ZXh0IiwiZW1haWxBZGRyZXNzIiwiYXR0cmlidXRlTmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZG9tRWxlbWVudCIsInNpbXBsZSIsImNyZWF0ZURPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJpbnNlcnRCZWZvcmVoYW5kIiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiaW5zZXJ0QWZ0ZXJ3YXJkcyIsImdldERPTUVsZW1lbnQiLCJ1bm1vdW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsInJlc2V0RE9NRWxlbWVudCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0IiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMQTs4QkFFZTttQkFDb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYSxPQUFPLElBQUksQ0FBQ0MsU0FBUyxDQUFDRCxRQUFRO1lBQUk7OztZQUUvQ0UsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUMsZUFBZSxJQUFJLENBQUNBLFlBQVksQ0FBQ0QsVUFDakNELFVBQVVFLGNBQWMsR0FBRztnQkFFakMsT0FBT0Y7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhRCxPQUFPO2dCQUFJLE9BQU8sSUFBSSxDQUFDRixTQUFTLENBQUNHLFlBQVksQ0FBQ0Q7WUFBVTs7O1lBRXJFRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0YsT0FBTztnQkFDbkIsSUFBTUUsZ0JBQWdCQyxtQ0FBbUI7Z0JBRXpDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUosT0FBTztnQkFDcEIsSUFBTUMsZUFBZSxJQUFJLENBQUNBLFlBQVksQ0FBQ0QsVUFDakNJLGlC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