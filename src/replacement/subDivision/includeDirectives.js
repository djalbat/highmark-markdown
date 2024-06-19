"use strict";

import SubDivisionReplacement from "../../replacement/subDivision";

import { includeDirectiveMarkdownNodesFromNode } from "../../utilities/query";

export default class IncludeDirectivesSubDivisionReplacement extends SubDivisionReplacement {
  constructor(node, tokens, subDivisionMarkdownNode, includeDirectiveMarkdownNodes) {
    super(node, tokens, subDivisionMarkdownNode);

    this.includeDirectiveMarkdownNodes = includeDirectiveMarkdownNodes;
  }

  getIncludeDirectiveMarkdownNodes() {
    return this.includeDirectiveMarkdownNodes;
  }

  removeSubDivisionMarkdownNode(divisionMarkdownNode, context) {
    this.includeDirectiveMarkdownNodes.forEach((includeDirectiveMarkdownNode) => {
      const includeDirectiveReplacement = includeDirectiveMarkdownNode.resolve(context);

      if (includeDirectiveReplacement !== null) {
        const subDivisionMarkdownNodes = includeDirectiveReplacement.addDivisionMarkdownNode(context);

        subDivisionMarkdownNodes.forEach((subDivisionMarkdownNode) => {
          const divisionMarkdownNode = includeDirectiveReplacement.getDivisionMarkdownNode();

          subDivisionMarkdownNode.resolveIncludes(divisionMarkdownNode, context);
        });
      }
    });

    this.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
  }

  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let includeDirectivesSubDivisionReplacement = null;

    const node = subDivisionMarkdownNode, ///
          includeDirectiveMarkdownNodes = includeDirectiveMarkdownNodesFromNode(node),
          includeDirectiveMarkdownNodesLength = includeDirectiveMarkdownNodes.length;

    if (includeDirectiveMarkdownNodesLength > 0) {
      includeDirectivesSubDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(IncludeDirectivesSubDivisionReplacement, subDivisionMarkdownNode, context, includeDirectiveMarkdownNodes);
    }

    return includeDirectivesSubDivisionReplacement;
  }
}
