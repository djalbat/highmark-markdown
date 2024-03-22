"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { SRC_ATTRIBUTE_NAME } from "../../attributeNames";

const { second, secondLast } = arrayUtilities;

export default class ImageMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const content = this.content(context),
          domElement = this.getDOMElement(),
          parentDOMElement = domElement,  ///
          siblingDOMElement = null,
          childNodeDOMElement = document.createTextNode(content);

    parentDOMElement.insertBefore(childNodeDOMElement, siblingDOMElement);
  }

  content(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          inlineTextMarkdownNode = secondChildNode,  ///
          content = inlineTextMarkdownNode.content(context);

    return content;
  }

  attributeName() {
    const attributeName = SRC_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const childNodes = this.getChildNodes(),
          secondLastChildNode = secondLast(childNodes),
          pathTerminalNode = secondLastChildNode,  ///
          pathTerminalNodeContent = pathTerminalNode.getContent(),
          attributeValue = pathTerminalNodeContent; ///

    return attributeValue;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ImageMarkdownNode, ruleName, childNodes, opacity); }
}
