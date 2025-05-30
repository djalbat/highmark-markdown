"use strict";

import HTMLNode from "../../node/html";

export default class FootnoteHTMLNode extends HTMLNode {
  identifier(context) {
    const markdownNode = this.getMarkdownNode(),
          identifier = markdownNode.identifier(context);

    return identifier;
  }

  static tagName = null;

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(FootnoteHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(FootnoteHTMLNode, outerNode); }
}
