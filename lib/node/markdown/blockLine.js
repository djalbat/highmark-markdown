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
                var firstSignificantToken = this.getFirstSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), previousTokenIndex = firstSignificantTokenIndex - 1, previousToken = tokens[previousTokenIndex], previousTokenWhitespaceToken = previousToken.isWhitespaceToken();
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
                indent = this.adjustIndent(indent);
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context), html = "".concat(indent).concat(startingTag).concat(childNodesHTML).concat(closingTag);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBjb250ZW50RnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaW5lTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBub2RlID0gdGhpczsgIC8vL1xuXG4gICAgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIHByZXZpb3VzVG9rZW5JbmRleCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c1Rva2VuID0gdG9rZW5zW3ByZXZpb3VzVG9rZW5JbmRleF0sXG4gICAgICAgICAgcHJldmlvdXNUb2tlbldoaXRlc3BhY2VUb2tlbiA9IHByZXZpb3VzVG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcblxuICAgIGlmIChwcmV2aW91c1Rva2VuV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICBjb25zdCB3aGl0ZXNwYWNlVG9rZW4gPSBwcmV2aW91c1Rva2VuLCAgLy8vXG4gICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5Db250ZW50ID0gd2hpdGVzcGFjZVRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IGAke3doaXRlc3BhY2VUb2tlbkNvbnRlbnR9JHtjb250ZW50fWA7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShCbG9ja0xpbmVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGluZU1hcmtkb3duTm9kZSIsImNvbnRlbnQiLCJjb250ZXh0IiwidG9rZW5zIiwibm9kZSIsImNvbnRlbnRGcm9tTm9kZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsInByZXZpb3VzVG9rZW5JbmRleCIsInByZXZpb3VzVG9rZW4iLCJwcmV2aW91c1Rva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsImNoaWxkTm9kZXNIVE1MIiwiYXNIVE1MIiwiaW5kZW50IiwiYWRqdXN0SW5kZW50IiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImh0bWwiLCJjcmVhdGVET01FbGVtZW50IiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRET01FbGVtZW50IiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJnZXRET01FbGVtZW50IiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsInBhcmVudERPTUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpJO3VCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpCLElBQUEsQUFBTUEsc0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NB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