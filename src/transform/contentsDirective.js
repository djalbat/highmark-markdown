"use strict";

import SubDivisionTransform from "../subDivision";

export default class ContentsDirectiveSubDivisionTransform extends SubDivisionTransform {
  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let contentsDirectiveSubDivisionTransform = null;

    const node = subDivisionMarkdownNode, ///
          contentsDirectiveMarkdownNode = contentsDirectiveMarkdownNodeFromNode(node);

    if (contentsDirectiveMarkdownNode !== null) {
      contentsDirectiveSubDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(ContentsDirectiveSubDivisionTransform, subDivisionMarkdownNode, context);
    }

    return contentsDirectiveSubDivisionTransform;
  }
}
