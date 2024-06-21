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
                    node
                ].concat(_to_consumable_array(remainingArguments), [
                    context
                ]));
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
                    node
                ].concat(_to_consumable_array(remainingArguments), [
                    context
                ]));
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
            value: function fromNode(Class, node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var context = remainingArguments.pop();
                if (context === undefined) {
                    context = node; ///
                    node = Class; ///
                    Class = Replacement; ///
                }
                var tokens = context.tokens;
                var clonedTokens = clonedTokensFromNodeAndTokens(node, tokens), firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), offset = firstSignificantTokenIndex; ///
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
    var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    var clonedTokens = tokens.map(function(token) {
        var clonedToken = token.clone();
        return clonedToken;
    });
    return clonedTokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHJlbW92ZU5vZGUsIGFwcGVuZE5vZGUsIHJlbW92ZVRva2VucywgYXBwZW5kVG9rZW5zLCByZXBsYWNlTm9kZSwgcmVwbGFjZU5vZGVzLCByZXBsYWNlVG9rZW5zLCBhZGROb2Rlc0FmdGVyLCBhZGRUb2tlbnNBZnRlciB9IGZyb20gXCIuL3V0aWxpdGllcy9yZXBsYWNlbWVudFwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnModG9rZW5zID0gW10pIHtcbiAgICBwdXNoKHRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHsgcmV0dXJuIHRoaXMubm9kZS5nZXRDaGlsZE5vZGVzKCk7IH1cblxuICBjb250cmFjdChDbGFzcywgZGVzY2VuZGVudE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChkZXNjZW5kZW50Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZXNjZW5kZW50Tm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBkZXNjZW5kZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0geyAvLy9cbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBDbGFzcy5mcm9tTm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG5cbiAgZXhwYW5kKENsYXNzLCBhc2NlbmRhbnROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoYXNjZW5kYW50Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhc2NlbmRhbnROb2RlID0gQ2xhc3M7XG5cbiAgICAgIENsYXNzID0gUmVwbGFjZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gYXNjZW5kYW50Tm9kZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcGxhY2VtZW50ID0gQ2xhc3MuZnJvbU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBhcHBlbmRlZE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICBhcHBlbmRlZFRva2VucyA9IHRoaXMudG9rZW5zOyAgLy8vXG5cbiAgICBhcHBlbmROb2RlKGFwcGVuZGVkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICBhcHBlbmRUb2tlbnMoYXBwZW5kZWRUb2tlbnMsIHBhcmVudE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICBhZGRBZnRlcihleGlzdGluZ05vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBhZGRlZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGFkZGVkVG9rZW5zID0gdGhpcy50b2tlbnM7ICAvLy9cblxuICAgIGFkZE5vZGVzQWZ0ZXIoZXhpc3RpbmdOb2RlLCBhZGRlZE5vZGVzLCBwYXJlbnROb2RlKTtcblxuICAgIGFkZFRva2Vuc0FmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWRUb2tlbnMsIHRva2Vucyk7XG4gIH1cblxuICByZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSB0aGlzLnRva2VuczsgLy8vXG5cbiAgICByZXBsYWNlTm9kZShyZXBsYWNlbWVudE5vZGUsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZXBsYWNlRXgocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdGhpcy50b2tlbnMsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudE5vZGVzID0gcmVwbGFjZW1lbnRDaGlsZE5vZGVzOyAvLy9cblxuICAgIHJlcGxhY2VOb2RlcyhyZXBsYWNlbWVudE5vZGVzLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgcmVtb3ZlVG9rZW5zKHJlbW92ZWROb2RlLCB0b2tlbnMpO1xuXG4gICAgcmVtb3ZlTm9kZShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSk7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlLmNsb25lKCksXG4gICAgICAgICAgY2xvbmVkVG9rZW5zID0gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgb3ZlcndyaXRlTm9kZVRva2Vucyhub2RlLCBjbG9uZWRUb2tlbnMsIHRoaXMudG9rZW5zKTtcblxuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvciwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gY2xvbmVkVG9rZW5zLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudCA9IG5ldyBDbGFzcyhub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gbm9kZTsgLy8vXG5cbiAgICAgIG5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUmVwbGFjZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBsZXQgeyB0b2tlbnMgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBjbG9uZWRUb2tlbnMgPSBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICAgIG9mZnNldCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4OyAgLy8vXG5cbiAgICBub2RlID0gbm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuXG4gICAgdG9rZW5zID0gY2xvbmVkVG9rZW5zOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2VucyhDbGFzcywgbm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodG9rZW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRva2VucyA9IG5vZGU7ICAvLy9cblxuICAgICAgbm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGxldCBpbmRleCxcbiAgICAgIHNpZ25pZmljYW50VG9rZW47XG5cbiAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgaW5kZXggLT0gb2Zmc2V0O1xuXG4gICAgY29uc3QgY2xvbmVkVG9rZW4gPSBjbG9uZWRUb2tlbnNbaW5kZXhdO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IGNsb25lZFRva2VuOyAgLy8vXG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgY29uc3QgY2xvbmVkVG9rZW5zID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHsgIC8vL1xuICAgIGNvbnN0IGNsb25lZFRva2VuID0gdG9rZW4uY2xvbmUoKTtcblxuICAgIHJldHVybiBjbG9uZWRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNsb25lZFRva2Vucztcbn1cbiJdLCJuYW1lcyI6WyJSZXBsYWNlbWVudCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0Q2hpbGROb2RlcyIsImNvbnRyYWN0IiwiQ2xhc3MiLCJkZXNjZW5kZW50Tm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInVuZGVmaW5lZCIsImNvbnRleHQiLCJyZXBsYWNlbWVudCIsImZyb21Ob2RlIiwiZXhwYW5kIiwiYXNjZW5kYW50Tm9kZSIsImFwcGVuZFRvIiwicGFyZW50Tm9kZSIsImFwcGVuZGVkTm9kZSIsImFwcGVuZGVkVG9rZW5zIiwiYXBwZW5kTm9kZSIsImFwcGVuZFRva2VucyIsImFkZEFmdGVyIiwiZXhpc3RpbmdOb2RlIiwiYWRkZWROb2RlcyIsImFkZGVkVG9rZW5zIiwiYWRkTm9kZXNBZnRlciIsImFkZFRva2Vuc0FmdGVyIiwicmVwbGFjZSIsInJlcGxhY2VkTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZU5vZGUiLCJyZXBsYWNlVG9rZW5zIiwicmVwbGFjZUV4IiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnROb2RlcyIsInJlcGxhY2VOb2RlcyIsInJlbW92ZUZyb20iLCJyZW1vdmVkTm9kZSIsInJlbW92ZVRva2VucyIsInJlbW92ZU5vZGUiLCJjbG9uZSIsImNsb25lZFRva2VucyIsImNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwib3ZlcndyaXRlTm9kZVRva2VucyIsImNvbnN0cnVjdG9yIiwicG9wIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsIm9mZnNldCIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwib3ZlcndyaXRlVGVybWluYWxOb2RlVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwib3ZlcndyaXRlTm9uVGVybWluYWxOb2RlVG9rZW5zIiwiaW5kZXgiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImluZGV4T2YiLCJjbG9uZWRUb2tlbiIsInNldFNpZ25pZmljYW50VG9rZW4iLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSIsIm1hcCIsInRva2VuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTsyQkFFNkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVJLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCw0QkFBRCxBQUFMO2FBQU1BLFlBQ1BHLElBQUksRUFBRUMsTUFBTTtnQ0FETEo7UUFFakIsSUFBSSxDQUFDRyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFIR0o7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVVGLFNBQUFBLGlFQUFTLEVBQUU7Z0JBQ25CSCxLQUFLRyxRQUFRLElBQUksQ0FBQ0EsTUFBTTtnQkFFeEIsT0FBTyxJQUFJLENBQUNBLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWtCLE9BQU8sSUFBSSxDQUFDSixJQUFJLENBQUNJLGFBQWE7WUFBSTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUEs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