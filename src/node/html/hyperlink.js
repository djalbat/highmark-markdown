"use strict";

import HTMLNode from "../../node/html";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

export default class HyperlinkHTMLNode extends HTMLNode {
  isSimple() { return this.outerNode.isSimple(); }

  url(context) { return this.outerNode.url(context); }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const url = this.url(context),
          attributeValue = url; ///

    return attributeValue;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    super.mount(parentDOMElement, siblingDOMElement, context);

    const simple = this.isSimple();

    if (simple) {
      const url = this.url(context),
            content = url, ///
            textNode = document.createTextNode(content),
            domElement = textNode,  ///
            parentDOMElement = this.domElement, ///
            siblingDOMElement = null;

      parentDOMElement.insertBefore(domElement, siblingDOMElement)
    }
  }

  unmount(parentDOMElement, context) {
    const simple = this.isSimple();

    if (simple) {
      const parentDOMElement = this.domElement,
            firstChild = parentDOMElement.firstChild,
            domElement = firstChild;  ///

      parentDOMElement.removeChild(domElement)
    }

    super.unmount(parentDOMElement, context);
  }

  asPlainText(context) {
    let plainText;

    const simple = this.isSimple();

    if (simple) {
      const url = this.url(context);

      plainText = url; ///
    } else {
      plainText = super.asPlainText(context);
    }

    return plainText;
  }

  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    const simple = this.isSimple();

    if (simple) {
      const url = this.url(context);

      childNodesHTML = `${url}
`;
    } else {
      childNodesHTML = super.childNodesAsHTML(indent, context);
    }

    return childNodesHTML;
  }

  static fromNothing() { return HTMLNode.fromNothing(HyperlinkHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(HyperlinkHTMLNode, outerNode); }
}
