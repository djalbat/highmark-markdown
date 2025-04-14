"use strict";

import HTMLNode from "../../node/html";

import { ID_ATTRIBUTE_NAME } from "../../attributeNames";

export default class AnchorHTMLNode extends HTMLNode {
  attributeName(context) {
    const attributeName = ID_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = `${this.prepend}-${this.identifier}`;

    return attributeValue;
  }

  asHTML(indent, context) {
    if (context === undefined) {
      context = indent; ///

      indent = null;
    }

    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = (indent === null) ?
                   `${startingTag}${childNodesHTML}${closingTag}` :
                     `${indent}${startingTag}
  ${childNodesHTML}${indent}${closingTag}
  `;

    return html;
  }

  createDOMElement(context) {
    let domElement;

    const content = this.content(context),
          textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context)

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  // childNodesAsHTML(indent, context) {
  //   const content = this.content(context),
  //         childNodesHTML = content; ///
  //
  //   return childNodesHTML;
  // }

  static tagName = "a";

  static className = "anchor";

  static fromNothing() { return HTMLNode.fromNothing(AnchorHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(AnchorHTMLNode, outerNode); }
}
