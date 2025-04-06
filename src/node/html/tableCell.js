"use strict";

import HTMLNode from "../../node/html";

export default class TableCellHTMLNode extends HTMLNode {
  childNodesAsHTML(indent, context) {
    const childNodesHTML = this.fromFirstChildNode((firstChildNode) => {
      const lineMarkdownNode = firstChildNode,  ///
            lineMarkdownNodeHTML = lineMarkdownNode.asHTML(indent, context),
            childNodesHTML = lineMarkdownNodeHTML;  ///

      return childNodesHTML;
    });

    return childNodesHTML;
  }

  static fromNothing() { return HTMLNode.fromNothing(TableCellHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableCellHTMLNode, outerNode); }
}
