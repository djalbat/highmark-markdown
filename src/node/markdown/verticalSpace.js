"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class VerticalSpaceMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          endOfLineMarkdownNode = firstChildNode,
          content = endOfLineMarkdownNode.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          inlineTextMarkdownNode = firstChildNode,  ///
          content = inlineTextMarkdownNode.content(context),
          childNodeDOMElement = document.createTextNode(content);

    this.insertDOMElement(childNodeDOMElement);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(VerticalSpaceMarkdownNode, ruleName, childNodes, opacity); }
}
