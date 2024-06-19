"use strict";

import MarkdownNode from "../../node/markdown";

import { CONTENTS_LIST_RULE_NAME } from "../../ruleNames";

export default class ContentsListMarkdownNode extends MarkdownNode {
  static fromContentsItemReplacements(contentsItemReplacements) {
    const ruleName = CONTENTS_LIST_RULE_NAME,
          childNodes = contentsItemReplacements.map((contentsItemReplacement) => {
            const contentsItemReplacementNode = contentsItemReplacement.getContentsItemMarkdownNode(),
                  childNode = contentsItemReplacementNode;  ///

            return childNode;
          }),
          opacity = null,
          contentsListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);

    return contentsListMarkdownNode;
  }
}
