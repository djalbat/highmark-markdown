"use strict";

import CSSNode from "../../node/css";

export default class ValueCSSNode extends CSSNode {
  asCSS(context) {
    let css;

    css = super.asCSS(context);

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(ValueCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(ValueCSSNode, outerNode); }
}
