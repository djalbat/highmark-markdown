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
    contentsMarkdownNodeFromNode: function() {
        return contentsMarkdownNodeFromNode;
    },
    default: function() {
        return _default;
    },
    footnoteMarkdownNodesFromNode: function() {
        return footnoteMarkdownNodesFromNode;
    },
    headingMarkdownNodesFromNode: function() {
        return headingMarkdownNodesFromNode;
    },
    linkMarkdownNodesFromNode: function() {
        return linkMarkdownNodesFromNode;
    },
    nodeQuery: function() {
        return nodeQuery;
    },
    nodesQuery: function() {
        return nodesQuery;
    },
    referenceMarkdownNodesFromNode: function() {
        return referenceMarkdownNodesFromNode;
    }
});
var _occamquery = require("occam-query");
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, push = _necessary.arrayUtilities.push;
var linkMarkdownNodesQuery = _occamquery.Query.fromExpression("//link"), contentMarkdownNodeQuery = _occamquery.Query.fromExpression("//contents"), headingMarkdownNodesQuery = _occamquery.Query.fromExpression("//primaryHeading|secondaryHeading|tertiaryHeading|quaternaryHeading"), footnoteMarkdownNodesQuery = _occamquery.Query.fromExpression("//footnote"), referenceMarkdownNodesQuery = _occamquery.Query.fromExpression("//reference");
function nodeQuery(expression) {
    var query = _occamquery.Query.fromExpression(expression);
    return function(node) {
        var nodes = query.execute(node), nodesLength = nodes.length;
        if (nodesLength > 0) {
            var firstNode = first(nodes);
            node = firstNode; ///
        } else {
            node = null;
        }
        return node;
    };
}
function nodesQuery(expression) {
    var query = _occamquery.Query.fromExpression(expression);
    return function(node) {
        var nodes = query.execute(node);
        return nodes;
    };
}
function linkMarkdownNodesFromNode(node) {
    var linkMarkdownNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    nodesFromNodeAndQuery(node, linkMarkdownNodesQuery, linkMarkdownNodes);
    return linkMarkdownNodes;
}
function contentsMarkdownNodeFromNode(node) {
    var contentsMarkdownNode = nodeFromNodeAndQuery(node, contentMarkdownNodeQuery);
    return contentsMarkdownNode;
}
function headingMarkdownNodesFromNode(node) {
    var headingMarkdownNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    nodesFromNodeAndQuery(node, headingMarkdownNodesQuery, headingMarkdownNodes);
    return headingMarkdownNodes;
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
    contentsMarkdownNodeFromNode: contentsMarkdownNodeFromNode,
    headingMarkdownNodesFromNode: headingMarkdownNodesFromNode,
    footnoteMarkdownNodesFromNode: footnoteMarkdownNodesFromNode,
    referenceMarkdownNodesFromNode: referenceMarkdownNodesFromNode
};
function nodeFromNodeAndQuery(node, query) {
    var queryNodes = query.execute(node), queryNodesLength = queryNodes.length;
    if (queryNodesLength === 0) {
        node = null;
    } else {
        var firstQueryNode = first(queryNodes);
        node = firstQueryNode; ///
    }
    return node;
}
function nodesFromNodeAndQuery(node, query, nodes) {
    var queryNodes = query.execute(node);
    push(nodes, queryNodes);
    return nodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaXJzdCwgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGxpbmtNYXJrZG93bk5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihgLy9saW5rYCksXG4gICAgICBjb250ZW50TWFya2Rvd25Ob2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihgLy9jb250ZW50c2ApLFxuICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKGAvL3ByaW1hcnlIZWFkaW5nfHNlY29uZGFyeUhlYWRpbmd8dGVydGlhcnlIZWFkaW5nfHF1YXRlcm5hcnlIZWFkaW5nYCksXG4gICAgICBmb290bm90ZU1hcmtkb3duTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKGAvL2Zvb3Rub3RlYCksXG4gICAgICByZWZlcmVuY2VNYXJrZG93bk5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihgLy9yZWZlcmVuY2VgKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeShleHByZXNzaW9uKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBjb25zdCBub2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChub2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgICAgbm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5KGV4cHJlc3Npb24pIHtcbiAgY29uc3QgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIGNvbnN0IG5vZGVzID0gcXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlLCBsaW5rTWFya2Rvd25Ob2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBsaW5rTWFya2Rvd25Ob2Rlc1F1ZXJ5LCBsaW5rTWFya2Rvd25Ob2Rlcyk7XG5cbiAgcmV0dXJuIGxpbmtNYXJrZG93bk5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IGNvbnRlbnRzTWFya2Rvd25Ob2RlID0gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgY29udGVudE1hcmtkb3duTm9kZVF1ZXJ5KTtcblxuICByZXR1cm4gY29udGVudHNNYXJrZG93bk5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzUXVlcnksIGhlYWRpbmdNYXJrZG93bk5vZGVzKTtcblxuICByZXR1cm4gaGVhZGluZ01hcmtkb3duTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb290bm90ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlLCBmb290bm90ZU1hcmtkb3duTm9kZXMgPSBbXSkge1xuICBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkobm9kZSwgZm9vdG5vdGVNYXJrZG93bk5vZGVzUXVlcnksIGZvb3Rub3RlTWFya2Rvd25Ob2Rlcyk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlTWFya2Rvd25Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlLCByZWZlcmVuY2VNYXJrZG93bk5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIHJlZmVyZW5jZU1hcmtkb3duTm9kZXNRdWVyeSwgcmVmZXJlbmNlTWFya2Rvd25Ob2Rlcyk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZU1hcmtkb3duTm9kZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUsXG4gIHJlZmVyZW5jZU1hcmtkb3duTm9kZXNGcm9tTm9kZVxufTtcblxuZnVuY3Rpb24gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgcXVlcnkpIHtcbiAgY29uc3QgcXVlcnlOb2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgIHF1ZXJ5Tm9kZXNMZW5ndGggPSBxdWVyeU5vZGVzLmxlbmd0aDtcblxuICBpZiAocXVlcnlOb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgIG5vZGUgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZpcnN0UXVlcnlOb2RlID0gZmlyc3QocXVlcnlOb2Rlcyk7XG5cbiAgICBub2RlID0gZmlyc3RRdWVyeU5vZGU7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkobm9kZSwgcXVlcnksIG5vZGVzKSB7XG4gIGNvbnN0IHF1ZXJ5Tm9kZXMgPSBxdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gIHB1c2gobm9kZXMsIHF1ZXJ5Tm9kZXMpO1xuXG4gIHJldHVybiBub2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJjb250ZW50c01hcmtkb3duTm9kZUZyb21Ob2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwibGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSIsIm5vZGVRdWVyeSIsIm5vZGVzUXVlcnkiLCJyZWZlcmVuY2VNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwicHVzaCIsImxpbmtNYXJrZG93bk5vZGVzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiY29udGVudE1hcmtkb3duTm9kZVF1ZXJ5IiwiaGVhZGluZ01hcmtkb3duTm9kZXNRdWVyeSIsImZvb3Rub3RlTWFya2Rvd25Ob2Rlc1F1ZXJ5IiwicmVmZXJlbmNlTWFya2Rvd25Ob2Rlc1F1ZXJ5IiwiZXhwcmVzc2lvbiIsInF1ZXJ5Iiwibm9kZSIsIm5vZGVzIiwiZXhlY3V0ZSIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3ROb2RlIiwibGlua01hcmtkb3duTm9kZXMiLCJub2Rlc0Zyb21Ob2RlQW5kUXVlcnkiLCJjb250ZW50c01hcmtkb3duTm9kZSIsIm5vZGVGcm9tTm9kZUFuZFF1ZXJ5IiwiaGVhZGluZ01hcmtkb3duTm9kZXMiLCJmb290bm90ZU1hcmtkb3duTm9kZXMiLCJyZWZlcmVuY2VNYXJrZG93bk5vZGVzIiwicXVlcnlOb2RlcyIsInF1ZXJ5Tm9kZXNMZW5ndGgiLCJmaXJzdFF1ZXJ5Tm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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