"use strict";

import CSSNode from "../../node/css";

export default class SelectorsListCSSNode extends CSSNode {
  static fromNothing() { return CSSNode.fromNothing(SelectorsListCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(SelectorsListCSSNode, outerNode); }
}
