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
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _attributeNames = require("../../attributeNames");
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
                _get(_get_prototype_of(HyperlinkHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                var simple = this.isSimple();
                if (simple) {
                    var url = this.url(context), content = url, textNode = document.createTextNode(content), domElement = textNode, _$parentDOMElement = this.domElement, _$siblingDOMElement = null;
                    _$parentDOMElement.insertBefore(domElement, _$siblingDOMElement);
                }
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                var simple = this.isSimple();
                if (simple) {
                    var _$parentDOMElement = this.domElement, firstChild = _$parentDOMElement.firstChild, domElement = firstChild; ///
                    _$parentDOMElement.removeChild(domElement);
                }
                _get(_get_prototype_of(HyperlinkHTMLNode.prototype), "unmount", this).call(this, parentDOMElement, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaHlwZXJsaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5pbXBvcnQgeyBIUkVGX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5cGVybGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBpc1NpbXBsZSgpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmlzU2ltcGxlKCk7IH1cblxuICB1cmwoY29udGV4dCkgeyByZXR1cm4gdGhpcy5vdXRlck5vZGUudXJsKGNvbnRleHQpOyB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnVybChjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHVybDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMudXJsKGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudCA9IHVybCwgLy8vXG4gICAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlLCAgLy8vXG4gICAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LCAvLy9cbiAgICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudCxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGQgPSBwYXJlbnRET01FbGVtZW50LmZpcnN0Q2hpbGQsXG4gICAgICAgICAgICBkb21FbGVtZW50ID0gZmlyc3RDaGlsZDsgIC8vL1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpXG4gICAgfVxuXG4gICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBsZXQgcGxhaW5UZXh0O1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgdXJsID0gdGhpcy51cmwoY29udGV4dCk7XG5cbiAgICAgIHBsYWluVGV4dCA9IHVybDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYWluVGV4dCA9IHN1cGVyLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBjaGlsZE5vZGVzSFRNTDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMudXJsKGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke3VybH1cbmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gc3VwZXIuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEh5cGVybGlua0hUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShIeXBlcmxpbmtIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkh5cGVybGlua0hUTUxOb2RlIiwiaXNTaW1wbGUiLCJvdXRlck5vZGUiLCJ1cmwiLCJjb250ZXh0IiwiYXR0cmlidXRlTmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50Iiwic2ltcGxlIiwiY29udGVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImRvbUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJ1bm1vdW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9k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