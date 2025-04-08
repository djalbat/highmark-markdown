"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setNonTerminalNodes", {
    enumerable: true,
    get: function() {
        return setNonTerminalNodes;
    }
});
var _occamparsers = require("occam-parsers");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../node/markdown"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var rulesFromStartRuleAndRuleMap = _occamparsers.rulesUtilities.rulesFromStartRuleAndRuleMap;
function setNonTerminalNodes(parser, nodeMap) {
    var startRule = parser.getStartRule(), ruleMap = parser.getRuleMap(), rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);
    rules.forEach(function(rule) {
        var ruleName = rule.getName(), NonTerminalNode = nodeMap[ruleName] || _markdown.default; ///
        rule.setNonTerminalNode(NonTerminalNode);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBydWxlc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd25cIjsgLy8vXG5cbmNvbnN0IHsgcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROb25UZXJtaW5hbE5vZGVzKHBhcnNlciwgbm9kZU1hcCkge1xuICBjb25zdCBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIHJ1bGVNYXAgPSBwYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICBydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBub2RlTWFwW3J1bGVOYW1lXSB8fCBNYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgcnVsZS5zZXROb25UZXJtaW5hbE5vZGUoTm9uVGVybWluYWxOb2RlKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsic2V0Tm9uVGVybWluYWxOb2RlcyIsInJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJydWxlc1V0aWxpdGllcyIsInBhcnNlciIsIm5vZGVNYXAiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGVzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJNYXJrZG93bk5vZGUiLCJzZXROb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFnQkE7OztlQUFBQTs7OzRCQU5lOytEQUVOOzs7Ozs7QUFFekIsSUFBTSxBQUFFQywrQkFBaUNDLDRCQUFjLENBQS9DRDtBQUVELFNBQVNELG9CQUFvQkcsTUFBTSxFQUFFQyxPQUFPO0lBQ2pELElBQU1DLFlBQVlGLE9BQU9HLFlBQVksSUFDL0JDLFVBQVVKLE9BQU9LLFVBQVUsSUFDM0JDLFFBQVFSLDZCQUE2QkksV0FBV0U7SUFFdERFLE1BQU1DLE9BQU8sQ0FBQyxTQUFDQztRQUNiLElBQU1DLFdBQVdELEtBQUtFLE9BQU8sSUFDdkJDLGtCQUFrQlYsT0FBTyxDQUFDUSxTQUFTLElBQUlHLGlCQUFZLEVBQUUsR0FBRztRQUU5REosS0FBS0ssa0JBQWtCLENBQUNGO0lBQzFCO0FBQ0YifQ==