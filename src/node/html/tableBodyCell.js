"use strict";

import HTMLNode from "../../node/html";

export default class TableBodyCellHTMLNode extends HTMLNode {
  childNodesAsHTML(indent, context) {
    const childNodesHTML = this.fromFirstChildNode((firstChildNode) => {
      const tableCellMarkdownNode = firstChildNode, ///
            childNodesHTML = tableCellMarkdownNode.childNodesAsHTML(indent, context);

      return childNodesHTML;
    });

    return childNodesHTML;
  }

  static fromNothing() { return HTMLNode.fromNothing(TableBodyCellHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableBodyCellHTMLNode, outerNode); }
}
