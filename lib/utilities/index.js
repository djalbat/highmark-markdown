"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "indexMapFromDivisionMarkdownNodes", {
    enumerable: true,
    get: function() {
        return indexMapFromDivisionMarkdownNodes;
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
function indexMapFromDivisionMarkdownNodes(divisionMarkdownNodes, context) {
    var indexMap = createIndexMap(divisionMarkdownNodes, context);
    removeIgnoredWords(indexMap, context);
    adjustMixedPlurals(indexMap, context);
    adjustPluralPlurals(indexMap, context);
    adjustSingularPlurals(indexMap, context);
    adjustProperNouns(indexMap, context);
    adjustAcronyms(indexMap, context);
    compressPageNumbers(indexMap);
    return indexMap;
}
function createIndexMap(divisionMarkdownNodes, context) {
    var indexMap = {};
    var indexOptions = context.indexOptions, phrases = indexOptions.phrases, indexMatches = phrases.map(function(phrase) {
        var indexMatch = _match.default.fromPhrase(phrase);
        return indexMatch;
    });
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        var pageNumber = divisionMarkdownNode.getPageNumber();
        if (pageNumber !== null) {
            var plainText = divisionMarkdownNode.asPlainText(context), wordsOrPhrases = wordsOrPhrasesFromPlainTextAndIndexMatches(plainText, indexMatches);
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
        var index = lowerCaseProperNouns.findIndex(function(lowerCaseProperNmae) {
            if (lowerCaseProperNmae === wordOrPhrase) {
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
        var index = lowerCaseAcronyms.findIndex(function(lowerCaseProperNmae) {
            if (lowerCaseProperNmae === wordOrPhrase) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSW5kZXhNYXRjaCBmcm9tIFwiLi4vaW5kZXgvbWF0Y2hcIjtcblxuaW1wb3J0IHsgZm9yRWFjaCwgbWFwS2V5cywgbWFwVmFsdWVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IFlfU1RSSU5HLCBTX1NUUklORywgSUVTX1NUUklORywgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UsIFBBUkVOVEhFU0lTRURfU19TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhNYXBGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBpbmRleE1hcCA9IGNyZWF0ZUluZGV4TWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmVtb3ZlSWdub3JlZFdvcmRzKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFBsdXJhbFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFNpbmd1bGFyUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgYWRqdXN0UHJvcGVyTm91bnMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBjb21wcmVzc1BhZ2VOdW1iZXJzKGluZGV4TWFwKTtcblxuICByZXR1cm4gaW5kZXhNYXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4TWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBpbmRleE1hcCA9IHt9O1xuXG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHBocmFzZXMgfSA9IGluZGV4T3B0aW9ucyxcbiAgICAgICAgaW5kZXhNYXRjaGVzID0gcGhyYXNlcy5tYXAoKHBocmFzZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4TWF0Y2ggPSBJbmRleE1hdGNoLmZyb21QaHJhc2UocGhyYXNlKTtcblxuICAgICAgICAgIHJldHVybiBpbmRleE1hdGNoO1xuICAgICAgICB9KTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gZGl2aXNpb25NYXJrZG93bk5vZGUuZ2V0UGFnZU51bWJlcigpO1xuXG4gICAgaWYgKHBhZ2VOdW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBsYWluVGV4dCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgICAgd29yZHNPclBocmFzZXMgPSB3b3Jkc09yUGhyYXNlc0Zyb21QbGFpblRleHRBbmRJbmRleE1hdGNoZXMocGxhaW5UZXh0LCBpbmRleE1hdGNoZXMpO1xuXG4gICAgICB3b3Jkc09yUGhyYXNlcy5mb3JFYWNoKCh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlcnMgPSBpbmRleE1hcC5oYXNPd25Qcm9wZXJ0eSh3b3JkT3JQaHJhc2UpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4TWFwW3dvcmRPclBocmFzZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXTtcblxuICAgICAgICBpbmRleE1hcFt3b3JkT3JQaHJhc2VdID0gcGFnZU51bWJlcnM7XG5cbiAgICAgICAgcGFnZU51bWJlcnMucHVzaChwYWdlTnVtYmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4TWFwO1xufVxuXG5mdW5jdGlvbiB3b3Jkc09yUGhyYXNlc0Zyb21QbGFpblRleHRBbmRJbmRleE1hdGNoZXMocGxhaW5UZXh0LCBpbmRleE1hdGNoZXMpIHtcbiAgbGV0IHdvcmRzT3JQaHJhc2VzO1xuXG4gIHBsYWluVGV4dCA9IHByZXBhcmVQbGFpblRleHQocGxhaW5UZXh0KTsgIC8vL1xuXG4gIGluZGV4TWF0Y2hlcy5mb3JFYWNoKChpbmRleE1hdGNoKSA9PiB7XG4gICAgcGxhaW5UZXh0ID0gaW5kZXhNYXRjaC5yZXBsYWNlKHBsYWluVGV4dCk7XG4gIH0pO1xuXG4gIHdvcmRzT3JQaHJhc2VzID0gcGxhaW5UZXh0LnNwbGl0KFNJTkdMRV9TUEFDRSk7XG5cbiAgd29yZHNPclBocmFzZXMgPSB3b3Jkc09yUGhyYXNlcy5tYXAoKHdvcmRPclBocmFzZSkgPT4ge1xuICAgIHdvcmRPclBocmFzZSA9IEluZGV4TWF0Y2gucmV2ZXJ0KHdvcmRPclBocmFzZSk7ICAvLy9cblxuICAgIHJldHVybiB3b3JkT3JQaHJhc2U7XG4gIH0pO1xuXG4gIHJldHVybiB3b3Jkc09yUGhyYXNlcztcbn1cblxuZnVuY3Rpb24gY29tcHJlc3NQYWdlTnVtYmVycyhpbmRleE1hcCkge1xuICBtYXBWYWx1ZXMoaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29tcHJlc3MocGFnZU51bWJlcnMsIChwYWdlTnVtYmVyQSwgcGFnZU51bWJlckIpID0+IHtcbiAgICAgIGlmIChwYWdlTnVtYmVyQSA9PT0gcGFnZU51bWJlckIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYWdlTnVtYmVycy5zb3J0KChwYWdlTnVtYmVyQiwgcGFnZU51bWJlckEpID0+IHtcbiAgICAgIHBhZ2VOdW1iZXJBID0gTnVtYmVyKHBhZ2VOdW1iZXJBKTsgIC8vL1xuXG4gICAgICBwYWdlTnVtYmVyQiA9IE51bWJlcihwYWdlTnVtYmVyQik7ICAvLy9cblxuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHBhZ2VOdW1iZXJCIC0gcGFnZU51bWJlckE7XG5cbiAgICAgIHJldHVybiBkaWZmZXJlbmNlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXJzO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSWdub3JlZFdvcmRzKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGlnbm9yZWRXb3JkcyB9ID0gaW5kZXhPcHRpb25zO1xuXG4gIGlnbm9yZWRXb3Jkcy5mb3JFYWNoKChpZ25vcmVkV29yZCkgPT4ge1xuICAgIGRlbGV0ZSBpbmRleE1hcFtpZ25vcmVkV29yZF07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RQcm9wZXJOb3VucyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwcm9wZXJOb3VucyB9ID0gaW5kZXhPcHRpb25zO1xuXG4gIGNvbnN0IGxvd2VyQ2FzZVByb3Blck5vdW5zID0gcHJvcGVyTm91bnMubWFwKChwcm9wZXJOb3VuKSA9PiB7XG4gICAgY29uc3QgbG93ZXJDYXNlUHJvcGVyTm91biA9IHByb3Blck5vdW4udG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiBsb3dlckNhc2VQcm9wZXJOb3VuO1xuICB9KTtcblxuICBtYXBLZXlzKGluZGV4TWFwLCAod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBsb3dlckNhc2VQcm9wZXJOb3Vucy5maW5kSW5kZXgoKGxvd2VyQ2FzZVByb3Blck5tYWUpID0+IHtcbiAgICAgIGlmIChsb3dlckNhc2VQcm9wZXJObWFlID09PSB3b3JkT3JQaHJhc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgcHJvcGVyTm91biA9IHByb3Blck5vdW5zW2luZGV4XTtcblxuICAgICAgd29yZE9yUGhyYXNlID0gcHJvcGVyTm91bjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3b3JkT3JQaHJhc2U7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlUGxhaW5UZXh0KHBsYWluVGV4dCkge1xuICBwbGFpblRleHQgPSBwbGFpblRleHQudG9Mb3dlckNhc2UoKTsgIC8vL1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9bXmEtejAtOVxcLSBdL2csIFNJTkdMRV9TUEFDRSk7XG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoL1xccysvZywgU0lOR0xFX1NQQUNFKTtcblxuICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcGxhaW5UZXh0O1xufVxuXG5mdW5jdGlvbiBhZGp1c3RBY3JvbnltcyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBhY3JvbnltcyB9ID0gaW5kZXhPcHRpb25zO1xuXG4gIGNvbnN0IGxvd2VyQ2FzZUFjcm9ueW1zID0gYWNyb255bXMubWFwKChhY3JvbnltKSA9PiB7XG4gICAgY29uc3QgbG93ZXJDYXNlQWNyb255bSA9IGFjcm9ueW0udG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiBsb3dlckNhc2VBY3JvbnltO1xuICB9KTtcblxuICBtYXBLZXlzKGluZGV4TWFwLCAod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBsb3dlckNhc2VBY3Jvbnltcy5maW5kSW5kZXgoKGxvd2VyQ2FzZVByb3Blck5tYWUpID0+IHtcbiAgICAgIGlmIChsb3dlckNhc2VQcm9wZXJObWFlID09PSB3b3JkT3JQaHJhc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgYWNyb255bSA9IGFjcm9ueW1zW2luZGV4XTtcblxuICAgICAgd29yZE9yUGhyYXNlID0gYWNyb255bTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3b3JkT3JQaHJhc2U7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgcGx1cmFscyB9ID0gaW5kZXhPcHRpb25zLFxuICAgICAgICBtaXhlZFBsdXJhbHMgPSByZWR1Y2VQbHVyYWxzKHBsdXJhbHMsIGlzTWl4ZWQpLFxuICAgICAgICBwbHVyYWxQbHVyYWxzID0gbWFwUGx1cmFscyhtaXhlZFBsdXJhbHMsIG1peGVkVG9QbHVyYWwpLFxuICAgICAgICBzaW5ndWxhclBsdXJhbHMgPSBtYXBQbHVyYWxzKG1peGVkUGx1cmFscywgbWl4ZWRUb1Npbmd1bGFyKTtcblxuICBmb3JFYWNoKGluZGV4TWFwLCAod29yZE9yUGhyYXNlLCBwYWdlTnVtYmVycykgPT4ge1xuICAgIGNvbnN0IHNpbmd1bGFyUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlID0gc2luZ3VsYXJQbHVyYWxzLmluY2x1ZGVzKHdvcmRPclBocmFzZSk7XG5cbiAgICBpZiAoc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UpIHtcbiAgICAgIGNvbnN0IHNpbmd1bGFyV29yZE9yUGhyYXNlID0gd29yZE9yUGhyYXNlLCAgLy8vXG4gICAgICAgICAgICBzaW5ndWxhclBhZ2VOdW1iZXJzID0gcGFnZU51bWJlcnMsICAvLy9cbiAgICAgICAgICAgIG1peGVkV29yZE9yUGhyYXNlID0gc2luZ3VsYXJUb01peGVkKHNpbmd1bGFyV29yZE9yUGhyYXNlKSxcbiAgICAgICAgICAgIG1peGVkUGFnZU51bWJlcnMgPSBpbmRleE1hcFttaXhlZFdvcmRPclBocmFzZV0gfHwgW107XG5cbiAgICAgIHBhZ2VOdW1iZXJzID0gW1xuICAgICAgICAuLi5zaW5ndWxhclBhZ2VOdW1iZXJzLFxuICAgICAgICAuLi5taXhlZFBhZ2VOdW1iZXJzXG4gICAgICBdO1xuXG4gICAgICBkZWxldGUgaW5kZXhNYXBbc2luZ3VsYXJXb3JkT3JQaHJhc2VdO1xuXG4gICAgICBpbmRleE1hcFttaXhlZFdvcmRPclBocmFzZV0gPSBwYWdlTnVtYmVycztcbiAgICB9XG5cbiAgICBjb25zdCBwbHVyYWxQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UgPSBwbHVyYWxQbHVyYWxzLmluY2x1ZGVzKHdvcmRPclBocmFzZSk7XG5cbiAgICBpZiAocGx1cmFsUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlKSB7XG4gICAgICBjb25zdCBwbHVyYWxXb3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UsICAvLy9cbiAgICAgICAgICAgIHBsdXJhbFBhZ2VOdW1iZXJzID0gcGFnZU51bWJlcnMsICAvLy9cbiAgICAgICAgICAgIG1peGVkV29yZE9yUGhyYXNlID0gcGx1cmFsVG9NaXhlZChwbHVyYWxXb3JkT3JQaHJhc2UpLFxuICAgICAgICAgICAgbWl4ZWRQYWdlTnVtYmVycyA9IGluZGV4TWFwW21peGVkV29yZE9yUGhyYXNlXSB8fCBbXTtcblxuICAgICAgcGFnZU51bWJlcnMgPSBbXG4gICAgICAgIC4uLnBsdXJhbFBhZ2VOdW1iZXJzLFxuICAgICAgICAuLi5taXhlZFBhZ2VOdW1iZXJzXG4gICAgICBdO1xuXG4gICAgICBkZWxldGUgaW5kZXhNYXBbcGx1cmFsV29yZE9yUGhyYXNlXTtcblxuICAgICAgaW5kZXhNYXBbbWl4ZWRXb3JkT3JQaHJhc2VdID0gcGFnZU51bWJlcnM7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0UGx1cmFsUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwbHVyYWxzIH0gPSBpbmRleE9wdGlvbnMsXG4gICAgICAgIHBsdXJhbFBsdXJhbHMgPSByZWR1Y2VQbHVyYWxzKHBsdXJhbHMsIGlzUGx1cmFsKSxcbiAgICAgICAgc2luZ3VsYXJQbHVyYWxzID0gbWFwUGx1cmFscyhwbHVyYWxQbHVyYWxzLCBwbHVyYWxUb1Npbmd1bGFyKTtcblxuICBmb3JFYWNoKGluZGV4TWFwLCAod29yZE9yUGhyYXNlLCBwYWdlTnVtYmVycykgPT4ge1xuICAgIGNvbnN0IHNpbmd1bGFyUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlID0gc2luZ3VsYXJQbHVyYWxzLmluY2x1ZGVzKHdvcmRPclBocmFzZSk7XG5cbiAgICBpZiAoc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UpIHtcbiAgICAgIGNvbnN0IHNpbmd1bGFyV29yZE9yUGhyYXNlID0gd29yZE9yUGhyYXNlLCAgLy8vXG4gICAgICAgICAgICBzaW5ndWxhclBhZ2VOdW1iZXJzID0gcGFnZU51bWJlcnMsICAvLy9cbiAgICAgICAgICAgIHBsdXJhbFdvcmRPclBocmFzZSA9IHNpbmd1bGFyVG9QbHVyYWwod29yZE9yUGhyYXNlKSxcbiAgICAgICAgICAgIHBsdXJhbFBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbcGx1cmFsV29yZE9yUGhyYXNlXSB8fCBbXTtcblxuICAgICAgcGFnZU51bWJlcnMgPSBbXG4gICAgICAgIC4uLnNpbmd1bGFyUGFnZU51bWJlcnMsXG4gICAgICAgIC4uLnBsdXJhbFBhZ2VOdW1iZXJzXG4gICAgICBdO1xuXG4gICAgICBkZWxldGUgaW5kZXhNYXBbc2luZ3VsYXJXb3JkT3JQaHJhc2VdO1xuXG4gICAgICBpbmRleE1hcFtwbHVyYWxXb3JkT3JQaHJhc2VdID0gcGFnZU51bWJlcnM7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0U2luZ3VsYXJQbHVyYWxzKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHBsdXJhbHMgfSA9IGluZGV4T3B0aW9ucyxcbiAgICAgICAgc2luZ3VsYXJQbHVyYWxzID0gcmVkdWNlUGx1cmFscyhwbHVyYWxzLCBpc1Npbmd1bGFyKSxcbiAgICAgICAgcGx1cmFsUGx1cmFscyA9IG1hcFBsdXJhbHMoc2luZ3VsYXJQbHVyYWxzLCBzaW5ndWxhclRvUGx1cmFsKTtcblxuICBmb3JFYWNoKGluZGV4TWFwLCAod29yZE9yUGhyYXNlLCBwYWdlTnVtYmVycykgPT4ge1xuICAgICAgY29uc3QgcGx1cmFsUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlID0gcGx1cmFsUGx1cmFscy5pbmNsdWRlcyh3b3JkT3JQaHJhc2UpO1xuXG4gICAgICBpZiAocGx1cmFsUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlKSB7XG4gICAgICAgIGNvbnN0IHNpbmd1bGFyV29yZE9yUGhyYXNlID0gcGx1cmFsVG9TaW5ndWxhcih3b3JkT3JQaHJhc2UpLFxuICAgICAgICAgICAgICBzaW5ndWxhclBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbc2luZ3VsYXJXb3JkT3JQaHJhc2VdIHx8IFtdLFxuICAgICAgICAgICAgICBwbHVyYWxXb3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UsICAvLy9cbiAgICAgICAgICAgICAgcGx1cmFsUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVyczsgIC8vL1xuXG4gICAgICAgIHBhZ2VOdW1iZXJzID0gW1xuICAgICAgICAgIC4uLnNpbmd1bGFyUGFnZU51bWJlcnMsXG4gICAgICAgICAgLi4ucGx1cmFsUGFnZU51bWJlcnNcbiAgICAgICAgXTtcblxuICAgICAgICBkZWxldGUgaW5kZXhNYXBbcGx1cmFsV29yZE9yUGhyYXNlXTtcblxuICAgICAgICBpbmRleE1hcFtzaW5ndWxhcldvcmRPclBocmFzZV0gPSBwYWdlTnVtYmVycztcbiAgICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVBsdXJhbHMocGx1cmFscywgY2FsbGJhY2spIHtcbiAgcGx1cmFscyA9IHBsdXJhbHMucmVkdWNlKChwbHVyYWxzLCBwbHVyYWwpID0+IHsgLy8vXG4gICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2socGx1cmFsKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHBsdXJhbHMucHVzaChwbHVyYWwpO1xuICAgIH1cblxuICAgIHJldHVybiBwbHVyYWxzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHBsdXJhbHM7XG59XG5cbmZ1bmN0aW9uIG1hcFBsdXJhbHMocGx1cmFscywgY2FsbGJhY2spIHtcbiAgcGx1cmFscyA9IHBsdXJhbHMubWFwKChwbHVyYWwpID0+IHsgLy8vXG4gICAgcGx1cmFsID0gY2FsbGJhY2socGx1cmFsKTtcblxuICAgIHJldHVybiBwbHVyYWw7XG4gIH0pO1xuXG4gIHJldHVybiBwbHVyYWxzO1xufVxuXG5mdW5jdGlvbiBpc1Npbmd1bGFyKHRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXRjaGVzID0gL1tecyldJC8udGVzdCh0ZXh0KSxcbiAgICAgICAgc2luZ3VsYXIgPSBpbmRleE1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBzaW5ndWxhcjtcbn1cblxuZnVuY3Rpb24gaXNQbHVyYWwodGV4dCkge1xuICBjb25zdCBpbmRleE1hdGNoZXMgPSAvKGllc3xzKSQvLnRlc3QodGV4dCksXG4gICAgICAgIHBsdXJhbCA9IGluZGV4TWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIHBsdXJhbDtcbn1cblxuZnVuY3Rpb24gaXNNaXhlZCh0ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWF0Y2hlcyA9IC9cXChzXFwpJC8udGVzdCh0ZXh0KSxcbiAgICAgICAgbWl4ZWQgPSBpbmRleE1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBtaXhlZDtcbn1cblxuZnVuY3Rpb24gbWl4ZWRUb1BsdXJhbCh0ZXh0KSB7XG4gIHRleHQgPSB0ZXh0IC8vL1xuICAgICAgICAgICAucmVwbGFjZSgvXFwoc1xcKSQvLCBTX1NUUklORyk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFRvTWl4ZWQodGV4dCkge1xuICB0ZXh0ID0gdGV4dCAvLy9cbiAgICAgICAgICAgLnJlcGxhY2UoL3MkLywgUEFSRU5USEVTSVNFRF9TX1NUUklORylcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gbWl4ZWRUb1Npbmd1bGFyKHRleHQpIHtcbiAgdGV4dCA9IHRleHQgLy8vXG4gICAgICAgICAgLnJlcGxhY2UoL1xcKHNcXCkkLywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gc2luZ3VsYXJUb01peGVkKHRleHQpIHtcbiAgdGV4dCA9IGAke3RleHR9KHMpYDtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gc2luZ3VsYXJUb1BsdXJhbCh0ZXh0KSB7XG4gIHRleHQgPSBgJHt0ZXh0fXNgIC8vL1xuICAgICAgICAgICAucmVwbGFjZSgveXMkLywgSUVTX1NUUklORyk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFRvU2luZ3VsYXIodGV4dCkge1xuICB0ZXh0ID0gdGV4dCAvLy9cbiAgICAgICAgICAgLnJlcGxhY2UoL2llcyQvLCBZX1NUUklORylcbiAgICAgICAgICAgLnJlcGxhY2UoL3MkLywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gdGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJpbmRleE1hcEZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJjb21wcmVzcyIsImFycmF5VXRpbGl0aWVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiY29udGV4dCIsImluZGV4TWFwIiwiY3JlYXRlSW5kZXhNYXAiLCJyZW1vdmVJZ25vcmVkV29yZHMiLCJhZGp1c3RNaXhlZFBsdXJhbHMiLCJhZGp1c3RQbHVyYWxQbHVyYWxzIiwiYWRqdXN0U2luZ3VsYXJQbHVyYWxzIiwiYWRqdXN0UHJvcGVyTm91bnMiLCJhZGp1c3RBY3JvbnltcyIsImNvbXByZXNzUGFnZU51bWJlcnMiLCJpbmRleE9wdGlvbnMiLCJwaHJhc2VzIiwiaW5kZXhNYXRjaGVzIiwibWFwIiwicGhyYXNlIiwiaW5kZXhNYXRjaCIsIkluZGV4TWF0Y2giLCJmcm9tUGhyYXNlIiwiZm9yRWFjaCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicGFnZU51bWJlciIsImdldFBhZ2VOdW1iZXIiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsIndvcmRzT3JQaHJhc2VzIiwid29yZHNPclBocmFzZXNGcm9tUGxhaW5UZXh0QW5kSW5kZXhNYXRjaGVzIiwid29yZE9yUGhyYXNlIiwicGFnZU51bWJlcnMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJwcmVwYXJlUGxhaW5UZXh0IiwicmVwbGFjZSIsInNwbGl0IiwiU0lOR0xFX1NQQUNFIiwicmV2ZXJ0IiwibWFwVmFsdWVzIiwicGFnZU51bWJlckEiLCJwYWdlTnVtYmVyQiIsInNvcnQiLCJOdW1iZXIiLCJkaWZmZXJlbmNlIiwiaWdub3JlZFdvcmRzIiwiaWdub3JlZFdvcmQiLCJwcm9wZXJOb3VucyIsImxvd2VyQ2FzZVByb3Blck5vdW5zIiwicHJvcGVyTm91biIsImxvd2VyQ2FzZVByb3Blck5vdW4iLCJ0b0xvd2VyQ2FzZSIsIm1hcEtleXMiLCJpbmRleCIsImZpbmRJbmRleCIsImxvd2VyQ2FzZVByb3Blck5tYWUiLCJFTVBUWV9TVFJJTkciLCJhY3JvbnltcyIsImxvd2VyQ2FzZUFjcm9ueW1zIiwiYWNyb255bSIsImxvd2VyQ2FzZUFjcm9ueW0iLCJwbHVyYWxzIiwibWl4ZWRQbHVyYWxzIiwicmVkdWNlUGx1cmFscyIsImlzTWl4ZWQiLCJwbHVyYWxQbHVyYWxzIiwibWFwUGx1cmFscyIsIm1peGVkVG9QbHVyYWwiLCJzaW5ndWxhclBsdXJhbHMiLCJtaXhlZFRvU2luZ3VsYXIiLCJzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSIsImluY2x1ZGVzIiwic2luZ3VsYXJXb3JkT3JQaHJhc2UiLCJzaW5ndWxhclBhZ2VOdW1iZXJzIiwibWl4ZWRXb3JkT3JQaHJhc2UiLCJzaW5ndWxhclRvTWl4ZWQiLCJtaXhlZFBhZ2VOdW1iZXJzIiwicGx1cmFsUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlIiwicGx1cmFsV29yZE9yUGhyYXNlIiwicGx1cmFsUGFnZU51bWJlcnMiLCJwbHVyYWxUb01peGVkIiwiaXNQbHVyYWwiLCJwbHVyYWxUb1Npbmd1bGFyIiwic2luZ3VsYXJUb1BsdXJhbCIsImlzU2luZ3VsYXIiLCJjYWxsYmFjayIsInJlZHVjZSIsInBsdXJhbCIsInJlc3VsdCIsInRleHQiLCJ0ZXN0Iiwic2luZ3VsYXIiLCJtaXhlZCIsIlNfU1RSSU5HIiwiUEFSRU5USEVTSVNFRF9TX1NUUklORyIsIklFU19TVFJJTkciLCJZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV2dCQTs7O2VBQUFBOzs7eUJBVGU7NERBRVI7c0JBRXFCO3lCQUN1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRyxJQUFNLEFBQUVDLFdBQWFDLHlCQUFjLENBQTNCRDtBQUVELFNBQVNELGtDQUFrQ0cscUJBQXFCLEVBQUVDLE9BQU87SUFDOUUsSUFBTUMsV0FBV0MsZUFBZUgsdUJBQXVCQztJQUV2REcsbUJBQW1CRixVQUFVRDtJQUU3QkksbUJBQW1CSCxVQUFVRDtJQUU3Qkssb0JBQW9CSixVQUFVRDtJQUU5Qk0sc0JBQXNCTCxVQUFVRDtJQUVoQ08sa0JBQWtCTixVQUFVRDtJQUU1QlEsZUFBZVAsVUFBVUQ7SUFFekJTLG9CQUFvQlI7SUFFcEIsT0FBT0E7QUFDVDtBQUVBLFNBQVNDLGVBQWVILHFCQUFxQixFQUFFQyxPQUFPO0lBQ3BELElBQU1DLFdBQVcsQ0FBQztJQUVsQixJQUFNLEFBQUVTLGVBQWlCVixRQUFqQlUsY0FDRixBQUFFQyxVQUFZRCxhQUFaQyxTQUNGQyxlQUFlRCxRQUFR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