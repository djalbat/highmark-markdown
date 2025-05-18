"use strict";

import CSSNode from "../../node/css";

import { COLOUR } from "../../constants";

export default class NameCSSNode extends CSSNode {
  asCSS(context) {
    let css = super.asCSS(context);

    css = css.replace(/colour/g, COLOUR);

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(NameCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(NameCSSNode, outerNode); }
}
