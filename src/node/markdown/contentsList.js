"use strict";

import MarkdownNode from "../../node/markdown";
import ContentsItemMarkdownNode from "../../node/markdown/contentsItem";

import { CONTENTS_LIST_RULE_NAME } from "../../ruleNames";

export default class ContentsListMarkdownNode extends MarkdownNode {
  static fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
    let contentsListMarkdownNode = null;

    const nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;

    if (nestedHeadingMarkdownNodesLength > 0) {
      const ruleName = CONTENTS_LIST_RULE_NAME,
            childNodes = childNodesFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
            opacity = null;

      contentsListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);
    }

    return contentsListMarkdownNode;
  }
}

function childNodesFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
  const childNodes = nestedHeadingMarkdownNodes.map((nestedHeadingMarkdownNode) => {
    const contentsItemMarkdownNode = ContentsItemMarkdownNode.fromNestedHeadingMarkdownNodeAndContentsListMarkdownNode(nestedHeadingMarkdownNode, ContentsListMarkdownNode, context),
          childNode = contentsItemMarkdownNode; ///

    return childNode;
  });

  return childNodes;
}
