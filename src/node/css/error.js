"use strict";

import CSSNode from "../../node/css";

export default class ErrorCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(ErrorCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(ErrorCSSNode, outerNode); }
}
