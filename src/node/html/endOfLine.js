"use strict";

import HTMLNode from "../../node/html";

export default class EndOfLineHTMLNode extends HTMLNode {
  asHTML(indent, context) {
    const content = this.content(context),
          html = content;  ///

    return html;
  }

  static fromNothing() { return HTMLNode.fromNothing(EndOfLineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(EndOfLineHTMLNode, outerNode); }
}
