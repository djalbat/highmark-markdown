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
                var markdownNode = this.getMarkdownNode(), simple = markdownNode.isSimple();
                return simple;
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
                var markdownNode = this.getMarkdownNode(), emailAddress = markdownNode.emailAddress(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9lbWFpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcywgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYWlsTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHNpbXBsZSA9IG1hcmtkb3duTm9kZS5pc1NpbXBsZSgpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzKGNvbnRleHQpLFxuICAgICAgICAgIGNvbnRlbnQgPSBlbWFpbEFkZHJlc3M7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBlbWFpbEFkZHJlc3MoY29udGV4dCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgZW1haWxBZGRyZXNzID0gbWFya2Rvd25Ob2RlLmVtYWlsQWRkcmVzcyhjb250ZXh0KTtcblxuICAgIHJldHVybiBlbWFpbEFkZHJlc3M7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYG1haWx0bzoke2VtYWlsQWRkcmVzc31gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmICghc2ltcGxlKSB7XG4gICAgICBzdXBlci5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgICAgKHNpYmxpbmdET01FbGVtZW50ICE9PSBudWxsKSA/XG4gICAgICAgIGluc2VydEFmdGVyKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSA6XG4gICAgICAgICAgaW5zZXJ0QmVmb3JlaGFuZChkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICAgIGluc2VydEFmdGVyd2FyZHMoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoIXNpbXBsZSkge1xuICAgICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAge1xuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IGRvbUVsZW1lbnQuZmlyc3RDaGlsZFxuXG4gICAgICBkb21FbGVtZW50ID0gZmlyc3RDaGlsZDsgIC8vL1xuXG4gICAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG4gICAgfVxuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZXNldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBsZXQgcGxhaW5UZXh0O1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgZW1haWxBZGRyZXNzID0gdGhpcy5lbWFpbEFkZHJlc3MoY29udGV4dCk7XG5cbiAgICAgIHBsYWluVGV4dCA9IGVtYWlsQWRkcmVzczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYWluVGV4dCA9IHN1cGVyLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBjaGlsZE5vZGVzSFRNTDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzKGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke2VtYWlsQWRkcmVzc31cbmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gc3VwZXIuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiZW1haWwtbGlua1wiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEVtYWlsTGlua0hUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShFbWFpbExpbmtIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkVtYWlsTGlua0hUTUxOb2RlIiwiaXNTaW1wbGUiLCJtYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93bk5vZGUiLCJzaW1wbGUiLCJjb250ZW50IiwiY29udGV4dCIsImVtYWlsQWRkcmVzcyIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydEFmdGVyd2FyZHMiLCJnZXRET01FbGVtZW50IiwidW5tb3VudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJyZXNldERPTUVsZW1lbnQiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7OEJBRWU7bUJBQ29DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNDLFNBQVNGLGFBQWFELFFBQVE7Z0JBRXBDLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNQyxlQUFlLElBQUksQ0FBQ0EsWUFBWSxDQUFDRCxVQUNqQ0QsVUFBVUUsY0FBYyxHQUFHO2dCQUVqQyxPQUFPRjtZQUNUOzs7WUFFQUUsS0FB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