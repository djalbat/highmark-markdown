"use strict";

import CSSNode from "../../node/css";

export default class ColourCSSNode extends CSSNode {
  content() { return this.outerNode.content(); }

  asCSS(context) {
    const content = this.content(),
          css = content; ///

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(ColourCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(ColourCSSNode, outerNode); }
}