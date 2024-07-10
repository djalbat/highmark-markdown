"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class TableHeadCellMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          tableCellMarkdownNode = firstChildNode, ///
          childNodesHTML = tableCellMarkdownNode.childNodesAsHTML(indent, context);

    return childNodesHTML;
  }

  childNodesAsPlainText(indent, context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          tableCellMarkdownNode = firstChildNode, ///
          childNodesPlainText = tableCellMarkdownNode.childNodesAsPlainText(indent, context);

    return childNodesPlainText;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TableHeadCellMarkdownNode, ruleName, childNodes, opacity); }
}
