"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class FootnoteMarkdownNode extends MarkdownNode {
  getIdentifier() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          referenceMarkdownNode = firstChildNode,  ///
          referenceMarkdownNodeIdentifier = referenceMarkdownNode.getIdentifier(),
          identifier = referenceMarkdownNodeIdentifier;  ///

    return identifier;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(FootnoteMarkdownNode, ruleName, childNodes, ambiguous); }
}
