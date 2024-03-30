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
            opacity = false;

      footnotesListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity);
    }

    return footnotesListMarkdownNode;
  }
}

function footnoteItemMarkdownNodesFromDivisionMarkdownNode(divisionMarkdownNode, context) {
  const footnoteItemMarkdownNodes = [],
        node = divisionMarkdownNode,  ///
        linkMarkdownNodes = linkMarkdownNodesFromNode(node),
        footnoteMarkdownNodes = footnoteMarkdownNodesFromNode(node),
        identifiers = footnoteMarkdownNodes.map((footnoteMarkdownNode) => {
          const identifier = footnoteMarkdownNode.identifier(context);

          return identifier;
        });

  linkMarkdownNodes.forEach((linkMarkdownNode) => {
    const linkMarkdownNodeIdentifier = linkMarkdownNode.identifier(context),
          identifier = linkMarkdownNodeIdentifier,  ///
          index = identifiers.indexOf(identifier);

    if (index > -1) {
      const start = index,  ///
            deleteCount = 1,
            footnoteMarkdownNode = footnoteMarkdownNodes[index],
            footnoteItemMarkdownNode = FootnoteItemMarkdownNode.fromFootnoteMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier);

      identifiers.splice(start, deleteCount);

      footnoteItemMarkdownNodes.push(footnoteItemMarkdownNode);
    }
  });

  return footnoteItemMarkdownNodes;
}
