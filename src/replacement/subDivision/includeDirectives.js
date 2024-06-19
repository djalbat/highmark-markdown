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

  removeFromDivisionMarkdownNode(divisionMarkdownNode, context) {
    const ignored = divisionMarkdownNode.isIgnored();

    if (ignored) {
      return;
    }

    super.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
  }

  removeSubDivisionMarkdownNode(divisionMarkdownNode, context) {
    this.includeDirectiveMarkdownNodes.forEach((includeDirectiveMarkdownNode) => {
      const includeDirectiveReplacement = includeDirectiveMarkdownNode.resolve(context);

      if (includeDirectiveReplacement !== null) {
        const divisionMarkdownNode = includeDirectiveReplacement.getDivisionMarkdownNode(),
              subDivisionMarkdownNodes = includeDirectiveReplacement.addDivisionMarkdownNode(context);

        subDivisionMarkdownNodes.forEach((subDivisionMarkdownNode) => {
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
