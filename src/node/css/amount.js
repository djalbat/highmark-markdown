"use strict";

import CSSNode from "../../node/css";

export default class AmountCSSNode extends CSSNode {
  content() {
    const markdownStyleNode = this.getMarkdownStyleNode(),
          content = markdownStyleNode.content();

    return content;
  }

  asCSS(context) {
    const content = this.content(),
          css = content; ///

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(AmountCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(AmountCSSNode, outerNode); }
}