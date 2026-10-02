"use strict";

import TextMarkdownNode from "../../../node/markdown/text";

export default class BlockTextMarkdownNode extends TextMarkdownNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return TextMarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(BlockTextMarkdownNode, ruleName, childNodes, precedence, opacity); }
}