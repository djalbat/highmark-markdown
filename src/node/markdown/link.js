"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { second } = arrayUtilities;

export default class LinkMarkdownNode extends MarkdownNode {
  asHTML(indent, context, number = null) {
    let html;

    if (number === null) {
      const selfClosingTag = this.selfClosingTag(context);

      html = selfClosingTag;  ///
    } else {
      const startingTag = this.startingTag(context),
            closingTag = this.closingTag(context);

      html = `${startingTag}${number}${closingTag}`;
    }

    return html;
  }

  identifier(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          identifierTerminalNode = secondChildNode,  ///
          identifierTerminalNodeContent = identifierTerminalNode.getContent(),
          identifier = identifierTerminalNodeContent; ///

    return identifier;
  }

  attributeName() {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const identifier = this.identifier(context),
          attributeValue = `#${identifier}`; ///

    return attributeValue;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(LinkMarkdownNode, ruleName, childNodes, ambiguous); }
}
