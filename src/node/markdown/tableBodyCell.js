"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class TableBodyCellMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          tableCellMarkdownNode = firstChildNode, ///
          childNodesHTML = tableCellMarkdownNode.childNodesAsHTML(indent, context);

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const domElement = this.getDOMElement(),
          childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          tableCellMarkdownNode = firstChildNode; ///

    tableCellMarkdownNode.createChildNodeDOMElements(domElement, context);
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(TableBodyCellMarkdownNode, ruleName, childNodes, ambiguous); }
}
