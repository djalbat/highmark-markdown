"use strict";

import Transform from "../transform";

export default class LineTransform extends Transform {
  getLineMarkdownNode() {
    const node = this.getNode(),
          lineMarkdownNode = node;  ///

    return lineMarkdownNode;
  }

  static fromLineMarkdownNode(lineMarkdownNode, context) {
    const node = lineMarkdownNode,  ///
          lineTransform = Transform.fromNode(LineTransform, node, context);

    return lineTransform;
  }
}
