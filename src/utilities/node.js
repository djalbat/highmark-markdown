"use strict";

import { rulesUtilities } from "occam-parsers";

const { rulesFromStartRuleAndRuleMap } = rulesUtilities;

export function setNonTerminalNodes(parser, nodeMap) {
  const startRule = parser.getStartRule(),
        ruleMap = parser.getRuleMap(),
        rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);

  rules.forEach((rule) => {
    const ruleName = rule.getName(),
          MarkdownNode = nodeMap[ruleName],
          NonTerminalNode = MarkdownNode; ///

    rule.setNonTerminalNode(NonTerminalNode);
  });
}

export default {
  setNonTerminalNodes
};
