"use strict";

import HTMLNode from "../../../node/html";

import { insertAfter } from "../../../utilities/dom";
import { HREF_ATTRIBUTE_NAME } from "../../../attributeNames";

export default class HyperlinkHTMLNode extends HTMLNode {
  isSimple() { return this.outerNode.isSimple(); }

  url(context) { return this.outerNode.url(context); }

  content(context) {
    const url = this.url(context),
          content = url;  ///

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

  mount(parentDOMElement, siblingDOMElement, context) {
    const simple = this.isSimple();

    if (!simple) {
      super.mount(parentDOMElement, siblingDOMElement, context);

      return;
    }

    let domElement;

    domElement = this.createDOMElement(context);

    this.setDOMElement(domElement);

    insertAfter(domElement, parentDOMElement, siblingDOMElement);

    parentDOMElement = domElement; ///

    siblingDOMElement = null;

    const content = this.content(context),
          textNode = document.createTextNode(content);

    domElement = textNode;  ///

    insertAfter(domElement, parentDOMElement, siblingDOMElement);
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

      parentDOMElement.removeChild(domElement);
    }

    domElement = this.getDOMElement();

    parentDOMElement.removeChild(domElement);

    this.resetDOMElement();
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

  static tagName = "a";

  static className = "hyperlink";

  static fromNothing() { return HTMLNode.fromNothing(HyperlinkHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(HyperlinkHTMLNode, outerNode); }
}
