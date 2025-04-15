"use strict";

import SubDivisionReplacement from "../subDivision";

import { footnotesDirectiveMarkdownNodeFromNode } from "../../utilities/query";

export default class FootnotesDirectiveSubDivisionReplacement extends SubDivisionReplacement {
  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let footnotesDirectiveSubDivisionReplacement = null;

    const node = subDivisionMarkdownNode, ///
          footnotesDirectiveMarkdownNode = footnotesDirectiveMarkdownNodeFromNode(node);

    if (footnotesDirectiveMarkdownNode !== null) {
      footnotesDirectiveSubDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(FootnotesDirectiveSubDivisionReplacement, subDivisionMarkdownNode, context);
    }

    return footnotesDirectiveSubDivisionReplacement;
  }
}
