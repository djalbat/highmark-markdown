"use strict";

import Replacement from "../replacement";

import AnchorMarkdownNode from "../node/markdown/anchor";

import { INDEX_PREPEND } from "../prepends";

export default class IndexAnchorReplacement extends Replacement {
  getAnchorMarkdownNode() {
    const node = this.getNode(),
          anchorMarkdownNode = node;  ///

    return anchorMarkdownNode;
  }

  static fromPageNumber(pageNumber, context) {
    const prepend = INDEX_PREPEND,
          identifier = pageNumber,  ///
          anchorMarkdownNode = AnchorMarkdownNode.fromPrependAndIdentifier(prepend, identifier),
          node = anchorMarkdownNode,  ///
          tokens = [],
          indexAnchorReplacement = Replacement.fromNodeAndTokens(IndexAnchorReplacement, node, tokens);

    return indexAnchorReplacement;
  }
}
