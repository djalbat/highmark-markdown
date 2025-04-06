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
var _html = require("../../utilities/html");
var _content = require("../../utilities/content");
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
var BlockLineMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(BlockLineMarkdownNode, MarkdownNode);
    function BlockLineMarkdownNode() {
        _class_call_check(this, BlockLineMarkdownNode);
        return _call_super(this, BlockLineMarkdownNode, arguments);
    }
    _create_class(BlockLineMarkdownNode, [
        {
            key: "lines",
            value: function lines(context) {
                var charactersPerLine = context.charactersPerLine, plainText = this.asPlainText(context), plainTextLength = plainText.length, characters = plainTextLength, lines = characters / charactersPerLine + 1;
                return lines;
            }
        },
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
                return content;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                this.domElement = this.createDOMElement(context);
                parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                if (this.domElement !== null) {
                    parentDOMElement.removeChild(this.domElement);
                    this.domElement = null;
                }
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement;
                var content = this.content(context);
                content = (0, _html.replaceEntities)(content); ///
                var textNode = document.createTextNode(content);
                domElement = _get(_get_prototype_of(BlockLineMarkdownNode.prototype), "createDOMElement", this).call(this, context);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var content = this.content(context), childNodesPlainText = content; ///
                return childNodesPlainText;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyByZXBsYWNlRW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpbmVNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBsaW5lcyhjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjaGFyYWN0ZXJzUGVyTGluZSB9ID0gY29udGV4dCxcbiAgICAgICAgICBwbGFpblRleHQgPSB0aGlzLmFzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgIHBsYWluVGV4dExlbmd0aCA9IHBsYWluVGV4dC5sZW5ndGgsXG4gICAgICAgICAgY2hhcmFjdGVycyA9IHBsYWluVGV4dExlbmd0aCwgLy8vXG4gICAgICAgICAgbGluZXMgPSAoY2hhcmFjdGVycyAvIGNoYXJhY3RlcnNQZXJMaW5lKSArIDE7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cblxuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudDtcblxuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIG5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICBjb250ZW50ID0gY29udGVudEZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgICAgcHJldmlvdXNUb2tlbkluZGV4ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzVG9rZW4gPSB0b2tlbnNbcHJldmlvdXNUb2tlbkluZGV4XSxcbiAgICAgICAgICBwcmV2aW91c1Rva2VuV2hpdGVzcGFjZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc1doaXRlc3BhY2VUb2tlbigpO1xuXG4gICAgaWYgKHByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2VUb2tlbiA9IHByZXZpb3VzVG9rZW4sICAvLy9cbiAgICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbkNvbnRlbnQgPSB3aGl0ZXNwYWNlVG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ID0gYCR7d2hpdGVzcGFjZVRva2VuQ29udGVudH0ke2NvbnRlbnR9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBsZXQgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KTtcblxuICAgIGNvbnRlbnQgPSByZXBsYWNlRW50aXRpZXMoY29udGVudCk7IC8vL1xuXG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBzdXBlci5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpXG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IGNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIGxpbmVzID0gMjtcblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShCbG9ja0xpbmVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGluZU1hcmtkb3duTm9kZSIsImxpbmVzIiwiY29udGV4dCIsImNoYXJhY3RlcnNQZXJMaW5lIiwicGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJwbGFpblRleHRMZW5ndGgiLCJsZW5ndGgiLCJjaGFyYWN0ZXJzIiwiY29udGVudCIsInRva2VucyIsIm5vZGUiLCJjb250ZW50RnJvbU5vZGUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwicHJldmlvdXNUb2tlbkluZGV4IiwicHJldmlvdXNUb2tlbiIsInByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJpc1doaXRlc3BhY2VUb2tlbiIsIndoaXRlc3BhY2VUb2tlbiIsIndoaXRlc3BhY2VUb2tlbkNvbnRlbnQiLCJnZXRDb250ZW50IiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsInVubW91bnQiLCJyZW1vdmVDaGlsZCIsInJlcGxhY2VFbnRpdGllcyIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7K0RBTEk7b0JBRU87dUJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQU0sQUFBRUMsb0JBQXNCRCxRQUF0QkMsbUJBQ0ZDLFlBQVksSUFBSSxDQUFDQyxXQUFXLENBQUNILFVBQzdCSSxrQkFBa0JGLFVBQVVHLE1BQU0sRUFDbENDLGFBQWFGLGlCQUNiTCxRQUFRLEFBQUNPLGFBQWFMLG9CQUFxQjtnQkFFakQsT0FBT0Y7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRUCxPQUFPO2dCQUNiLElBQUlPO2dCQUVKLElBQU0sQUFBRUMsU0FBV1IsUUFBWFEsUUFDRkMsT0FBTyxJQUFJLEVBQUcsR0FBRztnQkFFdkJGLFVBQVVHLElBQUFBLHdCQUFlLEVBQUNELE1BQU1UO2dCQUVoQyxJQUFNVyw2QkFBNkJGLEtBQUtHLDZCQUE2QixDQUFDSixTQUNoRUsscUJBQXFCRiw2QkFBNkIsR0FDbERHLGdCQUFnQk4sTUFBTSxDQUFDSyxtQkFBbUIsRUFDMUNFLCtCQUErQkQsY0FBY0UsaUJBQWlCO2dCQUVwRSxJQUFJRCw4QkFBOEI7b0JBQ2hDLElBQU1FLGtCQUFrQkgsZUFDbEJJLHlCQUF5QkQsZ0JBQWdCRSxVQUFVO29CQUV6RFosVUFBVSxBQUFDLEdBQTJCQSxPQUF6Qlcsd0JBQWlDLE9BQVJYO2dCQUN4QztnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRXRCLE9BQU87Z0JBQ2hELElBQUksQ0FBQ3VCLFVBQVUsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixDQUFDeEI7Z0JBRXhDcUIsaUJBQWlCSSxZQUFZLENBQUMsSUFBSSxDQUFDRixVQUFVLEVBQUVEO1lBQ2pEOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFMLGdCQUFnQixFQUFFckIsT0FBTztnQkFDL0IsSUFBSSxJQUFJLENBQUN1QixVQUFVLEtBQUssTUFBTTtvQkFDNUJGLGlCQUFpQk0sV0FBVyxDQUFDLElBQUksQ0FBQ0osVUFBVTtvQkFFNUMsSUFBSSxDQUFDQSxVQUFVLEdBQUc7Z0JBQ3BCO1lBQ0Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCeEIsT0FBTztnQkFDdEIsSUFBSXVCO2dCQUVKLElBQUloQixVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDUDtnQkFFM0JPLFVBQVVxQixJQUFBQSxxQkFBZSxFQUFDckIsVUFBVSxHQUFHO2dCQUV2QyxJQUFNc0IsV0FBV0MsU0FBU0MsY0FBYyxDQUFDeEI7Z0JBRXpDZ0IsYUFBYSx1QkF6REl6QixrQ0F5REUwQixvQkFBTixJQUFLLGFBQWtCeEI7Z0JBRXBDLElBQU1xQixtQkFBbUJFLFlBQWEsR0FBRztnQkFFekNBLGFBQWFNLFVBQVUsR0FBRztnQkFFMUJSLGlCQUFpQlcsV0FBVyxDQUFDVDtnQkFFN0JBLGFBQWFGLGtCQUFtQixHQUFHO2dCQUVuQyxPQUFPRTtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQmpDLE9BQU87Z0JBQzNCLElBQU1PLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNQLFVBQ3ZCa0Msc0JBQXNCM0IsU0FBVSxHQUFHO2dCQUV6QyxPQUFPMkI7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQS9FMUdyQyx1QkErRWtJc0MsVUFBVUMsWUFBWUM7WUFBVTs7O1dBL0VsS3hDO0VBQThCeUMsaUJBQVk7QUE2RTdELGlCQTdFbUJ6Qyx1QkE2RVpDLFNBQVEifQ==