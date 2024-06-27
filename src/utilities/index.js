"use strict";

import { arrayUtilities } from "necessary";

import IndexMatch from "../index/match";

import { EMPTY_STRING, SINGLE_SPACE } from "../constants";
import { forEach, mapKeys, mapValues } from "../utilities/object";

const { compress } = arrayUtilities;

export function indexMapFromDivisionMarkdownNodes(divisionMarkdownNodes, context) {
  const indexMap = createIndexMap(divisionMarkdownNodes, context);

  removeIgnoredWords(indexMap, context);

  adjustProperNouns(indexMap, context);

  adjustAcronyms(indexMap, context);

  adjustMixedPlurals(indexMap, context);

  adjustPluralPlurals(indexMap, context);

  adjustSingularPlurals(indexMap, context);

  compressPageNumbers(indexMap);

  return indexMap;
}

function createIndexMap(divisionMarkdownNodes, context) {
  const indexMap = {};

  const { indexOptions } = context,
        { phrases } = indexOptions,
        indexMatches = phrases.map((phrase) => {
          const indexMatch = IndexMatch.fromPhrase(phrase);

          return indexMatch;
        });

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    const pageNumber = divisionMarkdownNode.getPageNumber();

    if (pageNumber !== null) {
      const plainText = divisionMarkdownNode.asPlainText(context),
            entries = entriesFromPlainTextAndIndexMatches(plainText, indexMatches);

      entries.forEach((entry) => {
        let pageNumbers = indexMap[entry] || null;

        if (pageNumbers === null) {
          pageNumbers = [];

          indexMap[entry] = pageNumbers;
        }

        pageNumbers.push(pageNumber);
      });
    }
  });

  return indexMap;
}

function entriesFromPlainTextAndIndexMatches(plainText, indexMatches) {
  let entries;

  plainText = preparePlainText(plainText);  ///

  indexMatches.forEach((indexMatch) => {
    plainText = indexMatch.replace(plainText);
  });

  entries = plainText.split(SINGLE_SPACE);

  entries = entries.map((entry) => {
    entry = IndexMatch.revert(entry);  ///

    return entry;
  });

  return entries;
}

function compressPageNumbers(indexMap) {
  mapValues(indexMap, (entry, pageNumbers) => {
    compress(pageNumbers, (pageNumberA, pageNumberB) => {
      if (pageNumberA === pageNumberB) {
        return true;
      }
    });

    pageNumbers.sort();

    return pageNumbers;
  });
}

function removeIgnoredWords(indexMap, context) {
  const { indexOptions } = context,
        { ignoredWords } = indexOptions;

  ignoredWords.forEach((ignoredWord) => {
    delete indexMap[ignoredWord];
  });
}

function adjustProperNouns(indexMap, context) {
  const { indexOptions } = context,
        { properNouns } = indexOptions;

  const lowerCaseProperNouns = properNouns.map((properNoun) => {
    const lowerCaseProperNoun = properNoun.toLowerCase();

    return lowerCaseProperNoun;
  });

  mapKeys(indexMap, (entry) => {
    const index = lowerCaseProperNouns.findIndex((lowerCaseProperNmae) => {
      if (lowerCaseProperNmae === entry) {
        return true;
      }
    });

    if (index > -1) {
      const properNoun = properNouns[index];

      entry = properNoun;  ///
    }

    return entry;
  });
}

function preparePlainText(plainText) {
  plainText = plainText.toLowerCase();  ///

  plainText = plainText.replace(/[^a-z ]/g, SINGLE_SPACE);

  plainText = plainText.replace(/\s+/g, SINGLE_SPACE);

  plainText = plainText.replace(/^\s+|\s+$/g, EMPTY_STRING);

  return plainText;
}

function adjustAcronyms(indexMap, context) {
  const { indexOptions } = context,
        { acronyms } = indexOptions;

  const lowerCaseAcronyms = acronyms.map((acronym) => {
    const lowerCaseAcronym = acronym.toLowerCase();

    return lowerCaseAcronym;
  });

  mapKeys(indexMap, (entry) => {
    const index = lowerCaseAcronyms.findIndex((lowerCaseProperNmae) => {
      if (lowerCaseProperNmae === entry) {
        return true;
      }
    });

    if (index > -1) {
      const acronym = acronyms[index];

      entry = acronym;  ///
    }

    return entry;
  });
}

