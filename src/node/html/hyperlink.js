"use strict";

import HTMLNode from "../../node/html";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

export default class HyperlinkHTMLNode extends HTMLNode {
  content(context) {
    let content;

    const inlineText = this.inlineText(context);

    if (inlineText !== null) {
      content = inlineText; ///
    } else {
      content = super.content(context);
    }

    return content;
  }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const url = this.url(context),
          attributeValue = url; ///

    return attributeValue;
  }

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  createDOMElement(context) {
    let domElement;

    const content = this.content(context),
          textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context);

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  static fromNothing() { return HTMLNode.fromNothing(HyperlinkHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(HyperlinkHTMLNode, outerNode); }
}
