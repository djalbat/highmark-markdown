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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSW5kZXhNYXRjaCBmcm9tIFwiLi4vaW5kZXgvbWF0Y2hcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmb3JFYWNoLCBtYXBLZXlzLCBtYXBWYWx1ZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29iamVjdFwiO1xuXG5jb25zdCB7IGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXAgPSBjcmVhdGVJbmRleE1hcChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJlbW92ZUlnbm9yZWRXb3JkcyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgYWRqdXN0UHJvcGVyTm91bnMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFBsdXJhbFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFNpbmd1bGFyUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgY29tcHJlc3NQYWdlTnVtYmVycyhpbmRleE1hcCk7XG5cbiAgcmV0dXJuIGluZGV4TWFwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRleE1hcChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXAgPSB7fTtcblxuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwaHJhc2VzIH0gPSBpbmRleE9wdGlvbnMsXG4gICAgICAgIGluZGV4TWF0Y2hlcyA9IHBocmFzZXMubWFwKChwaHJhc2UpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmRleE1hdGNoID0gSW5kZXhNYXRjaC5mcm9tUGhyYXNlKHBocmFzZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5kZXhNYXRjaDtcbiAgICAgICAgfSk7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgcGFnZU51bWJlciA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmdldFBhZ2VOdW1iZXIoKTtcblxuICAgIGlmIChwYWdlTnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwbGFpblRleHQgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICAgIHdvcmRzT3JQaHJhc2VzID0gd29yZHNPclBocmFzZXNGcm9tUGxhaW5UZXh0QW5kSW5kZXhNYXRjaGVzKHBsYWluVGV4dCwgaW5kZXhNYXRjaGVzKTtcblxuICAgICAgd29yZHNPclBocmFzZXMuZm9yRWFjaCgod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgICAgIGxldCBwYWdlTnVtYmVycyA9IGluZGV4TWFwW3dvcmRPclBocmFzZV0gfHwgbnVsbDtcblxuICAgICAgICBpZiAocGFnZU51bWJlcnMgPT09IG51bGwpIHtcbiAgICAgICAgICBwYWdlTnVtYmVycyA9IFtdO1xuXG4gICAgICAgICAgaW5kZXhNYXBbd29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFnZU51bWJlcnMucHVzaChwYWdlTnVtYmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4TWFwO1xufVxuXG5mdW5jdGlvbiB3b3Jkc09yUGhyYXNlc0Zyb21QbGFpblRleHRBbmRJbmRleE1hdGNoZXMocGxhaW5UZXh0LCBpbmRleE1hdGNoZXMpIHtcbiAgbGV0IHdvcmRzT3JQaHJhc2VzO1xuXG4gIHBsYWluVGV4dCA9IHByZXBhcmVQbGFpblRleHQocGxhaW5UZXh0KTsgIC8vL1xuXG4gIGluZGV4TWF0Y2hlcy5mb3JFYWNoKChpbmRleE1hdGNoKSA9PiB7XG4gICAgcGxhaW5UZXh0ID0gaW5kZXhNYXRjaC5yZXBsYWNlKHBsYWluVGV4dCk7XG4gIH0pO1xuXG4gIHdvcmRzT3JQaHJhc2VzID0gcGxhaW5UZXh0LnNwbGl0KFNJTkdMRV9TUEFDRSk7XG5cbiAgd29yZHNPclBocmFzZXMgPSB3b3Jkc09yUGhyYXNlcy5tYXAoKHdvcmRPclBocmFzZSkgPT4ge1xuICAgIHdvcmRPclBocmFzZSA9IEluZGV4TWF0Y2gucmV2ZXJ0KHdvcmRPclBocmFzZSk7ICAvLy9cblxuICAgIHJldHVybiB3b3JkT3JQaHJhc2U7XG4gIH0pO1xuXG4gIHJldHVybiB3b3Jkc09yUGhyYXNlcztcbn1cblxuZnVuY3Rpb24gY29tcHJlc3NQYWdlTnVtYmVycyhpbmRleE1hcCkge1xuICBtYXBWYWx1ZXMoaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29tcHJlc3MocGFnZU51bWJlcnMsIChwYWdlTnVtYmVyQSwgcGFnZU51bWJlckIpID0+IHtcbiAgICAgIGlmIChwYWdlTnVtYmVyQSA9PT0gcGFnZU51bWJlckIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYWdlTnVtYmVycy5zb3J0KChwYWdlTnVtYmVyQiwgcGFnZU51bWJlckEpID0+IHtcbiAgICAgIHBhZ2VOdW1iZXJBID0gTnVtYmVyKHBhZ2VOdW1iZXJBKTsgIC8vL1xuXG4gICAgICBwYWdlTnVtYmVyQiA9IE51bWJlcihwYWdlTnVtYmVyQik7ICAvLy9cblxuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHBhZ2VOdW1iZXJCIC0gcGFnZU51bWJlckE7XG5cbiAgICAgIHJldHVybiBkaWZmZXJlbmNlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXJzO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSWdub3JlZFdvcmRzKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGlnbm9yZWRXb3JkcyB9ID0gaW5kZXhPcHRpb25zO1xuXG4gIGlnbm9yZWRXb3Jkcy5mb3JFYWNoKChpZ25vcmVkV29yZCkgPT4ge1xuICAgIGRlbGV0ZSBpbmRleE1hcFtpZ25vcmVkV29yZF07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RQcm9wZXJOb3VucyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwcm9wZXJOb3VucyB9ID0gaW5kZXhPcHRpb25zO1xuXG4gIGNvbnN0IGxvd2VyQ2FzZVByb3Blck5vdW5zID0gcHJvcGVyTm91bnMubWFwKChwcm9wZXJOb3VuKSA9PiB7XG4gICAgY29uc3QgbG93ZXJDYXNlUHJvcGVyTm91biA9IHByb3Blck5vdW4udG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiBsb3dlckNhc2VQcm9wZXJOb3VuO1xuICB9KTtcblxuICBtYXBLZXlzKGluZGV4TWFwLCAod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBsb3dlckNhc2VQcm9wZXJOb3Vucy5maW5kSW5kZXgoKGxvd2VyQ2FzZVByb3Blck5tYWUpID0+IHtcbiAgICAgIGlmIChsb3dlckNhc2VQcm9wZXJObWFlID09PSB3b3JkT3JQaHJhc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgcHJvcGVyTm91biA9IHByb3Blck5vdW5zW2luZGV4XTtcblxuICAgICAgd29yZE9yUGhyYXNlID0gcHJvcGVyTm91bjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3b3JkT3JQaHJhc2U7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlUGxhaW5UZXh0KHBsYWluVGV4dCkge1xuICBwbGFpblRleHQgPSBwbGFpblRleHQudG9Mb3dlckNhc2UoKTsgIC8vL1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9bXmEteiBdL2csIFNJTkdMRV9TUEFDRSk7XG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoL1xccysvZywgU0lOR0xFX1NQQUNFKTtcblxuICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcGxhaW5UZXh0O1xufVxuXG5mdW5jdGlvbiBhZGp1c3RBY3JvbnltcyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBhY3JvbnltcyB9ID0gaW5kZXhPcHRpb25zO1xuXG4gIGNvbnN0IGxvd2VyQ2FzZUFjcm9ueW1zID0gYWNyb255bXMubWFwKChhY3JvbnltKSA9PiB7XG4gICAgY29uc3QgbG93ZXJDYXNlQWNyb255bSA9IGFjcm9ueW0udG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiBsb3dlckNhc2VBY3JvbnltO1xuICB9KTtcblxuICBtYXBLZXlzKGluZGV4TWFwLCAod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBsb3dlckNhc2VBY3Jvbnltcy5maW5kSW5kZXgoKGxvd2VyQ2FzZVByb3Blck5tYWUpID0+IHtcbiAgICAgIGlmIChsb3dlckNhc2VQcm9wZXJObWFlID09PSB3b3JkT3JQaHJhc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgYWNyb255bSA9IGFjcm9ueW1zW2luZGV4XTtcblxuICAgICAgd29yZE9yUGhyYXNlID0gYWNyb255bTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3b3JkT3JQaHJhc2U7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgcGx1cmFscyB9ID0gaW5kZXhPcHRpb25zLFxuICAgICAgICBtaXhlZFBsdXJhbHMgPSBtaXhlZFBsdXJhbHNGcm9tUGx1cmFscyhwbHVyYWxzKTtcblxuICBmb3JFYWNoKGluZGV4TWFwLCAod29yZE9yUGhyYXNlLCBwYWdlTnVtYmVycykgPT4ge1xuICAgIGNvbnN0IGVudHJ5UGx1cmFsID0gaXNQbHVyYWwod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChlbnRyeVBsdXJhbCkge1xuICAgICAgY29uc3Qgc2luZ3VsYXJFbnRyeSA9IHdvcmRPclBocmFzZS5yZXBsYWNlKC9zJC8sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgICBtaXhlZEVudHJ5ID0gYCR7c2luZ3VsYXJFbnRyeX0ocylgLFxuICAgICAgICAgICAgbWl4ZWRQbHVyYWxzSW5jbHVkZXNNaXhlZEVudHJ5ID0gbWl4ZWRQbHVyYWxzLmluY2x1ZGVzKG1peGVkRW50cnkpLFxuICAgICAgICAgICAgZW50cnlNaXhlZFBsdXJhbCA9IG1peGVkUGx1cmFsc0luY2x1ZGVzTWl4ZWRFbnRyeTsgLy8vXG5cbiAgICAgIGlmIChlbnRyeU1peGVkUGx1cmFsKSB7XG4gICAgICAgIGNvbnN0IHBsdXJhbFBhZ2VOdW1iZXJzID0gcGFnZU51bWJlcnMsICAvLy9cbiAgICAgICAgICAgICAgc2luZ3VsYXJQYWdlTnVtYmVycyA9IGluZGV4TWFwW3Npbmd1bGFyRW50cnldIHx8IFtdO1xuXG4gICAgICAgIHBhZ2VOdW1iZXJzID0gWyAvLy9cbiAgICAgICAgICAuLi5wbHVyYWxQYWdlTnVtYmVycyxcbiAgICAgICAgICAuLi5zaW5ndWxhclBhZ2VOdW1iZXJzXG4gICAgICAgIF07XG5cbiAgICAgICAgZGVsZXRlIGluZGV4TWFwW3dvcmRPclBocmFzZV07XG4gICAgICAgIGRlbGV0ZSBpbmRleE1hcFtzaW5ndWxhckVudHJ5XTtcblxuICAgICAgICBpbmRleE1hcFttaXhlZEVudHJ5XSA9IHBhZ2VOdW1iZXJzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdFBsdXJhbFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgcGx1cmFscyB9ID0gaW5kZXhPcHRpb25zLFxuICAgICAgICBwbHVyYWxQbHVyYWxzID0gcGx1cmFsUGx1cmFsc0Zyb21QbHVyYWxzKHBsdXJhbHMpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29uc3QgZW50cnlQbHVyYWwgPSBpc1BsdXJhbCh3b3JkT3JQaHJhc2UpO1xuXG4gICAgaWYgKGVudHJ5UGx1cmFsKSB7XG4gICAgICBjb25zdCBzaW5ndWxhckVudHJ5ID0gd29yZE9yUGhyYXNlLnJlcGxhY2UoL3MkLywgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICAgIHBsdXJhbFBsdXJhbHNJbmNsdWRlc0VudHJ5ID0gcGx1cmFsUGx1cmFscy5pbmNsdWRlcyh3b3JkT3JQaHJhc2UpLFxuICAgICAgICAgICAgZW50cnlQbHVyYWxQbHVyYWwgPSBwbHVyYWxQbHVyYWxzSW5jbHVkZXNFbnRyeTsgLy8vXG5cbiAgICAgIGlmIChlbnRyeVBsdXJhbFBsdXJhbCkge1xuICAgICAgICBjb25zdCBwbHVyYWxQYWdlTnVtYmVycyA9IHBhZ2VOdW1iZXJzLCAgLy8vXG4gICAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBpbmRleE1hcFtzaW5ndWxhckVudHJ5XSB8fCBbXTtcblxuICAgICAgICBwYWdlTnVtYmVycyA9IFsgLy8vXG4gICAgICAgICAgLi4ucGx1cmFsUGFnZU51bWJlcnMsXG4gICAgICAgICAgLi4uc2luZ3VsYXJQYWdlTnVtYmVyc1xuICAgICAgICBdO1xuXG4gICAgICAgIGRlbGV0ZSBpbmRleE1hcFtzaW5ndWxhckVudHJ5XTtcblxuICAgICAgICBpbmRleE1hcFt3b3JkT3JQaHJhc2VdID0gcGFnZU51bWJlcnM7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0U2luZ3VsYXJQbHVyYWxzKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHBsdXJhbHMgfSA9IGluZGV4T3B0aW9ucyxcbiAgICAgICAgc2luZ3VsYXJQbHVyYWxzID0gc2luZ3VsYXJQbHVyYWxzRnJvbVBsdXJhbHMocGx1cmFscyk7XG5cbiAgZm9yRWFjaChpbmRleE1hcCwgKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpID0+IHtcbiAgICBjb25zdCBlbnRyeVBsdXJhbCA9IGlzUGx1cmFsKHdvcmRPclBocmFzZSk7XG5cbiAgICBpZiAoZW50cnlQbHVyYWwpIHtcbiAgICAgIGNvbnN0IHNpbmd1bGFyRW50cnkgPSB3b3JkT3JQaHJhc2UucmVwbGFjZSgvcyQvLCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgICAgc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNTaW5ndWxhckVudHJ5ID0gc2luZ3VsYXJQbHVyYWxzLmluY2x1ZGVzKHNpbmd1bGFyRW50cnkpLFxuICAgICAgICAgICAgZW50cnlTaW5ndWxhclBsdXJhbCA9IHNpbmd1bGFyUGx1cmFsc0luY2x1ZGVzU2luZ3VsYXJFbnRyeTsgLy8vXG5cbiAgICAgIGlmIChlbnRyeVNpbmd1bGFyUGx1cmFsKSB7XG4gICAgICAgIGNvbnN0IHBsdXJhbFBhZ2VOdW1iZXJzID0gcGFnZU51bWJlcnMsICAvLy9cbiAgICAgICAgICAgICAgc2luZ3VsYXJQYWdlTnVtYmVycyA9IGluZGV4TWFwW3Npbmd1bGFyRW50cnldIHx8IFtdO1xuXG4gICAgICAgIHBhZ2VOdW1iZXJzID0gWyAvLy9cbiAgICAgICAgICAuLi5wbHVyYWxQYWdlTnVtYmVycyxcbiAgICAgICAgICAuLi5zaW5ndWxhclBhZ2VOdW1iZXJzXG4gICAgICAgIF07XG5cbiAgICAgICAgZGVsZXRlIGluZGV4TWFwW3dvcmRPclBocmFzZV07XG5cbiAgICAgICAgaW5kZXhNYXBbc2luZ3VsYXJFbnRyeV0gPSBwYWdlTnVtYmVycztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaW5ndWxhclBsdXJhbHNGcm9tUGx1cmFscyhwbHVyYWxzKSB7XG4gIGNvbnN0IHNpbmd1bGFyUGx1cmFscyA9IHBsdXJhbHMucmVkdWNlKChzaW5ndWxhclBsdXJhbHMsIHBsdXJhbCkgPT4ge1xuICAgIGNvbnN0IHBsdXJhbFNpbmd1bGFyID0gaXNTaW5ndWxhcihwbHVyYWwpO1xuXG4gICAgaWYgKHBsdXJhbFNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBzaW5ndWxhclBsdXJhbCA9IHBsdXJhbDsgIC8vL1xuXG4gICAgICBzaW5ndWxhclBsdXJhbHMucHVzaChzaW5ndWxhclBsdXJhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyUGx1cmFscztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBzaW5ndWxhclBsdXJhbHM7XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFBsdXJhbHNGcm9tUGx1cmFscyhwbHVyYWxzKSB7XG4gIGNvbnN0IHBsdXJhbFBsdXJhbHMgPSBwbHVyYWxzLnJlZHVjZSgocGx1cmFsUGx1cmFscywgcGx1cmFsKSA9PiB7XG4gICAgY29uc3QgcGx1cmFsUGx1cmFsID0gaXNQbHVyYWwocGx1cmFsKTtcblxuICAgIGlmIChwbHVyYWxQbHVyYWwpIHtcbiAgICAgIGNvbnN0IHBsdXJhbFBsdXJhbCA9IHBsdXJhbDsgIC8vL1xuXG4gICAgICBwbHVyYWxQbHVyYWxzLnB1c2gocGx1cmFsUGx1cmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGx1cmFsUGx1cmFscztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBwbHVyYWxQbHVyYWxzO1xufVxuXG5mdW5jdGlvbiBtaXhlZFBsdXJhbHNGcm9tUGx1cmFscyhwbHVyYWxzKSB7XG4gIGNvbnN0IG1peGVkUGx1cmFscyA9IHBsdXJhbHMucmVkdWNlKChtaXhlZFBsdXJhbHMsIHBsdXJhbCkgPT4ge1xuICAgIGNvbnN0IHBsdXJhbE1peGVkID0gaXNNaXhlZChwbHVyYWwpO1xuXG4gICAgaWYgKHBsdXJhbE1peGVkKSB7XG4gICAgICBjb25zdCBtaXhlZFBsdXJhbCA9IHBsdXJhbDsgIC8vL1xuXG4gICAgICBtaXhlZFBsdXJhbHMucHVzaChtaXhlZFBsdXJhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1peGVkUGx1cmFscztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBtaXhlZFBsdXJhbHM7XG59XG5cbmZ1bmN0aW9uIGlzU2luZ3VsYXIodGV4dCkge1xuICBjb25zdCBpbmRleE1hdGNoZXMgPSAvW15zKV0kLy50ZXN0KHRleHQpLFxuICAgICAgICBwbHVyYWxTaW5ndWxhciA9IGluZGV4TWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIHBsdXJhbFNpbmd1bGFyO1xufVxuXG5mdW5jdGlvbiBpc1BsdXJhbCh0ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWF0Y2hlcyA9IC9zJC8udGVzdCh0ZXh0KSxcbiAgICAgICAgcGx1cmFsID0gaW5kZXhNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gcGx1cmFsO1xufVxuXG5mdW5jdGlvbiBpc01peGVkKHRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXRjaGVzID0gL1xcKHNcXCkkLy50ZXN0KHRleHQpLFxuICAgICAgICBwbHVyYWwgPSBpbmRleE1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBwbHVyYWw7XG59XG4iXSwibmFtZXMiOlsiaW5kZXhNYXBGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImNvbnRleHQiLCJpbmRleE1hcCIsImNyZWF0ZUluZGV4TWFwIiwicmVtb3ZlSWdub3JlZFdvcmRzIiwiYWRqdXN0UHJvcGVyTm91bnMiLCJhZGp1c3RBY3JvbnltcyIsImFkanVzdE1peGVkUGx1cmFscyIsImFkanVzdFBsdXJhbFBsdXJhbHMiLCJhZGp1c3RTaW5ndWxhclBsdXJhbHMiLCJjb21wcmVzc1BhZ2VOdW1iZXJzIiwiaW5kZXhPcHRpb25zIiwicGhyYXNlcyIsImluZGV4TWF0Y2hlcyIsIm1hcCIsInBocmFzZSIsImluZGV4TWF0Y2giLCJJbmRleE1hdGNoIiwiZnJvbVBocmFzZSIsImZvckVhY2giLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInBhZ2VOdW1iZXIiLCJnZXRQYWdlTnVtYmVyIiwicGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJ3b3Jkc09yUGhyYXNlcyIsIndvcmRzT3JQaHJhc2VzRnJvbVBsYWluVGV4dEFuZEluZGV4TWF0Y2hlcyIsIndvcmRPclBocmFzZSIsInBhZ2VOdW1iZXJzIiwicHVzaCIsInByZXBhcmVQbGFpblRleHQiLCJyZXBsYWNlIiwic3BsaXQiLCJTSU5HTEVfU1BBQ0UiLCJyZXZlcnQiLCJtYXBWYWx1ZXMiLCJwYWdlTnVtYmVyQSIsInBhZ2VOdW1iZXJCIiwic29ydCIsIk51bWJlciIsImRpZmZlcmVuY2UiLCJpZ25vcmVkV29yZHMiLCJpZ25vcmVkV29yZCIsInByb3Blck5vdW5zIiwibG93ZXJDYXNlUHJvcGVyTm91bnMiLCJwcm9wZXJOb3VuIiwibG93ZXJDYXNlUHJvcGVyTm91biIsInRvTG93ZXJDYXNlIiwibWFwS2V5cyIsImluZGV4IiwiZmluZEluZGV4IiwibG93ZXJDYXNlUHJvcGVyTm1hZSIsIkVNUFRZX1NUUklORyIsImFjcm9ueW1zIiwibG93ZXJDYXNlQWNyb255bXMiLCJhY3JvbnltIiwibG93ZXJDYXNlQWNyb255bSIsInBsdXJhbHMiLCJtaXhlZFBsdXJhbHMiLCJtaXhlZFBsdXJhbHNGcm9tUGx1cmFscyIsImVudHJ5UGx1cmFsIiwiaXNQbHVyYWwiLCJzaW5ndWxhckVudHJ5IiwibWl4ZWRFbnRyeSIsIm1peGVkUGx1cmFsc0luY2x1ZGVzTWl4ZWRFbnRyeSIsImluY2x1ZGVzIiwiZW50cnlNaXhlZFBsdXJhbCIsInBsdXJhbFBhZ2VOdW1iZXJzIiwic2luZ3VsYXJQYWdlTnVtYmVycyIsInBsdXJhbFBsdXJhbHMiLCJwbHVyYWxQbHVyYWxzRnJvbVBsdXJhbHMiLCJwbHVyYWxQbHVyYWxzSW5jbHVkZXNFbnRyeSIsImVudHJ5UGx1cmFsUGx1cmFsIiwic2luZ3VsYXJQbHVyYWxzIiwic2luZ3VsYXJQbHVyYWxzRnJvbVBsdXJhbHMiLCJzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1Npbmd1bGFyRW50cnkiLCJlbnRyeVNpbmd1bGFyUGx1cmFsIiwicmVkdWNlIiwicGx1cmFsIiwicGx1cmFsU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXJQbHVyYWwiLCJwbHVyYWxQbHVyYWwiLCJwbHVyYWxNaXhlZCIsImlzTWl4ZWQiLCJtaXhlZFBsdXJhbCIsInRleHQiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXZ0JBOzs7ZUFBQUE7Ozt5QkFUZTs0REFFUjt5QkFFb0I7c0JBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBTSxBQUFFQyxXQUFhQyx5QkFBYyxDQUEzQkQ7QUFFRCxTQUFTRCxrQ0FBa0NHLHFCQUFxQixFQUFFQyxPQUFPO0lBQzlFLElBQU1DLFdBQVdDLGVBQWVILHVCQUF1QkM7SUFFdkRHLG1CQUFtQkYsVUFBVUQ7SUFFN0JJLGtCQUFrQkgsVUFBVUQ7SUFFNUJLLGVBQWVKLFVBQVVEO0lBRXpCTSxtQkFBbUJMLFVBQVVEO0lBRTdCTyxvQkFBb0JOLFVBQVVEO0lBRTlCUSxzQkFBc0JQLFVBQVVEO0lBRWhDUyxvQkFBb0JSO0lBRXBCLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTQyxlQUFlSCxxQkFBcUIsRUFBRUMsT0FBTztJQUNwRCxJQUFNQyxXQUFXLENBQUM7SUFFbEIsSUFBTSxBQUFFUyxlQUFpQlYsUUFBakJVLGNBQ0YsQUFBRUMsVUFBWUQsYUFBWkMsU0FDRkMsZUFBZUQsUUFBUUUsR0FBRyxDQUFDLFNBQUNDO1FBQzFCLElBQU1DLGFBQWFDLGNBQVUsQ0FBQ0MsVUFBVSxDQUFDSDtRQUV6QyxPQUFPQztJQUNUO0lBRU5oQixzQkFBc0JtQixPQUFPLENBQUMsU0FBQ0M7UUFDN0IsSUFBTUMsYUFBYUQscUJBQXFCRSxhQUFhO1FBRXJELElBQUlELGVBQWUsTUFBTTtZQUN2QixJQUFNRSxZQUFZSCxxQkFBcUJJLFdBQVcsQ0FBQ3ZCLFVBQzdDd0IsaUJBQWlCQywyQ0FBMkNILFdBQVdWO1lBRTdFWSxlQUFlTixPQUFPLENBQUMsU0FBQ1E7Z0JBQ3RCLElBQUlDLGNBQWMxQixRQUFRLENBQUN5QixhQUFhLElBQUk7Z0JBRTVDLElBQUlDLGdCQUFnQixNQUFNO29CQUN4QkEsY0FBYyxFQUFFO29CQUVoQjFCLFFBQVEsQ0FBQ3lCLGFBQWEsR0FBR0M7Z0JBQzNCO2dCQUVBQSxZQUFZQyxJQUFJLENBQUNSO1lBQ25CO1FBQ0Y7SUFDRjtJQUVBLE9BQU9uQjtBQUNUO0FBRUEsU0FBU3dCLDJDQUEyQ0gsU0FBUyxFQUFFVixZQUFZO0lBQ3pFLElBQUlZO0lBRUpGLFlBQVlPLGlCQUFpQlAsWUFBYSxHQUFHO0lBRTdDVixhQUFhTSxPQUFPLENBQUMsU0FBQ0g7UUFDcEJPLFlBQVlQLFdBQVdlLE9BQU8sQ0FBQ1I7SUFDakM7SUFFQUUsaUJBQWlCRixVQUFVUyxLQUFLLENBQUNDLHVCQUFZO0lBRTdDUixpQkFBaUJBLGVBQWVYLEdBQUcsQ0FBQyxTQUFDYTtRQUNuQ0EsZUFBZVYsY0FBVSxDQUFDaUIsTUFBTSxDQUFDUCxlQUFnQixHQUFHO1FBRXBELE9BQU9BO0lBQ1Q7SUFFQSxPQUFPRjtBQUNUO0FBRUEsU0FBU2Ysb0JBQW9CUixRQUFRO0lBQ25DaUMsSUFBQUEsaUJBQVMsRUFBQ2pDLFVBQVUsU0FBQ3lCLGNBQWNDO1FBQ2pDOUIsU0FBUzhCLGFBQWEsU0FBQ1EsYUFBYUM7WUFDbEMsSUFBSUQsZ0JBQWdCQyxhQUFhO2dCQUMvQixPQUFPO1lBQ1Q7UUFDRjtRQUVBVCxZQUFZVSxJQUFJLENBQUMsU0FBQ0QsYUFBYUQ7WUFDN0JBLGNBQWNHLE9BQU9ILGNBQWUsR0FBRztZQUV2Q0MsY0FBY0UsT0FBT0YsY0FBZSxHQUFHO1lBRXZDLElBQU1HLGFBQWFILGNBQWNEO1lBRWpDLE9BQU9JO1FBQ1Q7UUFFQSxPQUFPWjtJQUNUO0FBQ0Y7QUFFQSxTQUFTeEIsbUJBQW1CRixRQUFRLEVBQUVELE9BQU87SUFDM0MsSUFBTSxBQUFFVSxlQUFpQlYsUUFBakJVLGNBQ0YsQUFBRThCLGVBQWlCOUIsYUFBakI4QjtJQUVSQSxhQUFhdEIsT0FBTyxDQUFDLFNBQUN1QjtRQUNwQixPQUFPeEMsUUFBUSxDQUFDd0MsWUFBWTtJQUM5QjtBQUNGO0FBRUEsU0FBU3JDLGtCQUFrQkgsUUFBUSxFQUFFRCxPQUFPO0lBQzFDLElBQU0sQUFBRVUsZUFBaUJWLFFBQWpCVSxjQUNGLEFBQUVnQyxjQUFnQmhDLGFBQWhCZ0M7SUFFUixJQUFNQyx1QkFBdUJELFlBQVk3QixHQUFHLENBQUMsU0FBQytCO1FBQzVDLElBQU1DLHNCQUFzQkQsV0FBV0UsV0FBVztRQUVsRCxPQUFPRDtJQUNUO0lBRUFFLElBQUFBLGVBQU8sRUFBQzlDLFVBQVUsU0FBQ3lCO1FBQ2pCLElBQU1zQixRQUFRTCxxQkFBcUJNLFNBQVMsQ0FBQyxTQUFDQztZQUM1QyxJQUFJQSx3QkFBd0J4QixjQUFjO2dCQUN4QyxPQUFPO1lBQ1Q7UUFDRjtRQUVBLElBQUlzQixRQUFRLENBQUMsR0FBRztZQUNkLElBQU1KLGFBQWFGLFdBQVcsQ0FBQ00sTUFBTTtZQUVyQ3RCLGVBQWVrQixZQUFhLEdBQUc7UUFDakM7UUFFQSxPQUFPbEI7SUFDVDtBQUNGO0FBRUEsU0FBU0csaUJBQWlCUCxTQUFTO0lBQ2pDQSxZQUFZQSxVQUFVd0IsV0FBVyxJQUFLLEdBQUc7SUFFekN4QixZQUFZQSxVQUFVUSxPQUFPLENBQUMsWUFBWUUsdUJBQVk7SUFFdERWLFlBQVlBLFVBQVVRLE9BQU8sQ0FBQyxRQUFRRSx1QkFBWTtJQUVsRFYsWUFBWUEsVUFBVVEsT0FBTyxDQUFDLGNBQWNxQix1QkFBWTtJQUV4RCxPQUFPN0I7QUFDVDtBQUVBLFNBQVNqQixlQUFlSixRQUFRLEVBQUVELE9BQU87SUFDdkMsSUFBTSxBQUFFVSxlQUFpQlYsUUFBakJVLGNBQ0YsQUFBRTBDLFdBQWExQyxhQUFiMEM7SUFFUixJQUFNQyxvQkFBb0JELFNBQVN2QyxHQUFHLENBQUMsU0FBQ3lDO1FBQ3RDLElBQU1DLG1CQUFtQkQsUUFBUVIsV0FBVztRQUU1QyxPQUFPUztJQUNUO0lBRUFSLElBQUFBLGVBQU8sRUFBQzlDLFVBQVUsU0FBQ3lCO1FBQ2pCLElBQU1zQixRQUFRSyxrQkFBa0JKLFNBQVMsQ0FBQyxTQUFDQztZQUN6QyxJQUFJQSx3QkFBd0J4QixjQUFjO2dCQUN4QyxPQUFPO1lBQ1Q7UUFDRjtRQUVBLElBQUlzQixRQUFRLENBQUMsR0FBRztZQUNkLElBQU1NLFVBQVVGLFFBQVEsQ0FBQ0osTUFBTTtZQUUvQnRCLGVBQWU0QixTQUFVLEdBQUc7UUFDOUI7UUFFQSxPQUFPNUI7SUFDVDtBQUNGO0FBRUEsU0FBU3BCLG1CQUFtQkwsUUFBUSxFQUFFRCxPQUFPO0lBQzNDLElBQU0sQUFBRVUsZUFBaUJWLFFBQWpCVSxjQUNGLEFBQUU4QyxVQUFZOUMsYUFBWjhDLFNBQ0ZDLGVBQWVDLHdCQUF3QkY7SUFFN0N0QyxJQUFBQSxlQUFPLEVBQUNqQixVQUFVLFNBQUN5QixjQUFjQztRQUMvQixJQUFNZ0MsY0FBY0MsU0FBU2xDO1FBRTdCLElBQUlpQyxhQUFhO1lBQ2YsSUFBTUUsZ0JBQWdCbkMsYUFBYUksT0FBTyxDQUFDLE1BQU1xQix1QkFBWSxHQUN2RFcsYUFBYSxBQUFDLEdBQWdCLE9BQWRELGVBQWMsUUFDOUJFLGlDQUFpQ04sYUFBYU8sUUFBUSxDQUFDRixhQUN2REcsbUJBQW1CRixnQ0FBZ0MsR0FBRztZQUU1RCxJQUFJRSxrQkFBa0I7Z0JBQ3BCLElBQU1DLG9CQUFvQnZDLGFBQ3BCd0Msc0JBQXNCbEUsUUFBUSxDQUFDNEQsY0FBYyxJQUFJLEVBQUU7Z0JBRXpEbEMsY0FBYyxBQUNaLHFCQUFHdUMsMEJBQ0gscUJBQUdDO2dCQUdMLE9BQU9sRSxRQUFRLENBQUN5QixhQUFhO2dCQUM3QixPQUFPekIsUUFBUSxDQUFDNEQsY0FBYztnQkFFOUI1RCxRQUFRLENBQUM2RCxXQUFXLEdBQUduQztZQUN6QjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLFNBQVNwQixvQkFBb0JOLFFBQVEsRUFBRUQsT0FBTztJQUM1QyxJQUFNLEFBQUVVLGVBQWlCVixRQUFqQlUsY0FDRixBQUFFOEMsVUFBWTlDLGFBQVo4QyxTQUNGWSxnQkFBZ0JDLHlCQUF5QmI7SUFFL0N0QyxJQUFBQSxlQUFPLEVBQUNqQixVQUFVLFNBQUN5QixjQUFjQztRQUMvQixJQUFNZ0MsY0FBY0MsU0FBU2xDO1FBRTdCLElBQUlpQyxhQUFhO1lBQ2YsSUFBTUUsZ0JBQWdCbkMsYUFBYUksT0FBTyxDQUFDLE1BQU1xQix1QkFBWSxHQUN2RG1CLDZCQUE2QkYsY0FBY0osUUFBUSxDQUFDdEMsZUFDcEQ2QyxvQkFBb0JELDRCQUE0QixHQUFHO1lBRXpELElBQUlDLG1CQUFtQjtnQkFDckIsSUFBTUwsb0JBQW9CdkMsYUFDcEJ3QyxzQkFBc0JsRSxRQUFRLENBQUM0RCxjQUFjLElBQUksRUFBRTtnQkFFekRsQyxjQUFjLEFBQ1oscUJBQUd1QywwQkFDSCxxQkFBR0M7Z0JBR0wsT0FBT2xFLFFBQVEsQ0FBQzRELGNBQWM7Z0JBRTlCNUQsUUFBUSxDQUFDeUIsYUFBYSxHQUFHQztZQUMzQjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLFNBQVNuQixzQkFBc0JQLFFBQVEsRUFBRUQsT0FBTztJQUM5QyxJQUFNLEFBQUVVLGVBQWlCVixRQUFqQlUsY0FDRixBQUFFOEMsVUFBWTlDLGFBQVo4QyxTQUNGZ0Isa0JBQWtCQywyQkFBMkJqQjtJQUVuRHRDLElBQUFBLGVBQU8sRUFBQ2pCLFVBQVUsU0FBQ3lCLGNBQWNDO1FBQy9CLElBQU1nQyxjQUFjQyxTQUFTbEM7UUFFN0IsSUFBSWlDLGFBQWE7WUFDZixJQUFNRSxnQkFBZ0JuQyxhQUFhSSxPQUFPLENBQUMsTUFBTXFCLHVCQUFZLEdBQ3ZEdUIsdUNBQXVDRixnQkFBZ0JSLFFBQVEsQ0FBQ0gsZ0JBQ2hFYyxzQkFBc0JELHNDQUFzQyxHQUFHO1lBRXJFLElBQUlDLHFCQUFxQjtnQkFDdkIsSUFBTVQsb0JBQW9CdkMsYUFDcEJ3QyxzQkFBc0JsRSxRQUFRLENBQUM0RCxjQUFjLElBQUksRUFBRTtnQkFFekRsQyxjQUFjLEFBQ1oscUJBQUd1QywwQkFDSCxxQkFBR0M7Z0JBR0wsT0FBT2xFLFFBQVEsQ0FBQ3lCLGFBQWE7Z0JBRTdCekIsUUFBUSxDQUFDNEQsY0FBYyxHQUFHbEM7WUFDNUI7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxTQUFTOEMsMkJBQTJCakIsT0FBTztJQUN6QyxJQUFNZ0Isa0JBQWtCaEIsUUFBUW9CLE1BQU0sQ0FBQyxTQUFDSixpQkFBaUJLO1FBQ3ZELElBQU1DLGlCQUFpQkMsV0FBV0Y7UUFFbEMsSUFBSUMsZ0JBQWdCO1lBQ2xCLElBQU1FLGlCQUFpQkgsUUFBUyxHQUFHO1lBRW5DTCxnQkFBZ0I1QyxJQUFJLENBQUNvRDtRQUN2QjtRQUVBLE9BQU9SO0lBQ1QsR0FBRyxFQUFFO0lBRUwsT0FBT0E7QUFDVDtBQUVBLFNBQVNILHlCQUF5QmIsT0FBTztJQUN2QyxJQUFNWSxnQkFBZ0JaLFFBQVFvQixNQUFNLENBQUMsU0FBQ1IsZUFBZVM7UUFDbkQsSUFBTUksZUFBZXJCLFNBQVNpQjtRQUU5QixJQUFJSSxjQUFjO1lBQ2hCLElBQU1BLGdCQUFlSixRQUFTLEdBQUc7WUFFakNULGNBQWN4QyxJQUFJLENBQUNxRDtRQUNyQjtRQUVBLE9BQU9iO0lBQ1QsR0FBRyxFQUFFO0lBRUwsT0FBT0E7QUFDVDtBQUVBLFNBQVNWLHdCQUF3QkYsT0FBTztJQUN0QyxJQUFNQyxlQUFlRCxRQUFRb0IsTUFBTSxDQUFDLFNBQUNuQixjQUFjb0I7UUFDakQsSUFBTUssY0FBY0MsUUFBUU47UUFFNUIsSUFBSUssYUFBYTtZQUNmLElBQU1FLGNBQWNQLFFBQVMsR0FBRztZQUVoQ3BCLGFBQWE3QixJQUFJLENBQUN3RDtRQUNwQjtRQUVBLE9BQU8zQjtJQUNULEdBQUcsRUFBRTtJQUVMLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTc0IsV0FBV00sSUFBSTtJQUN0QixJQUFNekUsZUFBZSxTQUFTMEUsSUFBSSxDQUFDRCxPQUM3QlAsaUJBQWlCbEUsY0FBYyxHQUFHO0lBRXhDLE9BQU9rRTtBQUNUO0FBRUEsU0FBU2xCLFNBQVN5QixJQUFJO0lBQ3BCLElBQU16RSxlQUFlLEtBQUswRSxJQUFJLENBQUNELE9BQ3pCUixTQUFTakUsY0FBYyxHQUFHO0lBRWhDLE9BQU9pRTtBQUNUO0FBRUEsU0FBU00sUUFBUUUsSUFBSTtJQUNuQixJQUFNekUsZUFBZSxTQUFTMEUsSUFBSSxDQUFDRCxPQUM3QlIsU0FBU2pFLGNBQWMsR0FBRztJQUVoQyxPQUFPaUU7QUFDVCJ9