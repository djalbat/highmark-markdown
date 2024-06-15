"use strict";

import Replacement from "../replacement";

export default class FootnotesListReplacement extends Replacement {
  appendToDivisionMarkdownNode(divisionMarkdownNode, context) {
    const parentNode = divisionMarkdownNode; ///

    super.appendTo(parentNode, context);
  }

  static fromFootnotesListMarkdownNode(footnotesListMarkdownNode, context) {
    const node = footnotesListMarkdownNode, ///
          footnotesListReplacement = Replacement.fromNode(FootnotesListReplacement, node, context);

    return footnotesListReplacement;
  }
}
