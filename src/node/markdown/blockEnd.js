"use strict";

import MarkdownNode from "../../node/markdown";

export default class BlockEndMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(BlockEndMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
