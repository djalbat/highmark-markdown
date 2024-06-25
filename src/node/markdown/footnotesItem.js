"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import AnchorMarkdownNode from "../../node/markdown/anchor";

import { FOOTNOTE_PREPEND } from "../../prepends";
import { FOOTNOTES_ITEM_RULE_NAME } from "../../ruleNames";

const { second } = arrayUtilities;

export default class FootnotesItemMarkdownNode extends MarkdownNode {
  static fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier) {
    const prepend = FOOTNOTE_PREPEND,
          anchorMarkdownNode = AnchorMarkdownNode.fromPrependAndIdentifier(prepend, identifier),
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
