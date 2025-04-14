"use strict";

import HTMLNode from "../../node/html";

export default class TableBodyRowHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(TableBodyRowHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableBodyRowHTMLNode, outerNode); }
}
