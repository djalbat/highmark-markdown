"use strict";

import HTMLNode from "../../../node/html";

import { HREF_ATTRIBUTE_NAME } from "../../../attributeNames";

export default class EmailLinkHTMLNode extends HTMLNode {
  isSimple() { return this.outerNode.isSimple(); }

  emailAddress(context) { return this.outerNode.emailAddress(context); }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const emailAddress = this.emailAddress(context),
          attributeValue = `mailto:${emailAddress}`;

    return attributeValue;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    super.mount(parentDOMElement, siblingDOMElement, context);

    const simple = this.isSimple();

    if (simple) {
      const emailAddress = this.emailAddress(context),
            content = emailAddress, ///
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
      const emailAddress = this.emailAddress(context);

      plainText = emailAddress; ///
    } else {
      plainText = super.asPlainText(context);
    }

    return plainText;
  }

  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    const simple = this.isSimple();

    if (simple) {
      const emailAddress = this.emailAddress(context);

      childNodesHTML = `${emailAddress}
`;
    } else {
      childNodesHTML = super.childNodesAsHTML(indent, context);
    }

    return childNodesHTML;
  }

  static tagName = "a";

  static className = "email-link";

  static fromNothing() { return HTMLNode.fromNothing(EmailLinkHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(EmailLinkHTMLNode, outerNode); }
}
