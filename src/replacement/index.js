"use strict";

import Replacement from "../replacement";

import letters from "../letters";
import IndexList from "../index/list";
import IndexListReplacement from "../replacement/indexList";
import IndexHeadingReplacement from "./indexHeading";

import { replaceNodes, replaceTokens } from "../utilities/replacement";

export default class IndexReplacement extends Replacement {
  constructor(node, tokens, nodes) {
    super(node, tokens);

    this.nodes = nodes;
  }

  getNodes() {
    return this.nodes;
  }

  replace(replacedNode, parentNode, context) {
    let tokens;

    tokens = this.getTokens();

    const replacementNodes = this.nodes,  ///
          replacementTokens = tokens; ///

    ({ tokens } = context);

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
          indexReplacements = [];

    letters.forEach((letter) => {
      const indexListReplacement = IndexListReplacement.fromIndexListAndLetter(indexList, letter, context);

      if (indexListReplacement !== null) {
        let indexReplacement;

        const indexHeadingReplacement = IndexHeadingReplacement.fromLetter(letter, context);

        indexReplacement = indexHeadingReplacement; ///

        indexReplacements.push(indexReplacement);

        indexReplacement = indexListReplacement;  ///

        indexReplacements.push(indexReplacement);
      }
    });

    const indexListReplacementsLength = indexReplacements.length;

    if (indexListReplacementsLength > 0) {
      const node = null,
            nodes = [],
            tokens = [];

      indexReplacements.forEach((indexReplacement) => {
        const node = indexReplacement.getNode();

        indexReplacement.getTokens(tokens);

        nodes.push(node);
      });

      indexReplacement = Replacement.fromNodeAndTokens(IndexReplacement, node, tokens, nodes);
    }

    return indexReplacement;
  }
}
