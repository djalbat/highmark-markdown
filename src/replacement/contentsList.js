"use strict";

import { arrayUtilities } from "necessary";


import Replacement from "../replacement";
import ContentsListMarkdownNode from "../node/markdown/contentsList";
import {replaceNode, replaceTokens} from "../utilities/node";
import {headingMarkdownNodesFromNode} from "../utilities/query";

const { filter } = arrayUtilities;

export default class ContentsListReplacement extends Replacement {
  replaceContentsDirectiveMarkdownNode(contentsDirectiveMarkdownNode, divisionMarkdownNode, context) {
    const replacedNode = contentsDirectiveMarkdownNode, ///
          parentNode = divisionMarkdownNode; ///

    super.replace(replacedNode, parentNode, context);
  }

  static fromNodeAndTokens(node, tokens) { return Replacement.fromNodeAndTokens(ContentsListReplacement, node, tokens); }

  static fromDivisionMarkdownNode(divisionMarkdownNode, context) {
    let contentsListReplacement = null;

    // const headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context),
    //   headingMarkdownNodesLength = headingMarkdownNodes.length;
    //
    // if (headingMarkdownNodesLength > 0) {
    //   const { tokens } = context,
    //         contentsListMarkdownNode = ContentsListMarkdownNode.fromHeadingMarkdownNodes(headingMarkdownNodes, context);
    //
    // }


    return contentsListReplacement;
  }
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