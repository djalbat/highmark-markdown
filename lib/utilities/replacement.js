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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVwbGFjZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmROb2RlKGFwcGVuZGVkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCBhcHBlbmRlZENoaWxkTm9kZSA9IGFwcGVuZGVkTm9kZTsgIC8vL1xuXG4gIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGROb2RlKGFwcGVuZGVkQ2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUocmVtb3ZlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVtb3ZlZENoaWxkTm9kZSA9IHJlbW92ZWROb2RlOyAvLy9cblxuICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkTm9kZShyZW1vdmVkQ2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHJlbW92ZWROb2RlcywgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZW1vdmVkQ2hpbGROb2RlcyA9IHJlbW92ZWROb2RlczsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gcmVwbGFjZW1lbnROb2RlOyAvLy9cblxuICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlcyhyZXBsYWNlbWVudE5vZGVzLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gcmVwbGFjZW1lbnROb2RlczsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5vZGVzQWZ0ZXIoZXhpc3RpbmdOb2RlLCBhZGRlZE5vZGVzLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IGV4aXN0aW5nQ2hpbGROb2RlID0gZXhpc3RpbmdOb2RlLCAvLy9cbiAgICAgICAgYWRkZWRDaGlsZE5vZGVzID0gYWRkZWROb2RlczsgLy8vXG5cbiAgcGFyZW50Tm9kZS5hZGRDaGlsZE5vZGVzQWZ0ZXIoZXhpc3RpbmdDaGlsZE5vZGUsIGFkZGVkQ2hpbGROb2Rlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb2tlbnMoYXBwZW5kZWRUb2tlbnMsIHBhcmVudE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcGFyZW50Tm9kZSwgLy8vXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcHBlbmRlZFRva2Vucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcmVtb3ZlZE5vZGUsICAvLy9cbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudFRva2Vucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROb2RlQWZ0ZXIoZXhpc3RpbmdOb2RlLCBhZGRlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgZXhpc3RpbmdDaGlsZE5vZGUgPSBleGlzdGluZ05vZGUsIC8vL1xuICAgICAgICBhZGRlZENoaWxkTm9kZSA9IGFkZGVkTm9kZTsgLy8vXG5cbiAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGVBZnRlcihleGlzdGluZ0NoaWxkTm9kZSwgYWRkZWRDaGlsZE5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9rZW5zQWZ0ZXIoZXhpc3RpbmdOb2RlLCBhZGRlZFRva2VucywgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSBleGlzdGluZ05vZGUsICAvLy9cbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFkZGVkVG9rZW5zKTtcbn1cbiJdLCJuYW1lcyI6WyJhZGROb2RlQWZ0ZXIiLCJhZGROb2Rlc0FmdGVyIiwiYWRkVG9rZW5zQWZ0ZXIiLCJhcHBlbmROb2RlIiwiYXBwZW5kVG9rZW5zIiwicmVtb3ZlTm9kZSIsInJlbW92ZU5vZGVzIiwicmVtb3ZlVG9rZW5zIiwicmVwbGFjZU5vZGUiLCJyZXBsYWNlTm9kZXMiLCJyZXBsYWNlVG9rZW5zIiwiYXBwZW5kZWROb2RlIiwicGFyZW50Tm9kZSIsImFwcGVuZGVkQ2hpbGROb2RlIiwiYXBwZW5kQ2hpbGROb2RlIiwicmVtb3ZlZE5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlIiwicmVtb3ZlQ2hpbGROb2RlIiwicmVtb3ZlZE5vZGVzIiwicmVtb3ZlZENoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZWROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkTm9kZXMiLCJleGlzdGluZ05vZGUiLCJhZGRlZE5vZGVzIiwiZXhpc3RpbmdDaGlsZE5vZGUiLCJhZGRlZENoaWxkTm9kZXMiLCJhZGRDaGlsZE5vZGVzQWZ0ZXIiLCJhcHBlbmRlZFRva2VucyIsInRva2VucyIsIm5vZGUiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZW5kIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJhZGRlZE5vZGUiLCJhZGRlZENoaWxkTm9kZSIsImFwcGVuZENoaWxkTm9kZUFmdGVyIiwiYWRkZWRUb2tlbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXdFZ0JBLFlBQVk7ZUFBWkE7O0lBdENBQyxhQUFhO2VBQWJBOztJQTZDQUMsY0FBYztlQUFkQTs7SUE3RUFDLFVBQVU7ZUFBVkE7O0lBdUNBQyxZQUFZO2VBQVpBOztJQWpDQUMsVUFBVTtlQUFWQTs7SUFNQUMsV0FBVztlQUFYQTs7SUFvQ0FDLFlBQVk7ZUFBWkE7O0lBOUJBQyxXQUFXO2VBQVhBOztJQU9BQyxZQUFZO2VBQVpBOztJQWtDQUMsYUFBYTtlQUFiQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTNEVCxTQUFTUCxXQUFXUSxZQUFZLEVBQUVDLFVBQVU7SUFDakQsSUFBTUMsb0JBQW9CRixjQUFlLEdBQUc7SUFFNUNDLFdBQVdFLGVBQWUsQ0FBQ0Q7QUFDN0I7QUFFTyxTQUFTUixXQUFXVSxXQUFXLEVBQUVILFVBQVU7SUFD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