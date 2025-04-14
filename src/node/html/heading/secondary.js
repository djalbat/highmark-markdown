"use strict";

import HTMLNode from "../../../node/html";

export default class SecondaryHeadingHTMLNode extends HTMLNode {
  static lines = 2.5;

  static tagName = "h2";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(SecondaryHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(SecondaryHeadingHTMLNode, outerNode); }
}
