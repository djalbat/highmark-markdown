"use strict";

import MarkdownNode from "../../node/markdown";

export default class EmptyTableCellMarkdownNode extends MarkdownNode {
  createDOMElement(context) {
    const domElement = null;

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EmptyTableCellMarkdownNode, ruleName, childNodes, opacity); }
}
