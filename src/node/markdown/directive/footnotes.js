"use strict";

import MarkdownNode from "../../../node/markdown";

export default class FootnotesDirectiveMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
