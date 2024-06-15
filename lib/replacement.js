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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcmVtb3ZlTm9kZSwgYXBwZW5kTm9kZSwgcmVtb3ZlVG9rZW5zLCBhcHBlbmRUb2tlbnMsIHJlcGxhY2VOb2RlcywgcmVwbGFjZVRva2VucywgbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMsIHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkgeyByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkTm9kZXMoKTsgfVxuXG4gIGNvbnRyYWN0KENsYXNzLCBkZXNjZW5kZW50Tm9kZSkge1xuICAgIGlmIChkZXNjZW5kZW50Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZXNjZW5kZW50Tm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBkZXNjZW5kZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0geyAvLy9cbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBDbGFzcy5mcm9tTm9kZShub2RlLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG5cbiAgZXhwYW5kKENsYXNzLCBhc2NlbmRhbnROb2RlKSB7XG4gICAgaWYgKGFzY2VuZGFudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXNjZW5kYW50Tm9kZSA9IENsYXNzO1xuXG4gICAgICBDbGFzcyA9IFJlcGxhY2VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGFzY2VuZGFudE5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXBsYWNlbWVudCA9IENsYXNzLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cblxuICByZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRoaXMudG9rZW5zLCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlcyA9IHJlcGxhY2VtZW50Q2hpbGROb2RlczsgLy8vXG5cbiAgICByZXBsYWNlTm9kZXMocmVwbGFjZW1lbnROb2RlcywgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRoaXMudG9rZW5zOyAgLy8vXG5cbiAgICBhcHBlbmROb2RlKHJlcGxhY2VtZW50Tm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICBhcHBlbmRUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHBhcmVudE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZW1vdmVGcm9tKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQ7XG5cbiAgICByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucyk7XG5cbiAgICByZW1vdmVOb2RlKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGUuY2xvbmUoKSxcbiAgICAgICAgICBjbG9uZWRUb2tlbnMgPSBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHRva2VucyA9IGNsb25lZFRva2VucywgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBuZXcgQ2xhc3Mobm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIGNvbnRleHQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSBub2RlOyAvLy9cblxuICAgICAgbm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGxldCB7IHRva2VucyB9ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNsb25lZFRva2VucyA9IGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbGVhZGluZ0luZGV4ID0gbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBvZmZzZXQgPSBsZWFkaW5nSW5kZXg7ICAvLy9cblxuICAgIG5vZGUgPSBub2RlLmNsb25lKCk7ICAvLy9cblxuICAgIG92ZXJ3cml0ZU5vZGVUb2tlbnMobm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG5cbiAgICB0b2tlbnMgPSBjbG9uZWRUb2tlbnM7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnQgPSBuZXcgQ2xhc3Mobm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKENsYXNzLCBub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0b2tlbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdG9rZW5zID0gbm9kZTsgIC8vL1xuXG4gICAgICBub2RlID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJlcGxhY2VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcmVwbGFjZW1lbnQgPSBuZXcgQ2xhc3Mobm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIG92ZXJ3cml0ZU5vZGVUb2tlbnMobm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCA9IDApIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIG92ZXJ3cml0ZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIG92ZXJ3cml0ZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG92ZXJ3cml0ZUNoaWxkTm9kZXNUb2tlbnMoY2hpbGROb2RlcywgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCkge1xuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgb3ZlcndyaXRlTm9kZVRva2Vucyhub2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG92ZXJ3cml0ZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpIHtcbiAgbGV0IGluZGV4LFxuICAgICAgc2lnbmlmaWNhbnRUb2tlbjtcblxuICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICBpbmRleCAtPSBvZmZzZXQ7XG5cbiAgICBjb25zdCBjbG9uZWRUb2tlbiA9IGNsb25lZFRva2Vuc1tpbmRleF07XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRlcm1pbmFsTm9kZS5zZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG92ZXJ3cml0ZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgb3ZlcndyaXRlQ2hpbGROb2Rlc1Rva2VucyhjaGlsZE5vZGVzLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGxlYWRpbmdJbmRleCA9IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHRyYWlsaW5nSW5kZXggPSB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBsZWFkaW5nSW5kZXgsICAvLy9cbiAgICAgICAgZW5kID0gdHJhaWxpbmdJbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgY29uc3QgY2xvbmVkVG9rZW5zID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHsgIC8vL1xuICAgIGNvbnN0IGNsb25lZFRva2VuID0gdG9rZW4uY2xvbmUoKTtcblxuICAgIHJldHVybiBjbG9uZWRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNsb25lZFRva2Vucztcbn1cbiJdLCJuYW1lcyI6WyJSZXBsYWNlbWVudCIsIm5vZGUiLCJ0b2tlbnMiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0Q2hpbGROb2RlcyIsImNvbnRyYWN0IiwiQ2xhc3MiLCJkZXNjZW5kZW50Tm9kZSIsInVuZGVmaW5lZCIsImNvbnRleHQiLCJyZXBsYWNlbWVudCIsImZyb21Ob2RlIiwiZXhwYW5kIiwiYXNjZW5kYW50Tm9kZSIsInJlcGxhY2UiLCJyZXBsYWNlZE5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZU5vZGVzIiwicmVwbGFjZVRva2VucyIsImFwcGVuZFRvIiwicmVwbGFjZW1lbnROb2RlIiwiYXBwZW5kTm9kZSIsImFwcGVuZFRva2VucyIsInJlbW92ZUZyb20iLCJyZW1vdmVkTm9kZSIsInJlbW92ZVRva2VucyIsInJlbW92ZU5vZGUiLCJjbG9uZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNsb25lZFRva2VucyIsImNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwib3ZlcndyaXRlTm9kZVRva2VucyIsImNvbnN0cnVjdG9yIiwibGVhZGluZ0luZGV4IiwibGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJvZmZzZXQiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsIm92ZXJ3cml0ZVRlcm1pbmFsTm9kZVRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsIm92ZXJ3cml0ZU5vblRlcm1pbmFsTm9kZVRva2VucyIsIm92ZXJ3cml0ZUNoaWxkTm9kZXNUb2tlbnMiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImluZGV4Iiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJpbmRleE9mIiwiY2xvbmVkVG9rZW4iLCJzZXRTaWduaWZpY2FudFRva2VuIiwidHJhaWxpbmdJbmRleCIsInRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJtYXAiLCJ0b2tlbiJdLCJyYW5nZU1h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