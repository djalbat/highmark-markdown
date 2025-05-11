"use strict";

import CSSNode from "../../node/css";

export default class ValuesCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(ValuesCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(ValuesCSSNode, outerNode); }
}
