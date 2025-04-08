"use strict";

import MarkdownNode from "../../node/markdown";

import { contentFromNode } from "../../utilities/content";

export default class BlockLineMarkdownNode extends MarkdownNode {
  lines(context) {
    const { charactersPerLine } = context,
          plainText = this.asPlainText(context),
          plainTextLength = plainText.length,
          characters = plainTextLength, ///
          lines = (characters / charactersPerLine) + 1;

    return lines;
  }

  content(context) {
    let content;

    const { tokens } = context,
          node = this;  ///

    content = contentFromNode(node, context);

    const firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens),
          previousTokenIndex = firstSignificantTokenIndex - 1,
          previousToken = tokens[previousTokenIndex],
          previousTokenWhitespaceToken = previousToken.isWhitespaceToken();

    if (previousTokenWhitespaceToken) {
      const whitespaceToken = previousToken,  ///
            whitespaceTokenContent = whitespaceToken.getContent();

      content = `${whitespaceTokenContent}${content}`;
    }

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockLineMarkdownNode, ruleName, childNodes, opacity); }
}
