"use strict";

import Replacement from "../replacement";

import { subDivisionMarkdownNodesFromNode } from "../utilities/query";

export default class EmbedDirectiveReplacement extends Replacement {
  addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, subDivisionMarkdownNodes, context) {
    const existingNode = subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;  ///

    super.addAfter(existingNode, parentNode, context);

    const node = this.getNode();

    subDivisionMarkdownNodesFromNode(node, subDivisionMarkdownNodes);
  }

  static fromNodeAndTokens(node, tokens) { return Replacement.fromNodeAndTokens(EmbedDirectiveReplacement, node, tokens); }
}
