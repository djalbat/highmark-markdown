"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "indexMapFromDivisionHTMLNodes", {
    enumerable: true,
    get: function() {
        return indexMapFromDivisionHTMLNodes;
    }
});
var _necessary = require("necessary");
var _match = /*#__PURE__*/ _interop_require_default(require("../index/match"));
var _object = require("../utilities/object");
var _constants = require("../constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var compress = _necessary.arrayUtilities.compress;
function indexMapFromDivisionHTMLNodes(divisionHTMLNodes, context) {
    var indexMap = createIndexMap(divisionHTMLNodes, context);
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
    var indexMap = {};
    var indexOptions = context.indexOptions, phrases = indexOptions.phrases, indexMatches = phrases.map(function(phrase) {
        var indexMatch = _match.default.fromPhrase(phrase);
        return indexMatch;
    });
    divisionHTMLNodes.forEach(function(divisionHTMLNode) {
        var pageNumber = divisionHTMLNode.pageNumber();
        if (pageNumber !== null) {
            var plainText = divisionHTMLNode.asPlainText(context), wordsOrPhrases = wordsOrPhrasesFromPlainTextAndIndexMatches(plainText, indexMatches);
            wordsOrPhrases.forEach(function(wordOrPhrase) {
                var pageNumbers = indexMap.hasOwnProperty(wordOrPhrase) ? indexMap[wordOrPhrase] : [];
                indexMap[wordOrPhrase] = pageNumbers;
                pageNumbers.push(pageNumber);
            });
        }
    });
    return indexMap;
}
function wordsOrPhrasesFromPlainTextAndIndexMatches(plainText, indexMatches) {
    var wordsOrPhrases;
    plainText = preparePlainText(plainText); ///
    indexMatches.forEach(function(indexMatch) {
        plainText = indexMatch.replace(plainText);
    });
    wordsOrPhrases = plainText.split(_constants.SINGLE_SPACE);
    wordsOrPhrases = wordsOrPhrases.map(function(wordOrPhrase) {
        wordOrPhrase = _match.default.revert(wordOrPhrase); ///
        return wordOrPhrase;
    });
    return wordsOrPhrases;
}
function compressPageNumbers(indexMap) {
    (0, _object.mapValues)(indexMap, function(wordOrPhrase, pageNumbers) {
        compress(pageNumbers, function(pageNumberA, pageNumberB) {
            if (pageNumberA === pageNumberB) {
                return true;
            }
        });
        pageNumbers.sort(function(pageNumberB, pageNumberA) {
            pageNumberA = Number(pageNumberA); ///
            pageNumberB = Number(pageNumberB); ///
            var difference = pageNumberB - pageNumberA;
            return difference;
        });
        return pageNumbers;
    });
}
function removeIgnoredWords(indexMap, context) {
    var indexOptions = context.indexOptions, ignoredWords = indexOptions.ignoredWords;
    ignoredWords.forEach(function(ignoredWord) {
        delete indexMap[ignoredWord];
    });
}
function adjustProperNouns(indexMap, context) {
    var indexOptions = context.indexOptions, properNouns = indexOptions.properNouns;
    var lowerCaseProperNouns = properNouns.map(function(properNoun) {
        var lowerCaseProperNoun = properNoun.toLowerCase();
        return lowerCaseProperNoun;
    });
    (0, _object.mapKeys)(indexMap, function(wordOrPhrase) {
        var index = lowerCaseProperNouns.findIndex(function(lowerCaseProperName) {
            if (lowerCaseProperName === wordOrPhrase) {
                return true;
            }
        });
        if (index > -1) {
            var properNoun = properNouns[index];
            wordOrPhrase = properNoun; ///
        }
        return wordOrPhrase;
    });
}
function preparePlainText(plainText) {
    plainText = plainText.toLowerCase(); ///
    plainText = plainText.replace(/[^a-z0-9\- ]/g, _constants.SINGLE_SPACE);
    plainText = plainText.replace(/\s+/g, _constants.SINGLE_SPACE);
    plainText = plainText.replace(/^\s+|\s+$/g, _constants.EMPTY_STRING);
    return plainText;
}
function adjustAcronyms(indexMap, context) {
    var indexOptions = context.indexOptions, acronyms = indexOptions.acronyms;
    var lowerCaseAcronyms = acronyms.map(function(acronym) {
        var lowerCaseAcronym = acronym.toLowerCase();
        return lowerCaseAcronym;
    });
    (0, _object.mapKeys)(indexMap, function(wordOrPhrase) {
        var index = lowerCaseAcronyms.findIndex(function(lowerCaseProperName) {
            if (lowerCaseProperName === wordOrPhrase) {
                return true;
            }
        });
        if (index > -1) {
            var acronym = acronyms[index];
            wordOrPhrase = acronym; ///
        }
        return wordOrPhrase;
    });
}
function adjustMixedPlurals(indexMap, context) {
    var indexOptions = context.indexOptions, plurals = indexOptions.plurals, mixedPlurals = reducePlurals(plurals, isMixed), pluralPlurals = mapPlurals(mixedPlurals, mixedToPlural), singularPlurals = mapPlurals(mixedPlurals, mixedToSingular);
    (0, _object.forEach)(indexMap, function(wordOrPhrase, pageNumbers) {
        var singularPluralsIncludesWordOrPhrase = singularPlurals.includes(wordOrPhrase);
        if (singularPluralsIncludesWordOrPhrase) {
            var singularWordOrPhrase = wordOrPhrase, singularPageNumbers = pageNumbers, mixedWordOrPhrase = singularToMixed(singularWordOrPhrase), mixedPageNumbers = indexMap[mixedWordOrPhrase] || [];
            pageNumbers = _to_consumable_array(singularPageNumbers).concat(_to_consumable_array(mixedPageNumbers));
            delete indexMap[singularWordOrPhrase];
            indexMap[mixedWordOrPhrase] = pageNumbers;
        }
        var pluralPluralsIncludesWordOrPhrase = pluralPlurals.includes(wordOrPhrase);
        if (pluralPluralsIncludesWordOrPhrase) {
            var pluralWordOrPhrase = wordOrPhrase, pluralPageNumbers = pageNumbers, mixedWordOrPhrase1 = pluralToMixed(pluralWordOrPhrase), mixedPageNumbers1 = indexMap[mixedWordOrPhrase1] || [];
            pageNumbers = _to_consumable_array(pluralPageNumbers).concat(_to_consumable_array(mixedPageNumbers1));
            delete indexMap[pluralWordOrPhrase];
            indexMap[mixedWordOrPhrase1] = pageNumbers;
        }
    });
}
function adjustPluralPlurals(indexMap, context) {
    var indexOptions = context.indexOptions, plurals = indexOptions.plurals, pluralPlurals = reducePlurals(plurals, isPlural), singularPlurals = mapPlurals(pluralPlurals, pluralToSingular);
    (0, _object.forEach)(indexMap, function(wordOrPhrase, pageNumbers) {
        var singularPluralsIncludesWordOrPhrase = singularPlurals.includes(wordOrPhrase);
        if (singularPluralsIncludesWordOrPhrase) {
            var singularWordOrPhrase = wordOrPhrase, singularPageNumbers = pageNumbers, pluralWordOrPhrase = singularToPlural(wordOrPhrase), pluralPageNumbers = indexMap[pluralWordOrPhrase] || [];
            pageNumbers = _to_consumable_array(singularPageNumbers).concat(_to_consumable_array(pluralPageNumbers));
            delete indexMap[singularWordOrPhrase];
            indexMap[pluralWordOrPhrase] = pageNumbers;
        }
    });
}
function adjustSingularPlurals(indexMap, context) {
    var indexOptions = context.indexOptions, plurals = indexOptions.plurals, singularPlurals = reducePlurals(plurals, isSingular), pluralPlurals = mapPlurals(singularPlurals, singularToPlural);
    (0, _object.forEach)(indexMap, function(wordOrPhrase, pageNumbers) {
        var pluralPluralsIncludesWordOrPhrase = pluralPlurals.includes(wordOrPhrase);
        if (pluralPluralsIncludesWordOrPhrase) {
            var singularWordOrPhrase = pluralToSingular(wordOrPhrase), singularPageNumbers = indexMap[singularWordOrPhrase] || [], pluralWordOrPhrase = wordOrPhrase, pluralPageNumbers = pageNumbers; ///
            pageNumbers = _to_consumable_array(singularPageNumbers).concat(_to_consumable_array(pluralPageNumbers));
            delete indexMap[pluralWordOrPhrase];
            indexMap[singularWordOrPhrase] = pageNumbers;
        }
    });
}
function reducePlurals(plurals, callback) {
    plurals = plurals.reduce(function(plurals, plural) {
        var result = callback(plural);
        if (result) {
            plurals.push(plural);
        }
        return plurals;
    }, []);
    return plurals;
}
function mapPlurals(plurals, callback) {
    plurals = plurals.map(function(plural) {
        plural = callback(plural);
        return plural;
    });
    return plurals;
}
function isSingular(text) {
    var indexMatches = /[^s)]$/.test(text), singular = indexMatches; ///
    return singular;
}
function isPlural(text) {
    var indexMatches = /(ies|s)$/.test(text), plural = indexMatches; ///
    return plural;
}
function isMixed(text) {
    var indexMatches = /\(s\)$/.test(text), mixed = indexMatches; ///
    return mixed;
}
function mixedToPlural(text) {
    text = text ///
    .replace(/\(s\)$/, _constants.S_STRING);
    return text;
}
function pluralToMixed(text) {
    text = text ///
    .replace(/s$/, _constants.PARENTHESISED_S_STRING);
    return text;
}
function mixedToSingular(text) {
    text = text ///
    .replace(/\(s\)$/, _constants.EMPTY_STRING);
    return text;
}
function singularToMixed(text) {
    text = "".concat(text, "(s)");
    return text;
}
function singularToPlural(text) {
    text = "".concat(text, "s") ///
    .replace(/ys$/, _constants.IES_STRING);
    return text;
}
function pluralToSingular(text) {
    text = text ///
    .replace(/ies$/, _constants.Y_STRING).replace(/s$/, _constants.EMPTY_STRING);
    return text;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSW5kZXhNYXRjaCBmcm9tIFwiLi4vaW5kZXgvbWF0Y2hcIjtcblxuaW1wb3J0IHsgZm9yRWFjaCwgbWFwS2V5cywgbWFwVmFsdWVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IFlfU1RSSU5HLCBTX1NUUklORywgSUVTX1NUUklORywgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UsIFBBUkVOVEhFU0lTRURfU19TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhNYXBGcm9tRGl2aXNpb25IVE1MTm9kZXMoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXAgPSBjcmVhdGVJbmRleE1hcChkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG5cbiAgcmVtb3ZlSWdub3JlZFdvcmRzKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFBsdXJhbFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFNpbmd1bGFyUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgYWRqdXN0UHJvcGVyTm91bnMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBjb21wcmVzc1BhZ2VOdW1iZXJzKGluZGV4TWFwKTtcblxuICByZXR1cm4gaW5kZXhNYXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4TWFwKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWFwID0ge307XG5cbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgcGhyYXNlcyB9ID0gaW5kZXhPcHRpb25zLFxuICAgICAgICBpbmRleE1hdGNoZXMgPSBwaHJhc2VzLm1hcCgocGhyYXNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXhNYXRjaCA9IEluZGV4TWF0Y2guZnJvbVBocmFzZShwaHJhc2UpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZGV4TWF0Y2g7XG4gICAgICAgIH0pO1xuXG4gIGRpdmlzaW9uSFRNTE5vZGVzLmZvckVhY2goKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gZGl2aXNpb25IVE1MTm9kZS5wYWdlTnVtYmVyKCk7XG5cbiAgICBpZiAocGFnZU51bWJlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGxhaW5UZXh0ID0gZGl2aXNpb25IVE1MTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICAgIHdvcmRzT3JQaHJhc2VzID0gd29yZHNPclBocmFzZXNGcm9tUGxhaW5UZXh0QW5kSW5kZXhNYXRjaGVzKHBsYWluVGV4dCwgaW5kZXhNYXRjaGVzKTtcblxuICAgICAgd29yZHNPclBocmFzZXMuZm9yRWFjaCgod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXJzID0gaW5kZXhNYXAuaGFzT3duUHJvcGVydHkod29yZE9yUGhyYXNlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleE1hcFt3b3JkT3JQaHJhc2VdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgICAgICAgaW5kZXhNYXBbd29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuXG4gICAgICAgIHBhZ2VOdW1iZXJzLnB1c2gocGFnZU51bWJlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleE1hcDtcbn1cblxuZnVuY3Rpb24gd29yZHNPclBocmFzZXNGcm9tUGxhaW5UZXh0QW5kSW5kZXhNYXRjaGVzKHBsYWluVGV4dCwgaW5kZXhNYXRjaGVzKSB7XG4gIGxldCB3b3Jkc09yUGhyYXNlcztcblxuICBwbGFpblRleHQgPSBwcmVwYXJlUGxhaW5UZXh0KHBsYWluVGV4dCk7ICAvLy9cblxuICBpbmRleE1hdGNoZXMuZm9yRWFjaCgoaW5kZXhNYXRjaCkgPT4ge1xuICAgIHBsYWluVGV4dCA9IGluZGV4TWF0Y2gucmVwbGFjZShwbGFpblRleHQpO1xuICB9KTtcblxuICB3b3Jkc09yUGhyYXNlcyA9IHBsYWluVGV4dC5zcGxpdChTSU5HTEVfU1BBQ0UpO1xuXG4gIHdvcmRzT3JQaHJhc2VzID0gd29yZHNPclBocmFzZXMubWFwKCh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICB3b3JkT3JQaHJhc2UgPSBJbmRleE1hdGNoLnJldmVydCh3b3JkT3JQaHJhc2UpOyAgLy8vXG5cbiAgICByZXR1cm4gd29yZE9yUGhyYXNlO1xuICB9KTtcblxuICByZXR1cm4gd29yZHNPclBocmFzZXM7XG59XG5cbmZ1bmN0aW9uIGNvbXByZXNzUGFnZU51bWJlcnMoaW5kZXhNYXApIHtcbiAgbWFwVmFsdWVzKGluZGV4TWFwLCAod29yZE9yUGhyYXNlLCBwYWdlTnVtYmVycykgPT4ge1xuICAgIGNvbXByZXNzKHBhZ2VOdW1iZXJzLCAocGFnZU51bWJlckEsIHBhZ2VOdW1iZXJCKSA9PiB7XG4gICAgICBpZiAocGFnZU51bWJlckEgPT09IHBhZ2VOdW1iZXJCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFnZU51bWJlcnMuc29ydCgocGFnZU51bWJlckIsIHBhZ2VOdW1iZXJBKSA9PiB7XG4gICAgICBwYWdlTnVtYmVyQSA9IE51bWJlcihwYWdlTnVtYmVyQSk7ICAvLy9cblxuICAgICAgcGFnZU51bWJlckIgPSBOdW1iZXIocGFnZU51bWJlckIpOyAgLy8vXG5cbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBwYWdlTnVtYmVyQiAtIHBhZ2VOdW1iZXJBO1xuXG4gICAgICByZXR1cm4gZGlmZmVyZW5jZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVycztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUlnbm9yZWRXb3JkcyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBpZ25vcmVkV29yZHMgfSA9IGluZGV4T3B0aW9ucztcblxuICBpZ25vcmVkV29yZHMuZm9yRWFjaCgoaWdub3JlZFdvcmQpID0+IHtcbiAgICBkZWxldGUgaW5kZXhNYXBbaWdub3JlZFdvcmRdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0UHJvcGVyTm91bnMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgcHJvcGVyTm91bnMgfSA9IGluZGV4T3B0aW9ucztcblxuICBjb25zdCBsb3dlckNhc2VQcm9wZXJOb3VucyA9IHByb3Blck5vdW5zLm1hcCgocHJvcGVyTm91bikgPT4ge1xuICAgIGNvbnN0IGxvd2VyQ2FzZVByb3Blck5vdW4gPSBwcm9wZXJOb3VuLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gbG93ZXJDYXNlUHJvcGVyTm91bjtcbiAgfSk7XG5cbiAgbWFwS2V5cyhpbmRleE1hcCwgKHdvcmRPclBocmFzZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gbG93ZXJDYXNlUHJvcGVyTm91bnMuZmluZEluZGV4KChsb3dlckNhc2VQcm9wZXJOYW1lKSA9PiB7XG4gICAgICBpZiAobG93ZXJDYXNlUHJvcGVyTmFtZSA9PT0gd29yZE9yUGhyYXNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHByb3Blck5vdW4gPSBwcm9wZXJOb3Vuc1tpbmRleF07XG5cbiAgICAgIHdvcmRPclBocmFzZSA9IHByb3Blck5vdW47ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gd29yZE9yUGhyYXNlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVBsYWluVGV4dChwbGFpblRleHQpIHtcbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnRvTG93ZXJDYXNlKCk7ICAvLy9cblxuICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSgvW15hLXowLTlcXC0gXS9nLCBTSU5HTEVfU1BBQ0UpO1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9cXHMrL2csIFNJTkdMRV9TUEFDRSk7XG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoL15cXHMrfFxccyskL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHBsYWluVGV4dDtcbn1cblxuZnVuY3Rpb24gYWRqdXN0QWNyb255bXMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgYWNyb255bXMgfSA9IGluZGV4T3B0aW9ucztcblxuICBjb25zdCBsb3dlckNhc2VBY3JvbnltcyA9IGFjcm9ueW1zLm1hcCgoYWNyb255bSkgPT4ge1xuICAgIGNvbnN0IGxvd2VyQ2FzZUFjcm9ueW0gPSBhY3JvbnltLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gbG93ZXJDYXNlQWNyb255bTtcbiAgfSk7XG5cbiAgbWFwS2V5cyhpbmRleE1hcCwgKHdvcmRPclBocmFzZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gbG93ZXJDYXNlQWNyb255bXMuZmluZEluZGV4KChsb3dlckNhc2VQcm9wZXJOYW1lKSA9PiB7XG4gICAgICBpZiAobG93ZXJDYXNlUHJvcGVyTmFtZSA9PT0gd29yZE9yUGhyYXNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IGFjcm9ueW0gPSBhY3Jvbnltc1tpbmRleF07XG5cbiAgICAgIHdvcmRPclBocmFzZSA9IGFjcm9ueW07ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gd29yZE9yUGhyYXNlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0TWl4ZWRQbHVyYWxzKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHBsdXJhbHMgfSA9IGluZGV4T3B0aW9ucyxcbiAgICAgICAgbWl4ZWRQbHVyYWxzID0gcmVkdWNlUGx1cmFscyhwbHVyYWxzLCBpc01peGVkKSxcbiAgICAgICAgcGx1cmFsUGx1cmFscyA9IG1hcFBsdXJhbHMobWl4ZWRQbHVyYWxzLCBtaXhlZFRvUGx1cmFsKSxcbiAgICAgICAgc2luZ3VsYXJQbHVyYWxzID0gbWFwUGx1cmFscyhtaXhlZFBsdXJhbHMsIG1peGVkVG9TaW5ndWxhcik7XG5cbiAgZm9yRWFjaChpbmRleE1hcCwgKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpID0+IHtcbiAgICBjb25zdCBzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSA9IHNpbmd1bGFyUGx1cmFscy5pbmNsdWRlcyh3b3JkT3JQaHJhc2UpO1xuXG4gICAgaWYgKHNpbmd1bGFyUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlKSB7XG4gICAgICBjb25zdCBzaW5ndWxhcldvcmRPclBocmFzZSA9IHdvcmRPclBocmFzZSwgIC8vL1xuICAgICAgICAgICAgc2luZ3VsYXJQYWdlTnVtYmVycyA9IHBhZ2VOdW1iZXJzLCAgLy8vXG4gICAgICAgICAgICBtaXhlZFdvcmRPclBocmFzZSA9IHNpbmd1bGFyVG9NaXhlZChzaW5ndWxhcldvcmRPclBocmFzZSksXG4gICAgICAgICAgICBtaXhlZFBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbbWl4ZWRXb3JkT3JQaHJhc2VdIHx8IFtdO1xuXG4gICAgICBwYWdlTnVtYmVycyA9IFtcbiAgICAgICAgLi4uc2luZ3VsYXJQYWdlTnVtYmVycyxcbiAgICAgICAgLi4ubWl4ZWRQYWdlTnVtYmVyc1xuICAgICAgXTtcblxuICAgICAgZGVsZXRlIGluZGV4TWFwW3Npbmd1bGFyV29yZE9yUGhyYXNlXTtcblxuICAgICAgaW5kZXhNYXBbbWl4ZWRXb3JkT3JQaHJhc2VdID0gcGFnZU51bWJlcnM7XG4gICAgfVxuXG4gICAgY29uc3QgcGx1cmFsUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlID0gcGx1cmFsUGx1cmFscy5pbmNsdWRlcyh3b3JkT3JQaHJhc2UpO1xuXG4gICAgaWYgKHBsdXJhbFBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSkge1xuICAgICAgY29uc3QgcGx1cmFsV29yZE9yUGhyYXNlID0gd29yZE9yUGhyYXNlLCAgLy8vXG4gICAgICAgICAgICBwbHVyYWxQYWdlTnVtYmVycyA9IHBhZ2VOdW1iZXJzLCAgLy8vXG4gICAgICAgICAgICBtaXhlZFdvcmRPclBocmFzZSA9IHBsdXJhbFRvTWl4ZWQocGx1cmFsV29yZE9yUGhyYXNlKSxcbiAgICAgICAgICAgIG1peGVkUGFnZU51bWJlcnMgPSBpbmRleE1hcFttaXhlZFdvcmRPclBocmFzZV0gfHwgW107XG5cbiAgICAgIHBhZ2VOdW1iZXJzID0gW1xuICAgICAgICAuLi5wbHVyYWxQYWdlTnVtYmVycyxcbiAgICAgICAgLi4ubWl4ZWRQYWdlTnVtYmVyc1xuICAgICAgXTtcblxuICAgICAgZGVsZXRlIGluZGV4TWFwW3BsdXJhbFdvcmRPclBocmFzZV07XG5cbiAgICAgIGluZGV4TWFwW21peGVkV29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdFBsdXJhbFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgcGx1cmFscyB9ID0gaW5kZXhPcHRpb25zLFxuICAgICAgICBwbHVyYWxQbHVyYWxzID0gcmVkdWNlUGx1cmFscyhwbHVyYWxzLCBpc1BsdXJhbCksXG4gICAgICAgIHNpbmd1bGFyUGx1cmFscyA9IG1hcFBsdXJhbHMocGx1cmFsUGx1cmFscywgcGx1cmFsVG9TaW5ndWxhcik7XG5cbiAgZm9yRWFjaChpbmRleE1hcCwgKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpID0+IHtcbiAgICBjb25zdCBzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSA9IHNpbmd1bGFyUGx1cmFscy5pbmNsdWRlcyh3b3JkT3JQaHJhc2UpO1xuXG4gICAgaWYgKHNpbmd1bGFyUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlKSB7XG4gICAgICBjb25zdCBzaW5ndWxhcldvcmRPclBocmFzZSA9IHdvcmRPclBocmFzZSwgIC8vL1xuICAgICAgICAgICAgc2luZ3VsYXJQYWdlTnVtYmVycyA9IHBhZ2VOdW1iZXJzLCAgLy8vXG4gICAgICAgICAgICBwbHVyYWxXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclRvUGx1cmFsKHdvcmRPclBocmFzZSksXG4gICAgICAgICAgICBwbHVyYWxQYWdlTnVtYmVycyA9IGluZGV4TWFwW3BsdXJhbFdvcmRPclBocmFzZV0gfHwgW107XG5cbiAgICAgIHBhZ2VOdW1iZXJzID0gW1xuICAgICAgICAuLi5zaW5ndWxhclBhZ2VOdW1iZXJzLFxuICAgICAgICAuLi5wbHVyYWxQYWdlTnVtYmVyc1xuICAgICAgXTtcblxuICAgICAgZGVsZXRlIGluZGV4TWFwW3Npbmd1bGFyV29yZE9yUGhyYXNlXTtcblxuICAgICAgaW5kZXhNYXBbcGx1cmFsV29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdFNpbmd1bGFyUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwbHVyYWxzIH0gPSBpbmRleE9wdGlvbnMsXG4gICAgICAgIHNpbmd1bGFyUGx1cmFscyA9IHJlZHVjZVBsdXJhbHMocGx1cmFscywgaXNTaW5ndWxhciksXG4gICAgICAgIHBsdXJhbFBsdXJhbHMgPSBtYXBQbHVyYWxzKHNpbmd1bGFyUGx1cmFscywgc2luZ3VsYXJUb1BsdXJhbCk7XG5cbiAgZm9yRWFjaChpbmRleE1hcCwgKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpID0+IHtcbiAgICAgIGNvbnN0IHBsdXJhbFBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSA9IHBsdXJhbFBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgICAgaWYgKHBsdXJhbFBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSkge1xuICAgICAgICBjb25zdCBzaW5ndWxhcldvcmRPclBocmFzZSA9IHBsdXJhbFRvU2luZ3VsYXIod29yZE9yUGhyYXNlKSxcbiAgICAgICAgICAgICAgc2luZ3VsYXJQYWdlTnVtYmVycyA9IGluZGV4TWFwW3Npbmd1bGFyV29yZE9yUGhyYXNlXSB8fCBbXSxcbiAgICAgICAgICAgICAgcGx1cmFsV29yZE9yUGhyYXNlID0gd29yZE9yUGhyYXNlLCAgLy8vXG4gICAgICAgICAgICAgIHBsdXJhbFBhZ2VOdW1iZXJzID0gcGFnZU51bWJlcnM7ICAvLy9cblxuICAgICAgICBwYWdlTnVtYmVycyA9IFtcbiAgICAgICAgICAuLi5zaW5ndWxhclBhZ2VOdW1iZXJzLFxuICAgICAgICAgIC4uLnBsdXJhbFBhZ2VOdW1iZXJzXG4gICAgICAgIF07XG5cbiAgICAgICAgZGVsZXRlIGluZGV4TWFwW3BsdXJhbFdvcmRPclBocmFzZV07XG5cbiAgICAgICAgaW5kZXhNYXBbc2luZ3VsYXJXb3JkT3JQaHJhc2VdID0gcGFnZU51bWJlcnM7XG4gICAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VQbHVyYWxzKHBsdXJhbHMsIGNhbGxiYWNrKSB7XG4gIHBsdXJhbHMgPSBwbHVyYWxzLnJlZHVjZSgocGx1cmFscywgcGx1cmFsKSA9PiB7IC8vL1xuICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKHBsdXJhbCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBwbHVyYWxzLnB1c2gocGx1cmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGx1cmFscztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBwbHVyYWxzO1xufVxuXG5mdW5jdGlvbiBtYXBQbHVyYWxzKHBsdXJhbHMsIGNhbGxiYWNrKSB7XG4gIHBsdXJhbHMgPSBwbHVyYWxzLm1hcCgocGx1cmFsKSA9PiB7IC8vL1xuICAgIHBsdXJhbCA9IGNhbGxiYWNrKHBsdXJhbCk7XG5cbiAgICByZXR1cm4gcGx1cmFsO1xuICB9KTtcblxuICByZXR1cm4gcGx1cmFscztcbn1cblxuZnVuY3Rpb24gaXNTaW5ndWxhcih0ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWF0Y2hlcyA9IC9bXnMpXSQvLnRlc3QodGV4dCksXG4gICAgICAgIHNpbmd1bGFyID0gaW5kZXhNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gc2luZ3VsYXI7XG59XG5cbmZ1bmN0aW9uIGlzUGx1cmFsKHRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXRjaGVzID0gLyhpZXN8cykkLy50ZXN0KHRleHQpLFxuICAgICAgICBwbHVyYWwgPSBpbmRleE1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBwbHVyYWw7XG59XG5cbmZ1bmN0aW9uIGlzTWl4ZWQodGV4dCkge1xuICBjb25zdCBpbmRleE1hdGNoZXMgPSAvXFwoc1xcKSQvLnRlc3QodGV4dCksXG4gICAgICAgIG1peGVkID0gaW5kZXhNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gbWl4ZWQ7XG59XG5cbmZ1bmN0aW9uIG1peGVkVG9QbHVyYWwodGV4dCkge1xuICB0ZXh0ID0gdGV4dCAvLy9cbiAgICAgICAgICAgLnJlcGxhY2UoL1xcKHNcXCkkLywgU19TVFJJTkcpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUb01peGVkKHRleHQpIHtcbiAgdGV4dCA9IHRleHQgLy8vXG4gICAgICAgICAgIC5yZXBsYWNlKC9zJC8sIFBBUkVOVEhFU0lTRURfU19TVFJJTkcpXG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIG1peGVkVG9TaW5ndWxhcih0ZXh0KSB7XG4gIHRleHQgPSB0ZXh0IC8vL1xuICAgICAgICAgIC5yZXBsYWNlKC9cXChzXFwpJC8sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIHNpbmd1bGFyVG9NaXhlZCh0ZXh0KSB7XG4gIHRleHQgPSBgJHt0ZXh0fShzKWA7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIHNpbmd1bGFyVG9QbHVyYWwodGV4dCkge1xuICB0ZXh0ID0gYCR7dGV4dH1zYCAvLy9cbiAgICAgICAgICAgLnJlcGxhY2UoL3lzJC8sIElFU19TVFJJTkcpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUb1Npbmd1bGFyKHRleHQpIHtcbiAgdGV4dCA9IHRleHQgLy8vXG4gICAgICAgICAgIC5yZXBsYWNlKC9pZXMkLywgWV9TVFJJTkcpXG4gICAgICAgICAgIC5yZXBsYWNlKC9zJC8sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG4iXSwibmFtZXMiOlsiaW5kZXhNYXBGcm9tRGl2aXNpb25IVE1MTm9kZXMiLCJjb21wcmVzcyIsImFycmF5VXRpbGl0aWVzIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJjb250ZXh0IiwiaW5kZXhNYXAiLCJjcmVhdGVJbmRleE1hcCIsInJlbW92ZUlnbm9yZWRXb3JkcyIsImFkanVzdE1peGVkUGx1cmFscyIsImFkanVzdFBsdXJhbFBsdXJhbHMiLCJhZGp1c3RTaW5ndWxhclBsdXJhbHMiLCJhZGp1c3RQcm9wZXJOb3VucyIsImFkanVzdEFjcm9ueW1zIiwiY29tcHJlc3NQYWdlTnVtYmVycyIsImluZGV4T3B0aW9ucyIsInBocmFzZXMiLCJpbmRleE1hdGNoZXMiLCJtYXAiLCJwaHJhc2UiLCJpbmRleE1hdGNoIiwiSW5kZXhNYXRjaCIsImZyb21QaHJhc2UiLCJmb3JFYWNoIiwiZGl2aXNpb25IVE1MTm9kZSIsInBhZ2VOdW1iZXIiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsIndvcmRzT3JQaHJhc2VzIiwid29yZHNPclBocmFzZXNGcm9tUGxhaW5UZXh0QW5kSW5kZXhNYXRjaGVzIiwid29yZE9yUGhyYXNlIiwicGFnZU51bWJlcnMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJwcmVwYXJlUGxhaW5UZXh0IiwicmVwbGFjZSIsInNwbGl0IiwiU0lOR0xFX1NQQUNFIiwicmV2ZXJ0IiwibWFwVmFsdWVzIiwicGFnZU51bWJlckEiLCJwYWdlTnVtYmVyQiIsInNvcnQiLCJOdW1iZXIiLCJkaWZmZXJlbmNlIiwiaWdub3JlZFdvcmRzIiwiaWdub3JlZFdvcmQiLCJwcm9wZXJOb3VucyIsImxvd2VyQ2FzZVByb3Blck5vdW5zIiwicHJvcGVyTm91biIsImxvd2VyQ2FzZVByb3Blck5vdW4iLCJ0b0xvd2VyQ2FzZSIsIm1hcEtleXMiLCJpbmRleCIsImZpbmRJbmRleCIsImxvd2VyQ2FzZVByb3Blck5hbWUiLCJFTVBUWV9TVFJJTkciLCJhY3JvbnltcyIsImxvd2VyQ2FzZUFjcm9ueW1zIiwiYWNyb255bSIsImxvd2VyQ2FzZUFjcm9ueW0iLCJwbHVyYWxzIiwibWl4ZWRQbHVyYWxzIiwicmVkdWNlUGx1cmFscyIsImlzTWl4ZWQiLCJwbHVyYWxQbHVyYWxzIiwibWFwUGx1cmFscyIsIm1peGVkVG9QbHVyYWwiLCJzaW5ndWxhclBsdXJhbHMiLCJtaXhlZFRvU2luZ3VsYXIiLCJzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSIsImluY2x1ZGVzIiwic2luZ3VsYXJXb3JkT3JQaHJhc2UiLCJzaW5ndWxhclBhZ2VOdW1iZXJzIiwibWl4ZWRXb3JkT3JQaHJhc2UiLCJzaW5ndWxhclRvTWl4ZWQiLCJtaXhlZFBhZ2VOdW1iZXJzIiwicGx1cmFsUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlIiwicGx1cmFsV29yZE9yUGhyYXNlIiwicGx1cmFsUGFnZU51bWJlcnMiLCJwbHVyYWxUb01peGVkIiwiaXNQbHVyYWwiLCJwbHVyYWxUb1Npbmd1bGFyIiwic2luZ3VsYXJUb1BsdXJhbCIsImlzU2luZ3VsYXIiLCJjYWxsYmFjayIsInJlZHVjZSIsInBsdXJhbCIsInJlc3VsdCIsInRleHQiLCJ0ZXN0Iiwic2luZ3VsYXIiLCJtaXhlZCIsIlNfU1RSSU5HIiwiUEFSRU5USEVTSVNFRF9TX1NUUklORyIsIklFU19TVFJJTkciLCJZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV2dCQTs7O2VBQUFBOzs7eUJBVGU7NERBRVI7c0JBRXFCO3lCQUN1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRyxJQUFNLEFBQUVDLFdBQWFDLHlCQUFjLENBQTNCRDtBQUVELFNBQVNELDhCQUE4QkcsaUJBQWlCLEVBQUVDLE9BQU87SUFDdEUsSUFBTUMsV0FBV0MsZUFBZUgsbUJBQW1CQztJQUVuREcsbUJBQW1CRixVQUFVRDtJQUU3QkksbUJBQW1CSCxVQUFVRDtJQUU3Qkssb0JBQW9CSixVQUFVRDtJQUU5Qk0sc0JBQXNCTCxVQUFVRDtJQUVoQ08sa0JBQWtCTixVQUFVRDtJQUU1QlEsZUFBZVAsVUFBVUQ7SUFFekJTLG9CQUFvQlI7SUFFcEIsT0FBT0E7QUFDVDtBQUVBLFNBQVNDLGVBQWVILGlCQUFpQixFQUFFQyxPQUFPO0lBQ2hELElBQU1DLFdBQVcsQ0FBQztJQUVsQixJQUFNLEFBQUVTLGVBQWlCVixRQUFqQlUsY0FDRixBQUFFQyxVQUFZRCxhQUFaQyxTQUNGQyxlQUFlRCxRQUFRRSxHQUFHLENBQUMsU0FBQ0M7UUFDMUIsSUFBTUMsYUFBYUMsY0FBVSxDQUFDQyxVQUFVLENBQUNIO1FBRXpD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