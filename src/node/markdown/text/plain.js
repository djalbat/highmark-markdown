"use strict";

import TextMarkdownNode from "../../../node/markdown/text";

export default class PlainTextMarkdownNode extends TextMarkdownNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return TextMarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(PlainTextMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
