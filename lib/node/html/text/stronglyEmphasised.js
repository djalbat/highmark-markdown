"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StronglyEmphasisedTextHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _tagName = /*#__PURE__*/ _interop_require_default(require("../../../map/tagName"));
var _constants = require("../../../constants");
var _markdown = require("../../../ruleNames/markdown");
var _dom = require("../../../utilities/dom");
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
var StronglyEmphasisedTextHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(StronglyEmphasisedTextHTMLNode, HTMLNode);
    function StronglyEmphasisedTextHTMLNode() {
        _class_call_check(this, StronglyEmphasisedTextHTMLNode);
        return _call_super(this, StronglyEmphasisedTextHTMLNode, arguments);
    }
    _create_class(StronglyEmphasisedTextHTMLNode, [
        {
            key: "createChildDOMElement",
            value: function createChildDOMElement(context) {
                var domElement;
                var tagName = _tagName.default[_markdown.STRONG_TEXT_MARKDOWN_RULE_NAME], plainText = this.childNodesAsPlainText(context), content = plainText, textNode = document.createTextNode(content);
                domElement = document.createElement(tagName);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                (0, _dom.insertAfterwards)(domElement, parentDOMElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var domElement;
                domElement = this.createDOMElement(context);
                this.setDOMElement(domElement);
                siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(domElement, siblingDOMElement);
                parentDOMElement = domElement; ///
                var childDOMElement = this.createChildDOMElement(context);
                domElement = childDOMElement; ///
                (0, _dom.insertAfterwards)(domElement, parentDOMElement);
                domElement = this.getDOMElement();
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement) {
                var domElement;
                domElement = this.getDOMElement();
                {
                    var _$parentDOMElement = domElement, firstChild = _$parentDOMElement.firstChild;
                    domElement = firstChild; ///
                    (0, _dom.remove)(domElement, _$parentDOMElement);
                }
                domElement = this.getDOMElement();
                (0, _dom.remove)(domElement, parentDOMElement);
                this.resetDOMElement();
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML;
                indent = this.adjustIndent(indent);
                childNodesHTML = _get(_get_prototype_of(StronglyEmphasisedTextHTMLNode.prototype), "childNodesAsHTML", this).call(this, indent, context);
                var startingTag = "<".concat(strongTextTagName, ">"), closingTag = "</".concat(strongTextTagName, ">"), html = "".concat(indent).concat(startingTag, "\n").concat(childNodesHTML).concat(indent).concat(closingTag, "\n");
                childNodesHTML = html; ///
                return childNodesHTML;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var childNodesPlainText = this.reduceChildNode(function(childNodesPlainText, childNode) {
                    var childNodePlainText = childNode.asPlainText(context);
                    childNodesPlainText = "".concat(childNodesPlainText).concat(childNodePlainText);
                    return childNodesPlainText;
                }, _constants.EMPTY_STRING);
                return childNodesPlainText;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(StronglyEmphasisedTextHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(StronglyEmphasisedTextHTMLNode, outerNode);
            }
        }
    ]);
    return StronglyEmphasisedTextHTMLNode;
}(_html.default);
_define_property(StronglyEmphasisedTextHTMLNode, "tagName", "em");
_define_property(StronglyEmphasisedTextHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC9zdHJvbmdseUVtcGhhc2lzZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgdGFnTmFtZU1hcCBmcm9tIFwiLi4vLi4vLi4vbWFwL3RhZ05hbWVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU1RST05HX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcywgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cm9uZ2x5RW1waGFzaXNlZFRleHRIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY3JlYXRlQ2hpbGRET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdOYW1lTWFwW1NUUk9OR19URVhUX01BUktET1dOX1JVTEVfTkFNRV0sXG4gICAgICAgICAgcGxhaW5UZXh0ID0gdGhpcy5jaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgY29udGVudCA9IHBsYWluVGV4dCwgIC8vL1xuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgKHNpYmxpbmdET01FbGVtZW50ICE9PSBudWxsKSA/XG4gICAgICBpbnNlcnRBZnRlcihkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCkgOlxuICAgICAgICBpbnNlcnRCZWZvcmVoYW5kKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIGNvbnN0IGNoaWxkRE9NRWxlbWVudCA9IHRoaXMuY3JlYXRlQ2hpbGRET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IGNoaWxkRE9NRWxlbWVudDsgLy8vXG5cbiAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAge1xuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsIC8vL1xuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHBhcmVudERPTUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgICAgZG9tRWxlbWVudCA9IGZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHRoaXMucmVzZXRET01FbGVtZW50KCk7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBjaGlsZE5vZGVzSFRNTDtcblxuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjaGlsZE5vZGVzSFRNTCA9IHN1cGVyLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gYDwke3N0cm9uZ1RleHRUYWdOYW1lfT5gLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPC8ke3N0cm9uZ1RleHRUYWdOYW1lfT5gLFxuICAgICAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcblxuICAgIGNoaWxkTm9kZXNIVE1MID0gaHRtbDsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNoaWxkTm9kZXNQbGFpblRleHQsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGxhaW5UZXh0ID0gY2hpbGROb2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gYCR7Y2hpbGROb2Rlc1BsYWluVGV4dH0ke2NoaWxkTm9kZVBsYWluVGV4dH1gO1xuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZW1cIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhTdHJvbmdseUVtcGhhc2lzZWRUZXh0SFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKFN0cm9uZ2x5RW1waGFzaXNlZFRleHRIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlN0cm9uZ2x5RW1waGFzaXNlZFRleHRIVE1MTm9kZSIsImNyZWF0ZUNoaWxkRE9NRWxlbWVudCIsImNvbnRleHQiLCJkb21FbGVtZW50IiwidGFnTmFtZSIsInRhZ05hbWVNYXAiLCJTVFJPTkdfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUUiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJjb250ZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJpbnNlcnRBZnRlcndhcmRzIiwibW91bnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJpbnNlcnRCZWZvcmVoYW5kIiwiY2hpbGRET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInVubW91bnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwicmVzZXRET01FbGVtZW50IiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiYWRqdXN0SW5kZW50Iiwic3RhcnRpbmdUYWciLCJzdHJvbmdUZXh0VGFnTmFtZSIsImNsb3NpbmdUYWciLCJodG1sIiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJEQVBBOzhEQUNFO3lCQUVNO3dCQUNrQjttQkFDeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsSUFBQSxBQUFNQSwrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsT0FBTztnQkFDM0IsSUFBSUM7Z0JBRUosSUFBTUMsVUFBVUMsZ0JBQVUsQ0FBQ0Msd0NBQThCLENBQUMsRUFDcERDLFlBQVksSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ04sVUFDdkNPLFVBQVVGLFdBQ1ZHLFdBQVdDLFNBQVNDLGNBQWMsQ0FBQ0g7Z0JBRXpDTixhQUFhUSxTQUFTRSxhQUFhLENBQUNUO2dCQUVwQyxJQUFNVSxtQkFBbUJYLFlBQWEsR0FBRztnQkFFekNBLGFBQWFPLFVBQVUsR0FBRztnQkFFMUJLLElB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