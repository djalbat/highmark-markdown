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
var _node = require("../utilities/node");
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
function appendNode(replacementNode, parentNode) {
    var childNode = replacementNode; ///
    parentNode.appendChildNode(childNode);
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
function appendTokens(replacementTokens, parentNode, tokens) {
    var _tokens;
    var node = parentNode, trailingIndex = (0, _node.trailingIndexFromNodeAndTokens)(node, tokens), start = trailingIndex + 1, deleteCount = 0;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementTokens)));
}
function removeTokens(removedNode, tokens) {
    var node = removedNode, leadingIndex = (0, _node.leadingIndexFromNodeAndTokens)(node, tokens), trailingIndex = (0, _node.trailingIndexFromNodeAndTokens)(node, tokens), start = leadingIndex, end = trailingIndex + 1, deleteCount = end - start;
    tokens.splice(start, deleteCount);
}
function replaceTokens(replacementTokens, replacedNode, tokens) {
    var _tokens;
    var node = replacedNode, leadingIndex = (0, _node.leadingIndexFromNodeAndTokens)(node, tokens), trailingIndex = (0, _node.trailingIndexFromNodeAndTokens)(node, tokens), start = leadingIndex, end = trailingIndex + 1, deleteCount = end - start;
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
    var node = existingNode, trailingIndex = (0, _node.trailingIndexFromNodeAndTokens)(node, tokens), start = trailingIndex + 1, deleteCount = 0;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(addedTokens)));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVwbGFjZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zLCB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZE5vZGUocmVwbGFjZW1lbnROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZSA9IHJlcGxhY2VtZW50Tm9kZTsgIC8vL1xuXG4gIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlbW92ZWRDaGlsZE5vZGUgPSByZW1vdmVkTm9kZTsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGUocmVtb3ZlZENoaWxkTm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhyZW1vdmVkTm9kZXMsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVtb3ZlZENoaWxkTm9kZXMgPSByZW1vdmVkTm9kZXM7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGROb2RlcyhyZW1vdmVkQ2hpbGROb2Rlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTm9kZShyZXBsYWNlbWVudE5vZGUsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZXBsYWNlZENoaWxkTm9kZSA9IHJlcGxhY2VkTm9kZSwgIC8vL1xuICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZSA9IHJlcGxhY2VtZW50Tm9kZTsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTm9kZXMocmVwbGFjZW1lbnROb2RlcywgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IHJlcGxhY2VtZW50Tm9kZXM7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROb2Rlc0FmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWROb2RlcywgcGFyZW50Tm9kZSkge1xuICBjb25zdCBleGlzdGluZ0NoaWxkTm9kZSA9IGV4aXN0aW5nTm9kZSwgLy8vXG4gICAgICAgIGFkZGVkQ2hpbGROb2RlcyA9IGFkZGVkTm9kZXM7IC8vL1xuXG4gIHBhcmVudE5vZGUuYWRkQ2hpbGROb2Rlc0FmdGVyKGV4aXN0aW5nQ2hpbGROb2RlLCBhZGRlZENoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCBwYXJlbnROb2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZSA9IHBhcmVudE5vZGUsIC8vL1xuICAgICAgICB0cmFpbGluZ0luZGV4ID0gdHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gdHJhaWxpbmdJbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRUb2tlbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW5zKHJlbW92ZWROb2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZSA9IHJlbW92ZWROb2RlLCAgLy8vXG4gICAgICAgIGxlYWRpbmdJbmRleCA9IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHRyYWlsaW5nSW5kZXggPSB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBsZWFkaW5nSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSB0cmFpbGluZ0luZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBlbmQgLSBzdGFydDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIGxlYWRpbmdJbmRleCA9IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHRyYWlsaW5nSW5kZXggPSB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBsZWFkaW5nSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSB0cmFpbGluZ0luZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBlbmQgLSBzdGFydDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRUb2tlbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTm9kZUFmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IGV4aXN0aW5nQ2hpbGROb2RlID0gZXhpc3RpbmdOb2RlLCAvLy9cbiAgICAgICAgYWRkZWRDaGlsZE5vZGUgPSBhZGRlZE5vZGU7IC8vL1xuXG4gIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGROb2RlQWZ0ZXIoZXhpc3RpbmdDaGlsZE5vZGUsIGFkZGVkQ2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRva2Vuc0FmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWRUb2tlbnMsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gZXhpc3RpbmdOb2RlLCAgLy8vXG4gICAgICAgIHRyYWlsaW5nSW5kZXggPSB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSB0cmFpbGluZ0luZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hZGRlZFRva2Vucyk7XG59XG4iXSwibmFtZXMiOlsiYWRkTm9kZUFmdGVyIiwiYWRkTm9kZXNBZnRlciIsImFkZFRva2Vuc0FmdGVyIiwiYXBwZW5kTm9kZSIsImFwcGVuZFRva2VucyIsInJlbW92ZU5vZGUiLCJyZW1vdmVOb2RlcyIsInJlbW92ZVRva2VucyIsInJlcGxhY2VOb2RlIiwicmVwbGFjZU5vZGVzIiwicmVwbGFjZVRva2VucyIsInJlcGxhY2VtZW50Tm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJyZW1vdmVkTm9kZSIsInJlbW92ZWRDaGlsZE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJyZW1vdmVkTm9kZXMiLCJyZW1vdmVkQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkTm9kZXMiLCJyZXBsYWNlZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlIiwicmVwbGFjZUNoaWxkTm9kZSIsInJlcGxhY2VtZW50Tm9kZXMiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsImV4aXN0aW5nTm9kZSIsImFkZGVkTm9kZXMiLCJleGlzdGluZ0NoaWxkTm9kZSIsImFkZGVkQ2hpbGROb2RlcyIsImFkZENoaWxkTm9kZXNBZnRlciIsInJlcGxhY2VtZW50VG9rZW5zIiwidG9rZW5zIiwibm9kZSIsInRyYWlsaW5nSW5kZXgiLCJ0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwibGVhZGluZ0luZGV4IiwibGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJlbmQiLCJhZGRlZE5vZGUiLCJhZGRlZENoaWxkTm9kZSIsImFwcGVuZENoaWxkTm9kZUFmdGVyIiwiYWRkZWRUb2tlbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEwRWdCQSxZQUFZO2VBQVpBOztJQXRDQUMsYUFBYTtlQUFiQTs7SUE2Q0FDLGNBQWM7ZUFBZEE7O0lBN0VBQyxVQUFVO2VBQVZBOztJQXVDQUMsWUFBWTtlQUFaQTs7SUFqQ0FDLFVBQVU7ZUFBVkE7O0lBTUFDLFdBQVc7ZUFBWEE7O0lBb0NBQyxZQUFZO2VBQVpBOztJQTlCQUMsV0FBVztlQUFYQTs7SUFPQUMsWUFBWTtlQUFaQTs7SUFrQ0FDLGFBQWE7ZUFBYkE7OztvQkE3RDhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RSxTQUFTUCxXQUFXUSxlQUFlLEVBQUVDLFVBQVU7SUFDcEQsSUFBTUMsWUFBWUYsaUJBQWtCLEdBQUc7SUFFdkNDLFdBQVdFLGVBQWUsQ0FBQ0Q7QUFDN0I7QUFFTyxTQUFTUixXQUFXVSxXQUFXLEVBQUVILFVBQVU7SUFDaEQsSUFBTUksbUJBQW1CRCxhQUFhLEdBQUc7SUFFekNILFdBQVdLLGVBQWUsQ0FBQ0Q7QUFDN0I7QUFFTyxTQUFTVixZQUFZWSxZQUFZLEVBQUVOLFVBQVU7SUFD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