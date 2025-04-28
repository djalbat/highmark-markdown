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
                _get(_get_prototype_of(EmailLinkHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                var simple = this.isSimple();
                if (simple) {
                    var domElement;
                    domElement = this.getDOMElement();
                    var _$siblingDOMElement = null, _$parentDOMElement = domElement, emailAddress = this.emailAddress(context), content = emailAddress, textNode = document.createTextNode(content);
                    domElement = textNode; ///
                    _$parentDOMElement.insertBefore(domElement, _$siblingDOMElement);
                }
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                var simple = this.isSimple();
                if (simple) {
                    var domElement;
                    domElement = this.getDOMElement();
                    var _$parentDOMElement = domElement, firstChild = _$parentDOMElement.firstChild;
                    domElement = firstChild; ///
                    _$parentDOMElement.removeChild(domElement);
                }
                _get(_get_prototype_of(EmailLinkHTMLNode.prototype), "unmount", this).call(this, parentDOMElement, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9lbWFpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWFpbExpbmtIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgaXNTaW1wbGUoKSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5pc1NpbXBsZSgpOyB9XG5cbiAgZW1haWxBZGRyZXNzKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmVtYWlsQWRkcmVzcyhjb250ZXh0KTsgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgZW1haWxBZGRyZXNzID0gdGhpcy5lbWFpbEFkZHJlc3MoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBgbWFpbHRvOiR7ZW1haWxBZGRyZXNzfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHNpYmxpbmdET01FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAvLy9cbiAgICAgICAgICAgIGVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzKGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudCA9IGVtYWlsQWRkcmVzcywgLy8vXG4gICAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsIC8vL1xuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHBhcmVudERPTUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgICAgZG9tRWxlbWVudCA9IGZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KVxuICAgIH1cblxuICAgIHN1cGVyLnVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCk7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgbGV0IHBsYWluVGV4dDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzKGNvbnRleHQpO1xuXG4gICAgICBwbGFpblRleHQgPSBlbWFpbEFkZHJlc3M7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGFpblRleHQgPSBzdXBlci5hc1BsYWluVGV4dChjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc0hUTUw7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSB0aGlzLmVtYWlsQWRkcmVzcyhjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtlbWFpbEFkZHJlc3N9XG5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IHN1cGVyLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImVtYWlsLWxpbmtcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhFbWFpbExpbmtIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRW1haWxMaW5rSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJFbWFpbExpbmtIVE1MTm9kZSIsImlzU2ltcGxlIiwib3V0ZXJOb2RlIiwiZW1haWxBZGRyZXNzIiwiY29udGV4dCIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsInNpbXBsZSIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiY29udGVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydEJlZm9yZSIsInVubW91bnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSkE7OEJBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYSxPQUFPLElBQUksQ0FBQ0MsU0FBUyxDQUFDRCxRQUFRO1lBQUk7OztZQUUvQ0UsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLE9BQU87Z0JBQUksT0FBTyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQztZQUFVOzs7WUFFckVDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRCxPQUFPO2dCQUNuQixJQUFNQyxnQkFBZ0JDLG1DQUFtQjtnQkFFekMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSCxPQUFPO2dCQUNwQixJQUFNRCxlQUFlLElBQUksQ0FBQ0EsWUFBWSxDQUFDQyxVQUNqQ0csaUJBQWlCLEFBQUMsVUFBc0IsT0FBYko7Z0JBRWpDLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFTixPQUFPO2dCQUNoRCx1QkFuQmlCSiw4QkFtQlhRLFNBQU4sSUFBSyxhQUFPQyxrQkFBa0JDLG1CQUFtQk47Z0JBRWpELElBQU1PLFNBQVMsSUFBSSxDQUFDVixRQUFRO2dCQUU1QixJQUFJVSxRQUFRO29CQUNWLElBQUlDO29CQUVKQSxhQUFhLElBQUksQ0FBQ0MsYUFBYTtvQkFFL0IsSUFBTUgsc0JBQW9CLE1BQ3BCRCxxQkFBbUJHLFlBQ25CVCxlQUFlLElBQUksQ0FBQ0EsWUFBWSxDQUFDQyxVQUNqQ1UsVUFBVVgsY0FDVlksV0FBV0MsU0FBU0MsY0FBYyxDQUFDSDtvQkFFekNGLGFBQWFHLFVBQVcsR0FBRztvQkFFM0JOLG1CQUFpQlMsWUFBWSxDQUFDTixZQUFZRjtnQkFDNUM7WUFDRjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRVixnQkFBZ0IsRUFBRUwsT0FBTztnQkFDL0IsSUFBTU8sU0FBUyxJQUFJLENBQUNWLFFBQVE7Z0JBRTVCLElBQUlVLFFBQVE7b0JBQ1YsSUFBSUM7b0JBRUpBLGFBQWEsSUFBSSxDQUFDQyxhQUFhO29CQUUvQixJQUFNSixxQkFBbUJHLFlBQ25CUSxhQUFhWCxtQkFBaUJXLFVBQVU7b0JBRTlDUixhQUFhUSxZQUFhLEdBQUc7b0JBRTdCWCxtQkFBaUJZLFdBQVcsQ0FBQ1Q7Z0JBQy9CO2dCQUVBLHVCQXhEaUJaLDhCQXdEWG1CLFdBQU4sSUFBSyxhQUFTVixrQkFBa0JMO1lBQ2xDOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZbEIsT0FBTztnQkFDakIsSUFBSW1CO2dCQUVKLElBQU1aLFNBQVMsSUFBSSxDQUFDVixRQUFRO2dCQUU1QixJQUFJVSxRQUFRO29CQUNWLElBQU1SLGVBQWUsSUFBSSxDQUFDQSxZQUFZLENBQUNDO29CQUV2Q21CLFlBQVlwQixjQUFjLEdBQUc7Z0JBQy9CLE9BQU87b0JBQ0xvQixZQUFZLHVCQXJFR3ZCLDhCQXFFR3NCLGVBQU4sSUFBSyxhQUFhbEI7Z0JBQ2hDO2dCQUVBLE9BQU9tQjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTSxFQUFFckIsT0FBTztnQkFDOUIsSUFBSXNCO2dCQUVKLElBQU1mLFNBQVMsSUFBSSxDQUFDVixRQUFRO2dCQUU1QixJQUFJVSxRQUFRO29CQUNWLElBQU1SLGVBQWUsSUFBSSxDQUFDQSxZQUFZLENBQUNDO29CQUV2Q3NCLGlCQUFpQixBQUFDLEdBQWUsT0FBYnZCLGNBQWE7Z0JBRW5DLE9BQU87b0JBQ0x1QixpQkFBaUIsdUJBdEZGMUIsOEJBc0ZRd0Isb0JBQU4sSUFBSyxhQUFrQkMsUUFBUXJCO2dCQUNsRDtnQkFFQSxPQUFPc0I7WUFDVDs7OztZQU1PQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBaEcvQjNCO1lBZ0dvRDs7O1lBRWhFNkIsS0FBQUE7bUJBQVAsU0FBT0EsY0FBYzNCLFNBQVM7Z0JBQUksT0FBTzBCLGFBQVEsQ0FBQ0MsYUFBYSxDQWxHNUM3QixtQkFrR2dFRTtZQUFZOzs7V0FsRzVFRjtFQUEwQjRCLGFBQVE7QUE0RnJELGlCQTVGbUI1QixtQkE0Rlo4QixXQUFVO0FBRWpCLGlCQTlGbUI5QixtQkE4RlorQixhQUFZIn0=