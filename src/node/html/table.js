"use strict";

import HTMLNode from "../../node/html";

export default class TableHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(TableHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableHTMLNode, outerNode); }
}
