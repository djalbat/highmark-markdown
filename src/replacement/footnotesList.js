"use strict";

import Replacement from "../replacement";
import FootnoteItemReplacement from "../replacement/footnoteItem";
import FootnotesListMarkdownNode from "../node/markdown/footnotesList";

import { linkMarkdownNodesFromNode } from "../utilities/query";

export default class FootnotesListReplacement extends Replacement {
  appendToDivisionMarkdownNode(divisionMarkdownNode, context) {
    const parentNode = divisionMarkdownNode; ///

    super.appendTo(parentNode, context);
  }

  static fromNodeAndTokens(node, tokens) { return Replacement.fromNodeAndTokens(FootnotesListReplacement, node, tokens); }

  static fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context) {
    let footnotesListReplacement = null;

    const { footnoteNumberMap } = context;

    const node = divisionMarkdownNode,  ///
          footnoteNumbers = Object.values(footnoteNumberMap),
          linkMarkdownNodes = linkMarkdownNodesFromNode(node),
          footnoteNumbersLength = footnoteNumbers.length,
          footnoteItemReplacements = [];

    let count = 0;

    linkMarkdownNodes.forEach((linkMarkdownNode) => {
      const identifier = linkMarkdownNode.identifier(context);

      let footnoteNumber = footnoteNumberMap[identifier] || null;

      if (footnoteNumber === null) {
        const footnoteItemReplacement = FootnoteItemReplacement.fromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context);

        if (footnoteItemReplacement !== null) {
          footnoteItemReplacements.push(footnoteItemReplacement);

          count++;

          footnoteNumber = footnoteNumbersLength + count;

          footnoteNumberMap[identifier] = footnoteNumber;
        }
      }

      if (footnoteNumber !== null) {
        const number = footnoteNumber;  ///

        linkMarkdownNode.setNumber(number);
      }
    });

    const footnoteItemReplacementsLength = footnoteItemReplacements.length;

    if (footnoteItemReplacementsLength > 0) {
      const start = footnoteNumbersLength + 1,
            footnotesListMarkdownNode = FootnotesListMarkdownNode.fromStart(start),
            node = footnotesListMarkdownNode, ///
            tokens = [];

      footnoteItemReplacements.forEach((footnotesItemReplacement) => {
        footnotesItemReplacement.getTokens(tokens);

        footnotesItemReplacement.appendToFootnotesListMarkdownNode(footnotesListMarkdownNode, context);
      });

      footnotesListReplacement = FootnotesListReplacement.fromNodeAndTokens(node, tokens);
    }

    return footnotesListReplacement;
  }
}
