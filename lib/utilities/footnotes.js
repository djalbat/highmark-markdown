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
function renumberLinkMarkdownNodes(divisionMarkdownNode, footnoteReplacementMap, callback, context) {
    var node = divisionMarkdownNode, linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node);
    linkMarkdownNodes.forEach(function(linkMarkdownNode) {
        var identifier = linkMarkdownNode.identifier(context), footnoteReplacement = footnoteReplacementMap[identifier] || null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZm9vdG5vdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgIGxpbmtNYXJrZG93bk5vZGVzID0gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICBsaW5rTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChsaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IGxpbmtNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBmb290bm90ZVJlcGxhY2VtZW50ID0gZm9vdG5vdGVSZXBsYWNlbWVudE1hcFtpZGVudGlmaWVyXSB8fCBudWxsO1xuXG4gICAgaWYgKGZvb3Rub3RlUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuZ2V0TnVtYmVyKCk7XG5cbiAgICAgIGxpbmtNYXJrZG93bk5vZGUuc2V0TnVtYmVyKG51bWJlcik7XG5cbiAgICAgIGNhbGxiYWNrKGxpbmtNYXJrZG93bk5vZGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2Rlc1xufTtcbiJdLCJuYW1lcyI6WyJyZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJmb290bm90ZVJlcGxhY2VtZW50TWFwIiwiY2FsbGJhY2siLCJjb250ZXh0Iiwibm9kZSIsImxpbmtNYXJrZG93bk5vZGVzIiwibGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImZvckVhY2giLCJsaW5rTWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllciIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJudW1iZXIiLCJnZXROdW1iZXIiLCJzZXROdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXNCQSxPQUVFO2VBRkY7O0lBbEJnQkEseUJBQXlCO2VBQXpCQTs7O3FCQUYwQjtBQUVuQyxTQUFTQSwwQkFBMEJDLG9CQUFvQixFQUFFQyxzQkFBc0IsRUFBRUMsUUFBUSxFQUFFQyxPQUFPO0lBQ3ZHLElBQU1DLE9BQU9KLHNCQUNQSyxvQkFBb0JDLElBQUFBLGdDQUF5QixFQUFDRjtJQUVwREMsa0JBQWtCRSxPQUFPLENBQUMsU0FBQ0M7UUFDekIsSUFBTUMsYUFBYUQsaUJBQWlCQyxVQUFVLENBQUNOLFVBQ3pDTyxzQkFBc0JULHNCQUFzQixDQUFDUSxXQUFXLElBQUk7UUFFbEUsSUFBSUMsd0JBQXdCLE1BQU07WUFDaEMsSUFBTUMsU0FBU0Qsb0JBQW9CRSxTQUFTO1lBRTVDSixpQkFBaUJLLFNBQVMsQ0FBQ0Y7WUFFM0JULFNBQVNNO1FBQ1g7SUFDRjtBQUNGO0lBRUEsV0FBZTtJQUNiVCwyQkFBQUE7QUFDRiJ9