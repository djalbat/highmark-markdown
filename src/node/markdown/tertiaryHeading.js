"use strict";

import MarkdownNode from "../../node/markdown";

export default class TertiaryHeadingMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(TertiaryHeadingMarkdownNode, ruleName, childNodes, ambiguous); }
}
