"use strict";

import HTMLNode from "../../../node/html";

export default class OrderedListHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(OrderedListHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(OrderedListHTMLNode, outerNode); }
}
