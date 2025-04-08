"use strict";

import HTMLNode from "../../node/html";

import { CARRIAGE_RETURN } from "../../constants";

export default class EndOfLineHTMLNode extends HTMLNode {
  content(context) {
    const content = CARRIAGE_RETURN;

    return content;
  }

  asHTML(indent, context) {
    const content = this.content(context),
          html = content;  ///

    return html;
  }

  createDOMElement(context) {
    const content = this.content(context),
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    return domElement;
  }

  asPlainText(context) {
    const content = this.content(context),
          plainText = content;  ///

    return plainText;
  }

  static lines = 0;

  static fromNothing() { return HTMLNode.fromNothing(EndOfLineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(EndOfLineHTMLNode, outerNode); }
}
