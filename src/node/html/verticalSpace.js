"use strict";

import HTMLNode from "../../node/html";

export default class VerticalSpaceHTMLNode extends HTMLNode {
  asHTML(indent, context) {
    const content = this.content(context),
          html = content;  ///

    return html;
  }

  asPlainText(context) {
    const content = this.content(context),
          plainText = content;  ///

    return plainText;
  }

  createDOMElement(context) {
    const content = this.content(context),
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    return domElement;
  }

  static lines = 0;

  static fromNothing() { return HTMLNode.fromNothing(VerticalSpaceHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(VerticalSpaceHTMLNode, outerNode); }
}
