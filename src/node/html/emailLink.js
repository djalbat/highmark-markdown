"use strict";

import HTMLNode from "../../node/html";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

export default class EmailLinkHTMLNode extends HTMLNode {
  content(context) {
    return null;
  }

  emailAddress(context) {
    return null;
  }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const emailAddress = this.emailAddress(context),
          attributeValue = `mailto:${emailAddress}`;

    return attributeValue;
  }

  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = `${indent}${startingTag}
${childNodesHTML}${indent}${closingTag}
`;

    return html;
  }

  static fromNothing() { return HTMLNode.fromNothing(EmailLinkHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(EmailLinkHTMLNode, outerNode); }
}
