"use strict";

import HTMLNode from "../../node/html";

export default class TableHeadCellHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(TableHeadCellHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableHeadCellHTMLNode, outerNode); }
}
