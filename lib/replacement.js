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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGFwcGVuZE5vZGUsXG4gICAgICAgICBwcmVwZW5kTm9kZSxcbiAgICAgICAgIHJlbW92ZU5vZGUsXG4gICAgICAgICByZXBsYWNlTm9kZSxcbiAgICAgICAgIHJlcGxhY2VOb2RlcyxcbiAgICAgICAgIGFkZE5vZGVzQWZ0ZXIsXG4gICAgICAgICBhcHBlbmRUb2tlbnMsXG4gICAgICAgICBwcmVwZW5kVG9rZW5zLFxuICAgICAgICAgcmVtb3ZlVG9rZW5zLFxuICAgICAgICAgcmVwbGFjZVRva2VucyxcbiAgICAgICAgIGFkZFRva2Vuc0FmdGVyLFxuICAgICAgICAgb3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyxcbiAgICAgICAgIGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zLCB9IGZyb20gXCIuL3V0aWxpdGllcy9yZXBsYWNlbWVudFwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnModG9rZW5zID0gW10pIHtcbiAgICBwdXNoKHRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHsgcmV0dXJuIHRoaXMubm9kZS5nZXRDaGlsZE5vZGVzKCk7IH1cblxuICBjb250cmFjdChDbGFzcywgZGVzY2VuZGVudE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChkZXNjZW5kZW50Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZXNjZW5kZW50Tm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSZXBsYWNlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBkZXNjZW5kZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0geyAvLy9cbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBDbGFzcy5mcm9tTm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG5cbiAgZXhwYW5kKENsYXNzLCBhc2NlbmRhbnROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoYXNjZW5kYW50Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhc2NlbmRhbnROb2RlID0gQ2xhc3M7XG5cbiAgICAgIENsYXNzID0gUmVwbGFjZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gYXNjZW5kYW50Tm9kZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcGxhY2VtZW50ID0gQ2xhc3MuZnJvbU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBhcHBlbmRlZE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICBhcHBlbmRlZFRva2VucyA9IHRoaXMudG9rZW5zOyAgLy8vXG5cbiAgICBhcHBlbmROb2RlKGFwcGVuZGVkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICBhcHBlbmRUb2tlbnMoYXBwZW5kZWRUb2tlbnMsIHBhcmVudE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICBwcmVwZW5kVG8ocGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHByZXBlbmRlZE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICBwcmVwZW5kZWRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgcHJlcGVuZE5vZGUocHJlcGVuZGVkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICBwcmVwZW5kVG9rZW5zKHByZXBlbmRlZFRva2VucywgcGFyZW50Tm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIGFkZEFmdGVyKGV4aXN0aW5nTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGFkZGVkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgYWRkZWRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgYWRkTm9kZXNBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkTm9kZXMsIHBhcmVudE5vZGUpO1xuXG4gICAgYWRkVG9rZW5zQWZ0ZXIoZXhpc3RpbmdOb2RlLCBhZGRlZFRva2VucywgdG9rZW5zKTtcbiAgfVxuXG4gIHJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRoaXMudG9rZW5zOyAvLy9cblxuICAgIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJlcGxhY2VFeChyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSB0aGlzLnRva2VucywgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZXMgPSByZXBsYWNlbWVudENoaWxkTm9kZXM7IC8vL1xuXG4gICAgcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZW1vdmVGcm9tKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQ7XG5cbiAgICByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucyk7XG5cbiAgICByZW1vdmVOb2RlKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGNsb25lZE5vZGUgPSB0aGlzLm5vZGUuY2xvbmUoKSxcbiAgICAgICAgICBjbG9uZWRUb2tlbnMgPSBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyh0aGlzLm5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIG92ZXJ3cml0ZUNsb25lZE5vZGVUb2tlbnMoY2xvbmVkTm9kZSwgY2xvbmVkVG9rZW5zLCB0aGlzLnRva2Vucyk7XG5cbiAgICBjb25zdCBDbGFzcyA9IHRoaXMuY29uc3RydWN0b3IsIC8vL1xuICAgICAgICAgIG5vZGUgPSBjbG9uZWROb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gY2xvbmVkVG9rZW5zLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudCA9IG5ldyBDbGFzcyhub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gbm9kZTsgLy8vXG5cbiAgICAgIG5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUmVwbGFjZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBsZXQgeyB0b2tlbnMgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBjbG9uZWROb2RlID0gbm9kZS5jbG9uZSgpO1xuXG4gICAgbGV0IGNsb25lZFRva2VucztcblxuICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9PT0gbnVsbCkge1xuICAgICAgY2xvbmVkVG9rZW5zID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4OyAgLy8vXG5cbiAgICAgIGNsb25lZFRva2VucyA9IGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgIG92ZXJ3cml0ZUNsb25lZE5vZGVUb2tlbnMoY2xvbmVkTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gICAgfVxuXG4gICAgbm9kZSA9IGNsb25lZE5vZGU7ICAvLy9cblxuICAgIHRva2VucyA9IGNsb25lZFRva2VuczsgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudCA9IG5ldyBDbGFzcyhub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMoQ2xhc3MsIG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHRva2VucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0b2tlbnMgPSBub2RlOyAgLy8vXG5cbiAgICAgIG5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUmVwbGFjZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCByZXBsYWNlbWVudCA9IG5ldyBDbGFzcyhub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIlJlcGxhY2VtZW50IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwibm9kZSIsInRva2VucyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRDaGlsZE5vZGVzIiwiY29udHJhY3QiLCJDbGFzcyIsImRlc2NlbmRlbnROb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY29udGV4dCIsInJlcGxhY2VtZW50IiwiZnJvbU5vZGUiLCJleHBhbmQiLCJhc2NlbmRhbnROb2RlIiwiYXBwZW5kVG8iLCJwYXJlbnROb2RlIiwiYXBwZW5kZWROb2RlIiwiYXBwZW5kZWRUb2tlbnMiLCJhcHBlbmROb2RlIiwiYXBwZW5kVG9rZW5zIiwicHJlcGVuZFRvIiwicHJlcGVuZGVkTm9kZSIsInByZXBlbmRlZFRva2VucyIsInByZXBlbmROb2RlIiwicHJlcGVuZFRva2VucyIsImFkZEFmdGVyIiwiZXhpc3RpbmdOb2RlIiwiYWRkZWROb2RlcyIsImFkZGVkVG9rZW5zIiwiYWRkTm9kZXNBZnRlciIsImFkZFRva2Vuc0FmdGVyIiwicmVwbGFjZSIsInJlcGxhY2VkTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZU5vZGUiLCJyZXBsYWNlVG9rZW5zIiwicmVwbGFjZUV4IiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnROb2RlcyIsInJlcGxhY2VOb2RlcyIsInJlbW92ZUZyb20iLCJyZW1vdmVkTm9kZSIsInJlbW92ZVRva2VucyIsInJlbW92ZU5vZGUiLCJjbG9uZSIsImNsb25lZE5vZGUiLCJjbG9uZWRUb2tlbnMiLCJjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2VucyIsIm92ZXJ3cml0ZUNsb25lZE5vZGVUb2tlbnMiLCJjb25zdHJ1Y3RvciIsInBvcCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJvZmZzZXQiLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7O3lCQWxCVTsyQkFjZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCw0QkFBRCxBQUFMO2FBQU1BLFlBQ1BHLElBQUksRUFBRUMsTUFBTTtnQ0FETEo7UUFFakIsSUFBSSxDQUFDRyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFIR0o7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JB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