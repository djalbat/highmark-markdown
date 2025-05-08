"use strict";

import HTMLNode from "../../../node/html";

import { COMMA } from "../../../constants";

export default class IndexItemHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, pageNumbers, wordOrPhrase) {
    super(outerNode, parentNode, childNodes, domElement, pageNumbers, wordOrPhrase);

    this.pageNumbers = pageNumbers;
    this.wordOrPhrase = wordOrPhrase;
  }

  getPageNumbers() {
    return this.pageNumbers;
  }

  getWordOrPhrase() {
    return this.wordOrPhrase;
  }

//   asHTML(indent, context) {
//     indent = this.adjustIndent(indent);
//
//     const childNodesHTML = this.childNodesAsHTML(indent, context),
//           startingTag = this.startingTag(context),
//           closingTag = this.closingTag(context),
//           html = `${indent}${startingTag}${childNodesHTML}${closingTag}
// `;
//
//   pageNumbersContent = pageNumbers.join(COMMA),
//   content = `${wordOrPhrase},${pageNumbersContent}`,
//     return html;
//   }

//   childNodesAsHTML(indent, context) {
//     indent = null;
//
//     const childNodesHTML = super.childNodesAsHTML(indent, context);
//
//     return childNodesHTML;
//   }

  static tagName = "li";

  static className = "index";

  static fromNothing() { return HTMLNode.fromNothing(IndexItemHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(IndexItemHTMLNode, outerNode); }

  static fromIndexItem(indexItem) {
    const pageNumbers = indexItem.getPageNumbers(),
          wordOrPhrase = indexItem.getWordOrPhrase(),
          indexItemHTMLNode = HTMLNode.fromNothing(IndexItemHTMLNode, pageNumbers, wordOrPhrase);

    return indexItemHTMLNode;
  }
}
