"use strict";

import SubDivisionTransform from "../subDivision";

import { indexDirectiveMarkdownNodeFromNode } from "../../utilities/query";

export default class IndexDirectiveSubDivisionTransform extends SubDivisionTransform {
  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let indexDirectiveSubDivisionTransform = null;

    const node = subDivisionMarkdownNode, ///
          indexDirectiveMarkdownNode = indexDirectiveMarkdownNodeFromNode(node);

    if (indexDirectiveMarkdownNode !== null) {
      indexDirectiveSubDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(IndexDirectiveSubDivisionTransform, subDivisionMarkdownNode, context);
    }

    return indexDirectiveSubDivisionTransform;
  }
}
