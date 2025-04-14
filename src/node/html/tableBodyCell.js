"use strict";

import HTMLNode from "../../node/html";

export default class TableBodyCellHTMLNode extends HTMLNode {
  static tagName = "td";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(TableBodyCellHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableBodyCellHTMLNode, outerNode); }
}
