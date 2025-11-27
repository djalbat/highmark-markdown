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
            key: "startingTag",
            value: function startingTag(context) {
                var tagName = this.tagName(context), attributeNames = this.attributeNames(context), attributeValues = this.attributeValues(context), attributesHTML = attributeNames.reduce(function(attributesHML, attributeName, index) {
                    var attributeValue = attributeValues[index];
                    attributesHML = attributesHML === null ? "".concat(attributeName, '="').concat(attributeValue, '"') : "".concat(attributesHML, " ").concat(attributeName, '="').concat(attributeValue, '"');
                    return attributesHML;
                }, null), selfClosingTag = "<".concat(tagName, " ").concat(attributesHTML, ">");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZSwgaW5zZXJ0QWZ0ZXIsIGluc2VydEJlZm9yZWhhbmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RvbVwiO1xuaW1wb3J0IHsgQUxUX0FUVFJJQlVURV9OQU1FLCBTUkNfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgc3JjKGNvbnRleHQpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHNyYyA9IG1hcmtkb3duTm9kZS5zcmMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3JjO1xuICB9XG5cbiAgYWx0KGNvbnRleHQpIHtcbiAgICBjb25zdCBhbHQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlubGluZVRleHRIVE1MTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwbGFpblRleHQgPSBpbmxpbmVUZXh0SFRNTE5vZGUuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgICBhbHQgPSBwbGFpblRleHQ7ICAvLy9cblxuICAgICAgcmV0dXJuIGFsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiBhbHQ7XG4gIH1cblxuICBzdGFydGluZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lcyA9IHRoaXMuYXR0cmlidXRlTmFtZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlc0hUTUwgPSBhdHRyaWJ1dGVOYW1lcy5yZWR1Y2UoKGF0dHJpYnV0ZXNITUwsIGF0dHJpYnV0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZVZhbHVlc1tpbmRleF07XG5cbiAgICAgICAgICAgIGF0dHJpYnV0ZXNITUwgPSAoYXR0cmlidXRlc0hNTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2F0dHJpYnV0ZXNITUx9ICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYDtcblxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNITUw7XG5cbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfSAke2F0dHJpYnV0ZXNIVE1MfT5gO1xuXG4gICAgcmV0dXJuIHNlbGZDbG9zaW5nVGFnO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgQUxUX0FUVFJJQlVURV9OQU1FLFxuICAgICAgU1JDX0FUVFJJQlVURV9OQU1FXG4gICAgXTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lcztcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgYWx0ID0gdGhpcy5hbHQoY29udGV4dCksXG4gICAgICAgICAgc3JjID0gdGhpcy5zcmMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gW1xuICAgICAgICAgICAgYWx0LFxuICAgICAgICAgICAgc3JjXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZXM7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgIGluc2VydEFmdGVyKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSA6XG4gICAgICAgIGluc2VydEJlZm9yZWhhbmQoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZXNldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgY29uc3QgYXR0cmlidXRlTmFtZXMgPSB0aGlzLmF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IHRoaXMuYXR0cmlidXRlVmFsdWVzKGNvbnRleHQpO1xuXG4gICAgYXR0cmlidXRlTmFtZXMuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWVzW2luZGV4XTtcblxuICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImltZ1wiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEltYWdlSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEltYWdlSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZUhUTUxOb2RlIiwic3JjIiwiY29udGV4dCIsIm1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duTm9kZSIsImFsdCIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiaW5saW5lVGV4dEhUTUxOb2RlIiwicGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJzdGFydGluZ1RhZyIsInRhZ05hbWUiLCJhdHRyaWJ1dGVOYW1lcyIsImF0dHJpYnV0ZVZhbHVlcyIsImF0dHJpYnV0ZXNIVE1MIiwicmVkdWNlIiwiYXR0cmlidXRlc0hNTCIsImF0dHJpYnV0ZU5hbWUiLCJpbmRleCIsImF0dHJpYnV0ZVZhbHVlIiwic2VsZkNsb3NpbmdUYWciLCJBTFRfQVRUUklCVVRFX05BTUUiLCJTUkNfQVRUUklCVVRFX05BTUUiLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsInVubW91bnQiLCJnZXRET01FbGVtZW50IiwicmVtb3ZlIiwicmVzZXRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsInNldEF0dHJpYnV0ZSIsImNoaWxkTm9kZXNBc0hUTUwiLCJjaGlsZE5vZGVzSFRNTCIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOQTt5QkFFUTttQkFDeUI7OEJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxPQUFPO2dCQUNULElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DSCxNQUFNRSxhQUFhRixHQUFHLENBQUNDO2dCQUU3QixPQUFPRDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLElBQUlILE9BQU87Z0JBQ1QsSUFBTUcsTUFBTSxJQUFJLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDO29CQUNuQyxJQUFNQyxxQkFBcUJELGdCQUNyQkUsWUFBWUQsbUJBQW1CRSxXQUFXLENBQUNSLFVBQzNDRyxNQUFNSSxXQUFZLEdBQUc7b0JBRTNCLE9BQU9KO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWVQsT0FBTztnQkFDakIsSUFBTVUsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ1YsVUFDdkJXLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ1gsVUFDckNZLGtCQUFrQixJQUFJLENBQUNBLGVBQWUsQ0FBQ1osVUFDdkNhLGlCQUFpQkYsZUFBZUcsTUFBTSxDQUFDLFNBQUNDLGVBQWVDLGVBQWVDO29CQUNwRSxJQUFNQyxpQkFBaUJOLGVBQWUsQ0FBQ0ssTUFBTTtvQkFFN0NGLGdCQUFnQixBQUFDQSxrQkFBa0IsT0FDakIsQUFBQyxHQUFvQkcsT0FBbEJGLGVBQWMsTUFBbUIsT0FBZkUsZ0JBQWUsT0FDbEMsQUFBQyxHQUFtQkYsT0FBakJELGVBQWMsS0FBcUJHLE9BQWxCRixlQUFjLE1BQW1CLE9BQWZFLGdCQUFlO29CQUV6RSxPQUFPSDtnQkFFVCxHQUFHLE9BQ0hJLGlCQUFpQixBQUFDLElBQWNOLE9BQVhILFNBQVEsS0FBa0IsT0FBZkcsZ0JBQWU7Z0JBRXJELE9BQU9NO1lBQ1Q7OztZQUVBUixLQUFBQTttQkFBQUEsU0FBQUEsZUFBZVgsT0FBTztnQkFDcEIsSUFBTVcsaUJBQWlCO29CQUNyQlMsa0NBQWtCO29CQUNsQkMsa0NBQWtCO2lCQUNuQjtnQkFFRCxPQUFPVjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQlosT0FBTztnQkFDckIsSUFBTUcsTUFBTSxJQUFJLENBQUNBLEdBQUcsQ0FBQ0gsVUFDZkQsTUFBTSxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsVUFDZlksa0JBQWtCO29CQUNoQlQ7b0JBQ0FKO2lCQUNEO2dCQUVQLE9BQU9hO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsTUFBTTtnQkFDakJBLFNBQVM7Z0JBRVQsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUUxQixPQUFPO2dCQUNoRCxJQUFNMkIsYUFBYSxJQUFJLENBQUNDLGdCQUFnQixDQUFDNUI7Z0JBRXpDLElBQUksQ0FBQzZCLGFBQWEsQ0FBQ0Y7Z0JBRWxCRCxzQkFBc0IsT0FDckJJLElBQUFBLGdCQUFXLEVBQUNILFlBQVlGLGtCQUFrQkMscUJBQ3hDSyxJQUFBQSxxQkFBZ0IsRUFBQ0osWUFBWUY7Z0JBRWpDQyxvQkFBb0JDLFlBQVksR0FBRztnQkFFbkMsT0FBT0Q7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRUCxnQkFBZ0I7Z0JBQ3RCLElBQU1FLGFBQWEsSUFBSSxDQUFDTSxhQUFhO2dCQUVyQ0MsSUFBQUEsV0FBTSxFQUFDUCxZQUFZRjtnQkFFbkIsSUFBSSxDQUFDVSxlQUFlO1lBQ3RCOzs7WUFFQVAsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjVCLE9BQU87Z0JBQ3RCLElBQUkyQjtnQkFFSixJQUFNakIsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ1Y7Z0JBRTdCMkIsYUFBYVMsU0FBU0MsYUFBYSxDQUFDM0I7Z0JBRXBDLElBQU1DLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ1gsVUFDckNZLGtCQUFrQixJQUFJLENBQUNBLGVBQWUsQ0FBQ1o7Z0JBRTdDVyxlQUFlMkIsT0FBTyxDQUFDLFNBQUN0QixlQUFlQztvQkFDckMsSUFBTUMsaUJBQWlCTixlQUFlLENBQUNLLE1BQU07b0JBRTdDVSxXQUFXWSxZQUFZLENBQUN2QixlQUFlRTtnQkFDekM7Z0JBRUEsT0FBT1M7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJqQixNQUFNLEVBQUV2QixPQUFPO2dCQUM5QixJQUFNeUMsaUJBQWlCQyx1QkFBWTtnQkFFbkMsT0FBT0Q7WUFDVDs7OztZQU1PRSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBcEgvQjdDO1lBb0hnRDs7O1lBRTVEK0MsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixhQUFRLENBQUNDLGFBQWEsQ0F0SDVDL0MsZUFzSDREZ0Q7WUFBWTs7O1dBdEh4RWhEO0VBQXNCOEMsYUFBUTtBQWdIakQsaUJBaEhtQjlDLGVBZ0haWSxXQUFVO0FBRWpCLGlCQWxIbUJaLGVBa0haaUQsYUFBWSJ9