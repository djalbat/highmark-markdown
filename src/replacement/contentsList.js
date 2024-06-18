"use strict";

import { arrayUtilities } from "necessary";

import Replacement from "../replacement";
import ContentsItemReplacement from "./contentsItem";
import ContentsListMarkdownNode from "../node/markdown/contentsList";

import { nestNodes } from "../utilities/contents";
import { headingMarkdownNodesFromNode } from "../utilities/query";

const { filter } = arrayUtilities;

export default class ContentsListReplacement extends Replacement {
  replaceContentsDirectiveSubdivisionReplacement(contentsDirectiveSubDivisionReplacement, divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = contentsDirectiveSubDivisionReplacement.getSubDivisionMarkdownNode(),
          replacedNode = subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;  ///

    super.replace(replacedNode, parentNode, context)
  }

  static fromNodeAndTokens(node, tokens) { return Replacement.fromNodeAndTokens(ContentsListReplacement, node, tokens); }

  static fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
    const contentsItemReplacements = contentsItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
          contentsListMarkdownNode = ContentsListMarkdownNode.fromContentsItemReplacements(contentsItemReplacements),
          node = contentsListMarkdownNode, ///
          tokens = [];

    contentsItemReplacements.forEach((contentsItemReplacement) => {
      contentsItemReplacement.getTokens(tokens);
    });

    const contentsListReplacement = ContentsListReplacement.fromNodeAndTokens(node, tokens);

    return contentsListReplacement;
  }

  static fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
    let contentsListReplacement = null;

    const headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context),
          headingMarkdownNodesLength = headingMarkdownNodes.length;

    if (headingMarkdownNodesLength > 0) {
      const nestedHeadingMarkdownNodes = nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes),
            contentsItemReplacements = contentsItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
            contentsListMarkdownNode = ContentsListMarkdownNode.fromContentsItemReplacements(contentsItemReplacements),
            node = contentsListMarkdownNode, ///
            tokens = [];

      contentsItemReplacements.forEach((contentsItemReplacement) => {
        contentsItemReplacement.getTokens(tokens);
      });

      contentsListReplacement = ContentsListReplacement.fromNodeAndTokens(node, tokens);
    }

    return contentsListReplacement;
  }
}

Object.assign(ContentsItemReplacement, {  ///
  ContentsListReplacement
});

function nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes) {
  const nodes = headingMarkdownNodes, ///
        nestedNode = nestNodes(nodes),
        childNestedNodes = nestedNode.getChildNestedNodes(),
        nestedHeadingMarkdownNodes = childNestedNodes;  ///

  return nestedHeadingMarkdownNodes;
}

function contentsItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
  const contentsItemReplacements = nestedHeadingMarkdownNodes.map((nestedHeadingMarkdownNode) => {
    const contentsItemReplacement = ContentsItemReplacement.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);

    return contentsItemReplacement;
  });

  return contentsItemReplacements;
}

function headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
  const headingMarkdownNodes = [],
        index = divisionMarkdownNodes.indexOf(divisionMarkdownNode),
        start = index + 1;

  divisionMarkdownNodes = divisionMarkdownNodes.slice(start); ///

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    const node = divisionMarkdownNode;  ///

    headingMarkdownNodesFromNode(node, headingMarkdownNodes);
  });

  filter(headingMarkdownNodes, (headingMarkdownNode) => {
    const { contentsDepth } = context,
      depth = headingMarkdownNode.getDepth();

    if (depth <= contentsDepth) {
      return true;
    }
  });

  return headingMarkdownNodes;
}

