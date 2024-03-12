"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class TableHeadCellMarkdownNode extends MarkdownNode {
  createChildNodeDOMElements(context) {
    const domElement = this.getDOMElement(),
          childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          tableCellMarkdownNode = firstChildNode; ///

    tableCellMarkdownNode.createChildNodeDOMElements(domElement, context);
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(TableHeadCellMarkdownNode, ruleName, childNodes, ambiguous); }
}
