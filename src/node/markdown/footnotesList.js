"use strict";

import MarkdownNode from "../../node/markdown";

import { START_ATTRIBUTE_NAME } from "../../attributeNames";
import { FOOTNOTES_LIST_RULE_NAME } from "../../ruleNames";

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

  static fromFootnotesItemReplacementsAndStart(footnotesItemReplacements, start) {
    let footnotesListMarkdownNode = null;

    const footnotesItemReplacementsLength = footnotesItemReplacements.length;

    if (footnotesItemReplacementsLength > 0) {
      const ruleName = FOOTNOTES_LIST_RULE_NAME,
            childNodes = footnotesItemReplacements.map((footnotesItemReplacement) => {
              const footnotesItemReplacementMode = footnotesItemReplacement.getNode(),
                childNode = footnotesItemReplacementMode; ///

              return childNode;
            }),
            opacity = null;

      footnotesListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity, start);
    }

    return footnotesListMarkdownNode;
  }
}
