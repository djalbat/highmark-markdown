"use strict";

import MarkdownTransform from "../../../transform/markdown";

export default class IgnoreDirectiveMarkdownTransform extends MarkdownTransform {
  static fromDivisionMarkdownNode(divisionMarkdownNode) {
    const node = divisionMarkdownNode,  ///
          tokens = null,
          ignoredDirectiveMarkdownTransform = MarkdownTransform.fromNodeAndTokens(IgnoreDirectiveMarkdownTransform, node, tokens);

    return ignoredDirectiveMarkdownTransform;
  }
}
