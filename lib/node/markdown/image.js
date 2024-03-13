"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImageMarkdownNode;
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
var ImageMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ImageMarkdownNode, MarkdownNode);
    var _super = _create_super(ImageMarkdownNode);
    function ImageMarkdownNode() {
        _class_call_check(this, ImageMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ImageMarkdownNode, [
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
                var attributeName = _attributeNames.SRC_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "getAttributeValue",
            value: function getAttributeValue(context) {
                var src = this.getSrc(context), attributeValue = src; ///
                return attributeValue;
            }
        },
        {
            key: "getSrc",
            value: function getSrc(context) {
                var childNodes = this.getChildNodes(), secondLastChildNode = secondLast(childNodes), URLMarkdownNode = secondLastChildNode, URLMarkdownNodeContent = URLMarkdownNode.getContent(context), src = URLMarkdownNodeContent; ///
                return src;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(ImageMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return ImageMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBTUkNfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuY29uc3QgeyBzZWNvbmQsIHNlY29uZExhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGdldElubmVySFRNTChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZUNvbnRlbnQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmdldENvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGlubmVySFRNTDtcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZU5hbWUoKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IFNSQ19BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IHNyYyA9IHRoaXMuZ2V0U3JjKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gc3JjOyAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGdldFNyYyhjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZExhc3RDaGlsZE5vZGUgPSBzZWNvbmRMYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIFVSTE1hcmtkb3duTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBVUkxNYXJrZG93bk5vZGVDb250ZW50ID0gVVJMTWFya2Rvd25Ob2RlLmdldENvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgc3JjID0gVVJMTWFya2Rvd25Ob2RlQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gc3JjO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cykgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoSW1hZ2VNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG4iXSwibmFtZXMiOlsiSW1hZ2VNYXJrZG93bk5vZGUiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZExhc3QiLCJnZXRJbm5lckhUTUwiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzZWNvbmRDaGlsZE5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiaW5uZXJIVE1MIiwiZ2V0QXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZU5hbWUiLCJTUkNfQVRUUklCVVRFX05BTUUiLCJnZXRBdHRyaWJ1dGVWYWx1ZSIsInNyYyIsImdldFNyYyIsImF0dHJpYnV0ZVZhbHVlIiwic2Vjb25kTGFzdENoaWxkTm9kZSIsIlVSTE1hcmtkb3duTm9kZSIsIlVSTE1hcmtkb3duTm9kZUNvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwicnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOOzhCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQVFDLFNBQXVCQyx5QkFBYyxDQUFyQ0QsUUFBUUUsYUFBZUQseUJBQWMsQ0FBN0JDO0FBRUQsSUFBQSxBQUFNSCxrQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsT0FBTztnQkFDbEIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQlAsT0FBT0ssYUFDekJHLHlCQUF5QkQsaUJBQ3pCRSxnQ0FBZ0NELHVCQUF1QkUsVUFBVSxDQUFDTixVQUNsRU8sWUFBWUYsK0JBQStCLEdBQUc7Z0JBRXBELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCQyxrQ0FBa0I7Z0JBRXhDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCWCxPQUFPO2dCQUN2QixJQUFNWSxNQUFNLElBQUksQ0FBQ0MsTUFBTSxDQUFDYixVQUNsQmMsaUJBQWlCRixLQUFLLEdBQUc7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT2IsT0FBTztnQkFDWixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQmEsc0JBQXNCakIsV0FBV0csYUFDakNlLGtCQUFrQkQscUJBQ2xCRSx5QkFBeUJELGdCQUFnQlYsVUFBVSxDQUFDTixVQUNwRFksTUFBTUssd0JBQXdCLEdBQUc7Z0JBRXZDLE9BQU9MO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxRQUFRLEVBQUVsQixVQUFVLEVBQUVtQixTQUFTO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNILGtDQUFrQyxDQWxDaEh2QixtQkFrQ29Jd0IsVUFBVWxCLFlBQVltQjtZQUFZOzs7V0FsQ3RLekI7RUFBMEIwQixpQkFBWSJ9