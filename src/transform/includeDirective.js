"use strict";

import Transform from "../transform";

import { subDivisionMarkdownNodesFromNode } from "../utilities/query";

export default class IncludeDirectiveTransform extends Transform {
  addDivisionMarkdownNode(context) {
    const divisionMarkdownNode = this.getDivisionMarkdownNode(),
          ignored = divisionMarkdownNode.isIgnored();

    if (!ignored) {
      const { divisionMarkdownNodes } = context;

      divisionMarkdownNodes.push(divisionMarkdownNode);

      let tokens = this.getTokens();

      const includedTokens = tokens; ///

      ({ tokens } = context);

      const tokensLength = tokens.length,
            start = tokensLength, ///
            deleteCount = 0;

      tokens.splice(start, deleteCount, ...includedTokens);
    }

    const node = divisionMarkdownNode,  ///
          subDivisionMarkdownNodes = subDivisionMarkdownNodesFromNode(node);

    return subDivisionMarkdownNodes;
  }

  getDivisionMarkdownNode() {
    const node = this.getNode(),
          divisionMarkdownNode = node;  ///

    return divisionMarkdownNode;
  }

  static fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens) {
    const node = divisionMarkdownNode,  ///
          includeDirectiveTransform = Transform.fromNodeAndTokens(IncludeDirectiveTransform, node, tokens);

    return includeDirectiveTransform;
  }
}
