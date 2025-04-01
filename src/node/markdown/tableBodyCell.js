"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableBodyCellMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodesHTML = this.fromFirstChildNode((firstChildNode) => {
      const tableCellMarkdownNode = firstChildNode, ///
            childNodesHTML = tableCellMarkdownNode.childNodesAsHTML(indent, context);

      return childNodesHTML;
    });

    return childNodesHTML;
  }

  childNodesAsPlainText(indent, context) {
    const childNodesPlainText = this.fromFirstChildNode((firstChildNode) => {
      const tableCellMarkdownNode = firstChildNode, ///
            childNodesPlainText = tableCellMarkdownNode.childNodesAsPlainText(indent, context);

      return childNodesPlainText;
    });

    return childNodesPlainText;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableBodyCellMarkdownNode, ruleName, childNodes, opacity); }
}
