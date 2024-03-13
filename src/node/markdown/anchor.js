"use strict";

import MarkdownNode from "../../node/markdown";

import { ID_ATTRIBUTE_NAME } from "../../attributeNames";
import { ANCHOR_RULE_NAME } from "../../ruleNames";

export default class AnchorMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, ambiguous, precedence, domElement, identifier) {
    super(ruleName, childNodes, ambiguous, precedence, domElement);

    this.identifier = identifier;
  }

  getIdentifier() {
    return this.identifier;
  }

  getAttributeName() {
    const attributeName = ID_ATTRIBUTE_NAME;

    return attributeName;
  }

  getAttributeValue(context) {
    const attributeValue = this.identifier; ///

    return attributeValue;
  }

  static fromIdentifier(identifier) {
    const ruleName = ANCHOR_RULE_NAME,
          childNodes = [],
          ambiguous = false,
          anchorMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndAmbiguous(AnchorMarkdownNode, ruleName, childNodes, ambiguous, identifier);

    return anchorMarkdownNode;
  }
}
