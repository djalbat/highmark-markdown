"use strict";

import MarkdownNode from "../../node/markdown";

export default class ImportsMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ImportsMarkdownNode, ruleName, childNodes, opacity); }
}
