"use strict";

import HTMLNode from "../../node/html";

export default class TextHTMLNode extends HTMLNode {
  text(content) { return this.outerNode.text(content); }

  createDOMElement(context) {
    const text = this.text(context),
          content = text, ///
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    return domElement;
  }

  asHTML(indent, context) {
    const text = this.text(context),
          html = text; ///

    return html;
  }

  asPlainText(context) {
    const text = this.text(context),
          plainText = text; ///

    return plainText;
  }

  static fromNothing(Class) { return HTMLNode.fromNothing(Class); }

  static fromOuterNode(Class, outerNode) { return HTMLNode.fromOuterNode(Class, outerNode); }
}
