"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ArgumentsMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(ArgumentsMarkdownStyleNode, ruleName, childNodes, opacity); }
}
