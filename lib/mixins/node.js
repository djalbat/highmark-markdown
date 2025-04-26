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
function filterChildNode(callback) {
    var _this = this;
    this.forEachChildNode(function(childNode) {
        var result = callback(childNode);
        if (!result) {
            _this.removeChildNode(childNode);
        }
    });
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
    filterChildNode: filterChildNode,
    fromFirstChildNode: fromFirstChildNode,
    fromSecondChildNode: fromSecondChildNode,
    fromThirdChildNode: fromThirdChildNode,
    fromFirstLastChildNode: fromFirstLastChildNode,
    fromSecondLastChildNode: fromSecondLastChildNode,
    fromThirdLastChildNode: fromThirdLastChildNode
};
var _default = nodeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZmlsdGVyQ2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIHRoaXMuZm9yRWFjaENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soY2hpbGROb2RlKTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgdGhpcy5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmcm9tRmlyc3RDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBmaXJzdEluZGV4ID0gMDtcblxuICB0aGlzLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gZmlyc3RJbmRleCkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayhmaXJzdENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbVNlY29uZENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHNlY29uZEluZGV4ID0gMTtcblxuICB0aGlzLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gc2Vjb25kSW5kZXgpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21UaGlyZENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHRoaXJkSW5kZXggPSAyO1xuXG4gIHRoaXMuZm9yd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSB0aGlyZEluZGV4KSB7XG4gICAgICBjb25zdCB0aGlyZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKHRoaXJkQ2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tRmlyc3RMYXN0Q2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgZmlyc3RMYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAxO1xuXG4gIHRoaXMuYmFja3dhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gZmlyc3RMYXN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IHRoaXJkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2sodGhpcmRDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21TZWNvbmRMYXN0Q2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgc2Vjb25kTGFzdEluZGV4ID0gbXVsdGlwbGljaXR5IC0gMjtcblxuICB0aGlzLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IHNlY29uZExhc3RJbmRleCkge1xuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlyZENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbVRoaXJkTGFzdENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgIHRoaXJkTGFzdEluZGV4ID0gbXVsdGlwbGljaXR5IC0gMjtcblxuICB0aGlzLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IHRoaXJkTGFzdEluZGV4KSB7XG4gICAgICBjb25zdCB0aGlyZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKHRoaXJkQ2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5jb25zdCBub2RlTWl4aW5zID0ge1xuICBmaWx0ZXJDaGlsZE5vZGUsXG4gIGZyb21GaXJzdENoaWxkTm9kZSxcbiAgZnJvbVNlY29uZENoaWxkTm9kZSxcbiAgZnJvbVRoaXJkQ2hpbGROb2RlLFxuICBmcm9tRmlyc3RMYXN0Q2hpbGROb2RlLFxuICBmcm9tU2Vjb25kTGFzdENoaWxkTm9kZSxcbiAgZnJvbVRoaXJkTGFzdENoaWxkTm9kZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZU1peGlucztcbiJdLCJuYW1lcyI6WyJmaWx0ZXJDaGlsZE5vZGUiLCJjYWxsYmFjayIsImZvckVhY2hDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJyZXN1bHQiLCJyZW1vdmVDaGlsZE5vZGUiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdEluZGV4IiwiZm9yd2FyZHNTb21lQ2hpbGROb2RlIiwiaW5kZXgiLCJmaXJzdENoaWxkTm9kZSIsImZyb21TZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmRJbmRleCIsImZyb21UaGlyZENoaWxkTm9kZSIsInRoaXJkSW5kZXgiLCJ0aGlyZENoaWxkTm9kZSIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJtdWx0aXBsaWNpdHkiLCJnZXRNdWx0aXBsaWNpdHkiLCJmaXJzdExhc3RJbmRleCIsImJhY2t3YXJkc1NvbWVDaGlsZE5vZGUiLCJmcm9tU2Vjb25kTGFzdENoaWxkTm9kZSIsInNlY29uZExhc3RJbmRleCIsImZyb21UaGlyZExhc3RDaGlsZE5vZGUiLCJ0aGlyZExhc3RJbmRleCIsIm5vZGVNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFJQTs7O2VBQUE7OztBQW5JQSxTQUFTQSxnQkFBZ0JDLFFBQVE7O0lBQy9CLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBQ0M7UUFDckIsSUFBTUMsU0FBU0gsU0FBU0U7UUFFeEIsSUFBSSxDQUFDQyxRQUFRO1lBQ1YsTUFBS0MsZUFBZSxDQUFDRjtRQUN4QjtJQUNGO0FBQ0Y7QUFFQSxTQUFTRyxtQkFBbUJMLFFBQVE7SUFDbEMsSUFBSUc7SUFFSixJQUFNRyxhQUFhO0lBRW5CLElBQUksQ0FBQ0MscUJBQXFCLENBQUMsU0FBQ0wsV0FBV007UUFDckMsSUFBSUEsVUFBVUYsWUFBWTtZQUN4QixJQUFNRyxpQkFBaUJQLFdBQVcsR0FBRztZQUVyQ0MsU0FBU0gsU0FBU1M7WUFFbEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPTjtBQUNUO0FBRUEsU0FBU08sb0JBQW9CVixRQUFRO0lBQ25DLElBQUlHO0lBRUosSUFBTVEsY0FBYztJQUVwQixJQUFJLENBQUNKLHFCQUFxQixDQUFDLFNBQUNMLFdBQVdNO1FBQ3JDLElBQUlBLFVBQVVHLGFBQWE7WUFDekIsSUFBTUYsaUJBQWlCUCxXQUFXLEdBQUc7WUFFckNDLFNBQVNILFNBQVNTO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT047QUFDVDtBQUVBLFNBQVNTLG1CQUFtQlosUUFBUTtJQUNsQyxJQUFJRztJQUVKLElBQU1VLGFBQWE7SUFFbkIsSUFBSSxDQUFDTixxQkFBcUIsQ0FBQyxTQUFDTCxXQUFXTTtRQUNyQyxJQUFJQSxVQUFVSyxZQUFZO1lBQ3hCLElBQU1DLGlCQUFpQlosV0FBVyxHQUFHO1lBRXJDQyxTQUFTSCxTQUFTYztZQUVsQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9YO0FBQ1Q7QUFFQSxTQUFTWSx1QkFBdUJmLFFBQVE7SUFDdEMsSUFBSUc7SUFFSixJQUFNYSxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0MsaUJBQWlCRixlQUFlO0lBRXRDLElBQUksQ0FBQ0csc0JBQXNCLENBQUMsU0FBQ2pCLFdBQVdNO1FBQ3RDLElBQUlBLFVBQVVVLGdCQUFnQjtZQUM1QixJQUFNSixpQkFBaUJaLFdBQVcsR0FBRztZQUVyQ0MsU0FBU0gsU0FBU2M7WUFFbEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPWDtBQUNUO0FBRUEsU0FBU2lCLHdCQUF3QnBCLFFBQVE7SUFDdkMsSUFBSUc7SUFFSixJQUFNYSxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0ksa0JBQWtCTCxlQUFlO0lBRXZDLElBQUksQ0FBQ0csc0JBQXNCLENBQUMsU0FBQ2pCLFdBQVdNO1FBQ3RDLElBQUlBLFVBQVVhLGlCQUFpQjtZQUM3QixJQUFNUCxpQkFBaUJaLFdBQVcsR0FBRztZQUVyQ0MsU0FBU0gsU0FBU2M7WUFFbEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPWDtBQUNUO0FBRUEsU0FBU21CLHVCQUF1QnRCLFFBQVE7SUFDdEMsSUFBSUc7SUFFSixJQUFNYSxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ00saUJBQWlCUCxlQUFlO0lBRXRDLElBQUksQ0FBQ0csc0JBQXNCLENBQUMsU0FBQ2pCLFdBQVdNO1FBQ3RDLElBQUlBLFVBQVVlLGdCQUFnQjtZQUM1QixJQUFNVCxpQkFBaUJaLFdBQVcsR0FBRztZQUVyQ0MsU0FBU0gsU0FBU2M7WUFFbEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPWDtBQUNUO0FBRUEsSUFBTXFCLGFBQWE7SUFDakJ6QixpQkFBQUE7SUFDQU0sb0JBQUFBO0lBQ0FLLHFCQUFBQTtJQUNBRSxvQkFBQUE7SUFDQUcsd0JBQUFBO0lBQ0FLLHlCQUFBQTtJQUNBRSx3QkFBQUE7QUFDRjtJQUVBLFdBQWVFIn0=