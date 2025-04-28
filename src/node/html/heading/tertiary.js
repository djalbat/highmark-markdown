"use strict";

import HeadingHTMLNode from "../../../node/html/heading";

export default class TertiaryHeadingHTMLNode extends HeadingHTMLNode {
  static lines = 2.25;

  static tagName = "h3";

  static className = null;

  static fromNothing() { return HeadingHTMLNode.fromNothing(TertiaryHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HeadingHTMLNode.fromOuterNode(TertiaryHeadingHTMLNode, outerNode); }
}
