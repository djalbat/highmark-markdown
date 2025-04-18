"use strict";

import HTMLNode from "../../node/html";

export default class DivisionHTMLNode extends HTMLNode {
  className(context) { return this.outerNode.className(context); }

  static tagName = "div";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(DivisionHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(DivisionHTMLNode, outerNode); }
}
