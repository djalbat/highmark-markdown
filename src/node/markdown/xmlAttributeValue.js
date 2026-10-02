"use strict";

import MarkdownNode from "../../node/markdown";

import { trim } from "../../utilities/stringLiteral";

export default class XMLAttributeValueMarkdownNode extends MarkdownNode {
  attributeValue(context) {
    const attributeValue = this.fromFirstChildNode((firstChildNode) => {
      const terminalNode = firstChildNode,  ///
            terminalNodeContent = terminalNode.getContent(),
            attributeValue = trim(terminalNodeContent);  ///

      return attributeValue;
    })

    return attributeValue;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(XMLAttributeValueMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
