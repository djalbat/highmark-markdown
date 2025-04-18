"use strict";

import Transform from "../transform";
import AnchorMarkdownNode from "../node/markdown/anchor";

import { INDEX_PREPEND } from "../prepends";

export default class IndexAnchorTransform extends Transform {
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
          indexAnchorTransform = Transform.fromNodeAndTokens(IndexAnchorTransform, node, tokens);

    return indexAnchorTransform;
  }
}
