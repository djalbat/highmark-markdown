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

  createDOMElement(context) {
    const domElement = super.createDOMElement(context),
          name = ID_ATTRIBUTE_NAME,
          value = this.identifier;

    this.setAttribute(name, value);

    return domElement;
  }

  static fromIdentifier(identifier) {
    const ruleName = ANCHOR_RULE_NAME,
          childNodes = [],
          ambiguous = false,
          anchorMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndAmbiguous(AnchorMarkdownNode, ruleName, childNodes, ambiguous, identifier);

    return anchorMarkdownNode;
  }
}
