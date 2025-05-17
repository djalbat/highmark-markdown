"use strict";

import CSSNode from "../../node/css";

export default class IdentifierCSSNode extends CSSNode {
  content() { return this.outerNode.content(); }

  asCSS(context) {
    const content = this.content(),
          css = content; ///

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(IdentifierCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(IdentifierCSSNode, outerNode); }
}
