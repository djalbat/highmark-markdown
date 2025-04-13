"use strict";

import HTMLNode from "../../node/html";

export default class TableCellHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(TableCellHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableCellHTMLNode, outerNode); }
}
