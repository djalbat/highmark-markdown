"use strict";

import Replacement from "./";

import { subDivisionMarkdownNodesFromNode } from "../utilities/query";

export default class EmbedDirectiveReplacement extends Replacement {
  addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, subDivisionMarkdownNodes, context) {
    const existingNode = subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;  ///

    super.addAfter(existingNode, parentNode, context);

    divisionMarkdownNode = this.getDivisionMarkdownNode();  ///

    const node = divisionMarkdownNode;  ///

    subDivisionMarkdownNodesFromNode(node, subDivisionMarkdownNodes);
  }

  getDivisionMarkdownNode() {
    const node = this.getNode(),
          divisionMarkdownNode = node;  ///

    return divisionMarkdownNode;
  }

  static fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens) {
    const node = divisionMarkdownNode,  ///
          embedDirectiveReplacement = Replacement.fromNodeAndTokens(EmbedDirectiveReplacement, node, tokens);

    return embedDirectiveReplacement;
  }
}
