"use strict";

import HTMLNode from "../../node/html";

export default class IndexListHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(IndexListHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(IndexListHTMLNode, outerNode); }
}
