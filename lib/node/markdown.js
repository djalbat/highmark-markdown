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
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++){
                    remainingArguments[_key - 5] = arguments[_key];
                }
                var _NonTerminalNode;
                if (precedence === undefined) {
                    precedence = opacity; ///
                    opacity = childNodes; ///
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = MarkdownNode; ///
                }
                var markdownNode = (_NonTerminalNode = _occamparsers.NonTerminalNode).fromRuleNameChildNodesOpacityAndPrecedence.apply(_NonTerminalNode, [
                    Class,
                    ruleName,
                    childNodes,
                    opacity,
                    precedence
                ].concat(_to_consumable_array(remainingArguments)));
                return markdownNode;
            }
        }
    ]);
    return MarkdownNode;
}(_occamparsers.NonTerminalNode);
Object.assign(MarkdownNode.prototype, _node.default);
var _default = MarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcblxuY2xhc3MgTWFya2Rvd25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0UGFyZW50TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLmdldFBhcmVudE5vZGUoKSxcbiAgICAgICAgICBwYXJlbnRNYXJrZG93bk5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyZW50TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgZ2V0Q2hpbGRNYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE1hcmtkb3duTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRNYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgZ2V0QW5jZXN0b3JNYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IGFuY2VzdG9yTm9kZXMgPSB0aGlzLmdldEFuY2VzdG9yTm9kZXMoKSxcbiAgICAgICAgICBhbmNlc3Rvck1hcmtkb3duTm9kZXMgPSBhbmNlc3Rvck5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYW5jZXN0b3JNYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgc2V0UGFyZW50TWFya2Rvd25Ob2RlKHBhcmVudE1hcmtkb3duTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBwYXJlbnRNYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHRoaXMuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcbiAgfVxuXG4gIHNvbWVEZXNjZW5kYW50TWFya2Rvd25Ob2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnNvbWVEZXNjZW5kYW50Tm9kZShjYWxsYmFjayk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IG9wYWNpdHk7IC8vL1xuXG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXJrZG93bk5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1hcmtkb3duTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZG93bk5vZGU7XG4iXSwibmFtZXMiOlsiTWFya2Rvd25Ob2RlIiwiZ2V0UGFyZW50TWFya2Rvd25Ob2RlIiwicGFyZW50Tm9kZSIsImdldFBhcmVudE5vZGUiLCJwYXJlbnRNYXJrZG93bk5vZGUiLCJnZXRDaGlsZE1hcmtkb3duTm9kZXMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTWFya2Rvd25Ob2RlcyIsImdldEFuY2VzdG9yTWFya2Rvd25Ob2RlcyIsImFuY2VzdG9yTm9kZXMiLCJnZXRBbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JNYXJrZG93bk5vZGVzIiwic2V0UGFyZW50TWFya2Rvd25Ob2RlIiwic2V0UGFyZW50Tm9kZSIsInNvbWVEZXNjZW5kYW50TWFya2Rvd25Ob2RlIiwiY2FsbGJhY2siLCJzb21lRGVzY2VuZGFudE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsInJ1bGVOYW1lIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJOb25UZXJtaW5hbE5vZGUiLCJ1bmRlZmluZWQiLCJtYXJrZG93bk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5REE7OztlQUFBOzs7NEJBdkRnQzsyREFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLHFCQUFxQkYsWUFBYSxHQUFHO2dCQUUzQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxxQkFBcUJGLFlBQWEsR0FBRztnQkFFM0MsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyxnQkFBZ0IsSUFDckNDLHdCQUF3QkYsZUFBZ0IsR0FBRztnQkFFakQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JULGtCQUFrQjtnQkFDdEMsSUFBTUYsYUFBYUUsb0JBQXFCLEdBQUc7Z0JBRTNDLElBQUksQ0FBQ1UsYUFBYSxDQUFDWjtZQUNyQjs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNDLGtCQUFrQixDQUFDRDtZQUFXOzs7O1lBRTFFRSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLEtBQUssRUFBRUMsUUFBUSxFQUFFZCxVQUFVLEVBQUVlLE9BQU8sRUFBRUMsVUFBVTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O29CQWFsR0M7Z0JBWnJCLElBQUlGLGVBQWVHLFdBQVc7b0JBQzVCSCxhQUFhRCxTQUFTLEdBQUc7b0JBRXpCQSxVQUFVZixZQUFZLEdBQUc7b0JBRXpCQSxhQUFhYyxVQUFXLEdBQUc7b0JBRTNCQSxXQUFXRCxPQUFPLEdBQUc7b0JBRXJCQSxRQXhDQW5CLGNBd0NzQixHQUFHO2dCQUMzQjtnQkFFQSxJQUFNMEIsZUFBZUYsQ0FBQUEsbUJBQUFBLDZCQUFlLEVBQUNOLDBDQUEwQyxPQUExRE0sa0JBQUFBO29CQUEyREw7b0JBQU9DO29CQUFVZDtvQkFBWWU7b0JBQVNDO2lCQUFrQyxDQUFuSUUsT0FBNkcscUJBQUdEO2dCQUVySSxPQUFPRztZQUNUOzs7V0E5Q0kxQjtFQUFxQndCLDZCQUFlO0FBaUQxQ0csT0FBT0MsTUFBTSxDQUFDNUIsYUFBYTZCLFNBQVMsRUFBRUMsYUFBVTtJQUVoRCxXQUFlOUIifQ==