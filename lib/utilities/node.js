"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fromFirstChildNode: function() {
        return fromFirstChildNode;
    },
    fromFirstLastChildNode: function() {
        return fromFirstLastChildNode;
    },
    fromSecondChildNode: function() {
        return fromSecondChildNode;
    },
    fromSecondLastChildNode: function() {
        return fromSecondLastChildNode;
    },
    fromThirdChildNode: function() {
        return fromThirdChildNode;
    }
});
function fromFirstChildNode(nonTerminalNode, callback) {
    var result;
    var firstIndex = 0;
    nonTerminalNode.forwardsSomeChildNode(function(childNode, index) {
        if (index === firstIndex) {
            var firstChildNode = childNode; ///
            result = callback(firstChildNode);
            return true;
        }
    });
    return result;
}
function fromSecondChildNode(nonTerminalNode, callback) {
    var result;
    var secondIndex = 1;
    nonTerminalNode.forwardsSomeChildNode(function(childNode, index) {
        if (index === secondIndex) {
            var firstChildNode = childNode; ///
            result = callback(firstChildNode);
            return true;
        }
    });
    return result;
}
function fromThirdChildNode(nonTerminalNode, callback) {
    var result;
    var thirdIndex = 2;
    nonTerminalNode.forwardsSomeChildNode(function(childNode, index) {
        if (index === thirdIndex) {
            var thirdChildNode = childNode; ///
            result = callback(thirdChildNode);
            return true;
        }
    });
    return result;
}
function fromFirstLastChildNode(nonTerminalNode, callback) {
    var result;
    var multiplicity = nonTerminalNode.getMultiplicity(), firstLastIndex = multiplicity - 1;
    nonTerminalNode.backwardsSomeChildNode(function(childNode, index) {
        if (index === firstLastIndex) {
            var thirdChildNode = childNode; ///
            result = callback(thirdChildNode);
            return true;
        }
    });
    return result;
}
function fromSecondLastChildNode(nonTerminalNode, callback) {
    var result;
    var multiplicity = nonTerminalNode.getMultiplicity(), secondLastIndex = multiplicity - 2;
    nonTerminalNode.backwardsSomeChildNode(function(childNode, index) {
        if (index === secondLastIndex) {
            var thirdChildNode = childNode; ///
            result = callback(thirdChildNode);
            return true;
        }
    });
    return result;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21GaXJzdENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgZmlyc3RJbmRleCA9IDA7XG5cbiAgbm9uVGVybWluYWxOb2RlLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gZmlyc3RJbmRleCkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayhmaXJzdENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21TZWNvbmRDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHNlY29uZEluZGV4ID0gMTtcblxuICBub25UZXJtaW5hbE5vZGUuZm9yd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBzZWNvbmRJbmRleCkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayhmaXJzdENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21UaGlyZENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdGhpcmRJbmRleCA9IDI7XG5cbiAgbm9uVGVybWluYWxOb2RlLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gdGhpcmRJbmRleCkge1xuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlyZENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21GaXJzdExhc3RDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IG11bHRpcGxpY2l0eSA9IG5vblRlcm1pbmFsTm9kZS5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgZmlyc3RMYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAxO1xuXG4gIG5vblRlcm1pbmFsTm9kZS5iYWNrd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBmaXJzdExhc3RJbmRleCkge1xuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlyZENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21TZWNvbmRMYXN0Q2hpbGROb2RlKG5vblRlcm1pbmFsTm9kZSwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBtdWx0aXBsaWNpdHkgPSBub25UZXJtaW5hbE5vZGUuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgIHNlY29uZExhc3RJbmRleCA9IG11bHRpcGxpY2l0eSAtIDI7XG5cbiAgbm9uVGVybWluYWxOb2RlLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IHNlY29uZExhc3RJbmRleCkge1xuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlyZENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdLCJuYW1lcyI6WyJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmcm9tRmlyc3RMYXN0Q2hpbGROb2RlIiwiZnJvbVNlY29uZENoaWxkTm9kZSIsImZyb21TZWNvbmRMYXN0Q2hpbGROb2RlIiwiZnJvbVRoaXJkQ2hpbGROb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2FsbGJhY2siLCJyZXN1bHQiLCJmaXJzdEluZGV4IiwiZm9yd2FyZHNTb21lQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJmaXJzdENoaWxkTm9kZSIsInNlY29uZEluZGV4IiwidGhpcmRJbmRleCIsInRoaXJkQ2hpbGROb2RlIiwibXVsdGlwbGljaXR5IiwiZ2V0TXVsdGlwbGljaXR5IiwiZmlyc3RMYXN0SW5kZXgiLCJiYWNrd2FyZHNTb21lQ2hpbGROb2RlIiwic2Vjb25kTGFzdEluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFZ0JBLGtCQUFrQjtlQUFsQkE7O0lBc0RBQyxzQkFBc0I7ZUFBdEJBOztJQXBDQUMsbUJBQW1CO2VBQW5CQTs7SUF1REFDLHVCQUF1QjtlQUF2QkE7O0lBckNBQyxrQkFBa0I7ZUFBbEJBOzs7QUFwQ1QsU0FBU0osbUJBQW1CSyxlQUFlLEVBQUVDLFFBQVE7SUFDMUQsSUFBSUM7SUFFSixJQUFNQyxhQUFhO0lBRW5CSCxnQkFBZ0JJLHFCQUFxQixDQUFDLFNBQUNDLFdBQVdDO1FBQ2hELElBQUlBLFVBQVVILFlBQVk7WUFDeEIsSUFBTUksaUJBQWlCRixXQUFXLEdBQUc7WUFFckNILFNBQVNELFNBQVNNO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0w7QUFDVDtBQUVPLFNBQVNMLG9CQUFvQkcsZUFBZSxFQUFFQyxRQUFRO0lBQzNELElBQUlDO0lBRUosSUFBTU0sY0FBYztJQUVwQlIsZ0JBQWdCSSxxQkFBcUIsQ0FBQyxTQUFDQyxXQUFXQztRQUNoRCxJQUFJQSxVQUFVRSxhQUFhO1lBQ3pCLElBQU1ELGlCQUFpQkYsV0FBVyxHQUFHO1lBRXJDSCxTQUFTRCxTQUFTTTtZQUVsQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTSCxtQkFBbUJDLGVBQWUsRUFBRUMsUUFBUTtJQUMxRCxJQUFJQztJQUVKLElBQU1PLGFBQWE7SUFFbkJULGdCQUFnQkkscUJBQXFCLENBQUMsU0FBQ0MsV0FBV0M7UUFDaEQsSUFBSUEsVUFBVUcsWUFBWTtZQUN4QixJQUFNQyxpQkFBaUJMLFdBQVcsR0FBRztZQUVyQ0gsU0FBU0QsU0FBU1M7WUFFbEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPUjtBQUNUO0FBRU8sU0FBU04sdUJBQXVCSSxlQUFlLEVBQUVDLFFBQVE7SUFDOUQsSUFBSUM7SUFFSixJQUFNUyxlQUFlWCxnQkFBZ0JZLGVBQWUsSUFDOUNDLGlCQUFpQkYsZUFBZTtJQUV0Q1gsZ0JBQWdCYyxzQkFBc0IsQ0FBQyxTQUFDVCxXQUFXQztRQUNqRCxJQUFJQSxVQUFVTyxnQkFBZ0I7WUFDNUIsSUFBTUgsaUJBQWlCTCxXQUFXLEdBQUc7WUFFckNILFNBQVNELFNBQVNTO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT1I7QUFDVDtBQUVPLFNBQVNKLHdCQUF3QkUsZUFBZSxFQUFFQyxRQUFRO0lBQy9ELElBQUlDO0lBRUosSUFBTVMsZUFBZVgsZ0JBQWdCWSxlQUFlLElBQzlDRyxrQkFBa0JKLGVBQWU7SUFFdkNYLGdCQUFnQmMsc0JBQXNCLENBQUMsU0FBQ1QsV0FBV0M7UUFDakQsSUFBSUEsVUFBVVMsaUJBQWlCO1lBQzdCLElBQU1MLGlCQUFpQkwsV0FBVyxHQUFHO1lBRXJDSCxTQUFTRCxTQUFTUztZQUVsQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9SO0FBQ1QifQ==