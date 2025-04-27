"use strict";

import { Transform } from "occam-dom";

export default class IncludeDirectiveMarkdownTransform extends Transform {
  getDivisionMarkdownNode() {
    const node = this.getNode(),
          divisionMarkdownNode = node;  ///

    return divisionMarkdownNode;
  }

  appendToTopmostMarkdownNode(topmostMarkdownNode, context) {
    const parentNode = topmostMarkdownNode;  ///

    super.appendTo(parentNode, context);

    const divisionMarkdownNode = this.getDivisionMarkdownNode();

    return divisionMarkdownNode;
  }

  static fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens) {
    const node = divisionMarkdownNode,  ///
          includeDirectiveMarkdownTransform = Transform.fromNodeAndTokens(IncludeDirectiveMarkdownTransform, node, tokens);

    return includeDirectiveMarkdownTransform;
  }
}
