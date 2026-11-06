"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

import { EMPTY_STRING } from "../../constants";
import { removeNewLines } from "../../utilities/string";

export default class ContentMarkdownStyleNode extends MarkdownStyleNode {
  content(context) {
    const firstTokenIndex = this.getFirstTokenIndex(context),
          lastTokenIndex = this.getLastTokenIndex(context),
          start = firstTokenIndex,  ///
          end = lastTokenIndex + 1;

    let { tokens } = context;

    tokens = tokens.slice(start, end);

    let content = EMPTY_STRING;

    tokens.forEach((token) => {
      const tokenContent = token.getContent();

      content += tokenContent;
    });

    content = removeNewLines(content);

    return content;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesPrecedenceAndOpacity(ContentMarkdownStyleNode, ruleName, childNodes, precedence, opacity); }
}
