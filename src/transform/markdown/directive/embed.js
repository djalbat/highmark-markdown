"use strict";

import { Transform } from "occam-dom";

export default class EmbedDirectiveMarkdownTransform extends Transform {
  addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, context) {
    const existingNode = subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;  ///

    super.addAfter(existingNode, parentNode, context);
  }

  static fromSubDivisionMarkdownNodeAndTokens(subDivisionMarkdownNode, tokens) {
    const node = subDivisionMarkdownNode,  ///
          embedDirectiveMarkdownTransform = Transform.fromNodeAndTokens(EmbedDirectiveMarkdownTransform, node, tokens);

    return embedDirectiveMarkdownTransform;
  }
}
