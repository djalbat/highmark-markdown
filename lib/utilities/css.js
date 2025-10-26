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
    get default () {
        return _default;
    },
    get nestedRuleSetCSSNodesFromNode () {
        return nestedRuleSetCSSNodesFromNode;
    },
    get ruleSetCSSNodesFromNode () {
        return ruleSetCSSNodesFromNode;
    },
    get selectorsCSSNodesFromNode () {
        return selectorsCSSNodesFromNode;
    },
    get selectorsListCSSNodesFromNode () {
        return selectorsListCSSNodesFromNode;
    }
});
var _occamquery = require("occam-query");
var _query = require("../utilities/query");
var ruleSetCSSNodesQuery = _occamquery.Query.fromExpressionString("/*/ruleSet"), selectorsCSSNodesQuery = _occamquery.Query.fromExpressionString("/selectorsList/selectors"), nestedRuleSetCSSNodesQuery = _occamquery.Query.fromExpressionString("/*//ruleSet"), selectorsListCSSNodesQuery = _occamquery.Query.fromExpressionString("/*//ruleSet/selectorsList"); ///
function ruleSetCSSNodesFromNode(node) {
    var ruleSetCSSNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, ruleSetCSSNodesQuery, ruleSetCSSNodes);
    return ruleSetCSSNodes;
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
    selectorsCSSNodesFromNode: selectorsCSSNodesFromNode,
    selectorsListCSSNodesFromNode: selectorsListCSSNodesFromNode
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgeyBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHJ1bGVTZXRDU1NOb2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvKi9ydWxlU2V0XCIpLFxuICAgICAgc2VsZWN0b3JzQ1NTTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL3NlbGVjdG9yc0xpc3Qvc2VsZWN0b3JzXCIpLFxuICAgICAgbmVzdGVkUnVsZVNldENTU05vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8qLy9ydWxlU2V0XCIpLFxuICAgICAgc2VsZWN0b3JzTGlzdENTU05vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8qLy9ydWxlU2V0L3NlbGVjdG9yc0xpc3RcIik7IC8vL1xuXG5leHBvcnQgZnVuY3Rpb24gcnVsZVNldENTU05vZGVzRnJvbU5vZGUobm9kZSwgcnVsZVNldENTU05vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIHJ1bGVTZXRDU1NOb2Rlc1F1ZXJ5LCBydWxlU2V0Q1NTTm9kZXMpO1xuXG4gIHJldHVybiBydWxlU2V0Q1NTTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RvcnNDU1NOb2Rlc0Zyb21Ob2RlKG5vZGUsIHNlbGVjdG9yc0NTU05vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIHNlbGVjdG9yc0NTU05vZGVzUXVlcnksIHNlbGVjdG9yc0NTU05vZGVzKTtcblxuICByZXR1cm4gc2VsZWN0b3JzQ1NTTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXN0ZWRSdWxlU2V0Q1NTTm9kZXNGcm9tTm9kZShub2RlLCBuZXN0ZWRSdWxlU2V0Q1NTTm9kZXMgPSBbXSkge1xuICBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkobm9kZSwgbmVzdGVkUnVsZVNldENTU05vZGVzUXVlcnksIG5lc3RlZFJ1bGVTZXRDU1NOb2Rlcyk7XG5cbiAgcmV0dXJuIG5lc3RlZFJ1bGVTZXRDU1NOb2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yc0xpc3RDU1NOb2Rlc0Zyb21Ob2RlKG5vZGUsIHNlbGVjdG9yc0xpc3RDU1NOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBzZWxlY3RvcnNMaXN0Q1NTTm9kZXNRdWVyeSwgc2VsZWN0b3JzTGlzdENTU05vZGVzKTtcblxuICByZXR1cm4gc2VsZWN0b3JzTGlzdENTU05vZGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJ1bGVTZXRDU1NOb2Rlc0Zyb21Ob2RlLFxuICBzZWxlY3RvcnNDU1NOb2Rlc0Zyb21Ob2RlLFxuICBzZWxlY3RvcnNMaXN0Q1NTTm9kZXNGcm9tTm9kZVxufTtcbiJdLCJuYW1lcyI6WyJuZXN0ZWRSdWxlU2V0Q1NTTm9kZXNGcm9tTm9kZSIsInJ1bGVTZXRDU1NOb2Rlc0Zyb21Ob2RlIiwic2VsZWN0b3JzQ1NTTm9kZXNGcm9tTm9kZSIsInNlbGVjdG9yc0xpc3RDU1NOb2Rlc0Zyb21Ob2RlIiwicnVsZVNldENTU05vZGVzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwic2VsZWN0b3JzQ1NTTm9kZXNRdWVyeSIsIm5lc3RlZFJ1bGVTZXRDU1NOb2Rlc1F1ZXJ5Iiwic2VsZWN0b3JzTGlzdENTU05vZGVzUXVlcnkiLCJub2RlIiwicnVsZVNldENTU05vZGVzIiwibm9kZXNGcm9tTm9kZUFuZFF1ZXJ5Iiwic2VsZWN0b3JzQ1NTTm9kZXMiLCJuZXN0ZWRSdWxlU2V0Q1NTTm9kZXMiLCJzZWxlY3RvcnNMaXN0Q1NTTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW1DQTtlQUFBOztRQVpnQkE7ZUFBQUE7O1FBWkFDO2VBQUFBOztRQU1BQztlQUFBQTs7UUFZQUM7ZUFBQUE7OzswQkEzQk07cUJBRWdCO0FBRXRDLElBQU1DLHVCQUF1QkMsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsZUFDbERDLHlCQUF5QkYsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsNkJBQ3BERSw2QkFBNkJILGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLGdCQUN4REcsNkJBQTZCSixpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyw4QkFBOEIsR0FBRztBQUV4RixTQUFTTCx3QkFBd0JTLElBQUk7UUFBRUMsa0JBQUFBLGlFQUFrQixFQUFFO0lBQ2hFQyxJQUFBQSw0QkFBcUIsRUFBQ0YsTUFBTU4sc0JBQXNCTztJQUVsRCxPQUFPQTtBQUNUO0FBRU8sU0FBU1QsMEJBQTBCUSxJQUFJO1FBQUVHLG9CQUFBQSxpRUFBb0IsRUFBRTtJQUNwRUQsSUFBQUEsNEJBQXFCLEVBQUNGLE1BQU1ILHdCQUF3Qk07SUFFcEQsT0FBT0E7QUFDVDtBQUVPLFNBQVNiLDhCQUE4QlUsSUFBSTtRQUFFSSx3QkFBQUEsaUVBQXdCLEVBQUU7SUFDNUVGLElBQUFBLDRCQUFxQixFQUFDRixNQUFNRiw0QkFBNEJNO0lBRXhELE9BQU9BO0FBQ1Q7QUFFTyxTQUFTWCw4QkFBOEJPLElBQUk7UUFBRUssd0JBQUFBLGlFQUF3QixFQUFFO0lBQzVFSCxJQUFBQSw0QkFBcUIsRUFBQ0YsTUFBTUQsNEJBQTRCTTtJQUV4RCxPQUFPQTtBQUNUO0lBRUEsV0FBZTtJQUNiZCx5QkFBQUE7SUFDQUMsMkJBQUFBO0lBQ0FDLCtCQUFBQTtBQUNGIn0=