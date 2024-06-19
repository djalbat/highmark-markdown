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
    var node = parentNode, trailingIndex = (0, _node.trailingIndexFromNodeAndTokens)(node, tokens), start = trailingIndex + 1, deleteCount = 0;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(appendedTokens)));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVwbGFjZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zLCB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZE5vZGUoYXBwZW5kZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IGFwcGVuZGVkQ2hpbGROb2RlID0gYXBwZW5kZWROb2RlOyAgLy8vXG5cbiAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGUoYXBwZW5kZWRDaGlsZE5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZW1vdmVkQ2hpbGROb2RlID0gcmVtb3ZlZE5vZGU7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGROb2RlKHJlbW92ZWRDaGlsZE5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZXMocmVtb3ZlZE5vZGVzLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlbW92ZWRDaGlsZE5vZGVzID0gcmVtb3ZlZE5vZGVzOyAvLy9cblxuICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGUgPSByZXBsYWNlbWVudE5vZGU7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZXBsYWNlZENoaWxkTm9kZSA9IHJlcGxhY2VkTm9kZSwgIC8vL1xuICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSByZXBsYWNlbWVudE5vZGVzOyAvLy9cblxuICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGVzKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTm9kZXNBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkTm9kZXMsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgZXhpc3RpbmdDaGlsZE5vZGUgPSBleGlzdGluZ05vZGUsIC8vL1xuICAgICAgICBhZGRlZENoaWxkTm9kZXMgPSBhZGRlZE5vZGVzOyAvLy9cblxuICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZXNBZnRlcihleGlzdGluZ0NoaWxkTm9kZSwgYWRkZWRDaGlsZE5vZGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRva2VucyhhcHBlbmRlZFRva2VucywgcGFyZW50Tm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSBwYXJlbnROb2RlLCAvLy9cbiAgICAgICAgdHJhaWxpbmdJbmRleCA9IHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IHRyYWlsaW5nSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFwcGVuZGVkVG9rZW5zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRva2VucyhyZW1vdmVkTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSByZW1vdmVkTm9kZSwgIC8vL1xuICAgICAgICBsZWFkaW5nSW5kZXggPSBsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICB0cmFpbGluZ0luZGV4ID0gdHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gbGVhZGluZ0luZGV4LCAvLy9cbiAgICAgICAgZW5kID0gdHJhaWxpbmdJbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gZW5kIC0gc3RhcnQ7XG5cbiAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZSA9IHJlcGxhY2VkTm9kZSwgIC8vL1xuICAgICAgICBsZWFkaW5nSW5kZXggPSBsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICB0cmFpbGluZ0luZGV4ID0gdHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gbGVhZGluZ0luZGV4LCAvLy9cbiAgICAgICAgZW5kID0gdHJhaWxpbmdJbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gZW5kIC0gc3RhcnQ7XG5cbiAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50VG9rZW5zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5vZGVBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCBleGlzdGluZ0NoaWxkTm9kZSA9IGV4aXN0aW5nTm9kZSwgLy8vXG4gICAgICAgIGFkZGVkQ2hpbGROb2RlID0gYWRkZWROb2RlOyAvLy9cblxuICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZUFmdGVyKGV4aXN0aW5nQ2hpbGROb2RlLCBhZGRlZENoaWxkTm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2tlbnNBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkVG9rZW5zLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZSA9IGV4aXN0aW5nTm9kZSwgIC8vL1xuICAgICAgICB0cmFpbGluZ0luZGV4ID0gdHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gdHJhaWxpbmdJbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYWRkZWRUb2tlbnMpO1xufVxuIl0sIm5hbWVzIjpbImFkZE5vZGVBZnRlciIsImFkZE5vZGVzQWZ0ZXIiLCJhZGRUb2tlbnNBZnRlciIsImFwcGVuZE5vZGUiLCJhcHBlbmRUb2tlbnMiLCJyZW1vdmVOb2RlIiwicmVtb3ZlTm9kZXMiLCJyZW1vdmVUb2tlbnMiLCJyZXBsYWNlTm9kZSIsInJlcGxhY2VOb2RlcyIsInJlcGxhY2VUb2tlbnMiLCJhcHBlbmRlZE5vZGUiLCJwYXJlbnROb2RlIiwiYXBwZW5kZWRDaGlsZE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJyZW1vdmVkTm9kZSIsInJlbW92ZWRDaGlsZE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJyZW1vdmVkTm9kZXMiLCJyZW1vdmVkQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkTm9kZXMiLCJyZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlIiwicmVwbGFjZUNoaWxkTm9kZSIsInJlcGxhY2VtZW50Tm9kZXMiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsImV4aXN0aW5nTm9kZSIsImFkZGVkTm9kZXMiLCJleGlzdGluZ0NoaWxkTm9kZSIsImFkZGVkQ2hpbGROb2RlcyIsImFkZENoaWxkTm9kZXNBZnRlciIsImFwcGVuZGVkVG9rZW5zIiwidG9rZW5zIiwibm9kZSIsInRyYWlsaW5nSW5kZXgiLCJ0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwibGVhZGluZ0luZGV4IiwibGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJlbmQiLCJyZXBsYWNlbWVudFRva2VucyIsImFkZGVkTm9kZSIsImFkZGVkQ2hpbGROb2RlIiwiYXBwZW5kQ2hpbGROb2RlQWZ0ZXIiLCJhZGRlZFRva2VucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTBFZ0JBLFlBQVk7ZUFBWkE7O0lBdENBQyxhQUFhO2VBQWJBOztJQTZDQUMsY0FBYztlQUFkQTs7SUE3RUFDLFVBQVU7ZUFBVkE7O0lBdUNBQyxZQUFZO2VBQVpBOztJQWpDQUMsVUFBVTtlQUFWQTs7SUFNQUMsV0FBVztlQUFYQTs7SUFvQ0FDLFlBQVk7ZUFBWkE7O0lBOUJBQyxXQUFXO2VBQVhBOztJQU9BQyxZQUFZO2VBQVpBOztJQWtDQUMsYUFBYTtlQUFiQTs7O29CQTdEOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZFLFNBQVNQLFdBQVdRLFlBQVksRUFBRUMsVUFBVTtJQUNqRCxJQUFNQyxvQkFBb0JGLGNBQWUsR0FBRztJQUU1Q0MsV0FBV0UsZUFBZSxDQUFDRDtBQUM3QjtBQUVPLFNBQVNSLFdBQVdVLFdBQVcsRUFBRUgsVUFBVTtJQUNoRCxJQUFNSSxtQkFBbUJELGFBQWEsR0FBRztJQUV6Q0gsV0FBV0ssZUFBZSxDQUFD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