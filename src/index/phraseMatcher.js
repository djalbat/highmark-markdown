"use strict";

import { UNDERSCORE, GLOBAL_FLAG, SINGLE_SPACE } from "../constants";

export default class PhraseMatcher {
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

  static revert(entry) {
    entry = entry.replace(/_/g, SINGLE_SPACE);

    return entry;
  }

  static fromPhrase(phrase) {
    const regularExpression = new RegExp(phrase, GLOBAL_FLAG),
          replacement = phrase.replace(/\s/g, UNDERSCORE),
          phraseMatcher = new PhraseMatcher(regularExpression, replacement);

    return phraseMatcher;
  }
}
