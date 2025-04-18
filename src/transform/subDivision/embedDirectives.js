"use strict";

import { arrayUtilities } from "necessary";

import SubDivisionTransform from "../../transform/subDivision";

import { embedDirectiveMarkdownNodesFromNode } from "../../utilities/query";

const { backwardsForEach } = arrayUtilities;

export default class EmbedDirectivesSubDivisionTransform extends SubDivisionTransform {
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
      const embedDirectiveTransform = embedDirectiveMarkdownNode.resolve(context);

      if (embedDirectiveTransform !== null) {
        embedDirectiveTransform.addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, subDivisionMarkdownNodes, context);
      }
    });

    this.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);

    return subDivisionMarkdownNodes;
  }

  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let embedDirectivesSubDivisionTransform = null;

    const node = subDivisionMarkdownNode, ///
          embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodesFromNode(node),
          embedDirectiveMarkdownNodesLength = embedDirectiveMarkdownNodes.length;

    if (embedDirectiveMarkdownNodesLength > 0) {
      embedDirectivesSubDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(EmbedDirectivesSubDivisionTransform, subDivisionMarkdownNode, embedDirectiveMarkdownNodes, context);
    }

    return embedDirectivesSubDivisionTransform;
  }
}
