"use strict";

import MarkdownNode from "../../node/markdown";

import { INDEX_ITEM_RULE_NAME } from "../../ruleNames";

export default class IndexItemMarkdownNode extends MarkdownNode {
  static fromReplacements(replacements) {
    const ruleName = INDEX_ITEM_RULE_NAME,
          childNodes = replacements.map((replacement) => {
            const replacementNode = replacement.getNode(),
                  childNode = replacementNode;  ///

            return childNode;
          }),
          opacity = null,
          indexItemMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(IndexItemMarkdownNode, ruleName, childNodes, opacity);

    return indexItemMarkdownNode;
  }
}
