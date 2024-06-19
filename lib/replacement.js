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
var _replacement = require("./utilities/replacement");
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
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Class;
                if (descendentNode === undefined) {
                    descendentNode = Class; ///
                    Class = Replacement; ///
                }
                var node = descendentNode, tokens = this.tokens, context = {
                    tokens: tokens
                }, replacement = (_Class = Class).fromNode.apply(_Class, [
                    node,
                    context
                ].concat(_to_consumable_array(remainingArguments)));
                return replacement;
            }
        },
        {
            key: "expand",
            value: function expand(Class, ascendantNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Class;
                if (ascendantNode === undefined) {
                    ascendantNode = Class;
                    Class = Replacement; ///
                }
                var node = ascendantNode, tokens = this.tokens, context = {
                    tokens: tokens
                }, replacement = (_Class = Class).fromNode.apply(_Class, [
                    node,
                    context
                ].concat(_to_consumable_array(remainingArguments)));
                return replacement;
            }
        },
        {
            key: "appendTo",
            value: function appendTo(parentNode, context) {
                var tokens = context.tokens, appendedNode = this.node, appendedTokens = this.tokens; ///
                (0, _replacement.appendNode)(appendedNode, parentNode);
                (0, _replacement.appendTokens)(appendedTokens, parentNode, tokens);
            }
        },
        {
            key: "addAfter",
            value: function addAfter(existingNode, parentNode, context) {
                var tokens = context.tokens, addedNodes = this.getChildNodes(), addedTokens = this.tokens; ///
                (0, _replacement.addNodesAfter)(existingNode, addedNodes, parentNode);
                (0, _replacement.addTokensAfter)(existingNode, addedTokens, tokens);
            }
        },
        {
            key: "replace",
            value: function replace(replacedNode, parentNode, context) {
                var tokens = context.tokens, replacementNode = this.node, replacementTokens = this.tokens; ///
                (0, _replacement.replaceNode)(replacementNode, replacedNode, parentNode);
                (0, _replacement.replaceTokens)(replacementTokens, replacedNode, tokens);
            }
        },
        {
            key: "replaceEx",
            value: function replaceEx(replacedNode, parentNode, context) {
                var tokens = context.tokens, replacementChildNodes = this.getChildNodes(), replacementTokens = this.tokens, replacementNodes = replacementChildNodes; ///
                (0, _replacement.replaceNodes)(replacementNodes, replacedNode, parentNode);
                (0, _replacement.replaceTokens)(replacementTokens, replacedNode, tokens);
            }
        },
        {
            key: "removeFrom",
            value: function removeFrom(removedNode, parentNode, context) {
                var tokens = context.tokens;
                (0, _replacement.removeTokens)(removedNode, tokens);
                (0, _replacement.removeNode)(removedNode, parentNode);
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
    childNodes.forEach(function(childNode) {
        var node = childNode; ///
        overwriteNodeTokens(node, clonedTokens, tokens, offset);
    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zLCB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgcmVtb3ZlTm9kZSwgYXBwZW5kTm9kZSwgcmVtb3ZlVG9rZW5zLCBhcHBlbmRUb2tlbnMsIHJlcGxhY2VOb2RlLCByZXBsYWNlTm9kZXMsIHJlcGxhY2VUb2tlbnMsIGFkZE5vZGVzQWZ0ZXIsIGFkZFRva2Vuc0FmdGVyIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3JlcGxhY2VtZW50XCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2Vucyh0b2tlbnMgPSBbXSkge1xuICAgIHB1c2godG9rZW5zLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkgeyByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkTm9kZXMoKTsgfVxuXG4gIGNvbnRyYWN0KENsYXNzLCBkZXNjZW5kZW50Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGRlc2NlbmRlbnROb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlc2NlbmRlbnROb2RlID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJlcGxhY2VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGRlc2NlbmRlbnROb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7IC8vL1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXBsYWNlbWVudCA9IENsYXNzLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cblxuICBleHBhbmQoQ2xhc3MsIGFzY2VuZGFudE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChhc2NlbmRhbnROb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFzY2VuZGFudE5vZGUgPSBDbGFzcztcblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBhc2NlbmRhbnROb2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLnRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBDbGFzcy5mcm9tTm9kZShub2RlLCBjb250ZXh0LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG5cbiAgYXBwZW5kVG8ocGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGFwcGVuZGVkTm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgIGFwcGVuZGVkVG9rZW5zID0gdGhpcy50b2tlbnM7ICAvLy9cblxuICAgIGFwcGVuZE5vZGUoYXBwZW5kZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgIGFwcGVuZFRva2VucyhhcHBlbmRlZFRva2VucywgcGFyZW50Tm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIGFkZEFmdGVyKGV4aXN0aW5nTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGFkZGVkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgYWRkZWRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgYWRkTm9kZXNBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkTm9kZXMsIHBhcmVudE5vZGUpO1xuXG4gICAgYWRkVG9rZW5zQWZ0ZXIoZXhpc3RpbmdOb2RlLCBhZGRlZFRva2VucywgdG9rZW5zKTtcbiAgfVxuXG4gIHJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRoaXMudG9rZW5zOyAvLy9cblxuICAgIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJlcGxhY2VFeChyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSB0aGlzLnRva2VucywgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZXMgPSByZXBsYWNlbWVudENoaWxkTm9kZXM7IC8vL1xuXG4gICAgcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZW1vdmVGcm9tKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQ7XG5cbiAgICByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucyk7XG5cbiAgICByZW1vdmVOb2RlKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGUuY2xvbmUoKSxcbiAgICAgICAgICBjbG9uZWRUb2tlbnMgPSBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHRva2VucyA9IGNsb25lZFRva2VucywgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBuZXcgQ2xhc3Mobm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIGNvbnRleHQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSBub2RlOyAvLy9cblxuICAgICAgbm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGxldCB7IHRva2VucyB9ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNsb25lZFRva2VucyA9IGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbGVhZGluZ0luZGV4ID0gbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBvZmZzZXQgPSBsZWFkaW5nSW5kZXg7ICAvLy9cblxuICAgIG5vZGUgPSBub2RlLmNsb25lKCk7ICAvLy9cblxuICAgIG92ZXJ3cml0ZU5vZGVUb2tlbnMobm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG5cbiAgICB0b2tlbnMgPSBjbG9uZWRUb2tlbnM7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnQgPSBuZXcgQ2xhc3Mobm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKENsYXNzLCBub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0b2tlbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdG9rZW5zID0gbm9kZTsgIC8vL1xuXG4gICAgICBub2RlID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJlcGxhY2VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcmVwbGFjZW1lbnQgPSBuZXcgQ2xhc3Mobm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIG92ZXJ3cml0ZU5vZGVUb2tlbnMobm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCA9IDApIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIG92ZXJ3cml0ZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIG92ZXJ3cml0ZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG92ZXJ3cml0ZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpIHtcbiAgbGV0IGluZGV4LFxuICAgICAgc2lnbmlmaWNhbnRUb2tlbjtcblxuICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICBpbmRleCAtPSBvZmZzZXQ7XG5cbiAgICBjb25zdCBjbG9uZWRUb2tlbiA9IGNsb25lZFRva2Vuc1tpbmRleF07XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRlcm1pbmFsTm9kZS5zZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG92ZXJ3cml0ZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgIG92ZXJ3cml0ZU5vZGVUb2tlbnMobm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbGVhZGluZ0luZGV4ID0gbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgdHJhaWxpbmdJbmRleCA9IHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxlYWRpbmdJbmRleCwgIC8vL1xuICAgICAgICBlbmQgPSB0cmFpbGluZ0luZGV4ICsgMTtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICBjb25zdCBjbG9uZWRUb2tlbnMgPSB0b2tlbnMubWFwKCh0b2tlbikgPT4geyAgLy8vXG4gICAgY29uc3QgY2xvbmVkVG9rZW4gPSB0b2tlbi5jbG9uZSgpO1xuXG4gICAgcmV0dXJuIGNsb25lZFRva2VuO1xuICB9KTtcblxuICByZXR1cm4gY2xvbmVkVG9rZW5zO1xufVxuIl0sIm5hbWVzIjpbIlJlcGxhY2VtZW50IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwibm9kZSIsInRva2VucyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRDaGlsZE5vZGVzIiwiY29udHJhY3QiLCJDbGFzcyIsImRlc2NlbmRlbnROb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY29udGV4dCIsInJlcGxhY2VtZW50IiwiZnJvbU5vZGUiLCJleHBhbmQiLCJhc2NlbmRhbnROb2RlIiwiYXBwZW5kVG8iLCJwYXJlbnROb2RlIiwiYXBwZW5kZWROb2RlIiwiYXBwZW5kZWRUb2tlbnMiLCJhcHBlbmROb2RlIiwiYXBwZW5kVG9rZW5zIiwiYWRkQWZ0ZXIiLCJleGlzdGluZ05vZGUiLCJhZGRlZE5vZGVzIiwiYWRkZWRUb2tlbnMiLCJhZGROb2Rlc0FmdGVyIiwiYWRkVG9rZW5zQWZ0ZXIiLCJyZXBsYWNlIiwicmVwbGFjZWROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlTm9kZSIsInJlcGxhY2VUb2tlbnMiLCJyZXBsYWNlRXgiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZU5vZGVzIiwicmVtb3ZlRnJvbSIsInJlbW92ZWROb2RlIiwicmVtb3ZlVG9rZW5zIiwicmVtb3ZlTm9kZSIsImNsb25lIiwiY2xvbmVkVG9rZW5zIiwiY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMiLCJvdmVyd3JpdGVOb2RlVG9rZW5zIiwiY29uc3RydWN0b3IiLCJsZWFkaW5nSW5kZXgiLCJsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsIm9mZnNldCIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwib3ZlcndyaXRlVGVybWluYWxOb2RlVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwib3ZlcndyaXRlTm9uVGVybWluYWxOb2RlVG9rZW5zIiwiaW5kZXgiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImluZGV4T2YiLCJjbG9uZWRUb2tlbiIsInNldFNpZ25pZmljYW50VG9rZW4iLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInRyYWlsaW5nSW5kZXgiLCJ0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJzdGFydCIsImVuZCIsInNsaWNlIiwibWFwIiwidG9rZW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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