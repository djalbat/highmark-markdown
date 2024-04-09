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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var second = _necessary.arrayUtilities.second, secondLast = _necessary.arrayUtilities.secondLast;
var ImageMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ImageMarkdownNode, MarkdownNode);
    var _super = _create_super(ImageMarkdownNode);
    function ImageMarkdownNode() {
        _class_call_check(this, ImageMarkdownNode);
        return _super.apply(this, arguments);
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
                var _context_pathToURL = context.pathToURL, pathToURL = _context_pathToURL === void 0 ? null : _context_pathToURL, childNodes = this.getChildNodes(), secondLastChildNode = secondLast(childNodes), pathTerminalNode = secondLastChildNode, pathTerminalNodeContent = pathTerminalNode.getContent(), path = pathTerminalNodeContent, src = pathToURL === null ? path : pathToURL(path); ///
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
                this.setDOMElement(domElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBBTFRfQVRUUklCVVRFX05BTUUsIFNSQ19BVFRSSUJVVEVfTkFNRX0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmNvbnN0IHsgc2Vjb25kLCBzZWNvbmRMYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBhbHQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGVDb250ZW50ID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZS5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGFsdCA9IGlubGluZVRleHRNYXJrZG93bk5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBhbHQ7XG4gIH1cblxuICBzcmMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcGF0aFRvVVJMID0gbnVsbCB9ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kTGFzdENoaWxkTm9kZSA9IHNlY29uZExhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgcGF0aFRlcm1pbmFsTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBwYXRoVGVybWluYWxOb2RlQ29udGVudCA9IHBhdGhUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHBhdGggPSBwYXRoVGVybWluYWxOb2RlQ29udGVudCwgLy8vXG4gICAgICAgICAgc3JjID0gKHBhdGhUb1VSTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgcGF0aCA6IC8vL1xuICAgICAgICAgICAgICAgICAgICBwYXRoVG9VUkwocGF0aCk7IC8vL1xuXG4gICAgcmV0dXJuIHNyYztcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgY29uc3Qgc2VsZkNsb3NpbmdUYWcgPSB0aGlzLnNlbGZDbG9zaW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgc2VsZkNsb3NpbmdUYWcgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzZWxmQ2xvc2luZ1RhZ31cbmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZXMgPSB0aGlzLmF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IHRoaXMuYXR0cmlidXRlVmFsdWVzKGNvbnRleHQpO1xuXG4gICAgYXR0cmlidXRlTmFtZXMuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWVzW2luZGV4XTtcblxuICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lcyA9IHRoaXMuYXR0cmlidXRlTmFtZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlc0hUTUwgPSBhdHRyaWJ1dGVOYW1lcy5yZWR1Y2UoKGF0dHJpYnV0ZXNITUwsIGF0dHJpYnV0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZVZhbHVlc1tpbmRleF07XG5cbiAgICAgICAgICAgIGF0dHJpYnV0ZXNITUwgPSAoYXR0cmlidXRlc0hNTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthdHRyaWJ1dGVzSE1MfSAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImA7XG5cbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzSE1MO1xuXG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc2VsZkNsb3NpbmdUYWcgPSBgPCR7dGFnTmFtZX0gJHthdHRyaWJ1dGVzSFRNTH0vPmA7XG5cbiAgICByZXR1cm4gc2VsZkNsb3NpbmdUYWc7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lcyhjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICBBTFRfQVRUUklCVVRFX05BTUUsXG4gICAgICBTUkNfQVRUUklCVVRFX05BTUVcbiAgICBdO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWVzO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBhbHQgPSB0aGlzLmFsdChjb250ZXh0KSxcbiAgICAgICAgICBzcmMgPSB0aGlzLnNyYyhjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZXMgPSBbXG4gICAgICAgICAgICBhbHQsXG4gICAgICAgICAgICBzcmNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEltYWdlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZU1hcmtkb3duTm9kZSIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kTGFzdCIsImFsdCIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlQ29udGVudCIsImNvbnRlbnQiLCJzcmMiLCJwYXRoVG9VUkwiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwicGF0aFRlcm1pbmFsTm9kZSIsInBhdGhUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInBhdGgiLCJhc0hUTUwiLCJpbmRlbnQiLCJhZGp1c3RJbmRlbnQiLCJzZWxmQ2xvc2luZ1RhZyIsImh0bWwiLCJjcmVhdGVET01FbGVtZW50IiwidGFnTmFtZSIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGVOYW1lcyIsImF0dHJpYnV0ZVZhbHVlcyIsImZvckVhY2giLCJhdHRyaWJ1dGVOYW1lIiwiaW5kZXgiLCJhdHRyaWJ1dGVWYWx1ZSIsInNldEF0dHJpYnV0ZSIsInNldERPTUVsZW1lbnQiLCJhdHRyaWJ1dGVzSFRNTCIsInJlZHVjZSIsImF0dHJpYnV0ZXNITUwiLCJBTFRfQVRUUklCVVRFX05BTUUiLCJTUkNfQVRUUklCVVRFX05BTUUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOOzhCQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxJQUFRQyxTQUF1QkMseUJBQWMsQ0FBckNELFFBQVFFLGFBQWVELHlCQUFjLENBQTdCQztBQUVELElBQUEsQUFBTUgsa0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkksS0FBQUE7bUJBQUFBLFNBQUFBLElBQUlDLE9BQU87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