function adjustMixedPlurals(indexMap, context) {
  const { indexOptions } = context,
        { plurals } = indexOptions,
        mixedPlurals = mixedPluralsFromPlurals(plurals);

  forEach(indexMap, (entry, pageNumbers) => {
    const entryPlural = isPlural(entry);

    if (entryPlural) {
      const singularEntry = entry.replace(/s$/, EMPTY_STRING),
            mixedEntry = `${singularEntry}(s)`,
            mixedPluralsIncludesMixedEntry = mixedPlurals.includes(mixedEntry),
            entryMixedPlural = mixedPluralsIncludesMixedEntry; ///

      if (entryMixedPlural) {
        const pluralPageNumbers = pageNumbers,  ///
              singularPageNumbers = indexMap[singularEntry] || [];

        pageNumbers = [ ///
          ...pluralPageNumbers,
          ...singularPageNumbers
        ];

        delete indexMap[entry];
        delete indexMap[singularEntry];

        indexMap[mixedEntry] = pageNumbers;
      }
    }
  });
}

function adjustPluralPlurals(indexMap, context) {
  const { indexOptions } = context,
        { plurals } = indexOptions,
        pluralPlurals = pluralPluralsFromPlurals(plurals);

  forEach(indexMap, (entry, pageNumbers) => {
    const entryPlural = isPlural(entry);

    if (entryPlural) {
      const singularEntry = entry.replace(/s$/, EMPTY_STRING),
            pluralPluralsIncludesEntry = pluralPlurals.includes(entry),
            entryPluralPlural = pluralPluralsIncludesEntry; ///

      if (entryPluralPlural) {
        const pluralPageNumbers = pageNumbers,  ///
              singularPageNumbers = indexMap[singularEntry] || [];

        pageNumbers = [ ///
          ...pluralPageNumbers,
          ...singularPageNumbers
        ];

        delete indexMap[singularEntry];

        indexMap[entry] = pageNumbers;
      }
    }
  });
}

function adjustSingularPlurals(indexMap, context) {
  const { indexOptions } = context,
        { plurals } = indexOptions,
        singularPlurals = singularPluralsFromPlurals(plurals);

  forEach(indexMap, (entry, pageNumbers) => {
    const entryPlural = isPlural(entry);

    if (entryPlural) {
      const singularEntry = entry.replace(/s$/, EMPTY_STRING),
            singularPluralsIncludesSingularEntry = singularPlurals.includes(singularEntry),
            entrySingularPlural = singularPluralsIncludesSingularEntry; ///

      if (entrySingularPlural) {
        const pluralPageNumbers = pageNumbers,  ///
              singularPageNumbers = indexMap[singularEntry] || [];

        pageNumbers = [ ///
          ...pluralPageNumbers,
          ...singularPageNumbers
        ];

        delete indexMap[entry];

        indexMap[singularEntry] = pageNumbers;
      }
    }
  });
}

function singularPluralsFromPlurals(plurals) {
  const singularPlurals = plurals.reduce((singularPlurals, plural) => {
    const pluralSingular = isSingular(plural);

    if (pluralSingular) {
      const singularPlural = plural;  ///

      singularPlurals.push(singularPlural);
    }

    return singularPlurals;
  }, []);

  return singularPlurals;
}

function pluralPluralsFromPlurals(plurals) {
  const pluralPlurals = plurals.reduce((pluralPlurals, plural) => {
    const pluralPlural = isPlural(plural);

    if (pluralPlural) {
      const pluralPlural = plural;  ///

      pluralPlurals.push(pluralPlural);
    }

    return pluralPlurals;
  }, []);

  return pluralPlurals;
}

function mixedPluralsFromPlurals(plurals) {
  const mixedPlurals = plurals.reduce((mixedPlurals, plural) => {
    const pluralMixed = isMixed(plural);

    if (pluralMixed) {
      const mixedPlural = plural;  ///

      mixedPlurals.push(mixedPlural);
    }

    return mixedPlurals;
  }, []);

  return mixedPlurals;
}

function isSingular(text) {
  const indexMatches = /[^s)]$/.test(text),
        pluralSingular = indexMatches; ///

  return pluralSingular;
}

function isPlural(text) {
  const indexMatches = /s$/.test(text),
        plural = indexMatches; ///

  return plural;
}

function isMixed(text) {
  const indexMatches = /\(s\)$/.test(text),
        plural = indexMatches; ///

  return plural;
}
