"use strict";

import MarkdownNode from "../../../node/markdown";

export default class ContentsDirectiveMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
