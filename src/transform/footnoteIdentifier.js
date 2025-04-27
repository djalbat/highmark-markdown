"use strict";

import SubDivisionTransform from "../subDivision";

export default class FootnoteSubDivisionTransform extends SubDivisionTransform {
  identifier(context) {
    const subDivisionMarkdownNode = this.getSubDivisionMarkdownNode(),
          node = subDivisionMarkdownNode, ///
          footnoteMarkdownNode = footnoteMarkdownNodeFromNode(node),
          identifier = footnoteMarkdownNode.identifier(context);

    return identifier;
  }

  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let footnoteSubDivisionTransform = null;

    const node = subDivisionMarkdownNode, ///
          footnoteMarkdownNode = footnoteMarkdownNodeFromNode(node);

    if (footnoteMarkdownNode !== null) {
      footnoteSubDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(FootnoteSubDivisionTransform, subDivisionMarkdownNode, context);
    }

    return footnoteSubDivisionTransform;
  }
}
