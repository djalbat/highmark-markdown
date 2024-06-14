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
    replaceChildNodes: replaceChildNodes,
    getDescendantNodes: getDescendantNodes
};
var _default = nodeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZmlyc3RSZW1vdmVkQ2hpbGROb2RlID0gZmlyc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICBsYXN0UmVtb3ZlZENoaWxkTm9kZSA9IGxhc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdEluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVtb3ZlZENoaWxkTm9kZSksIC8vL1xuICAgICAgICBsYXN0SW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YobGFzdFJlbW92ZWRDaGlsZE5vZGUpLCAvLy9cbiAgICAgICAgc3RhcnQgPSBmaXJzdEluZGV4LCAgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RJbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gZW5kIC0gc3RhcnQ7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGROb2RlKHJlbW92ZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZW1vdmVkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gcHJlcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMudW5zaGlmdChjaGlsZE5vZGUpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLnB1c2goY2hpbGROb2RlKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKHJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBnZXREZXNjZW5kYW50Tm9kZXMoZGVzY2VuZGFudE5vZGVzID0gW10pIHtcbiAgY29uc3QgZGVzY2VuZGFudE5vZGUgPSB0aGlzOyAvLy9cblxuICBkZXNjZW5kYW50Tm9kZXMucHVzaChkZXNjZW5kYW50Tm9kZSk7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgbm9uVGVybWluYWxOb2RlLmdldERlc2NlbmRhbnROb2RlcyhkZXNjZW5kYW50Tm9kZXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnROb2Rlcztcbn1cblxuY29uc3Qgbm9kZU1peGlucyA9IHtcbiAgcmVtb3ZlQ2hpbGROb2RlcyxcbiAgcmVtb3ZlQ2hpbGROb2RlLFxuICBhcHBlbmRDaGlsZE5vZGUsXG4gIHByZXBlbmRDaGlsZE5vZGUsXG4gIHJlcGxhY2VDaGlsZE5vZGVzLFxuICBnZXREZXNjZW5kYW50Tm9kZXNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGVNaXhpbnM7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJyZW1vdmVDaGlsZE5vZGVzIiwicmVtb3ZlZENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0UmVtb3ZlZENoaWxkTm9kZSIsImxhc3RSZW1vdmVkQ2hpbGROb2RlIiwiZmlyc3RJbmRleCIsImluZGV4T2YiLCJsYXN0SW5kZXgiLCJzdGFydCIsImVuZCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlQ2hpbGROb2RlIiwicmVtb3ZlZENoaWxkTm9kZSIsImluZGV4IiwicHJlcGVuZENoaWxkTm9kZSIsImNoaWxkTm9kZSIsInVuc2hpZnQiLCJhcHBlbmRDaGlsZE5vZGUiLCJwdXNoIiwicmVwbGFjZUNoaWxkTm9kZXMiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsImdldERlc2NlbmRhbnROb2RlcyIsImRlc2NlbmRhbnROb2RlcyIsImRlc2NlbmRhbnROb2RlIiwiZm9yRWFjaCIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibm9kZU1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEVBOzs7ZUFBQTs7O3lCQTVFK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQVFBLFFBQWdCQyx5QkFBYyxDQUE5QkQsT0FBT0UsT0FBU0QseUJBQWMsQ0FBdkJDO0FBRWYsU0FBU0MsaUJBQWlCQyxpQkFBaUI7SUFDekMsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLHdCQUF3QlAsTUFBTUksb0JBQzlCSSx1QkFBdUJOLEtBQUtFLG9CQUM1QkssYUFBYUosV0FBV0ssT0FBTyxDQUFDSCx3QkFDaENJLFlBQVlOLFdBQVdLLE9BQU8sQ0FBQ0YsdUJBQy9CSSxRQUFRSCxZQUNSSSxNQUFNRixZQUFZLEdBQ2xCRyxjQUFjRCxNQUFNRDtJQUUxQlAsV0FBV1UsTUFBTSxDQUFDSCxPQUFPRTtBQUMzQjtBQUVBLFNBQVNFLGdCQUFnQkMsZ0JBQWdCO0lBQ3ZDLElBQU1aLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CWSxRQUFRYixXQUFXSyxPQUFPLENBQUNPLG1CQUMzQkwsUUFBUU0sT0FDUkosY0FBYztJQUVwQlQsV0FBV1UsTUFBTSxDQUFDSCxPQUFPRTtBQUMzQjtBQUVBLFNBQVNLLGlCQUFpQkMsU0FBUztJQUNqQyxJQUFNZixhQUFhLElBQUksQ0FBQ0MsYUFBYTtJQUVyQ0QsV0FBV2dCLE9BQU8sQ0FBQ0Q7QUFDckI7QUFFQSxTQUFTRSxnQkFBZ0JGLFNBQVM7SUFDaEMsSUFBTWYsYUFBYSxJQUFJLENBQUNDLGFBQWE7SUFFckNELFdBQVdrQixJQUFJLENBQUNIO0FBQ2xCO0FBRUEsU0FBU0ksa0JBQWtCQyxpQkFBaUIsRUFBRUMscUJBQXFCO1FBTWpFckI7SUFMQSxJQUFNQSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQlksUUFBUWIsV0FBV0ssT0FBTyxDQUFDZSxvQkFDM0JiLFFBQVFNLE9BQ1JKLGNBQWM7SUFFcEJULENBQUFBLGNBQUFBLFlBQVdVLE1BQU0sQ0FBakJWLE1BQUFBLGFBQUFBO1FBQWtCTztRQUFPRTtLQUFzQyxDQUEvRFQsT0FBc0MscUJBQUdxQjtBQUMzQztBQUVBLFNBQVNDO1FBQW1CQyxrQkFBQUEsaUVBQWtCLEVBQUU7SUFDOUMsSUFBTUMsaUJBQWlCLElBQUksRUFBRSxHQUFHO0lBRWhDRCxnQkFBZ0JMLElBQUksQ0FBQ007SUFFckIsSUFBTXhCLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDRCxXQUFXeUIsT0FBTyxDQUFDLFNBQUNWO1FBQ2xCLElBQU1XLDJCQUEyQlgsVUFBVVksaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSxrQkFBa0JiLFdBQVksR0FBRztZQUV2Q2EsZ0JBQWdCTixrQkFBa0IsQ0FBQ0M7UUFDckM7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxJQUFNTSxhQUFhO0lBQ2pCL0Isa0JBQUFBO0lBQ0FhLGlCQUFBQTtJQUNBTSxpQkFBQUE7SUFDQUgsa0JBQUFBO0lBQ0FLLG1CQUFBQTtJQUNBRyxvQkFBQUE7QUFDRjtJQUVBLFdBQWVPIn0=