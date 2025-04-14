"use strict";

import HTMLNode from "../../node/html";

export default class TableHeadRowHTMLNode extends HTMLNode {
  static tagName = "tr";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(TableHeadRowHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableHeadRowHTMLNode, outerNode); }
}
