"use strict";

import MarkdownNode from "../../node/markdown";

import { htmlFromChildNodes, domElementsFromChildNodes } from "../../utilities/childNodes";

export default class TableCellMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          childNodesHTML = htmlFromChildNodes(childNodes, context);

    return childNodesHTML;
  }

  createChildNodeDOMElements(domElement, context) {
    const childNodes = this.getChildNodes(),
          domElements = domElementsFromChildNodes(childNodes, context),
          parentDOMElement = domElement,  ///
          siblingDOMElement = null,
          childNodeDOMElements = domElements; ///

    childNodeDOMElements.forEach((childNodeDOMElement) => {
      parentDOMElement.insertBefore(childNodeDOMElement, siblingDOMElement);
    });
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableCellMarkdownNode, ruleName, childNodes, opacity); }
}
