"use strict";

import Replacement from "../replacement";
import FootnotesItemReplacement from "../replacement/footnotesItem";
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
          footnotesItemReplacements = [];

    let count = 0;

    linkMarkdownNodes.forEach((linkMarkdownNode) => {
      const identifier = linkMarkdownNode.identifier(context);

      let footnoteNumber = footnoteNumberMap[identifier] || null;

      if (footnoteNumber === null) {
        const footnotesItemReplacement = FootnotesItemReplacement.fromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context);

        if (footnotesItemReplacement !== null) {
          footnotesItemReplacements.push(footnotesItemReplacement);

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

    const start = footnoteNumbersLength + 1,
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromFootnotesItemReplacementsAndStart(footnotesItemReplacements, start);

    if (footnotesListMarkdownNode !== null) {
      const node = footnotesListMarkdownNode, ///
            tokens = [];

      footnotesItemReplacements.forEach((footnotesItemReplacement) => {
        footnotesItemReplacement.getTokens(tokens);
      });

      footnotesListReplacement = FootnotesListReplacement.fromNodeAndTokens(node, tokens);
    }

    return footnotesListReplacement;
  }
}
