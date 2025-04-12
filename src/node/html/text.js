"use strict";

import HTMLNode from "../../node/html";

export default class TextHTMLNode extends HTMLNode {
  createDOMElement(context) {
    const content = this.content(context),
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    return domElement;
  }

  asHTML(indent, context) {
    const content = this.content(context),
          html = content; ///

    return html;
  }

  asPlainText(context) {
    const content = this.content(context),
          plainText = content; ///

    return plainText;
  }

  static fromNothing(Class) { return HTMLNode.fromNothing(Class); }

  static fromOuterNode(Class, outerNode) { return HTMLNode.fromOuterNode(Class, outerNode); }
}
