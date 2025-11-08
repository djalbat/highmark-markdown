"use strict";

import CSSNode from "../../node/css";

export default class ContentCSSNode extends CSSNode {
  target(context) {
    const markdownStyleNode = this.getMarkdownStyleNode(),
          targetMarkdownStyleNode = markdownStyleNode,  ///
          target = targetMarkdownStyleNode.target(context);

    return target;
  }

  static fromNothing() { return CSSNode.fromNothing(ContentCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(ContentCSSNode, outerNode); }
}
