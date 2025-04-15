"use strict";

import Replacement from "./";
import FootnotesItemMarkdownNode from "../node/markdown/footnotesItem";

export default class FootnotesItemReplacement extends Replacement {
  getFootnotesItemMarkdownNode() {
    const node = this.getNode(),
          footnotesItemMarkdownNode = node; ///

    return footnotesItemMarkdownNode;
  }

  static fromNode(node, context) { return Replacement.fromNode(FootnotesItemReplacement, node, context); }

  static fromFootnoteReplacementAndIdentifier(footnoteReplacement, identifier) {
      const footnoteMarkdownNode = footnoteReplacement.getFootnoteMarkdownNode(),
            footnotesItemMarkdownNode = FootnotesItemMarkdownNode.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier),
            ascendantNode = footnotesItemMarkdownNode, ///
            footnotesItemReplacement = footnoteReplacement.expand(FootnotesItemReplacement, ascendantNode);

    return footnotesItemReplacement;
  }
}
