"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import ContentsItemMarkdownNode from "../../node/markdown/contentsItem";

import { nestNodes } from "../../utilities/contents";
import { CONTENTS_LIST_RULE_NAME } from "../../ruleNames";
import { headingMarkdownNodesFromNode } from "../../utilities/query";

const { filter } = arrayUtilities;

export default class ContentsListMarkdownNode extends MarkdownNode {
  static fromDivisionMarkdownNodeAndContentsMarkdownNode(divisionMarkdownNode, contentsMarkdownNode, context) {
    let contentsListMarkdownNode = null;

    const headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodeAndContentsMarkdownNode(divisionMarkdownNode, contentsMarkdownNode, context),
          headingMarkdownNodesLength = headingMarkdownNodes.length;

    if (headingMarkdownNodesLength > 0) {
      const ruleName = CONTENTS_LIST_RULE_NAME,
            childNodes = childNodesFromHeadingMarkdownNodes(headingMarkdownNodes, context),
            opacity = null;

      contentsListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);
    }

    return contentsListMarkdownNode;
  }
}

function childNodesFromHeadingMarkdownNodes(headingMarkdownNodes, context) {
  const nodes = headingMarkdownNodes, ///
        nestedNode = nestNodes(nodes),
        childNestedNodes = nestedNode.getChildNestedNodes(),
        childNodes = childNestedNodes.map((childNestedNode) => {
          const nestedHeadingMarkdownNode = childNestedNode,  ///
                contentsItemMarkdownNode = ContentsItemMarkdownNode.fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context),
                childNode = contentsItemMarkdownNode; ///

          return childNode;
        });

  return childNodes;
}

function headingMarkdownNodesFromDivisionMarkdownNodeAndContentsMarkdownNode(divisionMarkdownNode, contentsMarkdownNode, context) {
  const node = divisionMarkdownNode,  ///
        maximumLevel = contentsMarkdownNode.maximumLevel(context),
        headingMarkdownNodes = headingMarkdownNodesFromNode(node);

  filter(headingMarkdownNodes, (headingMarkdownNode) => {
    const level = headingMarkdownNode.getLevel();

    if (level <= maximumLevel) {
      return true;
    }
  });

  return headingMarkdownNodes;
}
