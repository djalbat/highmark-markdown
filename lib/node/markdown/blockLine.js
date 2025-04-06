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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyByZXBsYWNlRW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpbmVNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBsaW5lcyhjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjaGFyYWN0ZXJzUGVyTGluZSB9ID0gY29udGV4dCxcbiAgICAgICAgICBwbGFpblRleHQgPSB0aGlzLmFzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgIHBsYWluVGV4dExlbmd0aCA9IHBsYWluVGV4dC5sZW5ndGgsXG4gICAgICAgICAgY2hhcmFjdGVycyA9IHBsYWluVGV4dExlbmd0aCwgLy8vXG4gICAgICAgICAgbGluZXMgPSAoY2hhcmFjdGVycyAvIGNoYXJhY3RlcnNQZXJMaW5lKSArIDE7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cblxuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudDtcblxuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIG5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICBjb250ZW50ID0gY29udGVudEZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgICAgcHJldmlvdXNUb2tlbkluZGV4ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzVG9rZW4gPSB0b2tlbnNbcHJldmlvdXNUb2tlbkluZGV4XSxcbiAgICAgICAgICBwcmV2aW91c1Rva2VuV2hpdGVzcGFjZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc1doaXRlc3BhY2VUb2tlbigpO1xuXG4gICAgaWYgKHByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2VUb2tlbiA9IHByZXZpb3VzVG9rZW4sICAvLy9cbiAgICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbkNvbnRlbnQgPSB3aGl0ZXNwYWNlVG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ID0gYCR7d2hpdGVzcGFjZVRva2VuQ29udGVudH0ke2NvbnRlbnR9YDtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgY29udGVudCA9IHJlcGxhY2VFbnRpdGllcyhjb250ZW50KTsgLy8vXG5cbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dClcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gY29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgbGluZXMgPSAyO1xuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEJsb2NrTGluZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaW5lTWFya2Rvd25Ob2RlIiwibGluZXMiLCJjb250ZXh0IiwiY2hhcmFjdGVyc1BlckxpbmUiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dExlbmd0aCIsImxlbmd0aCIsImNoYXJhY3RlcnMiLCJjb250ZW50IiwidG9rZW5zIiwibm9kZSIsImNvbnRlbnRGcm9tTm9kZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJwcmV2aW91c1Rva2VuSW5kZXgiLCJwcmV2aW91c1Rva2VuIiwicHJldmlvdXNUb2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuQ29udGVudCIsImdldENvbnRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJ1bm1vdW50IiwicmVtb3ZlQ2hpbGQiLCJyZXBsYWNlRW50aXRpZXMiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsImNoaWxkTm9kZXNQbGFpblRleHQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OytEQUxJO29CQUVPO3VCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpCLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTztnQkFDWCxJQUFNLEFBQUVD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