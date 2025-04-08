"use strict";

import HTMLNode from "../../node/html";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

export default class EmailLinkHTMLNode extends HTMLNode {
  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const emailAddress = this.emailAddress(context),
          attributeValue = `mailto:${emailAddress}`;

    return attributeValue;
  }

  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    const inlineText = this.inlineText(context);

    let content;

    if (inlineText !== null) {
      content = inlineText;  ///
    } else {
      content = this.content(context);
    }

    childNodesHTML = content; ///

    return childNodesHTML;
  }

  createDOMElement(context) {
    let domElement;

    let content;

    const inlineText = this.inlineText(context);

    if (inlineText !== null) {
      content = inlineText; ///
    } else {
      content = this.content(context);
    }

    const textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context);

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  static fromNothing() { return HTMLNode.fromNothing(EmailLinkHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(EmailLinkHTMLNode, outerNode); }
}
