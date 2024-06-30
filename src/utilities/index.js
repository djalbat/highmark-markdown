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
            wordsOrPhrases = wordsOrPhrasesFromPlainTextAndIndexMatches(plainText, indexMatches);

      wordsOrPhrases.forEach((wordOrPhrase) => {
        let pageNumbers = indexMap[wordOrPhrase] || null;

        if (pageNumbers === null) {
          pageNumbers = [];

          indexMap[wordOrPhrase] = pageNumbers;
        }

        pageNumbers.push(pageNumber);
      });
    }
  });

  return indexMap;
}

function wordsOrPhrasesFromPlainTextAndIndexMatches(plainText, indexMatches) {
  let wordsOrPhrases;

  plainText = preparePlainText(plainText);  ///

  indexMatches.forEach((indexMatch) => {
    plainText = indexMatch.replace(plainText);
  });

  wordsOrPhrases = plainText.split(SINGLE_SPACE);

  wordsOrPhrases = wordsOrPhrases.map((wordOrPhrase) => {
    wordOrPhrase = IndexMatch.revert(wordOrPhrase);  ///

    return wordOrPhrase;
  });

  return wordsOrPhrases;
}

function compressPageNumbers(indexMap) {
  mapValues(indexMap, (wordOrPhrase, pageNumbers) => {
    compress(pageNumbers, (pageNumberA, pageNumberB) => {
      if (pageNumberA === pageNumberB) {
        return true;
      }
    });

    pageNumbers.sort((pageNumberB, pageNumberA) => {
      pageNumberA = Number(pageNumberA);  ///

      pageNumberB = Number(pageNumberB);  ///

      const difference = pageNumberB - pageNumberA;

      return difference;
    });

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

  mapKeys(indexMap, (wordOrPhrase) => {
    const index = lowerCaseProperNouns.findIndex((lowerCaseProperNmae) => {
      if (lowerCaseProperNmae === wordOrPhrase) {
        return true;
      }
    });

    if (index > -1) {
      const properNoun = properNouns[index];

      wordOrPhrase = properNoun;  ///
    }

    return wordOrPhrase;
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

  mapKeys(indexMap, (wordOrPhrase) => {
    const index = lowerCaseAcronyms.findIndex((lowerCaseProperNmae) => {
      if (lowerCaseProperNmae === wordOrPhrase) {
        return true;
      }
    });

    if (index > -1) {
      const acronym = acronyms[index];

      wordOrPhrase = acronym;  ///
    }

    return wordOrPhrase;
  });
}

function adjustMixedPlurals(indexMap, context) {
  const { indexOptions } = context,
        { plurals } = indexOptions,
        mixedPlurals = mixedPluralsFromPlurals(plurals);

  forEach(indexMap, (wordOrPhrase, pageNumbers) => {
    const entryPlural = isPlural(wordOrPhrase);

    if (entryPlural) {
      const singularEntry = wordOrPhrase.replace(/s$/, EMPTY_STRING),
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

        delete indexMap[wordOrPhrase];
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

  forEach(indexMap, (wordOrPhrase, pageNumbers) => {
    const entryPlural = isPlural(wordOrPhrase);

    if (entryPlural) {
      const singularEntry = wordOrPhrase.replace(/s$/, EMPTY_STRING),
            pluralPluralsIncludesEntry = pluralPlurals.includes(wordOrPhrase),
            entryPluralPlural = pluralPluralsIncludesEntry; ///

      if (entryPluralPlural) {
        const pluralPageNumbers = pageNumbers,  ///
              singularPageNumbers = indexMap[singularEntry] || [];

        pageNumbers = [ ///
          ...pluralPageNumbers,
          ...singularPageNumbers
        ];

        delete indexMap[singularEntry];

        indexMap[wordOrPhrase] = pageNumbers;
      }
    }
  });
}

function adjustSingularPlurals(indexMap, context) {
  const { indexOptions } = context,
        { plurals } = indexOptions,
        singularPlurals = singularPluralsFromPlurals(plurals);

  forEach(indexMap, (wordOrPhrase, pageNumbers) => {
    const entryPlural = isPlural(wordOrPhrase);

    if (entryPlural) {
      const singularEntry = wordOrPhrase.replace(/s$/, EMPTY_STRING),
            singularPluralsIncludesSingularEntry = singularPlurals.includes(singularEntry),
            entrySingularPlural = singularPluralsIncludesSingularEntry; ///

      if (entrySingularPlural) {
        const pluralPageNumbers = pageNumbers,  ///
              singularPageNumbers = indexMap[singularEntry] || [];

        pageNumbers = [ ///
          ...pluralPageNumbers,
          ...singularPageNumbers
        ];

        delete indexMap[wordOrPhrase];

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
