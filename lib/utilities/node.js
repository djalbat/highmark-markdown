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
    setNonTerminalNodes: function() {
        return setNonTerminalNodes;
    }
});
var _occamparsers = require("occam-parsers");
var rulesFromStartRuleAndRuleMap = _occamparsers.rulesUtilities.rulesFromStartRuleAndRuleMap;
function setNonTerminalNodes(parser, nodeMap) {
    var startRule = parser.getStartRule(), ruleMap = parser.getRuleMap(), rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);
    rules.forEach(function(rule) {
        var ruleName = rule.getName(), MarkdownNode = nodeMap[ruleName], NonTerminalNode = MarkdownNode; ///
        rule.setNonTerminalNode(NonTerminalNode);
    });
}
var _default = {
    setNonTerminalNodes: setNonTerminalNodes
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAgfSA9IHJ1bGVzVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0Tm9uVGVybWluYWxOb2RlcyhwYXJzZXIsIG5vZGVNYXApIHtcbiAgY29uc3Qgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICBydWxlTWFwID0gcGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgTWFya2Rvd25Ob2RlID0gbm9kZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgIHJ1bGUuc2V0Tm9uVGVybWluYWxOb2RlKE5vblRlcm1pbmFsTm9kZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldE5vblRlcm1pbmFsTm9kZXNcbn07XG4iXSwibmFtZXMiOlsic2V0Tm9uVGVybWluYWxOb2RlcyIsInJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJydWxlc1V0aWxpdGllcyIsInBhcnNlciIsIm5vZGVNYXAiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGVzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJNYXJrZG93bk5vZGUiLCJOb25UZXJtaW5hbE5vZGUiLCJzZXROb25UZXJtaW5hbE5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW9CQSxPQUVFO2VBRkY7O0lBZGdCQSxtQkFBbUI7ZUFBbkJBOzs7NEJBSmU7QUFFL0IsSUFBTSxBQUFFQywrQkFBaUNDLDRCQUFjLENBQS9DRDtBQUVELFNBQVNELG9CQUFvQkcsTUFBTSxFQUFFQyxPQUFPO0lBQ2pELElBQU1DLFlBQVlGLE9BQU9HLFlBQVksSUFDL0JDLFVBQVVKLE9BQU9LLFVBQVUsSUFDM0JDLFFBQVFSLDZCQUE2QkksV0FBV0U7SUFFdERFLE1BQU1DLE9BQU8sQ0FBQyxTQUFDQztRQUNiLElBQU1DLFdBQVdELEtBQUtFLE9BQU8sSUFDdkJDLGVBQWVWLE9BQU8sQ0FBQ1EsU0FBUyxFQUNoQ0csa0JBQWtCRCxjQUFjLEdBQUc7UUFFekNILEtBQUtLLGtCQUFrQixDQUFDRDtJQUMxQjtBQUNGO0lBRUEsV0FBZTtJQUNiZixxQkFBQUE7QUFDRiJ9