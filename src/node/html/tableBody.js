"use strict";

import HTMLNode from "../../node/html";

export default class TableBodyHTMLNode extends HTMLNode {
  static tagName = "tbody";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(TableBodyHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableBodyHTMLNode, outerNode); }
}
