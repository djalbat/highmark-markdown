"use strict";

import ItemNode from "../../../node/markdown/item";

export default class UnorderedItemMarkdownNode extends ItemNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return ItemNode.fromRuleNameChildNodesAndOpacity(UnorderedItemMarkdownNode, ruleName, childNodes, opacity); }
}
