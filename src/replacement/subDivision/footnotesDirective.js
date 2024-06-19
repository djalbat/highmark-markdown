"use strict";

import SubDivisionReplacement from "../../replacement/subDivision";

import { footnotesDirectiveMarkdownNodeFromNode } from "../../utilities/query";

export default class FootnotesDirectiveSubDivisionReplacement extends SubDivisionReplacement {
  appendToDivisionMarkdownNode(divisionMarkdownNode, context) {
    const parentNode = divisionMarkdownNode;  ///

    super.appendTo(parentNode, context);
  }

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
