"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ColourMarkdownStyleNode extends MarkdownStyleNode {
  content() {
    const content = this.fromFirstChildNode((firstChildNode) => {
      const terminalNode = firstChildNode,  ///
            content = terminalNode.getContent();

      return content;
    });

    return content;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(ColourMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
