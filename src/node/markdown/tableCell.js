"use strict";

import MarkdownNode from "../../node/markdown";

export default class TableCellMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodesHTML = this.fromFirstChildNode((firstChildNode) => {
      const lineMarkdownNode = firstChildNode,  ///
            lineMarkdownNodeHTML = lineMarkdownNode.asHTML(indent, context),
            childNodesHTML = lineMarkdownNodeHTML;  ///

      return childNodesHTML;
    });

    return childNodesHTML;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableCellMarkdownNode, ruleName, childNodes, opacity); }
}
