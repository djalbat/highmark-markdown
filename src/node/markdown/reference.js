"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { second } = arrayUtilities;

export default class ReferenceMarkdownNode extends MarkdownNode {
  getIdentifier() {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          textMarkdownNode = secondChildNode,  ///
          textMarkdownNodeContent = textMarkdownNode.getContent(),
          identifier = textMarkdownNodeContent; ///

    return identifier;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(ReferenceMarkdownNode, ruleName, childNodes, ambiguous); }
}
