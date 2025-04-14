"use strict";

import HTMLNode from "../../../node/html";

export default class IndexHeadingHTMLNode extends HTMLNode {
  static tagName = "h3";

  static className = "index";

  static fromNothing() { return HTMLNode.fromNothing(IndexHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(IndexHeadingHTMLNode, outerNode); }
}
