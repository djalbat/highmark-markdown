"use strict";

import Replacement from "../replacement";
import FootnotesItemReplacement from "../replacement/footnotesItem";
import FootnotesListMarkdownNode from "../node/markdown/footnotesList";

import { footnoteLinkMarkdownNodesFromNode } from "../utilities/query";

export default class FootnotesListReplacement extends Replacement {
  replaceFootnotesDirectiveSubDivisionReplacement(footnotesDirectiveSubDivisionReplacement, divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = footnotesDirectiveSubDivisionReplacement.getSubDivisionMarkdownNode(),
          replacedNode = subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;  ///

    super.replace(replacedNode, parentNode, context)
  }

  static fromDivisionMarkdownNodeAndFootnoteReplacementMap(divisionMarkdownNode, footnoteReplacementMap, context) {
    let footnotesListReplacement = null;

    const node = divisionMarkdownNode,  ///
          start = startFromFootnoteReplacementMap(footnoteReplacementMap),
          footnoteLinkMarkdownNodes = footnoteLinkMarkdownNodesFromNode(node),
          footnotesItemReplacements = [];

    let number = start;

    footnoteLinkMarkdownNodes.forEach((footnoteLinkMarkdownNode) => {
      const identifier = footnoteLinkMarkdownNode.identifier(context),
            footnoteReplacement = footnoteReplacementMap[identifier] || null;

      if (footnoteReplacement !== null) {
        const footnoteReplacementUnnumbered = footnoteReplacement.isUnnumbered();

        if (footnoteReplacementUnnumbered) {
          const footnotesItemReplacement = FootnotesItemReplacement.fromFootnoteReplacementAndIdentifier(footnoteReplacement, identifier, context);

          footnotesItemReplacements.push(footnotesItemReplacement);

          footnoteReplacement.setNumber(number);

          number++;
        }
      }
    });

    const footnotesItemReplacementsLength = footnotesItemReplacements.length;

    if (footnotesItemReplacementsLength > 0) {
      const footnotesListMarkdownNode = FootnotesListMarkdownNode.fromFootnotesItemReplacementsAndStart(footnotesItemReplacements, start),
            node = footnotesListMarkdownNode, ///
            tokens = [];

      footnotesItemReplacements.forEach((footnotesItemReplacement) => {
        footnotesItemReplacement.getTokens(tokens);
      });

      footnotesListReplacement = Replacement.fromNodeAndTokens(FootnotesListReplacement, node, tokens);
    }

    return footnotesListReplacement;
  }
}

function startFromFootnoteReplacementMap(footnoteReplacementMap) {
  const footnoteReplacements = Object.values(footnoteReplacementMap),  ///
        numberedFootnoteReplacements = footnoteReplacements.filter((footnoteReplacement) => {
          const footnoteReplacementNumbered = footnoteReplacement.isNumbered();

          if (footnoteReplacementNumbered) {
            return true;
          }
        }),
        numberedFootnoteReplacementsLength = numberedFootnoteReplacements.length,
        start = numberedFootnoteReplacementsLength + 1;

  return start;
}
