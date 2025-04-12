"use strict";

import MarkdownNode from "../../node/markdown";
import PlainTextMarkdownNode from "./text/plain";

export default class LineMarkdownNode extends MarkdownNode {
  isEndPlainText(context) {
    const endPlainText = this.fromFirstLastChildNode((firstLastChildNode) => {
      const endMarkdownNode = firstLastChildNode, ///
            endMarkdownNodePlainTextNode = (endMarkdownNode instanceof PlainTextMarkdownNode),
            endPlainText = endMarkdownNodePlainTextNode;  ///

      return endPlainText;
    });

    return endPlainText;
  }

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
