"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ClassNameMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var second = _necessary.arrayUtilities.second;
var ClassNameMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ClassNameMarkdownNode, MarkdownNode);
    var _super = _create_super(ClassNameMarkdownNode);
    function ClassNameMarkdownNode() {
        _class_call_check(this, ClassNameMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ClassNameMarkdownNode, [
        {
            key: "getClassName",
            value: function getClassName() {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), identifierTerminalNode = secondChildNode, identifierTerminalNodeContent = identifierTerminalNode.getContent(), className = identifierTerminalNodeContent; ///
                return className;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(ClassNameMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return ClassNameMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NsYXNzTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc05hbWVNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBnZXRDbGFzc05hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBpZGVudGlmaWVyVGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyVGVybWluYWxOb2RlQ29udGVudCA9IGlkZW50aWZpZXJUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IGlkZW50aWZpZXJUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhDbGFzc05hbWVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG4iXSwibmFtZXMiOlsiQ2xhc3NOYW1lTWFya2Rvd25Ob2RlIiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJnZXRDbGFzc05hbWUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsImlkZW50aWZpZXJUZXJtaW5hbE5vZGUiLCJpZGVudGlmaWVyVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJjbGFzc05hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwicnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VOytEQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCxzQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQkwsT0FBT0csYUFDekJHLHlCQUF5QkQsaUJBQ3pCRSxnQ0FBZ0NELHVCQUF1QkUsVUFBVSxJQUNqRUMsWUFBWUYsK0JBQStCLEdBQUc7Z0JBRXBELE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxRQUFRLEVBQUVSLFVBQVUsRUFBRVMsU0FBUztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxrQ0FBa0MsQ0FYaEhYLHVCQVd3SVksVUFBVVIsWUFBWVM7WUFBWTs7O1dBWDFLYjtFQUE4QmMsaUJBQVkifQ==