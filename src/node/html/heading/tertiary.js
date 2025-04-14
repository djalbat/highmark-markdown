"use strict";

import HTMLNode from "../../../node/html";

export default class TertiaryHeadingHTMLNode extends HTMLNode {
  static lines = 2.25;

  static tagName = "h3";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(TertiaryHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TertiaryHeadingHTMLNode, outerNode); }
}
