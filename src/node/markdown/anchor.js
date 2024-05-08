"use strict";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";
import { ANCHOR_RULE_NAME } from "../../ruleNames";
import { ID_ATTRIBUTE_NAME } from "../../attributeNames";

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

  childNodesAsHTML(indent, context) {
    const content = EMPTY_STRING,
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const content = EMPTY_STRING,
          textNode = document.createTextNode(content),
          domElement = textNode; ///

    this.addDOMElement(domElement);
  }

  clone() {
    debugger

    return super.clone(this.identifier);
  }

  static fromIdentifier(identifier) {
    const ruleName = ANCHOR_RULE_NAME,
          childNodes = [],
          opacity = null,
          anchorMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(AnchorMarkdownNode, ruleName, childNodes, opacity, identifier);

    return anchorMarkdownNode;
  }
}
