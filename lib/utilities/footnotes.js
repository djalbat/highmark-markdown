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
function renumberLinkMarkdownNodes(divisionMarkdownNode, callback, context) {
    var footnoteNumberMap = context.footnoteNumberMap, node = divisionMarkdownNode, linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node);
    linkMarkdownNodes.forEach(function(linkMarkdownNode) {
        var identifier = linkMarkdownNode.identifier(context), footnoteNumber = footnoteNumberMap[identifier] || null, number = footnoteNumber; ///
        linkMarkdownNode.setNumber(number);
        callback(linkMarkdownNode);
    });
}
var _default = {
    renumberLinkMarkdownNodes: renumberLinkMarkdownNodes
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZm9vdG5vdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgY29uc3QgeyBmb290bm90ZU51bWJlck1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgIGxpbmtNYXJrZG93bk5vZGVzID0gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICBsaW5rTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChsaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IGxpbmtNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBmb290bm90ZU51bWJlciA9IGZvb3Rub3RlTnVtYmVyTWFwW2lkZW50aWZpZXJdIHx8IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gZm9vdG5vdGVOdW1iZXI7ICAvLy9cblxuICAgIGxpbmtNYXJrZG93bk5vZGUuc2V0TnVtYmVyKG51bWJlcik7XG5cbiAgICBjYWxsYmFjayhsaW5rTWFya2Rvd25Ob2RlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2Rlc1xufTtcbiJdLCJuYW1lcyI6WyJyZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjYWxsYmFjayIsImNvbnRleHQiLCJmb290bm90ZU51bWJlck1hcCIsIm5vZGUiLCJsaW5rTWFya2Rvd25Ob2RlcyIsImxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb3JFYWNoIiwibGlua01hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJmb290bm90ZU51bWJlciIsIm51bWJlciIsInNldE51bWJlciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBb0JBLE9BRUU7ZUFGRjs7SUFoQmdCQSx5QkFBeUI7ZUFBekJBOzs7cUJBRjBCO0FBRW5DLFNBQVNBLDBCQUEwQkMsb0JBQW9CLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztJQUMvRSxJQUFNLEFBQUVDLG9CQUFzQkQsUUFBdEJDLG1CQUNGQyxPQUFPSixzQkFDUEssb0JBQW9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0Y7SUFFcERDLGtCQUFrQkUsT0FBTyxDQUFDLFNBQUNDO1FBQ3pCLElBQU1DLGFBQWFELGlCQUFpQkMsVUFBVSxDQUFDUCxVQUN6Q1EsaUJBQWlCUCxpQkFBaUIsQ0FBQ00sV0FBVyxJQUFJLE1BQ2xERSxTQUFTRCxnQkFBaUIsR0FBRztRQUVuQ0YsaUJBQWlCSSxTQUFTLENBQUNEO1FBRTNCVixTQUFTTztJQUNYO0FBQ0Y7SUFFQSxXQUFlO0lBQ2JULDJCQUFBQTtBQUNGIn0=