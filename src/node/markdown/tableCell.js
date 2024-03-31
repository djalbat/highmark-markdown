"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class TableCellMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          markedTextChildNode = firstChildNode, ///
          markedTextChildNodeChildNodesHTML = markedTextChildNode.childNodesAsHTML(indent, context),
          childNodesHTML = markedTextChildNodeChildNodesHTML; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const childNodes = this.getChildNodes(),
          domElement = this.getDOMElement(),
          firstChildNode = first(childNodes),
          markedTextChildNode = firstChildNode;

    markedTextChildNode.createChildNodeDOMElements(domElement, context);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableCellMarkdownNode, ruleName, childNodes, opacity); }
}
