"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

import { removeWhitespace } from "../../utilities/string";
import { EMPTY_STRING, CARRIAGE_RETURN } from "../../constants";

export default class ContentMarkdownStyleNode extends MarkdownStyleNode {
  content(context) {
    let { tokens } = context;

    const nonTerminalNode = this, ///
          firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens),
          lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens),
          start = firstSignificantTokenIndex,
          end = lastSignificantTokenIndex + 1;

    tokens = tokens.slice(start, end);

    let content = EMPTY_STRING;

    tokens.forEach((token) => {
      const tokenContent = token.getContent();

      content += tokenContent;
    });

    content = removeWhitespace(content);

    content += CARRIAGE_RETURN;
    content += CARRIAGE_RETURN;

    return content;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(ContentMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
