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
                var node = (_Node = _occamdom.Node).fromNothing.apply(_Node, [
                    Class
                ].concat(_to_consumable_array(remainingArguments)));
                return node;
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
                var node = (_Node = _occamdom.Node).fromOuterNode.apply(_Node, [
                    Class,
                    outerNode
                ].concat(_to_consumable_array(remainingArguments)));
                return node;
            }
        },
        {
            key: "fromChildNodes",
            value: function fromChildNodes(Class, childNodes) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Node;
                if (childNodes === undefined) {
                    childNodes = Class; ///
                    Class = CSSNode; ///
                }
                var node = (_Node = _occamdom.Node).fromChildNodes.apply(_Node, [
                    Class,
                    childNodes
                ].concat(_to_consumable_array(remainingArguments)));
                return node;
            }
        }
    ]);
    return CSSNode;
}(_wrap_native_super(_occamdom.Node));
Object.assign(CSSNode.prototype, _node.default);
var _default = CSSNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2Nzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IG5vZGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9ub2RlXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQ1NTTm9kZSBleHRlbmRzIE5vZGUge1xuICBnZXRNYXJrZG93blN0eWxlTm9kZSgpIHtcbiAgICBjb25zdCBvdXRlck5vZGUgPSB0aGlzLmdldE91dGVyTm9kZSgpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVOb2RlID0gb3V0ZXJOb2RlOyAvLy9cblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlTm9kZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVOb2RlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlTm9kZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gbWFya2Rvd25TdHlsZU5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYXNDU1MoY29udGV4dCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjc3MsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlQ1NTID0gY2hpbGROb2RlLmFzQ1NTKGNvbnRleHQpO1xuXG4gICAgICBjc3MgPSBgJHtjc3N9JHtjaGlsZE5vZGVDU1N9YDtcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gQ1NTTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChvdXRlck5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3V0ZXJOb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBDU1NOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gTm9kZS5mcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2hpbGROb2RlcyhDbGFzcywgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gQ1NTTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IE5vZGUuZnJvbUNoaWxkTm9kZXMoQ2xhc3MsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENTU05vZGUucHJvdG90eXBlLCBub2RlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgQ1NTTm9kZTtcbiJdLCJuYW1lcyI6WyJDU1NOb2RlIiwiZ2V0TWFya2Rvd25TdHlsZU5vZGUiLCJvdXRlck5vZGUiLCJnZXRPdXRlck5vZGUiLCJtYXJrZG93blN0eWxlTm9kZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiYXNDU1MiLCJjb250ZXh0IiwiY3NzIiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlQ1NTIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIk5vZGUiLCJ1bmRlZmluZWQiLCJub2RlIiwiZnJvbU91dGVyTm9kZSIsImZyb21DaGlsZE5vZGVzIiwiY2hpbGROb2RlcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9GQTs7O2VBQUE7Ozt3QkFsRnFCOzJEQUVFO3lCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCQyxvQkFBb0JGLFdBQVcsR0FBRztnQkFFeEMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFN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