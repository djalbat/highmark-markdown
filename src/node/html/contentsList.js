"use strict";

import HTMLNode from "../../node/html";

export default class ContentsListHTMLNode extends HTMLNode {
  asPlainText(context) {
    const plainText = null;

    return plainText;
  }

  static fromNothing() { return HTMLNode.fromNothing(ContentsListHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ContentsListHTMLNode, outerNode); }
}
