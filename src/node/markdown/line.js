"use strict";

import MarkdownNode from "../../node/markdown";

import { domElementsFromChildNodes } from "../../utilities/childNodes";

export default class LineMarkdownNode extends MarkdownNode {
  createChildNodeDOMElements(context) {
    const domElement = this.getDOMElement(),
          childNodes = this.getChildNodes(),
          domElements = domElementsFromChildNodes(childNodes, context),
          parentDOMElement = domElement,  ///
          siblingDOMElement = null;

    domElements.forEach((domElement) => {
      parentDOMElement.insertBefore(domElement, siblingDOMElement);
    });
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(LineMarkdownNode, ruleName, childNodes, ambiguous); }
}
