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
            value: function contract(descendentNode) {
                var node = descendentNode, tokens = this.tokens, context = {
                    tokens: tokens
                }, replacement = Replacement.fromNode(node, context); ///
                return replacement;
            }
        },
        {
            key: "expand",
            value: function expand(ascendantNode) {
                var node = ascendantNode, tokens = this.tokens, context = {
                    tokens: tokens
                }, replacement = Replacement.fromNode(node, context); ///
                return replacement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcmVtb3ZlTm9kZSwgYXBwZW5kTm9kZSwgcmVtb3ZlVG9rZW5zLCBhcHBlbmRUb2tlbnMsIHJlcGxhY2VOb2RlcywgcmVwbGFjZVRva2VucywgbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMsIHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkgeyByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkTm9kZXMoKTsgfVxuXG4gIGNvbnRyYWN0KGRlc2NlbmRlbnROb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRlc2NlbmRlbnROb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7IC8vL1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cblxuICBleHBhbmQoYXNjZW5kYW50Tm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBhc2NlbmRhbnROb2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLnRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBSZXBsYWNlbWVudC5mcm9tTm9kZShub2RlLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG5cbiAgY2xvbmUoLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZS5jbG9uZSgpLFxuICAgICAgICAgIGNsb25lZFRva2VucyA9IGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIG92ZXJ3cml0ZU5vZGVUb2tlbnMobm9kZSwgY2xvbmVkVG9rZW5zLCB0aGlzLnRva2Vucyk7XG5cbiAgICBjb25zdCBDbGFzcyA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgdG9rZW5zID0gY2xvbmVkVG9rZW5zLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudCA9IG5ldyBDbGFzcyhub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRcbiAgfVxuXG4gIHJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdGhpcy50b2tlbnMsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudE5vZGVzID0gcmVwbGFjZW1lbnRDaGlsZE5vZGVzOyAvLy9cblxuICAgIHJlcGxhY2VOb2RlcyhyZXBsYWNlbWVudE5vZGVzLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgYXBwZW5kVG8ocGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdGhpcy50b2tlbnM7ICAvLy9cblxuICAgIGFwcGVuZE5vZGUocmVwbGFjZW1lbnROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgIGFwcGVuZFRva2VucyhyZXBsYWNlbWVudFRva2VucywgcGFyZW50Tm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJlbW92ZUZyb20ocmVtb3ZlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dDtcblxuICAgIHJlbW92ZVRva2VucyhyZW1vdmVkTm9kZSwgdG9rZW5zKTtcblxuICAgIHJlbW92ZU5vZGUocmVtb3ZlZE5vZGUsIHBhcmVudE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKENsYXNzLCBub2RlLCBjb250ZXh0LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gbm9kZTsgLy8vXG5cbiAgICAgIG5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUmVwbGFjZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBsZXQgeyB0b2tlbnMgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBjbG9uZWRUb2tlbnMgPSBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGxlYWRpbmdJbmRleCA9IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgb2Zmc2V0ID0gbGVhZGluZ0luZGV4OyAgLy8vXG5cbiAgICBub2RlID0gbm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuXG4gICAgdG9rZW5zID0gY2xvbmVkVG9rZW5zOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2VucyhDbGFzcywgbm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodG9rZW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRva2VucyA9IG5vZGU7ICAvLy9cblxuICAgICAgbm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVDaGlsZE5vZGVzVG9rZW5zKGNoaWxkTm9kZXMsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpIHtcbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgIG92ZXJ3cml0ZU5vZGVUb2tlbnMobm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGxldCBpbmRleCxcbiAgICAgIHNpZ25pZmljYW50VG9rZW47XG5cbiAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgaW5kZXggLT0gb2Zmc2V0O1xuXG4gICAgY29uc3QgY2xvbmVkVG9rZW4gPSBjbG9uZWRUb2tlbnNbaW5kZXhdO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IGNsb25lZFRva2VuOyAgLy8vXG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIG92ZXJ3cml0ZUNoaWxkTm9kZXNUb2tlbnMoY2hpbGROb2RlcywgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG59XG5cbmZ1bmN0aW9uIGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBsZWFkaW5nSW5kZXggPSBsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICB0cmFpbGluZ0luZGV4ID0gdHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gbGVhZGluZ0luZGV4LCAgLy8vXG4gICAgICAgIGVuZCA9IHRyYWlsaW5nSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gIGNvbnN0IGNsb25lZFRva2VucyA9IHRva2Vucy5tYXAoKHRva2VuKSA9PiB7ICAvLy9cbiAgICBjb25zdCBjbG9uZWRUb2tlbiA9IHRva2VuLmNsb25lKCk7XG5cbiAgICByZXR1cm4gY2xvbmVkVG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiBjbG9uZWRUb2tlbnM7XG59XG4iXSwibmFtZXMiOlsiUmVwbGFjZW1lbnQiLCJub2RlIiwidG9rZW5zIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldENoaWxkTm9kZXMiLCJjb250cmFjdCIsImRlc2NlbmRlbnROb2RlIiwiY29udGV4dCIsInJlcGxhY2VtZW50IiwiZnJvbU5vZGUiLCJleHBhbmQiLCJhc2NlbmRhbnROb2RlIiwiY2xvbmUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjbG9uZWRUb2tlbnMiLCJjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2VucyIsIm92ZXJ3cml0ZU5vZGVUb2tlbnMiLCJDbGFzcyIsImNvbnN0cnVjdG9yIiwicmVwbGFjZSIsInJlcGxhY2VkTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlbWVudFRva2VucyIsInJlcGxhY2VtZW50Tm9kZXMiLCJyZXBsYWNlTm9kZXMiLCJyZXBsYWNlVG9rZW5zIiwiYXBwZW5kVG8iLCJyZXBsYWNlbWVudE5vZGUiLCJhcHBlbmROb2RlIiwiYXBwZW5kVG9rZW5zIiwicmVtb3ZlRnJvbSIsInJlbW92ZWROb2RlIiwicmVtb3ZlVG9rZW5zIiwicmVtb3ZlTm9kZSIsInVuZGVmaW5lZCIsImxlYWRpbmdJbmRleCIsImxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwib2Zmc2V0IiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMiLCJvdmVyd3JpdGVDaGlsZE5vZGVzVG9rZW5zIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJpbmRleCIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiaW5kZXhPZiIsImNsb25lZFRva2VuIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsInRyYWlsaW5nSW5kZXgiLCJ0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJzdGFydCIsImVuZCIsInNsaWNlIiwibWFwIiwidG9rZW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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