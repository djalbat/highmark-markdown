"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { second } = arrayUtilities;

export default class LinkMarkdownNode extends MarkdownNode {
  asHTML(indent, context, number = null) {
    let html;

    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context, number);

    if (childNodesHTML !== null) {
      const startingTag = this.startingTag(context),
            closingTag = this.closingTag(context);

      html = (indent === null) ?
              `${startingTag}${childNodesHTML}${closingTag}` :
                `${indent}${startingTag}
${childNodesHTML}${indent}${closingTag}
`;
    } else {
      const selfClosingTag = this.selfClosingTag(context);

      html = (indent === null) ?
               selfClosingTag :  ///
`${indent}${selfClosingTag}
`;
    }

    return html;
  }

  childNodesAsHTML(indent, context, number) {
    const childNodesHTML = (number === null) ?
                             null :
                              `${number}`;

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    ///
  }

  identifier(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          identifierTerminalNode = secondChildNode,  ///
          identifierTerminalNodeContent = identifierTerminalNode.getContent(),
          identifier = identifierTerminalNodeContent; ///

    return identifier;
  }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const identifier = this.identifier(context),
          attributeValue = `#${identifier}`; ///

    return attributeValue;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(LinkMarkdownNode, ruleName, childNodes, opacity); }
}
