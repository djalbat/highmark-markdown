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
var _token = /*#__PURE__*/ _interop_require_default(require("../mixins/token"));
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
Object.assign(MarkdownNode.prototype, _token.default);
var _default = MarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCB0b2tlbk1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Rva2VuXCI7XG5cbmNsYXNzIE1hcmtkb3duTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFBhcmVudE1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgcGFyZW50TWFya2Rvd25Ob2RlID0gcGFyZW50Tm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcmVudE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGRNYXJrZG93bk5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIGdldEFuY2VzdG9yTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gdGhpcy5nZXRBbmNlc3Rvck5vZGVzKCksXG4gICAgICAgICAgYW5jZXN0b3JNYXJrZG93bk5vZGVzID0gYW5jZXN0b3JOb2RlczsgIC8vL1xuXG4gICAgcmV0dXJuIGFuY2VzdG9yTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHNldFBhcmVudE1hcmtkb3duTm9kZShwYXJlbnRNYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gcGFyZW50TWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICB0aGlzLnNldFBhcmVudE5vZGUocGFyZW50Tm9kZSk7XG4gIH1cblxuICBzb21lRGVzY2VuZGFudE1hcmtkb3duTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zb21lRGVzY2VuZGFudE5vZGUoY2FsbGJhY2spOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChwcmVjZWRlbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWNlZGVuY2UgPSBvcGFjaXR5OyAvLy9cblxuICAgICAgb3BhY2l0eSA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTWFya2Rvd25Ob2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBtYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihNYXJrZG93bk5vZGUucHJvdG90eXBlLCBub2RlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oTWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgdG9rZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZG93bk5vZGU7XG4iXSwibmFtZXMiOlsiTWFya2Rvd25Ob2RlIiwiZ2V0UGFyZW50TWFya2Rvd25Ob2RlIiwicGFyZW50Tm9kZSIsImdldFBhcmVudE5vZGUiLCJwYXJlbnRNYXJrZG93bk5vZGUiLCJnZXRDaGlsZE1hcmtkb3duTm9kZXMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTWFya2Rvd25Ob2RlcyIsImdldEFuY2VzdG9yTWFya2Rvd25Ob2RlcyIsImFuY2VzdG9yTm9kZXMiLCJnZXRBbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JNYXJrZG93bk5vZGVzIiwic2V0UGFyZW50TWFya2Rvd25Ob2RlIiwic2V0UGFyZW50Tm9kZSIsInNvbWVEZXNjZW5kYW50TWFya2Rvd25Ob2RlIiwiY2FsbGJhY2siLCJzb21lRGVzY2VuZGFudE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsInJ1bGVOYW1lIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJOb25UZXJtaW5hbE5vZGUiLCJ1bmRlZmluZWQiLCJtYXJrZG93bk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIiwidG9rZW5NaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJEQTs7O2VBQUE7Ozs0QkF6RGdDOzJEQUVUOzREQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMscUJBQXFCRixZQUFhLEdBQUc7Z0JBRTNDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLHFCQUFxQkYsWUFBYSxHQUFHO2dCQUUzQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQixJQUNyQ0Msd0JBQXdCRixlQUFnQixHQUFHO2dCQUVqRCxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQlQsa0JBQWtCO2dCQUN0QyxJQUFNRixhQUFhRSxvQkFBcUIsR0FBRztnQkFFM0MsSUFBSSxDQUFDVSxhQUFhLENBQUNaO1lBQ3JCOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkMsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNEO1lBQVc7Ozs7WUFFMUVFLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVkLFVBQVUsRUFBRWUsT0FBTyxFQUFFQyxVQUFVO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBYWxHQztnQkFackIsSUFBSUYsZUFBZUcsV0FBVztvQkFDNUJILGFBQWFELFNBQVMsR0FBRztvQkFFekJBLFVBQVVmLFlBQVksR0FBRztvQkFFekJBLGFBQWFjLFVBQVcsR0FBRztvQkFFM0JBLFdBQVdELE9BQU8sR0FBRztvQkFFckJBLFFBeENBbkIsY0F3Q3NCLEdBQUc7Z0JBQzNCO2dCQUVBLElBQU0wQixlQUFlRixDQUFBQSxtQkFBQUEsNkJBQWUsRUFBQ04sMENBQTBDLE9BQTFETSxrQkFBQUE7b0JBQTJETDtvQkFBT0M7b0JBQVVkO29CQUFZZTtvQkFBU0M7aUJBQWtDLENBQW5JRSxPQUE2RyxxQkFBR0Q7Z0JBRXJJLE9BQU9HO1lBQ1Q7OztXQTlDSTFCO0VBQXFCd0IsNkJBQWU7QUFpRDFDRyxPQUFPQyxNQUFNLENBQUM1QixhQUFhNkIsU0FBUyxFQUFFQyxhQUFVO0FBQ2hESCxPQUFPQyxNQUFNLENBQUM1QixhQUFhNkIsU0FBUyxFQUFFRSxjQUFXO0lBRWpELFdBQWUvQiJ9