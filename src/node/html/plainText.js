"use strict";

import HTMLNode from "../../node/html";

export default class PlainTextHTMLNode extends HTMLNode {
  asHTML(indent, context) {
    const content = this.content(context),
          html = content; ///

    return html;
  }

  static fromNothing() { return HTMLNode.fromNothing(PlainTextHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(PlainTextHTMLNode, outerNode); }
}
