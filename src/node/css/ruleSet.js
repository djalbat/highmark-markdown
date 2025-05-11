"use strict";

import CSSNode from "../../node/css";

export default class RuleSetCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(RuleSetCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(RuleSetCSSNode, outerNode); }
}
