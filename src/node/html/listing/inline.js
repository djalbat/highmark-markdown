"use strict";

import HTMLNode from "../../../node/html";

import { insertAfterwards } from "../../../utilities/dom";

export default class InlineListingHTMLNode extends HTMLNode {
  content(context) { return this.outerNode.content(context); }

  createDOMElement(context) {
    let domElement;

    const content = this.content(context),
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

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  childNodesAsPlainText(indent, context) {
    const content = this.content(context),
          childNodesPlainText = content; ///

    return childNodesPlainText;
  }

  static tagName = "code";

  static className = "inline";

  static fromNothing() { return HTMLNode.fromNothing(InlineListingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(InlineListingHTMLNode, outerNode); }
}
