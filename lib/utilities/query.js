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
    footnotesMarkdownNodesFromNode: function() {
        return footnotesMarkdownNodesFromNode;
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
var linkMarkdownNodesQuery = _occamquery.Query.fromExpression("//link"), headingMarkdownNodesQuery = _occamquery.Query.fromExpression("//primaryHeading|secondaryHeading|tertiaryHeading|quaternaryHeading"), contentsMarkdownNodeQuery = _occamquery.Query.fromExpression("//contents"), footnoteMarkdownNodesQuery = _occamquery.Query.fromExpression("//footnote"), footnotesMarkdownNodesQuery = _occamquery.Query.fromExpression("//footnotes"), referenceMarkdownNodesQuery = _occamquery.Query.fromExpression("//reference");
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
    var contentsMarkdownNode = nodeFromNodeAndQuery(node, contentsMarkdownNodeQuery);
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
function footnotesMarkdownNodesFromNode(node) {
    var footnotesMarkdownNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    nodesFromNodeAndQuery(node, footnotesMarkdownNodesQuery, footnotesMarkdownNodes);
    return footnotesMarkdownNodes;
}
var _default = {
    linkMarkdownNodesFromNode: linkMarkdownNodesFromNode,
    contentsMarkdownNodeFromNode: contentsMarkdownNodeFromNode,
    headingMarkdownNodesFromNode: headingMarkdownNodesFromNode,
    footnoteMarkdownNodesFromNode: footnoteMarkdownNodesFromNode,
    referenceMarkdownNodesFromNode: referenceMarkdownNodesFromNode,
    footnotesMarkdownNodesFromNode: footnotesMarkdownNodesFromNode
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaXJzdCwgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGxpbmtNYXJrZG93bk5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihgLy9saW5rYCksXG4gICAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oYC8vcHJpbWFyeUhlYWRpbmd8c2Vjb25kYXJ5SGVhZGluZ3x0ZXJ0aWFyeUhlYWRpbmd8cXVhdGVybmFyeUhlYWRpbmdgKSxcbiAgICAgIGNvbnRlbnRzTWFya2Rvd25Ob2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihgLy9jb250ZW50c2ApLFxuICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihgLy9mb290bm90ZWApLFxuICAgICAgZm9vdG5vdGVzTWFya2Rvd25Ob2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oYC8vZm9vdG5vdGVzYCksXG4gICAgICByZWZlcmVuY2VNYXJrZG93bk5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihgLy9yZWZlcmVuY2VgKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeShleHByZXNzaW9uKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBjb25zdCBub2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChub2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgICAgbm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5KGV4cHJlc3Npb24pIHtcbiAgY29uc3QgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIGNvbnN0IG5vZGVzID0gcXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlLCBsaW5rTWFya2Rvd25Ob2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBsaW5rTWFya2Rvd25Ob2Rlc1F1ZXJ5LCBsaW5rTWFya2Rvd25Ob2Rlcyk7XG5cbiAgcmV0dXJuIGxpbmtNYXJrZG93bk5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IGNvbnRlbnRzTWFya2Rvd25Ob2RlID0gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgY29udGVudHNNYXJrZG93bk5vZGVRdWVyeSk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzTWFya2Rvd25Ob2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlLCBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBoZWFkaW5nTWFya2Rvd25Ob2Rlc1F1ZXJ5LCBoZWFkaW5nTWFya2Rvd25Ob2Rlcyk7XG5cbiAgcmV0dXJuIGhlYWRpbmdNYXJrZG93bk5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSwgZm9vdG5vdGVNYXJrZG93bk5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGZvb3Rub3RlTWFya2Rvd25Ob2Rlc1F1ZXJ5LCBmb290bm90ZU1hcmtkb3duTm9kZXMpO1xuXG4gIHJldHVybiBmb290bm90ZU1hcmtkb3duTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSwgcmVmZXJlbmNlTWFya2Rvd25Ob2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCByZWZlcmVuY2VNYXJrZG93bk5vZGVzUXVlcnksIHJlZmVyZW5jZU1hcmtkb3duTm9kZXMpO1xuXG4gIHJldHVybiByZWZlcmVuY2VNYXJrZG93bk5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdG5vdGVzTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIGZvb3Rub3Rlc01hcmtkb3duTm9kZXMgPSBbXSkge1xuICBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkobm9kZSwgZm9vdG5vdGVzTWFya2Rvd25Ob2Rlc1F1ZXJ5LCBmb290bm90ZXNNYXJrZG93bk5vZGVzKTtcblxuICByZXR1cm4gZm9vdG5vdGVzTWFya2Rvd25Ob2Rlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICBjb250ZW50c01hcmtkb3duTm9kZUZyb21Ob2RlLFxuICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICBmb290bm90ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgcmVmZXJlbmNlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICBmb290bm90ZXNNYXJrZG93bk5vZGVzRnJvbU5vZGVcbn07XG5cbmZ1bmN0aW9uIG5vZGVGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIHF1ZXJ5KSB7XG4gIGNvbnN0IHF1ZXJ5Tm9kZXMgPSBxdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICBxdWVyeU5vZGVzTGVuZ3RoID0gcXVlcnlOb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKHF1ZXJ5Tm9kZXNMZW5ndGggPT09IDApIHtcbiAgICBub2RlID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmaXJzdFF1ZXJ5Tm9kZSA9IGZpcnN0KHF1ZXJ5Tm9kZXMpO1xuXG4gICAgbm9kZSA9IGZpcnN0UXVlcnlOb2RlOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIHF1ZXJ5LCBub2Rlcykge1xuICBjb25zdCBxdWVyeU5vZGVzID0gcXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICBwdXNoKG5vZGVzLCBxdWVyeU5vZGVzKTtcblxuICByZXR1cm4gbm9kZXM7XG59XG4iXSwibmFtZXMiOlsiY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVzTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJub2RlUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicmVmZXJlbmNlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJsaW5rTWFya2Rvd25Ob2Rlc1F1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsImhlYWRpbmdNYXJrZG93bk5vZGVzUXVlcnkiLCJjb250ZW50c01hcmtkb3duTm9kZVF1ZXJ5IiwiZm9vdG5vdGVNYXJrZG93bk5vZGVzUXVlcnkiLCJmb290bm90ZXNNYXJrZG93bk5vZGVzUXVlcnkiLCJyZWZlcmVuY2VNYXJrZG93bk5vZGVzUXVlcnkiLCJleHByZXNzaW9uIiwicXVlcnkiLCJub2RlIiwibm9kZXMiLCJleGVjdXRlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vZGUiLCJsaW5rTWFya2Rvd25Ob2RlcyIsIm5vZGVzRnJvbU5vZGVBbmRRdWVyeSIsImNvbnRlbnRzTWFya2Rvd25Ob2RlIiwibm9kZUZyb21Ob2RlQW5kUXVlcnkiLCJoZWFkaW5nTWFya2Rvd25Ob2RlcyIsImZvb3Rub3RlTWFya2Rvd25Ob2RlcyIsInJlZmVyZW5jZU1hcmtkb3duTm9kZXMiLCJmb290bm90ZXNNYXJrZG93bk5vZGVzIiwicXVlcnlOb2RlcyIsInF1ZXJ5Tm9kZXNMZW5ndGgiLCJmaXJzdFF1ZXJ5Tm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWlEZ0JBLDRCQUE0QjtlQUE1QkE7O0lBOEJoQixPQU9FO2VBUEY7O0lBbEJnQkMsNkJBQTZCO2VBQTdCQTs7SUFZQUMsOEJBQThCO2VBQTlCQTs7SUFsQkFDLDRCQUE0QjtlQUE1QkE7O0lBWkFDLHlCQUF5QjtlQUF6QkE7O0lBN0JBQyxTQUFTO2VBQVRBOztJQW1CQUMsVUFBVTtlQUFWQTs7SUFrQ0FDLDhCQUE4QjtlQUE5QkE7OzswQkFqRU07eUJBQ1M7QUFFL0IsSUFBUUMsUUFBZ0JDLHlCQUFjLENBQTlCRCxPQUFPRSxPQUFTRCx5QkFBYyxDQUF2QkM7QUFFZixJQUFNQyx5QkFBeUJDLGlCQUFLLENBQUNDLGNBQWMsQ0FBRSxXQUMvQ0MsNEJBQTRCRixpQkFBSyxDQUFDQyxjQUFjLENBQUUsd0VBQ2xERSw0QkFBNEJILGlCQUFLLENBQUNDLGNBQWMsQ0FBRSxlQUNsREcsNkJBQTZCSixpQkFBSyxDQUFDQyxjQUFjLENBQUUsZUFDbkRJLDhCQUE4QkwsaUJBQUssQ0FBQ0MsY0FBYyxDQUFFLGdCQUNwREssOEJBQThCTixpQkFBSyxDQUFDQyxjQUFjLENBQUU7QUFFbkQsU0FBU1IsVUFBVWMsVUFBVTtJQUNsQyxJQUFNQyxRQUFRUixpQkFBSyxDQUFDQyxjQUFjLENBQUNNO0lBRW5DLE9BQU8sU0FBU0UsSUFBSTtRQUNsQixJQUFNQyxRQUFRRixNQUFNRyxPQUFPLENBQUNGLE9BQzFCRyxjQUFjRixNQUFNRyxNQUFNO1FBRTVCLElBQUlELGNBQWMsR0FBRztZQUNuQixJQUFNRSxZQUFZbEIsTUFBTWM7WUFFeEJELE9BQU9LLFdBQVcsR0FBRztRQUN2QixPQUFPO1lBQ0xMLE9BQU87UUFDVDtRQUVBLE9BQU9BO0lBQ1Q7QUFDRjtBQUVPLFNBQVNmLFdBQVdhLFVBQVU7SUFDbkMsSUFBTUMsUUFBUVIsaUJBQUssQ0FBQ0MsY0FBYyxDQUFDTTtJQUVuQyxPQUFPLFNBQVNFLElBQUk7UUFDbEIsSUFBTUMsUUFBUUYsTUFBTUcsT0FBTyxDQUFDRjtRQUU1QixPQUFPQztJQUNUO0FBQ0Y7QUFFTyxTQUFTbEIsMEJBQTBCaUIsSUFBSTtRQUFFTSxvQkFBQUEsaUVBQW9CLEVBQUU7SUFDcEVDLHNCQUFzQlAsTUFBTVYsd0JBQXdCZ0I7SUFFcEQsT0FBT0E7QUFDVDtBQUVPLFNBQVMzQiw2QkFBNkJxQixJQUFJO0lBQy9DLElBQU1RLHVCQUF1QkMscUJBQXFCVCxNQUFNTjtJQUV4RCxPQUFPYztBQUNUO0FBRU8sU0FBUzFCLDZCQUE2QmtCLElBQUk7UUFBRVUsdUJBQUFBLGlFQUF1QixFQUFFO0lBQzFFSCxzQkFBc0JQLE1BQU1QLDJCQUEyQmlCO0lBRXZELE9BQU9BO0FBQ1Q7QUFFTyxTQUFTOUIsOEJBQThCb0IsSUFBSTtRQUFFVyx3QkFBQUEsaUVBQXdCLEVBQUU7SUFDNUVKLHNCQUFzQlAsTUFBTUwsNEJBQTRCZ0I7SUFFeEQsT0FBT0E7QUFDVDtBQUVPLFNBQVN6QiwrQkFBK0JjLElBQUk7UUFBRVkseUJBQUFBLGlFQUF5QixFQUFFO0lBQzlFTCxzQkFBc0JQLE1BQU1ILDZCQUE2QmU7SUFFekQsT0FBT0E7QUFDVDtBQUVPLFNBQVMvQiwrQkFBK0JtQixJQUFJO1FBQUVhLHlCQUFBQSxpRUFBeUIsRUFBRTtJQUM5RU4sc0JBQXNCUCxNQUFNSiw2QkFBNkJpQjtJQUV6RCxPQUFPQTtBQUNUO0lBRUEsV0FBZTtJQUNiOUIsMkJBQUFBO0lBQ0FKLDhCQUFBQTtJQUNBRyw4QkFBQUE7SUFDQUYsK0JBQUFBO0lBQ0FNLGdDQUFBQTtJQUNBTCxnQ0FBQUE7QUFDRjtBQUVBLFNBQVM0QixxQkFBcUJULElBQUksRUFBRUQsS0FBSztJQUN2QyxJQUFNZSxhQUFhZixNQUFNRyxPQUFPLENBQUNGLE9BQzNCZSxtQkFBbUJELFdBQVdWLE1BQU07SUFFMUMsSUFBSVcscUJBQXFCLEdBQUc7UUFDMUJmLE9BQU87SUFDVCxPQUFPO1FBQ0wsSUFBTWdCLGlCQUFpQjdCLE1BQU0yQjtRQUU3QmQsT0FBT2dCLGdCQUFpQixHQUFHO0lBQzdCO0lBRUEsT0FBT2hCO0FBQ1Q7QUFFQSxTQUFTTyxzQkFBc0JQLElBQUksRUFBRUQsS0FBSyxFQUFFRSxLQUFLO0lBQy9DLElBQU1hLGFBQWFmLE1BQU1HLE9BQU8sQ0FBQ0Y7SUFFakNYLEtBQUtZLE9BQU9hO0lBRVosT0FBT2I7QUFDVCJ9