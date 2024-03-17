"use strict";

import MarkdownNode from "../../node/markdown";

export default class QuaternaryHeadingMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(QuaternaryHeadingMarkdownNode, ruleName, childNodes, opacity); }
}
