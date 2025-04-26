"use strict";

import SubDivisionTransform from "../division";

import { pageNumberDirectiveMarkdownNodeFromNode } from "../../utilities/query";

export default class PageNumberDirectiveSubDivisionTransform extends SubDivisionTransform {
  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let pageNumberDirectiveSubDivisionTransform = null;

    const node = subDivisionMarkdownNode, ///
          pageNumberDirectiveMarkdownNode = pageNumberDirectiveMarkdownNodeFromNode(node);

    if (pageNumberDirectiveMarkdownNode !== null) {
      pageNumberDirectiveSubDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(PageNumberDirectiveSubDivisionTransform, subDivisionMarkdownNode, context);
    }

    return pageNumberDirectiveSubDivisionTransform;
  }
}
