"use strict";

import HTMLNode from "../../node/html";

export default class TableBodyCellHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(TableBodyCellHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableBodyCellHTMLNode, outerNode); }
}
