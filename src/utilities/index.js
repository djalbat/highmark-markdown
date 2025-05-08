"use strict";

import { arrayUtilities } from "necessary";

import IndexMatch from "../index/match";

import { forEach, mapKeys, mapValues } from "../utilities/object";
import { Y_STRING, S_STRING, IES_STRING, EMPTY_STRING, SINGLE_SPACE, PARENTHESISED_S_STRING } from "../constants";

const { compress } = arrayUtilities;

export function indexMapFromDivisionHTMLNodes(divisionHTMLNodes, context) {
  const indexMap = createIndexMap(divisionHTMLNodes, context);

  removeIgnoredWords(indexMap, context);

  adjustMixedPlurals(indexMap, context);

  adjustPluralPlurals(indexMap, context);

  adjustSingularPlurals(indexMap, context);

  adjustProperNouns(indexMap, context);

  adjustAcronyms(indexMap, context);

  compressPageNumbers(indexMap);

  return indexMap;
}

function createIndexMap(divisionHTMLNodes, context) {
  const indexMap = {};

  const { indexOptions } = context,
        { phrases } = indexOptions,
        indexMatches = phrases.map((phrase) => {
          const indexMatch = IndexMatch.fromPhrase(phrase);

          return indexMatch;
        });

  divisionHTMLNodes.forEach((divisionHTMLNode) => {
    const pageNumber = divisionHTMLNode.pageNumber();

    if (pageNumber !== null) {
      const plainText = divisionHTMLNode.asPlainText(context),
            wordsOrPhrases = wordsOrPhrasesFromPlainTextAndIndexMatches(plainText, indexMatches);

      wordsOrPhrases.forEach((wordOrPhrase) => {
        const pageNumbers = indexMap.hasOwnProperty(wordOrPhrase) ?
                              indexMap[wordOrPhrase] :
                                [];

        indexMap[wordOrPhrase] = pageNumbers;

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
    const index = lowerCaseProperNouns.findIndex((lowerCaseProperName) => {
      if (lowerCaseProperName === wordOrPhrase) {
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

  plainText = plainText.replace(/[^a-z0-9\- ]/g, SINGLE_SPACE);

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
    const index = lowerCaseAcronyms.findIndex((lowerCaseProperName) => {
      if (lowerCaseProperName === wordOrPhrase) {
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
        mixedPlurals = reducePlurals(plurals, isMixed),
        pluralPlurals = mapPlurals(mixedPlurals, mixedToPlural),
        singularPlurals = mapPlurals(mixedPlurals, mixedToSingular);

  forEach(indexMap, (wordOrPhrase, pageNumbers) => {
    const singularPluralsIncludesWordOrPhrase = singularPlurals.includes(wordOrPhrase);

    if (singularPluralsIncludesWordOrPhrase) {
      const singularWordOrPhrase = wordOrPhrase,  ///
            singularPageNumbers = pageNumbers,  ///
            mixedWordOrPhrase = singularToMixed(singularWordOrPhrase),
            mixedPageNumbers = indexMap[mixedWordOrPhrase] || [];

      pageNumbers = [
        ...singularPageNumbers,
        ...mixedPageNumbers
      ];

      delete indexMap[singularWordOrPhrase];

      indexMap[mixedWordOrPhrase] = pageNumbers;
    }

    const pluralPluralsIncludesWordOrPhrase = pluralPlurals.includes(wordOrPhrase);

    if (pluralPluralsIncludesWordOrPhrase) {
      const pluralWordOrPhrase = wordOrPhrase,  ///
            pluralPageNumbers = pageNumbers,  ///
            mixedWordOrPhrase = pluralToMixed(pluralWordOrPhrase),
            mixedPageNumbers = indexMap[mixedWordOrPhrase] || [];

      pageNumbers = [
        ...pluralPageNumbers,
        ...mixedPageNumbers
      ];

      delete indexMap[pluralWordOrPhrase];

      indexMap[mixedWordOrPhrase] = pageNumbers;
    }
  });
}

function adjustPluralPlurals(indexMap, context) {
  const { indexOptions } = context,
        { plurals } = indexOptions,
        pluralPlurals = reducePlurals(plurals, isPlural),
        singularPlurals = mapPlurals(pluralPlurals, pluralToSingular);

  forEach(indexMap, (wordOrPhrase, pageNumbers) => {
    const singularPluralsIncludesWordOrPhrase = singularPlurals.includes(wordOrPhrase);

    if (singularPluralsIncludesWordOrPhrase) {
      const singularWordOrPhrase = wordOrPhrase,  ///
            singularPageNumbers = pageNumbers,  ///
            pluralWordOrPhrase = singularToPlural(wordOrPhrase),
            pluralPageNumbers = indexMap[pluralWordOrPhrase] || [];

      pageNumbers = [
        ...singularPageNumbers,
        ...pluralPageNumbers
      ];

      delete indexMap[singularWordOrPhrase];

      indexMap[pluralWordOrPhrase] = pageNumbers;
    }
  });
}

function adjustSingularPlurals(indexMap, context) {
  const { indexOptions } = context,
        { plurals } = indexOptions,
        singularPlurals = reducePlurals(plurals, isSingular),
        pluralPlurals = mapPlurals(singularPlurals, singularToPlural);

  forEach(indexMap, (wordOrPhrase, pageNumbers) => {
      const pluralPluralsIncludesWordOrPhrase = pluralPlurals.includes(wordOrPhrase);

      if (pluralPluralsIncludesWordOrPhrase) {
        const singularWordOrPhrase = pluralToSingular(wordOrPhrase),
              singularPageNumbers = indexMap[singularWordOrPhrase] || [],
              pluralWordOrPhrase = wordOrPhrase,  ///
              pluralPageNumbers = pageNumbers;  ///

        pageNumbers = [
          ...singularPageNumbers,
          ...pluralPageNumbers
        ];

        delete indexMap[pluralWordOrPhrase];

        indexMap[singularWordOrPhrase] = pageNumbers;
      }
  });
}

function reducePlurals(plurals, callback) {
  plurals = plurals.reduce((plurals, plural) => { ///
    const result = callback(plural);

    if (result) {
      plurals.push(plural);
    }

    return plurals;
  }, []);

  return plurals;
}

function mapPlurals(plurals, callback) {
  plurals = plurals.map((plural) => { ///
    plural = callback(plural);

    return plural;
  });

  return plurals;
}

function isSingular(text) {
  const indexMatches = /[^s)]$/.test(text),
        singular = indexMatches; ///

  return singular;
}

function isPlural(text) {
  const indexMatches = /(ies|s)$/.test(text),
        plural = indexMatches; ///

  return plural;
}

function isMixed(text) {
  const indexMatches = /\(s\)$/.test(text),
        mixed = indexMatches; ///

  return mixed;
}

function mixedToPlural(text) {
  text = text ///
           .replace(/\(s\)$/, S_STRING);

  return text;
}

function pluralToMixed(text) {
  text = text ///
           .replace(/s$/, PARENTHESISED_S_STRING)

  return text;
}

function mixedToSingular(text) {
  text = text ///
          .replace(/\(s\)$/, EMPTY_STRING);

  return text;
}

function singularToMixed(text) {
  text = `${text}(s)`;

  return text;
}

function singularToPlural(text) {
  text = `${text}s` ///
           .replace(/ys$/, IES_STRING);

  return text;
}

function pluralToSingular(text) {
  text = text ///
           .replace(/ies$/, Y_STRING)
           .replace(/s$/, EMPTY_STRING);

  return text;
}
