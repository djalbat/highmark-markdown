"use strict";

import ListItemNode from "../../../node/markdown/listItem";

export default class UnorderedListItemMarkdownNode extends ListItemNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return ListItemNode.fromRuleNameChildNodesAndOpacity(UnorderedListItemMarkdownNode, ruleName, childNodes, opacity); }
}
