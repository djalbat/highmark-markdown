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

      let { tokenIndex } = context;

      const { tokens } = context,
            tokensLength = tokens.length,
            minimumTokenIndex = 0,
            maximumTokenIndex = tokensLength - 1,
            significantTokenIndex = tokens.indexOf(significantToken),
            previousTokenIndex = significantTokenIndex - 1,
            nextTokenIndex = significantTokenIndex + 1,
            lastTokenIndex = tokenIndex;  ///

      for (tokenIndex = previousTokenIndex; tokenIndex >= minimumTokenIndex; tokenIndex--) {
        if (tokenIndex === lastTokenIndex) {
          break;
        }

        const token = tokens[tokenIndex],
              tokenWhitespaceToken = token.isWhitespaceToken();

        if (!tokenWhitespaceToken) {
          break;
        }

        const whitespaceTokenContent = token.getContent();

        text = `${whitespaceTokenContent}${text}`;
      }

      for (tokenIndex = nextTokenIndex; tokenIndex <= maximumTokenIndex; tokenIndex++) {
        const token = tokens[tokenIndex],
              tokenWhitespaceToken = token.isWhitespaceToken();

        if (!tokenWhitespaceToken) {
          break;
        }

        const whitespaceTokenContent = token.getContent();

        text = `${text}${whitespaceTokenContent}`;
      }

      Object.assign(context, {
        tokenIndex
      });

      return text;
    });

    return text;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
    if (precedence === undefined) {
      precedence = opacity; ///

      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = TextMarkdownNode; ///
    }

    const textMarkdownNode = MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);

    return textMarkdownNode;
  }
}
