"use strict";

import MarkdownNode from "../../node/markdown";

export default class BlockListingMarkdownNode extends MarkdownNode {
  className(context) {
    const className = this.fromFirstChildNode((firstChildNode) => {
      const blockStartMarkdownNode = firstChildNode, ///
            className = blockStartMarkdownNode.className(context);

      return className;
    });

    return className;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockListingMarkdownNode, ruleName, childNodes, opacity); }
}
