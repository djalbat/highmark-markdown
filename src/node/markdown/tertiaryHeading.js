"use strict";

import MarkdownNode from "../../node/markdown";

export default class TertiaryHeadingMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TertiaryHeadingMarkdownNode, ruleName, childNodes, opacity); }
}
