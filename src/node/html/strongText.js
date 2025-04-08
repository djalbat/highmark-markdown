"use strict";

import HTMLNode from "../../node/html";

export default class StrongTextHTMLNode extends HTMLNode {
  inlineText(context) {
    const inlineText = this.fromSecondChildNode((secondChildNode) => {
      const indent = null,
          inlineTextMarkdownNode = secondChildNode, ///
          inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context),
          inlineText = inlineTextMarkdownNodeHTML;  ///

      return inlineText;
    });

    return inlineText;
  }

  createDOMElement(context) {
    let domElement;

    const inlineText = this.inlineText(context),
          content = inlineText; ///

    const textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context);

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  static fromNothing() { return HTMLNode.fromNothing(StrongTextHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(StrongTextHTMLNode, outerNode); }
}
