"use strict";

export default class IndexItem {
  constructor(wordOrPhrase, pageNumbers) {
    this.wordOrPhrase = wordOrPhrase;
    this.pageNumbers = pageNumbers;
  }

  getWordOrPhrase() {
    return this.wordOrPhrase;
  }

  getPageNumbers() {
    return this.pageNumbers;
  }

  static fromWordOrPhraseAndPageNumbers(wordOrPhrase, pageNumbers) {
    const indexItem = new IndexItem(wordOrPhrase, pageNumbers);

    return indexItem;
  }
}
