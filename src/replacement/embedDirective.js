"use strict";

import { arrayUtilities } from "necessary";

import Replacement from "../replacement";

const { push } = arrayUtilities;

export default class EmbedDirectiveReplacement extends Replacement {
  addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, subDivisionMarkdownNodes, context) {
    const existingNode = subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode,  ///
          childNodes = this.getChildNodes();

    super.addAfter(existingNode, parentNode, context);

    const embeddedDubDivisionMarkdownNodes = childNodes;  ///

    push(subDivisionMarkdownNodes, embeddedDubDivisionMarkdownNodes);
  }

  static fromNodeAndTokens(node, tokens) { return Replacement.fromNodeAndTokens(EmbedDirectiveReplacement, node, tokens); }
}
