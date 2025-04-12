"use strict";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";
import { ESCAPED_TOKEN_TYPE } from "../../tokenTypes";

export default class TextMarkdownNode extends MarkdownNode {
  content(context) {
    const { tokens } = context;

    let { whitespaceTokenIndex } = context;

    const content = this.fromFirstChildNode((firstChildNode) => {
      let content = EMPTY_STRING;

      const terminalNode = firstChildNode,  ///
            significantToken = terminalNode.getSignificantToken(),
            significantTokenIndex = tokens.indexOf(significantToken),
            previousTokenIndex = significantTokenIndex - 1;

      if (previousTokenIndex > -1) {
        const previousToken = tokens[previousTokenIndex],
              previousTokenWhitespaceToken = previousToken.isWhitespaceToken();

        if (previousTokenWhitespaceToken) {
          if (previousTokenIndex > whitespaceTokenIndex) {
            const whitespaceToken = previousToken,  ///
                  whitespaceTokenContent = whitespaceToken.getContent();

            content = `${content}${whitespaceTokenContent}`;

            whitespaceTokenIndex = previousTokenIndex;  ///
          }
        }
      }

      let significantTokenContent = significantToken.getContent();

      const significantTokenType = significantToken.getType();

      if (significantTokenType === ESCAPED_TOKEN_TYPE) {
        const start = 1;

        significantTokenContent = significantTokenContent.substring(start);
      }

      content = `${content}${significantTokenContent}`;

      const tokensLength = tokens.length,
            nextTokenIndex = significantTokenIndex + 1;

      if (nextTokenIndex < tokensLength) {
        const nextToken = tokens[nextTokenIndex],
              nextTokenWhitespaceToken = nextToken.isWhitespaceToken();

        if (nextTokenWhitespaceToken) {
          if (nextTokenIndex > whitespaceTokenIndex) {
            const whitespaceToken = nextToken,  ///
                  whitespaceTokenContent = whitespaceToken.getContent();

            content = `${content}${whitespaceTokenContent}`;

            whitespaceTokenIndex = nextTokenIndex;  ///
          }
        }
      }

      return content;
    });

    Object.assign(context, {
      whitespaceTokenIndex
    });

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity); }
}
