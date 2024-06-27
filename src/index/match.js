"use strict";

import { UNDERSCORE, GLOBAL_FLAG, SINGLE_SPACE } from "../constants";

export default class IndexMatch {
  constructor(regularExpression, replacement) {
    this.regularExpression = regularExpression;
    this.replacement = replacement;
  }

  getRegularExpression() {
    return this.regularExpression;
  }

  getReplacement() {
    return this.replacement;
  }

  replace(plainText) {
    plainText = plainText.replace(this.regularExpression, this.replacement);  ///

    return plainText;
  }

  static revert(wordOrPhrase) {
    wordOrPhrase = wordOrPhrase.replace(/_/g, SINGLE_SPACE);

    return wordOrPhrase;
  }

  static fromPhrase(phrase) {
    const regularExpression = new RegExp(phrase, GLOBAL_FLAG),
          replacement = phrase.replace(/\s/g, UNDERSCORE),
          indexMatch = new IndexMatch(regularExpression, replacement);

    return indexMatch;
  }
}
