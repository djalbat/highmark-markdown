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
            key: "asHTML",
            value: function asHTML(indent, context) {
                indent = this.adjustIndent(indent);
                var selfClosingTag = this.selfClosingTag(context), html = indent === null ? selfClosingTag : "".concat(indent).concat(selfClosingTag, "\n");
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var tagName = this.tagName(context), domElement = document.createElement(tagName), attributeNames = this.attributeNames(context), attributeValues = this.attributeValues(context);
                attributeNames.forEach(function(attributeName, index) {
                    var attributeValue = attributeValues[index];
                    domElement.setAttribute(attributeName, attributeValue);
                });
                return domElement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IEFMVF9BVFRSSUJVVEVfTkFNRSwgU1JDX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIHNlbGZDbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWVzID0gdGhpcy5hdHRyaWJ1dGVOYW1lcyhjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZXMgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlcyhjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVzSFRNTCA9IGF0dHJpYnV0ZU5hbWVzLnJlZHVjZSgoYXR0cmlidXRlc0hNTCwgYXR0cmlidXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWVzW2luZGV4XTtcblxuICAgICAgICAgICAgYXR0cmlidXRlc0hNTCA9IChhdHRyaWJ1dGVzSE1MID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXR0cmlidXRlc0hNTH0gJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgO1xuXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlc0hNTDtcblxuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHNlbGZDbG9zaW5nVGFnID0gYDwke3RhZ05hbWV9ICR7YXR0cmlidXRlc0hUTUx9Lz5gO1xuXG4gICAgcmV0dXJuIHNlbGZDbG9zaW5nVGFnO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgQUxUX0FUVFJJQlVURV9OQU1FLFxuICAgICAgU1JDX0FUVFJJQlVURV9OQU1FXG4gICAgXTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lcztcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgYWx0ID0gdGhpcy5hbHQoY29udGV4dCksXG4gICAgICAgICAgc3JjID0gdGhpcy5zcmMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gW1xuICAgICAgICAgICAgYWx0LFxuICAgICAgICAgICAgc3JjXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZXM7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IHNlbGZDbG9zaW5nVGFnID0gdGhpcy5zZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIHNlbGZDbG9zaW5nVGFnIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzZWxmQ2xvc2luZ1RhZ31cbmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZXMgPSB0aGlzLmF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IHRoaXMuYXR0cmlidXRlVmFsdWVzKGNvbnRleHQpO1xuXG4gICAgYXR0cmlidXRlTmFtZXMuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWVzW2luZGV4XTtcblxuICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhJbWFnZUhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShJbWFnZUhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiSW1hZ2VIVE1MTm9kZSIsInNlbGZDbG9zaW5nVGFnIiwiY29udGV4dCIsInRhZ05hbWUiLCJhdHRyaWJ1dGVOYW1lcyIsImF0dHJpYnV0ZVZhbHVlcyIsImF0dHJpYnV0ZXNIVE1MIiwicmVkdWNlIiwiYXR0cmlidXRlc0hNTCIsImF0dHJpYnV0ZU5hbWUiLCJpbmRleCIsImF0dHJpYnV0ZVZhbHVlIiwiQUxUX0FUVFJJQlVURV9OQU1FIiwiU1JDX0FUVFJJQlVURV9OQU1FIiwiYWx0Iiwic3JjIiwiYXNIVE1MIiwiaW5kZW50IiwiYWRqdXN0SW5kZW50IiwiaHRtbCIsImNyZWF0ZURPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsInNldEF0dHJpYnV0ZSIsImZyb21Ob3RoaW5nIiwiSFRNTE5v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