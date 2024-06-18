"use strict";

import Replacement from "../replacement";

export default class SubDivisionReplacement extends Replacement {
  constructor(node, tokens, subDivisionMarkdownNode) {
    super(node, tokens);

    this.subDivisionMarkdownNode = subDivisionMarkdownNode;
  }

  getSubDivisionMarkdownNode() {
    return this.subDivisionMarkdownNode;
  }

  removeFromDivisionMarkdownNode(divisionMarkdownNode, context) {
    const removedNode = this.subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;

    super.removeFrom(removedNode, parentNode, context);
  }

  static fromNodeAndTokens(Class, node, tokens, ...remainingArguments) {
    const subDivisionMarkdownNode = null,
          subDivisionReplacement = Replacement.fromNodeAndTokens(Class, node, tokens, subDivisionMarkdownNode, ...remainingArguments);

    return subDivisionReplacement;
  }

  static fromSubDivisionMarkdownNode(Class, subDivisionMarkdownNode, context, ...remainingArguments) {
    const node = subDivisionMarkdownNode, ///
          subDivisionReplacement = Replacement.fromNode(Class, node, context, subDivisionMarkdownNode, ...remainingArguments);

    return subDivisionReplacement;
  }
}
