"use strict";

import { stringUtilities } from "necessary";

import IndexItem from "../index/item";

import { indexMapFromDivisionMarkdownNodes } from "../utilities/index";

const { strcmp } = stringUtilities;

export default class IndexList {
  constructor(indexItems) {
    this.indexItems = indexItems;
  }

  getIndexItems() {
    return this.indexItems;
  }

  reduceIndexItemByLetter(letter, callback) {
    const indexItems = this.indexItems.filter((indexItem) => {
      const indexItemMatchesLetter = indexItem.matchLetter(letter);

      if (indexItemMatchesLetter) {
        return true;
      }
    });

    const result = indexItems.map(callback);

    return result;
  }

  static fromDivisionMarkdownNodes(divisionMarkdownNodes, context) {
    const indexMap = indexMapFromDivisionMarkdownNodes(divisionMarkdownNodes, context),
          indexItems = indexItemsFromIndexMap(indexMap),
          indexList = new IndexList(indexItems);

    return indexList;
  }
}

function indexItemsFromIndexMap(indexMap) {
  const wordsOrPhrases = Object.keys(indexMap); ///

  wordsOrPhrases.sort((wordOrPhraseA, wordOrPhraseB) => {
    const lowerCaseWordOrPhraseA = wordOrPhraseA.toLowerCase(),
          lowerCaseWordOrPhraseB = wordOrPhraseB.toLowerCase(),
          difference = strcmp(lowerCaseWordOrPhraseB, lowerCaseWordOrPhraseA);

    return difference;
  });

  const indexItems = wordsOrPhrases.map((wordOrPhrase, index) => {
    const pageNumbers = indexMap[wordOrPhrase],
          indexItem = IndexItem.fromWordOrPhraseAndPageNumbers(wordOrPhrase, pageNumbers);

    return indexItem;
  })

  return indexItems;
}
