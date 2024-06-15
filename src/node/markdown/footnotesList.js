"use strict";

import MarkdownNode from "../../node/markdown";
import FootnoteItemReplacement from "../../replacement/footnoteItem";

import { START_ATTRIBUTE_NAME } from "../../attributeNames";
import { FOOTNOTES_LIST_RULE_NAME } from "../../ruleNames";
import { linkMarkdownNodesFromNode } from "../../utilities/query";

export default class FootnotesListMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, opacity, precedence, domElement, start) {
    super(ruleName, childNodes, opacity, precedence, domElement);

    this.start = start;
  }

  getStart() {
    return this.start;
  }

  attributeName(context) {
    const attributeName = START_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = this.start;  ///

    return attributeValue;
  }

  clone() { return super.clone(this.start); }

  static fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context) {
    let footnotesListMarkdownNode = null;

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
      const ruleName = FOOTNOTES_LIST_RULE_NAME,
            childNodes = [], ///
            opacity = null,
            start = footnoteNumbersLength + 1;

      footnotesListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity, start);

      footnoteItemReplacements.forEach((footnotesItemReplacement) => {
        footnotesItemReplacement.appendTo(footnotesListMarkdownNode, context);
      });
    }

    return footnotesListMarkdownNode;
  }
}
