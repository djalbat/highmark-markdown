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
    var replacedChildNode = replacedNode, replacementChildNode = replacementNode; ///
    parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
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
    var childNodes = nonTerminalNode.getChildNodes();
    childNodes.forEach(function(childNode) {
        var clonedNode = childNode; ///
        overwriteNodeTokens(clonedNode, clonedTokens, tokens, offset);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVwbGFjZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmROb2RlKGFwcGVuZGVkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCBhcHBlbmRlZENoaWxkTm9kZSA9IGFwcGVuZGVkTm9kZTsgIC8vL1xuXG4gIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGROb2RlKGFwcGVuZGVkQ2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmROb2RlKHByZXBlbmRlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcHJlcGVuZGVkQ2hpbGROb2RlID0gcHJlcGVuZGVkTm9kZTsgIC8vL1xuXG4gIHBhcmVudE5vZGUucHJlcGVuZENoaWxkTm9kZShwcmVwZW5kZWRDaGlsZE5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZW1vdmVkQ2hpbGROb2RlID0gcmVtb3ZlZE5vZGU7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGROb2RlKHJlbW92ZWRDaGlsZE5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZXMocmVtb3ZlZE5vZGVzLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlbW92ZWRDaGlsZE5vZGVzID0gcmVtb3ZlZE5vZGVzOyAvLy9cblxuICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGUgPSByZXBsYWNlbWVudE5vZGU7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZXBsYWNlZENoaWxkTm9kZSA9IHJlcGxhY2VkTm9kZSwgIC8vL1xuICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSByZXBsYWNlbWVudE5vZGVzOyAvLy9cblxuICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGVzKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTm9kZXNBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkTm9kZXMsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgZXhpc3RpbmdDaGlsZE5vZGUgPSBleGlzdGluZ05vZGUsIC8vL1xuICAgICAgICBhZGRlZENoaWxkTm9kZXMgPSBhZGRlZE5vZGVzOyAvLy9cblxuICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZXNBZnRlcihleGlzdGluZ0NoaWxkTm9kZSwgYWRkZWRDaGlsZE5vZGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRva2VucyhhcHBlbmRlZFRva2VucywgcGFyZW50Tm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSBwYXJlbnROb2RlLCAvLy9cbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFwcGVuZGVkVG9rZW5zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmRUb2tlbnMocHJlcGVuZGVkVG9rZW5zLCBwYXJlbnROb2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZSA9IHBhcmVudE5vZGUsIC8vL1xuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5wcmVwZW5kZWRUb2tlbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW5zKHJlbW92ZWROb2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZSA9IHJlbW92ZWROb2RlLCAgLy8vXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBlbmQgLSBzdGFydDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBlbmQgLSBzdGFydDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRUb2tlbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTm9kZUFmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IGV4aXN0aW5nQ2hpbGROb2RlID0gZXhpc3RpbmdOb2RlLCAvLy9cbiAgICAgICAgYWRkZWRDaGlsZE5vZGUgPSBhZGRlZE5vZGU7IC8vL1xuXG4gIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGROb2RlQWZ0ZXIoZXhpc3RpbmdDaGlsZE5vZGUsIGFkZGVkQ2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRva2Vuc0FmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWRUb2tlbnMsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gZXhpc3RpbmdOb2RlLCAgLy8vXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hZGRlZFRva2Vucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGVDbG9uZWROb2RlVG9rZW5zKGNsb25lZE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IG5vZGUgPSBjbG9uZWROb2RlOyAgLy8vXG5cbiAgb3ZlcndyaXRlTm9kZVRva2Vucyhub2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gIGNvbnN0IGNsb25lZFRva2VucyA9IHRva2Vucy5tYXAoKHRva2VuKSA9PiB7ICAvLy9cbiAgICBjb25zdCBjbG9uZWRUb2tlbiA9IHRva2VuLmNsb25lKCk7XG5cbiAgICByZXR1cm4gY2xvbmVkVG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiBjbG9uZWRUb2tlbnM7XG59XG5cbmZ1bmN0aW9uIG92ZXJ3cml0ZU5vZGVUb2tlbnMobm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCkge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgb3ZlcndyaXRlVGVybWluYWxOb2RlVG9rZW5zKHRlcm1pbmFsTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgb3ZlcndyaXRlTm9uVGVybWluYWxOb2RlVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3ZlcndyaXRlVGVybWluYWxOb2RlVG9rZW5zKHRlcm1pbmFsTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCkge1xuICBsZXQgaW5kZXgsXG4gICAgICBzaWduaWZpY2FudFRva2VuO1xuXG4gIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgaW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIGluZGV4IC09IG9mZnNldDtcblxuICAgIGNvbnN0IGNsb25lZFRva2VuID0gY2xvbmVkVG9rZW5zW2luZGV4XTtcblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSBjbG9uZWRUb2tlbjsgIC8vL1xuXG4gICAgdGVybWluYWxOb2RlLnNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3ZlcndyaXRlTm9uVGVybWluYWxOb2RlVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNsb25lZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgb3ZlcndyaXRlTm9kZVRva2VucyhjbG9uZWROb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiYWRkTm9kZUFmdGVyIiwiYWRkTm9kZXNBZnRlciIsImFkZFRva2Vuc0FmdGVyIiwiYXBwZW5kTm9kZSIsImFwcGVuZFRva2VucyIsImNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwib3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyIsInByZXBlbmROb2RlIiwicHJlcGVuZFRva2VucyIsInJlbW92ZU5vZGUiLCJyZW1vdmVOb2RlcyIsInJlbW92ZVRva2VucyIsInJlcGxhY2VOb2RlIiwicmVwbGFjZU5vZGVzIiwicmVwbGFjZVRva2VucyIsImFwcGVuZGVkTm9kZSIsInBhcmVudE5vZGUiLCJhcHBlbmRlZENoaWxkTm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInByZXBlbmRlZE5vZGUiLCJwcmVwZW5kZWRDaGlsZE5vZGUiLCJwcmVwZW5kQ2hpbGROb2RlIiwicmVtb3ZlZE5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlIiwicmVtb3ZlQ2hpbGROb2RlIiwicmVtb3ZlZE5vZGVzIiwicmVtb3ZlZENoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZWROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkTm9kZXMiLCJleGlzdGluZ05vZGUiLCJhZGRlZE5vZGVzIiwiZXhpc3RpbmdDaGlsZE5vZGUiLCJhZGRlZENoaWxkTm9kZXMiLCJhZGRDaGlsZE5vZGVzQWZ0ZXIiLCJhcHBlbmRlZFRva2VucyIsInRva2VucyIsIm5vZGUiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJwcmVwZW5kZWRUb2tlbnMiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZW5kIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJhZGRlZE5vZGUiLCJhZGRlZENoaWxkTm9kZSIsImFwcGVuZENoaWxkTm9kZUFmdGVyIiwiYWRkZWRUb2tlbnMiLCJjbG9uZWROb2RlIiwiY2xvbmVkVG9rZW5zIiwib2Zmc2V0Iiwib3ZlcndyaXRlTm9kZVRva2VucyIsInNsaWNlIiwibWFwIiwidG9rZW4iLCJjbG9uZWRUb2tlbiIsImNsb25lIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwib3ZlcndyaXRlVGVybWluYWxOb2RlVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwib3ZlcndyaXRlTm9uVGVybWluYWxOb2RlVG9rZW5zIiwiaW5kZXgiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImluZGV4T2YiLCJzZXRTaWduaWZpY2FudFRva2VuIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF1RmdCQSxZQUFZO2VBQVpBOztJQS9DQUMsYUFBYTtlQUFiQTs7SUFzREFDLGNBQWM7ZUFBZEE7O0lBNUZBQyxVQUFVO2VBQVZBOztJQTZDQUMsWUFBWTtlQUFaQTs7SUE4REFDLDZCQUE2QjtlQUE3QkE7O0lBTkFDLHlCQUF5QjtlQUF6QkE7O0lBL0ZBQyxXQUFXO2VBQVhBOztJQWdEQUMsYUFBYTtlQUFiQTs7SUExQ0FDLFVBQVU7ZUFBVkE7O0lBTUFDLFdBQVc7ZUFBWEE7O0lBNkNBQyxZQUFZO2VBQVpBOztJQXZDQUMsV0FBVztlQUFYQTs7SUFPQUMsWUFBWTtlQUFaQTs7SUEyQ0FDLGFBQWE7ZUFBYkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUExRVQsU0FBU1gsV0FBV1ksWUFBWSxFQUFFQyxVQUFVO0lBQ2pELElBQU1DLG9CQUFvQkYsY0FBZSxHQUFHO0lBRTVDQyxXQUFXRSxlQUFlLENBQUNEO0FBQzdCO0FBRU8sU0FBU1YsWUFBWVksYUFBYSxFQUFFSCxVQUFVO0lBQ25ELElBQU1JLHFCQUFxQkQsZUFBZ0IsR0FBRztJQUU5Q0gsV0FBV0ssZ0JBQWdCLENBQUNEO0FBQzlCO0FBRU8sU0FBU1gsV0FBV2EsV0FBVyxFQUFFTixVQUFVO0lBQ2hELElBQU1PLG1CQUFtQkQsYUFBYSxHQUFHO0lBRXpDTixXQUFXUSxlQUFlLENBQUNEO0FBQzdCO0FBRU8sU0FBU2IsWUFBWWUsWUFBWSxFQUFFVCxVQUFVO0lBQ2xELElBQU1VLG9CQUFvQkQsY0FBYyxHQUFHO0lBRTNDVCxXQUFXVyxnQkFBZ0IsQ0FBQ0Q7QUFDOUI7QUFFTyxTQUFTZCxZQUFZZ0IsZUFBZSxFQUFFQyxZQUFZLEVBQUViLFVBQVU7SUFDbkUsSUFBTWMsb0JBQW9CRCxjQUNwQkUsdUJBQXVCSCxpQkFBaUIsR0FBRztJQUVqRFosV0FBV2dCLGdCQUFnQixDQUFDRixtQkFBbUJDO0FBQ2pEO0FBRU8sU0FBU2xCLGFBQWFvQixnQkFBZ0IsRUFBRUosWUFBWSxFQUFFYixVQUFVO0lBQ3JFLElBQU1jLG9CQUFvQkQsY0FDcEJLLHdCQUF3QkQsa0JBQWtCLEdBQUc7SUFFbkRqQixXQUFXbUIsaUJBQWlCLENBQUNMLG1CQUFtQkk7QUFDbEQ7QUFFTyxTQUFTakMsY0FBY21DLFlBQVksRUFBRUMsVUFBVSxFQUFFckIsVUFBVTtJQUNoRSxJQUFNc0Isb0JBQW9CRixjQUNwQkcsa0JBQWtCRixZQUFZLEdBQUc7SUFFdkNyQixXQUFXd0Isa0JBQWtCLENBQUNGLG1CQUFtQkM7QUFDbkQ7QUFFTyxTQUFTbkMsYUFBYXFDLGNBQWMsRUFBRXpCLFVBQVUsRUFBRTBCLE1BQU07UUFNN0RBO0lBTEEsSUFBTUMsT0FBTzNCLFlBQ1A0Qiw0QkFBNEJELEtBQUtFLDRCQUE0QixDQUFDSCxTQUM5REksUUFBUUYsNEJBQTRCLEdBQ3BDRyxjQUFjO0lBRXBCTCxDQUFBQSxVQUFBQSxRQUFPTSxNQUFNLE9BQWJOLFNBQUFBO1FBQWNJO1FBQU9DO0tBQStCLENBQXBETCxPQUFrQyxxQkFBR0Q7QUFDdkM7QUFFTyxTQUFTakMsY0FBY3lDLGVBQWUsRUFBRWpDLFVBQVUsRUFBRTBCLE1BQU07UUFNL0RBO0lBTEEsSUFBTUMsT0FBTzNCLFlBQ1BrQyw2QkFBNkJQLEtBQUtRLDZCQUE2QixDQUFDVCxTQUNoRUksUUFBUUksNEJBQ1JILGNBQWM7SUFFcEJMLENBQUFBLFVBQUFBLFFBQU9NLE1BQU0sT0FBYk4sU0FBQUE7UUFBY0k7UUFBT0M7S0FBZ0MsQ0FBckRMLE9BQWtDLHFCQUFHTztBQUN2QztBQUVPLFNBQVN0QyxhQUFhVyxXQUFXLEVBQUVvQixNQUFNO0lBQzlDLElBQU1DLE9BQU9yQixhQUNQNEIsNkJBQTZCUCxLQUFLUSw2QkFBNkIsQ0FBQ1QsU0FDaEVFLDRCQUE0QkQsS0FBS0UsNEJBQTRCLENBQUNILFNBQzlESSxRQUFRSSw0QkFDUkUsTUFBTVIsNEJBQTRCLEdBQ2xDRyxjQUFjSyxNQUFNTjtJQUUxQkosT0FBT00sTUFBTSxDQUFDRixPQUFPQztBQUN2QjtBQUVPLFNBQVNqQyxjQUFjdUMsaUJBQWlCLEVBQUV4QixZQUFZLEVBQUVhLE1BQU07UUFRbkVBO0lBUEEsSUFBTUMsT0FBT2QsY0FDUHFCLDZCQUE2QlAsS0FBS1EsNkJBQTZCLENBQUNULFNBQ2hFRSw0QkFBNEJELEtBQUtFLDRCQUE0QixDQUFDSCxTQUM5REksUUFBUUksNEJBQ1JFLE1BQU1SLDRCQUE0QixHQUNsQ0csY0FBY0ssTUFBTU47SUFFMUJKLENBQUFBLFVBQUFBLFFBQU9NLE1BQU0sT0FBYk4sU0FBQUE7UUFBY0k7UUFBT0M7S0FBa0MsQ0FBdkRMLE9BQWtDLHFCQUFHVztBQUN2QztBQUVPLFNBQVNyRCxhQUFhb0MsWUFBWSxFQUFFa0IsU0FBUyxFQUFFdEMsVUFBVTtJQUM5RCxJQUFNc0Isb0JBQW9CRixjQUNwQm1CLGlCQUFpQkQsV0FBVyxHQUFHO0lBRXJDdEMsV0FBV3dDLG9CQUFvQixDQUFDbEIsbUJBQW1CaUI7QUFDckQ7QUFFTyxTQUFTckQsZUFBZWtDLFlBQVksRUFBRXFCLFdBQVcsRUFBRWYsTUFBTTtRQU05REE7SUFMQSxJQUFNQyxPQUFPUCxjQUNQUSw0QkFBNEJELEtBQUtFLDRCQUE0QixDQUFDSCxTQUM5REksUUFBUUYsNEJBQTRCLEdBQ3BDRyxjQUFjO0lBRXBCTCxDQUFBQSxVQUFBQSxRQUFPTSxNQUFNLE9BQWJOLFNBQUFBO1FBQWNJO1FBQU9DO0tBQTRCLENBQWpETCxPQUFrQyxxQkFBR2U7QUFDdkM7QUFFTyxTQUFTbkQsMEJBQTBCb0QsVUFBVSxFQUFFQyxZQUFZLEVBQUVqQixNQUFNO1FBQUVrQixTQUFBQSxpRUFBUztJQUNuRixJQUFNakIsT0FBT2UsWUFBYSxHQUFHO0lBRTdCRyxvQkFBb0JsQixNQUFNZ0IsY0FBY2pCLFFBQVFrQjtBQUNsRDtBQUVPLFNBQVN2RCw4QkFBOEJzQyxJQUFJLEVBQUVELE1BQU07SUFDeEQsSUFBTVEsNkJBQTZCUCxLQUFLUSw2QkFBNkIsQ0FBQ1QsU0FDaEVFLDRCQUE0QkQsS0FBS0UsNEJBQTRCLENBQUNILFNBQzlESSxRQUFRSSw0QkFDUkUsTUFBTVIsNEJBQTRCO0lBRXhDRixTQUFTQSxPQUFPb0IsS0FBSyxDQUFDaEIsT0FBT00sTUFBTyxHQUFHO0lBRXZDLElBQU1PLGVBQWVqQixPQUFPcUIsR0FBRyxDQUFDLFNBQUNDO1FBQy9CLElBQU1DLGNBQWNELE1BQU1FLEtBQUs7UUFFL0IsT0FBT0Q7SUFDVDtJQUVBLE9BQU9OO0FBQ1Q7QUFFQSxTQUFTRSxvQkFBb0JsQixJQUFJLEVBQUVnQixZQUFZLEVBQUVqQixNQUFNLEVBQUVrQixNQUFNO0lBQzdELElBQU1PLG1CQUFtQnhCLEtBQUt5QixjQUFjO0lBRTVDLElBQUlELGtCQUFrQjtRQUNwQixJQUFNRSxlQUFlMUIsTUFBTyxHQUFHO1FBRS9CMkIsNEJBQTRCRCxjQUFjVixjQUFjakIsUUFBUWtCO0lBQ2xFLE9BQU87UUFDTCxJQUFNVyxrQkFBa0I1QixNQUFPLEdBQUc7UUFFbEM2QiwrQkFBK0JELGlCQUFpQlosY0FBY2pCLFFBQVFrQjtJQUN4RTtBQUNGO0FBRUEsU0FBU1UsNEJBQTRCRCxZQUFZLEVBQUVWLFlBQVksRUFBRWpCLE1BQU0sRUFBRWtCLE1BQU07SUFDN0UsSUFBSWEsT0FDQUM7SUFFSkEsbUJBQW1CTCxhQUFhTSxtQkFBbUI7SUFFbkQsSUFBSUQscUJBQXFCLE1BQU07UUFDN0JELFFBQVEvQixPQUFPa0MsT0FBTyxDQUFDRjtRQUV2QkQsU0FBU2I7UUFFVCxJQUFNSyxjQUFjTixZQUFZLENBQUNjLE1BQU07UUFFdkNDLG1CQUFtQlQsYUFBYyxHQUFHO1FBRXBDSSxhQUFhUSxtQkFBbUIsQ0FBQ0g7SUFDbkM7QUFDRjtBQUVBLFNBQVNGLCtCQUErQkQsZUFBZSxFQUFFWixZQUFZLEVBQUVqQixNQUFNLEVBQUVrQixNQUFNO0lBQ25GLElBQU1rQixhQUFhUCxnQkFBZ0JRLGFBQWE7SUFFaERELFdBQVdFLE9BQU8sQ0FBQyxTQUFDQztRQUNsQixJQUFNdkIsYUFBYXVCLFdBQVcsR0FBRztRQUVqQ3BCLG9CQUFvQkgsWUFBWUMsY0FBY2pCLFFBQVFrQjtJQUN4RDtBQUNGIn0=