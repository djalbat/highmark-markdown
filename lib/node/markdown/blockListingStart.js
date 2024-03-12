"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingStartMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _className = /*#__PURE__*/ _interop_require_default(require("./className"));
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var second = _necessary.arrayUtilities.second;
var BlockListingStartMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(BlockListingStartMarkdownNode, MarkdownNode);
    var _super = _create_super(BlockListingStartMarkdownNode);
    function BlockListingStartMarkdownNode() {
        _class_call_check(this, BlockListingStartMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(BlockListingStartMarkdownNode, [
        {
            key: "getClassName",
            value: function getClassName() {
                var className = null;
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), secondChildNodeClassNameMarkdownNode = _instanceof(secondChildNode, _className.default);
                if (secondChildNodeClassNameMarkdownNode) {
                    var classNameMarkdownNode = secondChildNode; ///
                    className = classNameMarkdownNode.getClassName();
                }
                return className;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(BlockListingStartMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return BlockListingStartMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZ1N0YXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENsYXNzTmFtZU1hcmtkb3duTm9kZSBmcm9tIFwiLi9jbGFzc05hbWVcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGdldENsYXNzTmFtZSgpIHtcbiAgICBsZXQgY2xhc3NOYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlQ2xhc3NOYW1lTWFya2Rvd25Ob2RlID0gKHNlY29uZENoaWxkTm9kZSBpbnN0YW5jZW9mIENsYXNzTmFtZU1hcmtkb3duTm9kZSlcblxuICAgIGlmIChzZWNvbmRDaGlsZE5vZGVDbGFzc05hbWVNYXJrZG93bk5vZGUpIHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZU1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZU1hcmtkb3duTm9kZS5nZXRDbGFzc05hbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cykgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoQmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsImdldENsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlQ2xhc3NOYW1lTWFya2Rvd25Ob2RlIiwiQ2xhc3NOYW1lTWFya2Rvd25Ob2RlIiwiY2xhc3NOYW1lTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyIsInJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt5QkFQVTsrREFFTjtnRUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELDhDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxZQUFZO2dCQUVoQixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsa0JBQWtCTixPQUFPSSxhQUN6QkcsdUNBQXdDRCxBQUFlLFlBQWZBLGlCQUEyQkUsa0JBQXFCO2dCQUU5RixJQUFJRCxzQ0FBc0M7b0JBQ3hDLElBQU1FLHdCQUF3QkgsaUJBQWlCLEdBQUc7b0JBRWxESCxZQUFZTSxzQkFBc0JQLFlBQVk7Z0JBQ2hEO2dCQUVBLE9BQU9DO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxRQUFRLEVBQUVQLFVBQVUsRUFBRVEsU0FBUztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxrQ0FBa0MsQ0FqQmhIWCwrQkFpQmdKWSxVQUFVUCxZQUFZUTtZQUFZOzs7V0FqQmxMYjtFQUFzQ2MsaUJBQVkifQ==