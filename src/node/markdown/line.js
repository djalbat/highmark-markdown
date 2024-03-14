"use strict";

import MarkdownNode from "../../node/markdown";

import { htmlFromChildNodes, domElementsFromChildNodes } from "../../utilities/childNodes";

export default class LineMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          childNodesHTML = htmlFromChildNodes(childNodes, context);

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const childNodes = this.getChildNodes(),
          domElement = this.getDOMElement(),
          domElements = domElementsFromChildNodes(childNodes, context),
          parentDOMElement = domElement,  ///
          siblingDOMElement = null,
          childNodeDOMElements = domElements; ///

    childNodeDOMElements.forEach((childNodeDOMElement) => {
      parentDOMElement.insertBefore(childNodeDOMElement, siblingDOMElement);
    });
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(LineMarkdownNode, ruleName, childNodes, ambiguous); }
}
