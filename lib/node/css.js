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
var _occamdom = require("occam-dom");
var _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
var _constants = require("../constants");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var CSSNode = /*#__PURE__*/ function(Node) {
    _inherits(CSSNode, Node);
    function CSSNode() {
        _class_call_check(this, CSSNode);
        return _call_super(this, CSSNode, arguments);
    }
    _create_class(CSSNode, [
        {
            key: "getMarkdownStyleNode",
            value: function getMarkdownStyleNode() {
                var outerNode = this.getOuterNode(), markdownStyleNode = outerNode; ///
                return markdownStyleNode;
            }
        },
        {
            key: "getParentCSSNode",
            value: function getParentCSSNode() {
                var parentNode = this.getParentNode(), parentCSSNode = parentNode; ///
                return parentCSSNode;
            }
        },
        {
            key: "getChildCSSNodes",
            value: function getChildCSSNodes() {
                var childNodes = this.getChildNodes(), childCSSNodes = childNodes; ///
                return childCSSNodes;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var markdownStyleNode = this.getMarkdownStyleNode(), ruleName = markdownStyleNode.getRuleName();
                return ruleName;
            }
        },
        {
            key: "isTerminalNode",
            value: function isTerminalNode() {
                var terminalNode = false;
                return terminalNode;
            }
        },
        {
            key: "isNonTerminalNode",
            value: function isNonTerminalNode() {
                var nonTerminalNode = true;
                return nonTerminalNode;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(context) {
                var css = this.reduceChildNode(function(css, childNode) {
                    var childNodeCSS = childNode.asCSS(context);
                    css = "".concat(css).concat(childNodeCSS);
                    return css;
                }, _constants.EMPTY_STRING);
                return css;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _Node;
                if (Class === undefined) {
                    Class = CSSNode; ///
                }
                var cssNode = (_Node = _occamdom.Node).fromNothing.apply(_Node, [
                    Class
                ].concat(_to_consumable_array(remainingArguments)));
                return cssNode;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Node;
                if (outerNode === undefined) {
                    outerNode = Class; ///
                    Class = CSSNode; ///
                }
                var cssNode = (_Node = _occamdom.Node).fromOuterNode.apply(_Node, [
                    Class,
                    outerNode
                ].concat(_to_consumable_array(remainingArguments)));
                return cssNode;
            }
        },
        {
            key: "fromChildCSSNodes",
            value: function fromChildCSSNodes(Class, childCssNodes) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Node;
                if (childCssNodes === undefined) {
                    childCssNodes = Class; ///
                    Class = CSSNode; ///
                }
                var childNodes = childCssNodes, cssNode = (_Node = _occamdom.Node).fromChildNodes.apply(_Node, [
                    Class,
                    childNodes
                ].concat(_to_consumable_array(remainingArguments)));
                return cssNode;
            }
        }
    ]);
    return CSSNode;
}(_wrap_native_super(_occamdom.Node));
Object.assign(CSSNode.prototype, _node.default);
var _default = CSSNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2Nzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IG5vZGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9ub2RlXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQ1NTTm9kZSBleHRlbmRzIE5vZGUge1xuICBnZXRNYXJrZG93blN0eWxlTm9kZSgpIHtcbiAgICBjb25zdCBvdXRlck5vZGUgPSB0aGlzLmdldE91dGVyTm9kZSgpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVOb2RlID0gb3V0ZXJOb2RlOyAvLy9cblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlTm9kZTtcbiAgfVxuXG4gIGdldFBhcmVudENTU05vZGUoKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuZ2V0UGFyZW50Tm9kZSgpLFxuICAgICAgICAgIHBhcmVudENTU05vZGUgPSBwYXJlbnROb2RlOyAvLy9cblxuICAgIHJldHVybiBwYXJlbnRDU1NOb2RlO1xuICB9XG5cbiAgZ2V0Q2hpbGRDU1NOb2RlcygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGRDU1NOb2RlcyA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkQ1NTTm9kZXM7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZU5vZGUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IG1hcmtkb3duU3R5bGVOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFzQ1NTKGNvbnRleHQpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY3NzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUNTUyA9IGNoaWxkTm9kZS5hc0NTUyhjb250ZXh0KTtcblxuICAgICAgY3NzID0gYCR7Y3NzfSR7Y2hpbGROb2RlQ1NTfWA7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IENTU05vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNzc05vZGUgPSBOb2RlLmZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNzc05vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAob3V0ZXJOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG91dGVyTm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gQ1NTTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY3NzTm9kZSA9IE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNzc05vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNoaWxkQ1NTTm9kZXMoQ2xhc3MsIGNoaWxkQ3NzTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjaGlsZENzc05vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkQ3NzTm9kZXMgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IENTU05vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBjaGlsZENzc05vZGVzLCAvLy9cbiAgICAgICAgICBjc3NOb2RlID0gTm9kZS5mcm9tQ2hpbGROb2RlcyhDbGFzcywgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjc3NOb2RlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ1NTTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBDU1NOb2RlO1xuIl0sIm5hbWVzIjpbIkNTU05vZGUiLCJnZXRNYXJrZG93blN0eWxlTm9kZSIsIm91dGVyTm9kZSIsImdldE91dGVyTm9kZSIsIm1hcmtkb3duU3R5bGVOb2RlIiwiZ2V0UGFyZW50Q1NTTm9kZSIsInBhcmVudE5vZGUiLCJnZXRQYXJlbnROb2RlIiwicGFyZW50Q1NTTm9kZSIsImdldENoaWxkQ1NTTm9kZXMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkQ1NTTm9kZXMiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImFzQ1NTIiwiY29udGV4dCIsImNzcyIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUNTUyIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJOb2RlIiwidW5kZWZpbmVkIiwiY3NzTm9kZSIsImZyb21PdXRlck5vZGUiLCJmcm9tQ2hpbGRDU1NOb2RlcyIsImNoaWxkQ3NzTm9kZXMiLCJmcm9tQ2hpbGROb2RlcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1HQTs7O2VBQUE7Ozt3QkFqR3FCOzJEQUVFO3lCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCQyxvQkFBb0JGLFdBQVcsR0FBRztnQkFFeEMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsZ0JBQWdCRixZQUFZLEdBQUc7Z0JBRXJDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGdCQUFnQkYsWUFBWSxHQUFHO2dCQUVyQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ULG9CQUFvQixJQUFJLENBQUNILG9CQUFvQixJQUM3Q2EsV0FBV1Ysa0JBQWtCUyxXQUFXO2dCQUU5QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCO2dCQUV4QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBTUMsTUFBTSxJQUFJLENBQUNDLGVBQWUsQ0FBQyxTQUFDRCxLQUFLRTtvQkFDckMsSUFBTUMsZUFBZUQsVUFBVUosS0FBSyxDQUFDQztvQkFFckNDLE1BQU0sQUFBQyxHQUFRRyxPQUFOSCxLQUFtQixPQUFiRztvQkFFZixPQUFPSDtnQkFDVCxHQUFHSSx1QkFBWTtnQkFFZixPQUFPSjtZQUNUOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUs7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFLN0JDO2dCQUpoQixJQUFJRixVQUFVRyxXQUFXO29CQUN2QkgsUUF2REEzQixTQXVEaUIsR0FBRztnQkFDdEI7Z0JBRUEsSUFBTStCLFVBQVVGLENBQUFBLFFBQUFBLGNBQUksRUFBQ0gsV0FBVyxPQUFoQkcsT0FBQUE7b0JBQWlCRjtpQkFBNkIsQ0FBOUNFLE9BQXdCLHFCQUFHRDtnQkFFM0MsT0FBT0c7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNMLEtBQUssRUFBRXpCLFNBQVM7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUcwQixxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBTzFDQztnQkFOaEIsSUFBSTNCLGNBQWM0QixXQUFXO29CQUMzQjVCLFlBQVl5QixPQUFRLEdBQUc7b0JBRXZCQSxRQW5FQTNCLFNBbUVpQixHQUFHO2dCQUN0QjtnQkFFQSxJQUFNK0IsVUFBVUYsQ0FBQUEsUUFBQUEsY0FBSSxFQUFDRyxhQUFhLE9BQWxCSCxPQUFBQTtvQkFBbUJGO29CQUFPekI7aUJBQWlDLENBQTNEMkIsT0FBcUMscUJBQUdEO2dCQUV4RCxPQUFPRztZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCTixLQUFLLEVBQUVPLGFBQWE7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdOLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFRbERDO2dCQVBoQixJQUFJSyxrQkFBa0JKLFdBQVc7b0JBQy9CSSxnQkFBZ0JQLE9BQVEsR0FBRztvQkFFM0JBLFFBL0VBM0IsU0ErRWlCLEdBQUc7Z0JBQ3RCO2dCQUVBLElBQU1VLGFBQWF3QixlQUNiSCxVQUFVRixDQUFBQSxRQUFBQSxjQUFJLEVBQUNNLGNBQWMsT0FBbkJOLE9BQUFBO29CQUFvQkY7b0JBQU9qQjtpQkFBa0MsQ0FBN0RtQixPQUF1QyxxQkFBR0Q7Z0JBRTFELE9BQU9HO1lBQ1Q7OztXQXRGSS9CO3FCQUFnQjZCLGNBQUk7QUF5RjFCTyxPQUFPQyxNQUFNLENBQUNyQyxRQUFRc0MsU0FBUyxFQUFFQyxhQUFVO0lBRTNDLFdBQWV2QyJ9