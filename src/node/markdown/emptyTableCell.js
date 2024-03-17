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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EmptyTableCellMarkdownNode, ruleName, childNodes, opacity); }
}
