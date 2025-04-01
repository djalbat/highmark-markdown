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
    getDescendantNodes: getDescendantNodes,
    retrieveParentNode: retrieveParentNode,
    fromFirstChildNode: fromFirstChildNode,
    fromSecondChildNode: fromSecondChildNode,
    fromThirdChildNode: fromThirdChildNode,
    fromFirstLastChildNode: fromFirstLastChildNode,
    fromSecondLastChildNode: fromSecondLastChildNode
};
var _default = nodeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZmlyc3RSZW1vdmVkQ2hpbGROb2RlID0gZmlyc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICBsYXN0UmVtb3ZlZENoaWxkTm9kZSA9IGxhc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdEluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVtb3ZlZENoaWxkTm9kZSksIC8vL1xuICAgICAgICBsYXN0SW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YobGFzdFJlbW92ZWRDaGlsZE5vZGUpLCAvLy9cbiAgICAgICAgc3RhcnQgPSBmaXJzdEluZGV4LCAgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RJbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gZW5kIC0gc3RhcnQ7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGROb2RlKHJlbW92ZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZW1vdmVkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gcHJlcGVuZENoaWxkTm9kZShwcmVwZW5kZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMudW5zaGlmdChwcmVwZW5kZWRDaGlsZE5vZGUpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZE5vZGUoYXBwZW5kZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMucHVzaChhcHBlbmRlZENoaWxkTm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YocmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJlcGxhY2VtZW50Q2hpbGROb2RlKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKHJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZE5vZGVBZnRlcihleGlzdGluZ0NoaWxkTm9kZSwgYWRkZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihleGlzdGluZ0NoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENoaWxkTm9kZXNBZnRlcihleGlzdGluZ0NoaWxkTm9kZSwgYWRkZWRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoZXhpc3RpbmdDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYWRkZWRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVzY2VuZGFudE5vZGVzKGRlc2NlbmRhbnROb2RlcyA9IFtdKSB7XG4gIGNvbnN0IGRlc2NlbmRhbnROb2RlID0gdGhpczsgLy8vXG5cbiAgZGVzY2VuZGFudE5vZGVzLnB1c2goZGVzY2VuZGFudE5vZGUpO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZS5nZXREZXNjZW5kYW50Tm9kZXMoZGVzY2VuZGFudE5vZGVzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXNjZW5kYW50Tm9kZXM7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUgPSB0aGlzKSB7XG4gIGxldCBwYXJlbnROb2RlID0gbnVsbDtcblxuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoY2hpbGROb2RlKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIG5vZGVzLnNvbWUoKG5vZGUpID0+IHtcbiAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMucmV0cmlldmVQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSk7XG5cbiAgICAgICAgaWYgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5cbmZ1bmN0aW9uIGZyb21GaXJzdENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IGZpcnN0SW5kZXggPSAwO1xuXG4gIHRoaXMuZm9yd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBmaXJzdEluZGV4KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGZpcnN0Q2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tU2Vjb25kQ2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3Qgc2Vjb25kSW5kZXggPSAxO1xuXG4gIHRoaXMuZm9yd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBzZWNvbmRJbmRleCkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayhmaXJzdENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbVRoaXJkQ2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdGhpcmRJbmRleCA9IDI7XG5cbiAgdGhpcy5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IHRoaXJkSW5kZXgpIHtcbiAgICAgIGNvbnN0IHRoaXJkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2sodGhpcmRDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21GaXJzdExhc3RDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICBmaXJzdExhc3RJbmRleCA9IG11bHRpcGxpY2l0eSAtIDE7XG5cbiAgdGhpcy5iYWNrd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBmaXJzdExhc3RJbmRleCkge1xuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlyZENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbVNlY29uZExhc3RDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICBzZWNvbmRMYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAyO1xuXG4gIHRoaXMuYmFja3dhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gc2Vjb25kTGFzdEluZGV4KSB7XG4gICAgICBjb25zdCB0aGlyZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKHRoaXJkQ2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5jb25zdCBub2RlTWl4aW5zID0ge1xuICByZW1vdmVDaGlsZE5vZGVzLFxuICByZW1vdmVDaGlsZE5vZGUsXG4gIGFwcGVuZENoaWxkTm9kZSxcbiAgcHJlcGVuZENoaWxkTm9kZSxcbiAgcmVwbGFjZUNoaWxkTm9kZSxcbiAgcmVwbGFjZUNoaWxkTm9kZXMsXG4gIGFkZENoaWxkTm9kZUFmdGVyLFxuICBhZGRDaGlsZE5vZGVzQWZ0ZXIsXG4gIGdldERlc2NlbmRhbnROb2RlcyxcbiAgcmV0cmlldmVQYXJlbnROb2RlLFxuICBmcm9tRmlyc3RDaGlsZE5vZGUsXG4gIGZyb21TZWNvbmRDaGlsZE5vZGUsXG4gIGZyb21UaGlyZENoaWxkTm9kZSxcbiAgZnJvbUZpcnN0TGFzdENoaWxkTm9kZSxcbiAgZnJvbVNlY29uZExhc3RDaGlsZE5vZGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGVNaXhpbnM7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJyZW1vdmVDaGlsZE5vZGVzIiwicmVtb3ZlZENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0UmVtb3ZlZENoaWxkTm9kZSIsImxhc3RSZW1vdmVkQ2hpbGROb2RlIiwiZmlyc3RJbmRleCIsImluZGV4T2YiLCJsYXN0SW5kZXgiLCJzdGFydCIsImVuZCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlQ2hpbGROb2RlIiwicmVtb3ZlZENoaWxkTm9kZSIsImluZGV4IiwicHJlcGVuZENoaWxkTm9kZSIsInByZXBlbmRlZENoaWxkTm9kZSIsInVuc2hpZnQiLCJhcHBlbmRDaGlsZE5vZGUiLCJhcHBlbmRlZENoaWxkTm9kZSIsInB1c2giLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwiYWRkQ2hpbGROb2RlQWZ0ZXIiLCJleGlzdGluZ0NoaWxkTm9kZSIsImFkZGVkQ2hpbGROb2RlIiwiYWRkQ2hpbGROb2Rlc0FmdGVyIiwiYWRkZWRDaGlsZE5vZGVzIiwiZ2V0RGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGUiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZXRyaWV2ZVBhcmVudE5vZGUiLCJub2RlIiwicGFyZW50Tm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJub2RlcyIsInNvbWUiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJjYWxsYmFjayIsInJlc3VsdCIsImZvcndhcmRzU29tZUNoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZEluZGV4IiwiZnJvbVRoaXJkQ2hpbGROb2RlIiwidGhpcmRJbmRleCIsInRoaXJkQ2hpbGROb2RlIiwiZnJvbUZpcnN0TGFzdENoaWxkTm9kZSIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsImZpcnN0TGFzdEluZGV4IiwiYmFja3dhcmRzU29tZUNoaWxkTm9kZSIsImZyb21TZWNvbmRMYXN0Q2hpbGROb2RlIiwic2Vjb25kTGFzdEluZGV4Iiwibm9kZU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBME9BOzs7ZUFBQTs7O3lCQXhPK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQVFBLFFBQWdCQyx5QkFBYyxDQUE5QkQsT0FBT0UsT0FBU0QseUJBQWMsQ0FBdkJDO0FBRWYsU0FBU0MsaUJBQWlCQyxpQkFBaUI7SUFDekMsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLHdCQUF3QlAsTUFBTUksb0JBQzlCSSx1QkFBdUJOLEtBQUtFLG9CQUM1QkssYUFBYUosV0FBV0ssT0FBTyxDQUFDSCx3QkFDaENJLFlBQVlOLFdBQVdLLE9BQU8sQ0FBQ0YsdUJBQy9CSSxRQUFRSCxZQUNSSSxNQUFNRixZQUFZLEdBQ2xCRyxjQUFjRCxNQUFNRDtJQUUxQlAsV0FBV1UsTUFBTSxDQUFDSCxPQUFPRTtBQUMzQjtBQUVBLFNBQVNFLGdCQUFnQkMsZ0JBQWdCO0lBQ3ZD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