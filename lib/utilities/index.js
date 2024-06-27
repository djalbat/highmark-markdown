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
var _constants = require("../constants");
var _object = require("../utilities/object");
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
    adjustProperNouns(indexMap, context);
    adjustAcronyms(indexMap, context);
    adjustMixedPlurals(indexMap, context);
    adjustPluralPlurals(indexMap, context);
    adjustSingularPlurals(indexMap, context);
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
        pageNumbers.sort();
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
    var indexOptions = context.indexOptions, plurals = indexOptions.plurals, mixedPlurals = mixedPluralsFromPlurals(plurals);
    (0, _object.forEach)(indexMap, function(wordOrPhrase, pageNumbers) {
        var entryPlural = isPlural(wordOrPhrase);
        if (entryPlural) {
            var singularEntry = wordOrPhrase.replace(/s$/, _constants.EMPTY_STRING), mixedEntry = "".concat(singularEntry, "(s)"), mixedPluralsIncludesMixedEntry = mixedPlurals.includes(mixedEntry), entryMixedPlural = mixedPluralsIncludesMixedEntry; ///
            if (entryMixedPlural) {
                var pluralPageNumbers = pageNumbers, singularPageNumbers = indexMap[singularEntry] || [];
                pageNumbers = _to_consumable_array(pluralPageNumbers).concat(_to_consumable_array(singularPageNumbers));
                delete indexMap[wordOrPhrase];
                delete indexMap[singularEntry];
                indexMap[mixedEntry] = pageNumbers;
            }
        }
    });
}
function adjustPluralPlurals(indexMap, context) {
    var indexOptions = context.indexOptions, plurals = indexOptions.plurals, pluralPlurals = pluralPluralsFromPlurals(plurals);
    (0, _object.forEach)(indexMap, function(wordOrPhrase, pageNumbers) {
        var entryPlural = isPlural(wordOrPhrase);
        if (entryPlural) {
            var singularEntry = wordOrPhrase.replace(/s$/, _constants.EMPTY_STRING), pluralPluralsIncludesEntry = pluralPlurals.includes(wordOrPhrase), entryPluralPlural = pluralPluralsIncludesEntry; ///
            if (entryPluralPlural) {
                var pluralPageNumbers = pageNumbers, singularPageNumbers = indexMap[singularEntry] || [];
                pageNumbers = _to_consumable_array(pluralPageNumbers).concat(_to_consumable_array(singularPageNumbers));
                delete indexMap[singularEntry];
                indexMap[wordOrPhrase] = pageNumbers;
            }
        }
    });
}
function adjustSingularPlurals(indexMap, context) {
    var indexOptions = context.indexOptions, plurals = indexOptions.plurals, singularPlurals = singularPluralsFromPlurals(plurals);
    (0, _object.forEach)(indexMap, function(wordOrPhrase, pageNumbers) {
        var entryPlural = isPlural(wordOrPhrase);
        if (entryPlural) {
            var singularEntry = wordOrPhrase.replace(/s$/, _constants.EMPTY_STRING), singularPluralsIncludesSingularEntry = singularPlurals.includes(singularEntry), entrySingularPlural = singularPluralsIncludesSingularEntry; ///
            if (entrySingularPlural) {
                var pluralPageNumbers = pageNumbers, singularPageNumbers = indexMap[singularEntry] || [];
                pageNumbers = _to_consumable_array(pluralPageNumbers).concat(_to_consumable_array(singularPageNumbers));
                delete indexMap[wordOrPhrase];
                indexMap[singularEntry] = pageNumbers;
            }
        }
    });
}
function singularPluralsFromPlurals(plurals) {
    var singularPlurals = plurals.reduce(function(singularPlurals, plural) {
        var pluralSingular = isSingular(plural);
        if (pluralSingular) {
            var singularPlural = plural; ///
            singularPlurals.push(singularPlural);
        }
        return singularPlurals;
    }, []);
    return singularPlurals;
}
function pluralPluralsFromPlurals(plurals) {
    var pluralPlurals = plurals.reduce(function(pluralPlurals, plural) {
        var pluralPlural = isPlural(plural);
        if (pluralPlural) {
            var pluralPlural1 = plural; ///
            pluralPlurals.push(pluralPlural1);
        }
        return pluralPlurals;
    }, []);
    return pluralPlurals;
}
function mixedPluralsFromPlurals(plurals) {
    var mixedPlurals = plurals.reduce(function(mixedPlurals, plural) {
        var pluralMixed = isMixed(plural);
        if (pluralMixed) {
            var mixedPlural = plural; ///
            mixedPlurals.push(mixedPlural);
        }
        return mixedPlurals;
    }, []);
    return mixedPlurals;
}
function isSingular(text) {
    var indexMatches = /[^s)]$/.test(text), pluralSingular = indexMatches; ///
    return pluralSingular;
}
function isPlural(text) {
    var indexMatches = /s$/.test(text), plural = indexMatches; ///
    return plural;
}
function isMixed(text) {
    var indexMatches = /\(s\)$/.test(text), plural = indexMatches; ///
    return plural;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSW5kZXhNYXRjaCBmcm9tIFwiLi4vaW5kZXgvbWF0Y2hcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmb3JFYWNoLCBtYXBLZXlzLCBtYXBWYWx1ZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29iamVjdFwiO1xuXG5jb25zdCB7IGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXAgPSBjcmVhdGVJbmRleE1hcChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJlbW92ZUlnbm9yZWRXb3JkcyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgYWRqdXN0UHJvcGVyTm91bnMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFBsdXJhbFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFNpbmd1bGFyUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgY29tcHJlc3NQYWdlTnVtYmVycyhpbmRleE1hcCk7XG5cbiAgcmV0dXJuIGluZGV4TWFwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRleE1hcChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXAgPSB7fTtcblxuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwaHJhc2VzIH0gPSBpbmRleE9wdGlvbnMsXG4gICAgICAgIGluZGV4TWF0Y2hlcyA9IHBocmFzZXMubWFwKChwaHJhc2UpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmRleE1hdGNoID0gSW5kZXhNYXRjaC5mcm9tUGhyYXNlKHBocmFzZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5kZXhNYXRjaDtcbiAgICAgICAgfSk7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgcGFnZU51bWJlciA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmdldFBhZ2VOdW1iZXIoKTtcblxuICAgIGlmIChwYWdlTnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwbGFpblRleHQgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICAgIHdvcmRzT3JQaHJhc2VzID0gd29yZHNPclBocmFzZXNGcm9tUGxhaW5UZXh0QW5kSW5kZXhNYXRjaGVzKHBsYWluVGV4dCwgaW5kZXhNYXRjaGVzKTtcblxuICAgICAgd29yZHNPclBocmFzZXMuZm9yRWFjaCgod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgICAgIGxldCBwYWdlTnVtYmVycyA9IGluZGV4TWFwW3dvcmRPclBocmFzZV0gfHwgbnVsbDtcblxuICAgICAgICBpZiAocGFnZU51bWJlcnMgPT09IG51bGwpIHtcbiAgICAgICAgICBwYWdlTnVtYmVycyA9IFtdO1xuXG4gICAgICAgICAgaW5kZXhNYXBbd29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFnZU51bWJlcnMucHVzaChwYWdlTnVtYmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4TWFwO1xufVxuXG5mdW5jdGlvbiB3b3Jkc09yUGhyYXNlc0Zyb21QbGFpblRleHRBbmRJbmRleE1hdGNoZXMocGxhaW5UZXh0LCBpbmRleE1hdGNoZXMpIHtcbiAgbGV0IHdvcmRzT3JQaHJhc2VzO1xuXG4gIHBsYWluVGV4dCA9IHByZXBhcmVQbGFpblRleHQocGxhaW5UZXh0KTsgIC8vL1xuXG4gIGluZGV4TWF0Y2hlcy5mb3JFYWNoKChpbmRleE1hdGNoKSA9PiB7XG4gICAgcGxhaW5UZXh0ID0gaW5kZXhNYXRjaC5yZXBsYWNlKHBsYWluVGV4dCk7XG4gIH0pO1xuXG4gIHdvcmRzT3JQaHJhc2VzID0gcGxhaW5UZXh0LnNwbGl0KFNJTkdMRV9TUEFDRSk7XG5cbiAgd29yZHNPclBocmFzZXMgPSB3b3Jkc09yUGhyYXNlcy5tYXAoKHdvcmRPclBocmFzZSkgPT4ge1xuICAgIHdvcmRPclBocmFzZSA9IEluZGV4TWF0Y2gucmV2ZXJ0KHdvcmRPclBocmFzZSk7ICAvLy9cblxuICAgIHJldHVybiB3b3JkT3JQaHJhc2U7XG4gIH0pO1xuXG4gIHJldHVybiB3b3Jkc09yUGhyYXNlcztcbn1cblxuZnVuY3Rpb24gY29tcHJlc3NQYWdlTnVtYmVycyhpbmRleE1hcCkge1xuICBtYXBWYWx1ZXMoaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29tcHJlc3MocGFnZU51bWJlcnMsIChwYWdlTnVtYmVyQSwgcGFnZU51bWJlckIpID0+IHtcbiAgICAgIGlmIChwYWdlTnVtYmVyQSA9PT0gcGFnZU51bWJlckIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYWdlTnVtYmVycy5zb3J0KCk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlcnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJZ25vcmVkV29yZHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgaWdub3JlZFdvcmRzIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgaWdub3JlZFdvcmRzLmZvckVhY2goKGlnbm9yZWRXb3JkKSA9PiB7XG4gICAgZGVsZXRlIGluZGV4TWFwW2lnbm9yZWRXb3JkXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdFByb3Blck5vdW5zKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHByb3Blck5vdW5zIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgY29uc3QgbG93ZXJDYXNlUHJvcGVyTm91bnMgPSBwcm9wZXJOb3Vucy5tYXAoKHByb3Blck5vdW4pID0+IHtcbiAgICBjb25zdCBsb3dlckNhc2VQcm9wZXJOb3VuID0gcHJvcGVyTm91bi50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIGxvd2VyQ2FzZVByb3Blck5vdW47XG4gIH0pO1xuXG4gIG1hcEtleXMoaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGxvd2VyQ2FzZVByb3Blck5vdW5zLmZpbmRJbmRleCgobG93ZXJDYXNlUHJvcGVyTm1hZSkgPT4ge1xuICAgICAgaWYgKGxvd2VyQ2FzZVByb3Blck5tYWUgPT09IHdvcmRPclBocmFzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBwcm9wZXJOb3VuID0gcHJvcGVyTm91bnNbaW5kZXhdO1xuXG4gICAgICB3b3JkT3JQaHJhc2UgPSBwcm9wZXJOb3VuOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVQbGFpblRleHQocGxhaW5UZXh0KSB7XG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC50b0xvd2VyQ2FzZSgpOyAgLy8vXG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoL1teYS16IF0vZywgU0lOR0xFX1NQQUNFKTtcblxuICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSgvXFxzKy9nLCBTSU5HTEVfU1BBQ0UpO1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBwbGFpblRleHQ7XG59XG5cbmZ1bmN0aW9uIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGFjcm9ueW1zIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgY29uc3QgbG93ZXJDYXNlQWNyb255bXMgPSBhY3Jvbnltcy5tYXAoKGFjcm9ueW0pID0+IHtcbiAgICBjb25zdCBsb3dlckNhc2VBY3JvbnltID0gYWNyb255bS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIGxvd2VyQ2FzZUFjcm9ueW07XG4gIH0pO1xuXG4gIG1hcEtleXMoaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGxvd2VyQ2FzZUFjcm9ueW1zLmZpbmRJbmRleCgobG93ZXJDYXNlUHJvcGVyTm1hZSkgPT4ge1xuICAgICAgaWYgKGxvd2VyQ2FzZVByb3Blck5tYWUgPT09IHdvcmRPclBocmFzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBhY3JvbnltID0gYWNyb255bXNbaW5kZXhdO1xuXG4gICAgICB3b3JkT3JQaHJhc2UgPSBhY3JvbnltOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdE1peGVkUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwbHVyYWxzIH0gPSBpbmRleE9wdGlvbnMsXG4gICAgICAgIG1peGVkUGx1cmFscyA9IG1peGVkUGx1cmFsc0Zyb21QbHVyYWxzKHBsdXJhbHMpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29uc3QgZW50cnlQbHVyYWwgPSBpc1BsdXJhbCh3b3JkT3JQaHJhc2UpO1xuXG4gICAgaWYgKGVudHJ5UGx1cmFsKSB7XG4gICAgICBjb25zdCBzaW5ndWxhckVudHJ5ID0gd29yZE9yUGhyYXNlLnJlcGxhY2UoL3MkLywgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICAgIG1peGVkRW50cnkgPSBgJHtzaW5ndWxhckVudHJ5fShzKWAsXG4gICAgICAgICAgICBtaXhlZFBsdXJhbHNJbmNsdWRlc01peGVkRW50cnkgPSBtaXhlZFBsdXJhbHMuaW5jbHVkZXMobWl4ZWRFbnRyeSksXG4gICAgICAgICAgICBlbnRyeU1peGVkUGx1cmFsID0gbWl4ZWRQbHVyYWxzSW5jbHVkZXNNaXhlZEVudHJ5OyAvLy9cblxuICAgICAgaWYgKGVudHJ5TWl4ZWRQbHVyYWwpIHtcbiAgICAgICAgY29uc3QgcGx1cmFsUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgICBzaW5ndWxhclBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbc2luZ3VsYXJFbnRyeV0gfHwgW107XG5cbiAgICAgICAgcGFnZU51bWJlcnMgPSBbIC8vL1xuICAgICAgICAgIC4uLnBsdXJhbFBhZ2VOdW1iZXJzLFxuICAgICAgICAgIC4uLnNpbmd1bGFyUGFnZU51bWJlcnNcbiAgICAgICAgXTtcblxuICAgICAgICBkZWxldGUgaW5kZXhNYXBbd29yZE9yUGhyYXNlXTtcbiAgICAgICAgZGVsZXRlIGluZGV4TWFwW3Npbmd1bGFyRW50cnldO1xuXG4gICAgICAgIGluZGV4TWFwW21peGVkRW50cnldID0gcGFnZU51bWJlcnM7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0UGx1cmFsUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwbHVyYWxzIH0gPSBpbmRleE9wdGlvbnMsXG4gICAgICAgIHBsdXJhbFBsdXJhbHMgPSBwbHVyYWxQbHVyYWxzRnJvbVBsdXJhbHMocGx1cmFscyk7XG5cbiAgZm9yRWFjaChpbmRleE1hcCwgKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpID0+IHtcbiAgICBjb25zdCBlbnRyeVBsdXJhbCA9IGlzUGx1cmFsKHdvcmRPclBocmFzZSk7XG5cbiAgICBpZiAoZW50cnlQbHVyYWwpIHtcbiAgICAgIGNvbnN0IHNpbmd1bGFyRW50cnkgPSB3b3JkT3JQaHJhc2UucmVwbGFjZSgvcyQvLCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgICAgcGx1cmFsUGx1cmFsc0luY2x1ZGVzRW50cnkgPSBwbHVyYWxQbHVyYWxzLmluY2x1ZGVzKHdvcmRPclBocmFzZSksXG4gICAgICAgICAgICBlbnRyeVBsdXJhbFBsdXJhbCA9IHBsdXJhbFBsdXJhbHNJbmNsdWRlc0VudHJ5OyAvLy9cblxuICAgICAgaWYgKGVudHJ5UGx1cmFsUGx1cmFsKSB7XG4gICAgICAgIGNvbnN0IHBsdXJhbFBhZ2VOdW1iZXJzID0gcGFnZU51bWJlcnMsICAvLy9cbiAgICAgICAgICAgICAgc2luZ3VsYXJQYWdlTnVtYmVycyA9IGluZGV4TWFwW3Npbmd1bGFyRW50cnldIHx8IFtdO1xuXG4gICAgICAgIHBhZ2VOdW1iZXJzID0gWyAvLy9cbiAgICAgICAgICAuLi5wbHVyYWxQYWdlTnVtYmVycyxcbiAgICAgICAgICAuLi5zaW5ndWxhclBhZ2VOdW1iZXJzXG4gICAgICAgIF07XG5cbiAgICAgICAgZGVsZXRlIGluZGV4TWFwW3Npbmd1bGFyRW50cnldO1xuXG4gICAgICAgIGluZGV4TWFwW3dvcmRPclBocmFzZV0gPSBwYWdlTnVtYmVycztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RTaW5ndWxhclBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgcGx1cmFscyB9ID0gaW5kZXhPcHRpb25zLFxuICAgICAgICBzaW5ndWxhclBsdXJhbHMgPSBzaW5ndWxhclBsdXJhbHNGcm9tUGx1cmFscyhwbHVyYWxzKTtcblxuICBmb3JFYWNoKGluZGV4TWFwLCAod29yZE9yUGhyYXNlLCBwYWdlTnVtYmVycykgPT4ge1xuICAgIGNvbnN0IGVudHJ5UGx1cmFsID0gaXNQbHVyYWwod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChlbnRyeVBsdXJhbCkge1xuICAgICAgY29uc3Qgc2luZ3VsYXJFbnRyeSA9IHdvcmRPclBocmFzZS5yZXBsYWNlKC9zJC8sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgICBzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1Npbmd1bGFyRW50cnkgPSBzaW5ndWxhclBsdXJhbHMuaW5jbHVkZXMoc2luZ3VsYXJFbnRyeSksXG4gICAgICAgICAgICBlbnRyeVNpbmd1bGFyUGx1cmFsID0gc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNTaW5ndWxhckVudHJ5OyAvLy9cblxuICAgICAgaWYgKGVudHJ5U2luZ3VsYXJQbHVyYWwpIHtcbiAgICAgICAgY29uc3QgcGx1cmFsUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgICBzaW5ndWxhclBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbc2luZ3VsYXJFbnRyeV0gfHwgW107XG5cbiAgICAgICAgcGFnZU51bWJlcnMgPSBbIC8vL1xuICAgICAgICAgIC4uLnBsdXJhbFBhZ2VOdW1iZXJzLFxuICAgICAgICAgIC4uLnNpbmd1bGFyUGFnZU51bWJlcnNcbiAgICAgICAgXTtcblxuICAgICAgICBkZWxldGUgaW5kZXhNYXBbd29yZE9yUGhyYXNlXTtcblxuICAgICAgICBpbmRleE1hcFtzaW5ndWxhckVudHJ5XSA9IHBhZ2VOdW1iZXJzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNpbmd1bGFyUGx1cmFsc0Zyb21QbHVyYWxzKHBsdXJhbHMpIHtcbiAgY29uc3Qgc2luZ3VsYXJQbHVyYWxzID0gcGx1cmFscy5yZWR1Y2UoKHNpbmd1bGFyUGx1cmFscywgcGx1cmFsKSA9PiB7XG4gICAgY29uc3QgcGx1cmFsU2luZ3VsYXIgPSBpc1Npbmd1bGFyKHBsdXJhbCk7XG5cbiAgICBpZiAocGx1cmFsU2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHNpbmd1bGFyUGx1cmFsID0gcGx1cmFsOyAgLy8vXG5cbiAgICAgIHNpbmd1bGFyUGx1cmFscy5wdXNoKHNpbmd1bGFyUGx1cmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJQbHVyYWxzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHNpbmd1bGFyUGx1cmFscztcbn1cblxuZnVuY3Rpb24gcGx1cmFsUGx1cmFsc0Zyb21QbHVyYWxzKHBsdXJhbHMpIHtcbiAgY29uc3QgcGx1cmFsUGx1cmFscyA9IHBsdXJhbHMucmVkdWNlKChwbHVyYWxQbHVyYWxzLCBwbHVyYWwpID0+IHtcbiAgICBjb25zdCBwbHVyYWxQbHVyYWwgPSBpc1BsdXJhbChwbHVyYWwpO1xuXG4gICAgaWYgKHBsdXJhbFBsdXJhbCkge1xuICAgICAgY29uc3QgcGx1cmFsUGx1cmFsID0gcGx1cmFsOyAgLy8vXG5cbiAgICAgIHBsdXJhbFBsdXJhbHMucHVzaChwbHVyYWxQbHVyYWwpO1xuICAgIH1cblxuICAgIHJldHVybiBwbHVyYWxQbHVyYWxzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHBsdXJhbFBsdXJhbHM7XG59XG5cbmZ1bmN0aW9uIG1peGVkUGx1cmFsc0Zyb21QbHVyYWxzKHBsdXJhbHMpIHtcbiAgY29uc3QgbWl4ZWRQbHVyYWxzID0gcGx1cmFscy5yZWR1Y2UoKG1peGVkUGx1cmFscywgcGx1cmFsKSA9PiB7XG4gICAgY29uc3QgcGx1cmFsTWl4ZWQgPSBpc01peGVkKHBsdXJhbCk7XG5cbiAgICBpZiAocGx1cmFsTWl4ZWQpIHtcbiAgICAgIGNvbnN0IG1peGVkUGx1cmFsID0gcGx1cmFsOyAgLy8vXG5cbiAgICAgIG1peGVkUGx1cmFscy5wdXNoKG1peGVkUGx1cmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWl4ZWRQbHVyYWxzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG1peGVkUGx1cmFscztcbn1cblxuZnVuY3Rpb24gaXNTaW5ndWxhcih0ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWF0Y2hlcyA9IC9bXnMpXSQvLnRlc3QodGV4dCksXG4gICAgICAgIHBsdXJhbFNpbmd1bGFyID0gaW5kZXhNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gcGx1cmFsU2luZ3VsYXI7XG59XG5cbmZ1bmN0aW9uIGlzUGx1cmFsKHRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXRjaGVzID0gL3MkLy50ZXN0KHRleHQpLFxuICAgICAgICBwbHVyYWwgPSBpbmRleE1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBwbHVyYWw7XG59XG5cbmZ1bmN0aW9uIGlzTWl4ZWQodGV4dCkge1xuICBjb25zdCBpbmRleE1hdGNoZXMgPSAvXFwoc1xcKSQvLnRlc3QodGV4dCksXG4gICAgICAgIHBsdXJhbCA9IGluZGV4TWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIHBsdXJhbDtcbn1cbiJdLCJuYW1lcyI6WyJpbmRleE1hcEZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJjb21wcmVzcyIsImFycmF5VXRpbGl0aWVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiY29udGV4dCIsImluZGV4TWFwIiwiY3JlYXRlSW5kZXhNYXAiLCJyZW1vdmVJZ25vcmVkV29yZHMiLCJhZGp1c3RQcm9wZXJOb3VucyIsImFkanVzdEFjcm9ueW1zIiwiYWRqdXN0TWl4ZWRQbHVyYWxzIiwiYWRqdXN0UGx1cmFsUGx1cmFscyIsImFkanVzdFNpbmd1bGFyUGx1cmFscyIsImNvbXByZXNzUGFnZU51bWJlcnMiLCJpbmRleE9wdGlvbnMiLCJwaHJhc2VzIiwiaW5kZXhNYXRjaGVzIiwibWFwIiwicGhyYXNlIiwiaW5kZXhNYXRjaCIsIkluZGV4TWF0Y2giLCJmcm9tUGhyYXNlIiwiZm9yRWFjaCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicGFnZU51bWJlciIsImdldFBhZ2VOdW1iZXIiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsIndvcmRzT3JQaHJhc2VzIiwid29yZHNPclBocmFzZXNGcm9tUGxhaW5UZXh0QW5kSW5kZXhNYXRjaGVzIiwid29yZE9yUGhyYXNlIiwicGFnZU51bWJlcnMiLCJwdXNoIiwicHJlcGFyZVBsYWluVGV4dCIsInJlcGxhY2UiLCJzcGxpdCIsIlNJTkdMRV9TUEFDRSIsInJldmVydCIsIm1hcFZhbHVlcyIsInBhZ2VOdW1iZXJBIiwicGFnZU51bWJlckIiLCJzb3J0IiwiaWdub3JlZFdvcmRzIiwiaWdub3JlZFdvcmQiLCJwcm9wZXJOb3VucyIsImxvd2VyQ2FzZVByb3Blck5vdW5zIiwicHJvcGVyTm91biIsImxvd2VyQ2FzZVByb3Blck5vdW4iLCJ0b0xvd2VyQ2FzZSIsIm1hcEtleXMiLCJpbmRleCIsImZpbmRJbmRleCIsImxvd2VyQ2FzZVByb3Blck5tYWUiLCJFTVBUWV9TVFJJTkciLCJhY3JvbnltcyIsImxvd2VyQ2FzZUFjcm9ueW1zIiwiYWNyb255bSIsImxvd2VyQ2FzZUFjcm9ueW0iLCJwbHVyYWxzIiwibWl4ZWRQbHVyYWxzIiwibWl4ZWRQbHVyYWxzRnJvbVBsdXJhbHMiLCJlbnRyeVBsdXJhbCIsImlzUGx1cmFsIiwic2luZ3VsYXJFbnRyeSIsIm1peGVkRW50cnkiLCJtaXhlZFBsdXJhbHNJbmNsdWRlc01peGVkRW50cnkiLCJpbmNsdWRlcyIsImVudHJ5TWl4ZWRQbHVyYWwiLCJwbHVyYWxQYWdlTnVtYmVycyIsInNpbmd1bGFyUGFnZU51bWJlcnMiLCJwbHVyYWxQbHVyYWxzIiwicGx1cmFsUGx1cmFsc0Zyb21QbHVyYWxzIiwicGx1cmFsUGx1cmFsc0luY2x1ZGVzRW50cnkiLCJlbnRyeVBsdXJhbFBsdXJhbCIsInNpbmd1bGFyUGx1cmFscyIsInNpbmd1bGFyUGx1cmFsc0Zyb21QbHVyYWxzIiwic2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNTaW5ndWxhckVudHJ5IiwiZW50cnlTaW5ndWxhclBsdXJhbCIsInJlZHVjZSIsInBsdXJhbCIsInBsdXJhbFNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyUGx1cmFsIiwicGx1cmFsUGx1cmFsIiwicGx1cmFsTWl4ZWQiLCJpc01peGVkIiwibWl4ZWRQbHVyYWwiLCJ0ZXh0IiwidGVzdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV2dCQTs7O2VBQUFBOzs7eUJBVGU7NERBRVI7eUJBRW9CO3NCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVDLElBQU0sQUFBRUMsV0FBYUMseUJBQWMsQ0FBM0JEO0FBRUQsU0FBU0Qsa0NBQWtDRyxxQkFBcUIsRUFBRUMsT0FBTztJQUM5RSxJQUFNQyxXQUFXQyxlQUFlSCx1QkFBdUJDO0lBRXZERyxtQkFBbUJGLFVBQVVEO0lBRTdCSSxrQkFBa0JILFVBQVVEO0lBRTVCSyxlQUFlSixVQUFVRDtJQUV6Qk0sbUJBQW1CTCxVQUFVRDtJQUU3Qk8sb0JBQW9CTixVQUFVRDtJQUU5QlEsc0JBQXNCUCxVQUFVRDtJQUVoQ1Msb0JBQW9CUjtJQUVwQixPQUFPQTtBQUNUO0FBRUEsU0FBU0MsZUFBZUgscUJBQXFCLEVBQUVDLE9BQU87SUFDcEQsSUFBTUMsV0FBVyxDQUFDO0lBRWxCLElBQU0sQUFBRVMsZUFBaUJWLFFBQWpCVSxjQUNGLEFBQUVDLFVBQVlELGFBQVpDLFNBQ0ZDLGVBQWVELFFBQVFFLEdBQUcsQ0FBQyxTQUFDQztRQUMxQixJQUFNQyxhQUFhQyxjQUFVLENBQUNDLFVBQVUsQ0FBQ0g7UUFFekMsT0FBT0M7SUFDVDtJQUVOaEIsc0JBQXNCbUIsT0FBTyxDQUFDLFNBQUNDO1FBQzdCLElBQU1DLGFBQWFELHFCQUFxQkUsYUFBYTtRQUVyRCxJQUFJRCxlQUFlLE1BQU07WUFDdkIsSUFBTUUsWUFBWUgscUJBQXFCSSxXQUFXLENBQUN2QixVQUM3Q3dCLGlCQUFpQkMsMkNBQTJDSCxXQUFXVjtZQUU3RVksZUFBZU4sT0FBTyxDQUFDLFNBQUNRO2dCQUN0QixJQUFJQyxjQUFjMUIsUUFBUSxDQUFDeUIsYUFBYSxJQUFJO2dCQUU1QyxJQUFJQyxnQkFBZ0IsTUFBTTtvQkFDeEJBLGNBQWMsRUFBRTtvQkFFaEIxQixRQUFRLENBQUN5QixhQUFhLEdBQUdDO2dCQUMzQjtnQkFFQUEsWUFBWUMsSUFBSSxDQUFDUjtZQUNuQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPbkI7QUFDVDtBQUVBLFNBQVN3QiwyQ0FBMkNILFNBQVMsRUFBRVYsWUFBWTtJQUN6RSxJQUFJWTtJQUVKRixZQUFZTyxpQkFBaUJQLFlBQWEsR0FBRztJQUU3Q1YsYUFBYU0sT0FBTyxDQUFDLFNBQUNIO1FBQ3BCTyxZQUFZUCxXQUFXZSxPQUFPLENBQUNSO0lBQ2pDO0lBRUFFLGlCQUFpQkYsVUFBVVMsS0FBSyxDQUFDQyx1QkFBWTtJQUU3Q1IsaUJBQWlCQSxlQUFlWCxHQUFHLENBQUMsU0FBQ2E7UUFDbkNBLGVBQWVWLGNBQVUsQ0FBQ2lCLE1BQU0sQ0FBQ1AsZUFBZ0IsR0FBRztRQUVwRCxPQUFPQTtJQUNUO0lBRUEsT0FBT0Y7QUFDVDtBQUVBLFNBQVNmLG9CQUFvQlIsUUFBUTtJQUNuQ2lDLElBQUFBLGlCQUFTLEVBQUNqQyxVQUFVLFNBQUN5QixjQUFjQztRQUNqQzlCLFNBQVM4QixhQUFhLFNBQUNRLGFBQWFDO1lBQ2xDLElBQUlELGdCQUFnQkMsYUFBYTtnQkFDL0IsT0FBTztZQUNUO1FBQ0Y7UUFFQVQsWUFBWVUsSUFBSTtRQUVoQixPQUFPVjtJQUNUO0FBQ0Y7QUFFQSxTQUFTeEIsbUJBQW1CRixRQUFRLEVBQUVELE9BQU87SUFDM0MsSUFBTSxBQUFFVSxlQUFpQlYsUUFBakJVLGNBQ0YsQUFBRTRCLGVBQWlCNUIsYUFBakI0QjtJQUVSQSxhQUFhcEIsT0FBTyxDQUFDLFNBQUNxQjtRQUNwQixPQUFPdEMsUUFBUSxDQUFDc0MsWUFBWTtJQUM5QjtBQUNGO0FBRUEsU0FBU25DLGtCQUFrQkgsUUFBUSxFQUFFRCxPQUFPO0lBQzFDLElBQU0sQUFBRVUsZUFBaUJWLFFBQWpCVSxjQUNGLEFBQUU4QixjQUFnQjlCLGFBQWhCOEI7SUFFUixJQUFNQyx1QkFBdUJELFlBQVkzQixHQUFHLENBQUMsU0FBQzZCO1FBQzVDLElBQU1DLHNCQUFzQkQsV0FBV0UsV0FBVztRQUVsRCxPQUFPRDtJQUNUO0lBRUFFLElBQUFBLGVBQU8sRUFBQzVDLFVBQVUsU0FBQ3lCO1FBQ2pCLElBQU1vQixRQUFRTCxxQkFBcUJNLFNBQVMsQ0FBQyxTQUFDQztZQUM1QyxJQUFJQSx3QkFBd0J0QixjQUFjO2dCQUN4QyxPQUFPO1lBQ1Q7UUFDRjtRQUVBLElBQUlvQixRQUFRLENBQUMsR0FBRztZQUNkLElBQU1KLGFBQWFGLFdBQVcsQ0FBQ00sTUFBTTtZQUVyQ3BCLGVBQWVnQixZQUFhLEdBQUc7UUFDakM7UUFFQSxPQUFPaEI7SUFDVDtBQUNGO0FBRUEsU0FBU0csaUJBQWlCUCxTQUFTO0lBQ2pDQSxZQUFZQSxVQUFVc0IsV0FBVyxJQUFLLEdBQUc7SUFFekN0QixZQUFZQSxVQUFVUSxPQUFPLENBQUMsWUFBWUUsdUJBQVk7SUFFdERWLFlBQVlBLFVBQVVRLE9BQU8sQ0FBQyxRQUFRRSx1QkFBWTtJQUVsRFYsWUFBWUEsVUFBVVEsT0FBTyxDQUFDLGNBQWNtQix1QkFBWTtJQUV4RCxPQUFPM0I7QUFDVDtBQUVBLFNBQVNqQixlQUFlSixRQUFRLEVBQUVELE9BQU87SUFDdkMsSUFBTSxBQUFFVSxlQUFpQlYsUUFBakJVLGNBQ0YsQUFBRXdDLFdBQWF4QyxhQUFid0M7SUFFUixJQUFNQyxvQkFBb0JELFNBQVNyQyxHQUFHLENBQUMsU0FBQ3VDO1FBQ3RDLElBQU1DLG1CQUFtQkQsUUFBUVIsV0FBVztRQUU1QyxPQUFPUztJQUNUO0lBRUFSLElBQUFBLGVBQU8sRUFBQzVDLFVBQVUsU0FBQ3lCO1FBQ2pCLElBQU1vQixRQUFRSyxrQkFBa0JKLFNBQVMsQ0FBQyxTQUFDQztZQUN6QyxJQUFJQSx3QkFBd0J0QixjQUFjO2dCQUN4QyxPQUFPO1lBQ1Q7UUFDRjtRQUVBLElBQUlvQixRQUFRLENBQUMsR0FBRztZQUNkLElBQU1NLFVBQVVGLFFBQVEsQ0FBQ0osTUFBTTtZQUUvQnBCLGVBQWUwQixTQUFVLEdBQUc7UUFDOUI7UUFFQSxPQUFPMUI7SUFDVDtBQUNGO0FBRUEsU0FBU3BCLG1CQUFtQkwsUUFBUSxFQUFFRCxPQUFPO0lBQzNDLElBQU0sQUFBRVUsZUFBaUJWLFFBQWpCVSxjQUNGLEFBQUU0QyxVQUFZNUMsYUFBWjRDLFNBQ0ZDLGVBQWVDLHdCQUF3QkY7SUFFN0NwQyxJQUFBQSxlQUFPLEVBQUNqQixVQUFVLFNBQUN5QixjQUFjQztRQUMvQixJQUFNOEIsY0FBY0MsU0FBU2hDO1FBRTdCLElBQUkrQixhQUFhO1lBQ2YsSUFBTUUsZ0JBQWdCakMsYUFBYUksT0FBTyxDQUFDLE1BQU1tQix1QkFBWSxHQUN2RFcsYUFBYSxBQUFDLEdBQWdCLE9BQWRELGVBQWMsUUFDOUJFLGlDQUFpQ04sYUFBYU8sUUFBUSxDQUFDRixhQUN2REcsbUJBQW1CRixnQ0FBZ0MsR0FBRztZQUU1RCxJQUFJRSxrQkFBa0I7Z0JBQ3BCLElBQU1DLG9CQUFvQnJDLGFBQ3BCc0Msc0JBQXNCaEUsUUFBUSxDQUFDMEQsY0FBYyxJQUFJLEVBQUU7Z0JBRXpEaEMsY0FBYyxBQUNaLHFCQUFHcUMsMEJBQ0gscUJBQUdDO2dCQUdMLE9BQU9oRSxRQUFRLENBQUN5QixhQUFhO2dCQUM3QixPQUFPekIsUUFBUSxDQUFDMEQsY0FBYztnQkFFOUIxRCxRQUFRLENBQUMyRCxXQUFXLEdBQUdqQztZQUN6QjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLFNBQVNwQixvQkFBb0JOLFFBQVEsRUFBRUQsT0FBTztJQUM1QyxJQUFNLEFBQUVVLGVBQWlCVixRQUFqQlUsY0FDRixBQUFFNEMsVUFBWTVDLGFBQVo0QyxTQUNGWSxnQkFBZ0JDLHlCQUF5QmI7SUFFL0NwQyxJQUFBQSxlQUFPLEVBQUNqQixVQUFVLFNBQUN5QixjQUFjQztRQUMvQixJQUFNOEIsY0FBY0MsU0FBU2hDO1FBRTdCLElBQUkrQixhQUFhO1lBQ2YsSUFBTUUsZ0JBQWdCakMsYUFBYUksT0FBTyxDQUFDLE1BQU1tQix1QkFBWSxHQUN2RG1CLDZCQUE2QkYsY0FBY0osUUFBUSxDQUFDcEMsZUFDcEQyQyxvQkFBb0JELDRCQUE0QixHQUFHO1lBRXpELElBQUlDLG1CQUFtQjtnQkFDckIsSUFBTUwsb0JBQW9CckMsYUFDcEJzQyxzQkFBc0JoRSxRQUFRLENBQUMwRCxjQUFjLElBQUksRUFBRTtnQkFFekRoQyxjQUFjLEFBQ1oscUJBQUdxQywwQkFDSCxxQkFBR0M7Z0JBR0wsT0FBT2hFLFFBQVEsQ0FBQzBELGNBQWM7Z0JBRTlCMUQsUUFBUSxDQUFDeUIsYUFBYSxHQUFHQztZQUMzQjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLFNBQVNuQixzQkFBc0JQLFFBQVEsRUFBRUQsT0FBTztJQUM5QyxJQUFNLEFBQUVVLGVBQWlCVixRQUFqQlUsY0FDRixBQUFFNEMsVUFBWTVDLGFBQVo0QyxTQUNGZ0Isa0JBQWtCQywyQkFBMkJqQjtJQUVuRHBDLElBQUFBLGVBQU8sRUFBQ2pCLFVBQVUsU0FBQ3lCLGNBQWNDO1FBQy9CLElBQU04QixjQUFjQyxTQUFTaEM7UUFFN0IsSUFBSStCLGFBQWE7WUFDZixJQUFNRSxnQkFBZ0JqQyxhQUFhSSxPQUFPLENBQUMsTUFBTW1CLHVCQUFZLEdBQ3ZEdUIsdUNBQXVDRixnQkFBZ0JSLFFBQVEsQ0FBQ0gsZ0JBQ2hFYyxzQkFBc0JELHNDQUFzQyxHQUFHO1lBRXJFLElBQUlDLHFCQUFxQjtnQkFDdkIsSUFBTVQsb0JBQW9CckMsYUFDcEJzQyxzQkFBc0JoRSxRQUFRLENBQUMwRCxjQUFjLElBQUksRUFBRTtnQkFFekRoQyxjQUFjLEFBQ1oscUJBQUdxQywwQkFDSCxxQkFBR0M7Z0JBR0wsT0FBT2hFLFFBQVEsQ0FBQ3lCLGFBQWE7Z0JBRTdCekIsUUFBUSxDQUFDMEQsY0FBYyxHQUFHaEM7WUFDNUI7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxTQUFTNEMsMkJBQTJCakIsT0FBTztJQUN6QyxJQUFNZ0Isa0JBQWtCaEIsUUFBUW9CLE1BQU0sQ0FBQyxTQUFDSixpQkFBaUJLO1FBQ3ZELElBQU1DLGlCQUFpQkMsV0FBV0Y7UUFFbEMsSUFBSUMsZ0JBQWdCO1lBQ2xCLElBQU1FLGlCQUFpQkgsUUFBUyxHQUFHO1lBRW5DTCxnQkFBZ0IxQyxJQUFJLENBQUNrRDtRQUN2QjtRQUVBLE9BQU9SO0lBQ1QsR0FBRyxFQUFFO0lBRUwsT0FBT0E7QUFDVDtBQUVBLFNBQVNILHlCQUF5QmIsT0FBTztJQUN2QyxJQUFNWSxnQkFBZ0JaLFFBQVFvQixNQUFNLENBQUMsU0FBQ1IsZUFBZVM7UUFDbkQsSUFBTUksZUFBZXJCLFNBQVNpQjtRQUU5QixJQUFJSSxjQUFjO1lBQ2hCLElBQU1BLGdCQUFlSixRQUFTLEdBQUc7WUFFakNULGNBQWN0QyxJQUFJLENBQUNtRDtRQUNyQjtRQUVBLE9BQU9iO0lBQ1QsR0FBRyxFQUFFO0lBRUwsT0FBT0E7QUFDVDtBQUVBLFNBQVNWLHdCQUF3QkYsT0FBTztJQUN0QyxJQUFNQyxlQUFlRCxRQUFRb0IsTUFBTSxDQUFDLFNBQUNuQixjQUFjb0I7UUFDakQsSUFBTUssY0FBY0MsUUFBUU47UUFFNUIsSUFBSUssYUFBYTtZQUNmLElBQU1FLGNBQWNQLFFBQVMsR0FBRztZQUVoQ3BCLGFBQWEzQixJQUFJLENBQUNzRDtRQUNwQjtRQUVBLE9BQU8zQjtJQUNULEdBQUcsRUFBRTtJQUVMLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTc0IsV0FBV00sSUFBSTtJQUN0QixJQUFNdkUsZUFBZSxTQUFTd0UsSUFBSSxDQUFDRCxPQUM3QlAsaUJBQWlCaEUsY0FBYyxHQUFHO0lBRXhDLE9BQU9nRTtBQUNUO0FBRUEsU0FBU2xCLFNBQVN5QixJQUFJO0lBQ3BCLElBQU12RSxlQUFlLEtBQUt3RSxJQUFJLENBQUNELE9BQ3pCUixTQUFTL0QsY0FBYyxHQUFHO0lBRWhDLE9BQU8rRDtBQUNUO0FBRUEsU0FBU00sUUFBUUUsSUFBSTtJQUNuQixJQUFNdkUsZUFBZSxTQUFTd0UsSUFBSSxDQUFDRCxPQUM3QlIsU0FBUy9ELGNBQWMsR0FBRztJQUVoQyxPQUFPK0Q7QUFDVCJ9