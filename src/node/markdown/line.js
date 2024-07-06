"use strict";

import MarkdownNode from "../../node/markdown";

import { htmlFromChildNodes, plainTextFromChildNodes, domElementsFromChildNodes } from "../../utilities/childNodes";

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
    const domElement = super.createDOMElement(context),
          childNodes = this.getChildNodes(),
          domElements = domElementsFromChildNodes(childNodes, context),
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
    const childNodes = this.getChildNodes(),
          html = htmlFromChildNodes(childNodes, context),
          childNodesHTML = html;  ///

    return childNodesHTML;
  }

  childNodesAsPlainText(context) {
    const childNodes = this.getChildNodes(),
          plainText = plainTextFromChildNodes(childNodes, context),
          childNodesPlainText = plainText;  ///

    return childNodesPlainText;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(LineMarkdownNode, ruleName, childNodes, opacity); }
}
