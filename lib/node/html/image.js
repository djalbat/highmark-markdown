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
                siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertAfterwards)(domElement, parentDOMElement);
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZSwgaW5zZXJ0QWZ0ZXIsIGluc2VydEFmdGVyd2FyZHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RvbVwiO1xuaW1wb3J0IHsgQUxUX0FUVFJJQlVURV9OQU1FLCBTUkNfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgc3JjKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLnNyYyhjb250ZXh0KTsgfVxuXG4gIGFsdChjb250ZXh0KSB7XG4gICAgY29uc3QgYWx0ID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBpbmxpbmVUZXh0SFRNTE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgcGxhaW5UZXh0ID0gaW5saW5lVGV4dEhUTUxOb2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgICAgYWx0ID0gcGxhaW5UZXh0OyAgLy8vXG5cbiAgICAgIHJldHVybiBhbHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWx0O1xuICB9XG5cbiAgc2VsZkNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZXMgPSB0aGlzLmF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IHRoaXMuYXR0cmlidXRlVmFsdWVzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZXNIVE1MID0gYXR0cmlidXRlTmFtZXMucmVkdWNlKChhdHRyaWJ1dGVzSE1MLCBhdHRyaWJ1dGVOYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZXNbaW5kZXhdO1xuXG4gICAgICAgICAgICBhdHRyaWJ1dGVzSE1MID0gKGF0dHJpYnV0ZXNITUwgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthdHRyaWJ1dGVzSE1MfSAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImA7XG5cbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzSE1MO1xuXG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc2VsZkNsb3NpbmdUYWcgPSBgPCR7dGFnTmFtZX0gJHthdHRyaWJ1dGVzSFRNTH0vPmA7XG5cbiAgICByZXR1cm4gc2VsZkNsb3NpbmdUYWc7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lcyhjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICBBTFRfQVRUUklCVVRFX05BTUUsXG4gICAgICBTUkNfQVRUUklCVVRFX05BTUVcbiAgICBdO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWVzO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBhbHQgPSB0aGlzLmFsdChjb250ZXh0KSxcbiAgICAgICAgICBzcmMgPSB0aGlzLnNyYyhjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZXMgPSBbXG4gICAgICAgICAgICBhbHQsXG4gICAgICAgICAgICBzcmNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlcztcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIChzaWJsaW5nRE9NRWxlbWVudCAhPT0gbnVsbCkgP1xuICAgICAgaW5zZXJ0QWZ0ZXIoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpIDpcbiAgICAgICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLnJlc2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lcyA9IHRoaXMuYXR0cmlidXRlTmFtZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCk7XG5cbiAgICBhdHRyaWJ1dGVOYW1lcy5mb3JFYWNoKChhdHRyaWJ1dGVOYW1lLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZXNbaW5kZXhdO1xuXG4gICAgICBkb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW1nXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoSW1hZ2VIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoSW1hZ2VIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkltYWdlSFRNTE5vZGUiLCJzcmMiLCJjb250ZXh0Iiwib3V0ZXJOb2RlIiwiYWx0IiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJpbmxpbmVUZXh0SFRNTE5vZGUiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsInNlbGZDbG9zaW5nVGFnIiwidGFnTmFtZSIsImF0dHJpYnV0ZU5hbWVzIiwiYXR0cmlidXRlVmFsdWVzIiwiYXR0cmlidXRlc0hUTUwiLCJyZWR1Y2UiLCJhdHRyaWJ1dGVzSE1MIiwiYXR0cmlidXRlTmFtZSIsImluZGV4IiwiYXR0cmlidXRlVmFsdWUiLCJBTFRfQVRUUklCVVRFX05BTUUiLCJTUkNfQVRUUklCVVRFX05BTUUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QWZ0ZXJ3YXJkcyIsInVubW91bnQiLCJnZXRET01FbGVtZW50IiwicmVtb3ZlIiwicmVzZXRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsInNldEF0dHJpYnV0ZSIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOQTt5QkFFUTttQkFDeUI7OEJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUMsT0FBTztnQkFBSSxPQUFPLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixHQUFHLENBQUNDO1lBQVU7OztZQUVuREUsS0FBQUE7bUJBQUFBLFNBQUFBLElBQUlGLE9BQU87Z0JBQ1QsSUFBTUUsTUFBTSxJQUFJLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDO29CQUNuQyxJQUFNQyxxQkFBcUJELGdCQUNyQkUsWUFBWUQsbUJBQW1CRSxXQUFXLENBQUNQLFVBQzNDRSxNQUFNSSxXQUFZLEdBQUc7b0JBRTNCLE9BQU9KO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZVIsT0FBTztnQkFDcEIs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