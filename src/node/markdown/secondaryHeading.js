"use strict";

import MarkdownNode from "../../node/markdown";

export default class SecondaryHeadingMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(SecondaryHeadingMarkdownNode, ruleName, childNodes, ambiguous); }
}
