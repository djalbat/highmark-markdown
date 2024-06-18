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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZmlyc3RSZW1vdmVkQ2hpbGROb2RlID0gZmlyc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICBsYXN0UmVtb3ZlZENoaWxkTm9kZSA9IGxhc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdEluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVtb3ZlZENoaWxkTm9kZSksIC8vL1xuICAgICAgICBsYXN0SW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YobGFzdFJlbW92ZWRDaGlsZE5vZGUpLCAvLy9cbiAgICAgICAgc3RhcnQgPSBmaXJzdEluZGV4LCAgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RJbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gZW5kIC0gc3RhcnQ7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGROb2RlKHJlbW92ZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZW1vdmVkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gcHJlcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMudW5zaGlmdChjaGlsZE5vZGUpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLnB1c2goY2hpbGROb2RlKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YocmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGFkZENoaWxkTm9kZUFmdGVyKGV4aXN0aW5nQ2hpbGROb2RlLCBhZGRlZENoaWxkTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGV4aXN0aW5nQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGFkZGVkQ2hpbGROb2RlKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hpbGROb2Rlc0FmdGVyKGV4aXN0aW5nQ2hpbGROb2RlLCBhZGRlZENoaWxkTm9kZXMpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihleGlzdGluZ0NoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hZGRlZENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBnZXREZXNjZW5kYW50Tm9kZXMoZGVzY2VuZGFudE5vZGVzID0gW10pIHtcbiAgY29uc3QgZGVzY2VuZGFudE5vZGUgPSB0aGlzOyAvLy9cblxuICBkZXNjZW5kYW50Tm9kZXMucHVzaChkZXNjZW5kYW50Tm9kZSk7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgbm9uVGVybWluYWxOb2RlLmdldERlc2NlbmRhbnROb2RlcyhkZXNjZW5kYW50Tm9kZXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnROb2Rlcztcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSA9IHRoaXMpIHtcbiAgbGV0IHBhcmVudE5vZGUgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZE5vZGUpO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZE5vZGVzOyAvLy9cblxuICAgICAgbm9kZXMuc29tZSgobm9kZSkgPT4ge1xuICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5yZXRyaWV2ZVBhcmVudE5vZGUoY2hpbGROb2RlLCBub2RlKTtcblxuICAgICAgICBpZiAocGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyZW50Tm9kZTtcbn1cblxuY29uc3Qgbm9kZU1peGlucyA9IHtcbiAgcmVtb3ZlQ2hpbGROb2RlcyxcbiAgcmVtb3ZlQ2hpbGROb2RlLFxuICBhcHBlbmRDaGlsZE5vZGUsXG4gIHByZXBlbmRDaGlsZE5vZGUsXG4gIHJlcGxhY2VDaGlsZE5vZGUsXG4gIHJlcGxhY2VDaGlsZE5vZGVzLFxuICBhZGRDaGlsZE5vZGVBZnRlcixcbiAgYWRkQ2hpbGROb2Rlc0FmdGVyLFxuICBnZXREZXNjZW5kYW50Tm9kZXMsXG4gIHJldHJpZXZlUGFyZW50Tm9kZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZU1peGlucztcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibGFzdCIsInJlbW92ZUNoaWxkTm9kZXMiLCJyZW1vdmVkQ2hpbGROb2RlcyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RSZW1vdmVkQ2hpbGROb2RlIiwibGFzdFJlbW92ZWRDaGlsZE5vZGUiLCJmaXJzdEluZGV4IiwiaW5kZXhPZiIsImxhc3RJbmRleCIsInN0YXJ0IiwiZW5kIiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZW1vdmVDaGlsZE5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlIiwiaW5kZXgiLCJwcmVwZW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwidW5zaGlmdCIsImFwcGVuZENoaWxkTm9kZSIsInB1c2giLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwiYWRkQ2hpbGROb2RlQWZ0ZXIiLCJleGlzdGluZ0NoaWxkTm9kZSIsImFkZGVkQ2hpbGROb2RlIiwiYWRkQ2hpbGROb2Rlc0FmdGVyIiwiYWRkZWRDaGlsZE5vZGVzIiwiZ2V0RGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGUiLCJmb3JFYWNoIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZXRyaWV2ZVBhcmVudE5vZGUiLCJub2RlIiwicGFyZW50Tm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJub2RlcyIsInNvbWUiLCJu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