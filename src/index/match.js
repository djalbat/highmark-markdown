"use strict";

import { UNDERSCORE, GLOBAL_FLAG, SINGLE_SPACE } from "../constants";

export default class IndexMatch {
  constructor(regularExpression, transform) {
    this.regularExpression = regularExpression;
    this.transform = transform;
  }

  getRegularExpression() {
    return this.regularExpression;
  }

  getReplacement() {
    return this.transform;
  }

  replace(plainText) {
    plainText = plainText.replace(this.regularExpression, this.transform);  ///

    return plainText;
  }

  static revert(wordOrPhrase) {
    wordOrPhrase = wordOrPhrase.replace(/_/g, SINGLE_SPACE);

    return wordOrPhrase;
  }

  static fromPhrase(phrase) {
    const regularExpression = new RegExp(phrase, GLOBAL_FLAG),
          transform = phrase.replace(/\s/g, UNDERSCORE),
          indexMatch = new IndexMatch(regularExpression, transform);

    return indexMatch;
  }
}
