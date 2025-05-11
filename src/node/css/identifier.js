"use strict";

import CSSNode from "../../node/css";

export default class IdentifierCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(IdentifierCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(IdentifierCSSNode, outerNode); }
}
