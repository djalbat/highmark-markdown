"use strict";

import HTMLNode from "../../node/html";

export default class TableBodyHTMLNode extends HTMLNode {
  childNodesAsPlainText(indent, context) {
    const childNodesPlainText = this.fromFirstChildNode((firstChildNode) => {
      const tableCellMarkdownNode = firstChildNode, ///
            childNodesPlainText = tableCellMarkdownNode.childNodesAsPlainText(indent, context);

      return childNodesPlainText;
    });

    return childNodesPlainText;
  }

  static fromNothing() { return HTMLNode.fromNothing(TableBodyHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(TableBodyHTMLNode, outerNode); }
}
