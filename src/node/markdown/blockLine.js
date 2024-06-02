"use strict";

import MarkdownNode from "../../node/markdown";

import { contentFromNode } from "../../utilities/content";

export default class BlockLineMarkdownNode extends MarkdownNode {
  content(context) {
    let content;

    const { tokens } = context,
          node = this;  ///

    content = contentFromNode(node, context);

    const firstSignificantToken = this.getFirstSignificantToken(),
          firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
          previousTokenIndex = firstSignificantTokenIndex - 1,
          previousToken = tokens[previousTokenIndex],
          previousTokenWhitespaceToken = previousToken.isWhitespaceToken();

    if (previousTokenWhitespaceToken) {
      const whitespaceToken = previousToken,  ///
            whitespaceTokenContent = whitespaceToken.getContent();

      content = `${whitespaceTokenContent}${content}`;
    }

    const childNodesHTML = content; ///

    return childNodesHTML;
  }

  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = `${indent}${startingTag}${childNodesHTML}${closingTag}`;

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

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    let domElement;

    domElement = this.getDOMElement();

    const content = this.content(context),
          textNode = document.createTextNode(content),
          parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockLineMarkdownNode, ruleName, childNodes, opacity); }
}
