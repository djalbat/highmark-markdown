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
                    siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertAfterwards)(domElement, parentDOMElement);
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
                parentDOMElement.removeChild(domElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9lbWFpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYWlsTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBpc1NpbXBsZSgpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmlzU2ltcGxlKCk7IH1cblxuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSB0aGlzLmVtYWlsQWRkcmVzcyhjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50ID0gZW1haWxBZGRyZXNzOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZW1haWxBZGRyZXNzKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmVtYWlsQWRkcmVzcyhjb250ZXh0KTsgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgZW1haWxBZGRyZXNzID0gdGhpcy5lbWFpbEFkZHJlc3MoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBgbWFpbHRvOiR7ZW1haWxBZGRyZXNzfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKCFzaW1wbGUpIHtcbiAgICAgIHN1cGVyLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgaW5zZXJ0QWZ0ZXIoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpIDpcbiAgICAgICAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gICAgfVxuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmICghc2ltcGxlKSB7XG4gICAgICBzdXBlci51bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICB7XG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gZG9tRWxlbWVudC5maXJzdENoaWxkXG5cbiAgICAgIGRvbUVsZW1lbnQgPSBmaXJzdENoaWxkOyAgLy8vXG5cbiAgICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZXNldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBsZXQgcGxhaW5UZXh0O1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgZW1haWxBZGRyZXNzID0gdGhpcy5lbWFpbEFkZHJlc3MoY29udGV4dCk7XG5cbiAgICAgIHBsYWluVGV4dCA9IGVtYWlsQWRkcmVzczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYWluVGV4dCA9IHN1cGVyLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBjaGlsZE5vZGVzSFRNTDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzKGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke2VtYWlsQWRkcmVzc31cbmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gc3VwZXIuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiZW1haWwtbGlua1wiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEVtYWlsTGlua0hUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShFbWFpbExpbmtIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkVtYWlsTGlua0hUTUxOb2RlIiwiaXNTaW1wbGUiLCJvdXRlck5vZGUiLCJjb250ZW50IiwiY29udGV4dCIsImVtYWlsQWRkcmVzcyIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJzaW1wbGUiLCJjcmVhdGVET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QWZ0ZXJ3YXJkcyIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImdldERPTUVsZW1lbnQiLCJ1bm1vdW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwicmVzZXRET01FbGVtZW50IiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxBOzhCQUVlO21CQUNrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFhLE9BQU8sSUFBSSxDQUFDQyxTQUFTLENBQUNELFFBQVE7WUFBSTs7O1lBRS9DRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNQyxlQUFlLElBQUksQ0FBQ0EsWUFBWSxDQUFDRCxVQUNqQ0QsVUFBVUUsY0FBYyxHQUFHO2dCQUVqQyxPQUFPRjtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFELE9BQU87Z0JBQUksT0FBTyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0csWUFBWSxDQUFDRDtZQUFVOzs7WUFFckVFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixPQUFPO2dCQUNuQixJQUFNRSxnQkFBZ0JDLG1DQUFtQjtnQkFFekMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSixPQUFPO2dCQUNwQixJQUFNQyxlQUFlLElBQUksQ0FBQ0EsWUFBWSxDQUFDRCxVQUNqQ0ksaUJBQWlCLEFBQUMsVUFBc0IsT0FBYkg7Z0JBRWpDLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFUCxPQUFPO2dCQUNoRCxJQUFJUTtnQkFFSixJQUFNQyxTQUFTLElBQUksQ0FBQ1osUUFBUTtnQkFFNUIsSUFBSSxDQUFDWSxRQUFRO29CQUNYLHVCQS9CZWIsOEJBK0JUUyxTQUFOLElBQUssYUFBT0Msa0JBQWtCQyxtQkFBbUJQO2dCQUNuRCxPQUFPO29CQUNMUSxhQUFhLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUNWO29CQUVuQyxJQUFJLENBQUNXLGFBQWEsQ0FBQ0g7b0JBRWxCRCxzQkFBc0IsT0FDckJLLElBQUFBLGdCQUFXLEVBQUNKLFlBQVlGLGtCQUFrQkMscUJBQ3hDTSxJQUFBQSxxQkFBZ0IsRUFBQ0wsWUFBWUY7b0JBRWpDQSxtQkFBbUJFLFlBQVksR0FBRztvQkFFbEMsSUFBTVQsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsVUFDdkJjLFdBQVdDLFNBQVNDLGNBQWMsQ0FBQ2pCO29CQUV6Q1MsYUFBYU0sVUFBVyxHQUFHO29CQUUzQkQsSUFBQUEscUJBQWdCLEVBQUNMLFlBQVlGLGtCQUFrQkM7Z0JBQ2pEO2dCQUVBQyxhQUFhLElBQUksQ0FBQ1MsYUFBYTtnQkFFL0JWLG9CQUFvQkMsWUFBWSxHQUFHO2dCQUVuQyxPQUFPRDtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFaLGdCQUFnQixFQUFFTixPQUFPO2dCQUMvQixJQUFNUyxTQUFTLElBQUksQ0FBQ1osUUFBUTtnQkFFNUIsSUFBSSxDQUFDWSxRQUFRO29CQUNYLHVCQTlEZWIsOEJBOERUc0IsV0FBTixJQUFLLGFBQVNaLGtCQUFrQk47b0JBRWhDO2dCQUNGO2dCQUVBLElBQUlRO2dCQUVKO29CQUNFQSxhQUFhLElBQUksQ0FBQ1MsYUFBYTtvQkFFL0IsSUFBTVgscUJBQW1CRSxZQUNuQlcsYUFBYVgsV0FBV1csVUFBVTtvQkFFeENYLGFBQWFXLFlBQWEsR0FBRztvQkFFN0JDLElBQUFBLFdBQU0sRUFBQ1osWUFBWUY7Z0JBQ3JCO2dCQUVBRSxhQUFhLElBQUksQ0FBQ1MsYUFBYTtnQkFFL0JYLGlCQUFpQmUsV0FBVyxDQUFDYjtnQkFFN0IsSUFBSSxDQUFDYyxlQUFlO1lBQ3RCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVl2QixPQUFPO2dCQUNqQixJQUFJd0I7Z0JBRUosSUFBTWYsU0FBUyxJQUFJLENBQUNaLFFBQVE7Z0JBRTVCLElBQUlZLFFBQVE7b0JBQ1YsSUFBTVIsZUFBZSxJQUFJLENBQUNBLFlBQVksQ0FBQ0Q7b0JBRXZDd0IsWUFBWXZCLGNBQWMsR0FBRztnQkFDL0IsT0FBTztvQkFDTHVCLFlBQVksdUJBakdHNUIsOEJBaUdHMkIsZUFBTixJQUFLLGFBQWF2QjtnQkFDaEM7Z0JBRUEsT0FBT3dCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUUxQixPQUFPO2dCQUM5QixJQUFJMkI7Z0JBRUosSUFBTWxCLFNBQVMsSUFBSSxDQUFDWixRQUFRO2dCQUU1QixJQUFJWSxRQUFRO29CQUNWLElBQU1SLGVBQWUsSUFBSSxDQUFDQSxZQUFZLENBQUNEO29CQUV2QzJCLGlCQUFpQixBQUFDLEdBQWUsT0FBYjFCLGNBQWE7Z0JBRW5DLE9BQU87b0JBQ0wwQixpQkFBaUIsdUJBbEhGL0IsOEJBa0hRNkIsb0JBQU4sSUFBSyxhQUFrQkMsUUFBUTFCO2dCQUNsRDtnQkFFQSxPQUFPMkI7WUFDVDs7OztZQU1PQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBNUgvQmhDO1lBNEhvRDs7O1lBRWhFa0MsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY2hDLFNBQVM7Z0JBQUksT0FBTytCLGFBQVEsQ0FBQ0MsYUFBYSxDQTlINUNsQyxtQkE4SGdFRTtZQUFZOzs7V0E5SDVFRjtFQUEwQmlDLGFBQVE7QUF3SHJELGlCQXhIbUJqQyxtQkF3SFptQyxXQUFVO0FBRWpCLGlCQTFIbUJuQyxtQkEwSFpvQyxhQUFZIn0=