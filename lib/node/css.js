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
            key: "matchMarkdownStyleRuleName",
            value: function matchMarkdownStyleRuleName(markdownStyleRuleName) {
                var markdownStyleRuleNameA = markdownStyleRuleName; ///
                markdownStyleRuleName = this.getMarkdownStyleRuleName();
                var markdownStyleRuleNameB = markdownStyleRuleName, markdownStyleRuleNameMatches = markdownStyleRuleNameA === markdownStyleRuleNameB;
                return markdownStyleRuleNameMatches;
            }
        },
        {
            key: "getMarkdownStyleRuleName",
            value: function getMarkdownStyleRuleName() {
                var markdownStyleNode = this.getMarkdownStyleNode(), markdownStyleNodeRuleName = markdownStyleNode.getRuleName(), markdownStyleRuleName = markdownStyleNodeRuleName; ///
                return markdownStyleRuleName;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2Nzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IG5vZGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9ub2RlXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQ1NTTm9kZSBleHRlbmRzIE5vZGUge1xuICBtYXRjaE1hcmtkb3duU3R5bGVSdWxlTmFtZShtYXJrZG93blN0eWxlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlUnVsZU5hbWVBID0gbWFya2Rvd25TdHlsZVJ1bGVOYW1lOyAvLy9cblxuICAgIG1hcmtkb3duU3R5bGVSdWxlTmFtZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZVJ1bGVOYW1lKCk7XG5cbiAgICBjb25zdCBtYXJrZG93blN0eWxlUnVsZU5hbWVCID0gbWFya2Rvd25TdHlsZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBtYXJrZG93blN0eWxlUnVsZU5hbWVNYXRjaGVzID0gKG1hcmtkb3duU3R5bGVSdWxlTmFtZUEgPT09IG1hcmtkb3duU3R5bGVSdWxlTmFtZUIpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVSdWxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBnZXRNYXJrZG93blN0eWxlUnVsZU5hbWUoKSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZU5vZGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZU5vZGVSdWxlTmFtZSA9IG1hcmtkb3duU3R5bGVOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZVJ1bGVOYW1lID0gbWFya2Rvd25TdHlsZU5vZGVSdWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVOb2RlKCkge1xuICAgIGNvbnN0IG91dGVyTm9kZSA9IHRoaXMuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZU5vZGUgPSBvdXRlck5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVOb2RlO1xuICB9XG5cbiAgZ2V0UGFyZW50Q1NTTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgcGFyZW50Q1NTTm9kZSA9IHBhcmVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHBhcmVudENTU05vZGU7XG4gIH1cblxuICBnZXRDaGlsZENTU05vZGVzKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZENTU05vZGVzID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRDU1NOb2RlcztcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVOb2RlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlTm9kZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gbWFya2Rvd25TdHlsZU5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYXNDU1MoY29udGV4dCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjc3MsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlQ1NTID0gY2hpbGROb2RlLmFzQ1NTKGNvbnRleHQpO1xuXG4gICAgICBjc3MgPSBgJHtjc3N9JHtjaGlsZE5vZGVDU1N9YDtcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gQ1NTTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY3NzTm9kZSA9IE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY3NzTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChvdXRlck5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3V0ZXJOb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBDU1NOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjc3NOb2RlID0gTm9kZS5mcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY3NzTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2hpbGRDU1NOb2RlcyhDbGFzcywgY2hpbGRDc3NOb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNoaWxkQ3NzTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGRDc3NOb2RlcyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gQ1NTTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkQ3NzTm9kZXMsIC8vL1xuICAgICAgICAgIGNzc05vZGUgPSBOb2RlLmZyb21DaGlsZE5vZGVzKENsYXNzLCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNzc05vZGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDU1NOb2RlLnByb3RvdHlwZSwgbm9kZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IENTU05vZGU7XG4iXSwibmFtZXMiOlsiQ1NTTm9kZSIsIm1hdGNoTWFya2Rvd25TdHlsZVJ1bGVOYW1lIiwibWFya2Rvd25TdHlsZVJ1bGVOYW1lIiwibWFya2Rvd25TdHlsZVJ1bGVOYW1lQSIsImdldE1hcmtkb3duU3R5bGVSdWxlTmFtZSIsIm1hcmtkb3duU3R5bGVSdWxlTmFtZUIiLCJtYXJrZG93blN0eWxlUnVsZU5hbWVNYXRjaGVzIiwibWFya2Rvd25TdHlsZU5vZGUiLCJnZXRNYXJrZG93blN0eWxlTm9kZSIsIm1hcmtkb3duU3R5bGVOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm91dGVyTm9kZSIsImdldE91dGVyTm9kZSIsImdldFBhcmVudENTU05vZGUiLCJwYXJlbnROb2RlIiwiZ2V0UGFyZW50Tm9kZSIsInBhcmVudENTU05vZGUiLCJnZXRDaGlsZENTU05vZGVzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZENTU05vZGVzIiwicnVsZU5hbWUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiYXNDU1MiLCJjb250ZXh0IiwiY3NzIiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlQ1NTIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIk5vZGUiLCJ1bmRlZmluZWQiLCJjc3NOb2RlIiwiZnJvbU91dGVyTm9kZSIsImZyb21DaGlsZENTU05vZGVzIiwiY2hpbGRDc3NOb2RlcyIsImZyb21DaGlsZE5vZGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibm9kZU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0hBOzs7ZUFBQTs7O3dCQXBIcUI7MkRBRUU7eUJBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLHdCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJDLHFCQUFxQjtnQkFDOUMsSUFBTUMseUJBQXlCRCx1QkFBdUIsR0FBRztnQkFFekRBLHdCQUF3QixJQUFJLENBQUNFLHdCQUF3QjtnQkFFckQsSUFBTUMseUJBQXlCSCx1QkFDekJJLCtCQUFnQ0gsMkJBQTJCRTtnQkFFakUsT0FBT0M7WUFDVDs7O1lBRUFGLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRyxvQkFBb0IsSUFBSSxDQUFDQyxvQkFBb0IsSUFDN0NDLDRCQUE0QkYsa0JBQWtCRyxXQUFXLElBQ3pEUix3QkFBd0JPLDJCQUE0QixHQUFHO2dCQUU3RCxPQUFPUDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1HLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCTCxvQkFBb0JJLFdBQVcsR0FBRztnQkFFeEMsT0FBT0o7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsZ0JBQWdCRixZQUFZLEdBQUc7Z0JBRXJDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMs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