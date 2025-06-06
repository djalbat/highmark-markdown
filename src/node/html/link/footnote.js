"use strict";

import HTMLNode from "../../../node/html";

import { EMPTY_STRING } from "../../../constants";
import { FOOTNOTE_PREPEND } from "../../../prepends";
import { HREF_ATTRIBUTE_NAME } from "../../../attributeNames";
import { remove, insertAfter, insertAfterwards, insertBeforehand } from "../../../utilities/dom";

export default class FootnoteLinkHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, number) {
    super(outerNode, parentNode, childNodes, domElement);

    this.number = number;
  }

  getNumber() {
    return this.number;
  }

  setNumber(number) {
    this.number = number;
  }

  resetNumber() {
    this.number = null;
  }

  content(context) {
    const content = this.number;  ///

    return content;
  }

  identifier(context) {
    const markdownNode = this.getMarkdownNode(),
          identifier = markdownNode.identifier(context);

    return identifier;
  }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const prepend = FOOTNOTE_PREPEND,
          identifier = this.identifier(context),
          attributeValue = `#${prepend}-${identifier}`; ///

    return attributeValue;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    if (this.number !== null) {
      let domElement;

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

      domElement = this.getDOMElement();

      siblingDOMElement = domElement; ///
    }

    return siblingDOMElement;
  }

  unmount(parentDOMElement) {
    if (this.number !== null) {
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
  }

  asHTML(indent, context) {
    let html;

    if (this.number === null) {
      html = EMPTY_STRING;
    } else {
      indent = this.adjustIndent(indent);

      const childNodesHTML = this.childNodesAsHTML(indent, context),
            startingTag = this.startingTag(context),
            closingTag = this.closingTag(context);

      html = `${indent}${startingTag}${childNodesHTML}${closingTag}
`;
    }

    return html;
  }

  asPlainText(context) {
    const plainText = EMPTY_STRING;

    return plainText;
  }

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  static tagName = "a";

  static className = "footnote";

  static fromNothing() {
    const number = null,
          footnoteLinkHTMLNode = HTMLNode.fromNothing(FootnoteLinkHTMLNode, number);

    return footnoteLinkHTMLNode;
  }

  static fromOuterNode(outerNode) {
    const number = null,
          footnoteLinkHTMLNode = HTMLNode.fromOuterNode(FootnoteLinkHTMLNode, outerNode, number);

    return footnoteLinkHTMLNode;
  }
}
