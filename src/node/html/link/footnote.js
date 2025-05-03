"use strict";

import HTMLNode from "../../../node/html";

import { EMPTY_STRING } from "../../../constants";
import { FOOTNOTE_PREPEND } from "../../../prepends";
import { HREF_ATTRIBUTE_NAME } from "../../../attributeNames";

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

  content(context) {
    const content = (this.number !== null) ?
                      this.number :
                        EMPTY_STRING;

    return content;
  }

  // clear() {
  //   if (this.domElement === null) {
  //     return;
  //   }
  //
  //   const { lastChild = null } = this.domElement;
  //
  //   if (lastChild !== null) {
  //     const domElement = lastChild,  ///
  //           parentDOMElement = this.domElement;
  //
  //     parentDOMElement.removeChild(domElement);
  //   }
  // }
  //
  // update(context) {
  //   if (this.domElement === null) {
  //     return;
  //   }
  //
  //   const content = this.content(context);
  //
  //   if (content !== EMPTY_STRING) {
  //     const textNode  = document.createTextNode(content),
  //           domElement = textNode,  ///
  //           parentDOMElement = this.domElement; ///
  //
  //     parentDOMElement.appendChild(domElement);
  //   }
  // }
  //
  // renumber(number, context) {
  //   this.setNumber(number);
  //
  //   this.clear();
  //
  //   this.update(context);
  // }

  identifier(context) { return this.outerNode.identifier(context); }

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
    let domElement;

    domElement = this.createDOMElement(context);

    this.setDOMElement(domElement);

    parentDOMElement.insertBefore(domElement, siblingDOMElement);

    parentDOMElement = domElement; ///

    siblingDOMElement = null;

    const content = this.content(context),
          textNode = document.createTextNode(content);

    domElement = textNode;  ///

    parentDOMElement.insertBefore(domElement, siblingDOMElement);
  }

  unmount(parentDOMElement, context) {
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

  asHTML(indent, context) {
    let html;

    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context);

    html = `${indent}${startingTag}${childNodesHTML}${closingTag}
`;

    return html;
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
