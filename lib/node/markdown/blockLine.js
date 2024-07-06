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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBjb250ZW50RnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaW5lTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgbGluZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgY2hhcmFjdGVyc1BlckxpbmUgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHRMZW5ndGggPSBwbGFpblRleHQubGVuZ3RoLFxuICAgICAgICAgIGNoYXJhY3RlcnMgPSBwbGFpblRleHRMZW5ndGgsIC8vL1xuICAgICAgICAgIGxpbmVzID0gKGNoYXJhY3RlcnMgLyBjaGFyYWN0ZXJzUGVyTGluZSkgKyAxO1xuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBub2RlID0gdGhpczsgIC8vL1xuXG4gICAgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICAgIHByZXZpb3VzVG9rZW5JbmRleCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c1Rva2VuID0gdG9rZW5zW3ByZXZpb3VzVG9rZW5JbmRleF0sXG4gICAgICAgICAgcHJldmlvdXNUb2tlbldoaXRlc3BhY2VUb2tlbiA9IHByZXZpb3VzVG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcblxuICAgIGlmIChwcmV2aW91c1Rva2VuV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICBjb25zdCB3aGl0ZXNwYWNlVG9rZW4gPSBwcmV2aW91c1Rva2VuLCAgLy8vXG4gICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5Db250ZW50ID0gd2hpdGVzcGFjZVRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IGAke3doaXRlc3BhY2VUb2tlbkNvbnRlbnR9JHtjb250ZW50fWA7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gc3VwZXIuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KVxuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgaHRtbCA9IGAke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfWA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSBjb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBsaW5lcyA9IDI7XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQmxvY2tMaW5lTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpbmVNYXJrZG93bk5vZGUiLCJsaW5lcyIsImNvbnRleHQiLCJjaGFyYWN0ZXJzUGVyTGluZSIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0TGVuZ3RoIiwibGVuZ3RoIiwiY2hhcmFjdGVycyIsImNvbnRlbnQiLCJ0b2tlbnMiLCJub2RlIiwiY29udGVudEZyb21Ob2RlIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInByZXZpb3VzVG9rZW5JbmRleCIsInByZXZpb3VzVG9rZW4iLCJwcmV2aW91c1Rva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsImNoaWxkTm9kZXNIVE1MIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsInVubW91bnQiLCJyZW1vdmVDaGlsZCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiYXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImh0bWwiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJjaGlsZE5vZGVzUGxhaW5UZXh0IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKSTt1QkFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFBLEFBQU1BLHNDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQU0sQUFBRUMsb0JBQXNCRCxRQUF0QkMsbUJBQ0ZDLFlBQVksSUFBSSxDQUFDQyxXQUFXLENBQUNILFVBQzdCSSxrQkFBa0JGLFVBQVVHLE1BQU0sRUFDbENDLGFBQWFGLGlCQUNiTCxRQUFRLEFBQUNPLGFBQWFMLG9CQUFxQjtnQkFFakQsT0FBT0Y7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRUCxPQUFPO2dCQUNiLElBQUlPO2dCQUVKLElBQU0sQUFBRUMsU0FBV1IsUUFBWFEsUUFDRkMsT0FBTyxJQUFJLEVBQUcsR0FBRztnQkFFdkJGLFVBQVVHLElBQUFBLHdCQUFlLEVBQUNELE1BQU1UO2dCQUVoQyxJQUFNVyw2QkFBNkJGLEtBQUtHLDZCQUE2QixDQUFDSixTQUNoRUsscUJBQXFCRiw2QkFBNkIsR0FDbERHLGdCQUFnQk4sTUFBTSxDQUFDSyxtQkFBbUIsRUFDMUNFLCtCQUErQkQsY0FBY0UsaUJBQWlCO2dCQUVwRSxJQUFJRCw4QkFBOEI7b0JBQ2hDLElBQU1FLGtCQUFrQkgsZUFDbEJJLHlCQUF5QkQsZ0JBQWdCRSxVQUFVO29CQUV6RFosVUFBVSxBQUFDLEdBQTJCQSxPQUF6Qlcsd0JBQWlDLE9BQVJYO2dCQUN4QztnQkFFQSxJQUFNYSxpQkFBaUJiLFNBQVMsR0FBRztnQkFFbkMsT0FBT2E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUV2QixPQUFPO2dCQUNoRCxJQUFJLENBQUN3QixVQUFVLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ3pCO2dCQUV4Q3NCLGlCQUFpQkksWUFBWSxDQUFDLElBQUksQ0FBQ0YsVUFBVSxFQUFFRDtZQUNqRDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTCxnQkFBZ0IsRUFBRXRCLE9BQU87Z0JBQy9CLElBQUksSUFBSSxDQUFDd0IsVUFBVSxLQUFLLE1BQU07b0JBQzVCRixpQkFBaUJNLFdBQVcsQ0FBQyxJQUFJLENBQUNKLFVBQVU7b0JBRTVDLElBQUksQ0FBQ0EsVUFBVSxHQUFHO2dCQUNwQjtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQnpCLE9BQU87Z0JBQ3RCLElBQUl3QjtnQkFFSixJQUFNakIsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ1AsVUFDdkI2QixXQUFXQyxTQUFTQyxjQUFjLENBQUN4QjtnQkFFekNpQixhQUFhLHVCQXhESTFCLGtDQXdERTJCLG9CQUFOLElBQUssYUFBa0J6QjtnQkFFcEMsSUFBTXNCLG1CQUFtQkUsWUFBYSxHQUFHO2dCQUV6Q0EsYUFBYUssVUFBVSxHQUFHO2dCQUUxQlAsaUJBQWlCVSxXQUFXLENBQUNSO2dCQUU3QkEsYUFBYUYsa0JBQW1CLEdBQUc7Z0JBRW5DLE9BQU9FO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFbEMsT0FBTztnQkFDcEIsSUFBTW9CLGlCQUFpQixJQUFJLENBQUNlLGdCQUFnQixDQUFDRCxRQUFRbEMsVUFDL0NvQyxjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDcEMsVUFDL0JxQyxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDckMsVUFDN0JzQyxPQUFPLEFBQUMsR0FBZ0JsQixPQUFkZ0IsYUFBK0JDLE9BQWpCakIsZ0JBQTRCLE9BQVhpQjtnQkFFL0MsT0FBT0M7WUFDVDs7O1lBRUFILEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJELE1BQU0sRUFBRWxDLE9BQU87Z0JBQzlCLElBQU1PLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNQLFVBQ3ZCb0IsaUJBQWlCYixTQUFTLEdBQUc7Z0JBRW5DLE9BQU9hO1lBQ1Q7OztZQUVBbUIsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQnZDLE9BQU87Z0JBQzNCLElBQU1PLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNQLFVBQ3ZCd0Msc0JBQXNCakMsU0FBVSxHQUFHO2dCQUV6QyxPQUFPaUM7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQTlGMUczQyx1QkE4RmtJNEMsVUFBVUMsWUFBWUM7WUFBVTs7O1dBOUZsSzlDO0VBQThCK0MsaUJBQVk7QUE0RjdELGlCQTVGbUIvQyx1QkE0RlpDLFNBQVEifQ==