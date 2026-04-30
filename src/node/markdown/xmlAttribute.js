"use strict";

import MarkdownNode from "../../node/markdown";

import { trim } from "../../utilities/stringLiteral";

export default class XMLAttributeMarkdownNode extends MarkdownNode {
  attributeName(context) {
    const attributeName = this.fromFirstChildNode((firstChildNode) => {
      const terminalNode = firstChildNode,  ///
            terminalNodeContent = terminalNode.getContent(),
            attributeName = terminalNodeContent;

      return attributeName;
    });

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = this.fromFirstLastChildNode((firstLastChildNode) => {
      const terminalNode = firstLastChildNode,  ///
            terminalNodeContent = terminalNode.getContent(),
            attributeValue = trim(terminalNodeContent); ///

      return attributeValue;
    });

    return attributeValue;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(XMLAttributeMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
