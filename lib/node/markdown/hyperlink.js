"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HyperlinkMarkdownNode;
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
var HyperlinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(HyperlinkMarkdownNode, MarkdownNode);
    var _super = _create_super(HyperlinkMarkdownNode);
    function HyperlinkMarkdownNode() {
        _class_call_check(this, HyperlinkMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(HyperlinkMarkdownNode, [
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
                var childNodes = this.getChildNodes(), secondLastChildNode = secondLast(childNodes), URLMarkdownNode = secondLastChildNode, URLMarkdownNodeContent = URLMarkdownNode.content(context), attributeValue = URLMarkdownNodeContent; ///
                return attributeValue;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(HyperlinkMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return HyperlinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2h5cGVybGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5jb25zdCB7IHNlY29uZCwgc2Vjb25kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5cGVybGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTCA9IGlubGluZVRleHRNYXJrZG93bk5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlRE9NRWxlbWVudCA9IGlubGluZVRleHRNYXJrZG93bk5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIHRoaXMuaW5zZXJ0RE9NRWxlbWVudChpbmxpbmVUZXh0TWFya2Rvd25Ob2RlRE9NRWxlbWVudCk7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRMYXN0Q2hpbGROb2RlID0gc2Vjb25kTGFzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBVUkxNYXJrZG93bk5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgVVJMTWFya2Rvd25Ob2RlQ29udGVudCA9IFVSTE1hcmtkb3duTm9kZS5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gVVJMTWFya2Rvd25Ob2RlQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShIeXBlcmxpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkh5cGVybGlua01hcmtkb3duTm9kZSIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kTGFzdCIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzZWNvbmRDaGlsZE5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUwiLCJhc0hUTUwiLCJjaGlsZE5vZGVzSFRNTCIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZURPTUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwiaW5zZXJ0RE9NRWxlbWVudCIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwiVVJMTWFya2Rvd25Ob2RlIiwiVVJMTWFya2Rvd25Ob2RlQ29udGVudCIsImNvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7K0RBRU47OEJBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBUUMsU0FBdUJDLHlCQUFjLENBQXJDRCxRQUFRRSxhQUFlRCx5QkFBYyxDQUE3QkM7QUFFRCxJQUFBLEFBQU1ILHNDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU0sRUFBRUMsT0FBTztnQkFDOUIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQlIsT0FBT00sYUFDekJHLHlCQUF5QkQsaUJBQ3pCRSw2QkFBNkJELHVCQUF1QkUsTUFBTSxDQUFDUCxRQUFRQyxVQUNuRU8saUJBQWlCRiw0QkFBNEIsR0FBRztnQkFFdEQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJSLE9BQU87Z0JBQ2hDLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JSLE9BQU9NLGFBQ3pCRyx5QkFBeUJELGlCQUN6Qk0sbUNBQW1DTCx1QkFBdUJNLGdCQUFnQixDQUFDVjtnQkFFakYsSUFBSSxDQUFDVyxnQkFBZ0IsQ0FBQ0Y7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY1osT0FBTztnQkFDbkIsSUFBTVksZ0JBQWdCQyxtQ0FBbUI7Z0JBRXpDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZWQsT0FBTztnQkFDcEIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JhLHNCQUFzQmxCLFdBQVdJLGFBQ2pDZSxrQkFBa0JELHFCQUNsQkUseUJBQXlCRCxnQkFBZ0JFLE9BQU8sQ0FBQ2xCLFVBQ2pEYyxpQkFBaUJHLHdCQUF3QixHQUFHO2dCQUVsRCxPQUFPSDtZQUNUOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFbkIsVUFBVSxFQUFFb0IsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0FwQzFHekIsdUJBb0NrSTBCLFVBQVVuQixZQUFZb0I7WUFBVTs7O1dBcENsSzNCO0VBQThCNEIsaUJBQVkifQ==