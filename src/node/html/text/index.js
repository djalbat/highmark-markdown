"use strict";

import TextHTMLNode from "../../../node/html/text";

import { INDEX_TEXT_MARKDOWN_RULE_NAME } from "../../../ruleNames/markdown";

export default class IndexTextHTMLNode extends TextHTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, wordOrPhrase) {
    super(outerNode, parentNode, childNodes, domElement, wordOrPhrase);

    this.wordOrPhrase = wordOrPhrase;
  }

  getWordOrPhrase() {
    return this.wordOrPhrase;
  }

  getRuleName() {
    const ruleName = INDEX_TEXT_MARKDOWN_RULE_NAME;

    return ruleName;
  }

  text(context) {
    const text = `${this.wordOrPhrase}
`;

    return text;
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  //.

    return string;
  }

  static tagName = null;

  static className = null;

  static fromWordOrPhrase(wordOrPhrase) {
    const indexTextHTMLNode = TextHTMLNode.fromNothing(IndexTextHTMLNode, wordOrPhrase);

    return indexTextHTMLNode;
  }
}
