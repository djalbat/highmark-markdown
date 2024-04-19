"use strict";

import MarkdownNode from "../../node/markdown";

export default class BulletMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BulletMarkdownNode, ruleName, childNodes, opacity); }
}
