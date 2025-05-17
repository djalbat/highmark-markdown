"use strict";

import HTMLNode from "../../node/html";

export default class FootnoteHTMLNode extends HTMLNode {
  identifier(context) { return this.outerNode.identifier(context); }

  static tagName = null;

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(FootnoteHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(FootnoteHTMLNode, outerNode); }
}
