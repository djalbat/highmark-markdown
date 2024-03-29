"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { first, second, secondLast } = arrayUtilities;

export default class MailToLinkMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes),
            addressMarkdownNode = firstChildNode,
            addressMarkdownNodeContent = addressMarkdownNode.content(context);

      childNodesHTML = addressMarkdownNodeContent;  ///
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
          childNodesLength = childNodes.length;

    let addressMarkdownNode;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes);

      addressMarkdownNode = firstChildNode;  ///
    } else {
      const secondLastChildNode = secondLast(childNodes);

      addressMarkdownNode = secondLastChildNode;  ///
    }

    const addressMarkdownNodeContent = addressMarkdownNode.content(context),
          attributeValue = `mailto:${addressMarkdownNodeContent}`;

    return attributeValue;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(MailToLinkMarkdownNode, ruleName, childNodes, opacity); }
}
