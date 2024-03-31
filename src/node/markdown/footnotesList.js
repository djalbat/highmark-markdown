"use strict";

import MarkdownNode from "../../node/markdown";
import FootnoteItemMarkdownNode from "./footnoteItem";

import { FOOTNOTES_LIST_RULE_NAME } from "../../ruleNames";
import { linkMarkdownNodesFromNode, footnoteMarkdownNodesFromNode } from "../../utilities/query";

export default class FootnotesListMarkdownNode extends MarkdownNode {
  identifiers(context) {
    const childNodes = this.getChildNodes(),
          footnoteItemMarkdownNodes = childNodes, ///
          identifiers = footnoteItemMarkdownNodes.map((footnoteItemMarkdownNode) => {
            const identifier = footnoteItemMarkdownNode.identifier(context);

            return identifier;
          });

    return identifiers;
  }

  static fromDivisionMarkdownNode(divisionMarkdownNode, context) {
    let footnotesListMarkdownNode = null;

    const footnoteItemMarkdownNodes = footnoteItemMarkdownNodesFromDivisionMarkdownNode(divisionMarkdownNode, context),
          footnoteItemMarkdownNodesLength = footnoteItemMarkdownNodes.length;

    if (footnoteItemMarkdownNodesLength > 0) {
      const ruleName = FOOTNOTES_LIST_RULE_NAME,
            childNodes = footnoteItemMarkdownNodes, ///
            opacity = null;

      footnotesListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity);
    }

    return footnotesListMarkdownNode;
  }
}

function footnoteItemMarkdownNodesFromDivisionMarkdownNode(divisionMarkdownNode, context) {
  const node = divisionMarkdownNode,  ///
        footnoteItemMarkdownNodes = [],
        identifierToFootnoteMarkdownNodeMap = {},
        linkMarkdownNodes = linkMarkdownNodesFromNode(node),
        footnoteMarkdownNodes = footnoteMarkdownNodesFromNode(node);

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
    }
  });

  return footnoteItemMarkdownNodes;
}
