"use strict";

import MarkdownTransform from "../../../transform/markdown";

export default class EmbedDirectiveMarkdownTransform extends MarkdownTransform {
  addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    const siblingHTMLNode = subDivisionMarkdownNode;  ///

    super.addAfter(siblingHTMLNode, context);
  }

  static fromSubDivisionMarkdownNodeAndTokens(subDivisionMarkdownNode, tokens) {
    const node = subDivisionMarkdownNode,  ///
          embedDirectiveMarkdownTransform = MarkdownTransform.fromNodeAndTokens(EmbedDirectiveMarkdownTransform, node, tokens);

    return embedDirectiveMarkdownTransform;
  }
}
