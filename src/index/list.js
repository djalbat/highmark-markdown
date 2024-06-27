"use strict";

import { stringUtilities } from "necessary";

import { indexMapFromDivisionMarkdownNodes } from "../utilities/index";

const { strcmp } = stringUtilities;

export default class IndexList {
  constructor(map) {
    this.map = map;
  }

  getMap() {
    return this.map;
  }

  getEntries() {
    const entries = Object.keys(this.map); ///

    entries.sort((entryA, entryB) => {
      const lowerCaseEntryA = entryA.toLowerCase(),
            lowerCaseEntryB = entryB.toLowerCase(),
            difference = strcmp(lowerCaseEntryB, lowerCaseEntryA);

      return difference;
    });

    return entries;
  }

  getPageNumbers(entry) {
    const pageNumbers = this.map[entry] || null;

    return pageNumbers;
  }

  mapEntries(callback) {
    const entries = this.getEntries(),
          result = entries.map((entry) => {
            const pageNumbers = this.getPageNumbers(entry),
                  result = callback(entry, pageNumbers);

            return result;
          });

    return result;
  }

  static fromDivisionMarkdownNodes(divisionMarkdownNodes, context) {
    const indexMap = indexMapFromDivisionMarkdownNodes(divisionMarkdownNodes, context),
          map = indexMap, ///
          indexList = new IndexList(map);

    return indexList;
  }
}
