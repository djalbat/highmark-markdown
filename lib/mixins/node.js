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
function addChildNodeAfter(existingChildNode, addedChildNode) {
    var addedChildNodes = [
        addedChildNode
    ];
    this.addChildNodesAfter(existingChildNode, addedChildNodes);
}
function addChildNodesAfter(existingChildNode, addedChildNodes) {
    var childNode = existingChildNode, index = this.indexOfChildNode(childNode), startIndex = index + 1, deleteCount = 0;
    this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
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
function fromThirdLastChildNode(callback) {
    var result;
    var multiplicity = this.getMultiplicity(), thirdLastIndex = multiplicity - 2;
    this.backwardsSomeChildNode(function(childNode, index) {
        if (index === thirdLastIndex) {
            var thirdChildNode = childNode; ///
            result = callback(thirdChildNode);
            return true;
        }
    });
    return result;
}
var nodeMixins = {
    addChildNodeAfter: addChildNodeAfter,
    addChildNodesAfter: addChildNodesAfter,
    fromFirstChildNode: fromFirstChildNode,
    fromSecondChildNode: fromSecondChildNode,
    fromThirdChildNode: fromThirdChildNode,
    fromFirstLastChildNode: fromFirstLastChildNode,
    fromSecondLastChildNode: fromSecondLastChildNode,
    fromThirdLastChildNode: fromThirdLastChildNode
};
var _default = nodeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gYWRkQ2hpbGROb2RlQWZ0ZXIoZXhpc3RpbmdDaGlsZE5vZGUsIGFkZGVkQ2hpbGROb2RlKSB7XG4gIGNvbnN0IGFkZGVkQ2hpbGROb2RlcyA9IFtcbiAgICAgICAgICBhZGRlZENoaWxkTm9kZVxuICAgICAgICBdO1xuXG4gIHRoaXMuYWRkQ2hpbGROb2Rlc0FmdGVyKGV4aXN0aW5nQ2hpbGROb2RlLCBhZGRlZENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZE5vZGVzQWZ0ZXIoZXhpc3RpbmdDaGlsZE5vZGUsIGFkZGVkQ2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGUgPSBleGlzdGluZ0NoaWxkTm9kZSwgIC8vL1xuICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXhPZkNoaWxkTm9kZShjaGlsZE5vZGUpLFxuICAgICAgICBzdGFydEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBmcm9tRmlyc3RDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBmaXJzdEluZGV4ID0gMDtcblxuICB0aGlzLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gZmlyc3RJbmRleCkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayhmaXJzdENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbVNlY29uZENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHNlY29uZEluZGV4ID0gMTtcblxuICB0aGlzLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gc2Vjb25kSW5kZXgpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21UaGlyZENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHRoaXJkSW5kZXggPSAyO1xuXG4gIHRoaXMuZm9yd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSB0aGlyZEluZGV4KSB7XG4gICAgICBjb25zdCB0aGlyZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKHRoaXJkQ2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tRmlyc3RMYXN0Q2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgZmlyc3RMYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAxO1xuXG4gIHRoaXMuYmFja3dhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gZmlyc3RMYXN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IHRoaXJkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2sodGhpcmRDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21TZWNvbmRMYXN0Q2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgc2Vjb25kTGFzdEluZGV4ID0gbXVsdGlwbGljaXR5IC0gMjtcblxuICB0aGlzLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IHNlY29uZExhc3RJbmRleCkge1xuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlyZENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbVRoaXJkTGFzdENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgIHRoaXJkTGFzdEluZGV4ID0gbXVsdGlwbGljaXR5IC0gMjtcblxuICB0aGlzLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IHRoaXJkTGFzdEluZGV4KSB7XG4gICAgICBjb25zdCB0aGlyZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKHRoaXJkQ2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5jb25zdCBub2RlTWl4aW5zID0ge1xuICBhZGRDaGlsZE5vZGVBZnRlcixcbiAgYWRkQ2hpbGROb2Rlc0FmdGVyLFxuICBmcm9tRmlyc3RDaGlsZE5vZGUsXG4gIGZyb21TZWNvbmRDaGlsZE5vZGUsXG4gIGZyb21UaGlyZENoaWxkTm9kZSxcbiAgZnJvbUZpcnN0TGFzdENoaWxkTm9kZSxcbiAgZnJvbVNlY29uZExhc3RDaGlsZE5vZGUsXG4gIGZyb21UaGlyZExhc3RDaGlsZE5vZGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGVNaXhpbnM7XG4iXSwibmFtZXMiOlsiYWRkQ2hpbGROb2RlQWZ0ZXIiLCJleGlzdGluZ0NoaWxkTm9kZSIsImFkZGVkQ2hpbGROb2RlIiwiYWRkZWRDaGlsZE5vZGVzIiwiYWRkQ2hpbGROb2Rlc0FmdGVyIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJpbmRleE9mQ2hpbGROb2RlIiwic3RhcnRJbmRleCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlQ2hpbGROb2RlcyIsImZyb21GaXJzdENoaWxkTm9kZSIsImNhbGxiYWNrIiwicmVzdWx0IiwiZmlyc3RJbmRleCIsImZvcndhcmRzU29tZUNoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZEluZGV4IiwiZnJvbVRoaXJkQ2hpbGROb2RlIiwidGhpcmRJbmRleCIsInRoaXJkQ2hpbGROb2RlIiwiZnJvbUZpcnN0TGFzdENoaWxkTm9kZSIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsImZpcnN0TGFzdEluZGV4IiwiYmFja3dhcmRzU29tZUNoaWxkTm9kZSIsImZyb21TZWNvbmRMYXN0Q2hpbGROb2RlIiwic2Vjb25kTGFzdEluZGV4IiwiZnJvbVRoaXJkTGFzdENoaWxkTm9kZSIsInRoaXJkTGFzdEluZGV4Iiwibm9kZU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7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