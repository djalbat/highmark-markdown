"use strict";

import MarkdownNode from "../../node/markdown";

export default class ImportMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ImportMarkdownNode, ruleName, childNodes, opacity); }
}
