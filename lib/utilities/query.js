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
    nodeFromNodeAndQuery: function() {
        return nodeFromNodeAndQuery;
    },
    nodeQuery: function() {
        return nodeQuery;
    },
    nodesFromNodeAndQueries: function() {
        return nodesFromNodeAndQueries;
    },
    nodesFromNodeAndQuery: function() {
        return nodesFromNodeAndQuery;
    },
    nodesQuery: function() {
        return nodesQuery;
    }
});
var _occamquery = require("occam-query");
var _necessary = require("necessary");
var push = _necessary.arrayUtilities.push;
function nodeQuery(expression) {
    var query = _occamquery.Query.fromExpressionString(expression);
    return function(node) {
        var nodes = query.execute(node);
        node = nodes.shift() || null; ///
        return node;
    };
}
function nodesQuery(expression) {
    var query = _occamquery.Query.fromExpressionString(expression);
    return function(node) {
        var nodes = query.execute(node);
        return nodes;
    };
}
function nodeFromNodeAndQuery(node, query) {
    var queryNodes = query.execute(node), queryNode = queryNodes.shift() || null;
    node = queryNode; ///
    return node;
}
function nodesFromNodeAndQuery(node, query, nodes) {
    var queryNodes = query.execute(node);
    push(nodes, queryNodes);
    return nodes;
}
function nodesFromNodeAndQueries(node, queries) {
    var nodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    queries.forEach(function(query) {
        var queryNodes = query.execute(node);
        push(nodes, queryNodes);
    });
    return nodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeShleHByZXNzaW9uKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBjb25zdCBub2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBub2RlID0gbm9kZXMuc2hpZnQoKSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5KGV4cHJlc3Npb24pIHtcbiAgY29uc3QgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uKTtcblxuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIGNvbnN0IG5vZGVzID0gcXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgcXVlcnkpIHtcbiAgY29uc3QgcXVlcnlOb2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgIHF1ZXJ5Tm9kZSA9IHF1ZXJ5Tm9kZXMuc2hpZnQoKSB8fCBudWxsO1xuXG4gIG5vZGUgPSBxdWVyeU5vZGU7ICAvLy9cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBxdWVyeSwgbm9kZXMpIHtcbiAgY29uc3QgcXVlcnlOb2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgcHVzaChub2RlcywgcXVlcnlOb2Rlcyk7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMobm9kZSwgcXVlcmllcywgbm9kZXMgPSBbXSkge1xuICBxdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgcXVlcnlOb2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBwdXNoKG5vZGVzLCBxdWVyeU5vZGVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVGcm9tTm9kZUFuZFF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwibm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMiLCJub2Rlc0Zyb21Ob2RlQW5kUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZXhwcmVzc2lvbiIsInF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsIm5vZGUiLCJub2RlcyIsImV4ZWN1dGUiLCJzaGlmdCIsInF1ZXJ5Tm9kZXMiLCJxdWVyeU5vZGUiLCJxdWVyaWVzIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNkJnQkEsb0JBQW9CO2VBQXBCQTs7SUF0QkFDLFNBQVM7ZUFBVEE7O0lBdUNBQyx1QkFBdUI7ZUFBdkJBOztJQVJBQyxxQkFBcUI7ZUFBckJBOztJQW5CQUMsVUFBVTtlQUFWQTs7OzBCQWpCTTt5QkFDUztBQUUvQixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVELFNBQVNKLFVBQVVNLFVBQVU7SUFDbEMsSUFBTUMsUUFBUUMsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUNIO0lBRXpDLE9BQU8sU0FBU0ksSUFBSTtRQUNsQixJQUFNQyxRQUFRSixNQUFNSyxPQUFPLENBQUNGO1FBRTVCQSxPQUFPQyxNQUFNRSxLQUFLLE1BQU0sTUFBTSxHQUFHO1FBRWpDLE9BQU9IO0lBQ1Q7QUFDRjtBQUVPLFNBQVNQLFdBQVdHLFVBQVU7SUFDbkMsSUFBTUMsUUFBUUMsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUNIO0lBRXpDLE9BQU8sU0FBU0ksSUFBSTtRQUNsQixJQUFNQyxRQUFRSixNQUFNSyxPQUFPLENBQUNGO1FBRTVCLE9BQU9DO0lBQ1Q7QUFDRjtBQUVPLFNBQVNaLHFCQUFxQlcsSUFBSSxFQUFFSCxLQUFLO0lBQzlDLElBQU1PLGFBQWFQLE1BQU1LLE9BQU8sQ0FBQ0YsT0FDM0JLLFlBQVlELFdBQVdELEtBQUssTUFBTTtJQUV4Q0gsT0FBT0ssV0FBWSxHQUFHO0lBRXRCLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTUixzQkFBc0JRLElBQUksRUFBRUgsS0FBSyxFQUFFSSxLQUFLO0lBQ3RELElBQU1HLGFBQWFQLE1BQU1LLE9BQU8sQ0FBQ0Y7SUFFakNOLEtBQUtPLE9BQU9HO0lBRVosT0FBT0g7QUFDVDtBQUVPLFNBQVNWLHdCQUF3QlMsSUFBSSxFQUFFTSxPQUFPO1FBQUVMLFFBQUFBLGlFQUFRLEVBQUU7SUFDL0RLLFFBQVFDLE9BQU8sQ0FBQyxTQUFDVjtRQUNmLElBQU1PLGFBQWFQLE1BQU1LLE9BQU8sQ0FBQ0Y7UUFFakNOLEtBQUtPLE9BQU9HO0lBQ2Q7SUFFQSxPQUFPSDtBQUNUIn0=