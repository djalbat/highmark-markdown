"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmailMarkdownNode;
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
var second = _necessary.arrayUtilities.second, secondLast = _necessary.arrayUtilities.secondLast;
var EmailMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(EmailMarkdownNode, MarkdownNode);
    var _super = _create_super(EmailMarkdownNode);
    function EmailMarkdownNode() {
        _class_call_check(this, EmailMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(EmailMarkdownNode, [
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context), childNodesHTML = inlineTextMarkdownNodeHTML; ///
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeDOMElement = inlineTextMarkdownNode.createDOMElement(context);
                this.insertDOMElement(inlineTextMarkdownNodeDOMElement);
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
                var childNodes = this.getChildNodes(), secondLastChildNode = secondLast(childNodes), URLMarkdownNode = secondLastChildNode, URLMarkdownNodeContent = URLMarkdownNode.content(context), attributeValue = "mailto:".concat(URLMarkdownNodeContent);
                return attributeValue;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(EmailMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return EmailMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2VtYWlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBIUkVGX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmNvbnN0IHsgc2Vjb25kLCBzZWNvbmRMYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1haWxNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUwgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUw7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZURPTUVsZW1lbnQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLmluc2VydERPTUVsZW1lbnQoaW5saW5lVGV4dE1hcmtkb3duTm9kZURPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kTGFzdENoaWxkTm9kZSA9IHNlY29uZExhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgVVJMTWFya2Rvd25Ob2RlID0gc2Vjb25kTGFzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIFVSTE1hcmtkb3duTm9kZUNvbnRlbnQgPSBVUkxNYXJrZG93bk5vZGUuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGBtYWlsdG86JHtVUkxNYXJrZG93bk5vZGVDb250ZW50fWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShFbWFpbE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiRW1haWxNYXJrZG93bk5vZGUiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZExhc3QiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MIiwiYXNIVE1MIiwiY2hpbGROb2Rlc0hUTUwiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsImlubGluZVRleHRNYXJrZG93bk5vZGVET01FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsImluc2VydERPTUVsZW1lbnQiLCJhdHRyaWJ1dGVOYW1lIiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwic2Vjb25kTGFzdENoaWxkTm9kZSIsIlVSTE1hcmtkb3duTm9kZSIsIlVSTE1hcmtkb3duTm9kZUNvbnRlbnQiLCJjb250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOOzhCQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQVFDLFNBQXVCQyx5QkFBYyxDQUFyQ0QsUUFBUUUsYUFBZUQseUJBQWMsQ0FBN0JDO0FBRUQsSUFBQSxBQUFNSCxrQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUVDLE9BQU87Z0JBQzlCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JSLE9BQU9NLGFBQ3pCRyx5QkFBeUJELGlCQUN6QkUsNkJBQTZCRCx1QkFBdUJFLE1BQU0sQ0FBQ1AsUUFBUUMsVUFDbkVPLGlCQUFpQkYsNEJBQTRCLEdBQUc7Z0JBRXRELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCUixPQUFPO2dCQUNoQyxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsa0JBQWtCUixPQUFPTSxhQUN6QkcseUJBQXlCRCxpQkFDekJNLG1DQUFtQ0wsdUJBQXVCTSxnQkFBZ0IsQ0FBQ1Y7Z0JBRWpGLElBQUksQ0FBQ1csZ0JBQWdCLENBQUNGO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNaLE9BQU87Z0JBQ25CLElBQU1ZLGdCQUFnQkMsbUNBQW1CO2dCQUV6QyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVkLE9BQU87Z0JBQ3BCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CYSxzQkFBc0JsQixXQUFXSSxhQUNqQ2Usa0JBQWtCRCxxQkFDbEJFLHlCQUF5QkQsZ0JBQWdCRSxPQUFPLENBQUNsQixVQUNqRGMsaUJBQWlCLEFBQUMsVUFBZ0MsT0FBdkJHO2dCQUVqQyxPQUFPSDtZQUNUOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFbkIsVUFBVSxFQUFFb0IsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0FwQzFHekIsbUJBb0M4SDBCLFVBQVVuQixZQUFZb0I7WUFBVTs7O1dBcEM5SjNCO0VBQTBCNEIsaUJBQVkifQ==