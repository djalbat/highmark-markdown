"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last;
function removeChildNodes(removedChildNodes) {
    var childNodes = this.getChildNodes(), firstRemovedChildNode = first(removedChildNodes), lastRemovedChildNode = last(removedChildNodes), firstIndex = childNodes.indexOf(firstRemovedChildNode), lastIndex = childNodes.indexOf(lastRemovedChildNode), start = firstIndex, end = lastIndex + 1, deleteCount = end - start;
    childNodes.splice(start, deleteCount);
}
function removeChildNode(removedChildNode) {
    var childNodes = this.getChildNodes(), index = childNodes.indexOf(removedChildNode), start = index, deleteCount = 1;
    childNodes.splice(start, deleteCount);
}
function prependChildNode(childNode) {
    var childNodes = this.getChildNodes();
    childNodes.unshift(childNode);
}
function appendChildNode(childNode) {
    var childNodes = this.getChildNodes();
    childNodes.push(childNode);
}
function replaceChildNode(replacedChildNode, replacementChildNode) {
    var childNodes = this.getChildNodes(), index = childNodes.indexOf(replacedChildNode), start = index, deleteCount = 1;
    childNodes.splice(start, deleteCount, replacementChildNode);
}
function replaceChildNodes(replacedChildNode, replacementChildNodes) {
    var _childNodes;
    var childNodes = this.getChildNodes(), index = childNodes.indexOf(replacedChildNode), start = index, deleteCount = 1;
    (_childNodes = childNodes).splice.apply(_childNodes, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementChildNodes)));
}
function getDescendantNodes() {
    var descendantNodes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var descendantNode = this; ///
    descendantNodes.push(descendantNode);
    var childNodes = this.getChildNodes();
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode; ///
            nonTerminalNode.getDescendantNodes(descendantNodes);
        }
    });
    return descendantNodes;
}
var nodeMixins = {
    removeChildNodes: removeChildNodes,
    removeChildNode: removeChildNode,
    appendChildNode: appendChildNode,
    prependChildNode: prependChildNode,
    replaceChildNode: replaceChildNode,
    replaceChildNodes: replaceChildNodes,
    getDescendantNodes: getDescendantNodes
};
var _default = nodeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZmlyc3RSZW1vdmVkQ2hpbGROb2RlID0gZmlyc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICBsYXN0UmVtb3ZlZENoaWxkTm9kZSA9IGxhc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdEluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVtb3ZlZENoaWxkTm9kZSksIC8vL1xuICAgICAgICBsYXN0SW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YobGFzdFJlbW92ZWRDaGlsZE5vZGUpLCAvLy9cbiAgICAgICAgc3RhcnQgPSBmaXJzdEluZGV4LCAgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RJbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gZW5kIC0gc3RhcnQ7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGROb2RlKHJlbW92ZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZW1vdmVkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gcHJlcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMudW5zaGlmdChjaGlsZE5vZGUpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLnB1c2goY2hpbGROb2RlKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YocmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGdldERlc2NlbmRhbnROb2RlcyhkZXNjZW5kYW50Tm9kZXMgPSBbXSkge1xuICBjb25zdCBkZXNjZW5kYW50Tm9kZSA9IHRoaXM7IC8vL1xuXG4gIGRlc2NlbmRhbnROb2Rlcy5wdXNoKGRlc2NlbmRhbnROb2RlKTtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICBub25UZXJtaW5hbE5vZGUuZ2V0RGVzY2VuZGFudE5vZGVzKGRlc2NlbmRhbnROb2Rlcyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVzY2VuZGFudE5vZGVzO1xufVxuXG5jb25zdCBub2RlTWl4aW5zID0ge1xuICByZW1vdmVDaGlsZE5vZGVzLFxuICByZW1vdmVDaGlsZE5vZGUsXG4gIGFwcGVuZENoaWxkTm9kZSxcbiAgcHJlcGVuZENoaWxkTm9kZSxcbiAgcmVwbGFjZUNoaWxkTm9kZSxcbiAgcmVwbGFjZUNoaWxkTm9kZXMsXG4gIGdldERlc2NlbmRhbnROb2Rlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZU1peGlucztcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibGFzdCIsInJlbW92ZUNoaWxkTm9kZXMiLCJyZW1vdmVkQ2hpbGROb2RlcyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RSZW1vdmVkQ2hpbGROb2RlIiwibGFzdFJlbW92ZWRDaGlsZE5vZGUiLCJmaXJzdEluZGV4IiwiaW5kZXhPZiIsImxhc3RJbmRleCIsInN0YXJ0IiwiZW5kIiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZW1vdmVDaGlsZE5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlIiwiaW5kZXgiLCJwcmVwZW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwidW5zaGlmdCIsImFwcGVuZENoaWxkTm9kZSIsInB1c2giLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwiZ2V0RGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGUiLCJmb3JFYWNoIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJub2RlTWl4aW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdGQTs7O2VBQUE7Ozt5QkF0RitCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFRQSxRQUFnQkMseUJBQWMsQ0FBOUJELE9BQU9FLE9BQVNELHlCQUFjLENBQXZCQztBQUVmLFNBQVNDLGlCQUFpQkMsaUJBQWlCO0lBQ3pDLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyx3QkFBd0JQLE1BQU1JLG9CQUM5QkksdUJBQXVCTixLQUFLRSxvQkFDNUJLLGFBQWFKLFdBQVdLLE9BQU8sQ0FBQ0gsd0JBQ2hDSSxZQUFZTixXQUFXSyxPQUFPLENBQUNGLHVCQUMvQkksUUFBUUgsWUFDUkksTUFBTUYsWUFBWSxHQUNsQkcsY0FBY0QsTUFBTUQ7SUFFMUJQLFdBQVdVLE1BQU0sQ0FBQ0gsT0FBT0U7QUFDM0I7QUFFQSxTQUFTRSxnQkFBZ0JDLGdCQUFnQjtJQUN2QyxJQUFNWixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQlksUUFBUWIsV0FBV0ssT0FBTyxDQUFDTyxtQkFDM0JMLFFBQVFNLE9BQ1JKLGNBQWM7SUFFcEJULFdBQVdVLE1BQU0sQ0FBQ0gsT0FBT0U7QUFDM0I7QUFFQSxTQUFTSyxpQkFBaUJDLFNBQVM7SUFDakMsSUFBTWYsYUFBYSxJQUFJLENBQUNDLGFBQWE7SUFFckNELFdBQVdnQixPQUFPLENBQUNEO0FBQ3JCO0FBRUEsU0FBU0UsZ0JBQWdCRixTQUFTO0lBQ2hDLElBQU1mLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDRCxXQUFXa0IsSUFBSSxDQUFDSDtBQUNsQjtBQUVBLFNBQVNJLGlCQUFpQkMsaUJBQWlCLEVBQUVDLG9CQUFvQjtJQUMvRCxJQUFNckIsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JZLFFBQVFiLFdBQVdLLE9BQU8sQ0FBQ2Usb0JBQzNCYixRQUFRTSxPQUNSSixjQUFjO0lBRXBCVCxXQUFXVSxNQUFNLENBQUNILE9BQU9FLGFBQWFZO0FBQ3hDO0FBRUEsU0FBU0Msa0JBQWtCRixpQkFBaUIsRUFBRUcscUJBQXFCO1FBTWpFdkI7SUFMQSxJQUFNQSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQlksUUFBUWIsV0FBV0ssT0FBTyxDQUFDZSxvQkFDM0JiLFFBQVFNLE9BQ1JKLGNBQWM7SUFFcEJULENBQUFBLGNBQUFBLFlBQVdVLE1BQU0sQ0FBakJWLE1BQUFBLGFBQUFBO1FBQWtCTztRQUFPRTtLQUFzQyxDQUEvRFQsT0FBc0MscUJBQUd1QjtBQUMzQztBQUVBLFNBQVNDO1FBQW1CQyxrQkFBQUEsaUVBQWtCLEVBQUU7SUFDOUMsSUFBTUMsaUJBQWlCLElBQUksRUFBRSxHQUFHO0lBRWhDRCxnQkFBZ0JQLElBQUksQ0FBQ1E7SUFFckIsSUFBTTFCLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDRCxXQUFXMkIsT0FBTyxDQUFDLFNBQUNaO1FBQ2xCLElBQU1hLDJCQUEyQmIsVUFBVWMsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSxrQkFBa0JmLFdBQVksR0FBRztZQUV2Q2UsZ0JBQWdCTixrQkFBa0IsQ0FBQ0M7UUFDckM7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxJQUFNTSxhQUFhO0lBQ2pCakMsa0JBQUFBO0lBQ0FhLGlCQUFBQTtJQUNBTSxpQkFBQUE7SUFDQUgsa0JBQUFBO0lBQ0FLLGtCQUFBQTtJQUNBRyxtQkFBQUE7SUFDQUUsb0JBQUFBO0FBQ0Y7SUFFQSxXQUFlTyJ9