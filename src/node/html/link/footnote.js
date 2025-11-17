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
    this.unmountNumber();

    this.number = number;

    this.mountNumber();
  }

  resetNumber() {
    const number = null;

    this.setNumber(number);
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

  adjustIndent(indent) {
    indent = null;

    return indent;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    const domElement = this.createDOMElement(context);

    this.setDOMElement(domElement);

    (siblingDOMElement !== null) ?
      insertAfter(domElement, parentDOMElement, siblingDOMElement) :
        insertBeforehand(domElement, parentDOMElement);

    this.mountNumber();

    siblingDOMElement = domElement; ///

    return siblingDOMElement;
  }

  unmount(parentDOMElement) {
    const domElement = this.getDOMElement();

    this.unmountNumber();

    remove(domElement, parentDOMElement);

    this.resetDOMElement();
  }

  asPlainText(context) {
    const plainText = EMPTY_STRING;

    return plainText;
  }

  childNodesAsHTML(indent, context) {
    const content = this.number,  ///
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  mountNumber() {
    if (this.number === null) {
      return;
    }

    let domElement;

    domElement = this.getDOMElement();

    if (domElement === null) {
      return;
    }

    const parentDOMElement = domElement, ///
          content = this.number,  ///
          textNode = document.createTextNode(content);

    domElement = textNode;  ///

    insertAfterwards(domElement, parentDOMElement);
  }

  unmountNumber() {
    if (this.number === null) {
      return;
    }

    let domElement;

    domElement = this.getDOMElement();

    if (domElement === null) {
      return;
    }

    const parentDOMElement = domElement,  ///
          firstChild = domElement.firstChild;

    domElement = firstChild;  ///

    remove(domElement, parentDOMElement);
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
