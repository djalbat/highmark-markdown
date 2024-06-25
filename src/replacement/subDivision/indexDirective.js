"use strict";

import SubDivisionReplacement from "../../replacement/subDivision";

import { indexDirectiveMarkdownNodeFromNode } from "../../utilities/query";

export default class IndexDirectiveSubDivisionReplacement extends SubDivisionReplacement {
  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let indexDirectiveSubDivisionReplacement = null;

    const node = subDivisionMarkdownNode, ///
          indexDirectiveMarkdownNode = indexDirectiveMarkdownNodeFromNode(node);

    if (indexDirectiveMarkdownNode !== null) {
      indexDirectiveSubDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(IndexDirectiveSubDivisionReplacement, subDivisionMarkdownNode, context);
    }

    return indexDirectiveSubDivisionReplacement;
  }
}
