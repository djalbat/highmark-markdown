"use strict";

import CSSNode from "../../node/css";

export default class ArgumentCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(ArgumentsCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(ArgumentsCSSNode, outerNode); }
}
