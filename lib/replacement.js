"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Replacement;
    }
});
var _necessary = require("necessary");
var _node = require("./utilities/node");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var push = _necessary.arrayUtilities.push;
var Replacement = /*#__PURE__*/ function() {
    function Replacement(node, tokens) {
        _class_call_check(this, Replacement);
        this.node = node;
        this.tokens = tokens;
    }
    _create_class(Replacement, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                var tokens = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                push(tokens, this.tokens);
                return this.tokens;
            }
        },
        {
            key: "getChildNodes",
            value: function getChildNodes() {
                return this.node.getChildNodes();
            }
        },
        {
            key: "contract",
            value: function contract(Class, descendentNode) {
                if (descendentNode === undefined) {
                    descendentNode = Class; ///
                    Class = Replacement; ///
                }
                var node = descendentNode, tokens = this.tokens, context = {
                    tokens: tokens
                }, replacement = Class.fromNode(node, context); ///
                return replacement;
            }
        },
        {
            key: "expand",
            value: function expand(Class, ascendantNode) {
                if (ascendantNode === undefined) {
                    ascendantNode = Class;
                    Class = Replacement; ///
                }
                var node = ascendantNode, tokens = this.tokens, context = {
                    tokens: tokens
                }, replacement = Class.fromNode(node, context); ///
                return replacement;
            }
        },
        {
            key: "replace",
            value: function replace(replacedNode, parentNode, context) {
                var tokens = context.tokens, replacementChildNodes = this.getChildNodes(), replacementTokens = this.tokens, replacementNodes = replacementChildNodes; ///
                (0, _node.replaceNodes)(replacementNodes, replacedNode, parentNode);
                (0, _node.replaceTokens)(replacementTokens, replacedNode, tokens);
            }
        },
        {
            key: "appendTo",
            value: function appendTo(parentNode, context) {
                var tokens = context.tokens, replacementNode = this.node, replacementTokens = this.tokens; ///
                (0, _node.appendNode)(replacementNode, parentNode);
                (0, _node.appendTokens)(replacementTokens, parentNode, tokens);
            }
        },
        {
            key: "removeFrom",
            value: function removeFrom(removedNode, parentNode, context) {
                var tokens = context.tokens;
                (0, _node.removeTokens)(removedNode, tokens);
                (0, _node.removeNode)(removedNode, parentNode);
            }
        },
        {
            key: "clone",
            value: function clone() {
                for(var _len = arguments.length, remainingArguments = new Array(_len), _key = 0; _key < _len; _key++){
                    remainingArguments[_key] = arguments[_key];
                }
                var node = this.node.clone(), clonedTokens = clonedTokensFromNodeAndTokens(node, this.tokens);
                overwriteNodeTokens(node, clonedTokens, this.tokens);
                var Class = this.constructor, tokens = clonedTokens, replacement = _construct(Class, [
                    node,
                    tokens
                ].concat(_to_consumable_array(remainingArguments)));
                return replacement;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(Class, node, context) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                if (context === undefined) {
                    context = node; ///
                    node = Class; ///
                    Class = Replacement; ///
                }
                var tokens = context.tokens;
                var clonedTokens = clonedTokensFromNodeAndTokens(node, tokens), leadingIndex = (0, _node.leadingIndexFromNodeAndTokens)(node, tokens), offset = leadingIndex; ///
                node = node.clone(); ///
                overwriteNodeTokens(node, clonedTokens, tokens, offset);
                tokens = clonedTokens; ///
                var replacement = _construct(Class, [
                    node,
                    tokens
                ].concat(_to_consumable_array(remainingArguments)));
                return replacement;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(Class, node, tokens) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                if (tokens === undefined) {
                    tokens = node; ///
                    node = Class; ///
                    Class = Replacement; ///
                }
                var replacement = _construct(Class, [
                    node,
                    tokens
                ].concat(_to_consumable_array(remainingArguments)));
                return replacement;
            }
        }
    ]);
    return Replacement;
}();
function overwriteNodeTokens(node, clonedTokens, tokens) {
    var offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node; ///
        overwriteTerminalNodeTokens(terminalNode, clonedTokens, tokens, offset);
    } else {
        var nonTerminalNode = node; ///
        overwriteNonTerminalNodeTokens(nonTerminalNode, clonedTokens, tokens, offset);
    }
}
function overwriteChildNodesTokens(childNodes, clonedTokens, tokens, offset) {
    childNodes.forEach(function(childNode) {
        var node = childNode; ///
        overwriteNodeTokens(node, clonedTokens, tokens, offset);
    });
}
function overwriteTerminalNodeTokens(terminalNode, clonedTokens, tokens, offset) {
    var index, significantToken;
    significantToken = terminalNode.getSignificantToken();
    if (significantToken !== null) {
        index = tokens.indexOf(significantToken);
        index -= offset;
        var clonedToken = clonedTokens[index];
        significantToken = clonedToken; ///
        terminalNode.setSignificantToken(significantToken);
    }
}
function overwriteNonTerminalNodeTokens(nonTerminalNode, clonedTokens, tokens, offset) {
    var childNodes = nonTerminalNode.getChildNodes();
    overwriteChildNodesTokens(childNodes, clonedTokens, tokens, offset);
}
function clonedTokensFromNodeAndTokens(node, tokens) {
    var leadingIndex = (0, _node.leadingIndexFromNodeAndTokens)(node, tokens), trailingIndex = (0, _node.trailingIndexFromNodeAndTokens)(node, tokens), start = leadingIndex, end = trailingIndex + 1;
    tokens = tokens.slice(start, end); ///
    var clonedTokens = tokens.map(function(token) {
        var clonedToken = token.clone();
        return clonedToken;
    });
    return clonedTokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHJlbW92ZU5vZGUsIGFwcGVuZE5vZGUsIHJlbW92ZVRva2VucywgYXBwZW5kVG9rZW5zLCByZXBsYWNlTm9kZXMsIHJlcGxhY2VUb2tlbnMsIGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zLCB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnModG9rZW5zID0gW10pIHtcbiAgICBwdXNoKHRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHsgcmV0dXJuIHRoaXMubm9kZS5nZXRDaGlsZE5vZGVzKCk7IH1cblxuICBjb250cmFjdChDbGFzcywgZGVzY2VuZGVudE5vZGUpIHtcbiAgICBpZiAoZGVzY2VuZGVudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVzY2VuZGVudE5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUmVwbGFjZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gZGVzY2VuZGVudE5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLnRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHsgLy8vXG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcGxhY2VtZW50ID0gQ2xhc3MuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIGV4cGFuZChDbGFzcywgYXNjZW5kYW50Tm9kZSkge1xuICAgIGlmIChhc2NlbmRhbnROb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFzY2VuZGFudE5vZGUgPSBDbGFzcztcblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBhc2NlbmRhbnROb2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLnRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBDbGFzcy5mcm9tTm9kZShub2RlLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG5cbiAgcmVwbGFjZShyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSB0aGlzLnRva2VucywgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZXMgPSByZXBsYWNlbWVudENoaWxkTm9kZXM7IC8vL1xuXG4gICAgcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgYXBwZW5kTm9kZShyZXBsYWNlbWVudE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgYXBwZW5kVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCBwYXJlbnROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgcmVtb3ZlVG9rZW5zKHJlbW92ZWROb2RlLCB0b2tlbnMpO1xuXG4gICAgcmVtb3ZlTm9kZShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSk7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlLmNsb25lKCksXG4gICAgICAgICAgY2xvbmVkVG9rZW5zID0gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgb3ZlcndyaXRlTm9kZVRva2Vucyhub2RlLCBjbG9uZWRUb2tlbnMsIHRoaXMudG9rZW5zKTtcblxuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB0b2tlbnMgPSBjbG9uZWRUb2tlbnMsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudFxuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKENsYXNzLCBub2RlLCBjb250ZXh0LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gbm9kZTsgLy8vXG5cbiAgICAgIG5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUmVwbGFjZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBsZXQgeyB0b2tlbnMgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBjbG9uZWRUb2tlbnMgPSBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGxlYWRpbmdJbmRleCA9IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgb2Zmc2V0ID0gbGVhZGluZ0luZGV4OyAgLy8vXG5cbiAgICBub2RlID0gbm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuXG4gICAgdG9rZW5zID0gY2xvbmVkVG9rZW5zOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2VucyhDbGFzcywgbm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodG9rZW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRva2VucyA9IG5vZGU7ICAvLy9cblxuICAgICAgbm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVDaGlsZE5vZGVzVG9rZW5zKGNoaWxkTm9kZXMsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpIHtcbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgIG92ZXJ3cml0ZU5vZGVUb2tlbnMobm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGxldCBpbmRleCxcbiAgICAgIHNpZ25pZmljYW50VG9rZW47XG5cbiAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgaW5kZXggLT0gb2Zmc2V0O1xuXG4gICAgY29uc3QgY2xvbmVkVG9rZW4gPSBjbG9uZWRUb2tlbnNbaW5kZXhdO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IGNsb25lZFRva2VuOyAgLy8vXG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIG92ZXJ3cml0ZUNoaWxkTm9kZXNUb2tlbnMoY2hpbGROb2RlcywgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG59XG5cbmZ1bmN0aW9uIGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBsZWFkaW5nSW5kZXggPSBsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICB0cmFpbGluZ0luZGV4ID0gdHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gbGVhZGluZ0luZGV4LCAgLy8vXG4gICAgICAgIGVuZCA9IHRyYWlsaW5nSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gIGNvbnN0IGNsb25lZFRva2VucyA9IHRva2Vucy5tYXAoKHRva2VuKSA9PiB7ICAvLy9cbiAgICBjb25zdCBjbG9uZWRUb2tlbiA9IHRva2VuLmNsb25lKCk7XG5cbiAgICByZXR1cm4gY2xvbmVkVG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiBjbG9uZWRUb2tlbnM7XG59XG4iXSwibmFtZXMiOlsiUmVwbGFjZW1lbnQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJub2RlIiwidG9rZW5zIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldENoaWxkTm9kZXMiLCJjb250cmFjdCIsIkNsYXNzIiwiZGVzY2VuZGVudE5vZGUiLCJ1bmRlZmluZWQiLCJjb250ZXh0IiwicmVwbGFjZW1lbnQiLCJmcm9tTm9kZSIsImV4cGFuZCIsImFzY2VuZGFudE5vZGUiLCJyZXBsYWNlIiwicmVwbGFjZWROb2RlIiwicGFyZW50Tm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZW1lbnROb2RlcyIsInJlcGxhY2VOb2RlcyIsInJlcGxhY2VUb2tlbnMiLCJhcHBlbmRUbyIsInJlcGxhY2VtZW50Tm9kZSIsImFwcGVuZE5vZGUiLCJhcHBlbmRUb2tlbnMiLCJyZW1vdmVGcm9tIiwicmVtb3ZlZE5vZGUiLCJyZW1vdmVUb2tlbnMiLCJyZW1vdmVOb2RlIiwiY2xvbmUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjbG9uZWRUb2tlbnMiLCJjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2VucyIsIm92ZXJ3cml0ZU5vZGVUb2tlbnMiLCJjb25zdHJ1Y3RvciIsImxlYWRpbmdJbmRleCIsImxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwib2Zmc2V0IiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMiLCJvdmVyd3JpdGVDaGlsZE5vZGVzVG9rZW5zIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJpbmRleCIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiaW5kZXhPZiIsImNsb25lZFRva2VuIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsInRyYWlsaW5nSW5kZXgiLCJ0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJzdGFydCIsImVuZCIsInNsaWNlIiwibWFwIiwidG9rZW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VO29CQUVnSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0osSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDRCQUFELEFBQUw7YUFBTUEsWUFDUEcsSUFBSSxFQUFFQyxNQUFNO2dDQURMSjtRQUVqQixJQUFJLENBQUNHLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUhHSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBVUYsU0FBQUEsaUVBQVMsRUFBRTtnQkFDbkJILEtBQUtHLFFBQVEsSUFBSSxDQUFDQSxNQUFNO2dCQUV4QixPQUFPLElBQUksQ0FBQ0EsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBa0IsT0FBTyxJQUFJLENBQUNKLElBQUksQ0FBQ0ksYUFBYTtZQUFJOzs7WUFFcERDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxLQUFLLEVBQUVDLGNBQWM7Z0JBQzVCLElBQUlBLG1CQUFtQkMsV0FBVztvQkFDaENELGlCQUFpQkQsT0FBTyxHQUFHO29CQUUzQkEsUUF0QmVULGFBc0JPLEdBQUc7Z0JBQzNCO2dCQUVBLElBQU1HLE9BQU9PLGdCQUNQTixTQUFTLElBQUksQ0FBQ0EsTUFBTSxFQUNwQlEsVUFBVTtvQkFDUlIsUUFBQUE7Z0JBQ0YsR0FDQVMsY0FBY0osTUFBTUssUUFBUSxDQUFDWCxNQUFNUyxVQUFXLEdBQUc7Z0JBRXZELE9BQU9DO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT04sS0FBSyxFQUFFTyxhQUFhO2dCQUN6QixJQUFJQSxrQkFBa0JMLFdBQVc7b0JBQy9CSyxnQkFBZ0JQO29CQUVoQkEsUUF2Q2VULGFBdUNPLEdBQUc7Z0JBQzNCO2dCQUVBLElBQU1HLE9BQU9hLGVBQ1BaLFNBQVMsSUFBSSxDQUFDQSxNQUFNLEVBQ3BCUSxVQUFVO29CQUNSUixRQUFBQTtnQkFDRixHQUNBUyxjQUFjSixNQUFNSyxRQUFRLENBQUNYLE1BQU1TLFVBQVcsR0FBRztnQkFFdkQsT0FBT0M7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxZQUFZLEVBQUVDLFVBQVUsRUFBRVAsT0FBTztnQkFDdkMsSUFBTSxBQUFFUixTQUFXUSxRQUFYUixRQUNGZ0Isd0JBQXdCLElBQUksQ0FBQ2IsYUFBYSxJQUMxQ2Msb0JBQW9CLElBQUksQ0FBQ2pCLE1BQU0sRUFDL0JrQixtQkFBbUJGLHVCQUF1QixHQUFHO2dCQUVuREcsSUFBQUEsa0JBQVksRUFBQ0Qsa0JBQWtCSixjQUFjQztnQkFFN0NLLElBQUFBLG1CQUFhLEVBQUNILG1CQUFtQkgsY0FBY2Q7WUFDakQ7OztZQUVBcUIsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNOLFVBQVUsRUFBRVAsT0FBTztnQkFDMUIsSUFBTSxBQUFFUixTQUFXUSxRQUFYUixRQUNGc0Isa0JBQWtCLElBQUksQ0FBQ3ZCLElBQUksRUFDM0JrQixvQkFBb0IsSUFBSSxDQUFDakIsTUFBTSxFQUFHLEdBQUc7Z0JBRTNDdUIsSUFBQUEsZ0JBQVUsRUFBQ0QsaUJBQWlCUDtnQkFFNUJTLElBQUFBLGtCQUFZLEVBQUNQLG1CQUFtQkYsWUFBWWY7WUFDOUM7OztZQUVBeUIsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLFdBQVcsRUFBRVgsVUFBVSxFQUFFUCxPQUFPO2dCQUN6QyxJQUFNLEFBQUVSLFNBQVdRLFFBQVhSO2dCQUVSMkIsSUFBQUEsa0JBQVksRUFBQ0QsYUFBYTFCO2dCQUUxQjRCLElBQUFBLGdCQUFVLEVBQUNGLGFBQWFYO1lBQzFCOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFNLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsUUFBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUN6QixJQUFNL0IsT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQzhCLEtBQUssSUFDdEJFLGVBQWVDLDhCQUE4QmpDLE1BQU0sSUFBSSxDQUFDQyxNQUFNO2dCQUVwRWlDLG9CQUFvQmxDLE1BQU1nQyxjQUFjLElBQUksQ0FBQy9CLE1BQU07Z0JBRW5ELElBQU1LLFFBQVEsSUFBSSxDQUFDNkIsV0FBVyxFQUN4QmxDLFNBQVMrQixjQUNUdEIsY0FBYyxXQUFJSixPQUFKO29CQUFVTjtvQkFBTUM7aUJBQThCLENBQTlDLE9BQXdCLHFCQUFHOEI7Z0JBRS9DLE9BQU9yQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNMLEtBQUssRUFBRU4sSUFBSSxFQUFFUyxPQUFPO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHc0IscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUN6RCxJQUFJdEIsWUFBWUQsV0FBVztvQkFDekJDLFVBQVVULE1BQU0sR0FBRztvQkFFbkJBLE9BQU9NLE9BQU8sR0FBRztvQkFFakJBLFFBcEdlVCxhQW9HTyxHQUFHO2dCQUMzQjtnQkFFQSxJQUFJLEFBQUVJLFNBQVdRLFFBQVhSO2dCQUVOLElBQU0rQixlQUFlQyw4QkFBOEJqQyxNQUFNQyxTQUNuRG1DLGVBQWVDLElBQUFBLG1DQUE2QixFQUFDckMsTUFBTUMsU0FDbkRxQyxTQUFTRixjQUFlLEdBQUc7Z0JBRWpDcEMsT0FBT0EsS0FBSzhCLEtBQUssSUFBSyxHQUFHO2dCQUV6Qkksb0JBQW9CbEMsTUFBTWdDLGNBQWMvQixRQUFRcUM7Z0JBRWhEckMsU0FBUytCLGNBQWMsR0FBRztnQkFFMUIsSUFBTXRCLGNBQWMsV0FBSUosT0FBSjtvQkFBVU47b0JBQU1DO2lCQUE4QixDQUE5QyxPQUF3QixxQkFBRzhCO2dCQUUvQyxPQUFPckI7WUFDVDs7O1lBRU82QixLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JqQyxLQUFLLEVBQUVOLElBQUksRUFBRUMsTUFBTTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBRzhCLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDakUsSUFBSTlCLFdBQVdPLFdBQVc7b0JBQ3hCUCxTQUFTRCxNQUFPLEdBQUc7b0JBRW5CQSxPQUFPTSxPQUFPLEdBQUc7b0JBRWpCQSxRQTlIZVQsYUE4SE8sR0FBRztnQkFDM0I7Z0JBRUEsSUFBTWEsY0FBYyxXQUFJSixPQUFKO29CQUFVTjtvQkFBTUM7aUJBQThCLENBQTlDLE9BQXdCLHFCQUFHOEI7Z0JBRS9DLE9BQU9yQjtZQUNUOzs7V0FwSW1CYjs7QUF1SXJCLFNBQVNxQyxvQkFBb0JsQyxJQUFJLEVBQUVnQyxZQUFZLEVBQUUvQixNQUFNO1FBQUVxQyxTQUFBQSxpRUFBUztJQUNoRSxJQUFNRSxtQkFBbUJ4QyxLQUFLeUMsY0FBYztJQUU1QyxJQUFJRCxrQkFBa0I7UUFDcEIsSUFBTUUsZUFBZTFDLE1BQU8sR0FBRztRQUUvQjJDLDRCQUE0QkQsY0FBY1YsY0FBYy9CLFFBQVFxQztJQUNsRSxPQUFPO1FBQ0wsSUFBTU0sa0JBQWtCNUMsTUFBTyxHQUFHO1FBRWxDNkMsK0JBQStCRCxpQkFBaUJaLGNBQWMvQixRQUFRcUM7SUFDeEU7QUFDRjtBQUVBLFNBQVNRLDBCQUEwQkMsVUFBVSxFQUFFZixZQUFZLEVBQUUvQixNQUFNLEVBQUVxQyxNQUFNO0lBQ3pFUyxXQUFXQyxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBTWpELE9BQU9pRCxXQUFXLEdBQUc7UUFFM0JmLG9CQUFvQmxDLE1BQU1nQyxjQUFjL0IsUUFBUXFDO0lBQ2xEO0FBQ0Y7QUFFQSxTQUFTSyw0QkFBNEJELFlBQVksRUFBRVYsWUFBWSxFQUFFL0IsTUFBTSxFQUFFcUMsTUFBTTtJQUM3RSxJQUFJWSxPQUNBQztJQUVKQSxtQkFBbUJULGFBQWFVLG1CQUFtQjtJQUVuRCxJQUFJRCxxQkFBcUIsTUFBTTtRQUM3QkQsUUFBUWpELE9BQU9vRCxPQUFPLENBQUNGO1FBRXZCRCxTQUFTWjtRQUVULElBQU1nQixjQUFjdEIsWUFBWSxDQUFDa0IsTUFBTTtRQUV2Q0MsbUJBQW1CRyxhQUFjLEdBQUc7UUFFcENaLGFBQWFhLG1CQUFtQixDQUFDSjtJQUNuQztBQUNGO0FBRUEsU0FBU04sK0JBQStCRCxlQUFlLEVBQUVaLFlBQVksRUFBRS9CLE1BQU0sRUFBRXFDLE1BQU07SUFDbkYsSUFBTVMsYUFBYUgsZ0JBQWdCeEMsYUFBYTtJQUVoRDBDLDBCQUEwQkMsWUFBWWYsY0FBYy9CLFFBQVFxQztBQUM5RDtBQUVBLFNBQVNMLDhCQUE4QmpDLElBQUksRUFBRUMsTUFBTTtJQUNqRCxJQUFNbUMsZUFBZUMsSUFBQUEsbUNBQTZCLEVBQUNyQyxNQUFNQyxTQUNuRHVELGdCQUFnQkMsSUFBQUEsb0NBQThCLEVBQUN6RCxNQUFNQyxTQUNyRHlELFFBQVF0QixjQUNSdUIsTUFBTUgsZ0JBQWdCO0lBRTVCdkQsU0FBU0EsT0FBTzJELEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO0lBRXZDLElBQU0zQixlQUFlL0IsT0FBTzRELEdBQUcsQ0FBQyxTQUFDQztRQUMvQixJQUFNUixjQUFjUSxNQUFNaEMsS0FBSztRQUUvQixPQUFPd0I7SUFDVDtJQUVBLE9BQU90QjtBQUNUIn0=