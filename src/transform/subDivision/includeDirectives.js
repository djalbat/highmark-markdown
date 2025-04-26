"use strict";

import DivisionTransform from "../division";

import { includeDirectiveMarkdownNodesFromNode } from "../../utilities/query";

export default class IncludeDirectivesDivisionTransform extends DivisionTransform {
  constructor(node, tokens, divisionMarkdownNode, includeDirectiveMarkdownNodes) {
    super(node, tokens, divisionMarkdownNode);

    this.includeDirectiveMarkdownNodes = includeDirectiveMarkdownNodes;
  }

  getIncludeDirectiveMarkdownNodes() {
    return this.includeDirectiveMarkdownNodes;
  }

  removeDivisionMarkdownNode(divisionMarkdownNode, context) {
    this.includeDirectiveMarkdownNodes.forEach((includeDirectiveMarkdownNode) => {
      const includeDirectiveTransform = includeDirectiveMarkdownNode.resolve(context);

      if (includeDirectiveTransform !== null) {
        const divisionMarkdownNode = includeDirectiveTransform.getDivisionMarkdownNode(),
              divisionMarkdownNodes = includeDirectiveTransform.addDivisionMarkdownNode(context);

        divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
          divisionMarkdownNode.resolveIncludes(divisionMarkdownNode, context);
        });
      }
    });

    this.removeFromTopmostMarkdownNode(divisionMarkdownNode, context);
  }

  static fromDivisionMarkdownNode(divisionMarkdownNode, context) {
    let includeDirectivesDivisionTransform = null;

    const node = divisionMarkdownNode, ///
          includeDirectiveMarkdownNodes = includeDirectiveMarkdownNodesFromNode(node),
          includeDirectiveMarkdownNodesLength = includeDirectiveMarkdownNodes.length;

    if (includeDirectiveMarkdownNodesLength > 0) {
      includeDirectivesDivisionTransform = DivisionTransform.fromDivisionMarkdownNode(IncludeDirectivesDivisionTransform, divisionMarkdownNode, includeDirectiveMarkdownNodes, context);
    }

    return includeDirectivesDivisionTransform;
  }
}
