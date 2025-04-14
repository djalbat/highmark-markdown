"use strict";

import HTMLNode from "../../node/html";

export default class TableHeadHTMLNode extends HTMLNode {
  static tagName = "thead";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(TableHeadHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableHeadHTMLNode, outerNode); }
}
