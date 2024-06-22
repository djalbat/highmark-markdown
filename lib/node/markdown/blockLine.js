"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockLineMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _content = require("../../utilities/content");
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
var BlockLineMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(BlockLineMarkdownNode, MarkdownNode);
    var _super = _create_super(BlockLineMarkdownNode);
    function BlockLineMarkdownNode() {
        _class_call_check(this, BlockLineMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(BlockLineMarkdownNode, [
        {
            key: "content",
            value: function content(context) {
                var content;
                var tokens = context.tokens, node = this; ///
                content = (0, _content.contentFromNode)(node, context);
                var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), previousTokenIndex = firstSignificantTokenIndex - 1, previousToken = tokens[previousTokenIndex], previousTokenWhitespaceToken = previousToken.isWhitespaceToken();
                if (previousTokenWhitespaceToken) {
                    var whitespaceToken = previousToken, whitespaceTokenContent = whitespaceToken.getContent();
                    content = "".concat(whitespaceTokenContent).concat(content);
                }
                var childNodesHTML = content; ///
                return childNodesHTML;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context), html = "".concat(startingTag).concat(childNodesHTML).concat(closingTag);
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var tagName = this.tagName(context), className = this.className(context), domElement = document.createElement(tagName);
                Object.assign(domElement, {
                    className: className
                });
                this.setDOMElement(domElement);
                this.createChildNodeDOMElements(context);
                return domElement;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content = this.content(context), childNodesHTML = content; ///
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var domElement;
                domElement = this.getDOMElement();
                var content = this.content(context), textNode = document.createTextNode(content), parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(BlockLineMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return BlockLineMarkdownNode;
}(_markdown.default);
_define_property(BlockLineMarkdownNode, "lines", 1);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBjb250ZW50RnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaW5lTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBub2RlID0gdGhpczsgIC8vL1xuXG4gICAgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICAgIHByZXZpb3VzVG9rZW5JbmRleCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c1Rva2VuID0gdG9rZW5zW3ByZXZpb3VzVG9rZW5JbmRleF0sXG4gICAgICAgICAgcHJldmlvdXNUb2tlbldoaXRlc3BhY2VUb2tlbiA9IHByZXZpb3VzVG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcblxuICAgIGlmIChwcmV2aW91c1Rva2VuV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICBjb25zdCB3aGl0ZXNwYWNlVG9rZW4gPSBwcmV2aW91c1Rva2VuLCAgLy8vXG4gICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5Db250ZW50ID0gd2hpdGVzcGFjZVRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IGAke3doaXRlc3BhY2VUb2tlbkNvbnRlbnR9JHtjb250ZW50fWA7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGh0bWwgPSBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBsaW5lcyA9IDE7XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQmxvY2tMaW5lTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpbmVNYXJrZG93bk5vZGUiLCJjb250ZW50IiwiY29udGV4dCIsInRva2VucyIsIm5vZGUiLCJjb250ZW50RnJvbU5vZGUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwicHJldmlvdXNUb2tlbkluZGV4IiwicHJldmlvdXNUb2tlbiIsInByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJpc1doaXRlc3BhY2VUb2tlbiIsIndoaXRlc3BhY2VUb2tlbiIsIndoaXRlc3BhY2VUb2tlbkNvbnRlbnQiLCJnZXRDb250ZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJhc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiaHRtbCIsImNyZWF0ZURPTUVsZW1lbnQiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInNldERPTUVsZW1lbnQiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsImdldERPTUVsZW1lbnQiLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwicGFyZW50RE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwibGluZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpJO3VCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFBLEFBQU1BLHNDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQUlEO2dCQUVKLElBQU0sQUFBRUUsU0FBV0QsUUFBWEMsUUFDRkMsT0FBTyxJQUFJLEVBQUcsR0FBRztnQkFFdkJILFVBQVVJLElBQUFBLHdCQUFlLEVBQUNELE1BQU1GO2dCQUVoQyxJQUFNSSw2QkFBNkJGLEtBQUtHLDZCQUE2QixDQUFDSixTQUNoRUsscUJBQXFCRiw2QkFBNkIsR0FDbERHLGdCQUFnQk4sTUFBTSxDQUFDSyxtQkFBbUIsRUFDMUNFLCtCQUErQkQsY0FBY0UsaUJBQWlCO2dCQUVwRSxJQUFJRCw4QkFBOEI7b0JBQ2hDLElBQU1FLGtCQUFrQkgsZUFDbEJJLHlCQUF5QkQsZ0JBQWdCRSxVQUFVO29CQUV6RGIsVUFBVSxBQUFDLEdBQTJCQSxPQUF6Qlksd0JBQWlDLE9BQVJaO2dCQUN4QztnQkFFQSxJQUFNYyxpQkFBaUJkLFNBQVMsR0FBRztnQkFFbkMsT0FBT2M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVmLE9BQU87Z0JBQ3BCLElBQU1hLGlCQUFpQixJQUFJLENBQUNHLGdCQUFnQixDQUFDRCxRQUFRZixVQUMvQ2lCLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNqQixVQUMvQmtCLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNsQixVQUM3Qm1CLE9BQU8sQUFBQyxHQUFnQk4sT0FBZEksYUFBK0JDLE9BQWpCTCxnQkFBNEIsT0FBWEs7Z0JBRS9DLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCcEIsT0FBTztnQkFDdEIsSUFBTXFCLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNyQixVQUN2QnNCLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUN0QixVQUMzQnVCLGFBQWFDLFNBQVNDLGFBQWEsQ0FBQ0o7Z0JBRTFDSyxPQUFPQyxNQUFNLENBQUNKLFlBQVk7b0JBQ3hCRCxXQUFBQTtnQkFDRjtnQkFFQSxJQUFJLENBQUNNLGFBQWEsQ0FBQ0w7Z0JBRW5CLElBQUksQ0FBQ00sMEJBQTBCLENBQUM3QjtnQkFFaEMsT0FBT3VCO1lBQ1Q7OztZQUVBUCxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCRCxNQUFNLEVBQUVmLE9BQU87Z0JBQzlCLElBQU1ELFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNDLFVBQ3ZCYSxpQkFBaUJkLFNBQVMsR0FBRztnQkFFbkMsT0FBT2M7WUFDVDs7O1lBRUFnQixLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCN0IsT0FBTztnQkFDaEMsSUFBSXVCO2dCQUVKQSxhQUFhLElBQUksQ0FBQ08sYUFBYTtnQkFFL0IsSUFBTS9CLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNDLFVBQ3ZCK0IsV0FBV1AsU0FBU1EsY0FBYyxDQUFDakMsVUFDbkNrQyxtQkFBbUJWLFlBQWEsR0FBRztnQkFFekNBLGFBQWFRLFVBQVUsR0FBRztnQkFFMUJFLGlCQUFpQkMsV0FBVyxDQUFDWDtZQUMvQjs7OztZQUlPWSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQTFFMUdyQyx1QkEwRWtJc0MsVUFBVUMsWUFBWUM7WUFBVTs7O1dBMUVsS3hDO0VBQThCeUMsaUJBQVk7QUF3RTdELGlCQXhFbUJ6Qyx1QkF3RVowQyxTQUFRIn0=