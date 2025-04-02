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
function addNodesAfter(existingNode, addedNodes, parentNode) {
    var existingChildNode = existingNode, addedChildNodes = addedNodes; ///
    parentNode.addChildNodesAfter(existingChildNode, addedChildNodes);
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
function addNodeAfter(existingNode, addedNode, parentNode) {
    var existingChildNode = existingNode, addedChildNode = addedNode; ///
    parentNode.appendChildNodeAfter(existingChildNode, addedChildNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVwbGFjZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmROb2RlKGFwcGVuZGVkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCBhcHBlbmRlZENoaWxkTm9kZSA9IGFwcGVuZGVkTm9kZTsgIC8vL1xuXG4gIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGROb2RlKGFwcGVuZGVkQ2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmROb2RlKHByZXBlbmRlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcHJlcGVuZGVkQ2hpbGROb2RlID0gcHJlcGVuZGVkTm9kZTsgIC8vL1xuXG4gIHBhcmVudE5vZGUucHJlcGVuZENoaWxkTm9kZShwcmVwZW5kZWRDaGlsZE5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZW1vdmVkQ2hpbGROb2RlID0gcmVtb3ZlZE5vZGU7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGROb2RlKHJlbW92ZWRDaGlsZE5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZXMocmVtb3ZlZE5vZGVzLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlbW92ZWRDaGlsZE5vZGVzID0gcmVtb3ZlZE5vZGVzOyAvLy9cblxuICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGUgPSByZXBsYWNlbWVudE5vZGUsIC8vL1xuICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVcbiAgICAgICAgXTtcblxuICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTm9kZXMocmVwbGFjZW1lbnROb2RlcywgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IHJlcGxhY2VtZW50Tm9kZXM7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROb2Rlc0FmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWROb2RlcywgcGFyZW50Tm9kZSkge1xuICBjb25zdCBleGlzdGluZ0NoaWxkTm9kZSA9IGV4aXN0aW5nTm9kZSwgLy8vXG4gICAgICAgIGFkZGVkQ2hpbGROb2RlcyA9IGFkZGVkTm9kZXM7IC8vL1xuXG4gIHBhcmVudE5vZGUuYWRkQ2hpbGROb2Rlc0FmdGVyKGV4aXN0aW5nQ2hpbGROb2RlLCBhZGRlZENoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9rZW5zKGFwcGVuZGVkVG9rZW5zLCBwYXJlbnROb2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZSA9IHBhcmVudE5vZGUsIC8vL1xuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXBwZW5kZWRUb2tlbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZFRva2VucyhwcmVwZW5kZWRUb2tlbnMsIHBhcmVudE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcGFyZW50Tm9kZSwgLy8vXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnByZXBlbmRlZFRva2Vucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcmVtb3ZlZE5vZGUsICAvLy9cbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudFRva2Vucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROb2RlQWZ0ZXIoZXhpc3RpbmdOb2RlLCBhZGRlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgZXhpc3RpbmdDaGlsZE5vZGUgPSBleGlzdGluZ05vZGUsIC8vL1xuICAgICAgICBhZGRlZENoaWxkTm9kZSA9IGFkZGVkTm9kZTsgLy8vXG5cbiAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGVBZnRlcihleGlzdGluZ0NoaWxkTm9kZSwgYWRkZWRDaGlsZE5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9rZW5zQWZ0ZXIoZXhpc3RpbmdOb2RlLCBhZGRlZFRva2VucywgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSBleGlzdGluZ05vZGUsICAvLy9cbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFkZGVkVG9rZW5zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJ3cml0ZUNsb25lZE5vZGVUb2tlbnMoY2xvbmVkTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCA9IDApIHtcbiAgY29uc3Qgbm9kZSA9IGNsb25lZE5vZGU7ICAvLy9cblxuICBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgY29uc3QgY2xvbmVkVG9rZW5zID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHsgIC8vL1xuICAgIGNvbnN0IGNsb25lZFRva2VuID0gdG9rZW4uY2xvbmUoKTtcblxuICAgIHJldHVybiBjbG9uZWRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNsb25lZFRva2Vucztcbn1cblxuZnVuY3Rpb24gb3ZlcndyaXRlTm9kZVRva2Vucyhub2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGxldCBpbmRleCxcbiAgICAgIHNpZ25pZmljYW50VG9rZW47XG5cbiAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgaW5kZXggLT0gb2Zmc2V0O1xuXG4gICAgY29uc3QgY2xvbmVkVG9rZW4gPSBjbG9uZWRUb2tlbnNbaW5kZXhdO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IGNsb25lZFRva2VuOyAgLy8vXG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIG5vblRlcm1pbmFsTm9kZS5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjbG9uZWROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgIG92ZXJ3cml0ZU5vZGVUb2tlbnMoY2xvbmVkTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImFkZE5vZGVBZnRlciIsImFkZE5vZGVzQWZ0ZXIiLCJhZGRUb2tlbnNBZnRlciIsImFwcGVuZE5vZGUiLCJhcHBlbmRUb2tlbnMiLCJjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2VucyIsIm92ZXJ3cml0ZUNsb25lZE5vZGVUb2tlbnMiLCJwcmVwZW5kTm9kZSIsInByZXBlbmRUb2tlbnMiLCJyZW1vdmVOb2RlIiwicmVtb3ZlTm9kZXMiLCJyZW1vdmVUb2tlbnMiLCJyZXBsYWNlTm9kZSIsInJlcGxhY2VOb2RlcyIsInJlcGxhY2VUb2tlbnMiLCJhcHBlbmRlZE5vZGUiLCJwYXJlbnROb2RlIiwiYXBwZW5kZWRDaGlsZE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJwcmVwZW5kZWROb2RlIiwicHJlcGVuZGVkQ2hpbGROb2RlIiwicHJlcGVuZENoaWxkTm9kZSIsInJlbW92ZWROb2RlIiwicmVtb3ZlZENoaWxkTm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsInJlbW92ZWROb2RlcyIsInJlbW92ZWRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlcyIsInJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVwbGFjZW1lbnRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZW1lbnROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGVzIiwiZXhpc3RpbmdOb2RlIiwiYWRkZWROb2RlcyIsImV4aXN0aW5nQ2hpbGROb2RlIiwiYWRkZWRDaGlsZE5vZGVzIiwiYWRkQ2hpbGROb2Rlc0FmdGVyIiwiYXBwZW5kZWRUb2tlbnMiLCJ0b2tlbnMiLCJub2RlIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicHJlcGVuZGVkVG9rZW5zIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImVuZCIsInJlcGxhY2VtZW50VG9rZW5zIiwiYWRkZWROb2RlIiwiYWRkZWRDaGlsZE5vZGUiLCJhcHBlbmRDaGlsZE5vZGVBZnRlciIsImFkZGVkVG9rZW5zIiwiY2xvbmVkTm9kZSIsImNsb25lZFRva2VucyIsIm9mZnNldCIsIm92ZXJ3cml0ZU5vZGVUb2tlbnMiLCJzbGljZSIsIm1hcCIsInRva2VuIiwiY2xvbmVkVG9rZW4iLCJjbG9uZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsIm92ZXJ3cml0ZVRlcm1pbmFsTm9kZVRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsIm92ZXJ3cml0ZU5vblRlcm1pbmFsTm9kZVRva2VucyIsImluZGV4Iiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJpbmRleE9mIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsImZvckVhY2hDaGlsZE5vZGUiLCJjaGlsZE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTBGZ0JBLFlBQVk7ZUFBWkE7O0lBL0NBQyxhQUFhO2VBQWJBOztJQXNEQUMsY0FBYztlQUFkQTs7SUEvRkFDLFVBQVU7ZUFBVkE7O0lBZ0RBQyxZQUFZO2VBQVpBOztJQThEQUMsNkJBQTZCO2VBQTdCQTs7SUFOQUMseUJBQXlCO2VBQXpCQTs7SUFsR0FDLFdBQVc7ZUFBWEE7O0lBbURBQyxhQUFhO2VBQWJBOztJQTdDQUMsVUFBVTtlQUFWQTs7SUFNQUMsV0FBVztlQUFYQTs7SUFnREFDLFlBQVk7ZUFBWkE7O0lBMUNBQyxXQUFXO2VBQVhBOztJQVVBQyxZQUFZO2VBQVpBOztJQTJDQUMsYUFBYTtl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