"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ValuesMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(ValuesMarkdownStyleNode, ruleName, childNodes, opacity); }
}
