"use strict";

import { Transform } from "occam-dom";

import FootnotesItemMarkdownNode from "../node/markdown/footnotesItem";

export default class FootnotesItemTransform extends Transform {
  getFootnotesItemMarkdownNode() {
    const node = this.getNode(),
          footnotesItemMarkdownNode = node; ///

    return footnotesItemMarkdownNode;
  }

  static fromNode(node, context) { return Transform.fromNode(FootnotesItemTransform, node, context); }

  static fromFootnoteTransformAndIdentifier(footnoteTransform, identifier) {
      const footnoteMarkdownNode = footnoteTransform.getFootnoteMarkdownNode(),
            footnotesItemMarkdownNode = FootnotesItemMarkdownNode.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier),
            ascendantNode = footnotesItemMarkdownNode, ///
            footnotesItemTransform = footnoteTransform.expand(FootnotesItemTransform, ascendantNode);

    return footnotesItemTransform;
  }
}
