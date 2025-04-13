"use strict";

import HeadingHTMLNode from "../../../node/html/heading";

export default class QuaternaryHeadingHTMLNode extends HeadingHTMLNode {
  static lines = 2;

  static fromNothing() { return HeadingHTMLNode.fromNothing(QuaternaryHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HeadingHTMLNode.fromOuterNode(QuaternaryHeadingHTMLNode, outerNode); }
}
