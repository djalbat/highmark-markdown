"use strict";

import HTMLNode from "../../node/html";
import { insertAfterwards } from "../../utilities/dom";

export default class ErrorHTMLNode extends HTMLNode {
  error(context) { return this.outerNode.error(context); }

  createDOMElement(context) {
    let domElement;

    const error = this.error(context),
          content = error,  ///
          textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context)

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    insertAfterwards(domElement, parentDOMElement);

    domElement = parentDOMElement;  ///

    return domElement;
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

  asPlainText(context) {
    const error = this.error(context),
          plainText = error;  ///

    return plainText;
  }

  childNodesAsHTML(indent, context) {
    const error = this.error(context),
          childNodesHTML = error; ///

    return childNodesHTML;
  }

  static tagName = "span";

  static className = "error";

  static fromNothing() { return HTMLNode.fromNothing(ErrorHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ErrorHTMLNode, outerNode); }
}
