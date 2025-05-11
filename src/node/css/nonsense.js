"use strict";

import CSSNode from "../../node/css";

export default class NonsenseCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(NonsenseCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(NonsenseCSSNode, outerNode); }
}
