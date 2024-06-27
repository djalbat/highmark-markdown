"use strict";

import Replacement from "../replacement";

import IndexList from "../index/list";
import IndexListReplacement from "../replacement/indexList";

import { replaceNodes, replaceTokens } from "../utilities/replacement";

const letters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

export default class IndexReplacement extends Replacement {
  constructor(node, tokens, nodes) {
    super(node, tokens);

    this.nodes = nodes;
  }

  getNodes() {
    return this.nodes;
  }

  getReplacementNodes() {
    const replacementNodes = this.nodes;  ///

    return replacementNodes;
  }

  getReplacementTokens() {
    const tokens = this.getTokens(),
          replacementTokens = tokens; ///

    return replacementTokens;
  }

  replace(replacedNode, parentNode, context) {
    const { tokens } = context,
          replacementNodes = this.getReplacementNodes(),
          replacementTokens = this.getReplacementTokens();

    replaceNodes(replacementNodes, replacedNode, parentNode);

    replaceTokens(replacementTokens, replacedNode, tokens);
  }

  replaceIndexDirectiveSubdivisionReplacement(indexDirectiveSubDivisionReplacement, divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = indexDirectiveSubDivisionReplacement.getSubDivisionMarkdownNode(),
          replacedNode = subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;  ///

    this.replace(replacedNode, parentNode, context)
  }

  static fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
    let indexReplacement = null;

    const indexList = IndexList.fromDivisionMarkdownNodes(divisionMarkdownNodes, context),
          indexListReplacements = [];

    letters.forEach((letter) => {
      const indexListReplacement = IndexListReplacement.fromIndexListAndLetter(indexList, letter, context);

      if (indexListReplacement !== null) {
        indexListReplacements.push(indexListReplacement);
      }
    });

    const indexListReplacementsLength = indexListReplacements.length;

    if (indexListReplacementsLength > 0) {
      const node = null,
            nodes = [],
            tokens = [];

      indexListReplacements.forEach((indexListReplacement) => {
        const node = indexListReplacement.getNode();

        indexListReplacement.getTokens(tokens);

        nodes.push(node);
      });

      indexReplacement = Replacement.fromNodeAndTokens(IndexReplacement, node, tokens, nodes);
    }

    return indexReplacement;
  }
}
