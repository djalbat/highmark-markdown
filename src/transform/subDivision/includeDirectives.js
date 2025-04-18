"use strict";

import SubDivisionTransform from "../../transform/subDivision";

import { includeDirectiveMarkdownNodesFromNode } from "../../utilities/query";

export default class IncludeDirectivesSubDivisionTransform extends SubDivisionTransform {
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
      const includeDirectiveTransform = includeDirectiveMarkdownNode.resolve(context);

      if (includeDirectiveTransform !== null) {
        const divisionMarkdownNode = includeDirectiveTransform.getDivisionMarkdownNode(),
              subDivisionMarkdownNodes = includeDirectiveTransform.addDivisionMarkdownNode(context);

        subDivisionMarkdownNodes.forEach((subDivisionMarkdownNode) => {
          subDivisionMarkdownNode.resolveIncludes(divisionMarkdownNode, context);
        });
      }
    });

    this.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
  }

  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let includeDirectivesSubDivisionTransform = null;

    const node = subDivisionMarkdownNode, ///
          includeDirectiveMarkdownNodes = includeDirectiveMarkdownNodesFromNode(node),
          includeDirectiveMarkdownNodesLength = includeDirectiveMarkdownNodes.length;

    if (includeDirectiveMarkdownNodesLength > 0) {
      includeDirectivesSubDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(IncludeDirectivesSubDivisionTransform, subDivisionMarkdownNode, includeDirectiveMarkdownNodes, context);
    }

    return includeDirectivesSubDivisionTransform;
  }
}
