"use strict";

import { stringUtilities } from "necessary";

import { indexMapFromDivisionMarkdownNodes } from "../utilities/index";

const { strcmp } = stringUtilities;

export default class IndexList {
  constructor(entryArray, pageNumbersArray) {
    this.entryArray = entryArray;
    this.pageNumbersArray = pageNumbersArray;
  }

  getEntryArray() {
    return this.entryArray;
  }

  getPageNumbersArray() {
    return this.pageNumbersArray;
  }

  mapEntries(callback) {

    const result = this.entryArray.map((entry, index) => {
            const pageNumbers = this.pageNumbersArray[index],
                  result = callback(entry, pageNumbers);

            return result;
          });

    return result;
  }

  static fromDivisionMarkdownNodes(divisionMarkdownNodes, context) {
    const indexMap = indexMapFromDivisionMarkdownNodes(divisionMarkdownNodes, context),
          entryArray = entryArrayFromIndexMap(indexMap),
          pageNumbersArray = pageNumbersArrayFromIndexMapAndEntryArray(indexMap, entryArray),
          indexList = new IndexList(entryArray, pageNumbersArray);

    return indexList;
  }
}

function entryArrayFromIndexMap(indexMap) {
  const entryArray = Object.keys(indexMap); ///

  entryArray.sort((entryA, entryB) => {
    const lowerCaseEntryA = entryA.toLowerCase(),
          lowerCaseEntryB = entryB.toLowerCase(),
          difference = strcmp(lowerCaseEntryB, lowerCaseEntryA);

    return difference;
  });

  return entryArray;
}

function pageNumbersArrayFromIndexMapAndEntryArray(indexMap, entryArray) {
  const pageNumbersArray = entryArray.map((entry) => {
    const pageNumbers = indexMap[entry];

    return pageNumbers;
  });

  return pageNumbersArray;
}