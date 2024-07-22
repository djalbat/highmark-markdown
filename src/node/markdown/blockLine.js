"use strict";

import MarkdownNode from "../../node/markdown";

import { replaceEntities } from "../../utilities/html";
import { contentFromNode } from "../../utilities/content";

export default class BlockLineMarkdownNode extends MarkdownNode {
  lines(context) {
    const { charactersPerLine } = context,
          plainText = this.asPlainText(context),
          plainTextLength = plainText.length,
          characters = plainTextLength, ///
          lines = (characters / charactersPerLine) + 1;

    return lines;
  }

  content(context) {
    let content;

    const { tokens } = context,
          node = this;  ///

    content = contentFromNode(node, context);

    const firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens),
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

  mount(parentDOMElement, siblingDOMElement, context) {
    this.domElement = this.createDOMElement(context);

    parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
  }

  unmount(parentDOMElement, context) {
    if (this.domElement !== null) {
      parentDOMElement.removeChild(this.domElement);

      this.domElement = null;
    }
  }

  createDOMElement(context) {
    let domElement;

    let content = this.content(context);

    content = replaceEntities(content); ///

    const textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context)

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  asHTML(indent, context) {
    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  childNodesAsPlainText(context) {
    const content = this.content(context),
          childNodesPlainText = content;  ///

    return childNodesPlainText;
  }

  static lines = 2;

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockLineMarkdownNode, ruleName, childNodes, opacity); }
}
