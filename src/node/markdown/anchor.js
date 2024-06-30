"use strict";

import { EpsilonNode } from "occam-parsers";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";
import { ANCHOR_RULE_NAME } from "../../ruleNames";
import { ID_ATTRIBUTE_NAME } from "../../attributeNames";

export default class AnchorMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, opacity, precedence, domElement, prepend, identifier) {
    super(ruleName, childNodes, opacity, precedence, domElement, prepend);

    this.prepend = prepend;
    this.identifier = identifier;
  }

  getPrepend() {
    return this.prepend;
  }

  getIdentifier() {
    return this.identifier;
  }

  attributeName(context) {
    const attributeName = ID_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = `${this.prepend}-${this.identifier}`;

    return attributeValue;
  }

  asHTML(indent, context) {
    if (context === undefined) {
      context = indent; ///

      indent = null;
    }

    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = (indent === null) ?
                  `${startingTag}${childNodesHTML}${closingTag}` :
                    `${indent}${startingTag}
${childNodesHTML}${indent}${closingTag}
`;

    return html;
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

  clone() { return super.clone(this.prepend, this.identifier); }

  static fromPrependAndIdentifier(prepend, identifier) {
    const epsilonNode = EpsilonNode.fromNothing(),
          ruleName = ANCHOR_RULE_NAME,
          childNodes = [
            epsilonNode
          ],
          opacity = null,
          anchorMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(AnchorMarkdownNode, ruleName, childNodes, opacity, prepend, identifier);

    return anchorMarkdownNode;
  }
}
