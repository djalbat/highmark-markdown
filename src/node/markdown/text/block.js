"use strict";

import TextMarkdownNode from "../../../node/markdown/text";

export default class BlockTextMarkdownNode extends TextMarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return TextMarkdownNode.fromRuleNameChildNodesAndOpacity(BlockTextMarkdownNode, ruleName, childNodes, opacity); }
}