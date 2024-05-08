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
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbG9uZWROb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9uZWROb2RlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkgeyByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkTm9kZXMoKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBvZmZzZXRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gcmVwbGFjZW1lbnRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgbm9kZSA9IG5vZGUuY2xvbmUoKTsgIC8vL1xuXG4gICAgcmVwbGFjZU5vZGVUb2tlbnMobm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIG9mZnNldCwgdG9rZW5zKTtcblxuICAgIHRva2VucyA9IHJlcGxhY2VtZW50VG9rZW5zOyAvLy9cblxuICAgIGNvbnN0IGNsb25lZE5vZGUgPSBuZXcgQ2xvbmVkTm9kZShub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGNsb25lZE5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZU5vZGVUb2tlbnMobm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIG9mZnNldCwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXBsYWNlVGVybWluYWxOb2RlVG9rZW5zKHRlcm1pbmFsTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIG9mZnNldCwgdG9rZW5zKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXBsYWNlTm9uVGVybWluYWxOb2RlVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIG9mZnNldCwgdG9rZW5zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2Rlc1Rva2VucyhjaGlsZE5vZGVzLCByZXBsYWNlbWVudFRva2Vucywgb2Zmc2V0LCB0b2tlbnMpIHtcbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgIHJlcGxhY2VOb2RlVG9rZW5zKG5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIHRva2Vucyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGVybWluYWxOb2RlVG9rZW5zKHRlcm1pbmFsTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIG9mZnNldCwgdG9rZW5zKSB7XG4gIGxldCBpbmRleCxcbiAgICAgIHNpZ25pZmljYW50VG9rZW47XG5cbiAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgaW5kZXggLT0gb2Zmc2V0O1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUb2tlbiA9IHJlcGxhY2VtZW50VG9rZW5zW2luZGV4XTtcblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSByZXBsYWNlbWVudFRva2VuOyAgLy8vXG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlTm9uVGVybWluYWxOb2RlVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIG9mZnNldCwgdG9rZW5zKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIHJlcGxhY2VDaGlsZE5vZGVzVG9rZW5zKGNoaWxkTm9kZXMsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIHRva2Vucyk7XG59XG5cbmZ1bmN0aW9uIG9mZnNldEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBsZXQgb2Zmc2V0O1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgb2Zmc2V0ID0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgICBvZmZzZXQgPSBzaWduaWZpY2FudFRva2VuSW5kZXg7IC8vL1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RTaWduaWZpY2FudFRva2VuKTtcblxuICAgIG9mZnNldCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4OyAgLy8vXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgICB0b2tlbnMgPSBbXG4gICAgICAgIHRva2VuXG4gICAgICBdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGxhc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IHJlcGxhY2VtZW50VG9rZW5zID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHsgIC8vL1xuICAgIGNvbnN0IHJlcGxhY2VtZW50VG9rZW4gPSB0b2tlbi5jbG9uZSgpOyAgLy8vO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50VG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFRva2Vucztcbn1cbiJdLCJuYW1lcyI6WyJDbG9uZWROb2RlIiwibm9kZSIsInRva2VucyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRDaGlsZE5vZGVzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJvZmZzZXQiLCJvZmZzZXRGcm9tTm9kZUFuZFRva2VucyIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZW1lbnRUb2tlbnNGcm9tTm9kZUFuZFRva2VucyIsImNsb25lIiwicmVwbGFjZU5vZGVUb2tlbnMiLCJjbG9uZWROb2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZVRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVUb2tlbnMiLCJyZXBsYWNlQ2hpbGROb2Rlc1Rva2VucyIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImluZGV4T2YiLCJyZXBsYWNlbWVudFRva2VuIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5JbmRleCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwidG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJtYXAiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDJCQUFELEFBQUw7YUFBTUEsV0FDUEMsSUFBSSxFQUFFQyxNQUFNO2dDQURMRjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUhHRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBa0IsT0FBTyxJQUFJLENBQUNKLElBQUksQ0FBQ0ksYUFBYTtZQUFJOzs7O1lBRTdDQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JMLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUssU0FBU0Msd0JBQXdCUCxNQUFNQyxTQUN2Q08sb0JBQW9CQyxtQ0FBbUNULE1BQU1DO2dCQUVuRUQsT0FBT0EsS0FBS1UsS0FBSyxJQUFLLEdBQUc7Z0JBRXpC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