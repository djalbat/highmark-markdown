"use strict";

import Replacement from "../replacement";

export default class SubDivisionReplacement extends Replacement {
  constructor(node, tokens, removedNode) {
    super(node, tokens);

    this.removedNode = removedNode;
  }

  getRemovedNode() {
    return this.removedNode;
  }

  appendToDivisionMarkdownNode(divisionMarkdownNode, context) {
    const parentNode = divisionMarkdownNode;  ///

    super.appendTo(parentNode, context);
  }

  removeFromDivisionMarkdownNode(divisionMarkdownNode, context) {
    const parentNode = divisionMarkdownNode;  ///

    super.removeFrom(this.removedNode, parentNode, context);
  }

  static fromSubDivisionMarkdownNode(Class, subDivisionMarkdownNode, context) {
    const node = subDivisionMarkdownNode, ///
          removedNode = subDivisionMarkdownNode, ///
          subDivisionReplacement = Replacement.fromNode(Class, node, context, removedNode);

    return subDivisionReplacement;
  }
}
