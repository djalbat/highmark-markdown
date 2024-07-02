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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSW5kZXhNYXRjaCBmcm9tIFwiLi4vaW5kZXgvbWF0Y2hcIjtcblxuaW1wb3J0IHsgZm9yRWFjaCwgbWFwS2V5cywgbWFwVmFsdWVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IFlfU1RSSU5HLCBTX1NUUklORywgSUVTX1NUUklORywgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UsIFBBUkVOVEhFU0lTRURfU19TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhNYXBGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBpbmRleE1hcCA9IGNyZWF0ZUluZGV4TWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmVtb3ZlSWdub3JlZFdvcmRzKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFBsdXJhbFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFNpbmd1bGFyUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgYWRqdXN0UHJvcGVyTm91bnMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBjb21wcmVzc1BhZ2VOdW1iZXJzKGluZGV4TWFwKTtcblxuICByZXR1cm4gaW5kZXhNYXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4TWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBpbmRleE1hcCA9IHt9O1xuXG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHBocmFzZXMgfSA9IGluZGV4T3B0aW9ucyxcbiAgICAgICAgaW5kZXhNYXRjaGVzID0gcGhyYXNlcy5tYXAoKHBocmFzZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4TWF0Y2ggPSBJbmRleE1hdGNoLmZyb21QaHJhc2UocGhyYXNlKTtcblxuICAgICAgICAgIHJldHVybiBpbmRleE1hdGNoO1xuICAgICAgICB9KTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gZGl2aXNpb25NYXJrZG93bk5vZGUuZ2V0UGFnZU51bWJlcigpO1xuXG4gICAgaWYgKHBhZ2VOdW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBsYWluVGV4dCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgICAgd29yZHNPclBocmFzZXMgPSB3b3Jkc09yUGhyYXNlc0Zyb21QbGFpblRleHRBbmRJbmRleE1hdGNoZXMocGxhaW5UZXh0LCBpbmRleE1hdGNoZXMpO1xuXG4gICAgICB3b3Jkc09yUGhyYXNlcy5mb3JFYWNoKCh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICAgICAgbGV0IHBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbd29yZE9yUGhyYXNlXSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChwYWdlTnVtYmVycyA9PT0gbnVsbCkge1xuICAgICAgICAgIHBhZ2VOdW1iZXJzID0gW107XG5cbiAgICAgICAgICBpbmRleE1hcFt3b3JkT3JQaHJhc2VdID0gcGFnZU51bWJlcnM7XG4gICAgICAgIH1cblxuICAgICAgICBwYWdlTnVtYmVycy5wdXNoKHBhZ2VOdW1iZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXhNYXA7XG59XG5cbmZ1bmN0aW9uIHdvcmRzT3JQaHJhc2VzRnJvbVBsYWluVGV4dEFuZEluZGV4TWF0Y2hlcyhwbGFpblRleHQsIGluZGV4TWF0Y2hlcykge1xuICBsZXQgd29yZHNPclBocmFzZXM7XG5cbiAgcGxhaW5UZXh0ID0gcHJlcGFyZVBsYWluVGV4dChwbGFpblRleHQpOyAgLy8vXG5cbiAgaW5kZXhNYXRjaGVzLmZvckVhY2goKGluZGV4TWF0Y2gpID0+IHtcbiAgICBwbGFpblRleHQgPSBpbmRleE1hdGNoLnJlcGxhY2UocGxhaW5UZXh0KTtcbiAgfSk7XG5cbiAgd29yZHNPclBocmFzZXMgPSBwbGFpblRleHQuc3BsaXQoU0lOR0xFX1NQQUNFKTtcblxuICB3b3Jkc09yUGhyYXNlcyA9IHdvcmRzT3JQaHJhc2VzLm1hcCgod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgd29yZE9yUGhyYXNlID0gSW5kZXhNYXRjaC5yZXZlcnQod29yZE9yUGhyYXNlKTsgIC8vL1xuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdvcmRzT3JQaHJhc2VzO1xufVxuXG5mdW5jdGlvbiBjb21wcmVzc1BhZ2VOdW1iZXJzKGluZGV4TWFwKSB7XG4gIG1hcFZhbHVlcyhpbmRleE1hcCwgKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpID0+IHtcbiAgICBjb21wcmVzcyhwYWdlTnVtYmVycywgKHBhZ2VOdW1iZXJBLCBwYWdlTnVtYmVyQikgPT4ge1xuICAgICAgaWYgKHBhZ2VOdW1iZXJBID09PSBwYWdlTnVtYmVyQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VOdW1iZXJzLnNvcnQoKHBhZ2VOdW1iZXJCLCBwYWdlTnVtYmVyQSkgPT4ge1xuICAgICAgcGFnZU51bWJlckEgPSBOdW1iZXIocGFnZU51bWJlckEpOyAgLy8vXG5cbiAgICAgIHBhZ2VOdW1iZXJCID0gTnVtYmVyKHBhZ2VOdW1iZXJCKTsgIC8vL1xuXG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gcGFnZU51bWJlckIgLSBwYWdlTnVtYmVyQTtcblxuICAgICAgcmV0dXJuIGRpZmZlcmVuY2U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlcnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJZ25vcmVkV29yZHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgaWdub3JlZFdvcmRzIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgaWdub3JlZFdvcmRzLmZvckVhY2goKGlnbm9yZWRXb3JkKSA9PiB7XG4gICAgZGVsZXRlIGluZGV4TWFwW2lnbm9yZWRXb3JkXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdFByb3Blck5vdW5zKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHByb3Blck5vdW5zIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgY29uc3QgbG93ZXJDYXNlUHJvcGVyTm91bnMgPSBwcm9wZXJOb3Vucy5tYXAoKHByb3Blck5vdW4pID0+IHtcbiAgICBjb25zdCBsb3dlckNhc2VQcm9wZXJOb3VuID0gcHJvcGVyTm91bi50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIGxvd2VyQ2FzZVByb3Blck5vdW47XG4gIH0pO1xuXG4gIG1hcEtleXMoaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGxvd2VyQ2FzZVByb3Blck5vdW5zLmZpbmRJbmRleCgobG93ZXJDYXNlUHJvcGVyTm1hZSkgPT4ge1xuICAgICAgaWYgKGxvd2VyQ2FzZVByb3Blck5tYWUgPT09IHdvcmRPclBocmFzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBwcm9wZXJOb3VuID0gcHJvcGVyTm91bnNbaW5kZXhdO1xuXG4gICAgICB3b3JkT3JQaHJhc2UgPSBwcm9wZXJOb3VuOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVQbGFpblRleHQocGxhaW5UZXh0KSB7XG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC50b0xvd2VyQ2FzZSgpOyAgLy8vXG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoL1teYS16MC05XFwtIF0vZywgU0lOR0xFX1NQQUNFKTtcblxuICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSgvXFxzKy9nLCBTSU5HTEVfU1BBQ0UpO1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBwbGFpblRleHQ7XG59XG5cbmZ1bmN0aW9uIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGFjcm9ueW1zIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgY29uc3QgbG93ZXJDYXNlQWNyb255bXMgPSBhY3Jvbnltcy5tYXAoKGFjcm9ueW0pID0+IHtcbiAgICBjb25zdCBsb3dlckNhc2VBY3JvbnltID0gYWNyb255bS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIGxvd2VyQ2FzZUFjcm9ueW07XG4gIH0pO1xuXG4gIG1hcEtleXMoaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGxvd2VyQ2FzZUFjcm9ueW1zLmZpbmRJbmRleCgobG93ZXJDYXNlUHJvcGVyTm1hZSkgPT4ge1xuICAgICAgaWYgKGxvd2VyQ2FzZVByb3Blck5tYWUgPT09IHdvcmRPclBocmFzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBhY3JvbnltID0gYWNyb255bXNbaW5kZXhdO1xuXG4gICAgICB3b3JkT3JQaHJhc2UgPSBhY3JvbnltOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdE1peGVkUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwbHVyYWxzIH0gPSBpbmRleE9wdGlvbnMsXG4gICAgICAgIG1peGVkUGx1cmFscyA9IHJlZHVjZVBsdXJhbHMocGx1cmFscywgaXNNaXhlZCksXG4gICAgICAgIHBsdXJhbFBsdXJhbHMgPSBtYXBQbHVyYWxzKG1peGVkUGx1cmFscywgbWl4ZWRUb1BsdXJhbCksXG4gICAgICAgIHNpbmd1bGFyUGx1cmFscyA9IG1hcFBsdXJhbHMobWl4ZWRQbHVyYWxzLCBtaXhlZFRvU2luZ3VsYXIpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29uc3Qgc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSkge1xuICAgICAgY29uc3Qgc2luZ3VsYXJXb3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UsICAvLy9cbiAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgbWl4ZWRXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclRvTWl4ZWQoc2luZ3VsYXJXb3JkT3JQaHJhc2UpLFxuICAgICAgICAgICAgbWl4ZWRQYWdlTnVtYmVycyA9IGluZGV4TWFwW21peGVkV29yZE9yUGhyYXNlXSB8fCBbXTtcblxuICAgICAgcGFnZU51bWJlcnMgPSBbXG4gICAgICAgIC4uLnNpbmd1bGFyUGFnZU51bWJlcnMsXG4gICAgICAgIC4uLm1peGVkUGFnZU51bWJlcnNcbiAgICAgIF07XG5cbiAgICAgIGRlbGV0ZSBpbmRleE1hcFtzaW5ndWxhcldvcmRPclBocmFzZV07XG5cbiAgICAgIGluZGV4TWFwW21peGVkV29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IHBsdXJhbFBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSA9IHBsdXJhbFBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChwbHVyYWxQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UpIHtcbiAgICAgIGNvbnN0IHBsdXJhbFdvcmRPclBocmFzZSA9IHdvcmRPclBocmFzZSwgIC8vL1xuICAgICAgICAgICAgcGx1cmFsUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgbWl4ZWRXb3JkT3JQaHJhc2UgPSBwbHVyYWxUb01peGVkKHBsdXJhbFdvcmRPclBocmFzZSksXG4gICAgICAgICAgICBtaXhlZFBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbbWl4ZWRXb3JkT3JQaHJhc2VdIHx8IFtdO1xuXG4gICAgICBwYWdlTnVtYmVycyA9IFtcbiAgICAgICAgLi4ucGx1cmFsUGFnZU51bWJlcnMsXG4gICAgICAgIC4uLm1peGVkUGFnZU51bWJlcnNcbiAgICAgIF07XG5cbiAgICAgIGRlbGV0ZSBpbmRleE1hcFtwbHVyYWxXb3JkT3JQaHJhc2VdO1xuXG4gICAgICBpbmRleE1hcFttaXhlZFdvcmRPclBocmFzZV0gPSBwYWdlTnVtYmVycztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RQbHVyYWxQbHVyYWxzKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHBsdXJhbHMgfSA9IGluZGV4T3B0aW9ucyxcbiAgICAgICAgcGx1cmFsUGx1cmFscyA9IHJlZHVjZVBsdXJhbHMocGx1cmFscywgaXNQbHVyYWwpLFxuICAgICAgICBzaW5ndWxhclBsdXJhbHMgPSBtYXBQbHVyYWxzKHBsdXJhbFBsdXJhbHMsIHBsdXJhbFRvU2luZ3VsYXIpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29uc3Qgc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSkge1xuICAgICAgY29uc3Qgc2luZ3VsYXJXb3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UsICAvLy9cbiAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgcGx1cmFsV29yZE9yUGhyYXNlID0gc2luZ3VsYXJUb1BsdXJhbCh3b3JkT3JQaHJhc2UpLFxuICAgICAgICAgICAgcGx1cmFsUGFnZU51bWJlcnMgPSBpbmRleE1hcFtwbHVyYWxXb3JkT3JQaHJhc2VdIHx8IFtdO1xuXG4gICAgICBwYWdlTnVtYmVycyA9IFtcbiAgICAgICAgLi4uc2luZ3VsYXJQYWdlTnVtYmVycyxcbiAgICAgICAgLi4ucGx1cmFsUGFnZU51bWJlcnNcbiAgICAgIF07XG5cbiAgICAgIGRlbGV0ZSBpbmRleE1hcFtzaW5ndWxhcldvcmRPclBocmFzZV07XG5cbiAgICAgIGluZGV4TWFwW3BsdXJhbFdvcmRPclBocmFzZV0gPSBwYWdlTnVtYmVycztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RTaW5ndWxhclBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgcGx1cmFscyB9ID0gaW5kZXhPcHRpb25zLFxuICAgICAgICBzaW5ndWxhclBsdXJhbHMgPSByZWR1Y2VQbHVyYWxzKHBsdXJhbHMsIGlzU2luZ3VsYXIpLFxuICAgICAgICBwbHVyYWxQbHVyYWxzID0gbWFwUGx1cmFscyhzaW5ndWxhclBsdXJhbHMsIHNpbmd1bGFyVG9QbHVyYWwpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgICBjb25zdCBwbHVyYWxQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UgPSBwbHVyYWxQbHVyYWxzLmluY2x1ZGVzKHdvcmRPclBocmFzZSk7XG5cbiAgICAgIGlmIChwbHVyYWxQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UpIHtcbiAgICAgICAgY29uc3Qgc2luZ3VsYXJXb3JkT3JQaHJhc2UgPSBwbHVyYWxUb1Npbmd1bGFyKHdvcmRPclBocmFzZSksXG4gICAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBpbmRleE1hcFtzaW5ndWxhcldvcmRPclBocmFzZV0gfHwgW10sXG4gICAgICAgICAgICAgIHBsdXJhbFdvcmRPclBocmFzZSA9IHdvcmRPclBocmFzZSwgIC8vL1xuICAgICAgICAgICAgICBwbHVyYWxQYWdlTnVtYmVycyA9IHBhZ2VOdW1iZXJzOyAgLy8vXG5cbiAgICAgICAgcGFnZU51bWJlcnMgPSBbXG4gICAgICAgICAgLi4uc2luZ3VsYXJQYWdlTnVtYmVycyxcbiAgICAgICAgICAuLi5wbHVyYWxQYWdlTnVtYmVyc1xuICAgICAgICBdO1xuXG4gICAgICAgIGRlbGV0ZSBpbmRleE1hcFtwbHVyYWxXb3JkT3JQaHJhc2VdO1xuXG4gICAgICAgIGluZGV4TWFwW3Npbmd1bGFyV29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuICAgICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUGx1cmFscyhwbHVyYWxzLCBjYWxsYmFjaykge1xuICBwbHVyYWxzID0gcGx1cmFscy5yZWR1Y2UoKHBsdXJhbHMsIHBsdXJhbCkgPT4geyAvLy9cbiAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhwbHVyYWwpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcGx1cmFscy5wdXNoKHBsdXJhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsdXJhbHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcGx1cmFscztcbn1cblxuZnVuY3Rpb24gbWFwUGx1cmFscyhwbHVyYWxzLCBjYWxsYmFjaykge1xuICBwbHVyYWxzID0gcGx1cmFscy5tYXAoKHBsdXJhbCkgPT4geyAvLy9cbiAgICBwbHVyYWwgPSBjYWxsYmFjayhwbHVyYWwpO1xuXG4gICAgcmV0dXJuIHBsdXJhbDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBsdXJhbHM7XG59XG5cbmZ1bmN0aW9uIGlzU2luZ3VsYXIodGV4dCkge1xuICBjb25zdCBpbmRleE1hdGNoZXMgPSAvW15zKV0kLy50ZXN0KHRleHQpLFxuICAgICAgICBzaW5ndWxhciA9IGluZGV4TWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIHNpbmd1bGFyO1xufVxuXG5mdW5jdGlvbiBpc1BsdXJhbCh0ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWF0Y2hlcyA9IC8oaWVzfHMpJC8udGVzdCh0ZXh0KSxcbiAgICAgICAgcGx1cmFsID0gaW5kZXhNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gcGx1cmFsO1xufVxuXG5mdW5jdGlvbiBpc01peGVkKHRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXRjaGVzID0gL1xcKHNcXCkkLy50ZXN0KHRleHQpLFxuICAgICAgICBtaXhlZCA9IGluZGV4TWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIG1peGVkO1xufVxuXG5mdW5jdGlvbiBtaXhlZFRvUGx1cmFsKHRleHQpIHtcbiAgdGV4dCA9IHRleHQgLy8vXG4gICAgICAgICAgIC5yZXBsYWNlKC9cXChzXFwpJC8sIFNfU1RSSU5HKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVG9NaXhlZCh0ZXh0KSB7XG4gIHRleHQgPSB0ZXh0IC8vL1xuICAgICAgICAgICAucmVwbGFjZSgvcyQvLCBQQVJFTlRIRVNJU0VEX1NfU1RSSU5HKVxuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBtaXhlZFRvU2luZ3VsYXIodGV4dCkge1xuICB0ZXh0ID0gdGV4dCAvLy9cbiAgICAgICAgICAucmVwbGFjZSgvXFwoc1xcKSQvLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBzaW5ndWxhclRvTWl4ZWQodGV4dCkge1xuICB0ZXh0ID0gYCR7dGV4dH0ocylgO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBzaW5ndWxhclRvUGx1cmFsKHRleHQpIHtcbiAgdGV4dCA9IGAke3RleHR9c2AgLy8vXG4gICAgICAgICAgIC5yZXBsYWNlKC95cyQvLCBJRVNfU1RSSU5HKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVG9TaW5ndWxhcih0ZXh0KSB7XG4gIHRleHQgPSB0ZXh0IC8vL1xuICAgICAgICAgICAucmVwbGFjZSgvaWVzJC8sIFlfU1RSSU5HKVxuICAgICAgICAgICAucmVwbGFjZSgvcyQvLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuIl0sIm5hbWVzIjpbImluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImNvbXByZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJjb250ZXh0IiwiaW5kZXhNYXAiLCJjcmVhdGVJbmRleE1hcCIsInJlbW92ZUlnbm9yZWRXb3JkcyIsImFkanVzdE1peGVkUGx1cmFscyIsImFkanVzdFBsdXJhbFBsdXJhbHMiLCJhZGp1c3RTaW5ndWxhclBsdXJhbHMiLCJhZGp1c3RQcm9wZXJOb3VucyIsImFkanVzdEFjcm9ueW1zIiwiY29tcHJlc3NQYWdlTnVtYmVycyIsImluZGV4T3B0aW9ucyIsInBocmFzZXMiLCJpbmRleE1hdGNoZXMiLCJtYXAiLCJwaHJhc2UiLCJpbmRleE1hdGNoIiwiSW5kZXhNYXRjaCIsImZyb21QaHJhc2UiLCJmb3JFYWNoIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJwYWdlTnVtYmVyIiwiZ2V0UGFnZU51bWJlciIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0Iiwid29yZHNPclBocmFzZXMiLCJ3b3Jkc09yUGhyYXNlc0Zyb21QbGFpblRleHRBbmRJbmRleE1hdGNoZXMiLCJ3b3JkT3JQaHJhc2UiLCJwYWdlTnVtYmVycyIsInB1c2giLCJwcmVwYXJlUGxhaW5UZXh0IiwicmVwbGFjZSIsInNwbGl0IiwiU0lOR0xFX1NQQUNFIiwicmV2ZXJ0IiwibWFwVmFsdWVzIiwicGFnZU51bWJlckEiLCJwYWdlTnVtYmVyQiIsInNvcnQiLCJOdW1iZXIiLCJkaWZmZXJlbmNlIiwiaWdub3JlZFdvcmRzIiwiaWdub3JlZFdvcmQiLCJwcm9wZXJOb3VucyIsImxvd2VyQ2FzZVByb3Blck5vdW5zIiwicHJvcGVyTm91biIsImxvd2VyQ2FzZVByb3Blck5vdW4iLCJ0b0xvd2VyQ2FzZSIsIm1hcEtleXMiLCJpbmRleCIsImZpbmRJbmRleCIsImxvd2VyQ2FzZVByb3Blck5tYWUiLCJFTVBUWV9TVFJJTkciLCJhY3JvbnltcyIsImxvd2VyQ2FzZUFjcm9ueW1zIiwiYWNyb255bSIsImxvd2VyQ2FzZUFjcm9ueW0iLCJwbHVyYWxzIiwibWl4ZWRQbHVyYWxzIiwicmVkdWNlUGx1cmFscyIsImlzTWl4ZWQiLCJwbHVyYWxQbHVyYWxzIiwibWFwUGx1cmFscyIsIm1peGVkVG9QbHVyYWwiLCJzaW5ndWxhclBsdXJhbHMiLCJtaXhlZFRvU2luZ3VsYXIiLCJzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSIsImluY2x1ZGVzIiwic2luZ3VsYXJXb3JkT3JQaHJhc2UiLCJzaW5ndWxhclBhZ2VOdW1iZXJzIiwibWl4ZWRXb3JkT3JQaHJhc2UiLCJzaW5ndWxhclRvTWl4ZWQiLCJtaXhlZFBhZ2VOdW1iZXJzIiwicGx1cmFsUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlIiwicGx1cmFsV29yZE9yUGhyYXNlIiwicGx1cmFsUGFnZU51bWJlcnMiLCJwbHVyYWxUb01peGVkIiwiaXNQbHVyYWwiLCJwbHVyYWxUb1Npbmd1bGFyIiwic2luZ3VsYXJUb1BsdXJhbCIsImlzU2luZ3VsYXIiLCJjYWxsYmFjayIsInJlZHVjZSIsInBsdXJhbCIsInJlc3VsdCIsInRleHQiLCJ0ZXN0Iiwic2luZ3VsYXIiLCJtaXhlZCIsIlNfU1RSSU5HIiwiUEFSRU5USEVTSVNFRF9TX1NUUklORyIsIklFU19TVFJJTkciLCJZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV2dCQTs7O2VBQUFBOzs7eUJBVGU7NERBRVI7c0JBRXFCO3lCQUN1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRyxJQUFNLEFBQUVDLFdBQWFDLHlCQUFjLENBQTNCRDtBQUVELFNBQVNELGtDQUFrQ0cscUJBQXFCLEVBQUVDLE9BQU87SUFDOUUsSUFBTUMsV0FBV0MsZUFBZUgsdUJBQXVCQztJQUV2REcsbUJBQW1CRixVQUFVRDtJQUU3QkksbUJBQW1CSCxVQUFVRDtJQUU3Qkssb0JBQW9CSixVQUFVRDtJQUU5Qk0sc0JBQXNCTCxVQUFVRDtJQUVoQ08sa0JBQWtCTixVQUFVRDtJQUU1QlEsZUFBZVAsVUFBVUQ7SUFFekJTLG9CQUFvQlI7SUFFcEIsT0FBT0E7QUFDVDtBQUVBLFNBQVNDLGVBQWVILHFCQUFxQixFQUFFQyxPQUFPO0lBQ3BELElBQU1DLFdBQVcsQ0FBQztJQUVsQixJQUFNLEFBQUVTLGVBQWlCVixRQUFqQlUsY0FDRixBQUFFQyxVQUFZRCxhQUFaQyxTQUNGQyxlQUFlRCxRQUFRRSxHQUFHLENBQUMsU0FBQ0M7UUFDMUIsSUFBTUMsYUFBYUMsY0FB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