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
            var plainText = divisionMarkdownNode.asPlainText(context), entries = entriesFromPlainTextAndIndexMatches(plainText, indexMatches);
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
function entriesFromPlainTextAndIndexMatches(plainText, indexMatches) {
    var entries;
    plainText = preparePlainText(plainText); ///
    indexMatches.forEach(function(indexMatch) {
        plainText = indexMatch.replace(plainText);
    });
    entries = plainText.split(_constants.SINGLE_SPACE);
    entries = entries.map(function(entry) {
        entry = _match.default.revert(entry); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSW5kZXhNYXRjaCBmcm9tIFwiLi4vaW5kZXgvbWF0Y2hcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmb3JFYWNoLCBtYXBLZXlzLCBtYXBWYWx1ZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29iamVjdFwiO1xuXG5jb25zdCB7IGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXAgPSBjcmVhdGVJbmRleE1hcChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJlbW92ZUlnbm9yZWRXb3JkcyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgYWRqdXN0UHJvcGVyTm91bnMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFBsdXJhbFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFNpbmd1bGFyUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgY29tcHJlc3NQYWdlTnVtYmVycyhpbmRleE1hcCk7XG5cbiAgcmV0dXJuIGluZGV4TWFwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRleE1hcChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXAgPSB7fTtcblxuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwaHJhc2VzIH0gPSBpbmRleE9wdGlvbnMsXG4gICAgICAgIGluZGV4TWF0Y2hlcyA9IHBocmFzZXMubWFwKChwaHJhc2UpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmRleE1hdGNoID0gSW5kZXhNYXRjaC5mcm9tUGhyYXNlKHBocmFzZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5kZXhNYXRjaDtcbiAgICAgICAgfSk7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgcGFnZU51bWJlciA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmdldFBhZ2VOdW1iZXIoKTtcblxuICAgIGlmIChwYWdlTnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwbGFpblRleHQgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzRnJvbVBsYWluVGV4dEFuZEluZGV4TWF0Y2hlcyhwbGFpblRleHQsIGluZGV4TWF0Y2hlcyk7XG5cbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgbGV0IHBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbZW50cnldIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKHBhZ2VOdW1iZXJzID09PSBudWxsKSB7XG4gICAgICAgICAgcGFnZU51bWJlcnMgPSBbXTtcblxuICAgICAgICAgIGluZGV4TWFwW2VudHJ5XSA9IHBhZ2VOdW1iZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFnZU51bWJlcnMucHVzaChwYWdlTnVtYmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4TWFwO1xufVxuXG5mdW5jdGlvbiBlbnRyaWVzRnJvbVBsYWluVGV4dEFuZEluZGV4TWF0Y2hlcyhwbGFpblRleHQsIGluZGV4TWF0Y2hlcykge1xuICBsZXQgZW50cmllcztcblxuICBwbGFpblRleHQgPSBwcmVwYXJlUGxhaW5UZXh0KHBsYWluVGV4dCk7ICAvLy9cblxuICBpbmRleE1hdGNoZXMuZm9yRWFjaCgoaW5kZXhNYXRjaCkgPT4ge1xuICAgIHBsYWluVGV4dCA9IGluZGV4TWF0Y2gucmVwbGFjZShwbGFpblRleHQpO1xuICB9KTtcblxuICBlbnRyaWVzID0gcGxhaW5UZXh0LnNwbGl0KFNJTkdMRV9TUEFDRSk7XG5cbiAgZW50cmllcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4ge1xuICAgIGVudHJ5ID0gSW5kZXhNYXRjaC5yZXZlcnQoZW50cnkpOyAgLy8vXG5cbiAgICByZXR1cm4gZW50cnk7XG4gIH0pO1xuXG4gIHJldHVybiBlbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBjb21wcmVzc1BhZ2VOdW1iZXJzKGluZGV4TWFwKSB7XG4gIG1hcFZhbHVlcyhpbmRleE1hcCwgKGVudHJ5LCBwYWdlTnVtYmVycykgPT4ge1xuICAgIGNvbXByZXNzKHBhZ2VOdW1iZXJzLCAocGFnZU51bWJlckEsIHBhZ2VOdW1iZXJCKSA9PiB7XG4gICAgICBpZiAocGFnZU51bWJlckEgPT09IHBhZ2VOdW1iZXJCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFnZU51bWJlcnMuc29ydCgpO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXJzO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSWdub3JlZFdvcmRzKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGlnbm9yZWRXb3JkcyB9ID0gaW5kZXhPcHRpb25zO1xuXG4gIGlnbm9yZWRXb3Jkcy5mb3JFYWNoKChpZ25vcmVkV29yZCkgPT4ge1xuICAgIGRlbGV0ZSBpbmRleE1hcFtpZ25vcmVkV29yZF07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RQcm9wZXJOb3VucyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwcm9wZXJOb3VucyB9ID0gaW5kZXhPcHRpb25zO1xuXG4gIGNvbnN0IGxvd2VyQ2FzZVByb3Blck5vdW5zID0gcHJvcGVyTm91bnMubWFwKChwcm9wZXJOb3VuKSA9PiB7XG4gICAgY29uc3QgbG93ZXJDYXNlUHJvcGVyTm91biA9IHByb3Blck5vdW4udG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiBsb3dlckNhc2VQcm9wZXJOb3VuO1xuICB9KTtcblxuICBtYXBLZXlzKGluZGV4TWFwLCAoZW50cnkpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGxvd2VyQ2FzZVByb3Blck5vdW5zLmZpbmRJbmRleCgobG93ZXJDYXNlUHJvcGVyTm1hZSkgPT4ge1xuICAgICAgaWYgKGxvd2VyQ2FzZVByb3Blck5tYWUgPT09IGVudHJ5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHByb3Blck5vdW4gPSBwcm9wZXJOb3Vuc1tpbmRleF07XG5cbiAgICAgIGVudHJ5ID0gcHJvcGVyTm91bjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlbnRyeTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVQbGFpblRleHQocGxhaW5UZXh0KSB7XG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC50b0xvd2VyQ2FzZSgpOyAgLy8vXG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoL1teYS16IF0vZywgU0lOR0xFX1NQQUNFKTtcblxuICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSgvXFxzKy9nLCBTSU5HTEVfU1BBQ0UpO1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBwbGFpblRleHQ7XG59XG5cbmZ1bmN0aW9uIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGFjcm9ueW1zIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgY29uc3QgbG93ZXJDYXNlQWNyb255bXMgPSBhY3Jvbnltcy5tYXAoKGFjcm9ueW0pID0+IHtcbiAgICBjb25zdCBsb3dlckNhc2VBY3JvbnltID0gYWNyb255bS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIGxvd2VyQ2FzZUFjcm9ueW07XG4gIH0pO1xuXG4gIG1hcEtleXMoaW5kZXhNYXAsIChlbnRyeSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gbG93ZXJDYXNlQWNyb255bXMuZmluZEluZGV4KChsb3dlckNhc2VQcm9wZXJObWFlKSA9PiB7XG4gICAgICBpZiAobG93ZXJDYXNlUHJvcGVyTm1hZSA9PT0gZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgYWNyb255bSA9IGFjcm9ueW1zW2luZGV4XTtcblxuICAgICAgZW50cnkgPSBhY3JvbnltOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVudHJ5O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0TWl4ZWRQbHVyYWxzKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHBsdXJhbHMgfSA9IGluZGV4T3B0aW9ucyxcbiAgICAgICAgbWl4ZWRQbHVyYWxzID0gbWl4ZWRQbHVyYWxzRnJvbVBsdXJhbHMocGx1cmFscyk7XG5cbiAgZm9yRWFjaChpbmRleE1hcCwgKGVudHJ5LCBwYWdlTnVtYmVycykgPT4ge1xuICAgIGNvbnN0IGVudHJ5UGx1cmFsID0gaXNQbHVyYWwoZW50cnkpO1xuXG4gICAgaWYgKGVudHJ5UGx1cmFsKSB7XG4gICAgICBjb25zdCBzaW5ndWxhckVudHJ5ID0gZW50cnkucmVwbGFjZSgvcyQvLCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgICAgbWl4ZWRFbnRyeSA9IGAke3Npbmd1bGFyRW50cnl9KHMpYCxcbiAgICAgICAgICAgIG1peGVkUGx1cmFsc0luY2x1ZGVzTWl4ZWRFbnRyeSA9IG1peGVkUGx1cmFscy5pbmNsdWRlcyhtaXhlZEVudHJ5KSxcbiAgICAgICAgICAgIGVudHJ5TWl4ZWRQbHVyYWwgPSBtaXhlZFBsdXJhbHNJbmNsdWRlc01peGVkRW50cnk7IC8vL1xuXG4gICAgICBpZiAoZW50cnlNaXhlZFBsdXJhbCkge1xuICAgICAgICBjb25zdCBwbHVyYWxQYWdlTnVtYmVycyA9IHBhZ2VOdW1iZXJzLCAgLy8vXG4gICAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBpbmRleE1hcFtzaW5ndWxhckVudHJ5XSB8fCBbXTtcblxuICAgICAgICBwYWdlTnVtYmVycyA9IFsgLy8vXG4gICAgICAgICAgLi4ucGx1cmFsUGFnZU51bWJlcnMsXG4gICAgICAgICAgLi4uc2luZ3VsYXJQYWdlTnVtYmVyc1xuICAgICAgICBdO1xuXG4gICAgICAgIGRlbGV0ZSBpbmRleE1hcFtlbnRyeV07XG4gICAgICAgIGRlbGV0ZSBpbmRleE1hcFtzaW5ndWxhckVudHJ5XTtcblxuICAgICAgICBpbmRleE1hcFttaXhlZEVudHJ5XSA9IHBhZ2VOdW1iZXJzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdFBsdXJhbFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgcGx1cmFscyB9ID0gaW5kZXhPcHRpb25zLFxuICAgICAgICBwbHVyYWxQbHVyYWxzID0gcGx1cmFsUGx1cmFsc0Zyb21QbHVyYWxzKHBsdXJhbHMpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsIChlbnRyeSwgcGFnZU51bWJlcnMpID0+IHtcbiAgICBjb25zdCBlbnRyeVBsdXJhbCA9IGlzUGx1cmFsKGVudHJ5KTtcblxuICAgIGlmIChlbnRyeVBsdXJhbCkge1xuICAgICAgY29uc3Qgc2luZ3VsYXJFbnRyeSA9IGVudHJ5LnJlcGxhY2UoL3MkLywgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICAgIHBsdXJhbFBsdXJhbHNJbmNsdWRlc0VudHJ5ID0gcGx1cmFsUGx1cmFscy5pbmNsdWRlcyhlbnRyeSksXG4gICAgICAgICAgICBlbnRyeVBsdXJhbFBsdXJhbCA9IHBsdXJhbFBsdXJhbHNJbmNsdWRlc0VudHJ5OyAvLy9cblxuICAgICAgaWYgKGVudHJ5UGx1cmFsUGx1cmFsKSB7XG4gICAgICAgIGNvbnN0IHBsdXJhbFBhZ2VOdW1iZXJzID0gcGFnZU51bWJlcnMsICAvLy9cbiAgICAgICAgICAgICAgc2luZ3VsYXJQYWdlTnVtYmVycyA9IGluZGV4TWFwW3Npbmd1bGFyRW50cnldIHx8IFtdO1xuXG4gICAgICAgIHBhZ2VOdW1iZXJzID0gWyAvLy9cbiAgICAgICAgICAuLi5wbHVyYWxQYWdlTnVtYmVycyxcbiAgICAgICAgICAuLi5zaW5ndWxhclBhZ2VOdW1iZXJzXG4gICAgICAgIF07XG5cbiAgICAgICAgZGVsZXRlIGluZGV4TWFwW3Npbmd1bGFyRW50cnldO1xuXG4gICAgICAgIGluZGV4TWFwW2VudHJ5XSA9IHBhZ2VOdW1iZXJzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdFNpbmd1bGFyUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwbHVyYWxzIH0gPSBpbmRleE9wdGlvbnMsXG4gICAgICAgIHNpbmd1bGFyUGx1cmFscyA9IHNpbmd1bGFyUGx1cmFsc0Zyb21QbHVyYWxzKHBsdXJhbHMpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsIChlbnRyeSwgcGFnZU51bWJlcnMpID0+IHtcbiAgICBjb25zdCBlbnRyeVBsdXJhbCA9IGlzUGx1cmFsKGVudHJ5KTtcblxuICAgIGlmIChlbnRyeVBsdXJhbCkge1xuICAgICAgY29uc3Qgc2luZ3VsYXJFbnRyeSA9IGVudHJ5LnJlcGxhY2UoL3MkLywgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICAgIHNpbmd1bGFyUGx1cmFsc0luY2x1ZGVzU2luZ3VsYXJFbnRyeSA9IHNpbmd1bGFyUGx1cmFscy5pbmNsdWRlcyhzaW5ndWxhckVudHJ5KSxcbiAgICAgICAgICAgIGVudHJ5U2luZ3VsYXJQbHVyYWwgPSBzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1Npbmd1bGFyRW50cnk7IC8vL1xuXG4gICAgICBpZiAoZW50cnlTaW5ndWxhclBsdXJhbCkge1xuICAgICAgICBjb25zdCBwbHVyYWxQYWdlTnVtYmVycyA9IHBhZ2VOdW1iZXJzLCAgLy8vXG4gICAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBpbmRleE1hcFtzaW5ndWxhckVudHJ5XSB8fCBbXTtcblxuICAgICAgICBwYWdlTnVtYmVycyA9IFsgLy8vXG4gICAgICAgICAgLi4ucGx1cmFsUGFnZU51bWJlcnMsXG4gICAgICAgICAgLi4uc2luZ3VsYXJQYWdlTnVtYmVyc1xuICAgICAgICBdO1xuXG4gICAgICAgIGRlbGV0ZSBpbmRleE1hcFtlbnRyeV07XG5cbiAgICAgICAgaW5kZXhNYXBbc2luZ3VsYXJFbnRyeV0gPSBwYWdlTnVtYmVycztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaW5ndWxhclBsdXJhbHNGcm9tUGx1cmFscyhwbHVyYWxzKSB7XG4gIGNvbnN0IHNpbmd1bGFyUGx1cmFscyA9IHBsdXJhbHMucmVkdWNlKChzaW5ndWxhclBsdXJhbHMsIHBsdXJhbCkgPT4ge1xuICAgIGNvbnN0IHBsdXJhbFNpbmd1bGFyID0gaXNTaW5ndWxhcihwbHVyYWwpO1xuXG4gICAgaWYgKHBsdXJhbFNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBzaW5ndWxhclBsdXJhbCA9IHBsdXJhbDsgIC8vL1xuXG4gICAgICBzaW5ndWxhclBsdXJhbHMucHVzaChzaW5ndWxhclBsdXJhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyUGx1cmFscztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBzaW5ndWxhclBsdXJhbHM7XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFBsdXJhbHNGcm9tUGx1cmFscyhwbHVyYWxzKSB7XG4gIGNvbnN0IHBsdXJhbFBsdXJhbHMgPSBwbHVyYWxzLnJlZHVjZSgocGx1cmFsUGx1cmFscywgcGx1cmFsKSA9PiB7XG4gICAgY29uc3QgcGx1cmFsUGx1cmFsID0gaXNQbHVyYWwocGx1cmFsKTtcblxuICAgIGlmIChwbHVyYWxQbHVyYWwpIHtcbiAgICAgIGNvbnN0IHBsdXJhbFBsdXJhbCA9IHBsdXJhbDsgIC8vL1xuXG4gICAgICBwbHVyYWxQbHVyYWxzLnB1c2gocGx1cmFsUGx1cmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGx1cmFsUGx1cmFscztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBwbHVyYWxQbHVyYWxzO1xufVxuXG5mdW5jdGlvbiBtaXhlZFBsdXJhbHNGcm9tUGx1cmFscyhwbHVyYWxzKSB7XG4gIGNvbnN0IG1peGVkUGx1cmFscyA9IHBsdXJhbHMucmVkdWNlKChtaXhlZFBsdXJhbHMsIHBsdXJhbCkgPT4ge1xuICAgIGNvbnN0IHBsdXJhbE1peGVkID0gaXNNaXhlZChwbHVyYWwpO1xuXG4gICAgaWYgKHBsdXJhbE1peGVkKSB7XG4gICAgICBjb25zdCBtaXhlZFBsdXJhbCA9IHBsdXJhbDsgIC8vL1xuXG4gICAgICBtaXhlZFBsdXJhbHMucHVzaChtaXhlZFBsdXJhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1peGVkUGx1cmFscztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBtaXhlZFBsdXJhbHM7XG59XG5cbmZ1bmN0aW9uIGlzU2luZ3VsYXIodGV4dCkge1xuICBjb25zdCBpbmRleE1hdGNoZXMgPSAvW15zKV0kLy50ZXN0KHRleHQpLFxuICAgICAgICBwbHVyYWxTaW5ndWxhciA9IGluZGV4TWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIHBsdXJhbFNpbmd1bGFyO1xufVxuXG5mdW5jdGlvbiBpc1BsdXJhbCh0ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWF0Y2hlcyA9IC9zJC8udGVzdCh0ZXh0KSxcbiAgICAgICAgcGx1cmFsID0gaW5kZXhNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gcGx1cmFsO1xufVxuXG5mdW5jdGlvbiBpc01peGVkKHRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXRjaGVzID0gL1xcKHNcXCkkLy50ZXN0KHRleHQpLFxuICAgICAgICBwbHVyYWwgPSBpbmRleE1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBwbHVyYWw7XG59XG4iXSwibmFtZXMiOlsiaW5kZXhNYXBGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImNvbnRleHQiLCJpbmRleE1hcCIsImNyZWF0ZUluZGV4TWFwIiwicmVtb3ZlSWdub3JlZFdvcmRzIiwiYWRqdXN0UHJvcGVyTm91bnMiLCJhZGp1c3RBY3JvbnltcyIsImFkanVzdE1peGVkUGx1cmFscyIsImFkanVzdFBsdXJhbFBsdXJhbHMiLCJhZGp1c3RTaW5ndWxhclBsdXJhbHMiLCJjb21wcmVzc1BhZ2VOdW1iZXJzIiwiaW5kZXhPcHRpb25zIiwicGhyYXNlcyIsImluZGV4TWF0Y2hlcyIsIm1hcCIsInBocmFzZSIsImluZGV4TWF0Y2giLCJJbmRleE1hdGNoIiwiZnJvbVBocmFzZSIsImZvckVhY2giLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInBhZ2VOdW1iZXIiLCJnZXRQYWdlTnVtYmVyIiwicGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJlbnRyaWVzIiwiZW50cmllc0Zyb21QbGFpblRleHRBbmRJbmRleE1hdGNoZXMiLCJlbnRyeSIsInBhZ2VOdW1iZXJzIiwicHVzaCIsInByZXBhcmVQbGFpblRleHQiLCJyZXBsYWNlIiwic3BsaXQiLCJTSU5HTEVfU1BBQ0UiLCJyZXZlcnQiLCJtYXBWYWx1ZXMiLCJwYWdlTnVtYmVyQSIsInBhZ2VOdW1iZXJCIiwic29ydCIsImlnbm9yZWRXb3JkcyIsImlnbm9yZWRXb3JkIiwicHJvcGVyTm91bnMiLCJsb3dlckNhc2VQcm9wZXJOb3VucyIsInByb3Blck5vdW4iLCJsb3dlckNhc2VQcm9wZXJOb3VuIiwidG9Mb3dlckNhc2UiLCJtYXBLZXlzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJsb3dlckNhc2VQcm9wZXJObWFlIiwiRU1QVFlfU1RSSU5HIiwiYWNyb255bXMiLCJsb3dlckNhc2VBY3JvbnltcyIsImFjcm9ueW0iLCJsb3dlckNhc2VBY3JvbnltIiwicGx1cmFscyIsIm1peGVkUGx1cmFscyIsIm1peGVkUGx1cmFsc0Zyb21QbHVyYWxzIiwiZW50cnlQbHVyYWwiLCJpc1BsdXJhbCIsInNpbmd1bGFyRW50cnkiLCJtaXhlZEVudHJ5IiwibWl4ZWRQbHVyYWxzSW5jbHVkZXNNaXhlZEVudHJ5IiwiaW5jbHVkZXMiLCJlbnRyeU1peGVkUGx1cmFsIiwicGx1cmFsUGFnZU51bWJlcnMiLCJzaW5ndWxhclBhZ2VOdW1iZXJzIiwicGx1cmFsUGx1cmFscyIsInBsdXJhbFBsdXJhbHNGcm9tUGx1cmFscyIsInBsdXJhbFBsdXJhbHNJbmNsdWRlc0VudHJ5IiwiZW50cnlQbHVyYWxQbHVyYWwiLCJzaW5ndWxhclBsdXJhbHMiLCJzaW5ndWxhclBsdXJhbHNGcm9tUGx1cmFscyIsInNpbmd1bGFyUGx1cmFsc0luY2x1ZGVzU2luZ3VsYXJFbnRyeSIsImVudHJ5U2luZ3VsYXJQbHVyYWwiLCJyZWR1Y2UiLCJwbHVyYWwiLCJwbHVyYWxTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJzaW5ndWxhclBsdXJhbCIsInBsdXJhbFBsdXJhbCIsInBsdXJhbE1p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