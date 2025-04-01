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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
            key: "prependTo",
            value: function prependTo(parentNode, context) {
                var tokens = context.tokens, prependedNode = this.node, prependedTokens = this.tokens; ///
                (0, _replacement.prependNode)(prependedNode, parentNode);
                (0, _replacement.prependTokens)(prependedTokens, parentNode, tokens);
            }
        },
        {
            key: "addAfter",
            value: function addAfter(existingNode, parentNode, context) {
                var tokens = context.tokens, addedNodes = this.node.getChildNodes(), addedTokens = this.tokens; ///
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
                var clonedNode = this.node.clone(), clonedTokens = (0, _replacement.clonedTokensFromNodeAndTokens)(this.node, this.tokens);
                (0, _replacement.overwriteClonedNodeTokens)(clonedNode, clonedTokens, this.tokens);
                var Class = this.constructor, node = clonedNode, tokens = clonedTokens, replacement = _construct(Class, [
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
                var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), clonedNode = node.clone();
                var clonedTokens;
                if (firstSignificantTokenIndex === null) {
                    clonedTokens = [];
                } else {
                    var offset = firstSignificantTokenIndex; ///
                    clonedTokens = (0, _replacement.clonedTokensFromNodeAndTokens)(node, tokens);
                    (0, _replacement.overwriteClonedNodeTokens)(clonedNode, clonedTokens, tokens, offset);
                }
                node = clonedNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGFwcGVuZE5vZGUsXG4gICAgICAgICBwcmVwZW5kTm9kZSxcbiAgICAgICAgIHJlbW92ZU5vZGUsXG4gICAgICAgICByZXBsYWNlTm9kZSxcbiAgICAgICAgIGFkZE5vZGVzQWZ0ZXIsXG4gICAgICAgICBhcHBlbmRUb2tlbnMsXG4gICAgICAgICBwcmVwZW5kVG9rZW5zLFxuICAgICAgICAgcmVtb3ZlVG9rZW5zLFxuICAgICAgICAgcmVwbGFjZVRva2VucyxcbiAgICAgICAgIGFkZFRva2Vuc0FmdGVyLFxuICAgICAgICAgb3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyxcbiAgICAgICAgIGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zLCB9IGZyb20gXCIuL3V0aWxpdGllcy9yZXBsYWNlbWVudFwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnModG9rZW5zID0gW10pIHtcbiAgICBwdXNoKHRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgY29udHJhY3QoQ2xhc3MsIGRlc2NlbmRlbnROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoZGVzY2VuZGVudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVzY2VuZGVudE5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUmVwbGFjZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gZGVzY2VuZGVudE5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLnRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHsgLy8vXG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcGxhY2VtZW50ID0gQ2xhc3MuZnJvbU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIGV4cGFuZChDbGFzcywgYXNjZW5kYW50Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGFzY2VuZGFudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXNjZW5kYW50Tm9kZSA9IENsYXNzO1xuXG4gICAgICBDbGFzcyA9IFJlcGxhY2VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGFzY2VuZGFudE5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXBsYWNlbWVudCA9IENsYXNzLmZyb21Ob2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgYXBwZW5kZWROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgYXBwZW5kZWRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgYXBwZW5kTm9kZShhcHBlbmRlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgYXBwZW5kVG9rZW5zKGFwcGVuZGVkVG9rZW5zLCBwYXJlbnROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwcmVwZW5kZWROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgcHJlcGVuZGVkVG9rZW5zID0gdGhpcy50b2tlbnM7ICAvLy9cblxuICAgIHByZXBlbmROb2RlKHByZXBlbmRlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcHJlcGVuZFRva2VucyhwcmVwZW5kZWRUb2tlbnMsIHBhcmVudE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICBhZGRBZnRlcihleGlzdGluZ05vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBhZGRlZE5vZGVzID0gdGhpcy5ub2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgYWRkZWRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgYWRkTm9kZXNBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkTm9kZXMsIHBhcmVudE5vZGUpO1xuXG4gICAgYWRkVG9rZW5zQWZ0ZXIoZXhpc3RpbmdOb2RlLCBhZGRlZFRva2VucywgdG9rZW5zKTtcbiAgfVxuXG4gIHJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRoaXMudG9rZW5zOyAvLy9cblxuICAgIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJlbW92ZUZyb20ocmVtb3ZlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dDtcblxuICAgIHJlbW92ZVRva2VucyhyZW1vdmVkTm9kZSwgdG9rZW5zKTtcblxuICAgIHJlbW92ZU5vZGUocmVtb3ZlZE5vZGUsIHBhcmVudE5vZGUpO1xuICB9XG5cbiAgY2xvbmUoLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgY2xvbmVkTm9kZSA9IHRoaXMubm9kZS5jbG9uZSgpLFxuICAgICAgICAgIGNsb25lZFRva2VucyA9IGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKHRoaXMubm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgb3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyhjbG9uZWROb2RlLCBjbG9uZWRUb2tlbnMsIHRoaXMudG9rZW5zKTtcblxuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvciwgLy8vXG4gICAgICAgICAgbm9kZSA9IGNsb25lZE5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBjbG9uZWRUb2tlbnMsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudFxuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKENsYXNzLCBub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTtcblxuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSBub2RlOyAvLy9cblxuICAgICAgbm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGxldCB7IHRva2VucyB9ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICAgIGNsb25lZE5vZGUgPSBub2RlLmNsb25lKCk7XG5cbiAgICBsZXQgY2xvbmVkVG9rZW5zO1xuXG4gICAgaWYgKGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBjbG9uZWRUb2tlbnMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7ICAvLy9cblxuICAgICAgY2xvbmVkVG9rZW5zID0gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgb3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyhjbG9uZWROb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgICB9XG5cbiAgICBub2RlID0gY2xvbmVkTm9kZTsgIC8vL1xuXG4gICAgdG9rZW5zID0gY2xvbmVkVG9rZW5zOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2VucyhDbGFzcywgbm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodG9rZW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRva2VucyA9IG5vZGU7ICAvLy9cblxuICAgICAgbm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiUmVwbGFjZW1lbnQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJub2RlIiwidG9rZW5zIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImNvbnRyYWN0IiwiQ2xhc3MiLCJkZXNjZW5kZW50Tm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInVuZGVmaW5lZCIsImNvbnRleHQiLCJyZXBsYWNlbWVudCIsImZyb21Ob2RlIiwiZXhwYW5kIiwiYXNjZW5kYW50Tm9kZSIsImFwcGVuZFRvIiwicGFyZW50Tm9kZSIsImFwcGVuZGVkTm9kZSIsImFwcGVuZGVkVG9rZW5zIiwiYXBwZW5kTm9kZSIsImFwcGVuZFRva2VucyIsInByZXBlbmRUbyIsInByZXBlbmRlZE5vZGUiLCJwcmVwZW5kZWRUb2tlbnMiLCJwcmVwZW5kTm9kZSIsInByZXBlbmRUb2tlbnMiLCJhZGRBZnRlciIsImV4aXN0aW5nTm9kZSIsImFkZGVkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiYWRkZWRUb2tlbnMiLCJhZGROb2Rlc0FmdGVyIiwiYWRkVG9rZW5zQWZ0ZXIiLCJyZXBsYWNlIiwicmVwbGFjZWROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlTm9kZSIsInJlcGxhY2VUb2tlbnMiLCJyZW1vdmVGcm9tIiwicmVtb3ZlZE5vZGUiLCJyZW1vdmVUb2tlbnMiLCJyZW1vdmVOb2RlIiwiY2xvbmUiLCJjbG9uZWROb2RlIiwiY2xvbmVkVG9rZW5zIiwiY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMiLCJvdmVyd3JpdGVDbG9uZWROb2RlVG9rZW5zIiwiY29uc3RydWN0b3IiLCJwb3AiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2ln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