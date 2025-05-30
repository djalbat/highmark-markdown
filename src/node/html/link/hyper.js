"use strict";

import HTMLNode from "../../../node/html";

import { HREF_ATTRIBUTE_NAME } from "../../../attributeNames";
import { remove, insertAfter, insertAfterwards, insertBeforehand } from "../../../utilities/dom";

export default class HyperlinkHTMLNode extends HTMLNode {
  isSimple() {
    const markdownNode = this.getMarkdownNode(),
          simple = markdownNode.isSimple();

    return simple;
  }

  url(context) {
    const markdownNode = this.getMarkdownNode(),
          url = markdownNode.url(context);

    return url;
  }

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

      insertAfterwards(domElement, parentDOMElement);
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
            firstChild = domElement.firstChild;

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
