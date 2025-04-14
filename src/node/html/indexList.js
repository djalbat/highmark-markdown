"use strict";

import HTMLNode from "../../node/html";

export default class IndexListHTMLNode extends HTMLNode {
  static tagName = "ul";

  static className = "index";

  static fromNothing() { return HTMLNode.fromNothing(IndexListHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(IndexListHTMLNode, outerNode); }
}
