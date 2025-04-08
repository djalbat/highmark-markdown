"use strict";

import HTMLNode from "../../html";

export default class SecondaryHeadingHTMLNode extends HTMLNode {
  static lines = 2.5;

  static fromNothing() { return HTMLNode.fromNothing(SecondaryHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(SecondaryHeadingHTMLNode, outerNode); }
}
