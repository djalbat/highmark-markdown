"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import AnchorMarkdownNode from "../../node/markdown/anchor";

import { FOOTNOTES_ITEM_RULE_NAME } from "../../ruleNames";

const { first, second } = arrayUtilities;

export default class FootnotesItemMarkdownNode extends MarkdownNode {
  identifier(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          anchorMarkdownNode = firstChildNode,  ///
          identifier = anchorMarkdownNode.getIdentifier();

    return identifier;
  }

  static fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier) {
    const anchorMarkdownNode = AnchorMarkdownNode.fromIdentifier(identifier),
          footnoteMarkdownNodeChildNodes = footnoteMarkdownNode.getChildNodes(),
          secondFootnoteMarkdownNodeChildNode = second(footnoteMarkdownNodeChildNodes),
          paragraphMarkdownNode = secondFootnoteMarkdownNodeChildNode,  ///
          ruleName = FOOTNOTES_ITEM_RULE_NAME,
          childNodes = [
            anchorMarkdownNode,
            paragraphMarkdownNode
          ],
          opacity = null,
          footnotesItemMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesItemMarkdownNode, ruleName, childNodes, opacity);

    return footnotesItemMarkdownNode;
  }
}
