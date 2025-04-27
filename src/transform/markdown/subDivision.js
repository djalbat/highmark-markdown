"use strict";

import { Transform } from "occam-dom";

export default class SubDivisionMarkdownTransform extends Transform {
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
          subDivisionMarkdownTransform = Transform.fromNodeAndTokens(SubDivisionMarkdownTransform, node, tokens);

    return subDivisionMarkdownTransform;
  }
}
