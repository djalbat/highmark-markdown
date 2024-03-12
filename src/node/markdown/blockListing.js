"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first, second } = arrayUtilities;

export default class BlockListingMarkdownNode extends MarkdownNode {
  getContent() {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          blockTextMarkdownNode = secondChildNode,  ///
          content = blockTextMarkdownNode;  ///

    return content;
  }

  getClassName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          blockListingStartMarkdownNode = firstChildNode, ///
          className = blockListingStartMarkdownNode.getClassName(); ///

    return className;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(BlockListingMarkdownNode, ruleName, childNodes, ambiguous); }
}
