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
var _childNodes = require("../../utilities/childNodes");
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
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var childNodes = this.getChildNodes(), plainText = (0, _childNodes.plainTextFromChildNodes)(childNodes, context);
                return plainText;
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
_define_property(BlockLineMarkdownNode, "lines", 2);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBjb250ZW50RnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcbmltcG9ydCB7IHBsYWluVGV4dEZyb21DaGlsZE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jaGlsZE5vZGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrTGluZU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50O1xuXG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgbm9kZSA9IHRoaXM7ICAvLy9cblxuICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBwcmV2aW91c1Rva2VuSW5kZXggPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNUb2tlbiA9IHRva2Vuc1twcmV2aW91c1Rva2VuSW5kZXhdLFxuICAgICAgICAgIHByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgICBpZiAocHJldmlvdXNUb2tlbldoaXRlc3BhY2VUb2tlbikge1xuICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuID0gcHJldmlvdXNUb2tlbiwgIC8vL1xuICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuQ29udGVudCA9IHdoaXRlc3BhY2VUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBgJHt3aGl0ZXNwYWNlVG9rZW5Db250ZW50fSR7Y29udGVudH1gO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBodG1sID0gYCR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgbGluZXMgPSAyO1xuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEJsb2NrTGluZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaW5lTWFya2Rvd25Ob2RlIiwiY29udGVudCIsImNvbnRleHQiLCJ0b2tlbnMiLCJub2RlIiwiY29udGVudEZyb21Ob2RlIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInByZXZpb3VzVG9rZW5JbmRleCIsInByZXZpb3VzVG9rZW4iLCJwcmV2aW91c1Rva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsImNoaWxkTm9kZXNIVE1MIiwiYXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImh0bWwiLCJjcmVhdGVET01FbGVtZW50IiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRET01FbGVtZW50IiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInBsYWluVGV4dCIsInBsYWluVGV4dEZyb21DaGlsZE5vZGVzIiwiZ2V0RE9NRWxlbWVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJwYXJlbnRET01FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsImxpbmVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsrREFMSTt1QkFFTzswQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBQSxBQUFN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