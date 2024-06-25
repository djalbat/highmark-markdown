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

  static fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
    const indexItemReplacements = indexItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
          indexListMarkdownNode = IndexListMarkdownNode.fromIndexItemReplacements(indexItemReplacements),
          node = indexListMarkdownNode, ///
          tokens = [];

    indexItemReplacements.forEach((indexItemReplacement) => {
      indexItemReplacement.getTokens(tokens);
    });

    const indexListReplacement = Replacement.fromNodeAndTokens(IndexListReplacement, node, tokens);

    return indexListReplacement;
  }

  static fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
    let indexListReplacement = null;

    const headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context),
          headingMarkdownNodesLength = headingMarkdownNodes.length;

    if (headingMarkdownNodesLength > 0) {
      const nestedHeadingMarkdownNodes = nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes),
            indexItemReplacements = indexItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
            indexListMarkdownNode = IndexListMarkdownNode.fromIndexItemReplacements(indexItemReplacements),
            node = indexListMarkdownNode, ///
            tokens = [];

      indexItemReplacements.forEach((indexItemReplacement) => {
        indexItemReplacement.getTokens(tokens);
      });

      indexListReplacement = Replacement.fromNodeAndTokens(IndexListReplacement, node, tokens);
    }

    return indexListReplacement;
  }
}
