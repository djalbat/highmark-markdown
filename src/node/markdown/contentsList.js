"use strict";

import MarkdownNode from "../../node/markdown";
import ContentsItemMarkdownNode from "../../node/markdown/contentsItem";

import { CONTENTS_LIST_RULE_NAME } from "../../ruleNames";
import { contentsMarkdownNodeFromNode, primaryHeadingMarkdownNodesFromNode } from "../../utilities/query";

export default class ContentsListMarkdownNode extends MarkdownNode {
  static fromDivisionMarkdownNode(divisionMarkdownNode, context) {
    let contentsListMarkdownNode = null;

    const node = divisionMarkdownNode,  ///
          contentsMarkdownNode = contentsMarkdownNodeFromNode(node, context);

    if (contentsMarkdownNode !== null) {
      const level = contentsMarkdownNode.level(context),
            contentsItemMarkdownNodes = contentsItemMarkdownNodesFromNodeAndLevel(node, level),
            ruleName = CONTENTS_LIST_RULE_NAME,
            childNodes = contentsItemMarkdownNodes, ///
            opacity = null;

      contentsListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);
    }

    return contentsListMarkdownNode;
  }
}

function contentsItemMarkdownNodesFromNodeAndLevel(node, level, context) {
  const primaryHeadingMarkdownNodes = primaryHeadingMarkdownNodesFromNode(node, context),
        contentsItemMarkdownNodes = primaryHeadingMarkdownNodes.map((primaryHeadingMarkdownNode) => {
          const contentsItemMarkdownNode = ContentsItemMarkdownNode.fromPrimaryHeadingMarkdownNode(primaryHeadingMarkdownNode, context);

          return contentsItemMarkdownNode;
        });

  return contentsItemMarkdownNodes;
}
