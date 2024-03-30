"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { SRC_ATTRIBUTE_NAME } from "../../attributeNames";

const { second, secondLast } = arrayUtilities;

export default class ImageMarkdownNode extends MarkdownNode {
  attributeName(context) {
    const attributeName = SRC_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const { pathToURL = null } = context,
          childNodes = this.getChildNodes(),
          secondLastChildNode = secondLast(childNodes),
          pathTerminalNode = secondLastChildNode,  ///
          pathTerminalNodeContent = pathTerminalNode.getContent(),
          path = pathTerminalNodeContent, ///
          imageURL = (pathToURL === null) ?
                       path : ///
                         pathToURL(path),
          attributeValue = imageURL; ///

    return attributeValue;
  }

  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          inlineTextMarkdownNode = secondChildNode,  ///
          content = inlineTextMarkdownNode.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          inlineTextMarkdownNode = secondChildNode,  ///
          content = inlineTextMarkdownNode.content(context),
          childNodeDOMElement = document.createTextNode(content);

    this.insertDOMElement(childNodeDOMElement);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ImageMarkdownNode, ruleName, childNodes, opacity); }
}
