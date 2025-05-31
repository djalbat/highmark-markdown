"use strict";

import MarkdownNode from "../../node/markdown";

import { ESCAPED_TOKEN_TYPE } from "../../tokenTypes";

export default class TextMarkdownNode extends MarkdownNode {
  text(context) {
    const text = this.fromFirstChildNode((firstChildNode) => {
      let text;

      const terminalNode = firstChildNode,  ///
            significantToken = terminalNode.getSignificantToken(),
            significantTokenType = significantToken.getType(),
            significantTokenContent = significantToken.getContent();

      text = significantTokenContent; ///

      if (significantTokenType === ESCAPED_TOKEN_TYPE) {
        const start = 1;

        text = text.substring(start);
      }

      const { tokens } = context,
            significantTokenIndex = tokens.indexOf(significantToken),
            lastIndex = significantTokenIndex - 1,
            firstIndex = 0;

      for (let index = lastIndex; index >= firstIndex; index++) {
        const token = tokens[index],
              tokenWhitespaceToken = token.isWhitespaceToken();

        if (!tokenWhitespaceToken) {
          break;
        }

        const whitespaceToken = token,
              whitespaceTokenContent = whitespaceToken.getContent();

        text = `${whitespaceTokenContent}${text}`;
      }

      return text;
    });

    return text;
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) {
    if (opacity === undefined) {
      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = TextMarkdownNode; ///
    }

    const textMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity);

    return textMarkdownNode;
  }
}
