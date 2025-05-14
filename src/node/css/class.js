"use strict";

import CSSNode from "../../node/css";

export default class ClassCSSNode extends CSSNode {
  asCSS(context) {
    let css;

    css = super.asCSS(context);

    css = `.${css}`;

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(ClassCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(ClassCSSNode, outerNode); }
}
