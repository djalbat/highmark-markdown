"use strict";

import { stringUtilities } from "necessary";

import Replacement from "../replacement";

import IndexItemReplacement from "../replacement/indexItem";
import IndexListMarkdownNode from "../node/markdown/indexList";

import { indexMapFromDivisionMarkdownNodes } from "../utilities/index";

const { strcmp } = stringUtilities;

export default class IndexListReplacement extends Replacement {
  replaceIndexDirectiveSubdivisionReplacement(indexDirectiveSubDivisionReplacement, divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = indexDirectiveSubDivisionReplacement.getSubDivisionMarkdownNode(),
          replacedNode = subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;  ///

    super.replace(replacedNode, parentNode, context)
  }

  static fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
    let indexListReplacement = null;

    const indexMap = indexMapFromDivisionMarkdownNodes(divisionMarkdownNodes, context),
          entries = Object.keys(indexMap); ///

    entries.sort((entryA, entryB) => {
      const lowerCaseEntryA = entryA.toLowerCase(),
            lowerCaseEntryB = entryB.toLowerCase(),
            difference = strcmp(lowerCaseEntryB, lowerCaseEntryA);

      return difference;
    });

    const indexItemReplacements = entries.map((entry) => {
            const pageNumbers = indexMap[entry],
                  indexItemReplacement = IndexItemReplacement.fromEntryAndPageNumbers(entry, pageNumbers, context);

            return indexItemReplacement;
          }),
          indexListMarkdownNode = IndexListMarkdownNode.fromIndexItemReplacements(indexItemReplacements);

    if (indexListMarkdownNode !== null) {
      const node = indexListMarkdownNode, ///
            tokens = [];

      indexItemReplacements.forEach((indexItemReplacement) => {
        indexItemReplacement.getTokens(tokens);
      });

      indexListReplacement = Replacement.fromNodeAndTokens(IndexListReplacement, node, tokens);
    }

    return indexListReplacement;
  }
}
