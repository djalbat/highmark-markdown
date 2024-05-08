"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ClonedNode;
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
var ClonedNode = /*#__PURE__*/ function() {
    function ClonedNode(node, tokens) {
        _class_call_check(this, ClonedNode);
        this.node = node;
        this.tokens = tokens;
    }
    _create_class(ClonedNode, [
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
                var clonedNode = new ClonedNode(node, tokens);
                return clonedNode;
            }
        }
    ]);
    return ClonedNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbG9uZWROb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9uZWROb2RlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkgeyByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkTm9kZXMoKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3Qgb2Zmc2V0ID0gb2Zmc2V0RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHJlcGxhY2VtZW50VG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgIG5vZGUgPSBub2RlLmNsb25lKCk7ICAvLy9cblxuICAgIHJlcGxhY2VOb2RlVG9rZW5zKG5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIHRva2Vucyk7XG5cbiAgICB0b2tlbnMgPSByZXBsYWNlbWVudFRva2VuczsgLy8vXG5cbiAgICBjb25zdCBjbG9uZWROb2RlID0gbmV3IENsb25lZE5vZGUobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBjbG9uZWROb2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VOb2RlVG9rZW5zKG5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIHRva2Vucykge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmVwbGFjZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIHRva2Vucyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIHRva2Vucyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXNUb2tlbnMoY2hpbGROb2RlcywgcmVwbGFjZW1lbnRUb2tlbnMsIG9mZnNldCwgdG9rZW5zKSB7XG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZXBsYWNlTm9kZVRva2Vucyhub2RlLCByZXBsYWNlbWVudFRva2Vucywgb2Zmc2V0LCB0b2tlbnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIHRva2Vucykge1xuICBsZXQgaW5kZXgsXG4gICAgICBzaWduaWZpY2FudFRva2VuO1xuXG4gIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgaW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIGluZGV4IC09IG9mZnNldDtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50VG9rZW4gPSByZXBsYWNlbWVudFRva2Vuc1tpbmRleF07XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gcmVwbGFjZW1lbnRUb2tlbjsgIC8vL1xuXG4gICAgdGVybWluYWxOb2RlLnNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIHRva2Vucykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICByZXBsYWNlQ2hpbGROb2Rlc1Rva2VucyhjaGlsZE5vZGVzLCByZXBsYWNlbWVudFRva2Vucywgb2Zmc2V0LCB0b2tlbnMpO1xufVxuXG5mdW5jdGlvbiBvZmZzZXRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgbGV0IG9mZnNldDtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IG51bGwpIHtcbiAgICAgIG9mZnNldCA9IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgb2Zmc2V0ID0gc2lnbmlmaWNhbnRUb2tlbkluZGV4OyAvLy9cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0U2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICBvZmZzZXQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgICAgdG9rZW5zID0gW1xuICAgICAgICB0b2tlblxuICAgICAgXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gICAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG4gIH1cblxuICBjb25zdCByZXBsYWNlbWVudFRva2VucyA9IHRva2Vucy5tYXAoKHRva2VuKSA9PiB7ICAvLy9cbiAgICBjb25zdCByZXBsYWNlbWVudFRva2VuID0gdG9rZW4uY2xvbmUoKTsgIC8vLztcblxuICAgIHJldHVybiByZXBsYWNlbWVudFRva2VuO1xuICB9KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRUb2tlbnM7XG59XG4iXSwibmFtZXMiOlsiQ2xvbmVkTm9kZSIsIm5vZGUiLCJ0b2tlbnMiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0Q2hpbGROb2RlcyIsImZyb21Ob2RlIiwiY29udGV4dCIsIm9mZnNldCIsIm9mZnNldEZyb21Ob2RlQW5kVG9rZW5zIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlbWVudFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwiY2xvbmUiLCJyZXBsYWNlTm9kZVRva2VucyIsImNsb25lZE5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJyZXBsYWNlVGVybWluYWxOb2RlVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2VucyIsInJlcGxhY2VDaGlsZE5vZGVzVG9rZW5zIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJpbmRleCIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiaW5kZXhPZiIsInJlcGxhY2VtZW50VG9rZW4iLCJzZXRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSIsIm1hcCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDJCQUFELEFBQUw7YUFBTUEsV0FDUEMsSUFBSSxFQUFFQyxNQUFNO2dDQURMRjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUhHRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBa0IsT0FBTyxJQUFJLENBQUNKLElBQUksQ0FBQ0ksYUFBYTtZQUFJOzs7O1lBRTdDQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTTCxJQUFJLEVBQUVNLE9BQU87Z0JBQzNCLElBQUksQUFBRUwsU0FBV0ssUUFBWEw7Z0JBRU4sSUFBTU0sU0FBU0Msd0JBQXdCUixNQUFNQyxTQUN2Q1Esb0JBQW9CQyxt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