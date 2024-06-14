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
            key: "clone",
            value: function clone() {
                var node = this.node.clone(), replacementTokens = replacementTokensFromNodeAndTokens(node, this.tokens);
                replaceNodeTokens(node, replacementTokens, this.tokens);
                var tokens = replacementTokens, replacement = new Replacement(node, tokens);
                return replacement;
            }
        },
        {
            key: "appendTo",
            value: function appendTo(markdownNode, context) {
                var _tokens;
                var tokens = context.tokens, node = markdownNode, trailingIndex = (0, _node.trailingIndexFromNodeAndTokens)(node, tokens), replacement = this.clone(), replacementNode = replacement.getNode(), replacementTokens = replacement.getTokens(), childNode = replacementNode, start = trailingIndex + 1, deleteCount = 0;
                markdownNode.appendChildNode(childNode);
                (_tokens = tokens).splice.apply(_tokens, [
                    start,
                    deleteCount
                ].concat(_to_consumable_array(replacementTokens)));
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                var tokens = context.tokens;
                var replacementTokens = replacementTokensFromNodeAndTokens(node, tokens), leadingIndex = (0, _node.leadingIndexFromNodeAndTokens)(node, tokens), offset = leadingIndex; ///
                node = node.clone(); ///
                replaceNodeTokens(node, replacementTokens, tokens, offset);
                tokens = replacementTokens; ///
                var replacement = new Replacement(node, tokens);
                return replacement;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var replacement = new Replacement(node, tokens);
                return replacement;
            }
        }
    ]);
    return Replacement;
}();
function replaceNodeTokens(node, replacementTokens, tokens) {
    var offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node; ///
        replaceTerminalNodeTokens(terminalNode, replacementTokens, tokens, offset);
    } else {
        var nonTerminalNode = node; ///
        replaceNonTerminalNodeTokens(nonTerminalNode, replacementTokens, tokens, offset);
    }
}
function replaceChildNodesTokens(childNodes, replacementTokens, tokens, offset) {
    childNodes.forEach(function(childNode) {
        var node = childNode; ///
        replaceNodeTokens(node, replacementTokens, tokens, offset);
    });
}
function replaceTerminalNodeTokens(terminalNode, replacementTokens, tokens, offset) {
    var index, significantToken;
    significantToken = terminalNode.getSignificantToken();
    if (significantToken !== null) {
        index = tokens.indexOf(significantToken);
        index -= offset;
        var replacementToken = replacementTokens[index];
        significantToken = replacementToken; ///
        terminalNode.setSignificantToken(significantToken);
    }
}
function replaceNonTerminalNodeTokens(nonTerminalNode, replacementTokens, tokens, offset) {
    var childNodes = nonTerminalNode.getChildNodes();
    replaceChildNodesTokens(childNodes, replacementTokens, tokens, offset);
}
function replacementTokensFromNodeAndTokens(node, tokens) {
    var leadingIndex = (0, _node.leadingIndexFromNodeAndTokens)(node, tokens), trailingIndex = (0, _node.trailingIndexFromNodeAndTokens)(node, tokens), start = leadingIndex, end = trailingIndex + 1;
    tokens = tokens.slice(start, end); ///
    var replacementTokens = tokens.map(function(token) {
        var replacementToken = token.clone(); ///;
        return replacementToken;
    });
    return replacementTokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMsIHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkgeyByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkTm9kZXMoKTsgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGUuY2xvbmUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHJlcGxhY2VtZW50VG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmVwbGFjZU5vZGVUb2tlbnMobm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIHRoaXMudG9rZW5zKTtcblxuICAgIGNvbnN0IHRva2VucyA9IHJlcGxhY2VtZW50VG9rZW5zLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudCA9IG5ldyBSZXBsYWNlbWVudChub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50XG4gIH1cblxuICBhcHBlbmRUbyhtYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBub2RlID0gbWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICB0cmFpbGluZ0luZGV4ID0gdHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSB0aGlzLmNsb25lKCksICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSByZXBsYWNlbWVudC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSByZXBsYWNlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHN0YXJ0ID0gdHJhaWxpbmdJbmRleCArIDEsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gICAgbWFya2Rvd25Ob2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50VG9rZW5zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUb2tlbnMgPSByZXBsYWNlbWVudFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbGVhZGluZ0luZGV4ID0gbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBvZmZzZXQgPSBsZWFkaW5nSW5kZXg7ICAvLy9cblxuICAgIG5vZGUgPSBub2RlLmNsb25lKCk7ICAvLy9cblxuICAgIHJlcGxhY2VOb2RlVG9rZW5zKG5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG5cbiAgICB0b2tlbnMgPSByZXBsYWNlbWVudFRva2VuczsgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudCA9IG5ldyBSZXBsYWNlbWVudChub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gbmV3IFJlcGxhY2VtZW50KG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZU5vZGVUb2tlbnMobm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIHRva2Vucywgb2Zmc2V0ID0gMCkge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmVwbGFjZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXNUb2tlbnMoY2hpbGROb2RlcywgcmVwbGFjZW1lbnRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZXBsYWNlTm9kZVRva2Vucyhub2RlLCByZXBsYWNlbWVudFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCB0b2tlbnMsIG9mZnNldCkge1xuICBsZXQgaW5kZXgsXG4gICAgICBzaWduaWZpY2FudFRva2VuO1xuXG4gIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgaW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIGluZGV4IC09IG9mZnNldDtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50VG9rZW4gPSByZXBsYWNlbWVudFRva2Vuc1tpbmRleF07XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gcmVwbGFjZW1lbnRUb2tlbjsgIC8vL1xuXG4gICAgdGVybWluYWxOb2RlLnNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCB0b2tlbnMsIG9mZnNldCkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICByZXBsYWNlQ2hpbGROb2Rlc1Rva2VucyhjaGlsZE5vZGVzLCByZXBsYWNlbWVudFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBsZWFkaW5nSW5kZXggPSBsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICB0cmFpbGluZ0luZGV4ID0gdHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gbGVhZGluZ0luZGV4LCAgLy8vXG4gICAgICAgIGVuZCA9IHRyYWlsaW5nSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gIGNvbnN0IHJlcGxhY2VtZW50VG9rZW5zID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHsgIC8vL1xuICAgIGNvbnN0IHJlcGxhY2VtZW50VG9rZW4gPSB0b2tlbi5jbG9uZSgpOyAgLy8vO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50VG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFRva2Vucztcbn1cbiJdLCJuYW1lcyI6WyJSZXBsYWNlbWVudCIsIm5vZGUiLCJ0b2tlbnMiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0Q2hpbGROb2RlcyIsImNsb25lIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlbWVudFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwicmVwbGFjZU5vZGVUb2tlbnMiLCJyZXBsYWNlbWVudCIsImFwcGVuZFRvIiwibWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInRyYWlsaW5nSW5kZXgiLCJ0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJyZXBsYWNlbWVudE5vZGUiLCJjaGlsZE5vZGUiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiYXBwZW5kQ2hpbGROb2RlIiwic3BsaWNlIiwiZnJvbU5vZGUiLCJsZWFkaW5nSW5kZXgiLCJsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsIm9mZnNldCIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZVRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVUb2tlbnMiLCJyZXBsYWNlQ2hpbGROb2Rlc1Rva2VucyIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImluZGV4T2YiLCJyZXBsYWNlbWVudFRva2VuIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsImVuZCIsInNsaWNlIiwibWFwIiwidG9rZW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O29CQUZ5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELElBQUEsQUFBTUEsNEJBQUQsQUFBTDthQUFNQSxZQUNQQyxJQUFJLEVBQUVDLE1BQU07Z0NBRExGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSEdGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFrQixPQUFPLElBQUksQ0FBQ0osSUFBSSxDQUFDSSxhQUFhO1lBQUk7OztZQUVwREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNLLEtBQUssSUFDdEJDLG9CQUFvQkMsbUNBQW1DUCxNQUFNLElBQUksQ0FBQ0MsTUFBTTtnQkFFOUVPLGtCQUFrQlIsTUFBTU0sbUJBQW1CLElBQUksQ0FBQ0wsTUFBTTtnQkFFdEQsSUFBTUEsU0FBU0ssbUJBQ1RHLGNBQWMsSUF2QkhWLFlBdUJtQkMsTUFBTUM7Z0JBRTFDLE9BQU9RO1lBQ1Q7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