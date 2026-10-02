"use strict";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";

export default class XMLTagNameMarkdownNode extends MarkdownNode {
  tagName(context) {
    const tagName = this.reduceChildNode((tagName, firstChildNode) => {
      const terminalNode = firstChildNode,  ///
            terminalNodeContent = terminalNode.getContent();

      tagName = `${tagName}${terminalNodeContent}`;

      return tagName;
    }, EMPTY_STRING);

    return tagName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(XMLTagNameMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
