"use strict";

import HTMLNode from "../../node/html";

export default class TextHTMLNode extends HTMLNode {
  text(context) { return this.outerNode.text(context); }

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

  static fromNothing(Class, ...remainingArguments) { return HTMLNode.fromNothing(Class, ...remainingArguments); }

  static fromOuterNode(Class, outerNode, ...remainingArguments) { return HTMLNode.fromOuterNode(Class, outerNode, ...remainingArguments); }
}
