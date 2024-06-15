"use strict";

import DirectiveMarkdownNode from "../../../node/markdown/directive";

export default class PageNumberDirectiveMarkdownNode extends DirectiveMarkdownNode {
  constructor(ruleName, childNodes, precedence, opacity, domElement, pageNumber) {
    super(ruleName, childNodes, precedence, opacity, domElement);

    this.pageNumber = pageNumber;
  }

  getPageNumber() {
    return this.pageNumber;
  }

  setPageNumber(pageNumber) {
    this.pageNumber = pageNumber;
  }

  content(context) {
    const content = this.pageNumber;

    return content;
  }

  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = `${indent}${startingTag}${childNodesHTML}${closingTag}
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

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const content = this.content(context),
          textNode = document.createTextNode(content),
          domElement = textNode; ///

    this.addDOMElement(domElement);
  }

  clone() { return super.clone(this.number); }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const pageNumber = null,
          pageNumberDirectiveMarkdownNode = DirectiveMarkdownNode.fromRuleNameChildNodesAndOpacity(PageNumberDirectiveMarkdownNode, ruleName, childNodes, opacity, pageNumber);

    return pageNumberDirectiveMarkdownNode;
  }
}
