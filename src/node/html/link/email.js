"use strict";

import HTMLNode from "../../../node/html";

import { HREF_ATTRIBUTE_NAME } from "../../../attributeNames";
import { remove, insertAfter, insertAfterwards, insertBeforehand } from "../../../utilities/dom";

export default class EmailLinkHTMLNode extends HTMLNode {
  isSimple() { return this.outerNode.isSimple(); }

  content(context) {
    const emailAddress = this.emailAddress(context),
          content = emailAddress; ///

    return content;
  }

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
    let domElement;

    const simple = this.isSimple();

    if (!simple) {
      super.mount(parentDOMElement, siblingDOMElement, context);
    } else {
      domElement = this.createDOMElement(context);

      this.setDOMElement(domElement);

      (siblingDOMElement !== null) ?
        insertAfter(domElement, parentDOMElement, siblingDOMElement) :
          insertBeforehand(domElement, parentDOMElement);

      parentDOMElement = domElement; ///

      const content = this.content(context),
            textNode = document.createTextNode(content);

      domElement = textNode;  ///

      insertAfterwards(domElement, parentDOMElement, siblingDOMElement);
    }

    domElement = this.getDOMElement();

    siblingDOMElement = domElement; ///

    return siblingDOMElement;
  }

  unmount(parentDOMElement, context) {
    const simple = this.isSimple();

    if (!simple) {
      super.unmount(parentDOMElement, context);

      return;
    }

    let domElement;

    {
      domElement = this.getDOMElement();

      const parentDOMElement = domElement,  ///
            firstChild = domElement.firstChild

      domElement = firstChild;  ///

      remove(domElement, parentDOMElement);
    }

    domElement = this.getDOMElement();

    remove(domElement, parentDOMElement);

    this.resetDOMElement();
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
