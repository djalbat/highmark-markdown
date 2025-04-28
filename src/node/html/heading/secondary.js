"use strict";

import HeadingHTMLNode from "../../../node/html/heading";

export default class SecondaryHeadingHTMLNode extends HeadingHTMLNode {
  static lines = 2.5;

  static tagName = "h2";

  static className = null;

  static fromNothing() { return HeadingHTMLNode.fromNothing(SecondaryHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HeadingHTMLNode.fromOuterNode(SecondaryHeadingHTMLNode, outerNode); }
}
