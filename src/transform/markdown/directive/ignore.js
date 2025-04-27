"use strict";

import { Transform } from "occam-dom";

export default class IgnoreDirectiveMarkdownTransform extends Transform {
  removeFromTopmostMarkdownNode(topmostMarkdownNode, context) {
    const parentNode = topmostMarkdownNode; ///

    super.removeFrom(parentNode, context);
  }

  static fromDivisionMarkdownNode(divisionMarkdownNode) {
    const node = divisionMarkdownNode,  ///
          tokens = null,
          ignoredDirectiveMarkdownTransform = Transform.fromNodeAndTokens(IgnoreDirectiveMarkdownTransform, node, tokens);

    return ignoredDirectiveMarkdownTransform;
  }
}
