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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _content = /*#__PURE__*/ _interop_require_default(require("../../mixins/content"));
var _attributeNames = require("../../attributeNames");
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, secondLast = _necessary.arrayUtilities.secondLast;
var HyperlinkLinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(HyperlinkLinkMarkdownNode, MarkdownNode);
    var _super = _create_super(HyperlinkLinkMarkdownNode);
    function HyperlinkLinkMarkdownNode() {
        _class_call_check(this, HyperlinkLinkMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(HyperlinkLinkMarkdownNode, [
        {
            key: "url",
            value: function url(context) {
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length;
                var urlTerminalNode;
                if (childNodesLength === 1) {
                    var firstChildNode = first(childNodes);
                    urlTerminalNode = firstChildNode; ///
                } else {
                    var secondLastChildNode = secondLast(childNodes);
                    urlTerminalNode = secondLastChildNode; ///
                }
                var urlTerminalNodeContent = urlTerminalNode.getContent(), url = urlTerminalNodeContent; ///
                return url;
            }
        },
        {
            key: "inlineText",
            value: function inlineText(context) {
                var inlineText = null;
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length;
                if (childNodesLength !== 1) {
                    var indent = null, secondChildNode = second(childNodes), inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context);
                    inlineText = inlineTextMarkdownNodeHTML; ///
                }
                return inlineText;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var url = this.url(context), attributeValue = url; ///
                return attributeValue;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML;
                var inlineText = this.inlineText(context);
                if (inlineText !== null) {
                    childNodesHTML = inlineText; ///
                } else {
                    var content = this.content(context);
                    childNodesHTML = content; ///
                }
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var inlineText = this.inlineText(context), content = inlineText !== null ? inlineText : this.content(context);
                var childNodeDOMElement = document.createTextNode(content);
                this.insertDOMElement(childNodeDOMElement);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(HyperlinkLinkMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return HyperlinkLinkMarkdownNode;
}(_markdown.default);
Object.assign(HyperlinkLinkMarkdownNode.prototype, _content.default);
var _default = HyperlinkLinkMarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2h5cGVybGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBjb250ZW50TWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29udGVudFwiO1xuXG5pbXBvcnQgeyBIUkVGX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgc2Vjb25kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEh5cGVybGlua0xpbmtNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICB1cmwoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBsZXQgdXJsVGVybWluYWxOb2RlO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2Rlcyk7XG5cbiAgICAgIHVybFRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlY29uZExhc3RDaGlsZE5vZGUgPSBzZWNvbmRMYXN0KGNoaWxkTm9kZXMpO1xuXG4gICAgICB1cmxUZXJtaW5hbE5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdXJsVGVybWluYWxOb2RlQ29udGVudCA9IHVybFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgdXJsID0gdXJsVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgaW5saW5lVGV4dChjb250ZXh0KSB7XG4gICAgbGV0IGlubGluZVRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoICE9PSAxKSB7XG4gICAgICBjb25zdCBpbmRlbnQgPSBudWxsLFxuICAgICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTCA9IGlubGluZVRleHRNYXJrZG93bk5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGlubGluZVRleHQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBpbmxpbmVUZXh0O1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnVybChjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHVybDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBjaGlsZE5vZGVzSFRNTDtcblxuICAgIGNvbnN0IGlubGluZVRleHQgPSB0aGlzLmlubGluZVRleHQoY29udGV4dCk7XG5cbiAgICBpZiAoaW5saW5lVGV4dCAhPT0gbnVsbCkge1xuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBpbmxpbmVUZXh0OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gY29udGVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IGlubGluZVRleHQgPSB0aGlzLmlubGluZVRleHQoY29udGV4dCksXG4gICAgICAgICAgY29udGVudCA9IChpbmxpbmVUZXh0ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgaW5saW5lVGV4dCA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQoY29udGV4dCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICB0aGlzLmluc2VydERPTUVsZW1lbnQoY2hpbGROb2RlRE9NRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShIeXBlcmxpbmtMaW5rTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihIeXBlcmxpbmtMaW5rTWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgY29udGVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEh5cGVybGlua0xpbmtNYXJrZG93bk5vZGU7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsInNlY29uZExhc3QiLCJIeXBlcmxpbmtMaW5rTWFya2Rvd25Ob2RlIiwidXJsIiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInVybFRlcm1pbmFsTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwic2Vjb25kTGFzdENoaWxkTm9kZSIsInVybFRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiaW5saW5lVGV4dCIsImluZGVudCIsInNlY29uZENoaWxkTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTCIsImFzSFRNTCIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJjaGlsZE5vZGVzQXNIVE1MIiwiY2hpbGROb2Rlc0hUTUwiLCJjb250ZW50IiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJjaGlsZE5vZGVET01FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydERPTUVsZW1lbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRlbnRNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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