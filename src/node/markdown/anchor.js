"use strict";

import MarkdownNode from "../../node/markdown";

import { ID_ATTRIBUTE_NAME } from "../../attributeNames";
import { ANCHOR_RULE_NAME } from "../../ruleNames";

export default class AnchorMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, opacity, precedence, domElement, identifier) {
    super(ruleName, childNodes, opacity, precedence, domElement);

    this.identifier = identifier;
  }

  getIdentifier() {
    return this.identifier;
  }

  attributeName(context) {
    const attributeName = ID_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = this.identifier; ///

    return attributeValue;
  }

  static fromIdentifier(identifier) {
    const ruleName = ANCHOR_RULE_NAME,
          childNodes = [],
          opacity = false,
          anchorMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(AnchorMarkdownNode, ruleName, childNodes, opacity, identifier);

    return anchorMarkdownNode;
  }
}
