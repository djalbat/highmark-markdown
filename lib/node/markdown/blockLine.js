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
                var content = this.content(context), textNode = document.createTextNode(content);
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
                var childNodes = this.getChildNodes(), plainText = (0, _childNodes.plainTextFromChildNodes)(childNodes, context);
                return plainText;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBjb250ZW50RnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcbmltcG9ydCB7IHBsYWluVGV4dEZyb21DaGlsZE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jaGlsZE5vZGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrTGluZU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGxpbmVzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNoYXJhY3RlcnNQZXJMaW5lIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHBsYWluVGV4dCA9IHRoaXMuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgcGxhaW5UZXh0TGVuZ3RoID0gcGxhaW5UZXh0Lmxlbmd0aCxcbiAgICAgICAgICBjaGFyYWN0ZXJzID0gcGxhaW5UZXh0TGVuZ3RoLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IChjaGFyYWN0ZXJzIC8gY2hhcmFjdGVyc1BlckxpbmUpICsgMTtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50O1xuXG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgbm9kZSA9IHRoaXM7ICAvLy9cblxuICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBwcmV2aW91c1Rva2VuSW5kZXggPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNUb2tlbiA9IHRva2Vuc1twcmV2aW91c1Rva2VuSW5kZXhdLFxuICAgICAgICAgIHByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgICBpZiAocHJldmlvdXNUb2tlbldoaXRlc3BhY2VUb2tlbikge1xuICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuID0gcHJldmlvdXNUb2tlbiwgIC8vL1xuICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuQ29udGVudCA9IHdoaXRlc3BhY2VUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBgJHt3aGl0ZXNwYWNlVG9rZW5Db250ZW50fSR7Y29udGVudH1gO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dClcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGh0bWwgPSBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBsaW5lcyA9IDI7XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQmxvY2tMaW5lTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpbmVNYXJrZG93bk5vZGUiLCJsaW5lcyIsImNvbnRleHQiLCJjaGFyYWN0ZXJzUGVyTGluZSIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0TGVuZ3RoIiwibGVuZ3RoIiwiY2hhcmFjdGVycyIsImNvbnRlbnQiLCJ0b2tlbnMiLCJub2RlIiwiY29udGVudEZyb21Ob2RlIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInByZXZpb3VzVG9rZW5JbmRleCIsInByZXZpb3VzVG9rZW4iLCJwcmV2aW91c1Rva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsImNoaWxkTm9kZXNIVE1MIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsInVubW91bnQiLCJyZW1vdmVDaGlsZCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiYXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImh0bWwiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInBsYWluVGV4dEZyb21DaGlsZE5vZGVzIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OytEQUxJO3VCQUVPOzBCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEsc0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBTSxBQUFFQyxvQkFBc0JELFFBQXRCQyxtQkFDRkMsWUFBWSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0gsVUFDN0JJLGtCQUFrQkYsVUFBVUcsTUFBTSxFQUNsQ0MsYUFBYUYsaUJBQ2JMLFFBQVEsQUFBQ08sYUFBYUwsb0JBQXFCO2dCQUVqRCxPQUFPRjtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFQLE9BQU87Z0JBQ2IsSUFBSU87Z0JBRUosSUFBTSxBQUFFQyxTQUFXUixRQUFYUSxRQUNGQyxPQUFPLElBQUksRUFBRyxHQUFHO2dCQUV2QkYsVUFBVUcsSUFBQUEsd0JBQWUsRUFBQ0QsTUFBTVQ7Z0JBRWhDLElBQU1XLDZCQUE2QkYsS0FBS0csNkJBQTZCLENBQUNKLFNBQ2hFSyxxQkFBcUJGLDZCQUE2QixHQUNsREcsZ0JBQWdCTixNQUFNLENBQUNLLG1CQUFtQixFQUMx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