"use strict";

import TextMarkdownNode from "../../../node/markdown/text";

export default class BlockTextMarkdownNode extends TextMarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return TextMarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(BlockTextMarkdownNode, ruleName, childNodes, opacity, precedence); }
}