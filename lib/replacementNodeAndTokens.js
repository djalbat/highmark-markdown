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
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                var tokens = context.tokens;
                var offset = offsetFromNodeAndTokens(node, tokens), replacementTokens = replacementTokensFromNodeAndTokens(node, tokens);
                node = node.clone(); ///
                replaceNodeTokens(node, replacementTokens, offset, tokens);
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
function replaceNodeTokens(node, replacementTokens, offset, tokens) {
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node; ///
        replaceTerminalNodeTokens(terminalNode, replacementTokens, offset, tokens);
    } else {
        var nonTerminalNode = node; ///
        replaceNonTerminalNodeTokens(nonTerminalNode, replacementTokens, offset, tokens);
    }
}
function replaceChildNodesTokens(childNodes, replacementTokens, offset, tokens) {
    childNodes.forEach(function(childNode) {
        var node = childNode; ///
        replaceNodeTokens(node, replacementTokens, offset, tokens);
    });
}
function replaceTerminalNodeTokens(terminalNode, replacementTokens, offset, tokens) {
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
function replaceNonTerminalNodeTokens(nonTerminalNode, replacementTokens, offset, tokens) {
    var childNodes = nonTerminalNode.getChildNodes();
    replaceChildNodesTokens(childNodes, replacementTokens, offset, tokens);
}
function offsetFromNodeAndTokens(node, tokens) {
    var offset;
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node, significantToken = terminalNode.getSignificantToken();
        if (significantToken === null) {
            offset = -1;
        } else {
            var significantTokenIndex = tokens.indexOf(significantToken);
            offset = significantTokenIndex; ///
        }
    } else {
        var nonTerminalNode = node, firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken);
        offset = firstSignificantTokenIndex; ///
    }
    return offset;
}
function replacementTokensFromNodeAndTokens(node, tokens) {
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node, significantToken = terminalNode.getSignificantToken();
        if (significantToken === null) {
            tokens = [];
        } else {
            var token = significantToken; ///
            tokens = [
                token
            ];
        }
    } else {
        var nonTerminalNode = node, lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
        tokens = tokens.slice(start, end); ///
    }
    var replacementTokens = tokens.map(function(token) {
        var replacementToken = token.clone(); ///;
        return replacementToken;
    });
    return replacementTokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHsgcmV0dXJuIHRoaXMubm9kZS5nZXRDaGlsZE5vZGVzKCk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGxldCB7IHRva2VucyB9ID0gY29udGV4dDtcblxuICAgIGNvbnN0IG9mZnNldCA9IG9mZnNldEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSByZXBsYWNlbWVudFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICBub2RlID0gbm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXBsYWNlTm9kZVRva2Vucyhub2RlLCByZXBsYWNlbWVudFRva2Vucywgb2Zmc2V0LCB0b2tlbnMpO1xuXG4gICAgdG9rZW5zID0gcmVwbGFjZW1lbnRUb2tlbnM7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zID0gbmV3IFJlcGxhY2VtZW50Tm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZUFuZFRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMgPSBuZXcgUmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VOb2RlVG9rZW5zKG5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIHRva2Vucykge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmVwbGFjZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIHRva2Vucyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIHRva2Vucyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXNUb2tlbnMoY2hpbGROb2RlcywgcmVwbGFjZW1lbnRUb2tlbnMsIG9mZnNldCwgdG9rZW5zKSB7XG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZXBsYWNlTm9kZVRva2Vucyhub2RlLCByZXBsYWNlbWVudFRva2Vucywgb2Zmc2V0LCB0b2tlbnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIHRva2Vucykge1xuICBsZXQgaW5kZXgsXG4gICAgICBzaWduaWZpY2FudFRva2VuO1xuXG4gIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgaW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIGluZGV4IC09IG9mZnNldDtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50VG9rZW4gPSByZXBsYWNlbWVudFRva2Vuc1tpbmRleF07XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gcmVwbGFjZW1lbnRUb2tlbjsgIC8vL1xuXG4gICAgdGVybWluYWxOb2RlLnNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIHRva2Vucykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICByZXBsYWNlQ2hpbGROb2Rlc1Rva2VucyhjaGlsZE5vZGVzLCByZXBsYWNlbWVudFRva2Vucywgb2Zmc2V0LCB0b2tlbnMpO1xufVxuXG5mdW5jdGlvbiBvZmZzZXRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgbGV0IG9mZnNldDtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IG51bGwpIHtcbiAgICAgIG9mZnNldCA9IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgb2Zmc2V0ID0gc2lnbmlmaWNhbnRUb2tlbkluZGV4OyAvLy9cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0U2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICBvZmZzZXQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgICAgdG9rZW5zID0gW1xuICAgICAgICB0b2tlblxuICAgICAgXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gICAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG4gIH1cblxuICBjb25zdCByZXBsYWNlbWVudFRva2VucyA9IHRva2Vucy5tYXAoKHRva2VuKSA9PiB7ICAvLy9cbiAgICBjb25zdCByZXBsYWNlbWVudFRva2VuID0gdG9rZW4uY2xvbmUoKTsgIC8vLztcblxuICAgIHJldHVybiByZXBsYWNlbWVudFRva2VuO1xuICB9KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRUb2tlbnM7XG59XG4iXSwibmFtZXMiOlsiUmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRDaGlsZE5vZGVzIiwiZnJvbU5vZGUiLCJjb250ZXh0Iiwib2Zmc2V0Iiwib2Zmc2V0RnJvbU5vZGVBbmRUb2tlbnMiLCJyZXBsYWNlbWVudFRva2VucyIsInJlcGxhY2VtZW50VG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMiLCJjbG9uZSIsInJlcGxhY2VOb2RlVG9rZW5zIiwicmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJyZXBsYWNlVGVybWluYWxOb2RlVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2VucyIsInJlcGxhY2VDaGlsZE5vZGVzVG9rZW5zIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJpbmRleCIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiaW5kZXhPZiIsInJlcGxhY2VtZW50VG9rZW4iLCJzZXRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSIsIm1hcCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSx5Q0FBRCxBQUFMO2FBQU1BLHlCQUNQQyxJQUFJLEVBQUVDLE1BQU07Z0NBRExGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSEdGOztZQU1uQkcsS0FBQUE7bUJBQUFB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