"use strict";

import MarkdownNode from "../../node/markdown";

export default class IndexItemMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(IndexItemMarkdownNode, ruleName, childNodes, opacity); }
}
