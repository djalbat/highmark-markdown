"use strict";

import HeadingHTMLNode from "../../../node/html/heading";

export default class PrimaryHeadingHTMLNode extends HeadingHTMLNode {
  static depth = 1;

  static lines = 3;

  static tagName = "h1";

  static className = null;

  static fromNothing() { return HeadingHTMLNode.fromNothing(PrimaryHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HeadingHTMLNode.fromOuterNode(PrimaryHeadingHTMLNode, outerNode); }
}
