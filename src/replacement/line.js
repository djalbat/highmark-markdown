"use strict";

import Replacement from "../replacement";

export default class LineReplacement extends Replacement {
  static fromNode(node, context) { return Replacement.fromNode(LineReplacement, node, context); }

  static fromLineMarkdownNode(lineMarkdownNode, context) {
    const node = lineMarkdownNode,  ///
          lineReplacement = LineReplacement.fromNode(node, context);

    return lineReplacement;
  }
}
