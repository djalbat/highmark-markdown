"use strict";

import MarkdownNode from "../../node/markdown";

export default class HeadingMarkdownNode extends MarkdownNode {
  getDepth() {
    const { depth } = this.constructor;

    return depth;
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity); }
}

