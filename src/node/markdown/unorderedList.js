"use strict";

import MarkdownNode from "../../node/markdown";

export default class UnorderedListMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(UnorderedListMarkdownNode, ruleName, childNodes, ambiguous); }
}
