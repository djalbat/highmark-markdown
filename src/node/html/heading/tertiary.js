"use strict";

import HeadingHTMLNode from "../../../node/html/heading";

export default class TertiaryHeadingHTMLNode extends HeadingHTMLNode {
  static lines = 2.25;

  static fromNothing() { return HeadingHTMLNode.fromNothing(TertiaryHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HeadingHTMLNode.fromOuterNode(TertiaryHeadingHTMLNode, outerNode); }
}
