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
function prependChildNode(prependedChildNode) {
    var offset = 0, addedChildNode = prependedChildNode; ///
    this.addChildNode(addedChildNode, offset);
}
function appendChildNode(appendedChildNode) {
    var multiplicity = this.getMultiplicity(), offset = multiplicity, addedChildNode = appendedChildNode; ///
    this.addChildNode(addedChildNode, offset);
}
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
var nodeMixins = {
    appendChildNode: appendChildNode,
    prependChildNode: prependChildNode,
    addChildNodeAfter: addChildNodeAfter,
    addChildNodesAfter: addChildNodesAfter,
    fromFirstChildNode: fromFirstChildNode,
    fromSecondChildNode: fromSecondChildNode,
    fromThirdChildNode: fromThirdChildNode,
    fromFirstLastChildNode: fromFirstLastChildNode,
    fromSecondLastChildNode: fromSecondLastChildNode
};
var _default = nodeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gcHJlcGVuZENoaWxkTm9kZShwcmVwZW5kZWRDaGlsZE5vZGUpIHtcbiAgY29uc3Qgb2Zmc2V0ID0gMCxcbiAgICAgICAgYWRkZWRDaGlsZE5vZGUgPSBwcmVwZW5kZWRDaGlsZE5vZGU7IC8vL1xuXG4gIHRoaXMuYWRkQ2hpbGROb2RlKGFkZGVkQ2hpbGROb2RlLCBvZmZzZXQpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZE5vZGUoYXBwZW5kZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgb2Zmc2V0ID0gbXVsdGlwbGljaXR5LCAgLy8vXG4gICAgICAgIGFkZGVkQ2hpbGROb2RlID0gYXBwZW5kZWRDaGlsZE5vZGU7IC8vL1xuXG4gIHRoaXMuYWRkQ2hpbGROb2RlKGFkZGVkQ2hpbGROb2RlLCBvZmZzZXQpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZE5vZGVBZnRlcihleGlzdGluZ0NoaWxkTm9kZSwgYWRkZWRDaGlsZE5vZGUpIHtcbiAgY29uc3QgYWRkZWRDaGlsZE5vZGVzID0gW1xuICAgICAgICAgIGFkZGVkQ2hpbGROb2RlXG4gICAgICAgIF07XG5cbiAgdGhpcy5hZGRDaGlsZE5vZGVzQWZ0ZXIoZXhpc3RpbmdDaGlsZE5vZGUsIGFkZGVkQ2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGFkZENoaWxkTm9kZXNBZnRlcihleGlzdGluZ0NoaWxkTm9kZSwgYWRkZWRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZSA9IGV4aXN0aW5nQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mQ2hpbGROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIGFkZGVkQ2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGZyb21GaXJzdENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IGZpcnN0SW5kZXggPSAwO1xuXG4gIHRoaXMuZm9yd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBmaXJzdEluZGV4KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGZpcnN0Q2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tU2Vjb25kQ2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3Qgc2Vjb25kSW5kZXggPSAxO1xuXG4gIHRoaXMuZm9yd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBzZWNvbmRJbmRleCkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayhmaXJzdENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbVRoaXJkQ2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdGhpcmRJbmRleCA9IDI7XG5cbiAgdGhpcy5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IHRoaXJkSW5kZXgpIHtcbiAgICAgIGNvbnN0IHRoaXJkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2sodGhpcmRDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21GaXJzdExhc3RDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICBmaXJzdExhc3RJbmRleCA9IG11bHRpcGxpY2l0eSAtIDE7XG5cbiAgdGhpcy5iYWNrd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBmaXJzdExhc3RJbmRleCkge1xuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlyZENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbVNlY29uZExhc3RDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICBzZWNvbmRMYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAyO1xuXG4gIHRoaXMuYmFja3dhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gc2Vjb25kTGFzdEluZGV4KSB7XG4gICAgICBjb25zdCB0aGlyZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKHRoaXJkQ2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5jb25zdCBub2RlTWl4aW5zID0ge1xuICBhcHBlbmRDaGlsZE5vZGUsXG4gIHByZXBlbmRDaGlsZE5vZGUsXG4gIGFkZENoaWxkTm9kZUFmdGVyLFxuICBhZGRDaGlsZE5vZGVzQWZ0ZXIsXG4gIGZyb21GaXJzdENoaWxkTm9kZSxcbiAgZnJvbVNlY29uZENoaWxkTm9kZSxcbiAgZnJvbVRoaXJkQ2hpbGROb2RlLFxuICBmcm9tRmlyc3RMYXN0Q2hpbGROb2RlLFxuICBmcm9tU2Vjb25kTGFzdENoaWxkTm9kZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZU1peGlucztcbiJdLCJuYW1lcyI6WyJwcmVwZW5kQ2hpbGROb2RlIiwicHJlcGVuZGVkQ2hpbGROb2RlIiwib2Zmc2V0IiwiYWRkZWRDaGlsZE5vZGUiLCJhZGRDaGlsZE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJhcHBlbmRlZENoaWxkTm9kZSIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsImFkZENoaWxkTm9kZUFmdGVyIiwiZXhpc3RpbmdDaGlsZE5vZGUiLCJhZGRlZENoaWxkTm9kZXMiLCJhZGRDaGlsZE5vZGVzQWZ0ZXIiLCJjaGlsZE5vZGUiLCJpbmRleCIsImluZGV4T2ZDaGlsZE5vZGUiLCJzdGFydEluZGV4IiwiZGVsZXRlQ291bnQiLCJzcGxpY2VDaGlsZE5vZGVzIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiY2FsbGJhY2siLCJyZXN1bHQiLCJmaXJzdEluZGV4IiwiZm9yd2FyZHNTb21lQ2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kSW5kZXgiLCJmcm9tVGhpcmRDaGlsZE5vZGUiLCJ0aGlyZEluZGV4IiwidGhpcmRDaGlsZE5vZGUiLCJmcm9tRmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0SW5kZXgiLCJiYWNrd2FyZHNTb21lQ2hpbGROb2RlIiwiZnJvbVNlY29uZExhc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0SW5kZXgiLCJub2RlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwSUE7OztlQUFBOzs7QUF4SUEsU0FBU0EsaUJBQWlCQyxrQkFBa0I7SUFDMUMsSUFBTUMsU0FBUyxHQUNUQyxpQkFBaUJGLG9CQUFvQixHQUFHO0lBRTlDLElBQUksQ0FBQ0csWUFBWSxDQUFDRCxnQkFBZ0JEO0FBQ3BDO0FBRUEsU0FBU0csZ0JBQWdCQyxpQkFBaUI7SUFDeEMsSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNOLFNBQVNLLGNBQ1RKLGlCQUFpQkcsbUJBQW1CLEdBQUc7SUFFN0MsSUFBSSxDQUFDRixZQUFZLENBQUNELGdCQUFnQkQ7QUFDcEM7QUFFQSxTQUFTTyxrQkFBa0JDLGlCQUFpQixFQUFFUCxjQUFjO0lBQzFELElBQU1RLGtCQUFrQjtRQUNoQlI7S0FDRDtJQUVQLElBQUksQ0FBQ1Msa0JBQWtCLENBQUNGLG1CQUFtQkM7QUFDN0M7QUFFQSxTQUFTQyxtQkFBbUJGLGlCQUFpQixFQUFFQyxlQUFlO0lBQzVELElBQU1FLFlBQVlILG1CQUNaSSxRQUFRLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNGLFlBQzlCRyxhQUFhRixRQUFRLEdBQ3JCRyxjQUFjO0lBRXBCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNGLFlBQVlDLGFBQWFOO0FBQ2pEO0FBRUEsU0FBU1EsbUJBQW1CQyxRQUFRO0lBQ2xDLElBQUlDO0lBRUosSUFBTUMsYUFBYTtJQUVuQixJQUFJLENBQUNDLHFCQUFxQixDQUFDLFNBQUNWLFdBQVdDO1FBQ3JDLElBQUlBLFVBQVVRLFlBQVk7WUFDeEIsSUFBTUUsaUJBQWlCWCxXQUFXLEdBQUc7WUFFckNRLFNBQVNELFNBQVNJO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0g7QUFDVDtBQUVBLFNBQVNJLG9CQUFvQkwsUUFBUTtJQUNuQyxJQUFJQztJQUVKLElBQU1LLGNBQWM7SUFFcEIsSUFBSSxDQUFDSCxxQkFBcUIsQ0FBQyxTQUFDVixXQUFXQztRQUNyQyxJQUFJQSxVQUFVWSxhQUFhO1lBQ3pCLElBQU1GLGlCQUFpQlgsV0FBVyxHQUFHO1lBRXJDUSxTQUFTRCxTQUFTSTtZQUVsQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9IO0FBQ1Q7QUFFQSxTQUFTTSxtQkFBbUJQLFFBQVE7SUFDbEMsSUFBSUM7SUFFSixJQUFNTyxhQUFhO0lBRW5CLElBQUksQ0FBQ0wscUJBQXFCLENBQUMsU0FBQ1YsV0FBV0M7UUFDckMsSUFBSUEsVUFBVWMsWUFBWTtZQUN4QixJQUFNQyxpQkFBaUJoQixXQUFXLEdBQUc7WUFFckNRLFNBQVNELFNBQVNTO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT1I7QUFDVDtBQUVBLFNBQVNTLHVCQUF1QlYsUUFBUTtJQUN0QyxJQUFJQztJQUVKLElBQU1kLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DdUIsaUJBQWlCeEIsZUFBZTtJQUV0QyxJQUFJLENBQUN5QixzQkFBc0IsQ0FBQyxTQUFDbkIsV0FBV0M7UUFDdEMsSUFBSUEsVUFBVWlCLGdCQUFnQjtZQUM1QixJQUFNRixpQkFBaUJoQixXQUFXLEdBQUc7WUFFckNRLFNBQVNELFNBQVNTO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT1I7QUFDVDtBQUVBLFNBQVNZLHdCQUF3QmIsUUFBUTtJQUN2QyxJQUFJQztJQUVKLElBQU1kLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DMEIsa0JBQWtCM0IsZUFBZTtJQUV2QyxJQUFJLENBQUN5QixzQkFBc0IsQ0FBQyxTQUFDbkIsV0FBV0M7UUFDdEMsSUFBSUEsVUFBVW9CLGlCQUFpQjtZQUM3QixJQUFNTCxpQkFBaUJoQixXQUFXLEdBQUc7WUFFckNRLFNBQVNELFNBQVNTO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT1I7QUFDVDtBQUVBLElBQU1jLGFBQWE7SUFDakI5QixpQkFBQUE7SUFDQUwsa0JBQUFBO0lBQ0FTLG1CQUFBQTtJQUNBRyxvQkFBQUE7SUFDQU8sb0JBQUFBO0lBQ0FNLHFCQUFBQTtJQUNBRSxvQkFBQUE7SUFDQUcsd0JBQUFBO0lBQ0FHLHlCQUFBQTtBQUNGO0lBRUEsV0FBZUUifQ==