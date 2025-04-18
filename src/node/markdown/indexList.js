"use strict";

import MarkdownNode from "../../node/markdown";

import { INDEX_LIST_RULE_NAME } from "../../ruleNames";

export default class IndexListMarkdownNode extends MarkdownNode {
  static fromIndexItemReplacements(indexItemReplacements) {
    const ruleName = INDEX_LIST_RULE_NAME,
          childNodes = indexItemReplacements.map((indexItemReplacement) => {
            const indexItemReplacementNode = indexItemReplacement.getIndexItemMarkdownNode(),
                  childNode = indexItemReplacementNode;  ///

            return childNode;
          }),
          opacity = null,
          indexListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(IndexListMarkdownNode, ruleName, childNodes, opacity);

    return indexListMarkdownNode;
  }
}
