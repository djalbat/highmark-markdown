"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class TableCellMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          lineMarkdownNode = firstChildNode,  ///
          lineMarkdownNodeHTML = lineMarkdownNode.asHTML(indent, context),
          childNodesHTML = lineMarkdownNodeHTML;  ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(domElement, context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          lineMarkdownNode = firstChildNode;  ///

    lineMarkdownNode.createDOMElement(context);

    const parentDOMElement = domElement;  ///

    domElement = lineMarkdownNode.getDOMElement();

    parentDOMElement.appendChild(domElement)
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableCellMarkdownNode, ruleName, childNodes, opacity); }
}
