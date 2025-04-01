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
function fromFirstChildNode(callback) {
    var result;
    var firstIndex = 0;
    this.forwardsSomeChildNode(function(childNode, index) {
        if (index === firstIndex) {
            var firstChildNode = childNode; ///
            result = callback(firstChildNode);
            return true;
        }
    });
    return result;
}
function fromSecondChildNode(callback) {
    var result;
    var secondIndex = 1;
    this.forwardsSomeChildNode(function(childNode, index) {
        if (index === secondIndex) {
            var firstChildNode = childNode; ///
            result = callback(firstChildNode);
            return true;
        }
    });
    return result;
}
function fromThirdChildNode(callback) {
    var result;
    var thirdIndex = 2;
    this.forwardsSomeChildNode(function(childNode, index) {
        if (index === thirdIndex) {
            var thirdChildNode = childNode; ///
            result = callback(thirdChildNode);
            return true;
        }
    });
    return result;
}
function fromFirstLastChildNode(callback) {
    var result;
    var multiplicity = this.getMultiplicity(), firstLastIndex = multiplicity - 1;
    this.backwardsSomeChildNode(function(childNode, index) {
        if (index === firstLastIndex) {
            var thirdChildNode = childNode; ///
            result = callback(thirdChildNode);
            return true;
        }
    });
    return result;
}
function fromSecondLastChildNode(callback) {
    var result;
    var multiplicity = this.getMultiplicity(), secondLastIndex = multiplicity - 2;
    this.backwardsSomeChildNode(function(childNode, index) {
        if (index === secondLastIndex) {
            var thirdChildNode = childNode; ///
            result = callback(thirdChildNode);
            return true;
        }
    });
    return result;
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
    fromFirstChildNode: fromFirstChildNode,
    fromSecondChildNode: fromSecondChildNode,
    fromThirdChildNode: fromThirdChildNode,
    fromFirstLastChildNode: fromFirstLastChildNode,
    fromSecondLastChildNode: fromSecondLastChildNode
};
var _default = nodeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZmlyc3RSZW1vdmVkQ2hpbGROb2RlID0gZmlyc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICBsYXN0UmVtb3ZlZENoaWxkTm9kZSA9IGxhc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdEluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVtb3ZlZENoaWxkTm9kZSksIC8vL1xuICAgICAgICBsYXN0SW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YobGFzdFJlbW92ZWRDaGlsZE5vZGUpLCAvLy9cbiAgICAgICAgc3RhcnQgPSBmaXJzdEluZGV4LCAgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RJbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gZW5kIC0gc3RhcnQ7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGROb2RlKHJlbW92ZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZW1vdmVkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gcHJlcGVuZENoaWxkTm9kZShwcmVwZW5kZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMudW5zaGlmdChwcmVwZW5kZWRDaGlsZE5vZGUpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZE5vZGUoYXBwZW5kZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMucHVzaChhcHBlbmRlZENoaWxkTm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YocmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJlcGxhY2VtZW50Q2hpbGROb2RlKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKHJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZE5vZGVBZnRlcihleGlzdGluZ0NoaWxkTm9kZSwgYWRkZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihleGlzdGluZ0NoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENoaWxkTm9kZXNBZnRlcihleGlzdGluZ0NoaWxkTm9kZSwgYWRkZWRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoZXhpc3RpbmdDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYWRkZWRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gZnJvbUZpcnN0Q2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgZmlyc3RJbmRleCA9IDA7XG5cbiAgdGhpcy5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IGZpcnN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21TZWNvbmRDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBzZWNvbmRJbmRleCA9IDE7XG5cbiAgdGhpcy5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IHNlY29uZEluZGV4KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGZpcnN0Q2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tVGhpcmRDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCB0aGlyZEluZGV4ID0gMjtcblxuICB0aGlzLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gdGhpcmRJbmRleCkge1xuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlyZENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbUZpcnN0TGFzdENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgIGZpcnN0TGFzdEluZGV4ID0gbXVsdGlwbGljaXR5IC0gMTtcblxuICB0aGlzLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IGZpcnN0TGFzdEluZGV4KSB7XG4gICAgICBjb25zdCB0aGlyZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKHRoaXJkQ2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tU2Vjb25kTGFzdENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgIHNlY29uZExhc3RJbmRleCA9IG11bHRpcGxpY2l0eSAtIDI7XG5cbiAgdGhpcy5iYWNrd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBzZWNvbmRMYXN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IHRoaXJkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2sodGhpcmRDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmNvbnN0IG5vZGVNaXhpbnMgPSB7XG4gIHJlbW92ZUNoaWxkTm9kZXMsXG4gIHJlbW92ZUNoaWxkTm9kZSxcbiAgYXBwZW5kQ2hpbGROb2RlLFxuICBwcmVwZW5kQ2hpbGROb2RlLFxuICByZXBsYWNlQ2hpbGROb2RlLFxuICByZXBsYWNlQ2hpbGROb2RlcyxcbiAgYWRkQ2hpbGROb2RlQWZ0ZXIsXG4gIGFkZENoaWxkTm9kZXNBZnRlcixcbiAgZnJvbUZpcnN0Q2hpbGROb2RlLFxuICBmcm9tU2Vjb25kQ2hpbGROb2RlLFxuICBmcm9tVGhpcmRDaGlsZE5vZGUsXG4gIGZyb21GaXJzdExhc3RDaGlsZE5vZGUsXG4gIGZyb21TZWNvbmRMYXN0Q2hpbGROb2RlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBub2RlTWl4aW5zO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0IiwicmVtb3ZlQ2hpbGROb2RlcyIsInJlbW92ZWRDaGlsZE5vZGVzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdFJlbW92ZWRDaGlsZE5vZGUiLCJsYXN0UmVtb3ZlZENoaWxkTm9kZSIsImZpcnN0SW5kZXgiLCJpbmRleE9mIiwibGFzdEluZGV4Iiwic3RhcnQiLCJlbmQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlbW92ZUNoaWxkTm9kZSIsInJlbW92ZWRDaGlsZE5vZGUiLCJpbmRleCIsInByZXBlbmRDaGlsZE5vZGUiLCJwcmVwZW5kZWRDaGlsZE5vZGUiLCJ1bnNoaWZ0IiwiYXBwZW5kQ2hpbGROb2RlIiwiYXBwZW5kZWRDaGlsZE5vZGUiLCJwdXNoIiwicmVwbGFjZUNoaWxkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVwbGFjZW1lbnRDaGlsZE5vZGUiLCJyZXBsYWNlQ2hpbGROb2RlcyIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsImFkZENoaWxkTm9kZUFmdGVyIiwiZXhpc3RpbmdDaGlsZE5vZGUiLCJhZGRlZENoaWxkTm9kZSIsImFkZENoaWxkTm9kZXNBZnRlciIsImFkZGVkQ2hpbGROb2RlcyIsImZyb21GaXJzdENoaWxkTm9kZSIsImNhbGxiYWNrIiwicmVzdWx0IiwiZm9yd2FyZHNTb21lQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kSW5kZXgiLCJmcm9tVGhpcmRDaGlsZE5vZGUiLCJ0aGlyZEluZGV4IiwidGhpcmRDaGlsZE5vZGUiLCJmcm9tRmlyc3RMYXN0Q2hpbGROb2RlIiwibXVsdGlwbGljaXR5IiwiZ2V0TXVsdGlwbGljaXR5IiwiZmlyc3RMYXN0SW5kZXgiLCJiYWNrd2FyZHNTb21lQ2hpbGROb2RlIiwiZnJvbVNlY29uZExhc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0SW5kZXgiLCJub2RlTWl4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