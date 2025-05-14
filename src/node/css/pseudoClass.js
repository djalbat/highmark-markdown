"use strict";

import CSSNode from "../../node/css";

export default class PseudoClassCSSNode extends CSSNode {
  asCSS(context) {
    let css;

    css = super.asCSS(context);

    css = `:${css}`;

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(PseudoClassCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(PseudoClassCSSNode, outerNode); }
}
