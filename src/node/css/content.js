"use strict";

import CSSNode from "../../node/css";

export default class ContentCSSNode extends CSSNode {
  asCSS(context) {
    const markdownStyleNode = this.getMarkdownStyleNode(),
          contentMarkdownStyleNode = markdownStyleNode,  ///
          content = contentMarkdownStyleNode.content(context);

    return content;
  }

  static fromNothing() { return CSSNode.fromNothing(ContentCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(ContentCSSNode, outerNode); }
}
