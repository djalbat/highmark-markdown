"use strict";

import MarkdownNode from "../../node/markdown";

export default class PrimaryHeadingMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(PrimaryHeadingMarkdownNode, ruleName, childNodes, ambiguous); }
}
