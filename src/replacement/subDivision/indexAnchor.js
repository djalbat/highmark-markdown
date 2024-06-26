"use strict";

import SubDivisionReplacement from "../../replacement/subDivision";

import AnchorMarkdownNode from "../../node/markdown/anchor";
import SubDivisionMarkdownNode from "../../node/markdown/subDivision";

import { INDEX_PREPEND } from "../../prepends";

export default class IndexAnchorSubDivisionReplacement extends SubDivisionReplacement {
  static fromPageNumber(pageNumber, context) {
    const prepend = INDEX_PREPEND,
          identifier = pageNumber,  ///
          anchorMarkdownNode = AnchorMarkdownNode.fromPrependAndIdentifier(prepend, identifier),
          subDivisionMarkdownNode = SubDivisionMarkdownNode.fromAnchorMarkdownNode(anchorMarkdownNode),
          indexAnchorSubdivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(IndexAnchorSubDivisionReplacement, subDivisionMarkdownNode, context);

    return indexAnchorSubdivisionReplacement;
  }
}
