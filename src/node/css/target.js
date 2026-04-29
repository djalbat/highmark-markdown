"use strict";

import CSSNode from "../../node/css";

export default class ContentCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(ContentCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(ContentCSSNode, outerNode); }
}
