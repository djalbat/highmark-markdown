"use strict";

import MarkdownNode from "../../node/markdown";

import { CONTENTS_ITEM_RULE_NAME } from "../../ruleNames";

export default class ContentsItemMarkdownNode extends MarkdownNode {
  static fromReplacements(transforms) {
    const ruleName = CONTENTS_ITEM_RULE_NAME,
          childNodes = transforms.map((transform) => {
            const transformNode = transform.getNode(),
                  childNode = transformNode;  ///

            return childNode;
          }),
          opacity = null,
          contentsItemMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsItemMarkdownNode, ruleName, childNodes, opacity);

    return contentsItemMarkdownNode;
  }
}
