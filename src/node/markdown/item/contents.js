"use strict";

import MarkdownNode from "../../../node/markdown";

export default class ContentsItemMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsItemMarkdownNode, ruleName, childNodes, opacity); }
}
