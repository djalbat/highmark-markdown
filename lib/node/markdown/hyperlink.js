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
            key: "getInnerHTML",
            value: function getInnerHTML(context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeContent = inlineTextMarkdownNode.getContent(context), innerHTML = inlineTextMarkdownNodeContent; ///
                return innerHTML;
            }
        },
        {
            key: "getAttributeName",
            value: function getAttributeName() {
                var attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "getAttributeValue",
            value: function getAttributeValue(context) {
                var href = this.getHref(context), attributeValue = href; ///
                return attributeValue;
            }
        },
        {
            key: "getHref",
            value: function getHref(context) {
                var childNodes = this.getChildNodes(), secondLastChildNode = secondLast(childNodes), URLMarkdownNode = secondLastChildNode, URLMarkdownNodeContent = URLMarkdownNode.getContent(context), href = URLMarkdownNodeContent; ///
                return href;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(HyperlinkMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return HyperlinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2h5cGVybGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5jb25zdCB7IHNlY29uZCwgc2Vjb25kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5cGVybGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGdldElubmVySFRNTChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZUNvbnRlbnQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmdldENvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGlubmVySFRNTDtcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZU5hbWUoKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBocmVmID0gdGhpcy5nZXRIcmVmKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gaHJlZjsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBnZXRIcmVmKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kTGFzdENoaWxkTm9kZSA9IHNlY29uZExhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgVVJMTWFya2Rvd25Ob2RlID0gc2Vjb25kTGFzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIFVSTE1hcmtkb3duTm9kZUNvbnRlbnQgPSBVUkxNYXJrZG93bk5vZGUuZ2V0Q29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBocmVmID0gVVJMTWFya2Rvd25Ob2RlQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gaHJlZjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKEh5cGVybGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJIeXBlcmxpbmtNYXJrZG93bk5vZGUiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZExhc3QiLCJnZXRJbm5lckhUTUwiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzZWNvbmRDaGlsZE5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiaW5uZXJIVE1MIiwiZ2V0QXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiZ2V0QXR0cmlidXRlVmFsdWUiLCJocmVmIiwiZ2V0SHJlZiIsImF0dHJpYnV0ZVZhbHVlIiwic2Vjb25kTGFzdENoaWxkTm9kZSIsIlVSTE1hcmtkb3duTm9kZSIsIlVSTE1hcmtkb3duTm9kZUNvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwicnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOOzhCQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQVFDLFNBQXVCQyx5QkFBYyxDQUFyQ0QsUUFBUUUsYUFBZUQseUJBQWMsQ0FBN0JDO0FBRUQsSUFBQSxBQUFNSCxzQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsT0FBTztnQkFDbEIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQlAsT0FBT0ssYUFDekJHLHlCQUF5QkQsaUJBQ3pCRSxnQ0FBZ0NELHVCQUF1QkUsVUFBVSxDQUFDTixVQUNsRU8sWUFBWUYsK0JBQStCLEdBQUc7Z0JBRXBELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCQyxtQ0FBbUI7Z0JBRXpDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCWCxPQUFPO2dCQUN2QixJQUFNWSxPQUFPLElBQUksQ0FBQ0MsT0FBTyxDQUFDYixVQUNwQmMsaUJBQWlCRixNQUFNLEdBQUc7Z0JBRWhDLE9BQU9FO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUWIsT0FBTztnQkFDYixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQmEsc0JBQXNCakIsV0FBV0csYUFDakNlLGtCQUFrQkQscUJBQ2xCRSx5QkFBeUJELGdCQUFnQlYsVUFBVSxDQUFDTixVQUNwRFksT0FBT0ssd0JBQXdCLEdBQUc7Z0JBRXhDLE9BQU9MO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxRQUFRLEVBQUVsQixVQUFVLEVBQUVtQixTQUFTO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNILGtDQUFrQyxDQWxDaEh2Qix1QkFrQ3dJd0IsVUFBVWxCLFlBQVltQjtZQUFZOzs7V0FsQzFLekI7RUFBOEIwQixpQkFBWSJ9