"use strict";

import PhraseMatcher from "../index/phraseMatcher";

import { EMPTY_STRING, SINGLE_SPACE } from "../constants";

export function indexMapFromDivisionMarkdownNodes(divisionMarkdownNodes, context) {
  const indexMap = {};

  const { indexOptions } = context,
        { phrases, ignoredWords } = indexOptions,
        phraseMatchers = phraseMatchersFromPhrases(phrases);

  divisionMarkdownNodes.forEach((divisionMarkdownNode, index) => {
    const pageNumber = divisionMarkdownNode.getPageNumber();

    if (pageNumber !== null) {
      const plainText = divisionMarkdownNode.asPlainText(context),
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
    }
  });

  ignoredWords.forEach((ignoredWord) => {
    delete indexMap[ignoredWord];
  });

  return indexMap;
}

function entriesFromPlainTextAndPhraseMatchers(plainText, phraseMatchers) {
  plainText = preparePlainText(plainText);  ///

  phraseMatchers.forEach((phraseMatcher) => {
    plainText = phraseMatcher.replace(plainText);
  });

  const entries = plainText.split(SINGLE_SPACE);

  return entries;
}

function phraseMatchersFromPhrases(phrases) {
  const phraseMatchers = phrases.map((phrase) => {
    const phraseMatcher = PhraseMatcher.fromPhrase(phrase);

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
