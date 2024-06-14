"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReplacementNodeAndTokens;
    }
});
var _replace = require("./utilities/replace");
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
var ReplacementNodeAndTokens = /*#__PURE__*/ function() {
    function ReplacementNodeAndTokens(node, tokens) {
        _class_call_check(this, ReplacementNodeAndTokens);
        this.node = node;
        this.tokens = tokens;
    }
    _create_class(ReplacementNodeAndTokens, [
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
                var tokens = replacementTokens, replacementNodeAndTokens = new ReplacementNodeAndTokens(node, tokens);
                return replacementNodeAndTokens;
            }
        },
        {
            key: "appendTo",
            value: function appendTo(markdownNode, context) {
                var _tokens;
                var tokens = context.tokens, node = markdownNode, trailingIndex = (0, _replace.trailingIndexFromNodeAndTokens)(node, tokens), replacementNodeAndTokens = this.clone(), replacementNodeAndTokensNode = replacementNodeAndTokens.getNode(), replacementNodeAndTokensTokens = replacementNodeAndTokens.getTokens(), childNode = replacementNodeAndTokensNode, start = trailingIndex + 1, deleteCount = 0, replacementTokens = replacementNodeAndTokensTokens; ///
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
                var replacementTokens = replacementTokensFromNodeAndTokens(node, tokens), leadingIndex = (0, _replace.leadingIndexFromNodeAndTokens)(node, tokens), offset = leadingIndex; ///
                node = node.clone(); ///
                replaceNodeTokens(node, replacementTokens, tokens, offset);
                tokens = replacementTokens; ///
                var replacementNodeAndTokens = new ReplacementNodeAndTokens(node, tokens);
                return replacementNodeAndTokens;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var replacementNodeAndTokens = new ReplacementNodeAndTokens(node, tokens);
                return replacementNodeAndTokens;
            }
        }
    ]);
    return ReplacementNodeAndTokens;
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
    var leadingIndex = (0, _replace.leadingIndexFromNodeAndTokens)(node, tokens), trailingIndex = (0, _replace.trailingIndexFromNodeAndTokens)(node, tokens), start = leadingIndex, end = trailingIndex + 1;
    tokens = tokens.slice(start, end); ///
    var replacementTokens = tokens.map(function(token) {
        var replacementToken = token.clone(); ///;
        return replacementToken;
    });
    return replacementTokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zLCB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcmVwbGFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7IHJldHVybiB0aGlzLm5vZGUuZ2V0Q2hpbGROb2RlcygpOyB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZS5jbG9uZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gcmVwbGFjZW1lbnRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXBsYWNlTm9kZVRva2Vucyhub2RlLCByZXBsYWNlbWVudFRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gcmVwbGFjZW1lbnRUb2tlbnMsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyA9IG5ldyBSZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnNcbiAgfVxuXG4gIGFwcGVuZFRvKG1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIG5vZGUgPSBtYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHRyYWlsaW5nSW5kZXggPSB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMgPSB0aGlzLmNsb25lKCksICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnNOb2RlID0gcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnNUb2tlbnMgPSByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgY2hpbGROb2RlID0gcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zTm9kZSwgLy8vXG4gICAgICAgICAgc3RhcnQgPSB0cmFpbGluZ0luZGV4ICsgMSxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDAsXG4gICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnNUb2tlbnM7IC8vL1xuXG4gICAgbWFya2Rvd25Ob2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50VG9rZW5zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUb2tlbnMgPSByZXBsYWNlbWVudFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbGVhZGluZ0luZGV4ID0gbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBvZmZzZXQgPSBsZWFkaW5nSW5kZXg7ICAvLy9cblxuICAgIG5vZGUgPSBub2RlLmNsb25lKCk7ICAvLy9cblxuICAgIHJlcGxhY2VOb2RlVG9rZW5zKG5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG5cbiAgICB0b2tlbnMgPSByZXBsYWNlbWVudFRva2VuczsgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMgPSBuZXcgUmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyA9IG5ldyBSZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZU5vZGVUb2tlbnMobm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIHRva2Vucywgb2Zmc2V0ID0gMCkge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmVwbGFjZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXNUb2tlbnMoY2hpbGROb2RlcywgcmVwbGFjZW1lbnRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZXBsYWNlTm9kZVRva2Vucyhub2RlLCByZXBsYWNlbWVudFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCB0b2tlbnMsIG9mZnNldCkge1xuICBsZXQgaW5kZXgsXG4gICAgICBzaWduaWZpY2FudFRva2VuO1xuXG4gIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgaW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIGluZGV4IC09IG9mZnNldDtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50VG9rZW4gPSByZXBsYWNlbWVudFRva2Vuc1tpbmRleF07XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gcmVwbGFjZW1lbnRUb2tlbjsgIC8vL1xuXG4gICAgdGVybWluYWxOb2RlLnNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCB0b2tlbnMsIG9mZnNldCkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICByZXBsYWNlQ2hpbGROb2Rlc1Rva2VucyhjaGlsZE5vZGVzLCByZXBsYWNlbWVudFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBsZWFkaW5nSW5kZXggPSBsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICB0cmFpbGluZ0luZGV4ID0gdHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gbGVhZGluZ0luZGV4LCAgLy8vXG4gICAgICAgIGVuZCA9IHRyYWlsaW5nSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gIGNvbnN0IHJlcGxhY2VtZW50VG9rZW5zID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHsgIC8vL1xuICAgIGNvbnN0IHJlcGxhY2VtZW50VG9rZW4gPSB0b2tlbi5jbG9uZSgpOyAgLy8vO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50VG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFRva2Vucztcbn1cbiJdLCJuYW1lcyI6WyJSZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldENoaWxkTm9kZXMiLCJjbG9uZSIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZW1lbnRUb2tlbnNGcm9tTm9kZUFuZFRva2VucyIsInJlcGxhY2VOb2RlVG9rZW5zIiwicmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zIiwiYXBwZW5kVG8iLCJtYXJrZG93bk5vZGUiLCJjb250ZXh0IiwidHJhaWxpbmdJbmRleCIsInRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsInJlcGxhY2VtZW50Tm9kZUFuZFRva2Vuc05vZGUiLCJyZXBsYWNlbWVudE5vZGVBbmRUb2tlbnNUb2tlbnMiLCJjaGlsZE5vZGUiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiYXBwZW5kQ2hpbGROb2RlIiwic3BsaWNlIiwiZnJvbU5vZGUiLCJsZWFkaW5nSW5kZXgiLCJsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsIm9mZnNldCIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZVRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVUb2tlbnMiLCJyZXBsYWNlQ2hpbGROb2Rlc1Rva2VucyIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImluZGV4T2YiLCJyZXBsYWNlbWVudFRva2VuIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsImVuZCIsInNsaWNlIiwibWFwIiwidG9rZW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3VCQUZ5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELElBQUEsQUFBTUEseUNBQUQsQUFBTDthQUFNQSx5QkFDUEMsSUFBSSxFQUFFQyxNQUFNO2dDQURMRjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUhHRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNs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