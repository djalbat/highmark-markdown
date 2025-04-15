"use strict";

import Replacement from "./";

export default class LineReplacement extends Replacement {
  getLineMarkdownNode() {
    const node = this.getNode(),
          lineMarkdownNode = node;  ///

    return lineMarkdownNode;
  }

  static fromLineMarkdownNode(lineMarkdownNode, context) {
    const node = lineMarkdownNode,  ///
          lineReplacement = Replacement.fromNode(LineReplacement, node, context);

    return lineReplacement;
  }
}
