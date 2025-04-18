"use strict";

import { Transform } from "occam-dom";

import { subDivisionMarkdownNodesFromNode } from "../utilities/query";

export default class EmbedDirectiveTransform extends Transform {
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
          embedDirectiveTransform = Transform.fromNodeAndTokens(EmbedDirectiveTransform, node, tokens);

    return embedDirectiveTransform;
  }
}
