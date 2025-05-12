"use strict";

import CSSNode from "../../node/css";

export default class IdentifierCSSNode extends CSSNode {
  name() { return this.outerNode.name(); }

  asCSS(context) {
    const name = this.name(),
          css = name; ///

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(IdentifierCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(IdentifierCSSNode, outerNode); }
}
