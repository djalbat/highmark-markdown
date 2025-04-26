"use strict";

import { Transform } from "occam-dom";

export default class EmbedDirectiveTransform extends Transform {
  addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, context) {
    const existingNode = subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;  ///

    super.addAfter(existingNode, parentNode, context);
  }

  static fromSubDivisionMarkdownNodeAndTokens(subDivisionMarkdownNode, tokens) {
    const node = subDivisionMarkdownNode,  ///
          embedDirectiveTransform = Transform.fromNodeAndTokens(EmbedDirectiveTransform, node, tokens);

    return embedDirectiveTransform;
  }
}
