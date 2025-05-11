"use strict";

import CSSNode from "../../node/css";

export default class ClassCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(ClassCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(ClassCSSNode, outerNode); }
}
