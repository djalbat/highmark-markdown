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
                var pageNumbers = indexMap[wordOrPhrase] || null;
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
    plainText = plainText.replace(/[^a-z ]/g, _constants.SINGLE_SPACE);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSW5kZXhNYXRjaCBmcm9tIFwiLi4vaW5kZXgvbWF0Y2hcIjtcblxuaW1wb3J0IHsgZm9yRWFjaCwgbWFwS2V5cywgbWFwVmFsdWVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IFlfU1RSSU5HLCBTX1NUUklORywgSUVTX1NUUklORywgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UsIFBBUkVOVEhFU0lTRURfU19TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhNYXBGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBpbmRleE1hcCA9IGNyZWF0ZUluZGV4TWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmVtb3ZlSWdub3JlZFdvcmRzKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFBsdXJhbFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFNpbmd1bGFyUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgYWRqdXN0UHJvcGVyTm91bnMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBjb21wcmVzc1BhZ2VOdW1iZXJzKGluZGV4TWFwKTtcblxuICByZXR1cm4gaW5kZXhNYXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4TWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBpbmRleE1hcCA9IHt9O1xuXG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHBocmFzZXMgfSA9IGluZGV4T3B0aW9ucyxcbiAgICAgICAgaW5kZXhNYXRjaGVzID0gcGhyYXNlcy5tYXAoKHBocmFzZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4TWF0Y2ggPSBJbmRleE1hdGNoLmZyb21QaHJhc2UocGhyYXNlKTtcblxuICAgICAgICAgIHJldHVybiBpbmRleE1hdGNoO1xuICAgICAgICB9KTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gZGl2aXNpb25NYXJrZG93bk5vZGUuZ2V0UGFnZU51bWJlcigpO1xuXG4gICAgaWYgKHBhZ2VOdW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBsYWluVGV4dCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgICAgd29yZHNPclBocmFzZXMgPSB3b3Jkc09yUGhyYXNlc0Zyb21QbGFpblRleHRBbmRJbmRleE1hdGNoZXMocGxhaW5UZXh0LCBpbmRleE1hdGNoZXMpO1xuXG4gICAgICB3b3Jkc09yUGhyYXNlcy5mb3JFYWNoKCh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICAgICAgbGV0IHBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbd29yZE9yUGhyYXNlXSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChwYWdlTnVtYmVycyA9PT0gbnVsbCkge1xuICAgICAgICAgIHBhZ2VOdW1iZXJzID0gW107XG5cbiAgICAgICAgICBpbmRleE1hcFt3b3JkT3JQaHJhc2VdID0gcGFnZU51bWJlcnM7XG4gICAgICAgIH1cblxuICAgICAgICBwYWdlTnVtYmVycy5wdXNoKHBhZ2VOdW1iZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXhNYXA7XG59XG5cbmZ1bmN0aW9uIHdvcmRzT3JQaHJhc2VzRnJvbVBsYWluVGV4dEFuZEluZGV4TWF0Y2hlcyhwbGFpblRleHQsIGluZGV4TWF0Y2hlcykge1xuICBsZXQgd29yZHNPclBocmFzZXM7XG5cbiAgcGxhaW5UZXh0ID0gcHJlcGFyZVBsYWluVGV4dChwbGFpblRleHQpOyAgLy8vXG5cbiAgaW5kZXhNYXRjaGVzLmZvckVhY2goKGluZGV4TWF0Y2gpID0+IHtcbiAgICBwbGFpblRleHQgPSBpbmRleE1hdGNoLnJlcGxhY2UocGxhaW5UZXh0KTtcbiAgfSk7XG5cbiAgd29yZHNPclBocmFzZXMgPSBwbGFpblRleHQuc3BsaXQoU0lOR0xFX1NQQUNFKTtcblxuICB3b3Jkc09yUGhyYXNlcyA9IHdvcmRzT3JQaHJhc2VzLm1hcCgod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgd29yZE9yUGhyYXNlID0gSW5kZXhNYXRjaC5yZXZlcnQod29yZE9yUGhyYXNlKTsgIC8vL1xuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdvcmRzT3JQaHJhc2VzO1xufVxuXG5mdW5jdGlvbiBjb21wcmVzc1BhZ2VOdW1iZXJzKGluZGV4TWFwKSB7XG4gIG1hcFZhbHVlcyhpbmRleE1hcCwgKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpID0+IHtcbiAgICBjb21wcmVzcyhwYWdlTnVtYmVycywgKHBhZ2VOdW1iZXJBLCBwYWdlTnVtYmVyQikgPT4ge1xuICAgICAgaWYgKHBhZ2VOdW1iZXJBID09PSBwYWdlTnVtYmVyQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VOdW1iZXJzLnNvcnQoKHBhZ2VOdW1iZXJCLCBwYWdlTnVtYmVyQSkgPT4ge1xuICAgICAgcGFnZU51bWJlckEgPSBOdW1iZXIocGFnZU51bWJlckEpOyAgLy8vXG5cbiAgICAgIHBhZ2VOdW1iZXJCID0gTnVtYmVyKHBhZ2VOdW1iZXJCKTsgIC8vL1xuXG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gcGFnZU51bWJlckIgLSBwYWdlTnVtYmVyQTtcblxuICAgICAgcmV0dXJuIGRpZmZlcmVuY2U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlcnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJZ25vcmVkV29yZHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgaWdub3JlZFdvcmRzIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgaWdub3JlZFdvcmRzLmZvckVhY2goKGlnbm9yZWRXb3JkKSA9PiB7XG4gICAgZGVsZXRlIGluZGV4TWFwW2lnbm9yZWRXb3JkXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdFByb3Blck5vdW5zKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHByb3Blck5vdW5zIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgY29uc3QgbG93ZXJDYXNlUHJvcGVyTm91bnMgPSBwcm9wZXJOb3Vucy5tYXAoKHByb3Blck5vdW4pID0+IHtcbiAgICBjb25zdCBsb3dlckNhc2VQcm9wZXJOb3VuID0gcHJvcGVyTm91bi50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIGxvd2VyQ2FzZVByb3Blck5vdW47XG4gIH0pO1xuXG4gIG1hcEtleXMoaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGxvd2VyQ2FzZVByb3Blck5vdW5zLmZpbmRJbmRleCgobG93ZXJDYXNlUHJvcGVyTm1hZSkgPT4ge1xuICAgICAgaWYgKGxvd2VyQ2FzZVByb3Blck5tYWUgPT09IHdvcmRPclBocmFzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBwcm9wZXJOb3VuID0gcHJvcGVyTm91bnNbaW5kZXhdO1xuXG4gICAgICB3b3JkT3JQaHJhc2UgPSBwcm9wZXJOb3VuOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVQbGFpblRleHQocGxhaW5UZXh0KSB7XG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC50b0xvd2VyQ2FzZSgpOyAgLy8vXG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoL1teYS16IF0vZywgU0lOR0xFX1NQQUNFKTtcblxuICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSgvXFxzKy9nLCBTSU5HTEVfU1BBQ0UpO1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBwbGFpblRleHQ7XG59XG5cbmZ1bmN0aW9uIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGFjcm9ueW1zIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgY29uc3QgbG93ZXJDYXNlQWNyb255bXMgPSBhY3Jvbnltcy5tYXAoKGFjcm9ueW0pID0+IHtcbiAgICBjb25zdCBsb3dlckNhc2VBY3JvbnltID0gYWNyb255bS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIGxvd2VyQ2FzZUFjcm9ueW07XG4gIH0pO1xuXG4gIG1hcEtleXMoaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGxvd2VyQ2FzZUFjcm9ueW1zLmZpbmRJbmRleCgobG93ZXJDYXNlUHJvcGVyTm1hZSkgPT4ge1xuICAgICAgaWYgKGxvd2VyQ2FzZVByb3Blck5tYWUgPT09IHdvcmRPclBocmFzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBhY3JvbnltID0gYWNyb255bXNbaW5kZXhdO1xuXG4gICAgICB3b3JkT3JQaHJhc2UgPSBhY3JvbnltOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdE1peGVkUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwbHVyYWxzIH0gPSBpbmRleE9wdGlvbnMsXG4gICAgICAgIG1peGVkUGx1cmFscyA9IHJlZHVjZVBsdXJhbHMocGx1cmFscywgaXNNaXhlZCksXG4gICAgICAgIHBsdXJhbFBsdXJhbHMgPSBtYXBQbHVyYWxzKG1peGVkUGx1cmFscywgbWl4ZWRUb1BsdXJhbCksXG4gICAgICAgIHNpbmd1bGFyUGx1cmFscyA9IG1hcFBsdXJhbHMobWl4ZWRQbHVyYWxzLCBtaXhlZFRvU2luZ3VsYXIpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29uc3Qgc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSkge1xuICAgICAgY29uc3Qgc2luZ3VsYXJXb3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UsICAvLy9cbiAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgbWl4ZWRXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclRvTWl4ZWQoc2luZ3VsYXJXb3JkT3JQaHJhc2UpLFxuICAgICAgICAgICAgbWl4ZWRQYWdlTnVtYmVycyA9IGluZGV4TWFwW21peGVkV29yZE9yUGhyYXNlXSB8fCBbXTtcblxuICAgICAgcGFnZU51bWJlcnMgPSBbXG4gICAgICAgIC4uLnNpbmd1bGFyUGFnZU51bWJlcnMsXG4gICAgICAgIC4uLm1peGVkUGFnZU51bWJlcnNcbiAgICAgIF07XG5cbiAgICAgIGRlbGV0ZSBpbmRleE1hcFtzaW5ndWxhcldvcmRPclBocmFzZV07XG5cbiAgICAgIGluZGV4TWFwW21peGVkV29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IHBsdXJhbFBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSA9IHBsdXJhbFBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChwbHVyYWxQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UpIHtcbiAgICAgIGNvbnN0IHBsdXJhbFdvcmRPclBocmFzZSA9IHdvcmRPclBocmFzZSwgIC8vL1xuICAgICAgICAgICAgcGx1cmFsUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgbWl4ZWRXb3JkT3JQaHJhc2UgPSBwbHVyYWxUb01peGVkKHBsdXJhbFdvcmRPclBocmFzZSksXG4gICAgICAgICAgICBtaXhlZFBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbbWl4ZWRXb3JkT3JQaHJhc2VdIHx8IFtdO1xuXG4gICAgICBwYWdlTnVtYmVycyA9IFtcbiAgICAgICAgLi4ucGx1cmFsUGFnZU51bWJlcnMsXG4gICAgICAgIC4uLm1peGVkUGFnZU51bWJlcnNcbiAgICAgIF07XG5cbiAgICAgIGRlbGV0ZSBpbmRleE1hcFtwbHVyYWxXb3JkT3JQaHJhc2VdO1xuXG4gICAgICBpbmRleE1hcFttaXhlZFdvcmRPclBocmFzZV0gPSBwYWdlTnVtYmVycztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RQbHVyYWxQbHVyYWxzKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHBsdXJhbHMgfSA9IGluZGV4T3B0aW9ucyxcbiAgICAgICAgcGx1cmFsUGx1cmFscyA9IHJlZHVjZVBsdXJhbHMocGx1cmFscywgaXNQbHVyYWwpLFxuICAgICAgICBzaW5ndWxhclBsdXJhbHMgPSBtYXBQbHVyYWxzKHBsdXJhbFBsdXJhbHMsIHBsdXJhbFRvU2luZ3VsYXIpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29uc3Qgc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSkge1xuICAgICAgY29uc3Qgc2luZ3VsYXJXb3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UsICAvLy9cbiAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgcGx1cmFsV29yZE9yUGhyYXNlID0gc2luZ3VsYXJUb1BsdXJhbCh3b3JkT3JQaHJhc2UpLFxuICAgICAgICAgICAgcGx1cmFsUGFnZU51bWJlcnMgPSBpbmRleE1hcFtwbHVyYWxXb3JkT3JQaHJhc2VdIHx8IFtdO1xuXG4gICAgICBwYWdlTnVtYmVycyA9IFtcbiAgICAgICAgLi4uc2luZ3VsYXJQYWdlTnVtYmVycyxcbiAgICAgICAgLi4ucGx1cmFsUGFnZU51bWJlcnNcbiAgICAgIF07XG5cbiAgICAgIGRlbGV0ZSBpbmRleE1hcFtzaW5ndWxhcldvcmRPclBocmFzZV07XG5cbiAgICAgIGluZGV4TWFwW3BsdXJhbFdvcmRPclBocmFzZV0gPSBwYWdlTnVtYmVycztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RTaW5ndWxhclBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgcGx1cmFscyB9ID0gaW5kZXhPcHRpb25zLFxuICAgICAgICBzaW5ndWxhclBsdXJhbHMgPSByZWR1Y2VQbHVyYWxzKHBsdXJhbHMsIGlzU2luZ3VsYXIpLFxuICAgICAgICBwbHVyYWxQbHVyYWxzID0gbWFwUGx1cmFscyhzaW5ndWxhclBsdXJhbHMsIHNpbmd1bGFyVG9QbHVyYWwpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgICBjb25zdCBwbHVyYWxQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UgPSBwbHVyYWxQbHVyYWxzLmluY2x1ZGVzKHdvcmRPclBocmFzZSk7XG5cbiAgICAgIGlmIChwbHVyYWxQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UpIHtcbiAgICAgICAgY29uc3Qgc2luZ3VsYXJXb3JkT3JQaHJhc2UgPSBwbHVyYWxUb1Npbmd1bGFyKHdvcmRPclBocmFzZSksXG4gICAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBpbmRleE1hcFtzaW5ndWxhcldvcmRPclBocmFzZV0gfHwgW10sXG4gICAgICAgICAgICAgIHBsdXJhbFdvcmRPclBocmFzZSA9IHdvcmRPclBocmFzZSwgIC8vL1xuICAgICAgICAgICAgICBwbHVyYWxQYWdlTnVtYmVycyA9IHBhZ2VOdW1iZXJzOyAgLy8vXG5cbiAgICAgICAgcGFnZU51bWJlcnMgPSBbXG4gICAgICAgICAgLi4uc2luZ3VsYXJQYWdlTnVtYmVycyxcbiAgICAgICAgICAuLi5wbHVyYWxQYWdlTnVtYmVyc1xuICAgICAgICBdO1xuXG4gICAgICAgIGRlbGV0ZSBpbmRleE1hcFtwbHVyYWxXb3JkT3JQaHJhc2VdO1xuXG4gICAgICAgIGluZGV4TWFwW3Npbmd1bGFyV29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuICAgICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUGx1cmFscyhwbHVyYWxzLCBjYWxsYmFjaykge1xuICBwbHVyYWxzID0gcGx1cmFscy5yZWR1Y2UoKHBsdXJhbHMsIHBsdXJhbCkgPT4geyAvLy9cbiAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhwbHVyYWwpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcGx1cmFscy5wdXNoKHBsdXJhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsdXJhbHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcGx1cmFscztcbn1cblxuZnVuY3Rpb24gbWFwUGx1cmFscyhwbHVyYWxzLCBjYWxsYmFjaykge1xuICBwbHVyYWxzID0gcGx1cmFscy5tYXAoKHBsdXJhbCkgPT4geyAvLy9cbiAgICBwbHVyYWwgPSBjYWxsYmFjayhwbHVyYWwpO1xuXG4gICAgcmV0dXJuIHBsdXJhbDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBsdXJhbHM7XG59XG5cbmZ1bmN0aW9uIGlzU2luZ3VsYXIodGV4dCkge1xuICBjb25zdCBpbmRleE1hdGNoZXMgPSAvW15zKV0kLy50ZXN0KHRleHQpLFxuICAgICAgICBzaW5ndWxhciA9IGluZGV4TWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIHNpbmd1bGFyO1xufVxuXG5mdW5jdGlvbiBpc1BsdXJhbCh0ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWF0Y2hlcyA9IC8oaWVzfHMpJC8udGVzdCh0ZXh0KSxcbiAgICAgICAgcGx1cmFsID0gaW5kZXhNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gcGx1cmFsO1xufVxuXG5mdW5jdGlvbiBpc01peGVkKHRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXRjaGVzID0gL1xcKHNcXCkkLy50ZXN0KHRleHQpLFxuICAgICAgICBtaXhlZCA9IGluZGV4TWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIG1peGVkO1xufVxuXG5mdW5jdGlvbiBtaXhlZFRvUGx1cmFsKHRleHQpIHtcbiAgdGV4dCA9IHRleHQgLy8vXG4gICAgICAgICAgIC5yZXBsYWNlKC9cXChzXFwpJC8sIFNfU1RSSU5HKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVG9NaXhlZCh0ZXh0KSB7XG4gIHRleHQgPSB0ZXh0IC8vL1xuICAgICAgICAgICAucmVwbGFjZSgvcyQvLCBQQVJFTlRIRVNJU0VEX1NfU1RSSU5HKVxuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBtaXhlZFRvU2luZ3VsYXIodGV4dCkge1xuICB0ZXh0ID0gdGV4dCAvLy9cbiAgICAgICAgICAucmVwbGFjZSgvXFwoc1xcKSQvLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBzaW5ndWxhclRvTWl4ZWQodGV4dCkge1xuICB0ZXh0ID0gYCR7dGV4dH0ocylgO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBzaW5ndWxhclRvUGx1cmFsKHRleHQpIHtcbiAgdGV4dCA9IGAke3RleHR9c2AgLy8vXG4gICAgICAgICAgIC5yZXBsYWNlKC95cyQvLCBJRVNfU1RSSU5HKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVG9TaW5ndWxhcih0ZXh0KSB7XG4gIHRleHQgPSB0ZXh0IC8vL1xuICAgICAgICAgICAucmVwbGFjZSgvaWVzJC8sIFlfU1RSSU5HKVxuICAgICAgICAgICAucmVwbGFjZSgvcyQvLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuIl0sIm5hbWVzIjpbImluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImNvbXByZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJjb250ZXh0IiwiaW5kZXhNYXAiLCJjcmVhdGVJbmRleE1hcCIsInJlbW92ZUlnbm9yZWRXb3JkcyIsImFkanVzdE1peGVkUGx1cmFscyIsImFkanVzdFBsdXJhbFBsdXJhbHMiLCJhZGp1c3RTaW5ndWxhclBsdXJhbHMiLCJhZGp1c3RQcm9wZXJOb3VucyIsImFkanVzdEFjcm9ueW1zIiwiY29tcHJlc3NQYWdlTnVtYmVycyIsImluZGV4T3B0aW9ucyIsInBocmFzZXMiLCJpbmRleE1hdGNoZXMiLCJtYXAiLCJwaHJhc2UiLCJpbmRleE1hdGNoIiwiSW5kZXhNYXRjaCIsImZyb21QaHJhc2UiLCJmb3JFYWNoIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJwYWdlTnVtYmVyIiwiZ2V0UGFnZU51bWJlciIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0Iiwid29yZHNPclBocmFzZXMiLCJ3b3Jkc09yUGhyYXNlc0Zyb21QbGFpblRleHRBbmRJbmRleE1hdGNoZXMiLCJ3b3JkT3JQaHJhc2UiLCJwYWdlTnVtYmVycyIsInB1c2giLCJwcmVwYXJlUGxhaW5UZXh0IiwicmVwbGFjZSIsInNwbGl0IiwiU0lOR0xFX1NQQUNFIiwicmV2ZXJ0IiwibWFwVmFsdWVzIiwicGFnZU51bWJlckEiLCJwYWdlTnVtYmVyQiIsInNvcnQiLCJOdW1iZXIiLCJkaWZmZXJlbmNlIiwiaWdub3JlZFdvcmRzIiwiaWdub3JlZFdvcmQiLCJwcm9wZXJOb3VucyIsImxvd2VyQ2FzZVByb3Blck5vdW5zIiwicHJvcGVyTm91biIsImxvd2VyQ2FzZVByb3Blck5vdW4iLCJ0b0xvd2VyQ2FzZSIsIm1hcEtleXMiLCJpbmRleCIsImZpbmRJbmRleCIsImxvd2VyQ2FzZVByb3Blck5tYWUiLCJFTVBUWV9TVFJJTkciLCJhY3JvbnltcyIsImxvd2VyQ2FzZUFjcm9ueW1zIiwiYWNyb255bSIsImxvd2VyQ2FzZUFjcm9ueW0iLCJwbHVyYWxzIiwibWl4ZWRQbHVyYWxzIiwicmVkdWNlUGx1cmFscyIsImlzTWl4ZWQiLCJwbHVyYWxQbHVyYWxzIiwibWFwUGx1cmFscyIsIm1peGVkVG9QbHVyYWwiLCJzaW5ndWxhclBsdXJhbHMiLCJtaXhlZFRvU2luZ3VsYXIiLCJzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSIsImluY2x1ZGVzIiwic2luZ3VsYXJXb3JkT3JQaHJhc2UiLCJzaW5ndWxhclBhZ2VOdW1iZXJzIiwibWl4ZWRXb3JkT3JQaHJhc2UiLCJzaW5ndWxhclRvTWl4ZWQiLCJtaXhlZFBhZ2VOdW1iZXJzIiwicGx1cmFsUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlIiwicGx1cmFsV29yZE9yUGhyYXNlIiwicGx1cmFsUGFnZU51bWJlcnMiLCJwbHVyYWxUb01peGVkIiwiaXNQbHVyYWwiLCJwbHVyYWxUb1Npbmd1bGFyIiwic2luZ3VsYXJUb1BsdXJhbCIsImlzU2luZ3VsYXIiLCJjYWxsYmFjayIsInJlZHVjZSIsInBsdXJhbCIsInJlc3VsdCIsInRleHQiLCJ0ZXN0Iiwic2luZ3VsYXIiLCJtaXhlZCIsIlNfU1RSSU5HIiwiUEFSRU5USEVTSVNFRF9TX1NUUklORyIsIklFU19TVFJJTkciLCJZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV2dCQTs7O2VBQUFBOzs7eUJBVGU7NERBRVI7c0JBRXFCO3lCQUN1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRyxJQUFNLEFBQUVDLFdBQWFDLHlCQUFjLENBQTNCRDtBQUVELFNBQVNELGtDQUFrQ0cscUJBQXFCLEVBQUVDLE9BQU87SUFDOUUsSUFBTUMsV0FBV0MsZUFBZUgsdUJBQXVCQztJQUV2REcsbUJBQW1CRixVQUFVRDtJQUU3QkksbUJBQW1CSCxVQUFVRDtJQUU3Qkssb0JBQW9CSixVQUFVRDtJQUU5Qk0sc0JBQXNCTCxVQUFVRDtJQUVoQ08sa0JBQWtCTixVQUFVRDtJQUU1QlEsZUFBZVAsVUFBVUQ7SUFFekJTLG9CQUFvQlI7SUFFcEIsT0FBT0E7QUFDVDtBQUVBLFNBQVNDLGVBQWVILHFCQUFxQixFQUFFQyxPQUFPO0lBQ3BELElBQU1DLFdBQVcsQ0FBQztJQUVsQixJQUFNLEFBQUVTLGVBQWlCVixRQUFqQlUsY0FDRixBQUFFQyxVQUFZRCxhQUFaQyxTQUNGQyxlQUFlRCxRQUFRRSxHQUFHLENBQUMsU0FBQ0M7UUFDMUIsSUFBTUMsYUFBYUMsY0FBVSxDQUFD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