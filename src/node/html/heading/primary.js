"use strict";

import HeadingHTMLNode from "../../../node/html/heading";

export default class PrimaryHeadingHTMLNode extends HeadingHTMLNode {
  static lines = 3;

  static fromNothing() { return HeadingHTMLNode.fromNothing(PrimaryHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HeadingHTMLNode.fromOuterNode(PrimaryHeadingHTMLNode, outerNode); }
}
