"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class BlockListingMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = `${startingTag}
${childNodesHTML}${closingTag}
`;

    return html;
  }

  createDOMElement(context) {
    const tagName = this.tagName(context),
          className = this.className(context),
          domElement = document.createElement(tagName);

    Object.assign(domElement, {
      className
    });

    this.setDOMElement(domElement);

    this.createChildNodeDOMElements(context);

    return domElement;
  }

  className(context) {
    let className = super.className(context);

    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          blockListingStartMarkdownNode = firstChildNode, ///
          blockListingStartMarkdownNodeClassName = blockListingStartMarkdownNode.className(context);

    if (blockListingStartMarkdownNodeClassName !== null) {
      className = `${className} ${blockListingStartMarkdownNodeClassName}`;
    }

    return className;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockListingMarkdownNode, ruleName, childNodes, opacity); }
}
