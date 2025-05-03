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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFMVF9BVFRSSUJVVEVfTkFNRSwgU1JDX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5pbXBvcnQge0lNQUdFX1JVTEVfTkFNRX0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBzcmMoY29udGV4dCkgeyByZXR1cm4gdGhpcy5vdXRlck5vZGUuc3JjKGNvbnRleHQpOyB9XG5cbiAgYWx0KGNvbnRleHQpIHtcbiAgICBjb25zdCBhbHQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlubGluZVRleHRIVE1MTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwbGFpblRleHQgPSBpbmxpbmVUZXh0SFRNTE5vZGUuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgICBhbHQgPSBwbGFpblRleHQ7ICAvLy9cblxuICAgICAgcmV0dXJuIGFsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiBhbHQ7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lcyA9IHRoaXMuYXR0cmlidXRlTmFtZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlc0hUTUwgPSBhdHRyaWJ1dGVOYW1lcy5yZWR1Y2UoKGF0dHJpYnV0ZXNITUwsIGF0dHJpYnV0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZVZhbHVlc1tpbmRleF07XG5cbiAgICAgICAgICAgIGF0dHJpYnV0ZXNITUwgPSAoYXR0cmlidXRlc0hNTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2F0dHJpYnV0ZXNITUx9ICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYDtcblxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNITUw7XG5cbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfSAke2F0dHJpYnV0ZXNIVE1MfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgIEFMVF9BVFRSSUJVVEVfTkFNRSxcbiAgICAgIFNSQ19BVFRSSUJVVEVfTkFNRVxuICAgIF07XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZXM7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGFsdCA9IHRoaXMuYWx0KGNvbnRleHQpLFxuICAgICAgICAgIHNyYyA9IHRoaXMuc3JjKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IFtcbiAgICAgICAgICAgIGFsdCxcbiAgICAgICAgICAgIHNyY1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVzO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcblxuICAgIHRoaXMucmVzZXRET01FbGVtZW50KCk7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCk7XG5cbiAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWVzID0gdGhpcy5hdHRyaWJ1dGVOYW1lcyhjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZXMgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlcyhjb250ZXh0KTtcblxuICAgIGF0dHJpYnV0ZU5hbWVzLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZVZhbHVlc1tpbmRleF07XG5cbiAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbWdcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhJbWFnZUhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShJbWFnZUhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiSW1hZ2VIVE1MTm9kZSIsInNyYyIsImNvbnRleHQiLCJvdXRlck5vZGUiLCJhbHQiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImlubGluZVRleHRIVE1MTm9kZSIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0Iiwic2VsZkNsb3NpbmdUYWciLCJ0YWdOYW1lIiwiYXR0cmlidXRlTmFtZXMiLCJhdHRyaWJ1dGVWYWx1ZXMiLCJhdHRyaWJ1dGVzSFRNTCIsInJlZHVjZSIsImF0dHJpYnV0ZXNITUwiLCJhdHRyaWJ1dGVOYW1lIiwiaW5kZXgiLCJhdHRyaWJ1dGVWYWx1ZSIsIkFMVF9BVFRSSUJVVEVfTkFNRSIsIlNSQ19BVFRSSUJVVEVfTkFNRSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwidW5tb3VudCIsImdldERPTUVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInJlc2V0RE9NRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZvckVhY2giLCJzZXRBdHRyaWJ1dGUiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTkE7eUJBRVE7OEJBQzBCO3lCQUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLElBQUlDLE9BQU87Z0JBQUksT0FBTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsR0FBRyxDQUFDQztZQUFVOzs7WUFFbkRFLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJRixPQUFPO2dCQUNULElBQU1FLE1BQU0sSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxTQUFDQztvQkFDbkMsSUFBTUMscUJBQXFCRCxnQkFDckJFLFlBQVlELG1CQUFtQkUsV0FBVyxDQUFDUCxVQUMzQ0UsTUFBTUksV0FBWSxHQUFHO29CQUUzQixPQUFPSjtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVSLE9BQU87Z0JBQ3BCLElBQU1TLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNULFVBQ3ZCVSxpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNWLFVBQ3JDVyxrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLENBQUNYLFVBQ3ZDWSxpQkFBaUJGLGVBQWVHLE1BQU0sQ0FBQyxTQUFDQyxlQUFlQyxlQUFlQztvQkFDcEUsSUFBTUMsaUJBQWlCTixlQUFlLENBQUNLLE1BQU07b0JBRTdDRixnQkFBZ0IsQUFBQ0Esa0JBQWtCLE9BQ2pCLEFBQUMsR0FBb0JHLE9BQWxCRixlQUFjLE1BQW1CLE9BQWZFLGdCQUFlLE9BQ2xDLEFBQUMsR0FBbUJGLE9BQWpCRCxlQUFjLEtBQXFCRyxPQUFsQkYsZUFBYyxNQUFtQixPQUFmRSxnQkFBZTtvQkFFekUsT0FBT0g7Z0JBRVQsR0FBRyxPQUNITixpQkFBaUIsQUFBQyxJQUFjSSxPQUFYSCxTQUFRLEtBQWtCLE9BQWZHLGdCQUFlO2dCQUVyRCxPQUFPSjtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVWLE9BQU87Z0JBQ3BCLElBQU1VLGlCQUFpQjtvQkFDckJRLGtDQUFrQjtvQkFDbEJDLGtDQUFrQjtpQkFDbkI7Z0JBRUQsT0FBT1Q7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JYLE9BQU87Z0JBQ3JCLElBQU1FLE1BQU0sSUFBSSxDQUFDQSxHQUFHLENBQUNGLFVBQ2ZELE1BQU0sSUFBSSxDQUFDQSxHQUFHLENBQUNDLFVBQ2ZXLGtCQUFrQjtvQkFDaEJUO29CQUNBSDtpQkFDRDtnQkFFUCxPQUFPWTtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRXRCLE9BQU87Z0JBQ2hELElBQU11QixhQUFhLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUN4QjtnQkFFekMsSUFBSSxDQUFDeUIsYUFBYSxDQUFDRjtnQkFFbkJGLGlCQUFpQkssWUFBWSxDQUFDSCxZQUFZRDtZQUM1Qzs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTixnQkFBZ0IsRUFBRXJCLE9BQU87Z0JBQy9CLElBQU11QixhQUFhLElBQUksQ0FBQ0ssYUFBYTtnQkFFckNQLGlCQUFpQlEsV0FBVyxDQUFDTjtnQkFFN0IsSUFBSSxDQUFDTyxlQUFlO1lBQ3RCOzs7WUFFQU4sS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQnhCLE9BQU87Z0JBQ3RCLElBQUl1QjtnQkFFSixJQUFNZCxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDVDtnQkFFN0J1QixhQUFhUSxTQUFTQyxhQUFhLENBQUN2QjtnQkFFcEMsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDVixVQUNyQ1csa0JBQWtCLElBQUksQ0FBQ0EsZUFBZSxDQUFDWDtnQkFFN0NVLGVBQWV1QixPQUFPLENBQUMsU0FBQ2xCLGVBQWVDO29CQUNyQyxJQUFNQyxpQkFBaUJOLGVBQWUsQ0FBQ0ssTUFBTTtvQkFFN0NPLFdBQVdXLFlBQVksQ0FBQ25CLGVBQWVFO2dCQUN6QztnQkFFQSxPQUFPTTtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTSxFQUFFcEMsT0FBTztnQkFDOUIsSUFBTXFDLGlCQUFpQkMsdUJBQVk7Z0JBRW5DLE9BQU9EO1lBQ1Q7Ozs7WUFNT0UsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQW5HL0J6QztZQW1HZ0Q7OztZQUU1RDJDLEtBQUFBO21CQUFQLFNBQU9BLGNBQWN4QyxTQUFTO2dCQUFJLE9BQU91QyxhQUFRLENBQUNDLGFBQWEsQ0FyRzVDM0MsZUFxRzRERztZQUFZOzs7V0FyR3hFSDtFQUFzQjBDLGFBQVE7QUErRmpELGlCQS9GbUIxQyxlQStGWlcsV0FBVTtBQUVqQixpQkFqR21CWCxlQWlHWjRDLGFBQVkifQ==