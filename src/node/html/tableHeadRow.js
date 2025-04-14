"use strict";

import HTMLNode from "../../node/html";

export default class TableHeadRowHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(TableHeadRowHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableHeadRowHTMLNode, outerNode); }
}
