"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class RuleNameMarkdownStyleNode extends MarkdownStyleNode {
  markdownRuleName() {
    const markdownRuleName = this.fromFirstChildNode((firstChildNode) => {
      const ruleNameTerminalNode = firstChildNode,  ///
            ruleNameTerminalNodeContent = ruleNameTerminalNode.getContent(),
            markdownRuleName = ruleNameTerminalNodeContent; ///

      return markdownRuleName;
    });

    return markdownRuleName;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(RuleNameMarkdownStyleNode, ruleName, childNodes, opacity); }
}
