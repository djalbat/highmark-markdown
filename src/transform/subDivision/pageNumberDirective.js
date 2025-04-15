"use strict";

import SubDivisionReplacement from "../subDivision";

import { pageNumberDirectiveMarkdownNodeFromNode } from "../../utilities/query";

export default class PageNumberDirectiveSubDivisionReplacement extends SubDivisionReplacement {
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
