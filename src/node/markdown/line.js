"use strict";

import MarkdownNode from "../../node/markdown";

export default class LineMarkdownNode extends MarkdownNode {
  lines(context) {
    const { charactersPerLine } = context,
          plainText = this.asPlainText(context),
          plainTextLength = plainText.length,
          characters = plainTextLength, ///
          lines = (characters / charactersPerLine) + 1;

    return lines;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(LineMarkdownNode, ruleName, childNodes, opacity); }
}
