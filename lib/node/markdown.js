"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _occamparsers = require("occam-parsers");
var _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var MarkdownNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(MarkdownNode, NonTerminalNode);
    function MarkdownNode() {
        _class_call_check(this, MarkdownNode);
        return _call_super(this, MarkdownNode, arguments);
    }
    _create_class(MarkdownNode, [
        {
            key: "getParentMarkdownNode",
            value: function getParentMarkdownNode() {
                var parentNode = this.getParentNode(), parentMarkdownNode = parentNode; ///
                return parentMarkdownNode;
            }
        },
        {
            key: "getChildMarkdownNodes",
            value: function getChildMarkdownNodes() {
                var childNodes = this.getChildNodes(), childMarkdownNodes = childNodes; ///
                return childMarkdownNodes;
            }
        },
        {
            key: "getAncestorMarkdownNodes",
            value: function getAncestorMarkdownNodes() {
                var ancestorNodes = this.getAncestorNodes(), ancestorMarkdownNodes = ancestorNodes; ///
                return ancestorMarkdownNodes;
            }
        },
        {
            key: "setParentMarkdownNode",
            value: function setParentMarkdownNode(parentMarkdownNode) {
                var parentNode = parentMarkdownNode; ///
                this.setParentNode(parentNode);
            }
        },
        {
            key: "someDescendantMarkdownNode",
            value: function someDescendantMarkdownNode(callback) {
                return this.someDescendantNode(callback);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                var _NonTerminalNode;
                if (opacity === undefined) {
                    opacity = childNodes; ///
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = MarkdownNode; ///
                }
                var markdownNode = (_NonTerminalNode = _occamparsers.NonTerminalNode).fromRuleNameChildNodesAndOpacity.apply(_NonTerminalNode, [
                    Class,
                    ruleName,
                    childNodes,
                    opacity
                ].concat(_to_consumable_array(remainingArguments)));
                return markdownNode;
            }
        }
    ]);
    return MarkdownNode;
}(_occamparsers.NonTerminalNode);
Object.assign(MarkdownNode.prototype, _node.default);
var _default = MarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcblxuY2xhc3MgTWFya2Rvd25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0UGFyZW50TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLmdldFBhcmVudE5vZGUoKSxcbiAgICAgICAgICBwYXJlbnRNYXJrZG93bk5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyZW50TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgZ2V0Q2hpbGRNYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE1hcmtkb3duTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRNYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgZ2V0QW5jZXN0b3JNYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IGFuY2VzdG9yTm9kZXMgPSB0aGlzLmdldEFuY2VzdG9yTm9kZXMoKSxcbiAgICAgICAgICBhbmNlc3Rvck1hcmtkb3duTm9kZXMgPSBhbmNlc3Rvck5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYW5jZXN0b3JNYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgc2V0UGFyZW50TWFya2Rvd25Ob2RlKHBhcmVudE1hcmtkb3duTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBwYXJlbnRNYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHRoaXMuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcbiAgfVxuXG4gIHNvbWVEZXNjZW5kYW50TWFya2Rvd25Ob2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnNvbWVEZXNjZW5kYW50Tm9kZShjYWxsYmFjayk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAob3BhY2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXJrZG93bk5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgbm9kZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duTm9kZTtcbiJdLCJuYW1lcyI6WyJNYXJrZG93bk5vZGUiLCJnZXRQYXJlbnRNYXJrZG93bk5vZGUiLCJwYXJlbnROb2RlIiwiZ2V0UGFyZW50Tm9kZSIsInBhcmVudE1hcmtkb3duTm9kZSIsImdldENoaWxkTWFya2Rvd25Ob2RlcyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGRNYXJrZG93bk5vZGVzIiwiZ2V0QW5jZXN0b3JNYXJrZG93bk5vZGVzIiwiYW5jZXN0b3JOb2RlcyIsImdldEFuY2VzdG9yTm9kZXMiLCJhbmNlc3Rvck1hcmtkb3duTm9kZXMiLCJzZXRQYXJlbnRNYXJrZG93bk5vZGUiLCJzZXRQYXJlbnROb2RlIiwic29tZURlc2NlbmRhbnRNYXJrZG93bk5vZGUiLCJjYWxsYmFjayIsInNvbWVEZXNjZW5kYW50Tm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiQ2xhc3MiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJOb25UZXJtaW5hbE5vZGUiLCJ1bmRlZmluZWQiLCJtYXJrZG93bk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1REE7OztlQUFBOzs7NEJBckRnQzsyREFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxxQkFBcUJGLFlBQWEsR0FBRztnQkFFM0MsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMscUJBQXFCRixZQUFhLEdBQUc7Z0JBRTNDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDQyx3QkFBd0JGLGVBQWdCLEdBQUc7Z0JBRWpELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCVCxrQkFBa0I7Z0JBQ3RDLElBQU1GLGFBQWFFLG9CQUFxQixHQUFHO2dCQUUzQyxJQUFJLENBQUNVLGFBQWEsQ0FBQ1o7WUFDckI7OztZQUVBYSxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0Q7WUFBVzs7OztZQUUxRUUsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxLQUFLLEVBQUVDLFFBQVEsRUFBRWQsVUFBVSxFQUFFZSxPQUFPO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBVzVFQztnQkFWckIsSUFBSUYsWUFBWUcsV0FBVztvQkFDekJILFVBQVVmLFlBQVksR0FBRztvQkFFekJBLGFBQWFjLFVBQVcsR0FBRztvQkFFM0JBLFdBQVdELE9BQU8sR0FBRztvQkFFckJBLFFBdENBbkIsY0FzQ3NCLEdBQUc7Z0JBQzNCO2dCQUVBLElBQU15QixlQUFlRixDQUFBQSxtQkFBQUEsNkJBQWUsRUFBQ0wsZ0NBQWdDLE9BQWhESyxrQkFBQUE7b0JBQWlESjtvQkFBT0M7b0JBQVVkO29CQUFZZTtpQkFBK0IsQ0FBN0dFLE9BQXVGLHFCQUFHRDtnQkFFL0csT0FBT0c7WUFDVDs7O1dBNUNJekI7RUFBcUJ1Qiw2QkFBZTtBQStDMUNHLE9BQU9DLE1BQU0sQ0FBQzNCLGFBQWE0QixTQUFTLEVBQUVDLGFBQVU7SUFFaEQsV0FBZTdCIn0=