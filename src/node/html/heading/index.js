"use strict";

import HTMLNode from "../../../node/html";

export default class IndexHeadingHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(IndexHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(IndexHeadingHTMLNode, outerNode); }
}
