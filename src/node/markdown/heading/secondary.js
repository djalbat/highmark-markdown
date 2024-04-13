"use strict";

import HeadingMarkdownNode from "../../../node/markdown/heading";

export default class SecondaryHeadingMarkdownNode extends HeadingMarkdownNode {
  static level = 2;

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return HeadingMarkdownNode.fromRuleNameChildNodesAndOpacity(SecondaryHeadingMarkdownNode, ruleName, childNodes, opacity); }
}
