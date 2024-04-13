"use strict";

import HeadingMarkdownNode from "../../../node/markdown/heading";

export default class QuaternaryHeadingMarkdownNode extends HeadingMarkdownNode {
  static level = 4;

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return HeadingMarkdownNode.fromRuleNameChildNodesAndOpacity(QuaternaryHeadingMarkdownNode, ruleName, childNodes, opacity); }
}
