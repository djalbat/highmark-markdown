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
function appendChildNode(appendedChildNode) {
    var multiplicity = this.getMultiplicity(), startIndex = multiplicity, addedChildNode = appendedChildNode; ///
    this.addChildNode(addedChildNode, startIndex);
}
function prependChildNode(prependedChildNode) {
    var startIndex = 0, addedChildNode = prependedChildNode; ///
    this.addChildNode(addedChildNode, startIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gYXBwZW5kQ2hpbGROb2RlKGFwcGVuZGVkQ2hpbGROb2RlKSB7XG4gIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgIHN0YXJ0SW5kZXggPSBtdWx0aXBsaWNpdHksICAvLy9cbiAgICAgICAgYWRkZWRDaGlsZE5vZGUgPSBhcHBlbmRlZENoaWxkTm9kZTsgLy8vXG5cbiAgdGhpcy5hZGRDaGlsZE5vZGUoYWRkZWRDaGlsZE5vZGUsIHN0YXJ0SW5kZXgpO1xufVxuXG5mdW5jdGlvbiBwcmVwZW5kQ2hpbGROb2RlKHByZXBlbmRlZENoaWxkTm9kZSkge1xuICBjb25zdCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgYWRkZWRDaGlsZE5vZGUgPSBwcmVwZW5kZWRDaGlsZE5vZGU7IC8vL1xuXG4gIHRoaXMuYWRkQ2hpbGROb2RlKGFkZGVkQ2hpbGROb2RlLCBzdGFydEluZGV4KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hpbGROb2RlQWZ0ZXIoZXhpc3RpbmdDaGlsZE5vZGUsIGFkZGVkQ2hpbGROb2RlKSB7XG4gIGNvbnN0IGFkZGVkQ2hpbGROb2RlcyA9IFtcbiAgICAgICAgICBhZGRlZENoaWxkTm9kZVxuICAgICAgICBdO1xuXG4gIHRoaXMuYWRkQ2hpbGROb2Rlc0FmdGVyKGV4aXN0aW5nQ2hpbGROb2RlLCBhZGRlZENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZE5vZGVzQWZ0ZXIoZXhpc3RpbmdDaGlsZE5vZGUsIGFkZGVkQ2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGUgPSBleGlzdGluZ0NoaWxkTm9kZSwgIC8vL1xuICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXhPZkNoaWxkTm9kZShjaGlsZE5vZGUpLFxuICAgICAgICBzdGFydEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBmcm9tRmlyc3RDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBmaXJzdEluZGV4ID0gMDtcblxuICB0aGlzLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gZmlyc3RJbmRleCkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayhmaXJzdENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbVNlY29uZENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHNlY29uZEluZGV4ID0gMTtcblxuICB0aGlzLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gc2Vjb25kSW5kZXgpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21UaGlyZENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHRoaXJkSW5kZXggPSAyO1xuXG4gIHRoaXMuZm9yd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSB0aGlyZEluZGV4KSB7XG4gICAgICBjb25zdCB0aGlyZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKHRoaXJkQ2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tRmlyc3RMYXN0Q2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgZmlyc3RMYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAxO1xuXG4gIHRoaXMuYmFja3dhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gZmlyc3RMYXN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IHRoaXJkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2sodGhpcmRDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21TZWNvbmRMYXN0Q2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgc2Vjb25kTGFzdEluZGV4ID0gbXVsdGlwbGljaXR5IC0gMjtcblxuICB0aGlzLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IHNlY29uZExhc3RJbmRleCkge1xuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlyZENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuY29uc3Qgbm9kZU1peGlucyA9IHtcbiAgYXBwZW5kQ2hpbGROb2RlLFxuICBwcmVwZW5kQ2hpbGROb2RlLFxuICBhZGRDaGlsZE5vZGVBZnRlcixcbiAgYWRkQ2hpbGROb2Rlc0FmdGVyLFxuICBmcm9tRmlyc3RDaGlsZE5vZGUsXG4gIGZyb21TZWNvbmRDaGlsZE5vZGUsXG4gIGZyb21UaGlyZENoaWxkTm9kZSxcbiAgZnJvbUZpcnN0TGFzdENoaWxkTm9kZSxcbiAgZnJvbVNlY29uZExhc3RDaGlsZE5vZGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGVNaXhpbnM7XG4iXSwibmFtZXMiOlsiYXBwZW5kQ2hpbGROb2RlIiwiYXBwZW5kZWRDaGlsZE5vZGUiLCJtdWx0aXBsaWNpdHkiLCJnZXRNdWx0aXBsaWNpdHkiLCJzdGFydEluZGV4IiwiYWRkZWRDaGlsZE5vZGUiLCJhZGRDaGlsZE5vZGUiLCJwcmVwZW5kQ2hpbGROb2RlIiwicHJlcGVuZGVkQ2hpbGROb2RlIiwiYWRkQ2hpbGROb2RlQWZ0ZXIiLCJleGlzdGluZ0NoaWxkTm9kZSIsImFkZGVkQ2hpbGROb2RlcyIsImFkZENoaWxkTm9kZXNBZnRlciIsImNoaWxkTm9kZSIsImluZGV4IiwiaW5kZXhPZkNoaWxkTm9kZSIsImRlbGV0ZUNvdW50Iiwic3BsaWNlQ2hpbGROb2RlcyIsImZyb21GaXJzdENoaWxkTm9kZSIsImNhbGxiYWNrIiwicmVzdWx0IiwiZmlyc3RJbmRleCIsImZvcndhcmRzU29tZUNoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZEluZGV4IiwiZnJvbVRoaXJkQ2hpbGROb2RlIiwidGhpcmRJbmRleCIsInRoaXJkQ2hpbGROb2RlIiwiZnJvbUZpcnN0TGFzdENoaWxkTm9kZSIsImZpcnN0TGFzdEluZGV4IiwiYmFja3dhcmRzU29tZUNoaWxkTm9kZSIsImZyb21TZWNvbmRMYXN0Q2hpbGROb2RlIiwic2Vjb25kTGFzdEluZGV4Iiwibm9kZU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMElBOzs7ZUFBQTs7O0FBeElBLFNBQVNBLGdCQUFnQkMsaUJBQWlCO0lBQ3hDLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxhQUFhRixjQUNiRyxpQkFBaUJKLG1CQUFtQixHQUFHO0lBRTdDLElBQUksQ0FBQ0ssWUFBWSxDQUFDRCxnQkFBZ0JEO0FBQ3BDO0FBRUEsU0FBU0csaUJBQWlCQyxrQkFBa0I7SUFDMUMsSUFBTUosYUFBYSxHQUNiQyxpQkFBaUJHLG9CQUFvQixHQUFHO0lBRTlDLElBQUksQ0FBQ0YsWUFBWSxDQUFDRCxnQkFBZ0JEO0FBQ3BDO0FBRUEsU0FBU0ssa0JBQWtCQyxpQkFBaUIsRUFBRUwsY0FBYztJQUMxRCxJQUFNTSxrQkFBa0I7UUFDaEJOO0tBQ0Q7SUFFUCxJQUFJLENBQUNPLGtCQUFrQixDQUFDRixtQkFBbUJDO0FBQzdDO0FBRUEsU0FBU0MsbUJBQW1CRixpQkFBaUIsRUFBRUMsZUFBZTtJQUM1RCxJQUFNRSxZQUFZSCxtQkFDWkksUUFBUSxJQUFJLENBQUNDLGdCQUFnQixDQUFDRixZQUM5QlQsYUFBYVUsUUFBUSxHQUNyQkUsY0FBYztJQUVwQixJQUFJLENBQUNDLGdCQUFnQixDQUFDYixZQUFZWSxhQUFhTDtBQUNqRDtBQUVBLFNBQVNPLG1CQUFtQkMsUUFBUTtJQUNsQyxJQUFJQztJQUVKLElBQU1DLGFBQWE7SUFFbkIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQyxTQUFDVCxXQUFXQztRQUNyQyxJQUFJQSxVQUFVTyxZQUFZO1lBQ3hCLElBQU1FLGlCQUFpQlYsV0FBVyxHQUFHO1lBRXJDTyxTQUFTRCxTQUFTSTtZQUVsQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9IO0FBQ1Q7QUFFQSxTQUFTSSxvQkFBb0JMLFFBQVE7SUFDbkMsSUFBSUM7SUFFSixJQUFNSyxjQUFjO0lBRXBCLElBQUksQ0FBQ0gscUJBQXFCLENBQUMsU0FBQ1QsV0FBV0M7UUFDckMsSUFBSUEsVUFBVVcsYUFBYTtZQUN6QixJQUFNRixpQkFBaUJWLFdBQVcsR0FBRztZQUVyQ08sU0FBU0QsU0FBU0k7WUFFbEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUO0FBRUEsU0FBU00sbUJBQW1CUCxRQUFRO0lBQ2xDLElBQUlDO0lBRUosSUFBTU8sYUFBYTtJQUVuQixJQUFJLENBQUNMLHFCQUFxQixDQUFDLFNBQUNULFdBQVdDO1FBQ3JDLElBQUlBLFVBQVVhLFlBQVk7WUFDeEIsSUFBTUMsaUJBQWlCZixXQUFXLEdBQUc7WUFFckNPLFNBQVNELFNBQVNTO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT1I7QUFDVDtBQUVBLFNBQVNTLHVCQUF1QlYsUUFBUTtJQUN0QyxJQUFJQztJQUVKLElBQU1sQixlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQzJCLGlCQUFpQjVCLGVBQWU7SUFFdEMsSUFBSSxDQUFDNkIsc0JBQXNCLENBQUMsU0FBQ2xCLFdBQVdDO1FBQ3RDLElBQUlBLFVBQVVnQixnQkFBZ0I7WUFDNUIsSUFBTUYsaUJBQWlCZixXQUFXLEdBQUc7WUFFckNPLFNBQVNELFNBQVNTO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT1I7QUFDVDtBQUVBLFNBQVNZLHdCQUF3QmIsUUFBUTtJQUN2QyxJQUFJQztJQUVKLElBQU1sQixlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQzhCLGtCQUFrQi9CLGVBQWU7SUFFdkMsSUFBSSxDQUFDNkIsc0JBQXNCLENBQUMsU0FBQ2xCLFdBQVdDO1FBQ3RDLElBQUlBLFVBQVVtQixpQkFBaUI7WUFDN0IsSUFBTUwsaUJBQWlCZixXQUFXLEdBQUc7WUFFckNPLFNBQVNELFNBQVNTO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT1I7QUFDVDtBQUVBLElBQU1jLGFBQWE7SUFDakJsQyxpQkFBQUE7SUFDQU8sa0JBQUFBO0lBQ0FFLG1CQUFBQTtJQUNBRyxvQkFBQUE7SUFDQU0sb0JBQUFBO0lBQ0FNLHFCQUFBQTtJQUNBRSxvQkFBQUE7SUFDQUcsd0JBQUFBO0lBQ0FHLHlCQUFBQTtBQUNGO0lBRUEsV0FBZUUifQ==