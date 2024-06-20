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

  static fromSubDivisionMarkdownNode(Class, subDivisionMarkdownNode, ...remainingArguments) {
    const node = subDivisionMarkdownNode, ///
          subDivisionReplacement = Replacement.fromNode(Class, node, subDivisionMarkdownNode, ...remainingArguments);

    return subDivisionReplacement;
  }
}
