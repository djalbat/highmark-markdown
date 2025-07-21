"use strict";

import MarkdownNode from "../../node/markdown";

export default class BlockEndMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(BlockEndMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
