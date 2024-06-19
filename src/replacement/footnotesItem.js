"use strict";

import Replacement from "../replacement";

import FootnotesItemMarkdownNode from "../node/markdown/footnotesItem";

export default class FootnotesItemReplacement extends Replacement {
  static fromNode(node, context, ...remainingArguments) { return Replacement.fromNode(FootnotesItemReplacement, node, context, ...remainingArguments); }

  static fromFootnoteReplacementAndIdentifier(footnoteReplacement, identifier) {
      const footnoteMarkdownNode = footnoteReplacement.getFootnoteMarkdownNode(),
            footnotesItemMarkdownNode = FootnotesItemMarkdownNode.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier),
            ascendantNode = footnotesItemMarkdownNode, ///
            footnotesItemReplacement = footnoteReplacement.expand(FootnotesItemReplacement, ascendantNode);

    return footnotesItemReplacement;
  }
}
