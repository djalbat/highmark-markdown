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
                return this.outerNode.src(context);
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
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                this.domElement = this.createDOMElement(context);
                parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                parentDOMElement.removeChild(this.domElement);
                this.domElement = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFMVF9BVFRSSUJVVEVfTkFNRSwgU1JDX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIHNyYyhjb250ZXh0KSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5zcmMoY29udGV4dCk7IH1cblxuICBhbHQoY29udGV4dCkge1xuICAgIGNvbnN0IGFsdCA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW5saW5lVGV4dEhUTUxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHBsYWluVGV4dCA9IGlubGluZVRleHRIVE1MTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICAgIGFsdCA9IHBsYWluVGV4dDsgIC8vL1xuXG4gICAgICByZXR1cm4gYWx0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFsdDtcbiAgfVxuXG4gIHNlbGZDbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWVzID0gdGhpcy5hdHRyaWJ1dGVOYW1lcyhjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZXMgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlcyhjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVzSFRNTCA9IGF0dHJpYnV0ZU5hbWVzLnJlZHVjZSgoYXR0cmlidXRlc0hNTCwgYXR0cmlidXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWVzW2luZGV4XTtcblxuICAgICAgICAgICAgYXR0cmlidXRlc0hNTCA9IChhdHRyaWJ1dGVzSE1MID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXR0cmlidXRlc0hNTH0gJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgO1xuXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlc0hNTDtcblxuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHNlbGZDbG9zaW5nVGFnID0gYDwke3RhZ05hbWV9ICR7YXR0cmlidXRlc0hUTUx9Lz5gO1xuXG4gICAgcmV0dXJuIHNlbGZDbG9zaW5nVGFnO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgQUxUX0FUVFJJQlVURV9OQU1FLFxuICAgICAgU1JDX0FUVFJJQlVURV9OQU1FXG4gICAgXTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lcztcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgYWx0ID0gdGhpcy5hbHQoY29udGV4dCksXG4gICAgICAgICAgc3JjID0gdGhpcy5zcmMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gW1xuICAgICAgICAgICAgYWx0LFxuICAgICAgICAgICAgc3JjXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZXM7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpXG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lcyA9IHRoaXMuYXR0cmlidXRlTmFtZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCk7XG5cbiAgICBhdHRyaWJ1dGVOYW1lcy5mb3JFYWNoKChhdHRyaWJ1dGVOYW1lLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZXNbaW5kZXhdO1xuXG4gICAgICBkb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhJbWFnZUhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShJbWFnZUhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiSW1hZ2VIVE1MTm9kZSIsInNyYyIsImNvbnRleHQiLCJvdXRlck5vZGUiLCJhbHQiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImlubGluZVRleHRIVE1MTm9kZSIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0Iiwic2VsZkNsb3NpbmdUYWciLCJ0YWdOYW1lIiwiYXR0cmlidXRlTmFtZXMiLCJhdHRyaWJ1dGVWYWx1ZXMiLCJhdHRyaWJ1dGVzSFRNTCIsInJlZHVjZSIsImF0dHJpYnV0ZXNITUwiLCJhdHRyaWJ1dGVOYW1lIiwiaW5kZXgiLCJhdHRyaWJ1dGVWYWx1ZSIsIkFMVF9BVFRSSUJVVEVfTkFNRSIsIlNSQ19BVFRSSUJVVEVfTkFNRSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJ1bm1vdW50IiwicmVtb3ZlQ2hpbGQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxBO3lCQUVROzhCQUMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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