"use strict";

import HeadingMarkdownNode from "../../../node/markdown/heading";

export default class PrimaryHeadingMarkdownNode extends HeadingMarkdownNode {
  static depth = 1;

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return HeadingMarkdownNode.fromRuleNameChildNodesAndOpacity(PrimaryHeadingMarkdownNode, ruleName, childNodes, opacity); }
}
