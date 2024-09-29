"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImageMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var second = _necessary.arrayUtilities.second, secondLast = _necessary.arrayUtilities.secondLast;
var ImageMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ImageMarkdownNode, MarkdownNode);
    function ImageMarkdownNode() {
        _class_call_check(this, ImageMarkdownNode);
        return _call_super(this, ImageMarkdownNode, arguments);
    }
    _create_class(ImageMarkdownNode, [
        {
            key: "alt",
            value: function alt(context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeContent = inlineTextMarkdownNode.content(context), alt = inlineTextMarkdownNodeContent; ///
                return alt;
            }
        },
        {
            key: "src",
            value: function src(context) {
                var _context_pathToURL = context.pathToURL, pathToURL = _context_pathToURL === void 0 ? null : _context_pathToURL, childNodes = this.getChildNodes(), secondLastChildNode = secondLast(childNodes), pathMarkdownNode = secondLastChildNode, pathMarkdownNodeContent = pathMarkdownNode.getContent(), path = pathMarkdownNodeContent, src = pathToURL === null ? path : pathToURL(path); ///
                return src;
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(ImageMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return ImageMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBBTFRfQVRUUklCVVRFX05BTUUsIFNSQ19BVFRSSUJVVEVfTkFNRX0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmNvbnN0IHsgc2Vjb25kLCBzZWNvbmRMYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBhbHQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGVDb250ZW50ID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZS5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGFsdCA9IGlubGluZVRleHRNYXJrZG93bk5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBhbHQ7XG4gIH1cblxuICBzcmMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcGF0aFRvVVJMID0gbnVsbCB9ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kTGFzdENoaWxkTm9kZSA9IHNlY29uZExhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgcGF0aE1hcmtkb3duTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBwYXRoTWFya2Rvd25Ob2RlQ29udGVudCA9IHBhdGhNYXJrZG93bk5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHBhdGggPSBwYXRoTWFya2Rvd25Ob2RlQ29udGVudCwgLy8vXG4gICAgICAgICAgc3JjID0gKHBhdGhUb1VSTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgcGF0aCA6IC8vL1xuICAgICAgICAgICAgICAgICAgICBwYXRoVG9VUkwocGF0aCk7IC8vL1xuXG4gICAgcmV0dXJuIHNyYztcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgY29uc3Qgc2VsZkNsb3NpbmdUYWcgPSB0aGlzLnNlbGZDbG9zaW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgc2VsZkNsb3NpbmdUYWcgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzZWxmQ2xvc2luZ1RhZ31cbmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZXMgPSB0aGlzLmF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IHRoaXMuYXR0cmlidXRlVmFsdWVzKGNvbnRleHQpO1xuXG4gICAgYXR0cmlidXRlTmFtZXMuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWVzW2luZGV4XTtcblxuICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lcyA9IHRoaXMuYXR0cmlidXRlTmFtZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlc0hUTUwgPSBhdHRyaWJ1dGVOYW1lcy5yZWR1Y2UoKGF0dHJpYnV0ZXNITUwsIGF0dHJpYnV0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZVZhbHVlc1tpbmRleF07XG5cbiAgICAgICAgICAgIGF0dHJpYnV0ZXNITUwgPSAoYXR0cmlidXRlc0hNTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthdHRyaWJ1dGVzSE1MfSAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImA7XG5cbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzSE1MO1xuXG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc2VsZkNsb3NpbmdUYWcgPSBgPCR7dGFnTmFtZX0gJHthdHRyaWJ1dGVzSFRNTH0vPmA7XG5cbiAgICByZXR1cm4gc2VsZkNsb3NpbmdUYWc7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lcyhjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICBBTFRfQVRUUklCVVRFX05BTUUsXG4gICAgICBTUkNfQVRUUklCVVRFX05BTUVcbiAgICBdO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWVzO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBhbHQgPSB0aGlzLmFsdChjb250ZXh0KSxcbiAgICAgICAgICBzcmMgPSB0aGlzLnNyYyhjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZXMgPSBbXG4gICAgICAgICAgICBhbHQsXG4gICAgICAgICAgICBzcmNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEltYWdlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZU1hcmtkb3duTm9kZSIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kTGFzdCIsImFsdCIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlQ29udGVudCIsImNvbnRlbnQiLCJzcmMiLCJwYXRoVG9VUkwiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwicGF0aE1hcmtkb3duTm9kZSIsInBhdGhNYXJrZG93bk5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInBhdGgiLCJhc0hUTUwiLCJpbmRlbnQiLCJhZGp1c3RJbmRlbnQiLCJzZWxmQ2xvc2luZ1RhZyIsImh0bWwiLCJjcmVhdGVET01FbGVtZW50IiwidGFnTmFtZSIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGVOYW1lcyIsImF0dHJpYnV0ZVZhbHVlcyIsImZvckVhY2giLCJhdHRyaWJ1dGVOYW1lIiwiaW5kZXgiLCJhdHRyaWJ1dGVWYWx1ZSIsInNldEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXNIVE1MIiwicmVkdWNlIiwiYXR0cmlidXRlc0hNTCIsIkFMVF9BVFRSSUJVVEVfTkFNRSIsIlNSQ19BVFRSSUJVVEVfTkFNRSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsrREFFTjs4QkFFNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsSUFBUUMsU0FBdUJDLHlCQUFjLENBQXJDRCxRQUFRRSxhQUFlRCx5QkFBYyxDQUE3QkM7QUFFRCxJQUFBLEFBQU1ILGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxPQUFPO2dCQUNULElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JQLE9BQU9LLGFBQ3pCRyx5QkFBeUJELGlCQUN6QkUsZ0NBQWdDRCx1QkFBdUJFLE9BQU8sQ0FBQ04sVUFDL0RELE1BQU1NLCtCQUErQixHQUFHO2dCQUU5QyxPQUFPTjtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLElBQUlQLE9BQU87Z0JBQ1QseUJBQTZCQSxRQUFyQlEsV0FBQUEsNENBQVksMkJBQ2RQLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CTyxzQkFBc0JYLFdBQVdHLGFBQ2pDUyxtQkFB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