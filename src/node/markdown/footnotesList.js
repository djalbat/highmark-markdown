"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import FootnoteItemMarkdownNode from "./footnoteItem";

import { FOOTNOTES_LIST_RULE_NAME } from "../../ruleNames";
import { linkMarkdownNodesFromNode } from "../../utilities/query";

const { prune } = arrayUtilities;

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

  static fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context) {
    let footnotesListMarkdownNode = null;

    const node = divisionMarkdownNode,  ///
          linkMarkdownNodes = linkMarkdownNodesFromNode(node),
          footnoteItemReplacements = [];

    linkMarkdownNodes.forEach((linkMarkdownNode) => {
      const identifier = linkMarkdownNode.identifier(context),
            footnoteReplacement = prune(footnoteReplacements, (footnoteReplacement) => {
              const node = footnoteReplacement.getNode(),
                    footnoteMarkdownNode = node,  ///
                    footnoteMarkdownNodeIdentifier = footnoteMarkdownNode.identifier(context);

              if (footnoteMarkdownNodeIdentifier === identifier) {
                return true;
              }
            }) || null;

      if (footnoteReplacement !== null) {
        const node = footnoteReplacement.getNode(),
              footnoteMarkdownNode = node,  ///
              footnoteItemMarkdownNode = FootnoteItemMarkdownNode.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier),
              ascendantNode = footnoteItemMarkdownNode, ///
              footnoteItemReplacement = footnoteReplacement.expand(ascendantNode);

        footnoteItemReplacements.push(footnoteItemReplacement);
      }
    });

    const footnoteItemReplacementsLength = footnoteItemReplacements.length;

    if (footnoteItemReplacementsLength > 0) {
      const ruleName = FOOTNOTES_LIST_RULE_NAME,
            childNodes = [], ///
            opacity = null;

      footnotesListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity);
    }

    footnoteItemReplacements.forEach((footnotesItemReplacement) => {
      footnotesItemReplacement.appendTo(footnotesListMarkdownNode, context);
    });

    return footnotesListMarkdownNode;
  }
}
