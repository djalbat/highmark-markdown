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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFMVF9BVFRSSUJVVEVfTkFNRSwgU1JDX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5pbXBvcnQge0lNQUdFX1JVTEVfTkFNRX0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBzcmMoY29udGV4dCkgeyByZXR1cm4gdGhpcy5vdXRlck5vZGUuc3JjKGNvbnRleHQpOyB9XG5cbiAgYWx0KGNvbnRleHQpIHtcbiAgICBjb25zdCBhbHQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlubGluZVRleHRIVE1MTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwbGFpblRleHQgPSBpbmxpbmVUZXh0SFRNTE5vZGUuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgICBhbHQgPSBwbGFpblRleHQ7ICAvLy9cblxuICAgICAgcmV0dXJuIGFsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiBhbHQ7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lcyA9IHRoaXMuYXR0cmlidXRlTmFtZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlc0hUTUwgPSBhdHRyaWJ1dGVOYW1lcy5yZWR1Y2UoKGF0dHJpYnV0ZXNITUwsIGF0dHJpYnV0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZVZhbHVlc1tpbmRleF07XG5cbiAgICAgICAgICAgIGF0dHJpYnV0ZXNITUwgPSAoYXR0cmlidXRlc0hNTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2F0dHJpYnV0ZXNITUx9ICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYDtcblxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNITUw7XG5cbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfSAke2F0dHJpYnV0ZXNIVE1MfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgIEFMVF9BVFRSSUJVVEVfTkFNRSxcbiAgICAgIFNSQ19BVFRSSUJVVEVfTkFNRVxuICAgIF07XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZXM7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGFsdCA9IHRoaXMuYWx0KGNvbnRleHQpLFxuICAgICAgICAgIHNyYyA9IHRoaXMuc3JjKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IFtcbiAgICAgICAgICAgIGFsdCxcbiAgICAgICAgICAgIHNyY1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVzO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KVxuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgY29uc3QgYXR0cmlidXRlTmFtZXMgPSB0aGlzLmF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IHRoaXMuYXR0cmlidXRlVmFsdWVzKGNvbnRleHQpO1xuXG4gICAgYXR0cmlidXRlTmFtZXMuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWVzW2luZGV4XTtcblxuICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoSW1hZ2VIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoSW1hZ2VIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkltYWdlSFRNTE5vZGUiLCJzcmMiLCJjb250ZXh0Iiwib3V0ZXJOb2RlIiwiYWx0IiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJpbmxpbmVUZXh0SFRNTE5vZGUiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsInNlbGZDbG9zaW5nVGFnIiwidGFnTmFtZSIsImF0dHJpYnV0ZU5hbWVzIiwiYXR0cmlidXRlVmFsdWVzIiwiYXR0cmlidXRlc0hUTUwiLCJyZWR1Y2UiLCJhdHRyaWJ1dGVzSE1MIiwiYXR0cmlidXRlTmFtZSIsImluZGV4IiwiYXR0cmlidXRlVmFsdWUiLCJBTFRfQVRUUklCVVRFX05BTUUiLCJTUkNfQVRUUklCVVRFX05BTUUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwidW5tb3VudCIsInJlbW92ZUNoaWxkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsInNldEF0dHJpYnV0ZSIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOQTt5QkFFUTs4QkFDMEI7eUJBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxPQUFPO2dCQUFJLE9BQU8sSUFBSSxDQUFDQyxTQUFTLENBQUNGLEdBQUcsQ0FBQ0M7WUFBVTs7O1lBRW5ERSxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUYsT0FBTztnQkFDVCxJQUFNRSxNQUFNLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0M7b0JBQ25DLElBQU1DLHFCQUFxQkQsZ0JBQ3JCRSxZQUFZRCxtQkFBbUJFLFdBQVcsQ0FBQ1AsVUFDM0NFLE1BQU1JLFdBQVksR0FBRztvQkFFM0IsT0FBT0o7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlUixPQUFPO2dCQUNwQixJQUFNUyxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDVCxVQUN2QlUsaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDVixVQUNyQ1csa0JBQWtCLElBQUksQ0FBQ0EsZUFBZSxDQUFDWCxVQUN2Q1ksaUJBQWlCRixlQUFlRyxNQUFNLENBQUMsU0FBQ0MsZUFBZUMsZUFBZUM7b0JBQ3BFLElBQU1DLGlCQUFpQk4sZUFBZSxDQUFDSyxNQUFNO29CQUU3Q0YsZ0JBQWdCLEFBQUNBLGtCQUFrQixPQUNqQixBQUFDLEdBQW9CRyxPQUFsQkYsZUFBYyxNQUFtQixPQUFmRSxnQkFBZSxPQUNsQyxBQUFDLEdBQW1CRixPQUFqQkQsZUFBYyxLQUFxQkcsT0FBbEJGLGVBQWMsTUFBbUIsT0FBZkUsZ0JBQWU7b0JBRXpFLE9BQU9IO2dCQUVULEdBQUcsT0FDSE4saUJBQWlCLEFBQUMsSUFBY0ksT0FBWEgsU0FBUSxLQUFrQixPQUFmRyxnQkFBZTtnQkFFckQsT0FBT0o7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlVixPQUFPO2dCQUNwQixJQUFNVSxpQkFBaUI7b0JBQ3JCUSxrQ0FBa0I7b0JBQ2xCQyxrQ0FBa0I7aUJBQ25CO2dCQUVELE9BQU9UO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCWCxPQUFPO2dCQUNyQixJQUFNRSxNQUFNLElBQUksQ0FBQ0EsR0FBRyxDQUFDRixVQUNmRCxNQUFNLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxVQUNmVyxrQkFBa0I7b0JBQ2hCVDtvQkFDQUg7aUJBQ0Q7Z0JBRVAsT0FBT1k7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUV0QixPQUFPO2dCQUNoRCxJQUFJLENBQUN1QixVQUFVLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ3hCO2dCQUV4Q3FCLGlCQUFpQkksWUFBWSxDQUFDLElBQUksQ0FBQ0YsVUFBVSxFQUFFRDtZQUNqRDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTCxnQkFBZ0IsRUFBRXJCLE9BQU87Z0JBQy9CcUIsaUJBQWlCTSxXQUFXLENBQUMsSUFBSSxDQUFDSixVQUFVO2dCQUU1QyxJQUFJLENBQUNBLFVBQVUsR0FBRztZQUNwQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJ4QixPQUFPO2dCQUN0QixJQUFJdUI7Z0JBRUosSUFBTWQsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ1Q7Z0JBRTdCdUIsYUFBYUssU0FBU0MsYUFBYSxDQUFDcEI7Z0JBRXBDLElBQU1DLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ1YsVUFDckNXLGtCQUFrQixJQUFJLENBQUNBLGVBQWUsQ0FBQ1g7Z0JBRTdDVSxlQUFlb0IsT0FBTyxDQUFDLFNBQUNmLGVBQWVDO29CQUNyQyxJQUFNQyxpQkFBaUJOLGVBQWUsQ0FBQ0ssTUFBTTtvQkFFN0NPLFdBQVdRLFlBQVksQ0FBQ2hCLGVBQWVFO2dCQUN6QztnQkFFQSxPQUFPTTtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTSxFQUFFakMsT0FBTztnQkFDOUIsSUFBTWtDLGlCQUFpQkMsdUJBQVk7Z0JBRW5DLE9BQU9EO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQTNGL0J0QztZQTJGZ0Q7OztZQUU1RHdDLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNyQyxTQUFTO2dCQUFJLE9BQU9vQyxhQUFRLENBQUNDLGFBQWEsQ0E3RjVDeEMsZUE2RjRERztZQUFZOzs7V0E3RnhFSDtFQUFzQnVDLGFBQVEifQ==