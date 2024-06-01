"use strict";

import MarkdownNode from "../../node/markdown";

import { htmlFromChildNodes, domElementsFromChildNodes } from "../../utilities/childNodes";

export default class BlockLineMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context, leftTrimmed = false) {
    const childNodes = this.getChildNodes(),
          html = htmlFromChildNodes(childNodes, context, leftTrimmed);

    return html;
  }

  createChildNodeDOMElements(context, leftTrimmed = false) {
    const domElement = this.getDOMElement(),
          childNodes = this.getChildNodes(),
          domElements = domElementsFromChildNodes(childNodes, context, leftTrimmed),
          parentDOMElement = domElement,  ///
          childNodeDOMElements = domElements; ///

    childNodeDOMElements.forEach((childNodeDOMElement) => {
      const domElement = childNodeDOMElement; ///

      parentDOMElement.appendChild(domElement);
    });
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockLineMarkdownNode, ruleName, childNodes, opacity); }
}
