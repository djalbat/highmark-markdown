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
                var simple = this.isSimple();
                if (!simple) {
                    _get(_get_prototype_of(EmailLinkHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                    return;
                }
                var domElement;
                domElement = this.createDOMElement(context);
                this.setDOMElement(domElement);
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
                parentDOMElement = domElement; ///
                siblingDOMElement = null;
                var content = this.content(context), textNode = document.createTextNode(content);
                domElement = textNode; ///
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
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
                    _$parentDOMElement.removeChild(domElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9lbWFpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWFpbExpbmtIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgaXNTaW1wbGUoKSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5pc1NpbXBsZSgpOyB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgZW1haWxBZGRyZXNzID0gdGhpcy5lbWFpbEFkZHJlc3MoY29udGV4dCksXG4gICAgICAgICAgY29udGVudCA9IGVtYWlsQWRkcmVzczsgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGVtYWlsQWRkcmVzcyhjb250ZXh0KSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5lbWFpbEFkZHJlc3MoY29udGV4dCk7IH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYG1haWx0bzoke2VtYWlsQWRkcmVzc31gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoIXNpbXBsZSkge1xuICAgICAgc3VwZXIubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoIXNpbXBsZSkge1xuICAgICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAge1xuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IGRvbUVsZW1lbnQuZmlyc3RDaGlsZFxuXG4gICAgICBkb21FbGVtZW50ID0gZmlyc3RDaGlsZDsgIC8vL1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnJlc2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGxldCBwbGFpblRleHQ7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSB0aGlzLmVtYWlsQWRkcmVzcyhjb250ZXh0KTtcblxuICAgICAgcGxhaW5UZXh0ID0gZW1haWxBZGRyZXNzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgcGxhaW5UZXh0ID0gc3VwZXIuYXNQbGFpblRleHQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGNoaWxkTm9kZXNIVE1MO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgZW1haWxBZGRyZXNzID0gdGhpcy5lbWFpbEFkZHJlc3MoY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7ZW1haWxBZGRyZXNzfVxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBzdXBlci5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJlbWFpbC1saW5rXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRW1haWxMaW5rSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEVtYWlsTGlua0hUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiRW1haWxMaW5rSFRNTE5vZGUiLCJpc1NpbXBsZSIsIm91dGVyTm9kZSIsImNvbnRlbnQiLCJjb250ZXh0IiwiZW1haWxBZGRyZXNzIiwiYXR0cmlidXRlTmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50Iiwic2ltcGxlIiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwidW5tb3VudCIsImdldERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJyZXNldERPTUVsZW1lbnQiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSkE7OEJBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYSxPQUFPLElBQUksQ0FBQ0MsU0FBUyxDQUFDRCxRQUFRO1lBQUk7OztZQUUvQ0UsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUMsZUFBZSxJQUFJLENBQUNBLFlBQVksQ0FBQ0QsVUFDakNELFVBQVVFLGNBQWMsR0FBRztnQkFFakMsT0FBT0Y7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhRCxPQUFPO2dCQUFJLE9BQU8sSUFBSSxDQUFDRixTQUFTLENBQUNHLFlBQVksQ0FBQ0Q7WUFBVTs7O1lBRXJFRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0YsT0FBTztnQkFDbkIsSUFBTUUsZ0JBQWdCQyxtQ0FBbUI7Z0JBRXpDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUosT0FBTztnQkFDcEIsSUFBTUMsZUFBZSxJQUFJLENBQUNBLFlBQVksQ0FBQ0QsVUFDakNJLGlCQUFpQixBQUFDLFVBQXNCLE9BQWJIO2dCQUVqQyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRVAsT0FBTztnQkFDaEQsSUFBTVEsU0FBUyxJQUFJLENBQUNYLFFBQVE7Z0JBRTVCLElBQUksQ0FBQ1csUUFBUTtvQkFDWCx1QkE3QmVaLDhCQTZCVFMsU0FBTixJQUFLLGFBQU9DLGtCQUFrQkMsbUJBQW1CUDtvQkFFakQ7Z0JBQ0Y7Z0JBRUEsSUFBSVM7Z0JBRUpBLGFBQWEsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ1Y7Z0JBRW5DLElBQUksQ0FBQ1csYUFBYSxDQUFDRjtnQkFFbkJILGlCQUFpQk0sWUFBWSxDQUFDSCxZQUFZRjtnQkFFMUNELG1CQUFtQkcsWUFBWSxHQUFHO2dCQUVsQ0Ysb0JBQW9CO2dCQUVwQixJQUFNUixVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxVQUN2QmEsV0FBV0MsU0FBU0MsY0FBYyxDQUFDaEI7Z0JBRXpDVSxhQUFhSSxVQUFXLEdBQUc7Z0JBRTNCUCxpQkFBaUJNLFlBQVksQ0FBQ0gsWUFBWUY7WUFDNUM7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUVYsZ0JBQWdCLEVBQUVOLE9BQU87Z0JBQy9CLElBQU1RLFNBQVMsSUFBSSxDQUFDWCxRQUFRO2dCQUU1QixJQUFJLENBQUNXLFFBQVE7b0JBQ1gsdUJBMURlWiw4QkEwRFRvQixXQUFOLElBQUssYUFBU1Ysa0JBQWtCTjtvQkFFaEM7Z0JBQ0Y7Z0JBRUEsSUFBSVM7Z0JBRUo7b0JBQ0VBLGFBQWEsSUFBSSxDQUFDUSxhQUFhO29CQUUvQixJQUFNWCxxQkFBbUJHLFlBQ25CUyxhQUFhVCxXQUFXUyxVQUFVO29CQUV4Q1QsYUFBYVMsWUFBYSxHQUFHO29CQUU3QlosbUJBQWlCYSxXQUFXLENBQUNWO2dCQUMvQjtnQkFFQUEsYUFBYSxJQUFJLENBQUNRLGFBQWE7Z0JBRS9CWCxpQkFBaUJhLFdBQVcsQ0FBQ1Y7Z0JBRTdCLElBQUksQ0FBQ1csZUFBZTtZQUN0Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZckIsT0FBTztnQkFDakIsSUFBSXNCO2dCQUVKLElBQU1kLFNBQVMsSUFBSSxDQUFDWCxRQUFRO2dCQUU1QixJQUFJVyxRQUFRO29CQUNWLElBQU1QLGVBQWUsSUFBSSxDQUFDQSxZQUFZLENBQUNEO29CQUV2Q3NCLFlBQVlyQixjQUFjLEdBQUc7Z0JBQy9CLE9BQU87b0JBQ0xxQixZQUFZLHVCQTdGRzFCLDhCQTZGR3lCLGVBQU4sSUFBSyxhQUFhckI7Z0JBQ2hDO2dCQUVBLE9BQU9zQjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTSxFQUFFeEIsT0FBTztnQkFDOUIsSUFBSXlCO2dCQUVKLElBQU1qQixTQUFTLElBQUksQ0FBQ1gsUUFBUTtnQkFFNUIsSUFBSVcsUUFBUTtvQkFDVixJQUFNUCxlQUFlLElBQUksQ0FBQ0EsWUFBWSxDQUFDRDtvQkFFdkN5QixpQkFBaUIsQUFBQyxHQUFlLE9BQWJ4QixjQUFhO2dCQUVuQyxPQUFPO29CQUNMd0IsaUJBQWlCLHVCQTlHRjdCLDhCQThHUTJCLG9CQUFOLElBQUssYUFBa0JDLFFBQVF4QjtnQkFDbEQ7Z0JBRUEsT0FBT3lCO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQXhIL0I5QjtZQXdIb0Q7OztZQUVoRWdDLEtBQUFBO21CQUFQLFNBQU9BLGNBQWM5QixTQUFTO2dCQUFJLE9BQU82QixhQUFRLENBQUNDLGFBQWEsQ0ExSDVDaEMsbUJBMEhnRUU7WUFBWTs7O1dBMUg1RUY7RUFBMEIrQixhQUFRO0FBb0hyRCxpQkFwSG1CL0IsbUJBb0haaUMsV0FBVTtBQUVqQixpQkF0SG1CakMsbUJBc0haa0MsYUFBWSJ9