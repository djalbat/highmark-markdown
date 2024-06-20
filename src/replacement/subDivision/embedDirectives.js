"use strict";

import { arrayUtilities } from "necessary";

import SubDivisionReplacement from "../../replacement/subDivision";

import { embedDirectiveMarkdownNodesFromNode } from "../../utilities/query";

const { backwardsForEach } = arrayUtilities;

export default class EmbedDirectivesSubDivisionReplacement extends SubDivisionReplacement {
  constructor(node, tokens, subDivisionMarkdownNode, embedDirectiveMarkdownNodes) {
    super(node, tokens, subDivisionMarkdownNode);

    this.embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodes;
  }

  getEmbedDirectiveMarkdownNodes() {
    return this.embedDirectiveMarkdownNodes;
  }

  replaceSubDivisionMarkdownNode(divisionMarkdownNode, context) {
    const subDivisionMarkdownNodes = [],
          subDivisionMarkdownNode = this.getSubDivisionMarkdownNode();

    backwardsForEach(this.embedDirectiveMarkdownNodes, (embedDirectiveMarkdownNode) => {
      const embedDirectiveReplacement = embedDirectiveMarkdownNode.resolve(context);

      if (embedDirectiveReplacement !== null) {
        embedDirectiveReplacement.addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, subDivisionMarkdownNodes, context);
      }
    });

    this.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);

    return subDivisionMarkdownNodes;
  }

  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let embedDirectivesSubDivisionReplacement = null;

    const node = subDivisionMarkdownNode, ///
          embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodesFromNode(node),
          embedDirectiveMarkdownNodesLength = embedDirectiveMarkdownNodes.length;

    if (embedDirectiveMarkdownNodesLength > 0) {
      embedDirectivesSubDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(EmbedDirectivesSubDivisionReplacement, subDivisionMarkdownNode, embedDirectiveMarkdownNodes, context);
    }

    return embedDirectivesSubDivisionReplacement;
  }
}
