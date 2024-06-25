"use strict";

import Replacement from "../replacement";

import { indexMapFromDivisionMarkdownNodes } from "../utilities/index";

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
          indexedWords = Object.keys(indexMap),
          indexedWordsLength = indexedWords.length;

    if (indexedWordsLength > 0) {

    }

    return indexListReplacement;
  }
}
