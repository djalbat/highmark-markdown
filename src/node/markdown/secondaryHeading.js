"use strict";

import MarkdownNode from "../../node/markdown";

export default class SecondaryHeadingMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(SecondaryHeadingMarkdownNode, ruleName, childNodes, opacity); }
}
