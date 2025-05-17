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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(IdentifierMarkdownStyleNode, ruleName, childNodes, opacity); }
}
