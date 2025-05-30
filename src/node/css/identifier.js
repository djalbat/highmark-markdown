"use strict";

import CSSNode from "../../node/css";

export default class IdentifierCSSNode extends CSSNode {
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

  static fromNothing() { return CSSNode.fromNothing(IdentifierCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(IdentifierCSSNode, outerNode); }
}