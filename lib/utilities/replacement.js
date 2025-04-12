"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    addNodeAfter: function() {
        return addNodeAfter;
    },
    addNodesAfter: function() {
        return addNodesAfter;
    },
    addTokensAfter: function() {
        return addTokensAfter;
    },
    appendNode: function() {
        return appendNode;
    },
    appendTokens: function() {
        return appendTokens;
    },
    clonedTokensFromNodeAndTokens: function() {
        return clonedTokensFromNodeAndTokens;
    },
    overwriteClonedNodeTokens: function() {
        return overwriteClonedNodeTokens;
    },
    prependNode: function() {
        return prependNode;
    },
    prependTokens: function() {
        return prependTokens;
    },
    removeNode: function() {
        return removeNode;
    },
    removeNodes: function() {
        return removeNodes;
    },
    removeTokens: function() {
        return removeTokens;
    },
    replaceNode: function() {
        return replaceNode;
    },
    replaceNodes: function() {
        return replaceNodes;
    },
    replaceTokens: function() {
        return replaceTokens;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function appendNode(appendedNode, parentNode) {
    var appendedChildNode = appendedNode; ///
    parentNode.appendChildNode(appendedChildNode);
}
function prependNode(prependedNode, parentNode) {
    var prependedChildNode = prependedNode; ///
    parentNode.prependChildNode(prependedChildNode);
}
function removeNode(removedNode, parentNode) {
    var removedChildNode = removedNode; ///
    parentNode.removeChildNode(removedChildNode);
}
function removeNodes(removedNodes, parentNode) {
    var removedChildNodes = removedNodes; ///
    parentNode.removeChildNodes(removedChildNodes);
}
function replaceNode(replacementNode, replacedNode, parentNode) {
    var replacedChildNode = replacedNode, replacementChildNode = replacementNode, replacementChildNodes = [
        replacementChildNode
    ];
    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
}
function replaceNodes(replacementNodes, replacedNode, parentNode) {
    var replacedChildNode = replacedNode, replacementChildNodes = replacementNodes; ///
    parentNode.replaceChildNodes(replacedChildNode, replacementChildNodes);
}
function addNodeAfter(existingNode, addedNode, parentNode) {
    var childNode = existingNode, index = parentNode.indexOfChildNode(childNode), addedChildNode = addedNode, startIndex = index + 1;
    parentNode.addChildNode(addedChildNode, startIndex);
}
function addNodesAfter(existingNode, addedNodes, parentNode) {
    var childNode = existingNode, index = parentNode.indexOfChildNode(childNode), addedChildNodes = addedNodes, startIndex = index + 1;
    parentNode.addChildNodes(addedChildNodes, startIndex);
}
function appendTokens(appendedTokens, parentNode, tokens) {
    var _tokens;
    var node = parentNode, lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens), start = lastSignificantTokenIndex + 1, deleteCount = 0;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(appendedTokens)));
}
function prependTokens(prependedTokens, parentNode, tokens) {
    var _tokens;
    var node = parentNode, firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, deleteCount = 0;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(prependedTokens)));
}
function removeTokens(removedNode, tokens) {
    var node = removedNode, firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1, deleteCount = end - start;
    tokens.splice(start, deleteCount);
}
function replaceTokens(replacementTokens, replacedNode, tokens) {
    var _tokens;
    var node = replacedNode, firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1, deleteCount = end - start;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementTokens)));
}
function addTokensAfter(existingNode, addedTokens, tokens) {
    var _tokens;
    var node = existingNode, lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens), start = lastSignificantTokenIndex + 1, deleteCount = 0;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(addedTokens)));
}
function overwriteClonedNodeTokens(clonedNode, clonedTokens, tokens) {
    var offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    var node = clonedNode; ///
    overwriteNodeTokens(node, clonedTokens, tokens, offset);
}
function clonedTokensFromNodeAndTokens(node, tokens) {
    var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    var clonedTokens = tokens.map(function(token) {
        var clonedToken = token.clone();
        return clonedToken;
    });
    return clonedTokens;
}
function overwriteNodeTokens(node, clonedTokens, tokens, offset) {
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node; ///
        overwriteTerminalNodeTokens(terminalNode, clonedTokens, tokens, offset);
    } else {
        var nonTerminalNode = node; ///
        overwriteNonTerminalNodeTokens(nonTerminalNode, clonedTokens, tokens, offset);
    }
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
    nonTerminalNode.forEachChildNode(function(childNode) {
        var clonedNode = childNode; ///
        overwriteNodeTokens(clonedNode, clonedTokens, tokens, offset);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVwbGFjZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmROb2RlKGFwcGVuZGVkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCBhcHBlbmRlZENoaWxkTm9kZSA9IGFwcGVuZGVkTm9kZTsgIC8vL1xuXG4gIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGROb2RlKGFwcGVuZGVkQ2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmROb2RlKHByZXBlbmRlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcHJlcGVuZGVkQ2hpbGROb2RlID0gcHJlcGVuZGVkTm9kZTsgIC8vL1xuXG4gIHBhcmVudE5vZGUucHJlcGVuZENoaWxkTm9kZShwcmVwZW5kZWRDaGlsZE5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZW1vdmVkQ2hpbGROb2RlID0gcmVtb3ZlZE5vZGU7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGROb2RlKHJlbW92ZWRDaGlsZE5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZXMocmVtb3ZlZE5vZGVzLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlbW92ZWRDaGlsZE5vZGVzID0gcmVtb3ZlZE5vZGVzOyAvLy9cblxuICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGUgPSByZXBsYWNlbWVudE5vZGUsIC8vL1xuICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVcbiAgICAgICAgXTtcblxuICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTm9kZXMocmVwbGFjZW1lbnROb2RlcywgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IHJlcGxhY2VtZW50Tm9kZXM7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROb2RlQWZ0ZXIoZXhpc3RpbmdOb2RlLCBhZGRlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlID0gZXhpc3RpbmdOb2RlLCAvLy9cbiAgICAgICAgaW5kZXggPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlKSxcbiAgICAgICAgYWRkZWRDaGlsZE5vZGUgPSBhZGRlZE5vZGUsIC8vL1xuICAgICAgICBzdGFydEluZGV4ID0gaW5kZXggKyAxO1xuXG4gIHBhcmVudE5vZGUuYWRkQ2hpbGROb2RlKGFkZGVkQ2hpbGROb2RlLCBzdGFydEluZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5vZGVzQWZ0ZXIoZXhpc3RpbmdOb2RlLCBhZGRlZE5vZGVzLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZSA9IGV4aXN0aW5nTm9kZSwgLy8vXG4gICAgICAgIGluZGV4ID0gcGFyZW50Tm9kZS5pbmRleE9mQ2hpbGROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgIGFkZGVkQ2hpbGROb2RlcyA9IGFkZGVkTm9kZXMsIC8vL1xuICAgICAgICBzdGFydEluZGV4ID0gaW5kZXggKyAxO1xuXG4gIHBhcmVudE5vZGUuYWRkQ2hpbGROb2RlcyhhZGRlZENoaWxkTm9kZXMsIHN0YXJ0SW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9rZW5zKGFwcGVuZGVkVG9rZW5zLCBwYXJlbnROb2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZSA9IHBhcmVudE5vZGUsIC8vL1xuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXBwZW5kZWRUb2tlbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZFRva2VucyhwcmVwZW5kZWRUb2tlbnMsIHBhcmVudE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcGFyZW50Tm9kZSwgLy8vXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnByZXBlbmRlZFRva2Vucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcmVtb3ZlZE5vZGUsICAvLy9cbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudFRva2Vucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2tlbnNBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkVG9rZW5zLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZSA9IGV4aXN0aW5nTm9kZSwgIC8vL1xuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYWRkZWRUb2tlbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyhjbG9uZWROb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0ID0gMCkge1xuICBjb25zdCBub2RlID0gY2xvbmVkTm9kZTsgIC8vL1xuXG4gIG92ZXJ3cml0ZU5vZGVUb2tlbnMobm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMTtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICBjb25zdCBjbG9uZWRUb2tlbnMgPSB0b2tlbnMubWFwKCh0b2tlbikgPT4geyAgLy8vXG4gICAgY29uc3QgY2xvbmVkVG9rZW4gPSB0b2tlbi5jbG9uZSgpO1xuXG4gICAgcmV0dXJuIGNsb25lZFRva2VuO1xuICB9KTtcblxuICByZXR1cm4gY2xvbmVkVG9rZW5zO1xufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIG92ZXJ3cml0ZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIG92ZXJ3cml0ZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG92ZXJ3cml0ZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpIHtcbiAgbGV0IGluZGV4LFxuICAgICAgc2lnbmlmaWNhbnRUb2tlbjtcblxuICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICBpbmRleCAtPSBvZmZzZXQ7XG5cbiAgICBjb25zdCBjbG9uZWRUb2tlbiA9IGNsb25lZFRva2Vuc1tpbmRleF07XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRlcm1pbmFsTm9kZS5zZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG92ZXJ3cml0ZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpIHtcbiAgbm9uVGVybWluYWxOb2RlLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNsb25lZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgb3ZlcndyaXRlTm9kZVRva2VucyhjbG9uZWROb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiYWRkTm9kZUFmdGVyIiwiYWRkTm9kZXNBZnRlciIsImFkZFRva2Vuc0FmdGVyIiwiYXBwZW5kTm9kZSIsImFwcGVuZFRva2VucyIsImNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwib3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyIsInByZXBlbmROb2RlIiwicHJlcGVuZFRva2VucyIsInJlbW92ZU5vZGUiLCJyZW1vdmVOb2RlcyIsInJlbW92ZVRva2VucyIsInJlcGxhY2VOb2RlIiwicmVwbGFjZU5vZGVzIiwicmVwbGFjZVRva2VucyIsImFwcGVuZGVkTm9kZSIsInBhcmVudE5vZGUiLCJhcHBlbmRlZENoaWxkTm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInByZXBlbmRlZE5vZGUiLCJwcmVwZW5kZWRDaGlsZE5vZGUiLCJwcmVwZW5kQ2hpbGROb2RlIiwicmVtb3ZlZE5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlIiwicmVtb3ZlQ2hpbGROb2RlIiwicmVtb3ZlZE5vZGVzIiwicmVtb3ZlZENoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZWROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZUNoaWxkTm9kZXMiLCJleGlzdGluZ05vZGUiLCJhZGRlZE5vZGUiLCJjaGlsZE5vZGUiLCJpbmRleCIsImluZGV4T2ZDaGlsZE5vZGUiLCJhZGRlZENoaWxkTm9kZSIsInN0YXJ0SW5kZXgiLCJhZGRDaGlsZE5vZGUiLCJhZGRlZE5vZGVzIiwiYWRkZWRDaGlsZE5vZGVzIiwiYWRkQ2hpbGROb2RlcyIsImFwcGVuZGVkVG9rZW5zIiwidG9rZW5zIiwibm9kZSIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInByZXBlbmRlZFRva2VucyIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJlbmQiLCJyZXBsYWNlbWVudFRva2VucyIsImFkZGVkVG9rZW5zIiwiY2xvbmVkTm9kZSIsImNsb25lZFRva2VucyIsIm9mZnNldCIsIm92ZXJ3cml0ZU5vZGVUb2tlbnMiLCJzbGljZSIsIm1hcCIsInRva2VuIiwiY2xvbmVkVG9rZW4iLCJjbG9uZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsIm92ZXJ3cml0ZVRlcm1pbmFsTm9kZVRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsIm92ZXJ3cml0ZU5vblRlcm1pbmFsTm9kZVRva2VucyIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiaW5kZXhPZiIsInNldFNpZ25pZmljYW50VG9rZW4iLCJmb3JFYWNoQ2hpbGROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEyQ2dCQSxZQUFZO2VBQVpBOztJQVNBQyxhQUFhO2VBQWJBOztJQWlEQUMsY0FBYztlQUFkQTs7SUFuR0FDLFVBQVU7ZUFBVkE7O0lBMkRBQyxZQUFZO2VBQVpBOztJQXVEQUMsNkJBQTZCO2VBQTdCQTs7SUFOQUMseUJBQXlCO2VBQXpCQTs7SUF0R0FDLFdB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