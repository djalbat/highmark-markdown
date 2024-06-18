"use strict";

import SubDivisionReplacement from "../../replacement/subDivision";

import { footnoteMarkdownNodeFromNode } from "../../utilities/query";

export default class FootnoteSubDivisionReplacement extends SubDivisionReplacement {
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
