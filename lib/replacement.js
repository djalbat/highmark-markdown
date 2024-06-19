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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zLCB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgcmVtb3ZlTm9kZSwgYXBwZW5kTm9kZSwgcmVtb3ZlVG9rZW5zLCBhcHBlbmRUb2tlbnMsIHJlcGxhY2VOb2RlLCByZXBsYWNlTm9kZXMsIHJlcGxhY2VUb2tlbnMsIGFkZE5vZGVzQWZ0ZXIsIGFkZFRva2Vuc0FmdGVyIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3JlcGxhY2VtZW50XCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2Vucyh0b2tlbnMgPSBbXSkge1xuICAgIHB1c2godG9rZW5zLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkgeyByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkTm9kZXMoKTsgfVxuXG4gIGNvbnRyYWN0KENsYXNzLCBkZXNjZW5kZW50Tm9kZSkge1xuICAgIGlmIChkZXNjZW5kZW50Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZXNjZW5kZW50Tm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBkZXNjZW5kZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0geyAvLy9cbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBDbGFzcy5mcm9tTm9kZShub2RlLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG5cbiAgZXhwYW5kKENsYXNzLCBhc2NlbmRhbnROb2RlKSB7XG4gICAgaWYgKGFzY2VuZGFudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXNjZW5kYW50Tm9kZSA9IENsYXNzO1xuXG4gICAgICBDbGFzcyA9IFJlcGxhY2VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGFzY2VuZGFudE5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXBsYWNlbWVudCA9IENsYXNzLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgYXBwZW5kZWROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgYXBwZW5kZWRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgYXBwZW5kTm9kZShhcHBlbmRlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgYXBwZW5kVG9rZW5zKGFwcGVuZGVkVG9rZW5zLCBwYXJlbnROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgYWRkQWZ0ZXIoZXhpc3RpbmdOb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgYWRkZWROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICBhZGRlZFRva2VucyA9IHRoaXMudG9rZW5zOyAgLy8vXG5cbiAgICBhZGROb2Rlc0FmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWROb2RlcywgcGFyZW50Tm9kZSk7XG5cbiAgICBhZGRUb2tlbnNBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkVG9rZW5zLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVwbGFjZShyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdGhpcy50b2tlbnM7IC8vL1xuXG4gICAgcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVwbGFjZUV4KHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRoaXMudG9rZW5zLCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlcyA9IHJlcGxhY2VtZW50Q2hpbGROb2RlczsgLy8vXG5cbiAgICByZXBsYWNlTm9kZXMocmVwbGFjZW1lbnROb2RlcywgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJlbW92ZUZyb20ocmVtb3ZlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dDtcblxuICAgIHJlbW92ZVRva2VucyhyZW1vdmVkTm9kZSwgdG9rZW5zKTtcblxuICAgIHJlbW92ZU5vZGUocmVtb3ZlZE5vZGUsIHBhcmVudE5vZGUpO1xuICB9XG5cbiAgY2xvbmUoLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZS5jbG9uZSgpLFxuICAgICAgICAgIGNsb25lZFRva2VucyA9IGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIG92ZXJ3cml0ZU5vZGVUb2tlbnMobm9kZSwgY2xvbmVkVG9rZW5zLCB0aGlzLnRva2Vucyk7XG5cbiAgICBjb25zdCBDbGFzcyA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgdG9rZW5zID0gY2xvbmVkVG9rZW5zLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudCA9IG5ldyBDbGFzcyhub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgY29udGV4dCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IG5vZGU7IC8vL1xuXG4gICAgICBub2RlID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJlcGxhY2VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgbGV0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2xvbmVkVG9rZW5zID0gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBsZWFkaW5nSW5kZXggPSBsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG9mZnNldCA9IGxlYWRpbmdJbmRleDsgIC8vL1xuXG4gICAgbm9kZSA9IG5vZGUuY2xvbmUoKTsgIC8vL1xuXG4gICAgb3ZlcndyaXRlTm9kZVRva2Vucyhub2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgIHRva2VucyA9IGNsb25lZFRva2VuczsgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudCA9IG5ldyBDbGFzcyhub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMoQ2xhc3MsIG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHRva2VucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0b2tlbnMgPSBub2RlOyAgLy8vXG5cbiAgICAgIG5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUmVwbGFjZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCByZXBsYWNlbWVudCA9IG5ldyBDbGFzcyhub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3ZlcndyaXRlTm9kZVRva2Vucyhub2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0ID0gMCkge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgb3ZlcndyaXRlVGVybWluYWxOb2RlVG9rZW5zKHRlcm1pbmFsTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgb3ZlcndyaXRlTm9uVGVybWluYWxOb2RlVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3ZlcndyaXRlVGVybWluYWxOb2RlVG9rZW5zKHRlcm1pbmFsTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCkge1xuICBsZXQgaW5kZXgsXG4gICAgICBzaWduaWZpY2FudFRva2VuO1xuXG4gIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgaW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIGluZGV4IC09IG9mZnNldDtcblxuICAgIGNvbnN0IGNsb25lZFRva2VuID0gY2xvbmVkVG9rZW5zW2luZGV4XTtcblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSBjbG9uZWRUb2tlbjsgIC8vL1xuXG4gICAgdGVybWluYWxOb2RlLnNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3ZlcndyaXRlTm9uVGVybWluYWxOb2RlVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgb3ZlcndyaXRlTm9kZVRva2Vucyhub2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBsZWFkaW5nSW5kZXggPSBsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICB0cmFpbGluZ0luZGV4ID0gdHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gbGVhZGluZ0luZGV4LCAgLy8vXG4gICAgICAgIGVuZCA9IHRyYWlsaW5nSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gIGNvbnN0IGNsb25lZFRva2VucyA9IHRva2Vucy5tYXAoKHRva2VuKSA9PiB7ICAvLy9cbiAgICBjb25zdCBjbG9uZWRUb2tlbiA9IHRva2VuLmNsb25lKCk7XG5cbiAgICByZXR1cm4gY2xvbmVkVG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiBjbG9uZWRUb2tlbnM7XG59XG4iXSwibmFtZXMiOlsiUmVwbGFjZW1lbnQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJub2RlIiwidG9rZW5zIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldENoaWxkTm9kZXMiLCJjb250cmFjdCIsIkNsYXNzIiwiZGVzY2VuZGVudE5vZGUiLCJ1bmRlZmluZWQiLCJjb250ZXh0IiwicmVwbGFjZW1lbnQiLCJmcm9tTm9kZSIsImV4cGFuZCIsImFzY2VuZGFudE5vZGUiLCJhcHBlbmRUbyIsInBhcmVudE5vZGUiLCJhcHBlbmRlZE5vZGUiLCJhcHBlbmRlZFRva2VucyIsImFwcGVuZE5vZGUiLCJhcHBlbmRUb2tlbnMiLCJhZGRBZnRlciIsImV4aXN0aW5nTm9kZSIsImFkZGVkTm9kZXMiLCJhZGRlZFRva2VucyIsImFkZE5vZGVzQWZ0ZXIiLCJhZGRUb2tlbnNBZnRlciIsInJlcGxhY2UiLCJyZXBsYWNlZE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRva2VucyIsInJlcGxhY2VOb2RlIiwicmVwbGFjZVRva2VucyIsInJlcGxhY2VFeCIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VtZW50Tm9kZXMiLCJyZXBsYWNlTm9kZXMiLCJyZW1vdmVGcm9tIiwicmVtb3ZlZE5vZGUiLCJyZW1vdmVUb2tlbnMiLCJyZW1vdmVOb2RlIiwiY2xvbmUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjbG9uZWRUb2tlbnMiLCJjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2VucyIsIm92ZXJ3cml0ZU5vZGVUb2tlbnMiLCJjb25zdHJ1Y3RvciIsImxlYWRpbmdJbmRleCIsImxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwib2Zmc2V0IiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMiLCJpbmRleCIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiaW5kZXhPZiIsImNsb25lZFRva2VuIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwidHJhaWxpbmdJbmRleCIsInRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJtYXAiLCJ0b2tlbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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