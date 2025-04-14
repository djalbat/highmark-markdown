"use strict";

import HTMLNode from "../../../node/html";

export default class QuaternaryHeadingHTMLNode extends HTMLNode {
  static lines = 2;

  static tagName = "h4";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(QuaternaryHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(QuaternaryHeadingHTMLNode, outerNode); }
}
