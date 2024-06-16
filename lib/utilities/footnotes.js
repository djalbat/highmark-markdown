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
function renumberLinkMarkdownNodes(divisionMarkdownNode, context) {
    var footnoteNumberMap = context.footnoteNumberMap, node = divisionMarkdownNode, linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node);
    linkMarkdownNodes.forEach(function(linkMarkdownNode) {
        var identifier = linkMarkdownNode.identifier(context), footnoteNumber = footnoteNumberMap[identifier] || null, number = footnoteNumber; ///
        linkMarkdownNode.setNumber(number);
    });
}
var _default = {
    renumberLinkMarkdownNodes: renumberLinkMarkdownNodes
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZm9vdG5vdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IGZvb3Rub3RlTnVtYmVyTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgbGlua01hcmtkb3duTm9kZXMgPSBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gIGxpbmtNYXJrZG93bk5vZGVzLmZvckVhY2goKGxpbmtNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gbGlua01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGZvb3Rub3RlTnVtYmVyID0gZm9vdG5vdGVOdW1iZXJNYXBbaWRlbnRpZmllcl0gfHwgbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBmb290bm90ZU51bWJlcjsgIC8vL1xuXG4gICAgbGlua01hcmtkb3duTm9kZS5zZXROdW1iZXIobnVtYmVyKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2Rlc1xufTtcbiJdLCJuYW1lcyI6WyJyZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiZm9vdG5vdGVOdW1iZXJNYXAiLCJub2RlIiwibGlua01hcmtkb3duTm9kZXMiLCJsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9yRWFjaCIsImxpbmtNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVOdW1iZXIiLCJudW1iZXIiLCJzZXROdW1iZXIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBa0JBLE9BRUU7ZUFGRjs7SUFkZ0JBLHlCQUF5QjtlQUF6QkE7OztxQkFGMEI7QUFFbkMsU0FBU0EsMEJBQTBCQyxvQkFBb0IsRUFBRUMsT0FBTztJQUNyRSxJQUFNLEFBQUVDLG9CQUFzQkQsUUFBdEJDLG1CQUNGQyxPQUFPSCxzQkFDUEksb0JBQW9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0Y7SUFFcERDLGtCQUFrQkUsT0FBTyxDQUFDLFNBQUNDO1FBQ3pCLElBQU1DLGFBQWFELGlCQUFpQkMsVUFBVSxDQUFDUCxVQUN6Q1EsaUJBQWlCUCxpQkFBaUIsQ0FBQ00sV0FBVyxJQUFJLE1BQ2xERSxTQUFTRCxnQkFBaUIsR0FBRztRQUVuQ0YsaUJBQWlCSSxTQUFTLENBQUNEO0lBQzdCO0FBQ0Y7SUFFQSxXQUFlO0lBQ2JYLDJCQUFBQTtBQUNGIn0=