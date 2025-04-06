"use strict";

import HTMLNode from "../../node/html";

export default class CommaHTMLNode extends HTMLNode {
  asHTML(indent, context) {
    const content = this.content(context),
          html = content; ///

    return html;
  }

  static fromNothing() { return HTMLNode.fromNothing(CommaHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(CommaHTMLNode, outerNode); }
}
