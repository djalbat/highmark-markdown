"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockStartMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _className = /*#__PURE__*/ _interop_require_default(require("./className"));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var BlockStartMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(BlockStartMarkdownNode, MarkdownNode);
    function BlockStartMarkdownNode() {
        _class_call_check(this, BlockStartMarkdownNode);
        return _call_super(this, BlockStartMarkdownNode, arguments);
    }
    _create_class(BlockStartMarkdownNode, [
        {
            key: "className",
            value: function className(context) {
                var className = this.fromSecondChildNode(function(secondChildNode) {
                    var className = null;
                    var secondChildNodeClassNameMarkdownNode = _instanceof(secondChildNode, _className.default);
                    if (secondChildNodeClassNameMarkdownNode) {
                        var classNameMarkdownNode = secondChildNode; ///
                        className = classNameMarkdownNode.className(context);
                    }
                    return className;
                });
                return className;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(BlockStartMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return BlockStartMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrU3RhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBDbGFzc05hbWVNYXJrZG93bk5vZGUgZnJvbSBcIi4vY2xhc3NOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrU3RhcnRNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICBsZXQgY2xhc3NOYW1lID0gbnVsbDtcblxuICAgICAgY29uc3Qgc2Vjb25kQ2hpbGROb2RlQ2xhc3NOYW1lTWFya2Rvd25Ob2RlID0gKHNlY29uZENoaWxkTm9kZSBpbnN0YW5jZW9mIENsYXNzTmFtZU1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChzZWNvbmRDaGlsZE5vZGVDbGFzc05hbWVNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lTWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lTWFya2Rvd25Ob2RlLmNsYXNzTmFtZShjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShCbG9ja1N0YXJ0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja1N0YXJ0TWFya2Rvd25Ob2RlIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImZyb21TZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmRDaGlsZE5vZGVDbGFzc05hbWVNYXJrZG93bk5vZGUiLCJDbGFzc05hbWVNYXJrZG93bk5vZGUiLCJjbGFzc05hbWVNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OytEQUhJO2dFQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE9BQU87Z0JBQ2YsSUFBTUQsWUFBWSxJQUFJLENBQUNFLG1CQUFtQixDQUFDLFNBQUNDO29CQUMxQyxJQUFJSCxZQUFZO29CQUVoQixJQUFNSSx1Q0FBd0NELEFBQWUsWUFBZkEsaUJBQTJCRSxrQkFBcUI7b0JBRTlGLElBQUlELHNDQUFzQzt3QkFDeEMsSUFBTUUsd0JBQXdCSCxpQkFBa0IsR0FBRzt3QkFFbkRILFlBQVlNLHNCQUFzQk4sU0FBUyxDQUFDQztvQkFDOUM7b0JBRUEsT0FBT0Q7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQW5CMUdSLHdCQW1CbUlTLFVBQVVDLFlBQVlDO1lBQVU7OztXQW5CbktYO0VBQStCWSxpQkFBWSJ9