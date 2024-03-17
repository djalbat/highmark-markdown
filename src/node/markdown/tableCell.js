"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import TextMarkdownNode from "./text";

import { PERIOD } from "../../constants";
import { htmlFromChildNodes, domElementsFromChildNodes } from "../../utilities/childNodes";

const { first } = arrayUtilities;

export default class TableCellMarkdownNode extends MarkdownNode {
  isEmpty(context) {
    let empty = false;

    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength === 2) {
      const firstChildNode = first(childNodes),
            firstChildNodeTextMarkdownNode = (firstChildNode instanceof TextMarkdownNode);

      if (firstChildNodeTextMarkdownNode) {
        const textMarkdownNode = firstChildNode,  ///
              content = textMarkdownNode.content(context);

        if (content === PERIOD) {
          empty = true;
        }
      }
    }

    return empty;
  }

  childNodesAsHTML(indent, context) {
    let childNodesHTML = null;

    const empty = this.isEmpty(context);

    if (!empty) {
      const childNodes = this.getChildNodes(),
            html = htmlFromChildNodes(childNodes, context);

      childNodesHTML = html;  ///
    }

    return childNodesHTML;
  }

  createChildNodeDOMElements(domElement, context) {
    const empty = this.isEmpty(context);

    if (empty) {
      return;
    }

    const childNodes = this.getChildNodes(),
          domElements = domElementsFromChildNodes(childNodes, context),
          parentDOMElement = domElement,  ///
          childDOMElements = domElements,  ///
          siblingDOMElement = null;

    childDOMElements.forEach((childDOMElement) => {
      parentDOMElement.insertBefore(childDOMElement, siblingDOMElement);
    });
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableCellMarkdownNode, ruleName, childNodes, opacity); }
}
