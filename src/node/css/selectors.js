"use strict";

import CSSNode from "../../node/css";

export default class SelectorsCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(SelectorsCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(SelectorsCSSNode, outerNode); }
}
