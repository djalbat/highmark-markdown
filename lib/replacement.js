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
            key: "appendTo",
            value: function appendTo(parentNode, context) {
                var tokens = context.tokens, replacementNode = this.node, replacementTokens = this.tokens; ///
                (0, _replacement.appendNode)(replacementNode, parentNode);
                (0, _replacement.appendTokens)(replacementTokens, parentNode, tokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zLCB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgcmVtb3ZlTm9kZSwgYXBwZW5kTm9kZSwgcmVtb3ZlVG9rZW5zLCBhcHBlbmRUb2tlbnMsIHJlcGxhY2VOb2RlLCByZXBsYWNlTm9kZXMsIHJlcGxhY2VUb2tlbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcmVwbGFjZW1lbnRcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwbGFjZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKHRva2VucyA9IFtdKSB7XG4gICAgcHVzaCh0b2tlbnMsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7IHJldHVybiB0aGlzLm5vZGUuZ2V0Q2hpbGROb2RlcygpOyB9XG5cbiAgY29udHJhY3QoQ2xhc3MsIGRlc2NlbmRlbnROb2RlKSB7XG4gICAgaWYgKGRlc2NlbmRlbnROb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlc2NlbmRlbnROb2RlID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJlcGxhY2VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGRlc2NlbmRlbnROb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7IC8vL1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXBsYWNlbWVudCA9IENsYXNzLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cblxuICBleHBhbmQoQ2xhc3MsIGFzY2VuZGFudE5vZGUpIHtcbiAgICBpZiAoYXNjZW5kYW50Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhc2NlbmRhbnROb2RlID0gQ2xhc3M7XG5cbiAgICAgIENsYXNzID0gUmVwbGFjZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gYXNjZW5kYW50Tm9kZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcGxhY2VtZW50ID0gQ2xhc3MuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRoaXMudG9rZW5zOyAgLy8vXG5cbiAgICBhcHBlbmROb2RlKHJlcGxhY2VtZW50Tm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICBhcHBlbmRUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHBhcmVudE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSB0aGlzLnRva2VuczsgLy8vXG5cbiAgICByZXBsYWNlTm9kZShyZXBsYWNlbWVudE5vZGUsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZXBsYWNlRXgocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdGhpcy50b2tlbnMsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudE5vZGVzID0gcmVwbGFjZW1lbnRDaGlsZE5vZGVzOyAvLy9cblxuICAgIHJlcGxhY2VOb2RlcyhyZXBsYWNlbWVudE5vZGVzLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgcmVtb3ZlVG9rZW5zKHJlbW92ZWROb2RlLCB0b2tlbnMpO1xuXG4gICAgcmVtb3ZlTm9kZShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSk7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlLmNsb25lKCksXG4gICAgICAgICAgY2xvbmVkVG9rZW5zID0gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgb3ZlcndyaXRlTm9kZVRva2Vucyhub2RlLCBjbG9uZWRUb2tlbnMsIHRoaXMudG9rZW5zKTtcblxuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB0b2tlbnMgPSBjbG9uZWRUb2tlbnMsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudFxuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKENsYXNzLCBub2RlLCBjb250ZXh0LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gbm9kZTsgLy8vXG5cbiAgICAgIG5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUmVwbGFjZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBsZXQgeyB0b2tlbnMgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBjbG9uZWRUb2tlbnMgPSBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGxlYWRpbmdJbmRleCA9IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgb2Zmc2V0ID0gbGVhZGluZ0luZGV4OyAgLy8vXG5cbiAgICBub2RlID0gbm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuXG4gICAgdG9rZW5zID0gY2xvbmVkVG9rZW5zOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2VucyhDbGFzcywgbm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodG9rZW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRva2VucyA9IG5vZGU7ICAvLy9cblxuICAgICAgbm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGxldCBpbmRleCxcbiAgICAgIHNpZ25pZmljYW50VG9rZW47XG5cbiAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgaW5kZXggLT0gb2Zmc2V0O1xuXG4gICAgY29uc3QgY2xvbmVkVG9rZW4gPSBjbG9uZWRUb2tlbnNbaW5kZXhdO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IGNsb25lZFRva2VuOyAgLy8vXG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGxlYWRpbmdJbmRleCA9IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHRyYWlsaW5nSW5kZXggPSB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBsZWFkaW5nSW5kZXgsICAvLy9cbiAgICAgICAgZW5kID0gdHJhaWxpbmdJbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgY29uc3QgY2xvbmVkVG9rZW5zID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHsgIC8vL1xuICAgIGNvbnN0IGNsb25lZFRva2VuID0gdG9rZW4uY2xvbmUoKTtcblxuICAgIHJldHVybiBjbG9uZWRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNsb25lZFRva2Vucztcbn1cbiJdLCJuYW1lcyI6WyJSZXBsYWNlbWVudCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0Q2hpbGROb2RlcyIsImNvbnRyYWN0IiwiQ2xhc3MiLCJkZXNjZW5kZW50Tm9kZSIsInVuZGVmaW5lZCIsImNvbnRleHQiLCJyZXBsYWNlbWVudCIsImZyb21Ob2RlIiwiZXhwYW5kIiwiYXNjZW5kYW50Tm9kZSIsImFwcGVuZFRvIiwicGFyZW50Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwiYXBwZW5kTm9kZSIsImFwcGVuZFRva2VucyIsInJlcGxhY2UiLCJyZXBsYWNlZE5vZGUiLCJyZXBsYWNlTm9kZSIsInJlcGxhY2VUb2tlbnMiLCJyZXBsYWNlRXgiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZU5vZGVzIiwicmVtb3ZlRnJvbSIsInJlbW92ZWROb2RlIiwicmVtb3ZlVG9rZW5zIiwicmVtb3ZlTm9kZSIsImNsb25lIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY2xvbmVkVG9rZW5zIiwiY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMiLCJvdmVyd3JpdGVOb2RlVG9rZW5zIiwiY29uc3RydWN0b3IiLCJsZWFkaW5nSW5kZXgiLCJsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsIm9mZnNldCIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwib3ZlcndyaXRlVGVybWluYWxOb2RlVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwib3ZlcndyaXRlTm9uVGVybWluYWxOb2RlVG9rZW5zIiwiaW5kZXgiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImluZGV4T2YiLCJjbG9uZWRUb2tlbiIsInNldFNpZ25pZmljYW50VG9rZW4iLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInRyYWlsaW5nSW5kZXgiLCJ0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJzdGFydCIsImVuZCIsInNsaWNlIiwibWFwIiwidG9rZW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBVO29CQUUrQzsyQkFDK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdHLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCw0QkFBRCxBQUFMO2FBQU1BLFlBQ1BHLElBQUksRUFBRUMsTUFBTTtnQ0FETEo7UUFFakIsSUFBSSxDQUFDRyxJQUFJLEdB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