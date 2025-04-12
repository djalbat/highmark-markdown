"use strict";

import MarkdownNode from "../../node/markdown";
import BlockTextMarkdownNode from "./text/block";

export default class BlockLineMarkdownNode extends MarkdownNode {
  isEndBlockText(context) {
    const endBlockText = this.fromFirstLastChildNode((firstLastChildNode) => {
      const endMarkdownNode = firstLastChildNode, ///
            endMarkdownNodeBlockTextNode = (endMarkdownNode instanceof BlockTextMarkdownNode),
            endBlockText = endMarkdownNodeBlockTextNode;  ///

      return endBlockText;
    });

    return endBlockText;
  }

  lines(context) {
    const { charactersPerLine } = context,
          plainText = this.asPlainText(context),
          plainTextLength = plainText.length,
          characters = plainTextLength, ///
          lines = (characters / charactersPerLine) + 1;

    return lines;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockLineMarkdownNode, ruleName, childNodes, opacity); }
}
