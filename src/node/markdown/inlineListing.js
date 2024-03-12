"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { second } = arrayUtilities;

export default class InlineListingMarkdownNode extends MarkdownNode {
  getContent() {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          blockTextMarkdownNode = secondChildNode,  ///
          content = blockTextMarkdownNode;  ///

    return content;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(InlineListingMarkdownNode, ruleName, childNodes, ambiguous); }
}
