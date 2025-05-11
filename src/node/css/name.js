"use strict";

import CSSNode from "../../node/css";

export default class NameCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(NameCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(NameCSSNode, outerNode); }
}
