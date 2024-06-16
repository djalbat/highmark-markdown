"use strict";

import SubDivisionReplacement from "../../replacement/subDivision";

import { contentsDirectiveMarkdownNodeFromNode } from "../../utilities/query";

export default class ContentsDirectiveSubDivisionReplacement extends SubDivisionReplacement {
  static fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
    let contentsDirectiveSubDivisionReplacement = null;

    const node = subDivisionMarkdownNode, ///
          contentsDirectiveMarkdownNode = contentsDirectiveMarkdownNodeFromNode(node);

    if (contentsDirectiveMarkdownNode !== null) {
      contentsDirectiveSubDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(ContentsDirectiveSubDivisionReplacement, subDivisionMarkdownNode, context);
    }

    return contentsDirectiveSubDivisionReplacement;
  }
}
