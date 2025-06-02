"use strict";

import HTMLNode from "../../../node/html";

import { EMPTY_STRING } from "../../../constants";
import { INDEX_PREPEND } from "../../../prepends";
import { HREF_ATTRIBUTE_NAME } from "../../../attributeNames";
import { remove, insertAfterwards } from "../../../utilities/dom";
import { INDEX_LINK_MARKDOWN_RULE_NAME } from "../../../ruleNames/markdown";

export default class IndexLinkHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, pageNumber) {
    super(outerNode, parentNode, childNodes, domElement);

    this.pageNumber = pageNumber;
  }

  getIndexLink() {
    return this.pageNumber;
  }

  getRuleName() {
    const ruleName = INDEX_LINK_MARKDOWN_RULE_NAME;

    return ruleName;
  }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const prepend = INDEX_PREPEND,
          attributeValue = `#${prepend}-${this.pageNumber}`;

    return attributeValue;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    let domElement;

    super.mount(parentDOMElement, siblingDOMElement, context);

    domElement = this.getDOMElement();

    parentDOMElement = domElement;  ///

    const content = this.pageNumber,  ///
          textNode = document.createTextNode(content);

    domElement = textNode;  ///

    insertAfterwards(domElement, parentDOMElement);

    domElement = this.getDOMElement();

    siblingDOMElement = domElement; ///

    return siblingDOMElement;
  }

  unmount(parentDOMElement) {
    {
      let domElement;

      domElement = this.getDOMElement();

      const parentDOMElement = domElement,  ///
            lastChild = domElement.lastChild

      domElement = lastChild;  ///

      remove(domElement, parentDOMElement);
    }

    super.unmount(parentDOMElement);
  }

  asPlainText(context) {
    const plainText = EMPTY_STRING;

    return plainText;
  }

  childNodesAsHTML(indent, context) {
    const childNodesHTML = `${this.pageNumber}
`;

    return childNodesHTML;
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static tagName = "a";

  static className = "index";

  static fromPageNumber(pageNumber) {
    const indexLinkHTMLNode = HTMLNode.fromNothing(IndexLinkHTMLNode, pageNumber);

    return indexLinkHTMLNode;
  }
}
