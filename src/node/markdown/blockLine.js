"use strict";

import MarkdownNode from "../../node/markdown";

import { contentFromNode } from "../../utilities/content";
import { plainTextFromChildNodes } from "../../utilities/childNodes";

export default class BlockLineMarkdownNode extends MarkdownNode {
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

  createDOMElement(context) {
    let domElement;

    const content = this.content(context),
          textNode = document.createTextNode(content);

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
    const childNodes = this.getChildNodes(),
          plainText = plainTextFromChildNodes(childNodes, context);

    return plainText;
  }

  static lines = 2;

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockLineMarkdownNode, ruleName, childNodes, opacity); }
}
