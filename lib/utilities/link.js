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
        var identifier = linkMarkdownNode.getIdentifier(), identifiersIncludesIdentifier = identifiers.includes(identifier);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMoZG9jdW1lbnRNYXJrZG93bk5vZGUsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUpIHtcbiAgbGV0IG51bWJlciA9IDE7XG5cbiAgY29uc3QgaWRlbnRpZmllcnMgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmdldElkZW50aWZpZXJzKCksXG4gICAgICAgIGxpbmtNYXJrZG93bk5vZGVzID0gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShkb2N1bWVudE1hcmtkb3duTm9kZSk7XG5cbiAgbGlua01hcmtkb3duTm9kZXMuZm9yRWFjaCgobGlua01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsaW5rTWFya2Rvd25Ob2RlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBpZGVudGlmaWVyc0luY2x1ZGVzSWRlbnRpZmllciA9IGlkZW50aWZpZXJzLmluY2x1ZGVzKGlkZW50aWZpZXIpO1xuXG4gICAgaWYgKGlkZW50aWZpZXJzSW5jbHVkZXNJZGVudGlmaWVyKSB7XG4gICAgICBsaW5rTWFya2Rvd25Ob2RlLnNldE51bWJlcihudW1iZXIpO1xuXG4gICAgICBudW1iZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgbGlua01hcmtkb3duTm9kZS5jbGVhcigpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2Rlc1xufTtcbiJdLCJuYW1lcyI6WyJyZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIiwiZG9jdW1lbnRNYXJrZG93bk5vZGUiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwibnVtYmVyIiwiaWRlbnRpZmllcnMiLCJnZXRJZGVudGlmaWVycyIsImxpbmtNYXJrZG93bk5vZGVzIiwibGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImZvckVhY2giLCJsaW5rTWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJpZGVudGlmaWVyc0luY2x1ZGVzSWRlbnRpZmllciIsImluY2x1ZGVzIiwic2V0TnVtYmVyIiwiY2xlYXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXdCQSxPQUVFO2VBRkY7O0lBcEJnQkEseUJBQXlCO2VBQXpCQTs7O3FCQUYwQjtBQUVuQyxTQUFTQSwwQkFBMEJDLG9CQUFvQixFQUFFQyx5QkFBeUI7SUFDdkYsSUFBSUMsU0FBUztJQUViLElBQU1DLGNBQWNGLDBCQUEwQkcsY0FBYyxJQUN0REMsb0JBQW9CQyxJQUFBQSxnQ0FBeUIsRUFBQ047SUFFcERLLGtCQUFrQkUsT0FBTyxDQUFDLFNBQUNDO1FBQ3pCLElBQU1DLGFBQWFELGlCQUFpQkUsYUFBYSxJQUMzQ0MsZ0NBQWdDUixZQUFZUyxRQUFRLENBQUNIO1FBRTNELElBQUlFLCtCQUErQjtZQUNqQ0gsaUJBQWlCSyxTQUFTLENBQUNYO1lBRTNCQTtRQUNGLE9BQU87WUFDTE0saUJBQWlCTSxLQUFLO1FBQ3hCO0lBQ0Y7QUFDRjtJQUVBLFdBQWU7SUFDYmYsMkJBQUFBO0FBQ0YifQ==