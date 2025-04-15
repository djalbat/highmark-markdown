"use strict";

import SubDivisionReplacement from "../subDivision";

import { footnoteMarkdownNodeFromNode } from "../../utilities/query";

export default class FootnoteSubDivisionReplacement extends SubDivisionReplacement {
  identifier(context) {
    const subDivisionMarkdownNode = this.getSubDivisionMarkdownNode(),
          node = subDivisionMarkdownNode, ///
          footnoteMarkdownNode = footnoteMarkdownNodeFromNode(node),
          identifier = footnoteMarkdownNode.identifier(context);

    return identifier;
  }

  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let footnoteSubDivisionReplacement = null;

    const node = subDivisionMarkdownNode, ///
          footnoteMarkdownNode = footnoteMarkdownNodeFromNode(node);

    if (footnoteMarkdownNode !== null) {
      footnoteSubDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(FootnoteSubDivisionReplacement, subDivisionMarkdownNode, context);
    }

    return footnoteSubDivisionReplacement;
  }
}
