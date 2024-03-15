"use strict";

import MarkdownNode from "../../node/markdown";

export default class EmptyTableCellMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodesHTML = null;

    return childNodesHTML;
  }

  createChildNodeDOMElements(domElement, context) {
    ///
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(EmptyTableCellMarkdownNode, ruleName, childNodes, ambiguous); }
}
