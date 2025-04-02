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
                var tokens = context.tokens, markdownNode = this.node, removedChildNodes = markdownNode.removeChildNodes(), addedTokens = this.tokens, addedNodes = removedChildNodes; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGFwcGVuZE5vZGUsXG4gICAgICAgICBwcmVwZW5kTm9kZSxcbiAgICAgICAgIHJlbW92ZU5vZGUsXG4gICAgICAgICByZXBsYWNlTm9kZSxcbiAgICAgICAgIGFkZE5vZGVzQWZ0ZXIsXG4gICAgICAgICBhcHBlbmRUb2tlbnMsXG4gICAgICAgICBwcmVwZW5kVG9rZW5zLFxuICAgICAgICAgcmVtb3ZlVG9rZW5zLFxuICAgICAgICAgcmVwbGFjZVRva2VucyxcbiAgICAgICAgIGFkZFRva2Vuc0FmdGVyLFxuICAgICAgICAgb3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyxcbiAgICAgICAgIGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zLCB9IGZyb20gXCIuL3V0aWxpdGllcy9yZXBsYWNlbWVudFwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnModG9rZW5zID0gW10pIHtcbiAgICBwdXNoKHRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgY29udHJhY3QoQ2xhc3MsIGRlc2NlbmRlbnROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoZGVzY2VuZGVudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVzY2VuZGVudE5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUmVwbGFjZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gZGVzY2VuZGVudE5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLnRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHsgLy8vXG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcGxhY2VtZW50ID0gQ2xhc3MuZnJvbU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIGV4cGFuZChDbGFzcywgYXNjZW5kYW50Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGFzY2VuZGFudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXNjZW5kYW50Tm9kZSA9IENsYXNzO1xuXG4gICAgICBDbGFzcyA9IFJlcGxhY2VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGFzY2VuZGFudE5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXBsYWNlbWVudCA9IENsYXNzLmZyb21Ob2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgYXBwZW5kZWROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgYXBwZW5kZWRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgYXBwZW5kTm9kZShhcHBlbmRlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgYXBwZW5kVG9rZW5zKGFwcGVuZGVkVG9rZW5zLCBwYXJlbnROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwcmVwZW5kZWROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgcHJlcGVuZGVkVG9rZW5zID0gdGhpcy50b2tlbnM7ICAvLy9cblxuICAgIHByZXBlbmROb2RlKHByZXBlbmRlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcHJlcGVuZFRva2VucyhwcmVwZW5kZWRUb2tlbnMsIHBhcmVudE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICBhZGRBZnRlcihleGlzdGluZ05vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gbWFya2Rvd25Ob2RlLnJlbW92ZUNoaWxkTm9kZXMoKSxcbiAgICAgICAgICBhZGRlZFRva2VucyA9IHRoaXMudG9rZW5zLCAgLy8vXG4gICAgICAgICAgYWRkZWROb2RlcyA9IHJlbW92ZWRDaGlsZE5vZGVzOyAgLy8vXG5cbiAgICBhZGROb2Rlc0FmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWROb2RlcywgcGFyZW50Tm9kZSk7XG5cbiAgICBhZGRUb2tlbnNBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkVG9rZW5zLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVwbGFjZShyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdGhpcy50b2tlbnM7IC8vL1xuXG4gICAgcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgcmVtb3ZlVG9rZW5zKHJlbW92ZWROb2RlLCB0b2tlbnMpO1xuXG4gICAgcmVtb3ZlTm9kZShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSk7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBjbG9uZWROb2RlID0gdGhpcy5ub2RlLmNsb25lKCksXG4gICAgICAgICAgY2xvbmVkVG9rZW5zID0gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnModGhpcy5ub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICBvdmVyd3JpdGVDbG9uZWROb2RlVG9rZW5zKGNsb25lZE5vZGUsIGNsb25lZFRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzLmNvbnN0cnVjdG9yLCAvLy9cbiAgICAgICAgICBub2RlID0gY2xvbmVkTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGNsb25lZFRva2VucywgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBuZXcgQ2xhc3Mobm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpO1xuXG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IG5vZGU7IC8vL1xuXG4gICAgICBub2RlID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJlcGxhY2VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgbGV0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgICAgY2xvbmVkTm9kZSA9IG5vZGUuY2xvbmUoKTtcblxuICAgIGxldCBjbG9uZWRUb2tlbnM7XG5cbiAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGNsb25lZFRva2VucyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDsgIC8vL1xuXG4gICAgICBjbG9uZWRUb2tlbnMgPSBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICBvdmVyd3JpdGVDbG9uZWROb2RlVG9rZW5zKGNsb25lZE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICAgIH1cblxuICAgIG5vZGUgPSBjbG9uZWROb2RlOyAgLy8vXG5cbiAgICB0b2tlbnMgPSBjbG9uZWRUb2tlbnM7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnQgPSBuZXcgQ2xhc3Mobm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKENsYXNzLCBub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0b2tlbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdG9rZW5zID0gbm9kZTsgIC8vL1xuXG4gICAgICBub2RlID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJlcGxhY2VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcmVwbGFjZW1lbnQgPSBuZXcgQ2xhc3Mobm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJSZXBsYWNlbWVudCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiY29udHJhY3QiLCJDbGFzcyIsImRlc2NlbmRlbnROb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY29udGV4dCIsInJlcGxhY2VtZW50IiwiZnJvbU5vZGUiLCJleHBhbmQiLCJhc2NlbmRhbnROb2RlIiwiYXBwZW5kVG8iLCJwYXJlbnROb2RlIiwiYXBwZW5kZWROb2RlIiwiYXBwZW5kZWRUb2tlbnMiLCJhcHBlbmROb2RlIiwiYXBwZW5kVG9rZW5zIiwicHJlcGVuZFRvIiwicHJlcGVuZGVkTm9kZSIsInByZXBlbmRlZFRva2VucyIsInByZXBlbmROb2RlIiwicHJlcGVuZFRva2VucyIsImFkZEFmdGVyIiwiZXhpc3RpbmdOb2RlIiwibWFya2Rvd25Ob2RlIiwicmVtb3ZlZENoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZE5vZGVzIiwiYWRkZWRUb2tlbnMiLCJhZGRlZE5vZGVzIiwiYWRkTm9kZXNBZnRlciIsImFkZFRva2Vuc0FmdGVyIiwicmVwbGFjZSIsInJlcGxhY2VkTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZU5vZGUiLCJyZXBsYWNlVG9rZW5zIiwicmVtb3ZlRnJvbSIsInJlbW92ZWROb2RlIiwicmVtb3ZlVG9rZW5zIiwicmVtb3ZlTm9kZSIsImNsb25lIiwiY2xvbmVkTm9kZSIsImNsb25lZFRva2VucyIsImNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwib3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyIsImNvbnN0cnVjdG9yIiwicG9wIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsIm9mZnNldCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW1CcUJBOzs7eUJBakJVOzJCQWFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDRCQUFOO2FBQU1BLFlBQ1BHLElBQUksRUFBRUMsTUFBTTtnQ0FETEo7UUFFakIsSUFBSSxDQUFDRyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFIR0o7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVVGLFNBQUFBLGlFQUFTLEVBQUU7Z0JBQ25CSCxLQUFLRyxRQUFRLElBQUksQ0FBQ0EsTUFBTTtnQkFFeEIsT0FBTyxJQUFJLENBQUNBLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsS0FBSyxFQUFFQyxjQUFjO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBWS9CRjtnQkFYcEIsSUFBSUMsbUJBQW1CRSxXQUFXO29CQUNoQ0YsaUJBQWlCRCxPQUFPLEdBQUc7b0JBRTNCQSxRQXBCZVIsYUFv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