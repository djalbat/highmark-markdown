"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class LineMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const trimmed = true,
          childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          markedTextChildNode = firstChildNode, ///
          markedTextChildNodeChildNodesHTML = markedTextChildNode.childNodesAsHTML(indent, context, trimmed),
          childNodesHTML = `${markedTextChildNodeChildNodesHTML}\n`;

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const trimmed = true,
          domElement = this.getDOMElement(),
          childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          markedTextChildNode = firstChildNode; ///

    markedTextChildNode.createChildNodeDOMElements(domElement, context, trimmed);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(LineMarkdownNode, ruleName, childNodes, opacity); }
}
