"use strict";

import MarkdownNode from "../../node/markdown";
import ContentsItemMarkdownNode from "../../node/markdown/contentsItem";

import { CONTENTS_LIST_RULE_NAME } from "../../ruleNames";

export default class ContentsListMarkdownNode extends MarkdownNode {
  static fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
    let contentsListMarkdownNode = null;

    const childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(),
          nestedHeadingMarkdownNodes = childNestedNodes,  ///
          nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;

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
    const contentsItemMarkdownNode = ContentsItemMarkdownNode.fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context),
          childNode = contentsItemMarkdownNode; ///

    return childNode;
  });

  return childNodes;
}
