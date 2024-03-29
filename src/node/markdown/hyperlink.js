"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { first, second, secondLast } = arrayUtilities;

export default class HyperlinkMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    const childNodes = this.getChildNodes(),
      childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes),
            urlMarkdownNode = firstChildNode,
            urlMarkdownNodeHTML = urlMarkdownNode.asHTML(indent, context);

      childNodesHTML = urlMarkdownNodeHTML;  ///
    } else {
      const secondChildNode = second(childNodes),
            inlineTextMarkdownNode = secondChildNode, ///
            inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context);

      childNodesHTML = inlineTextMarkdownNodeHTML; ///
    }

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const childNodes = this.getChildNodes(),
      childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes),
            urlMarkdownNode = firstChildNode, ///
            urlMarkdownNodeDOMElement = urlMarkdownNode.createDOMElement(context);

      this.insertDOMElement(urlMarkdownNodeDOMElement);
    } else {
      const secondChildNode = second(childNodes),
            inlineTextMarkdownNode = secondChildNode, ///
            inlineTextMarkdownNodeDOMElement = inlineTextMarkdownNode.createDOMElement(context);

      this.insertDOMElement(inlineTextMarkdownNodeDOMElement);
    }
  }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length;

    let urlMarkdownNode;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes);

      urlMarkdownNode = firstChildNode;  ///
    } else {
      const secondLastChildNode = secondLast(childNodes);

      urlMarkdownNode = secondLastChildNode;  ///
    }

    const urlMarkdownNodeContent = urlMarkdownNode.content(context),
          attributeValue = urlMarkdownNodeContent;  ///

    return attributeValue;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(HyperlinkMarkdownNode, ruleName, childNodes, opacity); }
}
