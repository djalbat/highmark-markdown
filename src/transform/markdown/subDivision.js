"use strict";

import MarkdownTransform from "../../transform/markdown";

export default class SubdivisionMarkdownTransform extends MarkdownTransform {
  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode) {
    const node = subDivisionMarkdownNode,  ///
          tokens = null,
          embedDirectiveMarkdownTransform = MarkdownTransform.fromNodeAndTokens(SubdivisionMarkdownTransform, node, tokens);

    return embedDirectiveMarkdownTransform;
  }
}
