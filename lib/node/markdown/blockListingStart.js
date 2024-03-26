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
            key: "className",
            value: function className(context) {
                var className = null;
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), secondChildNodeClassNameMarkdownNode = _instanceof(secondChildNode, _className.default);
                if (secondChildNodeClassNameMarkdownNode) {
                    var classNameMarkdownNode = secondChildNode; ///
                    className = classNameMarkdownNode.className(context);
                }
                return className;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(BlockListingStartMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return BlockListingStartMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZ1N0YXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENsYXNzTmFtZU1hcmtkb3duTm9kZSBmcm9tIFwiLi9jbGFzc05hbWVcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZUNsYXNzTmFtZU1hcmtkb3duTm9kZSA9IChzZWNvbmRDaGlsZE5vZGUgaW5zdGFuY2VvZiBDbGFzc05hbWVNYXJrZG93bk5vZGUpXG5cbiAgICBpZiAoc2Vjb25kQ2hpbGROb2RlQ2xhc3NOYW1lTWFya2Rvd25Ob2RlKSB7XG4gICAgICBjb25zdCBjbGFzc05hbWVNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWVNYXJrZG93bk5vZGUuY2xhc3NOYW1lKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShCbG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZUNsYXNzTmFtZU1hcmtkb3duTm9kZSIsIkNsYXNzTmFtZU1hcmtkb3duTm9kZSIsImNsYXNzTmFtZU1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt5QkFQVTsrREFFTjtnRUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELDhDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQUlELFlBQVk7Z0JBRWhCLElBQU1FLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JOLE9BQU9JLGFBQ3pCRyx1Q0FBd0NELEFBQWUsWUFBZkEsaUJBQTJCRSxrQkFBcUI7Z0JBRTlGLElBQUlELHNDQUFzQztvQkFDeEMsSUFBTUUsd0JBQXdCSCxpQkFBaUIsR0FBRztvQkFFbERKLFlBQVlPLHNCQUFzQlAsU0FBUyxDQUFDQztnQkFDOUM7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRVAsVUFBVSxFQUFFUSxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNILGdDQUFnQyxDQWpCMUdYLCtCQWlCMElZLFVBQVVQLFlBQVlRO1lBQVU7OztXQWpCMUtiO0VBQXNDYyxpQkFBWSJ9