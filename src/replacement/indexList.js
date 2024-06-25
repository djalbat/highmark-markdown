"use strict";

import Replacement from "../replacement";

export default class IndexListReplacement extends Replacement {
  replaceIndexDirectiveSubdivisionReplacement(indexDirectiveSubDivisionReplacement, divisionMarkdownNode, context) {
    // const subDivisionMarkdownNode = indexDirectiveSubDivisionReplacement.getSubDivisionMarkdownNode(),
    //       replacedNode = subDivisionMarkdownNode, ///
    //       parentNode = divisionMarkdownNode;  ///
    //
    // super.replace(replacedNode, parentNode, context)
  }

  static fromDivisionMarkdownNodesDivisionMarkdownNodeAndIndexEntries(divisionMarkdownNodes, divisionMarkdownNode, indexEntries, context) {
    let indexListReplacement = null;

    divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
      const plainText = divisionMarkdownNode.asPlainText(context);
    });

    return indexListReplacement;
  }
}
