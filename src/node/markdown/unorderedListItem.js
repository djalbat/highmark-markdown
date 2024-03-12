"use strict";

import MarkdownNode from "../../node/markdown";

export default class UnorderedListItemMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(UnorderedListItemMarkdownNode, ruleName, childNodes, ambiguous); }
}
