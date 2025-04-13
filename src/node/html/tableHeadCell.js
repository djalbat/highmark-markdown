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

  static fromNothing() { return HTMLNode.fromNothing(TableHeadCellHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableHeadCellHTMLNode, outerNode); }
}
