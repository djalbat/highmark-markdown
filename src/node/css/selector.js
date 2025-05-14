"use strict";

import CSSNode from "../../node/css";

export default class SelectorCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(SelectorCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(SelectorCSSNode, outerNode); }
}
