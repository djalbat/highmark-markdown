"use strict";

import MarkdownNode from "../../node/markdown";

import { CONTENTS_ITEM_RULE_NAME } from "../../ruleNames";

export default class ContentsItemMarkdownNode extends MarkdownNode {
  static fromReplacements(replacements) {
    const ruleName = CONTENTS_ITEM_RULE_NAME,
          childNodes = replacements.map((replacement) => {
            const replacementNode = replacement.getNode(),
                  childNode = replacementNode;  ///

            return childNode;
          }),
          opacity = null,
          contentsItemMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsItemMarkdownNode, ruleName, childNodes, opacity);

    return contentsItemMarkdownNode;
  }
}
