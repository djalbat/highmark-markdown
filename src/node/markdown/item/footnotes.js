"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../../node/markdown";
import AnchorMarkdownNode from "../../../node/markdown/anchor";

import { FOOTNOTE_PREPEND } from "../../../prepends";
import { FOOTNOTES_ITEM_RULE_NAME } from "../../../ruleNames";

const { first } = arrayUtilities;

export default class FootnotesItemMarkdownNode extends MarkdownNode {
  static fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier) {
    const prepend = FOOTNOTE_PREPEND,
          anchorMarkdownNode = AnchorMarkdownNode.fromPrependAndIdentifier(prepend, identifier),
          secondFootnoteMarkdownNodeChildNode = removeSecondChildNode(footnoteMarkdownNode),
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

function removeSecondChildNode(markdownNode) {
  const startIndex = 1,
        deleteCount = 1,
        removedChildNodes = markdownNode.spliceChildNodes(startIndex, deleteCount),
        firstRemovedChildNode = first(removedChildNodes),
        secondChildNode = firstRemovedChildNode; ///

  return secondChildNode;
}
