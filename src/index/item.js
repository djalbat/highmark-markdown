"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export default class IndexItem {
  constructor(lowerCaseLetter, wordOrPhrase, pageNumbers) {
    this.lowerCaseLetter = lowerCaseLetter;
    this.wordOrPhrase = wordOrPhrase;
    this.pageNumbers = pageNumbers;
  }

  getLowerCaseLetter() {
    return this.lowerCaseLetter;
  }

  getWordOrPhrase() {
    return this.wordOrPhrase;
  }

  getPageNumbers() {
    return this.pageNumbers;
  }

  matchLetter(letter) {
    const matchesLetter = (this.lowerCaseLetter === letter);

    return matchesLetter;
  }

  static fromWordOrPhraseAndPageNumbers(wordOrPhrase, pageNumbers) {
    const lowerCaseWordOrPhrase = wordOrPhrase.toLowerCase(),
          lowerCaseLetters = [
            ...lowerCaseWordOrPhrase
          ],
          firstLowerCaseLetter = first(lowerCaseLetters),
          lowerCaseLetter = firstLowerCaseLetter, ///
          indexItem = new IndexItem(lowerCaseLetter, wordOrPhrase, pageNumbers);

    return indexItem;
  }
}
