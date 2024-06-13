"use strict";

import HeadingMarkdownNode from "../../../node/markdown/heading";

export default class TertiaryHeadingMarkdownNode extends HeadingMarkdownNode {
  static lines = 2.25;

  static depth = 3;

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return HeadingMarkdownNode.fromRuleNameChildNodesAndOpacity(TertiaryHeadingMarkdownNode, ruleName, childNodes, opacity); }
}
