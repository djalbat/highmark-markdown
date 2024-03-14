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

  static fromDocumentMarkdownNode(documentMarkdownNode, context) {
    let footnotesListMarkdownNode = null;

    const footnoteItemMarkdownNodes = footnoteItemMarkdownNodesFromDocumentMarkdownNode(documentMarkdownNode, context),
          footnoteItemMarkdownNodesLength = footnoteItemMarkdownNodes.length;

    if (footnoteItemMarkdownNodesLength > 0) {
      const ruleName = FOOTNOTES_LIST_RULE_NAME,
            childNodes = footnoteItemMarkdownNodes, ///
            ambiguous = false;

      footnotesListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndAmbiguous(FootnotesListMarkdownNode, ruleName, childNodes, ambiguous);
    }

    return footnotesListMarkdownNode;
  }
}

function footnoteItemMarkdownNodesFromDocumentMarkdownNode(documentMarkdownNode, context) {
  const footnoteItemMarkdownNodes = [],
        footnoteMarkdownNodes = footnoteMarkdownNodesFromNode(documentMarkdownNode),
        linkMarkdownNodes = linkMarkdownNodesFromNode(documentMarkdownNode),
        identifiers = footnoteMarkdownNodes.map((footnoteMarkdownNode) => {
          const identifier = footnoteMarkdownNode.identifier(context);

          return identifier;
        });

  linkMarkdownNodes.forEach((linkMarkdownNode) => {
    const identifier = linkMarkdownNode.identifier(),
          index = identifiers.indexOf(identifier);

    if (index > -1) {
      const footnoteMarkdownNode = footnoteMarkdownNodes[index],
            footnoteItemMarkdownNode = FootnoteItemMarkdownNode.fromFootnoteMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier);

      footnoteItemMarkdownNodes.push(footnoteItemMarkdownNode);
    }
  });

  return footnoteItemMarkdownNodes;
}
