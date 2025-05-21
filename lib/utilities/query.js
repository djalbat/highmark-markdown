"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get nodeFromNodeAndQuery () {
        return nodeFromNodeAndQuery;
    },
    get nodeQuery () {
        return nodeQuery;
    },
    get nodesFromNodeAndQueries () {
        return nodesFromNodeAndQueries;
    },
    get nodesFromNodeAndQuery () {
        return nodesFromNodeAndQuery;
    },
    get nodesQuery () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeShleHByZXNzaW9uKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBjb25zdCBub2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBub2RlID0gbm9kZXMuc2hpZnQoKSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5KGV4cHJlc3Npb24pIHtcbiAgY29uc3QgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uKTtcblxuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIGNvbnN0IG5vZGVzID0gcXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgcXVlcnkpIHtcbiAgY29uc3QgcXVlcnlOb2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgIHF1ZXJ5Tm9kZSA9IHF1ZXJ5Tm9kZXMuc2hpZnQoKSB8fCBudWxsO1xuXG4gIG5vZGUgPSBxdWVyeU5vZGU7ICAvLy9cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBxdWVyeSwgbm9kZXMpIHtcbiAgY29uc3QgcXVlcnlOb2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgcHVzaChub2RlcywgcXVlcnlOb2Rlcyk7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMobm9kZSwgcXVlcmllcywgbm9kZXMgPSBbXSkge1xuICBxdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgcXVlcnlOb2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBwdXNoKG5vZGVzLCBxdWVyeU5vZGVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVGcm9tTm9kZUFuZFF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwibm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMiLCJub2Rlc0Zyb21Ob2RlQW5kUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZXhwcmVzc2lvbiIsInF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsIm5vZGUiLCJub2RlcyIsImV4ZWN1dGUiLCJzaGlmdCIsInF1ZXJ5Tm9kZXMiLCJxdWVyeU5vZGUiLCJxdWVyaWVzIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNkJnQkE7ZUFBQUE7O1FBdEJBQztlQUFBQTs7UUF1Q0FDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFuQkFDO2VBQUFBOzs7MEJBakJNO3lCQUNTO0FBRS9CLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRUQsU0FBU0osVUFBVU0sVUFBVTtJQUNsQyxJQUFNQyxRQUFRQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQ0g7SUFFekMsT0FBTyxTQUFTSSxJQUFJO1FBQ2xCLElBQU1DLFFBQVFKLE1BQU1LLE9BQU8sQ0FBQ0Y7UUFFNUJBLE9BQU9DLE1BQU1FLEtBQUssTUFBTSxNQUFNLEdBQUc7UUFFakMsT0FBT0g7SUFDVDtBQUNGO0FBRU8sU0FBU1AsV0FBV0csVUFBVTtJQUNuQyxJQUFNQyxRQUFRQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQ0g7SUFFekMsT0FBTyxTQUFTSSxJQUFJO1FBQ2xCLElBQU1DLFFBQVFKLE1BQU1LLE9BQU8sQ0FBQ0Y7UUFFNUIsT0FBT0M7SUFDVDtBQUNGO0FBRU8sU0FBU1oscUJBQXFCVyxJQUFJLEVBQUVILEtBQUs7SUFDOUMsSUFBTU8sYUFBYVAsTUFBTUssT0FBTyxDQUFDRixPQUMzQkssWUFBWUQsV0FBV0QsS0FBSyxNQUFNO0lBRXhDSCxPQUFPSyxXQUFZLEdBQUc7SUFFdEIsT0FBT0w7QUFDVDtBQUVPLFNBQVNSLHNCQUFzQlEsSUFBSSxFQUFFSCxLQUFLLEVBQUVJLEtBQUs7SUFDdEQsSUFBTUcsYUFBYVAsTUFBTUssT0FBTyxDQUFDRjtJQUVqQ04sS0FBS08sT0FBT0c7SUFFWixPQUFPSDtBQUNUO0FBRU8sU0FBU1Ysd0JBQXdCUyxJQUFJLEVBQUVNLE9BQU87UUFBRUwsUUFBQUEsaUVBQVEsRUFBRTtJQUMvREssUUFBUUMsT0FBTyxDQUFDLFNBQUNWO1FBQ2YsSUFBTU8sYUFBYVAsTUFBTUssT0FBTyxDQUFDRjtRQUVqQ04sS0FBS08sT0FBT0c7SUFDZDtJQUVBLE9BQU9IO0FBQ1QifQ==