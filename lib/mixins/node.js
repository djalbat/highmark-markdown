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
function prependChildNode(prependedChildNode) {
    var childNodes = this.getChildNodes();
    childNodes.unshift(prependedChildNode);
}
function appendChildNode(appendedChildNode) {
    var childNodes = this.getChildNodes();
    childNodes.push(appendedChildNode);
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
function addChildNodeAfter(existingChildNode, addedChildNode) {
    var childNodes = this.getChildNodes(), index = childNodes.indexOf(existingChildNode), start = index + 1, deleteCount = 0;
    childNodes.splice(start, deleteCount, addedChildNode);
}
function addChildNodesAfter(existingChildNode, addedChildNodes) {
    var _childNodes;
    var childNodes = this.getChildNodes(), index = childNodes.indexOf(existingChildNode), start = index + 1, deleteCount = 0;
    (_childNodes = childNodes).splice.apply(_childNodes, [
        start,
        deleteCount
    ].concat(_to_consumable_array(addedChildNodes)));
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
function retrieveParentNode(childNode) {
    var _this = this;
    var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
    var parentNode = null;
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), index = childNodes.indexOf(childNode);
        if (index !== -1) {
            parentNode = node; ///
        } else {
            var nodes = childNodes; ///
            nodes.some(function(node) {
                parentNode = _this.retrieveParentNode(childNode, node);
                if (parentNode !== null) {
                    return true;
                }
            });
        }
    }
    return parentNode;
}
var nodeMixins = {
    removeChildNodes: removeChildNodes,
    removeChildNode: removeChildNode,
    appendChildNode: appendChildNode,
    prependChildNode: prependChildNode,
    replaceChildNode: replaceChildNode,
    replaceChildNodes: replaceChildNodes,
    addChildNodeAfter: addChildNodeAfter,
    addChildNodesAfter: addChildNodesAfter,
    getDescendantNodes: getDescendantNodes,
    retrieveParentNode: retrieveParentNode
};
var _default = nodeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZmlyc3RSZW1vdmVkQ2hpbGROb2RlID0gZmlyc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICBsYXN0UmVtb3ZlZENoaWxkTm9kZSA9IGxhc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdEluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVtb3ZlZENoaWxkTm9kZSksIC8vL1xuICAgICAgICBsYXN0SW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YobGFzdFJlbW92ZWRDaGlsZE5vZGUpLCAvLy9cbiAgICAgICAgc3RhcnQgPSBmaXJzdEluZGV4LCAgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RJbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gZW5kIC0gc3RhcnQ7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGROb2RlKHJlbW92ZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZW1vdmVkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gcHJlcGVuZENoaWxkTm9kZShwcmVwZW5kZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMudW5zaGlmdChwcmVwZW5kZWRDaGlsZE5vZGUpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZE5vZGUoYXBwZW5kZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMucHVzaChhcHBlbmRlZENoaWxkTm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YocmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJlcGxhY2VtZW50Q2hpbGROb2RlKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKHJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZE5vZGVBZnRlcihleGlzdGluZ0NoaWxkTm9kZSwgYWRkZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihleGlzdGluZ0NoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENoaWxkTm9kZXNBZnRlcihleGlzdGluZ0NoaWxkTm9kZSwgYWRkZWRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoZXhpc3RpbmdDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYWRkZWRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVzY2VuZGFudE5vZGVzKGRlc2NlbmRhbnROb2RlcyA9IFtdKSB7XG4gIGNvbnN0IGRlc2NlbmRhbnROb2RlID0gdGhpczsgLy8vXG5cbiAgZGVzY2VuZGFudE5vZGVzLnB1c2goZGVzY2VuZGFudE5vZGUpO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZS5nZXREZXNjZW5kYW50Tm9kZXMoZGVzY2VuZGFudE5vZGVzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXNjZW5kYW50Tm9kZXM7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUgPSB0aGlzKSB7XG4gIGxldCBwYXJlbnROb2RlID0gbnVsbDtcblxuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoY2hpbGROb2RlKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIG5vZGVzLnNvbWUoKG5vZGUpID0+IHtcbiAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMucmV0cmlldmVQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSk7XG5cbiAgICAgICAgaWYgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5cbmNvbnN0IG5vZGVNaXhpbnMgPSB7XG4gIHJlbW92ZUNoaWxkTm9kZXMsXG4gIHJlbW92ZUNoaWxkTm9kZSxcbiAgYXBwZW5kQ2hpbGROb2RlLFxuICBwcmVwZW5kQ2hpbGROb2RlLFxuICByZXBsYWNlQ2hpbGROb2RlLFxuICByZXBsYWNlQ2hpbGROb2RlcyxcbiAgYWRkQ2hpbGROb2RlQWZ0ZXIsXG4gIGFkZENoaWxkTm9kZXNBZnRlcixcbiAgZ2V0RGVzY2VuZGFudE5vZGVzLFxuICByZXRyaWV2ZVBhcmVudE5vZGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGVNaXhpbnM7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJyZW1vdmVDaGlsZE5vZGVzIiwicmVtb3ZlZENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0UmVtb3ZlZENoaWxkTm9kZSIsImxhc3RSZW1vdmVkQ2hpbGROb2RlIiwiZmlyc3RJbmRleCIsImluZGV4T2YiLCJsYXN0SW5kZXgiLCJzdGFydCIsImVuZCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlQ2hpbGROb2RlIiwicmVtb3ZlZENoaWxkTm9kZSIsImluZGV4IiwicHJlcGVuZENoaWxkTm9kZSIsInByZXBlbmRlZENoaWxkTm9kZSIsInVuc2hpZnQiLCJhcHBlbmRDaGlsZE5vZGUiLCJhcHBlbmRlZENoaWxkTm9kZSIsInB1c2giLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwiYWRkQ2hpbGROb2RlQWZ0ZXIiLCJleGlzdGluZ0NoaWxkTm9kZSIsImFkZGVkQ2hpbGROb2RlIiwiYWRkQ2hpbGROb2Rlc0FmdGVyIiwiYWRkZWRDaGlsZE5vZGVzIiwiZ2V0RGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGUiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZXRyaWV2ZVBhcmVudE5vZGUiLCJub2RlIiwicGFyZW50Tm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJub2RlcyIsInNvbWUiLCJub2RlTWl4aW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlJQTs7O2VBQUE7Ozt5QkF2SStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFRQSxRQUFnQkMseUJBQWMsQ0FBOUJELE9BQU9FLE9BQVNELHlCQUFjLENBQXZCQztBQUVmLFNBQVNDLGlCQUFpQkMsaUJBQWlCO0lBQ3pDLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyx3QkFBd0JQLE1BQU1JLG9CQUM5QkksdUJBQXVCTixLQUFLRSxvQkFDNUJLLGFBQWFKLFdBQVdLLE9BQU8sQ0FBQ0gsd0JBQ2hDSSxZQUFZTixXQUFXSyxPQUFPLENBQUNGLHVCQUMvQkksUUFBUUgsWUFDUkksTUFBTUYsWUFBWSxHQUNsQkcsY0FBY0QsTUFBTUQ7SUFFMUJQLFdBQVdVLE1BQU0sQ0FBQ0gsT0FBT0U7QUFDM0I7QUFFQSxTQUFTRSxnQkFBZ0JDLGdCQUFnQjtJQUN2QyxJQUFNWixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQlksUUFBUWIsV0FBV0ssT0FBTyxDQUFDTyxtQkFDM0JMLFFBQVFNLE9BQ1JKLGNBQWM7SUFFcEJULFdBQVdVLE1BQU0sQ0FBQ0gsT0FBT0U7QUFDM0I7QUFFQSxTQUFTSyxpQkFBaUJDLGtCQUFrQjtJQUMxQyxJQUFNZixhQUFhLElBQUksQ0FBQ0MsYUFBYTtJQUVyQ0QsV0FBV2dCLE9BQU8sQ0FBQ0Q7QUFDckI7QUFFQSxTQUFTRSxnQkFBZ0JDLGlCQUFpQjtJQUN4QyxJQUFNbEIsYUFBYSxJQUFJLENBQUNDLGFBQWE7SUFFckNELFdBQVdtQixJQUFJLENBQUNEO0FBQ2xCO0FBRUEsU0FBU0UsaUJBQWlCQyxpQkFBaUIsRUFBRUMsb0JBQW9CO0lBQy9ELElBQU10QixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQlksUUFBUWIsV0FBV0ssT0FBTyxDQUFDZ0Isb0JBQzNCZCxRQUFRTSxPQUNSSixjQUFjO0lBRXBCVCxXQUFXVSxNQUFNLENBQUNILE9BQU9FLGFBQWFhO0FBQ3hDO0FBRUEsU0FBU0Msa0JBQWtCRixpQkFBaUIsRUFBRUcscUJBQXFCO1FBTWpFeEI7SUFMQSxJQUFNQSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQlksUUFBUWIsV0FBV0ssT0FBTyxDQUFDZ0Isb0JBQzNCZCxRQUFRTSxPQUNSSixjQUFjO0lBRXBCVCxDQUFBQSxjQUFBQSxZQUFXVSxNQUFNLENBQWpCVixNQUFBQSxhQUFBQTtRQUFrQk87UUFBT0U7S0FBc0MsQ0FBL0RULE9BQXNDLHFCQUFHd0I7QUFDM0M7QUFFQSxTQUFTQyxrQkFBa0JDLGlCQUFpQixFQUFFQyxjQUFjO0lBQzFELElBQU0zQixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQlksUUFBUWIsV0FBV0ssT0FBTyxDQUFDcUIsb0JBQzNCbkIsUUFBUU0sUUFBUSxHQUNoQkosY0FBYztJQUVwQlQsV0FBV1UsTUFBTSxDQUFDSCxPQUFPRSxhQUFha0I7QUFDeEM7QUFFQSxTQUFTQyxtQkFBbUJGLGlCQUFpQixFQUFFRyxlQUFlO1FBTTVEN0I7SUFMQSxJQUFNQSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQlksUUFBUWIsV0FBV0ssT0FBTyxDQUFDcUIsb0JBQzNCbkIsUUFBUU0sUUFBUSxHQUNoQkosY0FBYztJQUVwQlQsQ0FBQUEsY0FBQUEsWUFBV1UsTUFBTSxDQUFqQlYsTUFBQUEsYUFBQUE7UUFBa0JPO1FBQU9FO0tBQWdDLENBQXpEVCxPQUFzQyxxQkFBRzZCO0FBQzNDO0FBRUEsU0FBU0M7UUFBbUJDLGtCQUFBQSxpRUFBa0IsRUFBRTtJQUM5QyxJQUFNQyxpQkFBaUIsSUFBSSxFQUFFLEdBQUc7SUFFaENELGdCQUFnQlosSUFBSSxDQUFDYTtJQUVyQixJQUFNaEMsYUFBYSxJQUFJLENBQUNDLGFBQWE7SUFFckNELFdBQVdpQyxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7UUFFNUQsSUFBSUQsMEJBQTBCO1lBQzVCLElBQU1FLGtCQUFrQkgsV0FBWSxHQUFHO1lBRXZDRyxnQkFBZ0JQLGtCQUFrQixDQUFDQztRQUNyQztJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNPLG1CQUFtQkosU0FBUzs7UUFBRUssT0FBQUEsaUVBQU8sSUFBSTtJQUNoRCxJQUFJQyxhQUFhO0lBRWpCLElBQU1DLHNCQUFzQkYsS0FBS0gsaUJBQWlCO0lBRWxELElBQUlLLHFCQUFxQjtRQUN2QixJQUFNSixrQkFBa0JFLE1BQ2xCdkMsYUFBYXFDLGdCQUFnQnBDLGFBQWEsSUFDMUNZLFFBQVFiLFdBQVdLLE9BQU8sQ0FBQzZCO1FBRWpDLElBQUlyQixVQUFVLENBQUMsR0FBRztZQUNoQjJCLGFBQWFELE1BQU8sR0FBRztRQUN6QixPQUFPO1lBQ0wsSUFBTUcsUUFBUTFDLFlBQVksR0FBRztZQUU3QjBDLE1BQU1DLElBQUksQ0FBQyxTQUFDSjtnQkFDVkMsYUFBYSxNQUFLRixrQkFBa0IsQ0FBQ0osV0FBV0s7Z0JBRWhELElBQUlDLGVBQWUsTUFBTTtvQkFDdkIsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxJQUFNSSxhQUFhO0lBQ2pCOUMsa0JBQUFBO0lBQ0FhLGlCQUFBQTtJQUNBTSxpQkFBQUE7SUFDQUgsa0JBQUFBO0lBQ0FNLGtCQUFBQTtJQUNBRyxtQkFBQUE7SUFDQUUsbUJBQUFBO0lBQ0FHLG9CQUFBQTtJQUNBRSxvQkFBQUE7SUFDQVEsb0JBQUFBO0FBQ0Y7SUFFQSxXQUFlTSJ9