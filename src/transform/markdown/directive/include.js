"use strict";

import MarkdownTransform from "../../../transform/markdown";

export default class IncludeDirectiveMarkdownTransform extends MarkdownTransform {
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
          includeDirectiveMarkdownTransform = MarkdownTransform.fromNodeAndTokens(IncludeDirectiveMarkdownTransform, node, tokens);

    return includeDirectiveMarkdownTransform;
  }
}
