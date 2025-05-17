"use strict";

import HTMLNode from "../../../node/html";

export default class IndexDirectiveHTMLNode extends HTMLNode {
  static tagName = null;

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(IndexDirectiveHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(IndexDirectiveHTMLNode, outerNode); }
}
