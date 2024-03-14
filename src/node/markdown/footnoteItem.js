"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import AnchorMarkdownNode from "../../node/markdown/anchor";

import { FOOTNOTE_ITEM_RULE_NAME } from "../../ruleNames";

const { first, second } = arrayUtilities;

export default class FootnoteItemMarkdownNode extends MarkdownNode {
  identifier(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          anchorMarkdownNode = firstChildNode,  ///
          identifier = anchorMarkdownNode.getIdentifier();

    return identifier;
  }

  static fromFootnoteMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier) {
    const anchorMarkdownNode = AnchorMarkdownNode.fromIdentifier(identifier),
          footnoteMarkdownNodeChildNodes = footnoteMarkdownNode.getChildNodes(),
          secondFootnoteMarkdownNodeChildNode = second(footnoteMarkdownNodeChildNodes),
          paragraphMarkdownNode = secondFootnoteMarkdownNodeChildNode,  ///
          ruleName = FOOTNOTE_ITEM_RULE_NAME,
          childNodes = [
            anchorMarkdownNode,
            paragraphMarkdownNode
          ],
          ambiguous = false,
          footnoteItemMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndAmbiguous(FootnoteItemMarkdownNode, ruleName, childNodes, ambiguous);

    return footnoteItemMarkdownNode;
  }
}
