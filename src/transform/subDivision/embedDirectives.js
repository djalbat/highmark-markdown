"use strict";

import { arrayUtilities } from "necessary";

import SubDivisionTransform from "../subDivision";

import { embedDirectiveMarkdownNodesFromNode } from "../../utilities/query";

const { backwardsForEach } = arrayUtilities;

export default class EmbedDirectivesSubDivisionTransform extends SubDivisionTransform {
  constructor(node, tokens, divisionMarkdownNode, embedDirectiveMarkdownNodes) {
    super(node, tokens, divisionMarkdownNode);

    this.embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodes;
  }

  getEmbedDirectiveMarkdownNodes() {
    return this.embedDirectiveMarkdownNodes;
  }

  replaceSubDivisionMarkdownNode(divisionMarkdownNode, context) {
    // const subDivisionMarkdownNodes = [],
    //       divisionMarkdownNode = this.getDivisionMarkdownNode();
    //
    // backwardsForEach(this.embedDirectiveMarkdownNodes, (embedDirectiveMarkdownNode) => {
    //   const embedDirectiveTransform = embedDirectiveMarkdownNode.resolve(context);
    //
    //   if (embedDirectiveTransform !== null) {
    //     embedDirectiveTransform.addAfterSubDivisionMarkdownNode(divisionMarkdownNode, divisionMarkdownNode, subDivisionMarkdownNodes, context);
    //   }
    // });
    //
    // this.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);

    return subDivisionMarkdownNodes;
  }

  static fromSubDivisionMarkdownNode(divisionMarkdownNode, context) {
    let embedDirectivesSubDivisionTransform = null;

    const node = divisionMarkdownNode, ///
          embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodesFromNode(node),
          embedDirectiveMarkdownNodesLength = embedDirectiveMarkdownNodes.length;

    if (embedDirectiveMarkdownNodesLength > 0) {
      embedDirectivesSubDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(EmbedDirectivesSubDivisionTransform, divisionMarkdownNode, embedDirectiveMarkdownNodes, context);
    }

    return embedDirectivesSubDivisionTransform;
  }
}
