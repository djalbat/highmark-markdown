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
    default: function() {
        return _default;
    },
    renumberFootnoteLinkMarkdownNodes: function() {
        return renumberFootnoteLinkMarkdownNodes;
    }
});
var _query = require("../utilities/query");
function renumberFootnoteLinkMarkdownNodes(divisionMarkdownNode, footnoteReplacementMap, callback, context) {
    var node = divisionMarkdownNode, footnoteLinkMarkdownNodes = (0, _query.footnoteLinkMarkdownNodesFromNode)(node);
    footnoteLinkMarkdownNodes.forEach(function(footnoteLinkMarkdownNode) {
        var identifier = footnoteLinkMarkdownNode.identifier(context), footnoteReplacement = footnoteReplacementMap[identifier] || null;
        if (footnoteReplacement !== null) {
            var number = footnoteReplacement.getNumber();
            footnoteLinkMarkdownNode.setNumber(number);
            callback(footnoteLinkMarkdownNode);
        }
    });
}
var _default = {
    renumberFootnoteLinkMarkdownNodes: renumberFootnoteLinkMarkdownNodes
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZm9vdG5vdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW51bWJlckZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICBmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzID0gZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gIGZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMuZm9yRWFjaCgoZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnQgPSBmb290bm90ZVJlcGxhY2VtZW50TWFwW2lkZW50aWZpZXJdIHx8IG51bGw7XG5cbiAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbnVtYmVyID0gZm9vdG5vdGVSZXBsYWNlbWVudC5nZXROdW1iZXIoKTtcblxuICAgICAgZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlLnNldE51bWJlcihudW1iZXIpO1xuXG4gICAgICBjYWxsYmFjayhmb290bm90ZUxpbmtNYXJrZG93bk5vZGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVudW1iZXJGb290bm90ZUxpbmtNYXJrZG93bk5vZGVzXG59O1xuIl0sIm5hbWVzIjpbInJlbnVtYmVyRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlcyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVSZXBsYWNlbWVudE1hcCIsImNhbGxiYWNrIiwiY29udGV4dCIsIm5vZGUiLCJmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzIiwiZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9yRWFjaCIsImZvb3Rub3RlTGlua01hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJmb290bm90ZVJlcGxhY2VtZW50IiwibnVtYmVyIiwiZ2V0TnVtYmVyIiwic2V0TnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFzQkEsT0FFRTtlQUZGOztJQWxCZ0JBLGlDQUFpQztlQUFqQ0E7OztxQkFGa0M7QUFFM0MsU0FBU0Esa0NBQWtDQyxvQkFBb0IsRUFBRUMsc0JBQXNCLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztJQUMvRyxJQUFNQyxPQUFPSixzQkFDUEssNEJBQTRCQyxJQUFBQSx3Q0FBaUMsRUFBQ0Y7SUFFcEVDLDBCQUEwQkUsT0FBTyxDQUFDLFNBQUNDO1FBQ2pDLElBQU1DLGFBQWFELHlCQUF5QkMsVUFBVSxDQUFDTixVQUNqRE8sc0JBQXNCVCxzQkFBc0IsQ0FBQ1EsV0FBVyxJQUFJO1FBRWxFLElBQUlDLHdCQUF3QixNQUFNO1lBQ2hDLElBQU1DLFNBQVNELG9CQUFvQkUsU0FBUztZQUU1Q0oseUJBQXlCSyxTQUFTLENBQUNGO1lBRW5DVCxTQUFTTTtRQUNYO0lBQ0Y7QUFDRjtJQUVBLFdBQWU7SUFDYlQsbUNBQUFBO0FBQ0YifQ==