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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(ColourMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
