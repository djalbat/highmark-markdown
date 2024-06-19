"use strict";

import Replacement from "../replacement";

export default class LineReplacement extends Replacement {
  static fromLineMarkdownNode(lineMarkdownNode, context) {
    const node = lineMarkdownNode,  ///
          lineReplacement = Replacement.fromNode(LineReplacement, node, context);

    return lineReplacement;
  }
}
