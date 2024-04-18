"use strict";

import MarkdownNode from "../../node/markdown";
import ContentsItemMarkdownNode from "../../node/markdown/contentsItem";

import { CONTENTS_LIST_RULE_NAME } from "../../ruleNames";

export default class ContentsListMarkdownNode extends MarkdownNode {
  static fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
    const ruleName = CONTENTS_LIST_RULE_NAME,
          childNodes = nestedHeadingMarkdownNodes.map((nestedHeadingMarkdownNode) => {
            const contentsItemMarkdownNode = ContentsItemMarkdownNode.fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context),
                  childNode = contentsItemMarkdownNode; ///

            return childNode;
          }),
          opacity = null,
          contentsListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);

    return contentsListMarkdownNode;
  }
}
