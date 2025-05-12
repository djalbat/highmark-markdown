"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class SelectorMarkdownStyleNode extends MarkdownStyleNode {
  markdownRuleName() {
    const markdownRuleName = this.fromFirstChildNode((firstChildNode) => {
      let markdownRuleName = null;

      const firstChildNodeTerminalNode = firstChildNode.isTerminalNode();

      if (firstChildNodeTerminalNode) {
        const terminalNode = firstChildNode,  ///
              ruleNameTerminalNode = terminalNode,  ///
              content = ruleNameTerminalNode.getContent();

        markdownRuleName = content; ///
      }

      return markdownRuleName;
    });

    return markdownRuleName;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(SelectorMarkdownStyleNode, ruleName, childNodes, opacity); }
}
