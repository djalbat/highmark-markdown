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
                var childNodesHTML = content; ///
                return childNodesHTML;
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
            key: "asHTML",
            value: function asHTML(indent, context) {
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context), html = "".concat(startingTag).concat(childNodesHTML).concat(closingTag);
                return html;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyByZXBsYWNlRW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpbmVNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBsaW5lcyhjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjaGFyYWN0ZXJzUGVyTGluZSB9ID0gY29udGV4dCxcbiAgICAgICAgICBwbGFpblRleHQgPSB0aGlzLmFzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgIHBsYWluVGV4dExlbmd0aCA9IHBsYWluVGV4dC5sZW5ndGgsXG4gICAgICAgICAgY2hhcmFjdGVycyA9IHBsYWluVGV4dExlbmd0aCwgLy8vXG4gICAgICAgICAgbGluZXMgPSAoY2hhcmFjdGVycyAvIGNoYXJhY3RlcnNQZXJMaW5lKSArIDE7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cblxuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudDtcblxuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIG5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICBjb250ZW50ID0gY29udGVudEZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgICAgcHJldmlvdXNUb2tlbkluZGV4ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzVG9rZW4gPSB0b2tlbnNbcHJldmlvdXNUb2tlbkluZGV4XSxcbiAgICAgICAgICBwcmV2aW91c1Rva2VuV2hpdGVzcGFjZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc1doaXRlc3BhY2VUb2tlbigpO1xuXG4gICAgaWYgKHByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2VUb2tlbiA9IHByZXZpb3VzVG9rZW4sICAvLy9cbiAgICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbkNvbnRlbnQgPSB3aGl0ZXNwYWNlVG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ID0gYCR7d2hpdGVzcGFjZVRva2VuQ29udGVudH0ke2NvbnRlbnR9YDtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgY29udGVudCA9IHJlcGxhY2VFbnRpdGllcyhjb250ZW50KTsgLy8vXG5cbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dClcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGh0bWwgPSBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gY29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgbGluZXMgPSAyO1xuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEJsb2NrTGluZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaW5lTWFya2Rvd25Ob2RlIiwibGluZXMiLCJjb250ZXh0IiwiY2hhcmFjdGVyc1BlckxpbmUiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dExlbmd0aCIsImxlbmd0aCIsImNoYXJhY3RlcnMiLCJjb250ZW50IiwidG9rZW5zIiwibm9kZSIsImNvbnRlbnRGcm9tTm9kZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJwcmV2aW91c1Rva2VuSW5kZXgiLCJwcmV2aW91c1Rva2VuIiwicHJldmlvdXNUb2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuQ29udGVudCIsImdldENvbnRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJ1bm1vdW50IiwicmVtb3ZlQ2hpbGQiLCJyZXBsYWNlRW50aXRpZXMiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImFzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJodG1sIiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7K0RBTEk7b0JBRU87dUJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQU0sQUFBRUMsb0JBQXNCRCxRQUF0QkMsbUJBQ0ZDLFlBQVksSUFBSSxDQUFDQyxXQUFXLENBQUNILFVBQzdCSSxrQkFBa0JGLFVBQVVHLE1BQU0sRUFDbENDLGFBQWFGLGlCQUNiTCxRQUFRLEFBQUNPLGFBQWFMLG9CQUFxQjtnQkFFakQsT0FBT0Y7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRUCxPQUFPO2dCQUNiLElBQUlPO2dCQUVKLElBQU0sQUFBRUMsU0FBV1IsUUFBWFEsUUFDRkMsT0FBTyxJQUFJLEVBQUcsR0FBRztnQkFFdkJGLFVBQVVHLElBQUFBLHdCQUFlLEVBQUNELE1BQU1UO2dCQUVoQyxJQUFNVyw2QkFBNkJGLEtBQUtHLDZCQUE2QixDQUFDSixTQUNoRUsscUJBQXFCRiw2QkFBNkIsR0FDbERHLGdCQUFnQk4sTUFBTSxDQUFDSyxtQkFBbUIs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