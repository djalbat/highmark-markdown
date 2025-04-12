"use strict";

import TextMarkdownNode from "../../../node/markdown/text";

export default class PlainTextMarkdownNode extends TextMarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return TextMarkdownNode.fromRuleNameChildNodesAndOpacity(PlainTextMarkdownNode, ruleName, childNodes, opacity); }
}
