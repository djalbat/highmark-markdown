"use strict";

import MarkdownNode from "../../node/markdown";

import { htmlFromChildNodes, domElementsFromChildNodes } from "../../utilities/childNodes";

export default class LineMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          html = htmlFromChildNodes(childNodes, context);

    return html;
  }

  createChildNodeDOMElements(context) {
    const childNodes = this.getChildNodes(),
          domElement = this.getDOMElement(),
          domElements = domElementsFromChildNodes(childNodes, context),
          parentDOMElement = domElement,  ///
          siblingDOMElement = null;

    domElements.forEach((domElement) => {
      parentDOMElement.insertBefore(domElement, siblingDOMElement);
    });
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(LineMarkdownNode, ruleName, childNodes, ambiguous); }
}
