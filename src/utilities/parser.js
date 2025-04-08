"use strict";

import { rulesUtilities } from "occam-parsers";

import MarkdownNode from "../node/markdown"; ///

const { rulesFromStartRuleAndRuleMap } = rulesUtilities;

export function setNonTerminalNodes(parser, nodeMap) {
  const startRule = parser.getStartRule(),
        ruleMap = parser.getRuleMap(),
        rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);

  rules.forEach((rule) => {
    const ruleName = rule.getName(),
          NonTerminalNode = nodeMap[ruleName] || MarkdownNode; ///

    rule.setNonTerminalNode(NonTerminalNode);
  });
}
