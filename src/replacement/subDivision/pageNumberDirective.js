"use strict";

import SubDivisionReplacement from "../../replacement/subDivision";

import { pageNumberDirectiveMarkdownNodeFromNode } from "../../utilities/query";

export default class PageNumberDirectiveSubDivisionReplacement extends SubDivisionReplacement {
  appendToDivisionMarkdownNode(divisionMarkdownNode, context) {
    const parentNode = divisionMarkdownNode;  ///

    super.appendTo(parentNode, context);
  }

  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let pageNumberDirectiveSubDivisionReplacement = null;

    const node = subDivisionMarkdownNode, ///
          pageNumberDirectiveMarkdownNode = pageNumberDirectiveMarkdownNodeFromNode(node);

    if (pageNumberDirectiveMarkdownNode !== null) {
      pageNumberDirectiveSubDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(PageNumberDirectiveSubDivisionReplacement, subDivisionMarkdownNode, context);
    }

    return pageNumberDirectiveSubDivisionReplacement;
  }
}
