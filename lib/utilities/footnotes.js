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
    renumberLinkMarkdownNodes: function() {
        return renumberLinkMarkdownNodes;
    }
});
var _query = require("../utilities/query");
function renumberLinkMarkdownNodes(divisionMarkdownNode, footnoteMap, callback, context) {
    var node = divisionMarkdownNode, linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node);
    linkMarkdownNodes.forEach(function(linkMarkdownNode) {
        var identifier = linkMarkdownNode.identifier(context), footnoteReplacement = footnoteMap[identifier] || null;
        if (footnoteReplacement !== null) {
            var number = footnoteReplacement.getNumber();
            linkMarkdownNode.setNumber(number);
            callback(linkMarkdownNode);
        }
    });
}
var _default = {
    renumberLinkMarkdownNodes: renumberLinkMarkdownNodes
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZm9vdG5vdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVNYXAsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICBsaW5rTWFya2Rvd25Ob2RlcyA9IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgbGlua01hcmtkb3duTm9kZXMuZm9yRWFjaCgobGlua01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsaW5rTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudCA9IGZvb3Rub3RlTWFwW2lkZW50aWZpZXJdIHx8IG51bGw7XG5cbiAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbnVtYmVyID0gZm9vdG5vdGVSZXBsYWNlbWVudC5nZXROdW1iZXIoKTtcblxuICAgICAgbGlua01hcmtkb3duTm9kZS5zZXROdW1iZXIobnVtYmVyKTtcblxuICAgICAgY2FsbGJhY2sobGlua01hcmtkb3duTm9kZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzXG59O1xuIl0sIm5hbWVzIjpbInJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImZvb3Rub3RlTWFwIiwiY2FsbGJhY2siLCJjb250ZXh0Iiwibm9kZSIsImxpbmtNYXJrZG93bk5vZGVzIiwibGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImZvckVhY2giLCJsaW5rTWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllciIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJudW1iZXIiLCJnZXROdW1iZXIiLCJzZXROdW1iZXIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXNCQSxPQUVFO2VBRkY7O0lBbEJnQkEseUJBQXlCO2VBQXpCQTs7O3FCQUYwQjtBQUVuQyxTQUFTQSwwQkFBMEJDLG9CQUFvQixFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztJQUM1RixJQUFNQyxPQUFPSixzQkFDUEssb0JBQW9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0Y7SUFFcERDLGtCQUFrQkUsT0FBTyxDQUFDLFNBQUNDO1FBQ3pCLElBQU1DLGFBQWFELGlCQUFpQkMsVUFBVSxDQUFDTixVQUN6Q08sc0JBQXNCVCxXQUFXLENBQUNRLFdBQVcsSUFBSTtRQUV2RCxJQUFJQyx3QkFBd0IsTUFBTTtZQUNoQyxJQUFNQyxTQUFTRCxvQkFBb0JFLFNBQVM7WUFFNUNKLGlCQUFpQkssU0FBUyxDQUFDRjtZQUUzQlQsU0FBU007UUFDWDtJQUNGO0FBQ0Y7SUFFQSxXQUFlO0lBQ2JULDJCQUFBQTtBQUNGIn0=