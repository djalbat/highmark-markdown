"use strict";

import TextMarkdownNode from "../../../node/markdown/text";

export default class PlainTextMarkdownNode extends TextMarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return TextMarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(PlainTextMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
