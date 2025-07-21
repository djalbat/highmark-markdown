"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class IdentifierMarkdownStyleNode extends MarkdownStyleNode {
  content() {
    const content = this.reduceChildNode((content, childNode) => {
      const terminalNode = childNode,  ///
            terminalNodeContent = terminalNode.getContent();

      content = (content !== null) ?
                 `${content}${terminalNodeContent}` :
                    terminalNodeContent;  ///

      return content;
    }, null);

    return content;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(IdentifierMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
