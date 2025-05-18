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
    nestedRuleSetCSSNodesFromNode: function() {
        return nestedRuleSetCSSNodesFromNode;
    },
    ruleSetCSSNodesFromNode: function() {
        return ruleSetCSSNodesFromNode;
    },
    selectorCSSNodesFromNode: function() {
        return selectorCSSNodesFromNode;
    },
    selectorsCSSNodesFromNode: function() {
        return selectorsCSSNodesFromNode;
    },
    selectorsListCSSNodesFromNode: function() {
        return selectorsListCSSNodesFromNode;
    }
});
var _occamquery = require("occam-query");
var _query = require("../utilities/query");
var ruleSetCSSNodesQuery = _occamquery.Query.fromExpressionString("/*/ruleSet"), selectorCSSNodesQuery = _occamquery.Query.fromExpressionString("/selectors/selector"), selectorsCSSNodesQuery = _occamquery.Query.fromExpressionString("/selectorsList/selectors"), nestedRuleSetCSSNodesQuery = _occamquery.Query.fromExpressionString("/*//ruleSet"), selectorsListCSSNodesQuery = _occamquery.Query.fromExpressionString("/*//ruleSet/selectorsList"); ///
function ruleSetCSSNodesFromNode(node) {
    var ruleSetCSSNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, ruleSetCSSNodesQuery, ruleSetCSSNodes);
    return ruleSetCSSNodes;
}
function selectorCSSNodesFromNode(node) {
    var selectorCSSNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, selectorCSSNodesQuery, selectorCSSNodes);
    return selectorCSSNodes;
}
function selectorsCSSNodesFromNode(node) {
    var selectorsCSSNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, selectorsCSSNodesQuery, selectorsCSSNodes);
    return selectorsCSSNodes;
}
function nestedRuleSetCSSNodesFromNode(node) {
    var nestedRuleSetCSSNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, nestedRuleSetCSSNodesQuery, nestedRuleSetCSSNodes);
    return nestedRuleSetCSSNodes;
}
function selectorsListCSSNodesFromNode(node) {
    var selectorsListCSSNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, selectorsListCSSNodesQuery, selectorsListCSSNodes);
    return selectorsListCSSNodes;
}
var _default = {
    ruleSetCSSNodesFromNode: ruleSetCSSNodesFromNode,
    selectorCSSNodesFromNode: selectorCSSNodesFromNode,
    selectorsCSSNodesFromNode: selectorsCSSNodesFromNode,
    selectorsListCSSNodesFromNode: selectorsListCSSNodesFromNode
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgeyBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHJ1bGVTZXRDU1NOb2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvKi9ydWxlU2V0XCIpLFxuICAgICAgc2VsZWN0b3JDU1NOb2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvc2VsZWN0b3JzL3NlbGVjdG9yXCIpLFxuICAgICAgc2VsZWN0b3JzQ1NTTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL3NlbGVjdG9yc0xpc3Qvc2VsZWN0b3JzXCIpLFxuICAgICAgbmVzdGVkUnVsZVNldENTU05vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8qLy9ydWxlU2V0XCIpLFxuICAgICAgc2VsZWN0b3JzTGlzdENTU05vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8qLy9ydWxlU2V0L3NlbGVjdG9yc0xpc3RcIik7IC8vL1xuXG5leHBvcnQgZnVuY3Rpb24gcnVsZVNldENTU05vZGVzRnJvbU5vZGUobm9kZSwgcnVsZVNldENTU05vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIHJ1bGVTZXRDU1NOb2Rlc1F1ZXJ5LCBydWxlU2V0Q1NTTm9kZXMpO1xuXG4gIHJldHVybiBydWxlU2V0Q1NTTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RvckNTU05vZGVzRnJvbU5vZGUobm9kZSwgc2VsZWN0b3JDU1NOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBzZWxlY3RvckNTU05vZGVzUXVlcnksIHNlbGVjdG9yQ1NTTm9kZXMpO1xuXG4gIHJldHVybiBzZWxlY3RvckNTU05vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JzQ1NTTm9kZXNGcm9tTm9kZShub2RlLCBzZWxlY3RvcnNDU1NOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBzZWxlY3RvcnNDU1NOb2Rlc1F1ZXJ5LCBzZWxlY3RvcnNDU1NOb2Rlcyk7XG5cbiAgcmV0dXJuIHNlbGVjdG9yc0NTU05vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVzdGVkUnVsZVNldENTU05vZGVzRnJvbU5vZGUobm9kZSwgbmVzdGVkUnVsZVNldENTU05vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIG5lc3RlZFJ1bGVTZXRDU1NOb2Rlc1F1ZXJ5LCBuZXN0ZWRSdWxlU2V0Q1NTTm9kZXMpO1xuXG4gIHJldHVybiBuZXN0ZWRSdWxlU2V0Q1NTTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RvcnNMaXN0Q1NTTm9kZXNGcm9tTm9kZShub2RlLCBzZWxlY3RvcnNMaXN0Q1NTTm9kZXMgPSBbXSkge1xuICBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkobm9kZSwgc2VsZWN0b3JzTGlzdENTU05vZGVzUXVlcnksIHNlbGVjdG9yc0xpc3RDU1NOb2Rlcyk7XG5cbiAgcmV0dXJuIHNlbGVjdG9yc0xpc3RDU1NOb2Rlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlU2V0Q1NTTm9kZXNGcm9tTm9kZSxcbiAgc2VsZWN0b3JDU1NOb2Rlc0Zyb21Ob2RlLFxuICBzZWxlY3RvcnNDU1NOb2Rlc0Zyb21Ob2RlLFxuICBzZWxlY3RvcnNMaXN0Q1NTTm9kZXNGcm9tTm9kZVxufTtcbiJdLCJuYW1lcyI6WyJuZXN0ZWRSdWxlU2V0Q1NTTm9kZXNGcm9tTm9kZSIsInJ1bGVTZXRDU1NOb2Rlc0Zyb21Ob2RlIiwic2VsZWN0b3JDU1NOb2Rlc0Zyb21Ob2RlIiwic2VsZWN0b3JzQ1NTTm9kZXNGcm9tTm9kZSIsInNlbGVjdG9yc0xpc3RDU1NOb2Rlc0Zyb21Ob2RlIiwicnVsZVNldENTU05vZGVzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwic2VsZWN0b3JDU1NOb2Rlc1F1ZXJ5Iiwic2VsZWN0b3JzQ1NTTm9kZXNRdWVyeSIsIm5lc3RlZFJ1bGVTZXRDU1NOb2Rlc1F1ZXJ5Iiwic2VsZWN0b3JzTGlzdENTU05vZGVzUXVlcnkiLCJub2RlIiwicnVsZVNldENTU05vZGVzIiwibm9kZXNGcm9tTm9kZUFuZFF1ZXJ5Iiwic2VsZWN0b3JDU1NOb2RlcyIsInNlbGVjdG9yc0NTU05vZGVzIiwibmVzdGVkUnVsZVNldENTU05vZGVzIiwic2VsZWN0b3JzTGlzdENTU05vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEwQ0EsT0FLRTtlQUxGOztJQVpnQkEsNkJBQTZCO2VBQTdCQTs7SUFsQkFDLHVCQUF1QjtlQUF2QkE7O0lBTUFDLHdCQUF3QjtlQUF4QkE7O0lBTUFDLHlCQUF5QjtlQUF6QkE7O0lBWUFDLDZCQUE2QjtlQUE3QkE7OzswQkFsQ007cUJBRWdCO0FBRXRDLElBQU1DLHVCQUF1QkMsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsZUFDbERDLHdCQUF3QkYsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsd0JBQ25ERSx5QkFBeUJILGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLDZCQUNwREcsNkJBQTZCSixpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxnQkFDeERJLDZCQUE2QkwsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsOEJBQThCLEdBQUc7QUFFeEYsU0FBU04sd0JBQXdCVyxJQUFJO1FBQUVDLGtCQUFBQSxpRUFBa0IsRUFBRTtJQUNoRUMsSUFBQUEsNEJBQXFCLEVBQUNGLE1BQU1QLHNCQUFzQlE7SUFFbEQsT0FBT0E7QUFDVDtBQUVPLFNBQVNYLHlCQUF5QlUsSUFBSTtRQUFFRyxtQkFBQUEsaUVBQW1CLEVBQUU7SUFDbEVELElBQUFBLDRCQUFxQixFQUFDRixNQUFNSix1QkFBdUJPO0lBRW5ELE9BQU9BO0FBQ1Q7QUFFTyxTQUFTWiwwQkFBMEJTLElBQUk7UUFBRUksb0JBQUFBLGlFQUFvQixFQUFFO0lBQ3BFRixJQUFBQSw0QkFBcUIsRUFBQ0YsTUFBTUgsd0JBQXdCTztJQUVwRCxPQUFPQTtBQUNUO0FBRU8sU0FBU2hCLDhCQUE4QlksSUFBSTtRQUFFSyx3QkFBQUEsaUVBQXdCLEVBQUU7SUFDNUVILElBQUFBLDRCQUFxQixFQUFDRixNQUFNRiw0QkFBNEJPO0lBRXhELE9BQU9BO0FBQ1Q7QUFFTyxTQUFTYiw4QkFBOEJRLElBQUk7UUFBRU0sd0JBQUFBLGlFQUF3QixFQUFFO0lBQzVFSixJQUFBQSw0QkFBcUIsRUFBQ0YsTUFBTUQsNEJBQTRCTztJQUV4RCxPQUFPQTtBQUNUO0lBRUEsV0FBZTtJQUNiakIseUJBQUFBO0lBQ0FDLDBCQUFBQTtJQUNBQywyQkFBQUE7SUFDQUMsK0JBQUFBO0FBQ0YifQ==