"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class LineMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const leftTrimmed = true,
          childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          markedTextChildNode = firstChildNode, ///
          childNodesHTML = markedTextChildNode.childNodesAsHTML(indent, context, leftTrimmed);

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const leftTrimmed = true,
          domElement = this.getDOMElement(),
          childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          markedTextChildNode = firstChildNode; ///

    markedTextChildNode.createChildNodeDOMElements(domElement, context, leftTrimmed);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(LineMarkdownNode, ruleName, childNodes, opacity); }
}
