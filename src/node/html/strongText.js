"use strict";

import HTMLNode from "../../node/html";

export default class StrongTextHTMLNode extends HTMLNode {
  content(context) {
    const inlineText = this.inlineText(context),
          content = inlineText; ///

    return content;
  }

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

    const content = this.content(context),
          textNode = document.createTextNode(content);

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
