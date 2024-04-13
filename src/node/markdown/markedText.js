"use strict";

import MarkdownNode from "../../node/markdown";

import { htmlFromChildNodes, domElementsFromChildNodes } from "../../utilities/childNodes";

export default class MarkedTextMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context, trimmed = false) {
    const childNodes = this.getChildNodes(),
          html = htmlFromChildNodes(childNodes, context, trimmed);

    return html;
  }

  createChildNodeDOMElements(domElement, context, trimmed = false) {
    const parentDOMElement = domElement,  ///
          siblingDOMElement = null;

    const childNodes = this.getChildNodes(),
          domElements = domElementsFromChildNodes(childNodes, context, trimmed),
          childNodeDOMElements = domElements; ///

    childNodeDOMElements.forEach((childNodeDOMElement) => {
      parentDOMElement.insertBefore(childNodeDOMElement, siblingDOMElement);
    });
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(MarkedTextMarkdownNode, ruleName, childNodes, opacity); }
}
