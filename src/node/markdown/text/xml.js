"use strict";

import TextMarkdownNode from "../../../node/markdown/text";

export default class XMLTextMarkdownNode extends TextMarkdownNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return TextMarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(XMLTextMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
