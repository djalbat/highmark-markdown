"use strict";

import CSSNode from "../../node/css";

export default class ArgumentCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(ArgumentCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(ArgumentCSSNode, outerNode); }
}
