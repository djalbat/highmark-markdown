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

      const { tokens, firstSignificantTokenIndex, lastSignificantTokenIndex, whitespaceTokenIndexes } = context,
            index = tokens.indexOf(significantToken),
            nextIndex = index + 1,
            previousIndex = index - 1;

      if (previousIndex > firstSignificantTokenIndex) {
        const previousToken = tokens[previousIndex],
              previousTokenWhitespaceToken = previousToken.isWhitespaceToken();

        if (previousTokenWhitespaceToken) {
          const whitespaceTokenIndexesIncludesPreviousIndex = whitespaceTokenIndexes.includes(previousIndex);

          if (!whitespaceTokenIndexesIncludesPreviousIndex) {
            const whitespaceToken = previousToken,  ///
                  whitespaceTokenContent = whitespaceToken.getContent(),
                  whitespace = whitespaceTokenContent;  ///

            text = `${whitespace}${text}`;

            const whitespaceTokenIndex = previousIndex;  ///

            whitespaceTokenIndexes.push(whitespaceTokenIndex);
          }
        }
      }

      if (nextIndex < lastSignificantTokenIndex) {
        const nextToken = tokens[nextIndex],
              nextTokenWhitespaceToken = nextToken.isWhitespaceToken();

        if (nextTokenWhitespaceToken) {
          const whitespaceTokenIndexesIncludesPreviousIndex = whitespaceTokenIndexes.includes(nextIndex);

          if (!whitespaceTokenIndexesIncludesPreviousIndex) {
            const whitespaceToken = nextToken,  ///
                  whitespaceTokenContent = whitespaceToken.getContent(),
                  whitespace = whitespaceTokenContent;  ///

            text = `${text}${whitespace}`;

            const whitespaceTokenIndex = nextIndex;  ///

            whitespaceTokenIndexes.push(whitespaceTokenIndex);
          }
        }
      }

      return text;
    });

    return text;
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity); }
}
