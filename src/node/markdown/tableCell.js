"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import TextMarkdownNode from "./text";

import { PERIOD } from "../../constants";
import { domElementsFromChildNodes } from "../../utilities/childNodes";

const { first } = arrayUtilities;

export default class TableCellMarkdownNode extends MarkdownNode {
  createChildNodeDOMElements(domElement, context) {
    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength === 2) {
      const firstChildNode = first(childNodes),
            firstChildNodeTextMarkdownNode = (firstChildNode instanceof TextMarkdownNode);

      if (firstChildNodeTextMarkdownNode) {
        const textMarkdownNode = firstChildNode,  ///
              content = textMarkdownNode.content(context);

        if (content === PERIOD) {
          return;
        }
      }
    }

    const domElements = domElementsFromChildNodes(childNodes, context),
          parentDOMElement = domElement,  ///
          siblingDOMElement = null;

    domElements.forEach((domElement) => {
      parentDOMElement.insertBefore(domElement, siblingDOMElement);
    });
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(TableCellMarkdownNode, ruleName, childNodes, ambiguous); }
}
