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
function appendTokens(replacementTokens, parentNode, tokens) {
    var _tokens;
    var node = parentNode, trailingIndex = (0, _node.trailingIndexFromNodeAndTokens)(node, tokens), start = trailingIndex + 1, deleteCount = 0;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementTokens)));
}
function removeNode(removedNode, parentNode) {
    var removedChildNode = removedNode; ///
    parentNode.removeChildNode(removedChildNode);
}
function removeNodes(removedNodes, parentNode) {
    var removedChildNodes = removedNodes; ///
    parentNode.removeChildNodes(removedChildNodes);
}
function removeTokens(removedNode, tokens) {
    var node = removedNode, leadingIndex = (0, _node.leadingIndexFromNodeAndTokens)(node, tokens), trailingIndex = (0, _node.trailingIndexFromNodeAndTokens)(node, tokens), start = leadingIndex, end = trailingIndex + 1, deleteCount = end - start;
    tokens.splice(start, deleteCount);
}
function replaceNode(replacementNode, replacedNode, parentNode) {
    var replacedChildNode = replacedNode, replacementChildNode = replacementNode; ///
    parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
}
function replaceNodes(replacementNodes, replacedNode, parentNode) {
    var replacedChildNode = replacedNode, replacementChildNodes = replacementNodes; ///
    parentNode.replaceChildNodes(replacedChildNode, replacementChildNodes);
}
function replaceTokens(replacementTokens, replacedNode, tokens) {
    var _tokens;
    var node = replacedNode, leadingIndex = (0, _node.leadingIndexFromNodeAndTokens)(node, tokens), trailingIndex = (0, _node.trailingIndexFromNodeAndTokens)(node, tokens), start = leadingIndex, end = trailingIndex + 1, deleteCount = end - start;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementTokens)));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVwbGFjZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zLCB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZE5vZGUocmVwbGFjZW1lbnROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZSA9IHJlcGxhY2VtZW50Tm9kZTsgIC8vL1xuXG4gIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHBhcmVudE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcGFyZW50Tm9kZSwgLy8vXG4gICAgICAgIHRyYWlsaW5nSW5kZXggPSB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSB0cmFpbGluZ0luZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudFRva2Vucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlbW92ZWRDaGlsZE5vZGUgPSByZW1vdmVkTm9kZTsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGUocmVtb3ZlZENoaWxkTm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhyZW1vdmVkTm9kZXMsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVtb3ZlZENoaWxkTm9kZXMgPSByZW1vdmVkTm9kZXM7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGROb2RlcyhyZW1vdmVkQ2hpbGROb2Rlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcmVtb3ZlZE5vZGUsICAvLy9cbiAgICAgICAgbGVhZGluZ0luZGV4ID0gbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgdHJhaWxpbmdJbmRleCA9IHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxlYWRpbmdJbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IHRyYWlsaW5nSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gcmVwbGFjZW1lbnROb2RlOyAvLy9cblxuICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlcyhyZXBsYWNlbWVudE5vZGVzLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gcmVwbGFjZW1lbnROb2RlczsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgbGVhZGluZ0luZGV4ID0gbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgdHJhaWxpbmdJbmRleCA9IHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxlYWRpbmdJbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IHRyYWlsaW5nSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudFRva2Vucyk7XG59XG4iXSwibmFtZXMiOlsiYXBwZW5kTm9kZSIsImFwcGVuZFRva2VucyIsInJlbW92ZU5vZGUiLCJyZW1vdmVOb2RlcyIsInJlbW92ZVRva2VucyIsInJlcGxhY2VOb2RlIiwicmVwbGFjZU5vZGVzIiwicmVwbGFjZVRva2VucyIsInJlcGxhY2VtZW50Tm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudFRva2VucyIsInRva2VucyIsIm5vZGUiLCJ0cmFpbGluZ0luZGV4IiwidHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlbW92ZWROb2RlIiwicmVtb3ZlZENoaWxkTm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsInJlbW92ZWROb2RlcyIsInJlbW92ZWRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlcyIsImxlYWRpbmdJbmRleCIsImxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZW5kIiwicmVwbGFjZWROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkTm9kZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsVUFBVTtlQUFWQTs7SUFNQUMsWUFBWTtlQUFaQTs7SUFTQUMsVUFBVTtlQUFWQTs7SUFNQUMsV0FBVztlQUFYQTs7SUFNQUMsWUFBWTtlQUFaQTs7SUFXQUMsV0FBVztlQUFYQTs7SUFPQUMsWUFBWTtlQUFaQTs7SUFPQUMsYUFBYTtlQUFiQTs7O29CQXREOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZFLFNBQVNQLFdBQVdRLGVBQWUsRUFBRUMsVUFBVTtJQUNwRCxJQUFNQyxZQUFZRixpQkFBa0IsR0FBRztJQUV2Q0MsV0FBV0UsZUFBZSxDQUFDRDtBQUM3QjtBQUVPLFNBQVNULGFBQWFXLGlCQUFpQixFQUFFSCxVQUFVLEVBQUVJLE1BQU07UUFNaEVBO0lBTEEsSUFBTUMsT0FBT0wsWUFDUE0sZ0JBQWdCQyxJQUFBQSxvQ0FBOEIsRUFBQ0YsTUFBTUQsU0FDckRJLFFBQVFGLGdCQUFnQixHQUN4QkcsY0FBYztJQUVwQkwsQ0FBQUEsVUFBQUEsUUFBT00sTUFBTSxDQUFiTixNQUFBQSxTQUFBQTtRQUFjSTtRQUFPQztLQUFrQyxDQUF2REwsT0FBa0MscUJBQUdEO0FBQ3ZDO0FBRU8sU0FBU1YsV0FBV2tCLFdBQVcsRUFBRVgsVUFBVTtJQUNoRCxJQUFNWSxtQkFBbUJELGFBQWEsR0FBRztJQUV6Q1gsV0FBV2EsZUFBZSxDQUFDRDtBQUM3QjtBQUVPLFNBQVNsQixZQUFZb0IsWUFBWSxFQUFFZCxVQUFVO0lBQ2xELElBQU1lLG9CQUFvQkQsY0FBYyxHQUFHO0lBRTNDZCxXQUFXZ0IsZ0JBQWdCLENBQUNEO0FBQzlCO0FBRU8sU0FBU3BCLGFBQWFnQixXQUFXLEVBQUVQLE1BQU07SUFDOUMsSUFBTUMsT0FBT00sYUFDUE0sZUFBZUMsSUFBQUEsbUNBQTZCLEVBQUNiLE1BQU1ELFNBQ25ERSxnQkFBZ0JDLElBQUFBLG9DQUE4QixFQUFDRixNQUFNRCxTQUNyREksUUFBUVMsY0FDUkUsTUFBTWIsZ0JBQWdCLEdBQ3RCRyxjQUFjVSxNQUFNWDtJQUUxQkosT0FBT00sTUFBTSxDQUFDRixPQUFPQztBQUN2QjtBQUVPLFNBQVNiLFlBQVlHLGVBQWUsRUFBRXFCLFlBQVksRUFBRXBCLFVBQVU7SUFDbkUsSUFBTXFCLG9CQUFvQkQsY0FDcEJFLHVCQUF1QnZCLGlCQUFpQixHQUFHO0lBRWpEQyxXQUFXdUIsZ0JBQWdCLENBQUNGLG1CQUFtQkM7QUFDakQ7QUFFTyxTQUFTekIsYUFBYTJCLGdCQUFnQixFQUFFSixZQUFZLEVBQUVwQixVQUFVO0lBQ3JFLElBQU1xQixvQkFBb0JELGNBQ3BCSyx3QkFBd0JELGtCQUFrQixHQUFHO0lBRW5EeEIsV0FBVzBCLGlCQUFpQixDQUFDTCxtQkFBbUJJO0FBQ2xEO0FBRU8sU0FBUzNCLGNBQWNLLGlCQUFpQixFQUFFaUIsWUFBWSxFQUFFaEIsTUFBTTtRQVFuRUE7SUFQQSxJQUFNQyxPQUFPZSxjQUNQSCxlQUFlQyxJQUFBQSxtQ0FBNkIsRUFBQ2IsTUFBTUQsU0FDbkRFLGdCQUFnQkMsSUFBQUEsb0NBQThCLEVBQUNGLE1BQU1ELFNBQ3JESSxRQUFRUyxjQUNSRSxNQUFNYixnQkFBZ0IsR0FDdEJHLGNBQWNVLE1BQU1YO0lBRTFCSixDQUFBQSxVQUFBQSxRQUFPTSxNQUFNLENBQWJOLE1BQUFBLFNBQUFBO1FBQWNJO1FBQU9DO0tBQWtDLENBQXZETCxPQUFrQyxxQkFBR0Q7QUFDdkMifQ==