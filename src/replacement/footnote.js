"use strict";

import Replacement from "../replacement";

import { footnoteMarkdownNodeFromNode } from "../utilities/query";

export default class FootnoteReplacement extends Replacement {
  static fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement) {
    const node = footnoteSubDivisionReplacement.getNode(),
          footnoteMarkdownNode = footnoteMarkdownNodeFromNode(node),
          descendentNode = footnoteMarkdownNode,  ///
          footnoteReplacement = footnoteSubDivisionReplacement.contract(FootnoteReplacement, descendentNode);

    return footnoteReplacement;
  }
}
