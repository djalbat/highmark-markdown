"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { second, secondLast } = arrayUtilities;

export default class HyperlinkMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          inlineTextMarkdownNode = secondChildNode, ///
          inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context),
          childNodesHTML = inlineTextMarkdownNodeHTML; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          inlineTextMarkdownNode = secondChildNode, ///
          inlineTextMarkdownNodeDOMElement = inlineTextMarkdownNode.createDOMElement(context);

    this.insertDOMElement(inlineTextMarkdownNodeDOMElement);
  }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const childNodes = this.getChildNodes(),
          secondLastChildNode = secondLast(childNodes),
          URLMarkdownNode = secondLastChildNode,  ///
          URLMarkdownNodeContent = URLMarkdownNode.content(context),
          attributeValue = URLMarkdownNodeContent; ///

    return attributeValue;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(HyperlinkMarkdownNode, ruleName, childNodes, opacity); }
}
