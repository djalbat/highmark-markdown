"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class StringMarkdownStyleNode extends MarkdownStyleNode {
  content() {
    const content = this.fromFirstChildNode((firstChildNode) => {
      const terminalNode = firstChildNode,  ///
            content = terminalNode.getContent();

      return content;
    });

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(StringMarkdownStyleNode, ruleName, childNodes, opacity); }
}
