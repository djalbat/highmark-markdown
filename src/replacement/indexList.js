"use strict";

import Replacement from "../replacement";

import IndexItemReplacement from "../replacement/indexItem";
import IndexListMarkdownNode from "../node/markdown/indexList";

import IndexList from "../index/list";

export default class IndexListReplacement extends Replacement {
  replaceIndexDirectiveSubdivisionReplacement(indexDirectiveSubDivisionReplacement, divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = indexDirectiveSubDivisionReplacement.getSubDivisionMarkdownNode(),
          replacedNode = subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;  ///

    super.replace(replacedNode, parentNode, context)
  }

  static fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
    let indexListReplacement = null;

    const indexList = IndexList.fromDivisionMarkdownNodes(divisionMarkdownNodes, context),
          indexItemReplacements = indexList.mapEntries((entry, pageNumbers) => {
            const indexItemReplacement = IndexItemReplacement.fromEntryAndPageNumbers(entry, pageNumbers, context);

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
