"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { second } = arrayUtilities;

export default class UnorderedListItemMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          markedTextChildNode = secondChildNode, ///
          markedTextChildNodeChildNodesHTML = markedTextChildNode.childNodesAsHTML(indent, context),
          childNodesHTML = markedTextChildNodeChildNodesHTML; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const domElement = this.getDOMElement(),
          childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          markedTextChildNode = secondChildNode; ///

    markedTextChildNode.createChildNodeDOMElements(domElement, context);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(UnorderedListItemMarkdownNode, ruleName, childNodes, opacity); }
}
