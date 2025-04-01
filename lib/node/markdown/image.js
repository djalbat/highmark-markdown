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
var secondLast = _necessary.arrayUtilities.secondLast;
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
                var alt = this.fromSecondChildNode(function(secondChildNode) {
                    var inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeContent = inlineTextMarkdownNode.content(context), alt = inlineTextMarkdownNodeContent; ///
                    return alt;
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBBTFRfQVRUUklCVVRFX05BTUUsIFNSQ19BVFRSSUJVVEVfTkFNRX0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmNvbnN0IHsgc2Vjb25kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgYWx0KGNvbnRleHQpIHtcbiAgICBjb25zdCBhbHQgPSB0aGlzLmZyb21TZWNvbmRDaGlsZE5vZGUoKHNlY29uZENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZUNvbnRlbnQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgICBhbHQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlQ29udGVudDsgLy8vXG5cbiAgICAgIHJldHVybiBhbHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWx0O1xuICB9XG5cbiAgc3JjKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHBhdGhUb1VSTCA9IG51bGwgfSA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZExhc3RDaGlsZE5vZGUgPSBzZWNvbmRMYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHBhdGhNYXJrZG93bk5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcGF0aE1hcmtkb3duTm9kZUNvbnRlbnQgPSBwYXRoTWFya2Rvd25Ob2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBwYXRoID0gcGF0aE1hcmtkb3duTm9kZUNvbnRlbnQsIC8vL1xuICAgICAgICAgIHNyYyA9IChwYXRoVG9VUkwgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIHBhdGggOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgcGF0aFRvVVJMKHBhdGgpOyAvLy9cblxuICAgIHJldHVybiBzcmM7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IHNlbGZDbG9zaW5nVGFnID0gdGhpcy5zZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIHNlbGZDbG9zaW5nVGFnIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7c2VsZkNsb3NpbmdUYWd9XG5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWVzID0gdGhpcy5hdHRyaWJ1dGVOYW1lcyhjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZXMgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlcyhjb250ZXh0KTtcblxuICAgIGF0dHJpYnV0ZU5hbWVzLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZVZhbHVlc1tpbmRleF07XG5cbiAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgc2VsZkNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZXMgPSB0aGlzLmF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IHRoaXMuYXR0cmlidXRlVmFsdWVzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZXNIVE1MID0gYXR0cmlidXRlTmFtZXMucmVkdWNlKChhdHRyaWJ1dGVzSE1MLCBhdHRyaWJ1dGVOYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZXNbaW5kZXhdO1xuXG4gICAgICAgICAgICBhdHRyaWJ1dGVzSE1MID0gKGF0dHJpYnV0ZXNITUwgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXR0cmlidXRlc0hNTH0gJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgO1xuXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlc0hNTDtcblxuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHNlbGZDbG9zaW5nVGFnID0gYDwke3RhZ05hbWV9ICR7YXR0cmlidXRlc0hUTUx9Lz5gO1xuXG4gICAgcmV0dXJuIHNlbGZDbG9zaW5nVGFnO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgQUxUX0FUVFJJQlVURV9OQU1FLFxuICAgICAgU1JDX0FUVFJJQlVURV9OQU1FXG4gICAgXTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lcztcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgYWx0ID0gdGhpcy5hbHQoY29udGV4dCksXG4gICAgICAgICAgc3JjID0gdGhpcy5zcmMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gW1xuICAgICAgICAgICAgYWx0LFxuICAgICAgICAgICAgc3JjXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShJbWFnZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiSW1hZ2VNYXJrZG93bk5vZGUiLCJzZWNvbmRMYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJhbHQiLCJjb250ZXh0IiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlQ29udGVudCIsImNvbnRlbnQiLCJzcmMiLCJwYXRoVG9VUkwiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZExhc3RDaGlsZE5vZGUiLCJwYXRoTWFya2Rvd25Ob2RlIiwicGF0aE1hcmtkb3duTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwicGF0aCIsImFzSFRNTCIsImluZGVudCIsImFkanVzdEluZGVudCIsInNlbGZDbG9zaW5nVGFnIiwiaHRtbCIsImNyZWF0ZURPTUVsZW1lbnQiLCJ0YWdOYW1lIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZU5hbWVzIiwiYXR0cmlidXRlVmFsdWVzIiwiZm9yRWFjaCIsImF0dHJpYnV0ZU5hbWUiLCJpbmRleCIsImF0dHJpYnV0ZVZhbHVlIiwic2V0QXR0cmlidXRlIiwiYXR0cmlidXRlc0hUTUwiLCJyZWR1Y2UiLCJhdHRyaWJ1dGVzSE1MIiwiQUxUX0FUVFJJQlVURV9OQU1FIiwiU1JDX0FUVFJJQlVURV9OQU1FIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOOzhCQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxJQUFNLEFBQUVDLGFBQWVDLHlCQUFjLENBQTdCRDtBQUVPLElBQUEsQUFBTUQsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUMsT0FBTztnQkFDVCxJQUFNRCxNQUFNLElBQUksQ0FBQ0UsbUJBQW1CLENBQUMsU0FBQ0M7b0JBQ3BDLElBQU1DLHlCQUF5QkQsaUJBQ3pCRSxnQ0FBZ0NELHVCQUF1QkUsT0FBTyxDQUFDTCxVQUMvREQsTUFBTUssK0JBQStCLEdBQUc7b0JBRTlDLE9BQU9MO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSU4sT0FBTztnQkFDVCx5QkFBNkJBLFFBQXJCTyxXQUFBQSw0Q0FBWSwyQkFDZEMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLHNCQUFzQmIsV0FBV1cs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