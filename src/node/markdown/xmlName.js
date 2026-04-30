"use strict";

import MarkdownNode from "../../node/markdown";

export default class XMLNameMarkdownNode extends MarkdownNode {
  tagName(context) {
    const tagName = this.fromFirstChildNode((firstChildNode) => {
      const terminalNode = firstChildNode,  ///
            terminalNodeContent = terminalNode.getContent(),
            tagName = terminalNodeContent;  ///

      return tagName;
    })

    return tagName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(XMLNameMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
