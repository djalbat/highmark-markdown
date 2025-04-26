"use strict";

import { Transform } from "occam-dom";

export default class IgnoreDirectiveTransform extends Transform {
  removeFromTopmostMarkdownNode(topmostMarkdownNode, context) {
    const parentNode = topmostMarkdownNode; ///

    super.removeFrom(parentNode, context);
  }

  static fromDivisionMarkdownNode(divisionMarkdownNode) {
    const node = divisionMarkdownNode,  ///
          tokens = null,
          includeDirectiveTransform = Transform.fromNodeAndTokens(IgnoreDirectiveTransform, node, tokens);

    return includeDirectiveTransform;
  }
}
