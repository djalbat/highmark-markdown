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
                siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(domElement, parentDOMElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7cmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5pbXBvcnQgeyBBTFRfQVRUUklCVVRFX05BTUUsIFNSQ19BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBzcmMoY29udGV4dCkgeyByZXR1cm4gdGhpcy5vdXRlck5vZGUuc3JjKGNvbnRleHQpOyB9XG5cbiAgYWx0KGNvbnRleHQpIHtcbiAgICBjb25zdCBhbHQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlubGluZVRleHRIVE1MTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwbGFpblRleHQgPSBpbmxpbmVUZXh0SFRNTE5vZGUuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgICBhbHQgPSBwbGFpblRleHQ7ICAvLy9cblxuICAgICAgcmV0dXJuIGFsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiBhbHQ7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lcyA9IHRoaXMuYXR0cmlidXRlTmFtZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlc0hUTUwgPSBhdHRyaWJ1dGVOYW1lcy5yZWR1Y2UoKGF0dHJpYnV0ZXNITUwsIGF0dHJpYnV0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZVZhbHVlc1tpbmRleF07XG5cbiAgICAgICAgICAgIGF0dHJpYnV0ZXNITUwgPSAoYXR0cmlidXRlc0hNTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2F0dHJpYnV0ZXNITUx9ICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYDtcblxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNITUw7XG5cbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfSAke2F0dHJpYnV0ZXNIVE1MfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgIEFMVF9BVFRSSUJVVEVfTkFNRSxcbiAgICAgIFNSQ19BVFRSSUJVVEVfTkFNRVxuICAgIF07XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZXM7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGFsdCA9IHRoaXMuYWx0KGNvbnRleHQpLFxuICAgICAgICAgIHNyYyA9IHRoaXMuc3JjKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IFtcbiAgICAgICAgICAgIGFsdCxcbiAgICAgICAgICAgIHNyY1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVzO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgKHNpYmxpbmdET01FbGVtZW50ICE9PSBudWxsKSA/XG4gICAgICBpbnNlcnRBZnRlcihkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCkgOlxuICAgICAgICBpbnNlcnRCZWZvcmVoYW5kKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHRoaXMucmVzZXRET01FbGVtZW50KCk7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCk7XG5cbiAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWVzID0gdGhpcy5hdHRyaWJ1dGVOYW1lcyhjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZXMgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlcyhjb250ZXh0KTtcblxuICAgIGF0dHJpYnV0ZU5hbWVzLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZVZhbHVlc1tpbmRleF07XG5cbiAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbWdcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhJbWFnZUhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShJbWFnZUhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiSW1hZ2VIVE1MTm9kZSIsInNyYyIsImNvbnRleHQiLCJvdXRlck5vZGUiLCJhbHQiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImlubGluZVRleHRIVE1MTm9kZSIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0Iiwic2VsZkNsb3NpbmdUYWciLCJ0YWdOYW1lIiwiYXR0cmlidXRlTmFtZXMiLCJhdHRyaWJ1dGVWYWx1ZXMiLCJhdHRyaWJ1dGVzSFRNTCIsInJlZHVjZSIsImF0dHJpYnV0ZXNITUwiLCJhdHRyaWJ1dGVOYW1lIiwiaW5kZXgiLCJhdHRyaWJ1dGVWYWx1ZSIsIkFMVF9BVFRSSUJVVEVfTkFNRSIsIlNSQ19BVFRSSUJVVEVfTkFNRSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJpbnNlcnRCZWZvcmVoYW5kIiwidW5tb3VudCIsImdldERPTUVsZW1lbnQiLCJyZW1vdmUiLCJyZXNldERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5BO3lCQUVRO21CQUN3Qjs4QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxPQUFPO2dCQUFJLE9BQU8sSUFBSSxDQUFDQyxTQUFTLENBQUNGLEdBQUcsQ0FBQ0M7WUFBVTs7O1lBRW5ERSxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUYsT0FBTztnQkFDVCxJQUFNRSxNQUFNLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0M7b0JBQ25DLElBQU1DLHFCQUFxQkQsZ0JBQ3JCRSxZQUFZRCxtQkFBbUJFLFdBQVcsQ0FBQ1AsVUFDM0NFLE1BQU1JLFdBQVksR0FBRztvQkFFM0IsT0FBT0o7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlUixPQUFPO2dCQUNwQixJ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