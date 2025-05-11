"use strict";

import CSSNode from "../../node/css";

export default class PseudoClassCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(PseudoClassCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(PseudoClassCSSNode, outerNode); }
}
