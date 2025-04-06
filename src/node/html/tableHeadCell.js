"use strict";

import HTMLNode from "../../node/html";

export default class TableHeadCellHTMLNode extends HTMLNode {
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

  static fromNothing() { return HTMLNode.fromNothing(TableHeadCellHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableHeadCellHTMLNode, outerNode); }
}
