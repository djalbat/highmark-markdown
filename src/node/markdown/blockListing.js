"use strict";

import MarkdownNode from "../../node/markdown";

export default class BlockListingMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
      const childNodesHTML = this.childNodesAsHTML(indent, context),
            startingTag = this.startingTag(context),
            closingTag = this.closingTag(context),
            html = `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

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
