"use strict";

import HTMLNode from "../../node/html";

export default class StrongTextHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(StrongTextHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(StrongTextHTMLNode, outerNode); }
}
