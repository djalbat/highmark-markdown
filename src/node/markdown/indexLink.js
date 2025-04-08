"use strict";

import MarkdownNode from "../../node/markdown";

export default class IndexLinkMarkdownNode extends MarkdownNode {
  content(context) {
    const content = this.fromFirstChildNode((firstChildNode) => {
      const terminalNode = firstChildNode,  ///
            content = terminalNode.getContent();

      return content;
    });

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(IndexLinkMarkdownNode, ruleName, childNodes, opacity); }
}
