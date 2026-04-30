"use strict";

import TextMarkdownNode from "../../../node/markdown/text";

export default class XMLTextMarkdownNode extends TextMarkdownNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return TextMarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(XMLTextMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
