"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImageHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _constants = require("../../constants");
var _dom = require("../../utilities/dom");
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
var ImageHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(ImageHTMLNode, HTMLNode);
    function ImageHTMLNode() {
        _class_call_check(this, ImageHTMLNode);
        return _call_super(this, ImageHTMLNode, arguments);
    }
    _create_class(ImageHTMLNode, [
        {
            key: "src",
            value: function src(context) {
                var markdownNode = this.getMarkdownNode(), src = markdownNode.src(context);
                return src;
            }
        },
        {
            key: "alt",
            value: function alt(context) {
                var alt = this.fromFirstChildNode(function(firstChildNode) {
                    var inlineTextHTMLNode = firstChildNode, plainText = inlineTextHTMLNode.asPlainText(context), alt = plainText; ///
                    return alt;
                });
                return alt;
            }
        },
        {
            key: "selfClosingTag",
            value: function selfClosingTag(context) {
                var tagName = this.tagName(context), attributeNames = this.attributeNames(context), attributeValues = this.attributeValues(context), attributesHTML = attributeNames.reduce(function(attributesHML, attributeName, index) {
                    var attributeValue = attributeValues[index];
                    attributesHML = attributesHML === null ? "".concat(attributeName, '="').concat(attributeValue, '"') : "".concat(attributesHML, " ").concat(attributeName, '="').concat(attributeValue, '"');
                    return attributesHML;
                }, null), selfClosingTag = "<".concat(tagName, " ").concat(attributesHTML, "/>");
                return selfClosingTag;
            }
        },
        {
            key: "attributeNames",
            value: function attributeNames(context) {
                var attributeNames = [
                    _attributeNames.ALT_ATTRIBUTE_NAME,
                    _attributeNames.SRC_ATTRIBUTE_NAME
                ];
                return attributeNames;
            }
        },
        {
            key: "attributeValues",
            value: function attributeValues(context) {
                var alt = this.alt(context), src = this.src(context), attributeValues = [
                    alt,
                    src
                ];
                return attributeValues;
            }
        },
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                indent = null;
                return indent;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var domElement = this.createDOMElement(context);
                this.setDOMElement(domElement);
                siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(domElement, parentDOMElement);
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement) {
                var domElement = this.getDOMElement();
                (0, _dom.remove)(domElement, parentDOMElement);
                this.resetDOMElement();
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement;
                var tagName = this.tagName(context);
                domElement = document.createElement(tagName);
                var attributeNames = this.attributeNames(context), attributeValues = this.attributeValues(context);
                attributeNames.forEach(function(attributeName, index) {
                    var attributeValue = attributeValues[index];
                    domElement.setAttribute(attributeName, attributeValue);
                });
                return domElement;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML = _constants.EMPTY_STRING;
                return childNodesHTML;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(ImageHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(ImageHTMLNode, outerNode);
            }
        }
    ]);
    return ImageHTMLNode;
}(_html.default);
_define_property(ImageHTMLNode, "tagName", "img");
_define_property(ImageHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7cmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5pbXBvcnQgeyBBTFRfQVRUUklCVVRFX05BTUUsIFNSQ19BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBzcmMoY29udGV4dCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgc3JjID0gbWFya2Rvd25Ob2RlLnNyYyhjb250ZXh0KTtcblxuICAgIHJldHVybiBzcmM7XG4gIH1cblxuICBhbHQoY29udGV4dCkge1xuICAgIGNvbnN0IGFsdCA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW5saW5lVGV4dEhUTUxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHBsYWluVGV4dCA9IGlubGluZVRleHRIVE1MTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICAgIGFsdCA9IHBsYWluVGV4dDsgIC8vL1xuXG4gICAgICByZXR1cm4gYWx0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFsdDtcbiAgfVxuXG4gIHNlbGZDbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWVzID0gdGhpcy5hdHRyaWJ1dGVOYW1lcyhjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZXMgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlcyhjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVzSFRNTCA9IGF0dHJpYnV0ZU5hbWVzLnJlZHVjZSgoYXR0cmlidXRlc0hNTCwgYXR0cmlidXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWVzW2luZGV4XTtcblxuICAgICAgICAgICAgYXR0cmlidXRlc0hNTCA9IChhdHRyaWJ1dGVzSE1MID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXR0cmlidXRlc0hNTH0gJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgO1xuXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlc0hNTDtcblxuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHNlbGZDbG9zaW5nVGFnID0gYDwke3RhZ05hbWV9ICR7YXR0cmlidXRlc0hUTUx9Lz5gO1xuXG4gICAgcmV0dXJuIHNlbGZDbG9zaW5nVGFnO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgQUxUX0FUVFJJQlVURV9OQU1FLFxuICAgICAgU1JDX0FUVFJJQlVURV9OQU1FXG4gICAgXTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lcztcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgYWx0ID0gdGhpcy5hbHQoY29udGV4dCksXG4gICAgICAgICAgc3JjID0gdGhpcy5zcmMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gW1xuICAgICAgICAgICAgYWx0LFxuICAgICAgICAgICAgc3JjXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZXM7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgIGluc2VydEFmdGVyKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSA6XG4gICAgICAgIGluc2VydEJlZm9yZWhhbmQoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZXNldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgY29uc3QgYXR0cmlidXRlTmFtZXMgPSB0aGlzLmF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IHRoaXMuYXR0cmlidXRlVmFsdWVzKGNvbnRleHQpO1xuXG4gICAgYXR0cmlidXRlTmFtZXMuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWVzW2luZGV4XTtcblxuICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImltZ1wiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEltYWdlSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEltYWdlSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZUhUTUxOb2RlIiwic3JjIiwiY29udGV4dCIsIm1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duTm9kZSIsImFsdCIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiaW5saW5lVGV4dEhUTUxOb2RlIiwicGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJzZWxmQ2xvc2luZ1RhZyIsInRhZ05hbWUiLCJhdHRyaWJ1dGVOYW1lcyIsImF0dHJpYnV0ZVZhbHVlcyIsImF0dHJpYnV0ZXNIVE1MIiwicmVkdWNlIiwiYXR0cmlidXRlc0hNTCIsImF0dHJpYnV0ZU5hbWUiLCJpbmRleCIsImF0dHJpYnV0ZVZhbHVlIiwiQUxUX0FUVFJJQlVURV9OQU1FIiwiU1JDX0FUVFJJQlVURV9OQU1FIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsImluc2VydEJlZm9yZWhhbmQiLCJ1bm1vdW50IiwiZ2V0RE9NRWxlbWVudCIsInJlbW92ZSIsInJlc2V0RE9NRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZvckVhY2giLCJzZXRBdHRyaWJ1dGUiLCJjaGlsZE5vZGVzQXNIVE1MIiwiY2hpbGROb2Rlc0hUTUwiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTkE7eUJBRVE7bUJBQ3dCOzhCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUMsT0FBTztnQkFDVCxJQUFNQyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0gsTUFBTUUsYUFBYUYsR0FBRyxDQUFDQztnQkFFN0IsT0FBT0Q7WUFDVDs7O1lBRUFJLEtBQUFB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