"use strict";

import MarkdownNode from "../../node/markdown";

export default class PlainTextMarkdownNode extends MarkdownNode {
  content(context) {
    const content = this.fromFirstChildNode((firstChildNode) => {
      const terminalNode = firstChildNode,  ///
            content = terminalNode.getContent();

      return content;
    });

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(PlainTextMarkdownNode, ruleName, childNodes, opacity); }
}
