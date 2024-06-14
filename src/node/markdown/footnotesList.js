"use strict";

import MarkdownNode from "../../node/markdown";
import FootnoteItemMarkdownNode from "./footnoteItem";

import { FOOTNOTES_LIST_RULE_NAME } from "../../ruleNames";
import { linkMarkdownNodesFromNode, footnoteMarkdownNodsFromNode } from "../../utilities/query";

export default class FootnotesListMarkdownNode extends MarkdownNode {
  identifierToNumberMap(context) {
    const childNodes = this.getChildNodes(),
          footnoteItemMarkdownNodes = childNodes, ///
          identifierToNumberMap = footnoteItemMarkdownNodes.reduce((identifierToNumberMap, footnoteItemMarkdownNode, index) => {
            const number = index + 1,
                  identifier = footnoteItemMarkdownNode.identifier(context);

            identifierToNumberMap[identifier] = number;

            return identifierToNumberMap;
          }, {});

    return identifierToNumberMap;
  }

  static fromDivisionMarkdownNodeAndReplacements(divisionMarkdownNode, replacements, context) {
    let footnotesListMarkdownNode = null;

    replacements = replacements.map((replacement) => {  ///
      const node = replacement.getNode(),
            footnoteMarkdownNode = footnoteMarkdownNodsFromNode(node),
            descendentNode = footnoteMarkdownNode;  ///

      replacement = replacement.contract(descendentNode);

      return replacement;
    });

    const node = divisionMarkdownNode,  ///
          linkMarkdownNodes = linkMarkdownNodesFromNode(node),
          identifierToReplacementMap = {};

    replacements.forEach((replacement) => {
      const node = replacement.getNode(),
            footnoteMarkdownNode = node,  ///
            identifier = footnoteMarkdownNode.identifier(context);

      identifierToReplacementMap[identifier] = replacement;
    });

    replacements = [];

    linkMarkdownNodes.forEach((linkMarkdownNode) => {
      const identifier = linkMarkdownNode.identifier(context);

      let replacement = identifierToReplacementMap[identifier] || null;

      if (replacement !== null) {
        const node = replacement.getNode(),
              footnoteMarkdownNode = node,  ///
              footnoteItemMarkdownNode = FootnoteItemMarkdownNode.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier),
              ascendantNode = footnoteItemMarkdownNode; ///

        replacement = replacement.expand(ascendantNode);

        delete identifierToReplacementMap[identifier];

        replacements.push(replacement);
      }
    });

    const replacementsLength = replacements.length;

    if (replacementsLength > 0) {
      const ruleName = FOOTNOTES_LIST_RULE_NAME,
            childNodes = [], ///
            opacity = null;

      footnotesListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity);
    }

    replacements.forEach((replacement) => {
      replacement.appendTo(footnotesListMarkdownNode, context);
    });

    return footnotesListMarkdownNode;
  }
}
