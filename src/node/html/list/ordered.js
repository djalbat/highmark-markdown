"use strict";

import HTMLNode from "../../../node/html";

export default class OrderedListHTMLNode extends HTMLNode {
  static tagName = "ol";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(OrderedListHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(OrderedListHTMLNode, outerNode); }
}
