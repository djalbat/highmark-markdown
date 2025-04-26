"use strict";

import { Transform } from "occam-dom";

export default class SubDivisionTransform extends Transform {
  constructor(node, tokens, subDivisionMarkdownNode) {
    super(node, tokens);

    this.subDivisionMarkdownNode = subDivisionMarkdownNode;
  }

  removeFromDivisionMarkdownNode(divisionMarkdownNode, context) {
    const parentNode = divisionMarkdownNode; ///

    super.removeFrom(parentNode, context);
  }

  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode) {
    const node = subDivisionMarkdownNode, ///
          tokens = null,
          subDivisionTransform = Transform.fromNodeAndTokens(SubDivisionTransform, node, tokens);

    return subDivisionTransform;
  }
}
