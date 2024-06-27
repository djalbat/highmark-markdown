"use strict";

import MarkdownNode from "../../node/markdown";

export default class IndexHeadingMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(IndexHeadingMarkdownNode, ruleName, childNodes, opacity); }
}
