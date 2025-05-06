"use strict";

import HeadingHTMLNode from "../../../node/html/heading";

export default class QuaternaryHeadingHTMLNode extends HeadingHTMLNode {
  static depth = 4;

  static lines = 2;

  static tagName = "h4";

  static className = null;

  static fromNothing() { return HeadingHTMLNode.fromNothing(QuaternaryHeadingHTMLNode); }

  static fromOuterNode(outerNode) { return HeadingHTMLNode.fromOuterNode(QuaternaryHeadingHTMLNode, outerNode); }
}
