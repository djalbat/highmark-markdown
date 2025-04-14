"use strict";

import HTMLNode from "../../../node/html";

export default class PrimaryHeadingHTMLNode extends HTMLNode {
  static lines = 3;

  static tagName = "h1";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(PrimaryHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(PrimaryHeadingHTMLNode, outerNode); }
}
