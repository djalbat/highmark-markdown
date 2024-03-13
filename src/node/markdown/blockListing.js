"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first, second } = arrayUtilities;

export default class BlockListingMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          blockTextMarkdownNode = secondChildNode,  ///
          childNodesHTML = blockTextMarkdownNode.asHTML(indent, context);

    return childNodesHTML;
  }

  getContent(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          blockTextMarkdownNode = secondChildNode,  ///
          content = blockTextMarkdownNode.getContent(context);

    return content;
  }

  getClassName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          blockListingStartMarkdownNode = firstChildNode, ///
          className = blockListingStartMarkdownNode.getClassName();

    return className;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(BlockListingMarkdownNode, ruleName, childNodes, ambiguous); }
}
