"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableHeadCellMarkdownNode extends MarkdownNode {
  childNodesAsPlainText(indent, context) {
    const childNodesPlainText = this.fromFirstChildNode((firstChildNode) => {
      const tableCellMarkdownNode = firstChildNode, ///
            childNodesPlainText = tableCellMarkdownNode.childNodesAsPlainText(indent, context);

      return childNodesPlainText;
    });

    return childNodesPlainText;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableHeadCellMarkdownNode, ruleName, childNodes, opacity); }
}
