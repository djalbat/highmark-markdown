"use strict";

import MarkdownNode from "../../node/markdown";

export default class LineBreakMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(LineBreakMarkdownNode, ruleName, childNodes, opacity); }
}
