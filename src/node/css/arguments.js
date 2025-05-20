"use strict";

import CSSNode from "../../node/css";

export default class ArgumentCSSNode extends CSSNode {
  asCSS(context) {
    let css;

    css = super.asCSS(context);

    css = `(${css})`;

    return css;
  }
  static fromNothing() { return CSSNode.fromNothing(ArgumentsCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(ArgumentCSSNode, outerNode); }
}
