"use strict";

import HTMLNode from "../../html";

export default class TertiaryHeadingHTMLNode extends HTMLNode {
  static lines = 2.25;

  static fromNothing() { return HTMLNode.fromNothing(TertiaryHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TertiaryHeadingHTMLNode, outerNode); }
}
