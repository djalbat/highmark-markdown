"use strict";

import MarkdownNode from "../../node/markdown";

import { htmlFromMarkdownNode, plainTextFromMarkdownNode, domElementsFromMarkdownNode } from "../../utilities/childNodes";

export default class LineMarkdownNode extends MarkdownNode {
  lines(context) {
    const { charactersPerLine } = context,
          plainText = this.asPlainText(context),
          plainTextLength = plainText.length,
          characters = plainTextLength, ///
          lines = (characters / charactersPerLine) + 1;

    return lines;
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
    const markdownNode = this,
          domElement = super.createDOMElement(context),
          domElements = domElementsFromMarkdownNode(markdownNode, context),
          parentDOMElement = domElement,  ///
          childNodeDOMElements = domElements; ///

    childNodeDOMElements.forEach((childNodeDOMElement) => {
      const domElement = childNodeDOMElement; ///

      parentDOMElement.appendChild(domElement);
    });

    return domElement;
  }

  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = (indent !== null) ?
                   `${indent}${startingTag}${childNodesHTML}${closingTag}
`:                   `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

  childNodesAsHTML(indent, context) {
    const markdownNode = this,
          html = htmlFromMarkdownNode(markdownNode, context),
          childNodesHTML = html;  ///

    return childNodesHTML;
  }

  childNodesAsPlainText(context) {
    const markdownNode = this, ///
          plainText = plainTextFromMarkdownNode(markdownNode, context),
          childNodesPlainText = plainText;  ///

    return childNodesPlainText;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(LineMarkdownNode, ruleName, childNodes, opacity); }
}
