"use strict";

import MarkdownNode from "../../node/markdown";
import FootnoteItemMarkdownNode from "./footnoteItem";

import { FOOTNOTES_LIST_RULE_NAME } from "../../ruleNames";
import { linkMarkdownNodesFromNode, footnoteMarkdownNodesFromNode } from "../../utilities/query";

export default class FootnotesListMarkdownNode extends MarkdownNode {
  identifierToNumberMap(context) {
    const childNodes = this.getChildNodes(),
          footnoteItemMarkdownNodes = childNodes, ///
          identifierToNumberMap = footnoteItemMarkdownNodes.map((identifierToNumberMap, footnoteItemMarkdownNode, index) => {
            const number = index + 1,
                  identifier = footnoteItemMarkdownNode.identifier(context);

            identifierToNumberMap[identifier] = number;

            return identifierToNumberMap;
          }, {});

    return identifierToNumberMap;
  }

  static fromDivisionMarkdownNode(divisionMarkdownNode, context) {
    let footnotesListMarkdownNode = null;

    const node = divisionMarkdownNode,  ///
          linkMarkdownNodes = linkMarkdownNodesFromNode(node),
          footnoteMarkdownNodes = footnoteMarkdownNodesFromNode(node),
          footnoteItemMarkdownNodes = [],
          identifierToFootnoteMarkdownNodeMap = {};

    footnoteMarkdownNodes.forEach((footnoteMarkdownNode) => {
      const identifier = footnoteMarkdownNode.identifier(context);

      identifierToFootnoteMarkdownNodeMap[identifier] = footnoteMarkdownNode;
    });

    linkMarkdownNodes.forEach((linkMarkdownNode) => {
      const identifier = linkMarkdownNode.identifier(context),
            footnoteMarkdownNode = identifierToFootnoteMarkdownNodeMap[identifier] || null;

      if (footnoteMarkdownNode !== null) {
        const footnoteItemMarkdownNode = FootnoteItemMarkdownNode.fromFootnoteMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier);

        footnoteItemMarkdownNodes.push(footnoteItemMarkdownNode);

        delete identifierToFootnoteMarkdownNodeMap[identifier];
      }
    });

    const footnoteItemMarkdownNodesLength = footnoteItemMarkdownNodes.length;

    if (footnoteItemMarkdownNodesLength > 0) {
      const ruleName = FOOTNOTES_LIST_RULE_NAME,
            childNodes = footnoteItemMarkdownNodes, ///
            opacity = null;

      footnotesListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity);
    }

    return footnotesListMarkdownNode;
  }
}
