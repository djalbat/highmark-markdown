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
var _ruleNames = require("../../ruleNames");
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
                var domElement = this.createDOMElement(context);
                this.setDOMElement(domElement);
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                var domElement = this.getDOMElement();
                parentDOMElement.removeChild(domElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFMVF9BVFRSSUJVVEVfTkFNRSwgU1JDX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5pbXBvcnQge0lNQUdFX1JVTEVfTkFNRX0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBzcmMoY29udGV4dCkgeyByZXR1cm4gdGhpcy5vdXRlck5vZGUuc3JjKGNvbnRleHQpOyB9XG5cbiAgYWx0KGNvbnRleHQpIHtcbiAgICBjb25zdCBhbHQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlubGluZVRleHRIVE1MTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwbGFpblRleHQgPSBpbmxpbmVUZXh0SFRNTE5vZGUuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgICBhbHQgPSBwbGFpblRleHQ7ICAvLy9cblxuICAgICAgcmV0dXJuIGFsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiBhbHQ7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lcyA9IHRoaXMuYXR0cmlidXRlTmFtZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlc0hUTUwgPSBhdHRyaWJ1dGVOYW1lcy5yZWR1Y2UoKGF0dHJpYnV0ZXNITUwsIGF0dHJpYnV0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZVZhbHVlc1tpbmRleF07XG5cbiAgICAgICAgICAgIGF0dHJpYnV0ZXNITUwgPSAoYXR0cmlidXRlc0hNTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2F0dHJpYnV0ZXNITUx9ICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYDtcblxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNITUw7XG5cbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfSAke2F0dHJpYnV0ZXNIVE1MfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgIEFMVF9BVFRSSUJVVEVfTkFNRSxcbiAgICAgIFNSQ19BVFRSSUJVVEVfTkFNRVxuICAgIF07XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZXM7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGFsdCA9IHRoaXMuYWx0KGNvbnRleHQpLFxuICAgICAgICAgIHNyYyA9IHRoaXMuc3JjKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IFtcbiAgICAgICAgICAgIGFsdCxcbiAgICAgICAgICAgIHNyY1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVzO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpXG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZXNldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgY29uc3QgYXR0cmlidXRlTmFtZXMgPSB0aGlzLmF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IHRoaXMuYXR0cmlidXRlVmFsdWVzKGNvbnRleHQpO1xuXG4gICAgYXR0cmlidXRlTmFtZXMuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWVzW2luZGV4XTtcblxuICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImltZ1wiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEltYWdlSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEltYWdlSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZUhUTUxOb2RlIiwic3JjIiwiY29udGV4dCIsIm91dGVyTm9kZSIsImFsdCIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiaW5saW5lVGV4dEhUTUxOb2RlIiwicGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJzZWxmQ2xvc2luZ1RhZyIsInRhZ05hbWUiLCJhdHRyaWJ1dGVOYW1lcyIsImF0dHJpYnV0ZVZhbHVlcyIsImF0dHJpYnV0ZXNIVE1MIiwicmVkdWNlIiwiYXR0cmlidXRlc0hNTCIsImF0dHJpYnV0ZU5hbWUiLCJpbmRleCIsImF0dHJpYnV0ZVZhbHVlIiwiQUxUX0FUVFJJQlVURV9OQU1FIiwiU1JDX0FUVFJJQlVURV9OQU1FIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJ1bm1vdW50IiwiZ2V0RE9NRWxlbWVudCIsInJlbW92ZUNoaWxkIiwicmVzZXRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsInNldEF0dHJpYnV0ZSIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOQTt5QkFFUTs4QkFDMEI7eUJBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUMsT0FBTztnQkFBSSxPQUFPLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixHQUFHLENBQUNDO1lBQVU7OztZQUVuREUsS0FBQUE7bUJBQUFBLFNBQUFBLElBQUlGLE9BQU87Z0JBQ1QsSUFBTUUsTUFBTSxJQUFJLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDO29CQUNuQyxJQUFNQyxxQkFBcUJELGdCQUNyQkUsWUFBWUQsbUJBQW1CRSxXQUFXLENBQUNQLFVBQzNDRSxNQUFNSSxXQUFZLEdBQUc7b0JBRTNCLE9BQU9KO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZVIsT0FBTztnQkFDcEIsSUFBTVMsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ1QsVUFDdkJVLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ1YsVUFDckNXLGtCQUFrQixJQUFJLENBQUNBLGVBQWUsQ0FBQ1gsVUFDdkNZLGlCQUFpQkYsZUFBZUcsTUFBTSxDQUFDLFNBQUNDLGVBQWVDLGVBQWVDO29CQUNwRSxJQUFNQyxpQkFBaUJOLGVBQWUsQ0FBQ0ssTUFBTTtvQkFFN0NGLGdCQUFnQixBQUFDQSxrQkFBa0IsT0FDakIsQUFBQyxHQUFvQkcsT0FBbEJGLGVBQWMsTUFBbUIsT0FBZkUsZ0JBQWUsT0FDbEMsQUFBQyxHQUFtQkYsT0FBakJELGVBQWMsS0FBcUJHLE9BQWxCRixlQUFjLE1BQW1CLE9BQWZFLGdCQUFlO29CQUV6RSxPQUFPSDtnQkFFVCxHQUFHLE9BQ0hOLGlCQUFpQixBQUFDLElBQWNJLE9BQVhILFNBQVEsS0FBa0IsT0FBZkcsZ0JBQWU7Z0JBRXJELE9BQU9KO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZVYsT0FBTztnQkFDcEIsSUFBTVUsaUJBQWlCO29CQUNyQlEsa0NBQWtCO29CQUNsQkMsa0NBQWtCO2lCQUNuQjtnQkFFRCxPQUFPVDtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQlgsT0FBTztnQkFDckIsSUFBTUUsTUFBTSxJQUFJLENBQUNBLEdBQUcsQ0FBQ0YsVUFDZkQsTUFBTSxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsVUFDZlcsa0JBQWtCO29CQUNoQlQ7b0JBQ0FIO2lCQUNEO2dCQUVQLE9BQU9ZO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFdEIsT0FBTztnQkFDaEQsSUFBTXVCLGFBQWEsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ3hCO2dCQUV6QyxJQUFJLENBQUN5QixhQUFhLENBQUNGO2dCQUVuQkYsaUJBQWlCSyxZQUFZLENBQUNILFlBQVlEO1lBQzVDOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFOLGdCQUFnQixFQUFFckIsT0FBTztnQkFDL0IsSUFBTXVCLGFBQWEsSUFBSSxDQUFDSyxhQUFhO2dCQUVyQ1AsaUJBQWlCUSxXQUFXLENBQUNOO2dCQUU3QixJQUFJLENBQUNPLGVBQWU7WUFDdEI7OztZQUVBTixLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCeEIsT0FBTztnQkFDdEIsSUFBSXVCO2dCQUVKLElBQU1kLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNUO2dCQUU3QnVCLGFBQWFRLFNBQVNDLGFBQWEsQ0FBQ3ZCO2dCQUVwQyxJQUFNQyxpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNWLFVBQ3JDVyxrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLENBQUNYO2dCQUU3Q1UsZUFBZXVCLE9BQU8sQ0FBQyxTQUFDbEIsZUFBZUM7b0JBQ3JDLElBQU1DLGlCQUFpQk4sZUFBZSxDQUFDSyxNQUFNO29CQUU3Q08sV0FBV1csWUFBWSxDQUFDbkIsZUFBZUU7Z0JBQ3pDO2dCQUVBLE9BQU9NO1lBQ1Q7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUVwQyxPQUFPO2dCQUM5QixJQUFNcUMsaUJBQWlCQyx1QkFBWTtnQkFFbkMsT0FBT0Q7WUFDVDs7OztZQU1PRSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBbkcvQnpDO1lBbUdnRDs7O1lBRTVEMkMsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY3hDLFNBQVM7Z0JBQUksT0FBT3VDLGFBQVEsQ0FBQ0MsYUFBYSxDQXJHNUMzQyxlQXFHNERHO1lBQVk7OztXQXJHeEVIO0VBQXNCMEMsYUFBUTtBQStGakQsaUJBL0ZtQjFDLGVBK0ZaVyxXQUFVO0FBRWpCLGlCQWpHbUJYLGVBaUdaNEMsYUFBWSJ9