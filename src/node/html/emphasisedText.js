"use strict";

import HTMLNode from "../../node/html";

export default class EmphasisedTextHTMLNode extends HTMLNode {
  createDOMElement(context) {
    const inlineText = this.inlineText(context),
          content = inlineText; ///

    let domElement;

    const textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context);

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  static fromNothing() { return HTMLNode.fromNothing(EmphasisedTextHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(EmphasisedTextHTMLNode, outerNode); }
}
