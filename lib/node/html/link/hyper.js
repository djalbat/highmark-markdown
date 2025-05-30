"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HyperlinkHTMLNode;
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
var HyperlinkHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(HyperlinkHTMLNode, HTMLNode);
    function HyperlinkHTMLNode() {
        _class_call_check(this, HyperlinkHTMLNode);
        return _call_super(this, HyperlinkHTMLNode, arguments);
    }
    _create_class(HyperlinkHTMLNode, [
        {
            key: "isSimple",
            value: function isSimple() {
                var markdownNode = this.getMarkdownNode(), simple = markdownNode.isSimple();
                return simple;
            }
        },
        {
            key: "url",
            value: function url(context) {
                var markdownNode = this.getMarkdownNode(), url = markdownNode.url(context);
                return url;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var url = this.url(context), content = url; ///
                return content;
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
                var url = this.url(context), attributeValue = url; ///
                return attributeValue;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var domElement;
                var simple = this.isSimple();
                if (!simple) {
                    _get(_get_prototype_of(HyperlinkHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                } else {
                    domElement = this.createDOMElement(context);
                    this.setDOMElement(domElement);
                    siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(domElement, parentDOMElement);
                    parentDOMElement = domElement; ///
                    var content = this.content(context), textNode = document.createTextNode(content);
                    domElement = textNode; ///
                    (0, _dom.insertAfterwards)(domElement, parentDOMElement);
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
                    _get(_get_prototype_of(HyperlinkHTMLNode.prototype), "unmount", this).call(this, parentDOMElement, context);
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
                    var url = this.url(context);
                    plainText = url; ///
                } else {
                    plainText = _get(_get_prototype_of(HyperlinkHTMLNode.prototype), "asPlainText", this).call(this, context);
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
                    var url = this.url(context);
                    childNodesHTML = "".concat(url, "\n");
                } else {
                    childNodesHTML = _get(_get_prototype_of(HyperlinkHTMLNode.prototype), "childNodesAsHTML", this).call(this, indent, context);
                }
                return childNodesHTML;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(HyperlinkHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(HyperlinkHTMLNode, outerNode);
            }
        }
    ]);
    return HyperlinkHTMLNode;
}(_html.default);
_define_property(HyperlinkHTMLNode, "tagName", "a");
_define_property(HyperlinkHTMLNode, "className", "hyperlink");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9oeXBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcywgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5cGVybGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHNpbXBsZSA9IG1hcmtkb3duTm9kZS5pc1NpbXBsZSgpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIHVybChjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gdGhpcy5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICB1cmwgPSBtYXJrZG93bk5vZGUudXJsKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IHVybCA9IHRoaXMudXJsKGNvbnRleHQpLFxuICAgICAgICAgIGNvbnRlbnQgPSB1cmw7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnVybChjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHVybDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKCFzaW1wbGUpIHtcbiAgICAgIHN1cGVyLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgaW5zZXJ0QWZ0ZXIoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpIDpcbiAgICAgICAgICBpbnNlcnRCZWZvcmVoYW5kKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKCFzaW1wbGUpIHtcbiAgICAgIHN1cGVyLnVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIHtcbiAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIGZpcnN0Q2hpbGQgPSBkb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICAgIGRvbUVsZW1lbnQgPSBmaXJzdENoaWxkOyAgLy8vXG5cbiAgICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLnJlc2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGxldCBwbGFpblRleHQ7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnVybChjb250ZXh0KTtcblxuICAgICAgcGxhaW5UZXh0ID0gdXJsOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgcGxhaW5UZXh0ID0gc3VwZXIuYXNQbGFpblRleHQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGNoaWxkTm9kZXNIVE1MO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgdXJsID0gdGhpcy51cmwoY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7dXJsfVxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBzdXBlci5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJoeXBlcmxpbmtcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhIeXBlcmxpbmtIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoSHlwZXJsaW5rSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJIeXBlcmxpbmtIVE1MTm9kZSIsImlzU2ltcGxlIiwibWFya2Rvd25Ob2RlIiwiZ2V0TWFya2Rvd25Ob2RlIiwic2ltcGxlIiwidXJsIiwiY29udGV4dCIsImNvbnRlbnQiLCJhdHRyaWJ1dGVOYW1lIiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsImluc2VydEJlZm9yZWhhbmQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRBZnRlcndhcmRzIiwiZ2V0RE9NRWxlbWVudCIsInVubW91bnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwicmVzZXRET01FbGVtZW50IiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxBOzhCQUVlO21CQUNvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxTQUFTRixhQUFhRCxRQUFRO2dCQUVwQyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLElBQUlDLE9BQU87Z0JBQ1QsSUFBTUosZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNFLE1BQU1ILGFBQWFHLEdBQUcsQ0FBQ0M7Z0JBRTdCLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUQsT0FBTztnQkFDYixJQUFNRCxNQUFNLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxVQUNmQyxVQUFVRixLQUFNLEdBQUc7Z0JBRXpCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0YsT0FBTztnQkFDbkIsSUFBTUUsZ0JBQWdCQyxtQ0FBbUI7Z0JBRXpD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