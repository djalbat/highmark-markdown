"use strict";

import MarkdownNode from "../../node/markdown";

export default class QuaternaryHeadingMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(QuaternaryHeadingMarkdownNode, ruleName, childNodes, ambiguous); }
}
