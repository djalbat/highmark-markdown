"use strict";

import MarkdownNode from "../../node/markdown";

export default class HeadingMarkdownNode extends MarkdownNode {
  getLevel() {
    const { level } = this.constructor;

    return level;
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity); }
}
