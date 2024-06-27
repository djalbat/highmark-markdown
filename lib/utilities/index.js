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
var _phraseMatcher = /*#__PURE__*/ _interop_require_default(require("../index/phraseMatcher"));
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
    var indexOptions = context.indexOptions, phrases = indexOptions.phrases, phraseMatchers = phrases.map(function(phrase) {
        var phraseMatcher = _phraseMatcher.default.fromPhrase(phrase);
        return phraseMatcher;
    });
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        var pageNumber = divisionMarkdownNode.getPageNumber();
        if (pageNumber !== null) {
            var plainText = divisionMarkdownNode.asPlainText(context), entries = entriesFromPlainTextAndPhraseMatchers(plainText, phraseMatchers);
            entries.forEach(function(entry) {
                var pageNumbers = indexMap[entry] || null;
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
function entriesFromPlainTextAndPhraseMatchers(plainText, phraseMatchers) {
    var entries;
    plainText = preparePlainText(plainText); ///
    phraseMatchers.forEach(function(phraseMatcher) {
        plainText = phraseMatcher.replace(plainText);
    });
    entries = plainText.split(_constants.SINGLE_SPACE);
    entries = entries.map(function(entry) {
        entry = _phraseMatcher.default.revert(entry); ///
        return entry;
    });
    return entries;
}
function compressPageNumbers(indexMap) {
    (0, _object.mapValues)(indexMap, function(entry, pageNumbers) {
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
    (0, _object.mapKeys)(indexMap, function(entry) {
        var index = lowerCaseProperNouns.findIndex(function(lowerCaseProperNmae) {
            if (lowerCaseProperNmae === entry) {
                return true;
            }
        });
        if (index > -1) {
            var properNoun = properNouns[index];
            entry = properNoun; ///
        }
        return entry;
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
    (0, _object.mapKeys)(indexMap, function(entry) {
        var index = lowerCaseAcronyms.findIndex(function(lowerCaseProperNmae) {
            if (lowerCaseProperNmae === entry) {
                return true;
            }
        });
        if (index > -1) {
            var acronym = acronyms[index];
            entry = acronym; ///
        }
        return entry;
    });
}
function adjustMixedPlurals(indexMap, context) {
    var indexOptions = context.indexOptions, plurals = indexOptions.plurals, mixedPlurals = mixedPluralsFromPlurals(plurals);
    (0, _object.forEach)(indexMap, function(entry, pageNumbers) {
        var entryPlural = isPlural(entry);
        if (entryPlural) {
            var singularEntry = entry.replace(/s$/, _constants.EMPTY_STRING), mixedEntry = "".concat(singularEntry, "(s)"), mixedPluralsIncludesMixedEntry = mixedPlurals.includes(mixedEntry), entryMixedPlural = mixedPluralsIncludesMixedEntry; ///
            if (entryMixedPlural) {
                var pluralPageNumbers = pageNumbers, singularPageNumbers = indexMap[singularEntry] || [];
                pageNumbers = _to_consumable_array(pluralPageNumbers).concat(_to_consumable_array(singularPageNumbers));
                delete indexMap[entry];
                delete indexMap[singularEntry];
                indexMap[mixedEntry] = pageNumbers;
            }
        }
    });
}
function adjustPluralPlurals(indexMap, context) {
    var indexOptions = context.indexOptions, plurals = indexOptions.plurals, pluralPlurals = pluralPluralsFromPlurals(plurals);
    (0, _object.forEach)(indexMap, function(entry, pageNumbers) {
        var entryPlural = isPlural(entry);
        if (entryPlural) {
            var singularEntry = entry.replace(/s$/, _constants.EMPTY_STRING), pluralPluralsIncludesEntry = pluralPlurals.includes(entry), entryPluralPlural = pluralPluralsIncludesEntry; ///
            if (entryPluralPlural) {
                var pluralPageNumbers = pageNumbers, singularPageNumbers = indexMap[singularEntry] || [];
                pageNumbers = _to_consumable_array(pluralPageNumbers).concat(_to_consumable_array(singularPageNumbers));
                delete indexMap[singularEntry];
                indexMap[entry] = pageNumbers;
            }
        }
    });
}
function adjustSingularPlurals(indexMap, context) {
    var indexOptions = context.indexOptions, plurals = indexOptions.plurals, singularPlurals = singularPluralsFromPlurals(plurals);
    (0, _object.forEach)(indexMap, function(entry, pageNumbers) {
        var entryPlural = isPlural(entry);
        if (entryPlural) {
            var singularEntry = entry.replace(/s$/, _constants.EMPTY_STRING), singularPluralsIncludesSingularEntry = singularPlurals.includes(singularEntry), entrySingularPlural = singularPluralsIncludesSingularEntry; ///
            if (entrySingularPlural) {
                var pluralPageNumbers = pageNumbers, singularPageNumbers = indexMap[singularEntry] || [];
                pageNumbers = _to_consumable_array(pluralPageNumbers).concat(_to_consumable_array(singularPageNumbers));
                delete indexMap[entry];
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
    var matches = /[^s)]$/.test(text), pluralSingular = matches; ///
    return pluralSingular;
}
function isPlural(text) {
    var matches = /s$/.test(text), plural = matches; ///
    return plural;
}
function isMixed(text) {
    var matches = /\(s\)$/.test(text), plural = matches; ///
    return plural;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUGhyYXNlTWF0Y2hlciBmcm9tIFwiLi4vaW5kZXgvcGhyYXNlTWF0Y2hlclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFNJTkdMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZvckVhY2gsIG1hcEtleXMsIG1hcFZhbHVlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhNYXBGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBpbmRleE1hcCA9IGNyZWF0ZUluZGV4TWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmVtb3ZlSWdub3JlZFdvcmRzKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBhZGp1c3RQcm9wZXJOb3VucyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgYWRqdXN0QWNyb255bXMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdE1peGVkUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgYWRqdXN0UGx1cmFsUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgYWRqdXN0U2luZ3VsYXJQbHVyYWxzKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBjb21wcmVzc1BhZ2VOdW1iZXJzKGluZGV4TWFwKTtcblxuICByZXR1cm4gaW5kZXhNYXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4TWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBpbmRleE1hcCA9IHt9O1xuXG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHBocmFzZXMgfSA9IGluZGV4T3B0aW9ucyxcbiAgICAgICAgcGhyYXNlTWF0Y2hlcnMgPSBwaHJhc2VzLm1hcCgocGhyYXNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGhyYXNlTWF0Y2hlciA9IFBocmFzZU1hdGNoZXIuZnJvbVBocmFzZShwaHJhc2UpO1xuXG4gICAgICAgICAgcmV0dXJuIHBocmFzZU1hdGNoZXI7XG4gICAgICAgIH0pO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG5cbiAgICBpZiAocGFnZU51bWJlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGxhaW5UZXh0ID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0Zyb21QbGFpblRleHRBbmRQaHJhc2VNYXRjaGVycyhwbGFpblRleHQsIHBocmFzZU1hdGNoZXJzKTtcblxuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBsZXQgcGFnZU51bWJlcnMgPSBpbmRleE1hcFtlbnRyeV0gfHwgbnVsbDtcblxuICAgICAgICBpZiAocGFnZU51bWJlcnMgPT09IG51bGwpIHtcbiAgICAgICAgICBwYWdlTnVtYmVycyA9IFtdO1xuXG4gICAgICAgICAgaW5kZXhNYXBbZW50cnldID0gcGFnZU51bWJlcnM7XG4gICAgICAgIH1cblxuICAgICAgICBwYWdlTnVtYmVycy5wdXNoKHBhZ2VOdW1iZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXhNYXA7XG59XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUGxhaW5UZXh0QW5kUGhyYXNlTWF0Y2hlcnMocGxhaW5UZXh0LCBwaHJhc2VNYXRjaGVycykge1xuICBsZXQgZW50cmllcztcblxuICBwbGFpblRleHQgPSBwcmVwYXJlUGxhaW5UZXh0KHBsYWluVGV4dCk7ICAvLy9cblxuICBwaHJhc2VNYXRjaGVycy5mb3JFYWNoKChwaHJhc2VNYXRjaGVyKSA9PiB7XG4gICAgcGxhaW5UZXh0ID0gcGhyYXNlTWF0Y2hlci5yZXBsYWNlKHBsYWluVGV4dCk7XG4gIH0pO1xuXG4gIGVudHJpZXMgPSBwbGFpblRleHQuc3BsaXQoU0lOR0xFX1NQQUNFKTtcblxuICBlbnRyaWVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiB7XG4gICAgZW50cnkgPSBQaHJhc2VNYXRjaGVyLnJldmVydChlbnRyeSk7ICAvLy9cblxuICAgIHJldHVybiBlbnRyeTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVudHJpZXM7XG59XG5cbmZ1bmN0aW9uIGNvbXByZXNzUGFnZU51bWJlcnMoaW5kZXhNYXApIHtcbiAgbWFwVmFsdWVzKGluZGV4TWFwLCAoZW50cnksIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29tcHJlc3MocGFnZU51bWJlcnMsIChwYWdlTnVtYmVyQSwgcGFnZU51bWJlckIpID0+IHtcbiAgICAgIGlmIChwYWdlTnVtYmVyQSA9PT0gcGFnZU51bWJlckIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYWdlTnVtYmVycy5zb3J0KCk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlcnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJZ25vcmVkV29yZHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgaWdub3JlZFdvcmRzIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgaWdub3JlZFdvcmRzLmZvckVhY2goKGlnbm9yZWRXb3JkKSA9PiB7XG4gICAgZGVsZXRlIGluZGV4TWFwW2lnbm9yZWRXb3JkXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdFByb3Blck5vdW5zKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHByb3Blck5vdW5zIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgY29uc3QgbG93ZXJDYXNlUHJvcGVyTm91bnMgPSBwcm9wZXJOb3Vucy5tYXAoKHByb3Blck5vdW4pID0+IHtcbiAgICBjb25zdCBsb3dlckNhc2VQcm9wZXJOb3VuID0gcHJvcGVyTm91bi50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIGxvd2VyQ2FzZVByb3Blck5vdW47XG4gIH0pO1xuXG4gIG1hcEtleXMoaW5kZXhNYXAsIChlbnRyeSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gbG93ZXJDYXNlUHJvcGVyTm91bnMuZmluZEluZGV4KChsb3dlckNhc2VQcm9wZXJObWFlKSA9PiB7XG4gICAgICBpZiAobG93ZXJDYXNlUHJvcGVyTm1hZSA9PT0gZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgcHJvcGVyTm91biA9IHByb3Blck5vdW5zW2luZGV4XTtcblxuICAgICAgZW50cnkgPSBwcm9wZXJOb3VuOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVudHJ5O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVBsYWluVGV4dChwbGFpblRleHQpIHtcbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnRvTG93ZXJDYXNlKCk7ICAvLy9cblxuICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSgvW15hLXogXS9nLCBTSU5HTEVfU1BBQ0UpO1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9cXHMrL2csIFNJTkdMRV9TUEFDRSk7XG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoL15cXHMrfFxccyskL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHBsYWluVGV4dDtcbn1cblxuZnVuY3Rpb24gYWRqdXN0QWNyb255bXMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgYWNyb255bXMgfSA9IGluZGV4T3B0aW9ucztcblxuICBjb25zdCBsb3dlckNhc2VBY3JvbnltcyA9IGFjcm9ueW1zLm1hcCgoYWNyb255bSkgPT4ge1xuICAgIGNvbnN0IGxvd2VyQ2FzZUFjcm9ueW0gPSBhY3JvbnltLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gbG93ZXJDYXNlQWNyb255bTtcbiAgfSk7XG5cbiAgbWFwS2V5cyhpbmRleE1hcCwgKGVudHJ5KSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBsb3dlckNhc2VBY3Jvbnltcy5maW5kSW5kZXgoKGxvd2VyQ2FzZVByb3Blck5tYWUpID0+IHtcbiAgICAgIGlmIChsb3dlckNhc2VQcm9wZXJObWFlID09PSBlbnRyeSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBhY3JvbnltID0gYWNyb255bXNbaW5kZXhdO1xuXG4gICAgICBlbnRyeSA9IGFjcm9ueW07ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZW50cnk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgcGx1cmFscyB9ID0gaW5kZXhPcHRpb25zLFxuICAgICAgICBtaXhlZFBsdXJhbHMgPSBtaXhlZFBsdXJhbHNGcm9tUGx1cmFscyhwbHVyYWxzKTtcblxuICBmb3JFYWNoKGluZGV4TWFwLCAoZW50cnksIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29uc3QgZW50cnlQbHVyYWwgPSBpc1BsdXJhbChlbnRyeSk7XG5cbiAgICBpZiAoZW50cnlQbHVyYWwpIHtcbiAgICAgIGNvbnN0IHNpbmd1bGFyRW50cnkgPSBlbnRyeS5yZXBsYWNlKC9zJC8sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgICBtaXhlZEVudHJ5ID0gYCR7c2luZ3VsYXJFbnRyeX0ocylgLFxuICAgICAgICAgICAgbWl4ZWRQbHVyYWxzSW5jbHVkZXNNaXhlZEVudHJ5ID0gbWl4ZWRQbHVyYWxzLmluY2x1ZGVzKG1peGVkRW50cnkpLFxuICAgICAgICAgICAgZW50cnlNaXhlZFBsdXJhbCA9IG1peGVkUGx1cmFsc0luY2x1ZGVzTWl4ZWRFbnRyeTsgLy8vXG5cbiAgICAgIGlmIChlbnRyeU1peGVkUGx1cmFsKSB7XG4gICAgICAgIGNvbnN0IHBsdXJhbFBhZ2VOdW1iZXJzID0gcGFnZU51bWJlcnMsICAvLy9cbiAgICAgICAgICAgICAgc2luZ3VsYXJQYWdlTnVtYmVycyA9IGluZGV4TWFwW3Npbmd1bGFyRW50cnldIHx8IFtdO1xuXG4gICAgICAgIHBhZ2VOdW1iZXJzID0gWyAvLy9cbiAgICAgICAgICAuLi5wbHVyYWxQYWdlTnVtYmVycyxcbiAgICAgICAgICAuLi5zaW5ndWxhclBhZ2VOdW1iZXJzXG4gICAgICAgIF07XG5cbiAgICAgICAgZGVsZXRlIGluZGV4TWFwW2VudHJ5XTtcbiAgICAgICAgZGVsZXRlIGluZGV4TWFwW3Npbmd1bGFyRW50cnldO1xuXG4gICAgICAgIGluZGV4TWFwW21peGVkRW50cnldID0gcGFnZU51bWJlcnM7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0UGx1cmFsUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwbHVyYWxzIH0gPSBpbmRleE9wdGlvbnMsXG4gICAgICAgIHBsdXJhbFBsdXJhbHMgPSBwbHVyYWxQbHVyYWxzRnJvbVBsdXJhbHMocGx1cmFscyk7XG5cbiAgZm9yRWFjaChpbmRleE1hcCwgKGVudHJ5LCBwYWdlTnVtYmVycykgPT4ge1xuICAgIGNvbnN0IGVudHJ5UGx1cmFsID0gaXNQbHVyYWwoZW50cnkpO1xuXG4gICAgaWYgKGVudHJ5UGx1cmFsKSB7XG4gICAgICBjb25zdCBzaW5ndWxhckVudHJ5ID0gZW50cnkucmVwbGFjZSgvcyQvLCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgICAgcGx1cmFsUGx1cmFsc0luY2x1ZGVzRW50cnkgPSBwbHVyYWxQbHVyYWxzLmluY2x1ZGVzKGVudHJ5KSxcbiAgICAgICAgICAgIGVudHJ5UGx1cmFsUGx1cmFsID0gcGx1cmFsUGx1cmFsc0luY2x1ZGVzRW50cnk7IC8vL1xuXG4gICAgICBpZiAoZW50cnlQbHVyYWxQbHVyYWwpIHtcbiAgICAgICAgY29uc3QgcGx1cmFsUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgICBzaW5ndWxhclBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbc2luZ3VsYXJFbnRyeV0gfHwgW107XG5cbiAgICAgICAgcGFnZU51bWJlcnMgPSBbIC8vL1xuICAgICAgICAgIC4uLnBsdXJhbFBhZ2VOdW1iZXJzLFxuICAgICAgICAgIC4uLnNpbmd1bGFyUGFnZU51bWJlcnNcbiAgICAgICAgXTtcblxuICAgICAgICBkZWxldGUgaW5kZXhNYXBbc2luZ3VsYXJFbnRyeV07XG5cbiAgICAgICAgaW5kZXhNYXBbZW50cnldID0gcGFnZU51bWJlcnM7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0U2luZ3VsYXJQbHVyYWxzKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHBsdXJhbHMgfSA9IGluZGV4T3B0aW9ucyxcbiAgICAgICAgc2luZ3VsYXJQbHVyYWxzID0gc2luZ3VsYXJQbHVyYWxzRnJvbVBsdXJhbHMocGx1cmFscyk7XG5cbiAgZm9yRWFjaChpbmRleE1hcCwgKGVudHJ5LCBwYWdlTnVtYmVycykgPT4ge1xuICAgIGNvbnN0IGVudHJ5UGx1cmFsID0gaXNQbHVyYWwoZW50cnkpO1xuXG4gICAgaWYgKGVudHJ5UGx1cmFsKSB7XG4gICAgICBjb25zdCBzaW5ndWxhckVudHJ5ID0gZW50cnkucmVwbGFjZSgvcyQvLCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgICAgc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNTaW5ndWxhckVudHJ5ID0gc2luZ3VsYXJQbHVyYWxzLmluY2x1ZGVzKHNpbmd1bGFyRW50cnkpLFxuICAgICAgICAgICAgZW50cnlTaW5ndWxhclBsdXJhbCA9IHNpbmd1bGFyUGx1cmFsc0luY2x1ZGVzU2luZ3VsYXJFbnRyeTsgLy8vXG5cbiAgICAgIGlmIChlbnRyeVNpbmd1bGFyUGx1cmFsKSB7XG4gICAgICAgIGNvbnN0IHBsdXJhbFBhZ2VOdW1iZXJzID0gcGFnZU51bWJlcnMsICAvLy9cbiAgICAgICAgICAgICAgc2luZ3VsYXJQYWdlTnVtYmVycyA9IGluZGV4TWFwW3Npbmd1bGFyRW50cnldIHx8IFtdO1xuXG4gICAgICAgIHBhZ2VOdW1iZXJzID0gWyAvLy9cbiAgICAgICAgICAuLi5wbHVyYWxQYWdlTnVtYmVycyxcbiAgICAgICAgICAuLi5zaW5ndWxhclBhZ2VOdW1iZXJzXG4gICAgICAgIF07XG5cbiAgICAgICAgZGVsZXRlIGluZGV4TWFwW2VudHJ5XTtcblxuICAgICAgICBpbmRleE1hcFtzaW5ndWxhckVudHJ5XSA9IHBhZ2VOdW1iZXJzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNpbmd1bGFyUGx1cmFsc0Zyb21QbHVyYWxzKHBsdXJhbHMpIHtcbiAgY29uc3Qgc2luZ3VsYXJQbHVyYWxzID0gcGx1cmFscy5yZWR1Y2UoKHNpbmd1bGFyUGx1cmFscywgcGx1cmFsKSA9PiB7XG4gICAgY29uc3QgcGx1cmFsU2luZ3VsYXIgPSBpc1Npbmd1bGFyKHBsdXJhbCk7XG5cbiAgICBpZiAocGx1cmFsU2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHNpbmd1bGFyUGx1cmFsID0gcGx1cmFsOyAgLy8vXG5cbiAgICAgIHNpbmd1bGFyUGx1cmFscy5wdXNoKHNpbmd1bGFyUGx1cmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJQbHVyYWxzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHNpbmd1bGFyUGx1cmFscztcbn1cblxuZnVuY3Rpb24gcGx1cmFsUGx1cmFsc0Zyb21QbHVyYWxzKHBsdXJhbHMpIHtcbiAgY29uc3QgcGx1cmFsUGx1cmFscyA9IHBsdXJhbHMucmVkdWNlKChwbHVyYWxQbHVyYWxzLCBwbHVyYWwpID0+IHtcbiAgICBjb25zdCBwbHVyYWxQbHVyYWwgPSBpc1BsdXJhbChwbHVyYWwpO1xuXG4gICAgaWYgKHBsdXJhbFBsdXJhbCkge1xuICAgICAgY29uc3QgcGx1cmFsUGx1cmFsID0gcGx1cmFsOyAgLy8vXG5cbiAgICAgIHBsdXJhbFBsdXJhbHMucHVzaChwbHVyYWxQbHVyYWwpO1xuICAgIH1cblxuICAgIHJldHVybiBwbHVyYWxQbHVyYWxzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHBsdXJhbFBsdXJhbHM7XG59XG5cbmZ1bmN0aW9uIG1peGVkUGx1cmFsc0Zyb21QbHVyYWxzKHBsdXJhbHMpIHtcbiAgY29uc3QgbWl4ZWRQbHVyYWxzID0gcGx1cmFscy5yZWR1Y2UoKG1peGVkUGx1cmFscywgcGx1cmFsKSA9PiB7XG4gICAgY29uc3QgcGx1cmFsTWl4ZWQgPSBpc01peGVkKHBsdXJhbCk7XG5cbiAgICBpZiAocGx1cmFsTWl4ZWQpIHtcbiAgICAgIGNvbnN0IG1peGVkUGx1cmFsID0gcGx1cmFsOyAgLy8vXG5cbiAgICAgIG1peGVkUGx1cmFscy5wdXNoKG1peGVkUGx1cmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWl4ZWRQbHVyYWxzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG1peGVkUGx1cmFscztcbn1cblxuZnVuY3Rpb24gaXNTaW5ndWxhcih0ZXh0KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSAvW15zKV0kLy50ZXN0KHRleHQpLFxuICAgICAgICBwbHVyYWxTaW5ndWxhciA9IG1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBwbHVyYWxTaW5ndWxhcjtcbn1cblxuZnVuY3Rpb24gaXNQbHVyYWwodGV4dCkge1xuICBjb25zdCBtYXRjaGVzID0gL3MkLy50ZXN0KHRleHQpLFxuICAgICAgICBwbHVyYWwgPSBtYXRjaGVzOyAvLy9cblxuICByZXR1cm4gcGx1cmFsO1xufVxuXG5mdW5jdGlvbiBpc01peGVkKHRleHQpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IC9cXChzXFwpJC8udGVzdCh0ZXh0KSxcbiAgICAgICAgcGx1cmFsID0gbWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIHBsdXJhbDtcbn1cbiJdLCJuYW1lcyI6WyJpbmRleE1hcEZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJjb21wcmVzcyIsImFycmF5VXRpbGl0aWVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiY29udGV4dCIsImluZGV4TWFwIiwiY3JlYXRlSW5kZXhNYXAiLCJyZW1vdmVJZ25vcmVkV29yZHMiLCJhZGp1c3RQcm9wZXJOb3VucyIsImFkanVzdEFjcm9ueW1zIiwiYWRqdXN0TWl4ZWRQbHVyYWxzIiwiYWRqdXN0UGx1cmFsUGx1cmFscyIsImFkanVzdFNpbmd1bGFyUGx1cmFscyIsImNvbXByZXNzUGFnZU51bWJlcnMiLCJpbmRleE9wdGlvbnMiLCJwaHJhc2VzIiwicGhyYXNlTWF0Y2hlcnMiLCJtYXAiLCJwaHJhc2UiLCJwaHJhc2VNYXRjaGVyIiwiUGhyYXNlTWF0Y2hlciIsImZyb21QaHJhc2UiLCJmb3JFYWNoIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJwYWdlTnVtYmVyIiwiZ2V0UGFnZU51bWJlciIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwiZW50cmllcyIsImVudHJpZXNGcm9tUGxhaW5UZXh0QW5kUGhyYXNlTWF0Y2hlcnMiLCJlbnRyeSIsInBhZ2VOdW1iZXJzIiwicHVzaCIsInByZXBhcmVQbGFpblRleHQiLCJyZXBsYWNlIiwic3BsaXQiLCJTSU5HTEVfU1BBQ0UiLCJyZXZlcnQiLCJtYXBWYWx1ZXMiLCJwYWdlTnVtYmVyQSIsInBhZ2VOdW1iZXJCIiwic29ydCIsImlnbm9yZWRXb3JkcyIsImlnbm9yZWRXb3JkIiwicHJvcGVyTm91bnMiLCJsb3dlckNhc2VQcm9wZXJOb3VucyIsInByb3Blck5vdW4iLCJsb3dlckNhc2VQcm9wZXJOb3VuIiwidG9Mb3dlckNhc2UiLCJtYXBLZXlzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJsb3dlckNhc2VQcm9wZXJObWFlIiwiRU1QVFlfU1RSSU5HIiwiYWNyb255bXMiLCJsb3dlckNhc2VBY3JvbnltcyIsImFjcm9ueW0iLCJsb3dlckNhc2VBY3JvbnltIiwicGx1cmFscyIsIm1peGVkUGx1cmFscyIsIm1peGVkUGx1cmFsc0Zyb21QbHVyYWxzIiwiZW50cnlQbHVyYWwiLCJpc1BsdXJhbCIsInNpbmd1bGFyRW50cnkiLCJtaXhlZEVudHJ5IiwibWl4ZWRQbHVyYWxzSW5jbHVkZXNNaXhlZEVudHJ5IiwiaW5jbHVkZXMiLCJlbnRyeU1peGVkUGx1cmFsIiwicGx1cmFsUGFnZU51bWJlcnMiLCJzaW5ndWxhclBhZ2VOdW1iZXJzIiwicGx1cmFsUGx1cmFscyIsInBsdXJhbFBsdXJhbHNGcm9tUGx1cmFscyIsInBsdXJhbFBsdXJhbHNJbmNsdWRlc0VudHJ5IiwiZW50cnlQbHVyYWxQbHVyYWwiLCJzaW5ndWxhclBsdXJhbHMiLCJzaW5ndWxhclBsdXJhbHNGcm9tUGx1cmFscyIsInNpbmd1bGFyUGx1cmFsc0luY2x1ZGVzU2luZ3VsYXJFbnRyeSIsImVudHJ5U2luZ3VsYXJQbHVyYWwiLCJyZWR1Y2UiLCJwbHVyYWwiLCJwbHVyYWxTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJzaW5ndWxhclBsdXJhbCIsInBsdXJhbFBsdXJhbCIsInBsdXJhbE1peGVkIiwiaXNNaXhlZCIsIm1peGVkUGx1cmFsIiwidGV4dCIsIm1hdGNoZXMiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXZ0JBOzs7ZUFBQUE7Ozt5QkFUZTtvRUFFTDt5QkFFaUI7c0JBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBTSxBQUFFQyxXQUFhQyx5QkFBYyxDQUEzQkQ7QUFFRCxTQUFTRCxrQ0FBa0NHLHFCQUFxQixFQUFFQyxPQUFPO0lBQzlFLElBQU1DLFdBQVdDLGVBQWVILHVCQUF1QkM7SUFFdkRHLG1CQUFtQkYsVUFBVUQ7SUFFN0JJLGtCQUFrQkgsVUFBVUQ7SUFFNUJLLGVBQWVKLFVBQVVEO0lBRXpCTSxtQkFBbUJMLFVBQVVEO0lBRTdCTyxvQkFBb0JOLFVBQVVEO0lBRTlCUSxzQkFBc0JQLFVBQVVEO0lBRWhDUyxvQkFBb0JSO0lBRXBCLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTQyxlQUFlSCxxQkFBcUIsRUFBRUMsT0FBTztJQUNwRCxJQUFNQyxXQUFXLENBQUM7SUFFbEIsSUFBTSxBQUFFUyxlQUFpQlYsUUFBakJVLGNBQ0YsQUFBRUMsVUFBWUQsYUFBWkMsU0FDRkMsaUJBQWlCRCxRQUFRRSxHQUFHLENBQUMsU0FBQ0M7UUFDNUIsSUFBTUMsZ0JBQWdCQyxzQkFBYSxDQUFDQyxVQUFVLENBQUNIO1FBRS9DLE9BQU9DO0lBQ1Q7SUFFTmhCLHNCQUFzQm1CLE9BQU8sQ0FBQyxTQUFDQztRQUM3QixJQUFNQyxhQUFhRCxxQkFBcUJFLGFBQWE7UUFFckQsSUFBSUQsZUFBZSxNQUFNO1lBQ3ZCLElBQU1FLFlBQVlILHFCQUFxQkksV0FBVyxDQUFDdkIsVUFDN0N3QixVQUFVQyxzQ0FBc0NILFdBQVdWO1lBRWpFWSxRQUFRTixPQUFPLENBQUMsU0FBQ1E7Z0JBQ2YsSUFBSUMsY0FBYzFCLFFBQVEsQ0FBQ3lCLE1BQU0sSUFBSTtnQkFFckMsSUFBSUMsZ0JBQWdCLE1BQU07b0JBQ3hCQSxjQUFjLEVBQUU7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