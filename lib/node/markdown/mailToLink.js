"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MailToLinkMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var MailToLinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(MailToLinkMarkdownNode, MarkdownNode);
    var _super = _create_super(MailToLinkMarkdownNode);
    function MailToLinkMarkdownNode() {
        _class_call_check(this, MailToLinkMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(MailToLinkMarkdownNode, [
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
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length;
                var addressMarkdownNode;
                if (childNodesLength === 1) {
                    var firstChildNode = first(childNodes);
                    addressMarkdownNode = firstChildNode; ///
                } else {
                    var secondLastChildNode = secondLast(childNodes);
                    addressMarkdownNode = secondLastChildNode; ///
                }
                var addressMarkdownNodeContent = addressMarkdownNode.content(context), attributeValue = "mailto:".concat(addressMarkdownNodeContent);
                return attributeValue;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML;
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length;
                if (childNodesLength === 1) {
                    var firstChildNode = first(childNodes), addressMarkdownNode = firstChildNode, addressMarkdownNodeHTML = addressMarkdownNode.asHTML(indent, context);
                    childNodesHTML = addressMarkdownNodeHTML; ///
                } else {
                    var secondChildNode = second(childNodes), inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context);
                    childNodesHTML = inlineTextMarkdownNodeHTML; ///
                }
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length;
                if (childNodesLength === 1) {
                    var firstChildNode = first(childNodes), addressMarkdownNode = firstChildNode, addressMarkdownNodeDOMElement = addressMarkdownNode.createDOMElement(context);
                    this.insertDOMElement(addressMarkdownNodeDOMElement);
                } else {
                    var secondChildNode = second(childNodes), inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeDOMElement = inlineTextMarkdownNode.createDOMElement(context);
                    this.insertDOMElement(inlineTextMarkdownNodeDOMElement);
                }
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(MailToLinkMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return MailToLinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL21haWxUb0xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEhSRUZfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kLCBzZWNvbmRMYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbFRvTGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGxldCBhZGRyZXNzTWFya2Rvd25Ob2RlO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2Rlcyk7XG5cbiAgICAgIGFkZHJlc3NNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZWNvbmRMYXN0Q2hpbGROb2RlID0gc2Vjb25kTGFzdChjaGlsZE5vZGVzKTtcblxuICAgICAgYWRkcmVzc01hcmtkb3duTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBhZGRyZXNzTWFya2Rvd25Ob2RlQ29udGVudCA9IGFkZHJlc3NNYXJrZG93bk5vZGUuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGBtYWlsdG86JHthZGRyZXNzTWFya2Rvd25Ob2RlQ29udGVudH1gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc0hUTUw7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgICBhZGRyZXNzTWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgICBhZGRyZXNzTWFya2Rvd25Ob2RlSFRNTCA9IGFkZHJlc3NNYXJrZG93bk5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYWRkcmVzc01hcmtkb3duTm9kZUhUTUw7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTCA9IGlubGluZVRleHRNYXJrZG93bk5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUw7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgICBhZGRyZXNzTWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgYWRkcmVzc01hcmtkb3duTm9kZURPTUVsZW1lbnQgPSBhZGRyZXNzTWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIHRoaXMuaW5zZXJ0RE9NRWxlbWVudChhZGRyZXNzTWFya2Rvd25Ob2RlRE9NRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZURPTUVsZW1lbnQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIHRoaXMuaW5zZXJ0RE9NRWxlbWVudChpbmxpbmVUZXh0TWFya2Rvd25Ob2RlRE9NRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoTWFpbFRvTGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiTWFpbFRvTGlua01hcmtkb3duTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJzZWNvbmRMYXN0IiwiYXR0cmlidXRlTmFtZSIsImNvbnRleHQiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJhZGRyZXNzTWFya2Rvd25Ob2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwiYWRkcmVzc01hcmtkb3duTm9kZUNvbnRlbnQiLCJjb250ZW50IiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiYWRkcmVzc01hcmtkb3duTm9kZUhUTUwiLCJhc0hUTUwiLCJzZWNvbmRDaGlsZE5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUwiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsImFkZHJlc3NNYXJrZG93bk5vZGVET01FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsImluc2VydERPTUVsZW1lbnQiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlRE9NRWxlbWVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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