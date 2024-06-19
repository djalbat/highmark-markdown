"use strict";

import Replacement from "../replacement";
import FootnotesItemReplacement from "../replacement/footnotesItem";
import FootnotesListMarkdownNode from "../node/markdown/footnotesList";

import { linkMarkdownNodesFromNode } from "../utilities/query";

export default class FootnotesListReplacement extends Replacement {
  constructor(node, tokens, start, identifiers) {
    super(node, tokens, start, identifiers);

    this.start = start;
    this.identifiers = identifiers;
  }

  getStart() {
    return this.start;
  }

  getIdentifiers() {
    return this.identifiers;
  }

  appendToDivisionMarkdownNode(divisionMarkdownNode, context) {
    const parentNode = divisionMarkdownNode; ///

    super.appendTo(parentNode, context);
  }

  static fromDivisionMarkdownNodeAndFootnoteMap(divisionMarkdownNode, footnoteMap, context) {
    let footnotesListReplacement = null;

    const node = divisionMarkdownNode,  ///
          start = startFromFootnoteMap(footnoteMap),
          identifiers = [],
          linkMarkdownNodes = linkMarkdownNodesFromNode(node),
          footnotesItemReplacements = [];

    linkMarkdownNodes.forEach((linkMarkdownNode) => {
      const identifier = linkMarkdownNode.identifier(context),
            footnoteReplacement = footnoteMap[identifier] || null;

      if (footnoteReplacement !== null) {
        const footnotesItemReplacement = FootnotesItemReplacement.fromFootnoteReplacementAndIdentifier(footnoteReplacement, identifier, context);

        footnotesItemReplacements.push(footnotesItemReplacement);

        identifiers.push(identifier);

        footnoteMap[identifier] = null;
      }
    });

    const footnotesListMarkdownNode = FootnotesListMarkdownNode.fromFootnotesItemReplacementsAndStart(footnotesItemReplacements, start);

    if (footnotesListMarkdownNode !== null) {
      const node = footnotesListMarkdownNode, ///
            tokens = [];

      footnotesItemReplacements.forEach((footnotesItemReplacement) => {
        footnotesItemReplacement.getTokens(tokens);
      });

      footnotesListReplacement = Replacement.fromNodeAndTokens(FootnotesListReplacement, node, tokens, start, identifiers);
    }

    return footnotesListReplacement;
  }
}

function startFromFootnoteMap(footnoteMap) {
  const footnoteReplacements = Object.values(footnoteMap),
        start = footnoteReplacements.reduce((start, footnoteReplacement) => {
          if (footnoteReplacement === null) {
            start++;
          }

          return start;
        }, 1);

  return start;
}
