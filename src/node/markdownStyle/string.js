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

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(StringMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
