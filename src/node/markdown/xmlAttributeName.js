"use strict";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";

export default class XMLAttributeNameMarkdownNode extends MarkdownNode {
  attributeName(context) {
    const attributeName = this.reduceChildNode((attributeName, firstChildNode) => {
      const terminalNode = firstChildNode,  ///
            terminalNodeContent = terminalNode.getContent();

      attributeName = `${attributeName}${terminalNodeContent}`;

      return attributeName;
    }, EMPTY_STRING);

    return attributeName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(XMLAttributeNameMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
