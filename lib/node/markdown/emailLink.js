"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmailLinkMarkdownNode;
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
var EmailLinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(EmailLinkMarkdownNode, MarkdownNode);
    var _super = _create_super(EmailLinkMarkdownNode);
    function EmailLinkMarkdownNode() {
        _class_call_check(this, EmailLinkMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(EmailLinkMarkdownNode, [
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
                return _markdown.default.fromRuleNameChildNodesAndOpacity(EmailLinkMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return EmailLinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2VtYWlsTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIHNlY29uZExhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWFpbExpbmtNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBsZXQgYWRkcmVzc01hcmtkb3duTm9kZTtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpO1xuXG4gICAgICBhZGRyZXNzTWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2Vjb25kTGFzdENoaWxkTm9kZSA9IHNlY29uZExhc3QoY2hpbGROb2Rlcyk7XG5cbiAgICAgIGFkZHJlc3NNYXJrZG93bk5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgYWRkcmVzc01hcmtkb3duTm9kZUNvbnRlbnQgPSBhZGRyZXNzTWFya2Rvd25Ob2RlLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBgbWFpbHRvOiR7YWRkcmVzc01hcmtkb3duTm9kZUNvbnRlbnR9YDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGNoaWxkTm9kZXNIVE1MO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgYWRkcmVzc01hcmtkb3duTm9kZSA9IGZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICAgYWRkcmVzc01hcmtkb3duTm9kZUhUTUwgPSBhZGRyZXNzTWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGFkZHJlc3NNYXJrZG93bk5vZGVIVE1MOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUwgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgYWRkcmVzc01hcmtkb3duTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGFkZHJlc3NNYXJrZG93bk5vZGVET01FbGVtZW50ID0gYWRkcmVzc01hcmtkb3duTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICB0aGlzLmluc2VydERPTUVsZW1lbnQoYWRkcmVzc01hcmtkb3duTm9kZURPTUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGVET01FbGVtZW50ID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICB0aGlzLmluc2VydERPTUVsZW1lbnQoaW5saW5lVGV4dE1hcmtkb3duTm9kZURPTUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEVtYWlsTGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiRW1haWxMaW5rTWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsInNlY29uZExhc3QiLCJhdHRyaWJ1dGVOYW1lIiwiY29udGV4dCIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImFkZHJlc3NNYXJrZG93bk5vZGUiLCJmaXJzdENoaWxkTm9kZSIsInNlY29uZExhc3RDaGlsZE5vZGUiLCJhZGRyZXNzTWFya2Rvd25Ob2RlQ29udGVudCIsImNvbnRlbnQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJhZGRyZXNzTWFya2Rvd25Ob2RlSFRNTCIsImFzSFRNTCIsInNlY29uZENoaWxkTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTCIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiYWRkcmVzc01hcmtkb3duTm9kZURPTUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwiaW5zZXJ0RE9NRWxlbWVudCIsImlubGluZVRleHRNYXJrZG93bk5vZGVET01FbGVtZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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