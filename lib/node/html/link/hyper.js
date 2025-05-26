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
                return this.outerNode.isSimple();
            }
        },
        {
            key: "url",
            value: function url(context) {
                return this.outerNode.url(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9oeXBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcywgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5cGVybGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBpc1NpbXBsZSgpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmlzU2ltcGxlKCk7IH1cblxuICB1cmwoY29udGV4dCkgeyByZXR1cm4gdGhpcy5vdXRlck5vZGUudXJsKGNvbnRleHQpOyB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy51cmwoY29udGV4dCksXG4gICAgICAgICAgY29udGVudCA9IHVybDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IHVybCA9IHRoaXMudXJsKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdXJsOyAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoIXNpbXBsZSkge1xuICAgICAgc3VwZXIubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICAgIChzaWJsaW5nRE9NRWxlbWVudCAhPT0gbnVsbCkgP1xuICAgICAgICBpbnNlcnRBZnRlcihkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCkgOlxuICAgICAgICAgIGluc2VydEJlZm9yZWhhbmQoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoIXNpbXBsZSkge1xuICAgICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAge1xuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IGRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgICAgZG9tRWxlbWVudCA9IGZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHRoaXMucmVzZXRET01FbGVtZW50KCk7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgbGV0IHBsYWluVGV4dDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMudXJsKGNvbnRleHQpO1xuXG4gICAgICBwbGFpblRleHQgPSB1cmw7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGFpblRleHQgPSBzdXBlci5hc1BsYWluVGV4dChjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc0hUTUw7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnVybChjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHt1cmx9XG5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IHN1cGVyLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImh5cGVybGlua1wiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEh5cGVybGlua0hUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShIeXBlcmxpbmtIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkh5cGVybGlua0hUTUxOb2RlIiwiaXNTaW1wbGUiLCJvdXRlck5vZGUiLCJ1cmwiLCJjb250ZXh0IiwiY29udGVudCIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJzaW1wbGUiLCJjcmVhdGVET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydEFmdGVyd2FyZHMiLCJnZXRET01FbGVtZW50IiwidW5tb3VudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJyZXNldERPTUVsZW1lbnQiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7OEJBRWU7bUJBQ29DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWEsT0FBTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0QsUUFBUTtZQUFJOzs7WUFFL0NFLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxPQUFPO2dCQUFJLE9BQU8sSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQ0M7WUFBVTs7O1lBRW5EQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUQsT0FBTztnQkFDYixJQUFNRCxNQUFNLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxVQUNmQyxVQUFVRixLQUFNLEdBQUc7Z0JBRXpCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0YsT0FBTztnQkFDbkIsSUFBTUUsZ0JBQWdCQyxtQ0FBbUI7Z0JBRXpDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUosT0FBTztnQkFDcEIsSUFBTUQsTUFBTSxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsVUFDZkksaUJBQWlCTCxLQUFLLEdBQUc7Z0JBRS9CLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFUCxPQUFPO2dCQUNoRCxJQUFJUTtnQkFFSixJQUFNQyxTQUFTLElBQUksQ0FBQ1osUUFBUTtnQkFFNUIsSUFBSSxDQUFDWSxR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