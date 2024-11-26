"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _elementMap = /*#__PURE__*/ _interop_require_default(require("../../elementMap"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _content = /*#__PURE__*/ _interop_require_default(require("../../mixins/content"));
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var second = _necessary.arrayUtilities.second, tagName = _elementMap.default[_ruleNames.STRONG_TEXT_RULE_NAME].tagName;
var StronglyEmphasisedTextMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(StronglyEmphasisedTextMarkdownNode, MarkdownNode);
    function StronglyEmphasisedTextMarkdownNode() {
        _class_call_check(this, StronglyEmphasisedTextMarkdownNode);
        return _call_super(this, StronglyEmphasisedTextMarkdownNode, arguments);
    }
    _create_class(StronglyEmphasisedTextMarkdownNode, [
        {
            key: "inlineText",
            value: function inlineText(context) {
                var indent = null, childNodes = this.getChildNodes(), secondChildNode = second(childNodes), inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context), inlineText = inlineTextMarkdownNodeHTML; ///
                return inlineText;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement;
                domElement = document.createElement(tagName);
                var parentDOMElement = domElement, childDOMElement = this.createChildDOMElement(context);
                domElement = childDOMElement; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        },
        {
            key: "createChildDOMElement",
            value: function createChildDOMElement(context) {
                var inlineText = this.inlineText(context), content = inlineText; ///
                var domElement;
                var textNode = document.createTextNode(content);
                domElement = _get(_get_prototype_of(StronglyEmphasisedTextMarkdownNode.prototype), "createDOMElement", this).call(this, context);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var html = _get(_get_prototype_of(StronglyEmphasisedTextMarkdownNode.prototype), "asHTML", this).call(this, indent, context);
                var childNodesHTML = html, startingTag = "<".concat(tagName, ">"), closingTag = "</".concat(tagName, ">");
                html = "".concat(startingTag).concat(childNodesHTML).concat(closingTag);
                return html;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(StronglyEmphasisedTextMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return StronglyEmphasisedTextMarkdownNode;
}(_markdown.default);
Object.assign(StronglyEmphasisedTextMarkdownNode.prototype, _content.default);
var _default = StronglyEmphasisedTextMarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N0cm9uZ2x5RW1waGFzaXNlZFRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudE1hcCBmcm9tIFwiLi4vLi4vZWxlbWVudE1hcFwiO1xuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IGNvbnRlbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb250ZW50XCI7XG5cbmltcG9ydCB7IFNUUk9OR19URVhUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0YWdOYW1lIH0gPSBlbGVtZW50TWFwW1NUUk9OR19URVhUX1JVTEVfTkFNRV07XG5cbmNsYXNzIFN0cm9uZ2x5RW1waGFzaXNlZFRleHRNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBpbmxpbmVUZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBpbmRlbnQgPSBudWxsLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUwgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIGlubGluZVRleHQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTDsgIC8vL1xuXG4gICAgcmV0dXJuIGlubGluZVRleHQ7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBjaGlsZERPTUVsZW1lbnQgPSB0aGlzLmNyZWF0ZUNoaWxkRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIGRvbUVsZW1lbnQgPSBjaGlsZERPTUVsZW1lbnQ7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgaW5saW5lVGV4dCA9IHRoaXMuaW5saW5lVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50ID0gaW5saW5lVGV4dDsgLy8vXG5cbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gc3VwZXIuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IHN1cGVyLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBodG1sLCAgLy8vXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0+YCxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gYDwvJHt0YWdOYW1lfT5gO1xuXG4gICAgaHRtbCA9IGAke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfWA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFN0cm9uZ2x5RW1waGFzaXNlZFRleHRNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFN0cm9uZ2x5RW1waGFzaXNlZFRleHRNYXJrZG93bk5vZGUucHJvdG90eXBlLCBjb250ZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgU3Ryb25nbHlFbXBoYXNpc2VkVGV4dE1hcmtkb3duTm9kZTtcbiJdLCJuYW1lcyI6WyJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsInRhZ05hbWUiLCJlbGVtZW50TWFwIiwiU1RST05HX1RFWFRfUlVMRV9OQU1FIiwiU3Ryb25nbHlFbXBoYXNpc2VkVGV4dE1hcmtkb3duTm9kZSIsImlubGluZVRleHQiLCJjb250ZXh0IiwiaW5kZW50IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzZWNvbmRDaGlsZE5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUwiLCJhc0hUTUwiLCJjcmVhdGVET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJjaGlsZERPTUVsZW1lbnQiLCJjcmVhdGVDaGlsZERPTUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwiaHRtbCIsImNoaWxkTm9kZXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJjb250ZW50TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnRkE7OztlQUFBOzs7eUJBOUUrQjtpRUFFUjsrREFDRTs4REFDQzt5QkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU0sQUFBRUEsU0FBV0MseUJBQWMsQ0FBekJELFFBQ0YsQUFBRUUsVUFBWUMsbUJBQVUsQ0FBQ0MsZ0NBQXFCLENBQUMsQ0FBN0NGO0FBRVIsSUFBQSxBQUFNRyxtREFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLE9BQU87Z0JBQ2hCLElBQU1DLFNBQVMsTUFDVEMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQlgsT0FBT1MsYUFDekJHLHlCQUF5QkQsaUJBQ3pCRSw2QkFBNkJELHVCQUF1QkUsTUFBTSxDQUFDTixRQUFRRCxVQUNuRUQsYUFBYU8sNEJBQTZCLEdBQUc7Z0JBRW5ELE9BQU9QO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCUixPQUFPO2dCQUN0QixJQUFJUztnQkFFSkEsYUFBYUMsU0FBU0MsYUFBYSxDQUFDaEI7Z0JBRXBDLElBQU1pQixtQkFBbUJILFlBQ25CSSxrQkFBa0IsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ2Q7Z0JBRW5EUyxhQUFhSSxpQkFBaUIsR0FBRztnQkFFakNELGlCQUFpQkcsV0FBVyxDQUFDTjtnQkFFN0JBLGFBQWFHLGtCQUFtQixHQUFHO2dCQUVuQyxPQUFPSDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQmQsT0FBTztnQkFDM0IsSUFBTUQsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0MsVUFDN0JnQixVQUFVakIsWUFBWSxHQUFHO2dCQUUvQixJQUFJVTtnQkFFSixJQUFNUSxXQUFXUCxTQUFTUSxjQUFjLENBQUNGO2dCQUV6Q1AsYUFBYSx1QkFyQ1hYLCtDQXFDaUJVLG9CQUFOLElBQUssYUFBa0JSO2dCQUVwQyxJQUFNWSxtQkFBbUJILFlBQWEsR0FBRztnQkFFekNBLGFBQWFRLFVBQVUsR0FBRztnQkFFMUJMLGlCQUFpQkcsV0FBVyxDQUFDTjtnQkFFN0JBLGFBQWFHLGtCQUFtQixHQUFHO2dCQUVuQyxPQUFPSDtZQUNUOzs7WUFFQUYsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9OLE1BQU0sRUFBRUQsT0FBTztnQkFDcEIsSUFBSW1CLE9BQU8sdUJBbkRUckIsK0NBbURlUyxVQUFOLElBQUssYUFBUU4sUUFBUUQ7Z0JBRWhDLElBQU1vQixpQkFBaUJELE1BQ2pCRSxjQUFjLEFBQUMsSUFBVyxPQUFSMUIsU0FBUSxNQUMxQjJCLGFBQWEsQUFBQyxLQUFZLE9BQVIzQixTQUFRO2dCQUVoQ3dCLE9BQU8sQUFBQyxHQUFnQkMsT0FBZEMsYUFBK0JDLE9BQWpCRixnQkFBNEIsT0FBWEU7Z0JBRXpDLE9BQU9IO1lBQ1Q7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUV0QixVQUFVLEVBQUV1QixPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNILGdDQUFnQyxDQTlEekh6QixvQ0E4RDhKMEIsVUFBVXRCLFlBQVl1QjtZQUFVOzs7V0E5RDlMM0I7RUFBMkM0QixpQkFBWTtBQWlFN0RDLE9BQU9DLE1BQU0sQ0FBQzlCLG1DQUFtQytCLFNBQVMsRUFBRUMsZ0JBQWE7SUFFekUsV0FBZWhDIn0=