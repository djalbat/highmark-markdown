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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVwbGFjZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zLCB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZE5vZGUocmVwbGFjZW1lbnROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZSA9IHJlcGxhY2VtZW50Tm9kZTsgIC8vL1xuXG4gIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlbW92ZWRDaGlsZE5vZGUgPSByZW1vdmVkTm9kZTsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGUocmVtb3ZlZENoaWxkTm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhyZW1vdmVkTm9kZXMsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVtb3ZlZENoaWxkTm9kZXMgPSByZW1vdmVkTm9kZXM7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGROb2RlcyhyZW1vdmVkQ2hpbGROb2Rlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTm9kZShyZXBsYWNlbWVudE5vZGUsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZXBsYWNlZENoaWxkTm9kZSA9IHJlcGxhY2VkTm9kZSwgIC8vL1xuICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZSA9IHJlcGxhY2VtZW50Tm9kZTsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTm9kZXMocmVwbGFjZW1lbnROb2RlcywgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IHJlcGxhY2VtZW50Tm9kZXM7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHBhcmVudE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcGFyZW50Tm9kZSwgLy8vXG4gICAgICAgIHRyYWlsaW5nSW5kZXggPSB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSB0cmFpbGluZ0luZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudFRva2Vucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcmVtb3ZlZE5vZGUsICAvLy9cbiAgICAgICAgbGVhZGluZ0luZGV4ID0gbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgdHJhaWxpbmdJbmRleCA9IHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxlYWRpbmdJbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IHRyYWlsaW5nSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgbGVhZGluZ0luZGV4ID0gbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgdHJhaWxpbmdJbmRleCA9IHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxlYWRpbmdJbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IHRyYWlsaW5nSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudFRva2Vucyk7XG59XG4iXSwibmFtZXMiOlsiYXBwZW5kTm9kZSIsImFwcGVuZFRva2VucyIsInJlbW92ZU5vZGUiLCJyZW1vdmVOb2RlcyIsInJlbW92ZVRva2VucyIsInJlcGxhY2VOb2RlIiwicmVwbGFjZU5vZGVzIiwicmVwbGFjZVRva2VucyIsInJlcGxhY2VtZW50Tm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJyZW1vdmVkTm9kZSIsInJlbW92ZWRDaGlsZE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJyZW1vdmVkTm9kZXMiLCJyZW1vdmVkQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkTm9kZXMiLCJyZXBsYWNlZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlIiwicmVwbGFjZUNoaWxkTm9kZSIsInJlcGxhY2VtZW50Tm9kZXMiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsInJlcGxhY2VtZW50VG9rZW5zIiwidG9rZW5zIiwibm9kZSIsInRyYWlsaW5nSW5kZXgiLCJ0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwibGVhZGluZ0luZGV4IiwibGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJlbmQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsVUFBVTtlQUFWQTs7SUFnQ0FDLFlBQVk7ZUFBWkE7O0lBMUJBQyxVQUFVO2VBQVZBOztJQU1BQyxXQUFXO2VBQVhBOztJQTZCQUMsWUFBWTtlQUFaQTs7SUF2QkFDLFdBQVc7ZUFBWEE7O0lBT0FDLFlBQVk7ZUFBWkE7O0lBMkJBQyxhQUFhO2VBQWJBOzs7b0JBdEQ4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkUsU0FBU1AsV0FBV1EsZUFBZSxFQUFFQyxVQUFVO0lBQ3BELElBQU1DLFlBQVlGLGlCQUFrQixHQUFHO0lBRXZDQyxXQUFXRSxlQUFlLENBQUNEO0FBQzdCO0FBRU8sU0FBU1IsV0FBV1UsV0FBVyxFQUFFSCxVQUFVO0lBQ2hELElBQU1JLG1CQUFtQkQsYUFBYSxHQUFHO0lBRXpDSCxXQUFXSyxlQUFlLENBQUNEO0FBQzdCO0FBRU8sU0FBU1YsWUFBWVksWUFBWSxFQUFFTixVQUFVO0lBQ2xELElBQU1PLG9CQUFvQkQsY0FBYyxHQUFHO0lBRTNDTixXQUFXUSxnQkFBZ0IsQ0FBQ0Q7QUFDOUI7QUFFTyxTQUFTWCxZQUFZRyxlQUFlLEVBQUVVLFlBQVksRUFBRVQsVUFBVTtJQUNuRSxJQUFNVSxvQkFBb0JELGNBQ3BCRSx1QkFBdUJaLGlCQUFpQixHQUFHO0lBRWpEQyxXQUFXWSxnQkFBZ0IsQ0FBQ0YsbUJBQW1CQztBQUNqRDtBQUVPLFNBQVNkLGFBQWFnQixnQkFBZ0IsRUFBRUosWUFBWSxFQUFFVCxVQUFVO0lBQ3JFLElBQU1VLG9CQUFvQkQsY0FDcEJLLHdCQUF3QkQsa0JBQWtCLEdBQUc7SUFFbkRiLFdBQVdlLGlCQUFpQixDQUFDTCxtQkFBbUJJO0FBQ2xEO0FBRU8sU0FBU3RCLGFBQWF3QixpQkFBaUIsRUFBRWhCLFVBQVUsRUFBRWlCLE1BQU07UUFNaEVBO0lBTEEsSUFBTUMsT0FBT2xCLFlBQ1BtQixnQkFBZ0JDLElBQUFBLG9DQUE4QixFQUFDRixNQUFNRCxTQUNyREksUUFBUUYsZ0JBQWdCLEdBQ3hCRyxjQUFjO0lBRXBCTCxDQUFBQSxVQUFBQSxRQUFPTSxNQUFNLENBQWJOLE1BQUFBLFNBQUFBO1FBQWNJO1FBQU9DO0tBQWtDLENBQXZETCxPQUFrQyxxQkFBR0Q7QUFDdkM7QUFFTyxTQUFTckIsYUFBYVEsV0FBVyxFQUFFYyxNQUFNO0lBQzlDLElBQU1DLE9BQU9mLGFBQ1BxQixlQUFlQyxJQUFBQSxtQ0FBNkIsRUFBQ1AsTUFBTUQsU0FDbkRFLGdCQUFnQkMsSUFBQUEsb0NBQThCLEVBQUNGLE1BQU1ELFNBQ3JESSxRQUFRRyxjQUNSRSxNQUFNUCxnQkFBZ0IsR0FDdEJHLGNBQWNJLE1BQU1MO0lBRTFCSixPQUFPTSxNQUFNLENBQUNGLE9BQU9DO0FBQ3ZCO0FBRU8sU0FBU3hCLGNBQWNrQixpQkFBaUIsRUFBRVAsWUFBWSxFQUFFUSxNQUFNO1FBUW5FQTtJQVBBLElBQU1DLE9BQU9ULGNBQ1BlLGVBQWVDLElBQUFBLG1DQUE2QixFQUFDUCxNQUFNRCxTQUNuREUsZ0JBQWdCQyxJQUFBQSxvQ0FBOEIsRUFBQ0YsTUFBTUQsU0FDckRJLFFBQVFHLGNBQ1JFLE1BQU1QLGdCQUFnQixHQUN0QkcsY0FBY0ksTUFBTUw7SUFFMUJKLENBQUFBLFVBQUFBLFFBQU9NLE1BQU0sQ0FBYk4sTUFBQUEsU0FBQUE7UUFBY0k7UUFBT0M7S0FBa0MsQ0FBdkRMLE9BQWtDLHFCQUFHRDtBQUN2QyJ9