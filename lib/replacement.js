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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMsIHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkgeyByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkTm9kZXMoKTsgfVxuXG4gIGNvbnRyYWN0KGRlc2NlbmRlbnROb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRlc2NlbmRlbnROb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7IC8vL1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cblxuICBleHBhbmQoYXNjZW5kYW50Tm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBhc2NlbmRhbnROb2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLnRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBSZXBsYWNlbWVudC5mcm9tTm9kZShub2RlLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZS5jbG9uZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gcmVwbGFjZW1lbnRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXBsYWNlTm9kZVRva2Vucyhub2RlLCByZXBsYWNlbWVudFRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gcmVwbGFjZW1lbnRUb2tlbnMsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gbmV3IFJlcGxhY2VtZW50KG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRcbiAgfVxuXG4gIGFwcGVuZFRvKG1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIG5vZGUgPSBtYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHRyYWlsaW5nSW5kZXggPSB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICByZXBsYWNlbWVudCA9IHRoaXMuY2xvbmUoKSwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHJlcGxhY2VtZW50LmdldFRva2VucygpLFxuICAgICAgICAgIGNoaWxkTm9kZSA9IHJlcGxhY2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc3RhcnQgPSB0cmFpbGluZ0luZGV4ICsgMSxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgICBtYXJrZG93bk5vZGUuYXBwZW5kQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG5cbiAgICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRUb2tlbnMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgeyB0b2tlbnMgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudFRva2VucyA9IHJlcGxhY2VtZW50VG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBsZWFkaW5nSW5kZXggPSBsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG9mZnNldCA9IGxlYWRpbmdJbmRleDsgIC8vL1xuXG4gICAgbm9kZSA9IG5vZGUuY2xvbmUoKTsgIC8vL1xuXG4gICAgcmVwbGFjZU5vZGVUb2tlbnMobm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgIHRva2VucyA9IHJlcGxhY2VtZW50VG9rZW5zOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gbmV3IFJlcGxhY2VtZW50KG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnQgPSBuZXcgUmVwbGFjZW1lbnQobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlTm9kZVRva2Vucyhub2RlLCByZXBsYWNlbWVudFRva2VucywgdG9rZW5zLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXBsYWNlVGVybWluYWxOb2RlVG9rZW5zKHRlcm1pbmFsTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXBsYWNlTm9uVGVybWluYWxOb2RlVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2Rlc1Rva2VucyhjaGlsZE5vZGVzLCByZXBsYWNlbWVudFRva2VucywgdG9rZW5zLCBvZmZzZXQpIHtcbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgIHJlcGxhY2VOb2RlVG9rZW5zKG5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGVybWluYWxOb2RlVG9rZW5zKHRlcm1pbmFsTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGxldCBpbmRleCxcbiAgICAgIHNpZ25pZmljYW50VG9rZW47XG5cbiAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgaW5kZXggLT0gb2Zmc2V0O1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUb2tlbiA9IHJlcGxhY2VtZW50VG9rZW5zW2luZGV4XTtcblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSByZXBsYWNlbWVudFRva2VuOyAgLy8vXG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlTm9uVGVybWluYWxOb2RlVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIHJlcGxhY2VDaGlsZE5vZGVzVG9rZW5zKGNoaWxkTm9kZXMsIHJlcGxhY2VtZW50VG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50VG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGxlYWRpbmdJbmRleCA9IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHRyYWlsaW5nSW5kZXggPSB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBsZWFkaW5nSW5kZXgsICAvLy9cbiAgICAgICAgZW5kID0gdHJhaWxpbmdJbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgY29uc3QgcmVwbGFjZW1lbnRUb2tlbnMgPSB0b2tlbnMubWFwKCh0b2tlbikgPT4geyAgLy8vXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUb2tlbiA9IHRva2VuLmNsb25lKCk7ICAvLy87XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50VG9rZW5zO1xufVxuIl0sIm5hbWVzIjpbIlJlcGxhY2VtZW50Iiwibm9kZSIsInRva2VucyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRDaGlsZE5vZGVzIiwiY29udHJhY3QiLCJkZXNjZW5kZW50Tm9kZSIsImNvbnRleHQiLCJyZXBsYWNlbWVudCIsImZyb21Ob2RlIiwiZXhwYW5kIiwiYXNjZW5kYW50Tm9kZSIsImNsb25lIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlbWVudFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwicmVwbGFjZU5vZGVUb2tlbnMiLCJhcHBlbmRUbyIsIm1hcmtkb3duTm9kZSIsInRyYWlsaW5nSW5kZXgiLCJ0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJyZXBsYWNlbWVudE5vZGUiLCJjaGlsZE5vZGUiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiYXBwZW5kQ2hpbGROb2RlIiwic3BsaWNlIiwibGVhZGluZ0luZGV4IiwibGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJvZmZzZXQiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlTm9uVGVybWluYWxOb2RlVG9rZW5zIiwicmVwbGFjZUNoaWxkTm9kZXNUb2tlbnMiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImluZGV4Iiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJpbmRleE9mIiwicmVwbGFjZW1lbnRUb2tlbiIsInNldFNpZ25pZmljYW50VG9rZW4iLCJlbmQiLCJzbGljZSIsIm1hcCIsInRva2VuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Oztv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