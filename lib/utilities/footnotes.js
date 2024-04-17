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
var _constants = require("../constants");
var _query = require("../utilities/query");
function renumberLinkMarkdownNodes(divisionMarkdownNode, footnotesListMarkdownNode, context) {
    var number = 1;
    var identifiers = footnotesListMarkdownNode.identifiers(), linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(divisionMarkdownNode);
    linkMarkdownNodes.forEach(function(linkMarkdownNode) {
        var identifier = linkMarkdownNode.identifier(context), linkMarkdownNodeDOMElement = linkMarkdownNode.getDOMElement(), identifiersIncludesIdentifier = identifiers.includes(identifier);
        var innerHTML;
        if (identifiersIncludesIdentifier) {
            innerHTML = "".concat(number);
            number++;
        } else {
            innerHTML = _constants.EMPTY_STRING;
        }
        Object.assign(linkMarkdownNodeDOMElement, {
            innerHTML: innerHTML
        });
    });
}
var _default = {
    renumberLinkMarkdownNodes: renumberLinkMarkdownNodes
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZm9vdG5vdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICBsZXQgbnVtYmVyID0gMTtcblxuICBjb25zdCBpZGVudGlmaWVycyA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuaWRlbnRpZmllcnMoKSxcbiAgICAgICAgbGlua01hcmtkb3duTm9kZXMgPSBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICBsaW5rTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChsaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IGxpbmtNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBsaW5rTWFya2Rvd25Ob2RlRE9NRWxlbWVudCA9IGxpbmtNYXJrZG93bk5vZGUuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGlkZW50aWZpZXJzSW5jbHVkZXNJZGVudGlmaWVyID0gaWRlbnRpZmllcnMuaW5jbHVkZXMoaWRlbnRpZmllcik7XG5cbiAgICBsZXQgaW5uZXJIVE1MO1xuXG4gICAgaWYgKGlkZW50aWZpZXJzSW5jbHVkZXNJZGVudGlmaWVyKSB7XG4gICAgICBpbm5lckhUTUwgPSBgJHtudW1iZXJ9YDtcblxuICAgICAgbnVtYmVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlubmVySFRNTCA9IEVNUFRZX1NUUklORztcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKGxpbmtNYXJrZG93bk5vZGVET01FbGVtZW50LCB7XG4gICAgICBpbm5lckhUTUxcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2Rlc1xufTtcbiJdLCJuYW1lcyI6WyJyZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiY29udGV4dCIsIm51bWJlciIsImlkZW50aWZpZXJzIiwibGlua01hcmtkb3duTm9kZXMiLCJsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9yRWFjaCIsImxpbmtNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwibGlua01hcmtkb3duTm9kZURPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiaWRlbnRpZmllcnNJbmNsdWRlc0lkZW50aWZpZXIiLCJpbmNsdWRlcyIsImlubmVySFRNTCIsIkVNUFRZX1NUUklORyIsIk9iamVjdCIsImFzc2lnbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWdDQSxPQUVFO2VBRkY7O0lBM0JnQkEseUJBQXlCO2VBQXpCQTs7O3lCQUhhO3FCQUNhO0FBRW5DLFNBQVNBLDBCQUEwQkMsb0JBQW9CLEVBQUVDLHlCQUF5QixFQUFFQyxPQUFPO0lBQ2hHLElBQUlDLFNBQVM7SUFFYixJQUFNQyxjQUFjSCwwQkFBMEJHLFdBQVcsSUFDbkRDLG9CQUFvQkMsSUFBQUEsZ0NBQXlCLEVBQUNOO0lBRXBESyxrQkFBa0JFLE9BQU8sQ0FBQyxTQUFDQztRQUN6QixJQUFNQyxhQUFhRCxpQkFBaUJDLFVBQVUsQ0FBQ1AsVUFDekNRLDZCQUE2QkYsaUJBQWlCRyxhQUFhLElBQzNEQyxnQ0FBZ0NSLFlBQVlTLFFBQVEsQ0FBQ0o7UUFFM0QsSUFBSUs7UUFFSixJQUFJRiwrQkFBK0I7WUFDakNFLFlBQVksQUFBQyxHQUFTLE9BQVBYO1lBRWZBO1FBQ0YsT0FBTztZQUNMVyxZQUFZQyx1QkFBWTtRQUMxQjtRQUVBQyxPQUFPQyxNQUFNLENBQUNQLDRCQUE0QjtZQUN4Q0ksV0FBQUE7UUFDRjtJQUNGO0FBQ0Y7SUFFQSxXQUFlO0lBQ2JmLDJCQUFBQTtBQUNGIn0=