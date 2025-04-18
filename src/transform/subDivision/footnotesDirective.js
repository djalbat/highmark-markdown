"use strict";

import SubDivisionTransform from "../../transform/subDivision";

import { footnotesDirectiveMarkdownNodeFromNode } from "../../utilities/query";

export default class FootnotesDirectiveSubDivisionTransform extends SubDivisionTransform {
  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let footnotesDirectiveSubDivisionTransform = null;

    const node = subDivisionMarkdownNode, ///
          footnotesDirectiveMarkdownNode = footnotesDirectiveMarkdownNodeFromNode(node);

    if (footnotesDirectiveMarkdownNode !== null) {
      footnotesDirectiveSubDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(FootnotesDirectiveSubDivisionTransform, subDivisionMarkdownNode, context);
    }

    return footnotesDirectiveSubDivisionTransform;
  }
}
