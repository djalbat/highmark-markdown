"use strict";

import MarkdownNode from "../../node/markdown";

export default class BlockListingMarkdownNode extends MarkdownNode {
  className(context) {
    let className = super.className(context);

    const blockListingStartMarkdownNodeClassName = this.fromFirstChildNode((firstChildNode) => {
      const blockListingStartMarkdownNode = firstChildNode, ///
            blockListingStartMarkdownNodeClassName = blockListingStartMarkdownNode.className(context);

      return blockListingStartMarkdownNodeClassName;
    });

    if (blockListingStartMarkdownNodeClassName !== null) {
      className = `${className} ${blockListingStartMarkdownNodeClassName}`;
    }

    return className;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockListingMarkdownNode, ruleName, childNodes, opacity); }
}
