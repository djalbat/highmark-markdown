"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class FootnoteMarkdownNode extends MarkdownNode {
  identifier(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          referenceMarkdownNode = firstChildNode,  ///
          referenceMarkdownNodeIdentifier = referenceMarkdownNode.identifier(context),
          identifier = referenceMarkdownNodeIdentifier;  ///

    return identifier;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnoteMarkdownNode, ruleName, childNodes, opacity); }
}
