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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ClassNameMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ClassNameMarkdownNode, MarkdownNode);
    function ClassNameMarkdownNode() {
        _class_call_check(this, ClassNameMarkdownNode);
        return _call_super(this, ClassNameMarkdownNode, arguments);
    }
    _create_class(ClassNameMarkdownNode, [
        {
            key: "className",
            value: function className(context) {
                var className = this.fromSecondChildNode(function(secondChildNode) {
                    var identifierTerminalNode = secondChildNode, identifierTerminalNodeContent = identifierTerminalNode.getContent(), className = identifierTerminalNodeContent; ///
                    return className;
                });
                return className;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(ClassNameMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return ClassNameMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NsYXNzTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc05hbWVNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyVGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGlkZW50aWZpZXJUZXJtaW5hbE5vZGVDb250ZW50ID0gaWRlbnRpZmllclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBpZGVudGlmaWVyVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3NOYW1lTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDbGFzc05hbWVNYXJrZG93bk5vZGUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZSIsImlkZW50aWZpZXJUZXJtaW5hbE5vZGUiLCJpZGVudGlmaWVyVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQU1ELFlBQVksSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQyxTQUFDQztvQkFDMUMsSUFBTUMseUJBQXlCRCxpQkFDekJFLGdDQUFnQ0QsdUJBQXVCRSxVQUFVLElBQ2pFTixZQUFZSywrQkFBK0IsR0FBRztvQkFFcEQsT0FBT0w7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQWIxR1IsdUJBYWtJUyxVQUFVQyxZQUFZQztZQUFVOzs7V0FibEtYO0VBQThCWSxpQkFBWSJ9