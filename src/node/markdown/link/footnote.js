"use strict";

import MarkdownNode from "../../../node/markdown";

export default class FootnoteLinkMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnoteLinkMarkdownNode, ruleName, childNodes, opacity); }
}
