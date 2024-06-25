"use strict";

import { UNDERSCORE, GLOBAL_FLAG, EMPTY_STRING, SINGLE_SPACE } from "../constants";

export function indexMapFromDivisionMarkdownNodes(divisionMarkdownNodes, context) {
  const indexMap = {};

  const { indexOptions } = context,
        { phrases, ignoredWords } = indexOptions,
        phraseMatchers = phraseMatchersFromPhrase(phrases);

  divisionMarkdownNodes.forEach((divisionMarkdownNode, index) => {
    const pageNumber = index + 1,
          plainText = divisionMarkdownNode.asPlainText(context),
          entries = entriesFromPlainTextAndPhraseMatchers(plainText, phraseMatchers);

    entries.forEach((entry) => {
      let pageNumbers = indexMap[entry] || null;

      if (pageNumbers === null) {
        pageNumbers = [];

        indexMap[entry] = pageNumbers;
      }

      const pageNumbersIncludesPageNumber = pageNumbers.includes(pageNumber);

      if (!pageNumbersIncludesPageNumber) {
        pageNumbers.push(pageNumber);
      }
    });
  });

  ignoredWords.forEach((ignoredWord) => {
    delete indexMap[ignoredWord];
  });

  return indexMap;
}

function entriesFromPlainTextAndPhraseMatchers(plainText, phraseMatchers) {
  plainText = preparePlainText(plainText);  ///

  phraseMatchers.forEach((phraseMatcher) => {
    const { regularExpression, replacement } = phraseMatcher;

    plainText = plainText.replace(regularExpression, replacement);
  });

  const entries = plainText.split(SINGLE_SPACE);

  return entries;
}

function phraseMatchersFromPhrase(phrases) {
  const phraseMatchers = phrases.map((phrase) => {
    const regularExpression = new RegExp(phrase, GLOBAL_FLAG),
          replacement = phrase.replace(/\s/g, UNDERSCORE),
          phraseMatcher = {
            regularExpression,
            replacement
          };

    return phraseMatcher;
  });

  return phraseMatchers;
}

function preparePlainText(plainText) {
  plainText = plainText.toLowerCase();  ///

  plainText = plainText.replace(/[^a-z ]/g, SINGLE_SPACE);

  plainText = plainText.replace(/\s+/g, SINGLE_SPACE);

  plainText = plainText.replace(/^\s+|\s+$/g, EMPTY_STRING);

  return plainText;
}
