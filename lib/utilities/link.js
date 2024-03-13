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
function renumberLinkMarkdownNodes(documentMarkdownNode, footnotesListMarkdownNode) {
    var number = 1;
    var identifiers = footnotesListMarkdownNode.getIdentifiers(), linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(documentMarkdownNode);
    linkMarkdownNodes.forEach(function(linkMarkdownNode) {
        var identifier = linkMarkdownNode.getIdentifier(context), identifiersIncludesIdentifier = identifiers.includes(identifier);
        if (identifiersIncludesIdentifier) {
            linkMarkdownNode.setNumber(number);
            number++;
        } else {
            linkMarkdownNode.clear();
        }
    });
}
var _default = {
    renumberLinkMarkdownNodes: renumberLinkMarkdownNodes
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMoZG9jdW1lbnRNYXJrZG93bk5vZGUsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUpIHtcbiAgbGV0IG51bWJlciA9IDE7XG5cbiAgY29uc3QgaWRlbnRpZmllcnMgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmdldElkZW50aWZpZXJzKCksXG4gICAgICAgIGxpbmtNYXJrZG93bk5vZGVzID0gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShkb2N1bWVudE1hcmtkb3duTm9kZSk7XG5cbiAgbGlua01hcmtkb3duTm9kZXMuZm9yRWFjaCgobGlua01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsaW5rTWFya2Rvd25Ob2RlLmdldElkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgaWRlbnRpZmllcnNJbmNsdWRlc0lkZW50aWZpZXIgPSBpZGVudGlmaWVycy5pbmNsdWRlcyhpZGVudGlmaWVyKTtcblxuICAgIGlmIChpZGVudGlmaWVyc0luY2x1ZGVzSWRlbnRpZmllcikge1xuICAgICAgbGlua01hcmtkb3duTm9kZS5zZXROdW1iZXIobnVtYmVyKTtcblxuICAgICAgbnVtYmVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmtNYXJrZG93bk5vZGUuY2xlYXIoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXNcbn07XG4iXSwibmFtZXMiOlsicmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyIsImRvY3VtZW50TWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsIm51bWJlciIsImlkZW50aWZpZXJzIiwiZ2V0SWRlbnRpZmllcnMiLCJsaW5rTWFya2Rvd25Ob2RlcyIsImxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb3JFYWNoIiwibGlua01hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwiY29udGV4dCIsImlkZW50aWZpZXJzSW5jbHVkZXNJZGVudGlmaWVyIiwiaW5jbHVkZXMiLCJzZXROdW1iZXIiLCJjbGVhciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBd0JBLE9BRUU7ZUFGRjs7SUFwQmdCQSx5QkFBeUI7ZUFBekJBOzs7cUJBRjBCO0FBRW5DLFNBQVNBLDBCQUEwQkMsb0JBQW9CLEVBQUVDLHlCQUF5QjtJQUN2RixJQUFJQyxTQUFTO0lBRWIsSUFBTUMsY0FBY0YsMEJBQTBCRyxjQUFjLElBQ3REQyxvQkFBb0JDLElBQUFBLGdDQUF5QixFQUFDTjtJQUVwREssa0JBQWtCRSxPQUFPLENBQUMsU0FBQ0M7UUFDekIsSUFBTUMsYUFBYUQsaUJBQWlCRSxhQUFhLENBQUNDLFVBQzVDQyxnQ0FBZ0NULFlBQVlVLFFBQVEsQ0FBQ0o7UUFFM0QsSUFBSUcsK0JBQStCO1lBQ2pDSixpQkFBaUJNLFNBQVMsQ0FBQ1o7WUFFM0JBO1FBQ0YsT0FBTztZQUNMTSxpQkFBaUJPLEtBQUs7UUFDeEI7SUFDRjtBQUNGO0lBRUEsV0FBZTtJQUNiaEIsMkJBQUFBO0FBQ0YifQ==