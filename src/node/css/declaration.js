"use strict";

import CSSNode from "../../node/css";

export default class DeclarationCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(DeclarationCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(DeclarationCSSNode, outerNode); }
}
