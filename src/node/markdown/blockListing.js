"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first, second } = arrayUtilities;

export default class BlockListingMarkdownNode extends MarkdownNode {
  content(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          blockTextMarkdownNode = secondChildNode,  ///
          content = blockTextMarkdownNode.content(context);

    return content;
  }

  getClassName() {
    let className = super.getClassName();

    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          blockListingStartMarkdownNode = firstChildNode, ///
          blockListingStartMarkdownNodeClassName = blockListingStartMarkdownNode.getClassName();

    if (blockListingStartMarkdownNodeClassName !== null) {
      className = `${className} ${blockListingStartMarkdownNodeClassName}`;
    }

    return className;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockListingMarkdownNode, ruleName, childNodes, opacity); }
}
