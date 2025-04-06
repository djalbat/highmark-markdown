"use strict";

import HTMLNode from "../../node/html";

export default class InlineTextHTMLNode extends HTMLNode {
  asHTML(indent, context) {
    const content = this.content(context),
          html = content; ///

    return html;
  }

  createDOMElement(context) {
    const content = this.content(context),
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    return domElement;
  }

  static fromNothing() { return HTMLNode.fromNothing(InlineTextHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(InlineTextHTMLNode, outerNode); }
}
