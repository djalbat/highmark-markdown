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
    footnoteMarkdownNodesFromNode: function() {
        return footnoteMarkdownNodesFromNode;
    },
    linkMarkdownNodesFromNode: function() {
        return linkMarkdownNodesFromNode;
    },
    referenceMarkdownNodesFromNode: function() {
        return referenceMarkdownNodesFromNode;
    }
});
var _occamquery = require("occam-query");
var _necessary = require("necessary");
var push = _necessary.arrayUtilities.push;
var linkMarkdownNodesQuery = _occamquery.Query.fromExpression("//link"), footnoteMarkdownNodesQuery = _occamquery.Query.fromExpression("//footnote"), referenceMarkdownNodesQuery = _occamquery.Query.fromExpression("//reference");
function linkMarkdownNodesFromNode(node) {
    var linkMarkdownNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    nodesFromNodeAndQuery(node, linkMarkdownNodesQuery, linkMarkdownNodes);
    return linkMarkdownNodes;
}
function footnoteMarkdownNodesFromNode(node) {
    var footnoteMarkdownNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    nodesFromNodeAndQuery(node, footnoteMarkdownNodesQuery, footnoteMarkdownNodes);
    return footnoteMarkdownNodes;
}
function referenceMarkdownNodesFromNode(node) {
    var referenceMarkdownNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    nodesFromNodeAndQuery(node, referenceMarkdownNodesQuery, referenceMarkdownNodes);
    return referenceMarkdownNodes;
}
var _default = {
    linkMarkdownNodesFromNode: linkMarkdownNodesFromNode,
    footnoteMarkdownNodesFromNode: footnoteMarkdownNodesFromNode,
    referenceMarkdownNodesFromNode: referenceMarkdownNodesFromNode
};
function nodesFromNodeAndQuery(node, query, nodes) {
    var queryNodes = query.execute(node);
    push(nodes, queryNodes);
    return nodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgbGlua01hcmtkb3duTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKGAvL2xpbmtgKSxcbiAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oYC8vZm9vdG5vdGVgKSxcbiAgICAgIHJlZmVyZW5jZU1hcmtkb3duTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKGAvL3JlZmVyZW5jZWApO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlLCBsaW5rTWFya2Rvd25Ob2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBsaW5rTWFya2Rvd25Ob2Rlc1F1ZXJ5LCBsaW5rTWFya2Rvd25Ob2Rlcyk7XG5cbiAgcmV0dXJuIGxpbmtNYXJrZG93bk5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSwgZm9vdG5vdGVNYXJrZG93bk5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGZvb3Rub3RlTWFya2Rvd25Ob2Rlc1F1ZXJ5LCBmb290bm90ZU1hcmtkb3duTm9kZXMpO1xuXG4gIHJldHVybiBmb290bm90ZU1hcmtkb3duTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSwgcmVmZXJlbmNlTWFya2Rvd25Ob2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCByZWZlcmVuY2VNYXJrZG93bk5vZGVzUXVlcnksIHJlZmVyZW5jZU1hcmtkb3duTm9kZXMpO1xuXG4gIHJldHVybiByZWZlcmVuY2VNYXJrZG93bk5vZGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUsXG4gIGZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICByZWZlcmVuY2VNYXJrZG93bk5vZGVzRnJvbU5vZGVcbn07XG5cbmZ1bmN0aW9uIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBxdWVyeSwgbm9kZXMpIHtcbiAgY29uc3QgcXVlcnlOb2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgcHVzaChub2RlcywgcXVlcnlOb2Rlcyk7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuIl0sIm5hbWVzIjpbImZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwibGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSIsInJlZmVyZW5jZU1hcmtkb3duTm9kZXNGcm9tTm9kZSIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImxpbmtNYXJrZG93bk5vZGVzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVzUXVlcnkiLCJyZWZlcmVuY2VNYXJrZG93bk5vZGVzUXVlcnkiLCJub2RlIiwibGlua01hcmtkb3duTm9kZXMiLCJub2Rlc0Zyb21Ob2RlQW5kUXVlcnkiLCJmb290bm90ZU1hcmtkb3duTm9kZXMiLCJyZWZlcmVuY2VNYXJrZG93bk5vZGVzIiwicXVlcnkiLCJub2RlcyIsInF1ZXJ5Tm9kZXMiLCJleGVjdXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE2QkEsT0FJRTtlQUpGOztJQVpnQkEsNkJBQTZCO2VBQTdCQTs7SUFOQUMseUJBQXlCO2VBQXpCQTs7SUFZQUMsOEJBQThCO2VBQTlCQTs7OzBCQXJCTTt5QkFDUztBQUUvQixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVSLElBQU1FLHlCQUF5QkMsaUJBQUssQ0FBQ0MsY0FBYyxDQUFFLFdBQy9DQyw2QkFBNkJGLGlCQUFLLENBQUNDLGNBQWMsQ0FBRSxlQUNuREUsOEJBQThCSCxpQkFBSyxDQUFDQyxjQUFjLENBQUU7QUFFbkQsU0FBU04sMEJBQTBCUyxJQUFJO1FBQUVDLG9CQUFBQSxpRUFBb0IsRUFBRTtJQUNwRUMsc0JBQXNCRixNQUFNTCx3QkFBd0JNO0lBRXBELE9BQU9BO0FBQ1Q7QUFFTyxTQUFTWCw4QkFBOEJVLElBQUk7UUFBRUcsd0JBQUFBLGlFQUF3QixFQUFFO0lBQzVFRCxzQkFBc0JGLE1BQU1GLDRCQUE0Qks7SUFFeEQsT0FBT0E7QUFDVDtBQUVPLFNBQVNYLCtCQUErQlEsSUFBSTtRQUFFSSx5QkFBQUEsaUVBQXlCLEVBQUU7SUFDOUVGLHNCQUFzQkYsTUFBTUQsNkJBQTZCSztJQUV6RCxPQUFPQTtBQUNUO0lBRUEsV0FBZTtJQUNiYiwyQkFBQUE7SUFDQUQsK0JBQUFBO0lBQ0FFLGdDQUFBQTtBQUNGO0FBRUEsU0FBU1Usc0JBQXNCRixJQUFJLEVBQUVLLEtBQUssRUFBRUMsS0FBSztJQUMvQyxJQUFNQyxhQUFhRixNQUFNRyxPQUFPLENBQUNSO0lBRWpDUCxLQUFLYSxPQUFPQztJQUVaLE9BQU9EO0FBQ1QifQ==