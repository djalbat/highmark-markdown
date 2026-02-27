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
const _occamquery = require("occam-query");
const _necessary = require("necessary");
const { push } = _necessary.arrayUtilities;
function nodeQuery(expression) {
    const query = _occamquery.Query.fromExpressionString(expression);
    return function(node) {
        const nodes = query.execute(node);
        node = nodes.shift() || null; ///
        return node;
    };
}
function nodesQuery(expression) {
    const query = _occamquery.Query.fromExpressionString(expression);
    return function(node) {
        const nodes = query.execute(node);
        return nodes;
    };
}
function nodeFromNodeAndQuery(node, query) {
    const queryNodes = query.execute(node), queryNode = queryNodes.shift() || null;
    node = queryNode; ///
    return node;
}
function nodesFromNodeAndQuery(node, query, nodes) {
    const queryNodes = query.execute(node);
    push(nodes, queryNodes);
    return nodes;
}
function nodesFromNodeAndQueries(node, queries, nodes = []) {
    queries.forEach((query)=>{
        const queryNodes = query.execute(node);
        push(nodes, queryNodes);
    });
    return nodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeShleHByZXNzaW9uKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBjb25zdCBub2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBub2RlID0gbm9kZXMuc2hpZnQoKSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5KGV4cHJlc3Npb24pIHtcbiAgY29uc3QgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uKTtcblxuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIGNvbnN0IG5vZGVzID0gcXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgcXVlcnkpIHtcbiAgY29uc3QgcXVlcnlOb2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgIHF1ZXJ5Tm9kZSA9IHF1ZXJ5Tm9kZXMuc2hpZnQoKSB8fCBudWxsO1xuXG4gIG5vZGUgPSBxdWVyeU5vZGU7ICAvLy9cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBxdWVyeSwgbm9kZXMpIHtcbiAgY29uc3QgcXVlcnlOb2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgcHVzaChub2RlcywgcXVlcnlOb2Rlcyk7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMobm9kZSwgcXVlcmllcywgbm9kZXMgPSBbXSkge1xuICBxdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgcXVlcnlOb2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBwdXNoKG5vZGVzLCBxdWVyeU5vZGVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVGcm9tTm9kZUFuZFF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwibm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMiLCJub2Rlc0Zyb21Ob2RlQW5kUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZXhwcmVzc2lvbiIsInF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsIm5vZGUiLCJub2RlcyIsImV4ZWN1dGUiLCJzaGlmdCIsInF1ZXJ5Tm9kZXMiLCJxdWVyeU5vZGUiLCJxdWVyaWVzIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNkJnQkE7ZUFBQUE7O1FBdEJBQztlQUFBQTs7UUF1Q0FDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFuQkFDO2VBQUFBOzs7NEJBakJNOzJCQUNTO0FBRS9CLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLHlCQUFjO0FBRXhCLFNBQVNMLFVBQVVNLFVBQVU7SUFDbEMsTUFBTUMsUUFBUUMsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUNIO0lBRXpDLE9BQU8sU0FBU0ksSUFBSTtRQUNsQixNQUFNQyxRQUFRSixNQUFNSyxPQUFPLENBQUNGO1FBRTVCQSxPQUFPQyxNQUFNRSxLQUFLLE1BQU0sTUFBTSxHQUFHO1FBRWpDLE9BQU9IO0lBQ1Q7QUFDRjtBQUVPLFNBQVNQLFdBQVdHLFVBQVU7SUFDbkMsTUFBTUMsUUFBUUMsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUNIO0lBRXpDLE9BQU8sU0FBU0ksSUFBSTtRQUNsQixNQUFNQyxRQUFRSixNQUFNSyxPQUFPLENBQUNGO1FBRTVCLE9BQU9DO0lBQ1Q7QUFDRjtBQUVPLFNBQVNaLHFCQUFxQlcsSUFBSSxFQUFFSCxLQUFLO0lBQzlDLE1BQU1PLGFBQWFQLE1BQU1LLE9BQU8sQ0FBQ0YsT0FDM0JLLFlBQVlELFdBQVdELEtBQUssTUFBTTtJQUV4Q0gsT0FBT0ssV0FBWSxHQUFHO0lBRXRCLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTUixzQkFBc0JRLElBQUksRUFBRUgsS0FBSyxFQUFFSSxLQUFLO0lBQ3RELE1BQU1HLGFBQWFQLE1BQU1LLE9BQU8sQ0FBQ0Y7SUFFakNOLEtBQUtPLE9BQU9HO0lBRVosT0FBT0g7QUFDVDtBQUVPLFNBQVNWLHdCQUF3QlMsSUFBSSxFQUFFTSxPQUFPLEVBQUVMLFFBQVEsRUFBRTtJQUMvREssUUFBUUMsT0FBTyxDQUFDLENBQUNWO1FBQ2YsTUFBTU8sYUFBYVAsTUFBTUssT0FBTyxDQUFDRjtRQUVqQ04sS0FBS08sT0FBT0c7SUFDZDtJQUVBLE9BQU9IO0FBQ1QifQ==