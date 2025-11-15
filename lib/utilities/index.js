"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "indexMapFromIndexDirectiveHTMLNodeAndDivisionHTMLNodes", {
    enumerable: true,
    get: function() {
        return indexMapFromIndexDirectiveHTMLNodeAndDivisionHTMLNodes;
    }
});
var _occamdom = require("occam-dom");
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
var compress = _necessary.arrayUtilities.compress, isLessThan = _occamdom.nodeUtilities.isLessThan, isAncestorOf = _occamdom.nodeUtilities.isAncestorOf;
function indexMapFromIndexDirectiveHTMLNodeAndDivisionHTMLNodes(indexDirectiveHTMLNode, divisionHTMLNodes, context) {
    var indexMap = createIndexMap(indexDirectiveHTMLNode, divisionHTMLNodes, context);
    removeIgnoredWords(indexMap, context);
    adjustMixedPlurals(indexMap, context);
    adjustPluralPlurals(indexMap, context);
    adjustSingularPlurals(indexMap, context);
    adjustProperNouns(indexMap, context);
    adjustAcronyms(indexMap, context);
    compressPageNumbers(indexMap);
    return indexMap;
}
function createIndexMap(indexDirectiveHTMLNode, divisionHTMLNodes, context) {
    var indexMap = {};
    var _context_phrases = context.phrases, phrases = _context_phrases === void 0 ? [] : _context_phrases, indexMatches = phrases.map(function(phrase) {
        var indexMatch = _match.default.fromPhrase(phrase);
        return indexMatch;
    });
    divisionHTMLNodes.forEach(function(divisionHTMLNode) {
        var divisionHTMLNodeLessThanIndexDirectiveHTMLNode = isLessThan(divisionHTMLNode, indexDirectiveHTMLNode);
        if (divisionHTMLNodeLessThanIndexDirectiveHTMLNode) {
            var divisionHTMLNodeAncestorOfIndexDirectiveHTMLNode = isAncestorOf(divisionHTMLNode, indexDirectiveHTMLNode);
            if (!divisionHTMLNodeAncestorOfIndexDirectiveHTMLNode) {
                var pageNumber = divisionHTMLNode.pageNumber();
                if (pageNumber !== null) {
                    var plainText = divisionHTMLNode.asPlainText(context), wordsOrPhrases = wordsOrPhrasesFromPlainTextAndIndexMatches(plainText, indexMatches);
                    wordsOrPhrases.forEach(function(wordOrPhrase) {
                        var pageNumbers = indexMap.hasOwnProperty(wordOrPhrase) ? indexMap[wordOrPhrase] : [];
                        indexMap[wordOrPhrase] = pageNumbers;
                        pageNumbers.push(pageNumber);
                    });
                }
            }
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
    var _context_ignoredWords = context.ignoredWords, ignoredWords = _context_ignoredWords === void 0 ? [] : _context_ignoredWords;
    ignoredWords.forEach(function(ignoredWord) {
        delete indexMap[ignoredWord];
    });
}
function adjustProperNouns(indexMap, context) {
    var _context_properNouns = context.properNouns, properNouns = _context_properNouns === void 0 ? [] : _context_properNouns, lowerCaseProperNouns = properNouns.map(function(properNoun) {
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
    var _context_acronyms = context.acronyms, acronyms = _context_acronyms === void 0 ? [] : _context_acronyms, lowerCaseAcronyms = acronyms.map(function(acronym) {
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
    var _context_plurals = context.plurals, plurals = _context_plurals === void 0 ? [] : _context_plurals, mixedPlurals = reducePlurals(plurals, isMixed), pluralPlurals = mapPlurals(mixedPlurals, mixedToPlural), singularPlurals = mapPlurals(mixedPlurals, mixedToSingular);
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
    var _context_plurals = context.plurals, plurals = _context_plurals === void 0 ? [] : _context_plurals, pluralPlurals = reducePlurals(plurals, isPlural), singularPlurals = mapPlurals(pluralPlurals, pluralToSingular);
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
    var _context_plurals = context.plurals, plurals = _context_plurals === void 0 ? [] : _context_plurals, singularPlurals = reducePlurals(plurals, isSingular), pluralPlurals = mapPlurals(singularPlurals, singularToPlural);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZG9tXCJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSW5kZXhNYXRjaCBmcm9tIFwiLi4vaW5kZXgvbWF0Y2hcIjtcblxuaW1wb3J0IHsgZm9yRWFjaCwgbWFwS2V5cywgbWFwVmFsdWVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IFlfU1RSSU5HLCBTX1NUUklORywgSUVTX1NUUklORywgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UsIFBBUkVOVEhFU0lTRURfU19TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc0xlc3NUaGFuLCBpc0FuY2VzdG9yT2YgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE1hcEZyb21JbmRleERpcmVjdGl2ZUhUTUxOb2RlQW5kRGl2aXNpb25IVE1MTm9kZXMoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSwgZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXAgPSBjcmVhdGVJbmRleE1hcChpbmRleERpcmVjdGl2ZUhUTUxOb2RlLCBkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG5cbiAgcmVtb3ZlSWdub3JlZFdvcmRzKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFBsdXJhbFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFNpbmd1bGFyUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgYWRqdXN0UHJvcGVyTm91bnMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBjb21wcmVzc1BhZ2VOdW1iZXJzKGluZGV4TWFwKTtcblxuICByZXR1cm4gaW5kZXhNYXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4TWFwKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWFwID0ge307XG5cbiAgY29uc3QgeyBwaHJhc2VzID0gW10gfSA9IGNvbnRleHQsXG4gICAgICAgIGluZGV4TWF0Y2hlcyA9IHBocmFzZXMubWFwKChwaHJhc2UpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmRleE1hdGNoID0gSW5kZXhNYXRjaC5mcm9tUGhyYXNlKHBocmFzZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5kZXhNYXRjaDtcbiAgICAgICAgfSk7XG5cbiAgZGl2aXNpb25IVE1MTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVMZXNzVGhhbkluZGV4RGlyZWN0aXZlSFRNTE5vZGUgPSBpc0xlc3NUaGFuKGRpdmlzaW9uSFRNTE5vZGUsIGluZGV4RGlyZWN0aXZlSFRNTE5vZGUpO1xuXG4gICAgaWYgKGRpdmlzaW9uSFRNTE5vZGVMZXNzVGhhbkluZGV4RGlyZWN0aXZlSFRNTE5vZGUpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVBbmNlc3Rvck9mSW5kZXhEaXJlY3RpdmVIVE1MTm9kZSA9IGlzQW5jZXN0b3JPZihkaXZpc2lvbkhUTUxOb2RlLCBpbmRleERpcmVjdGl2ZUhUTUxOb2RlKTtcblxuICAgICAgaWYgKCFkaXZpc2lvbkhUTUxOb2RlQW5jZXN0b3JPZkluZGV4RGlyZWN0aXZlSFRNTE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IGRpdmlzaW9uSFRNTE5vZGUucGFnZU51bWJlcigpO1xuXG4gICAgICAgIGlmIChwYWdlTnVtYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcGxhaW5UZXh0ID0gZGl2aXNpb25IVE1MTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB3b3Jkc09yUGhyYXNlcyA9IHdvcmRzT3JQaHJhc2VzRnJvbVBsYWluVGV4dEFuZEluZGV4TWF0Y2hlcyhwbGFpblRleHQsIGluZGV4TWF0Y2hlcyk7XG5cbiAgICAgICAgICB3b3Jkc09yUGhyYXNlcy5mb3JFYWNoKCh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VOdW1iZXJzID0gaW5kZXhNYXAuaGFzT3duUHJvcGVydHkod29yZE9yUGhyYXNlKSA/XG4gICAgICAgICAgICAgICAgICAgIGluZGV4TWFwW3dvcmRPclBocmFzZV0gOlxuICAgICAgICAgICAgICAgICAgICAgIFtdO1xuXG4gICAgICAgICAgICBpbmRleE1hcFt3b3JkT3JQaHJhc2VdID0gcGFnZU51bWJlcnM7XG5cbiAgICAgICAgICAgIHBhZ2VOdW1iZXJzLnB1c2gocGFnZU51bWJlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleE1hcDtcbn1cblxuZnVuY3Rpb24gd29yZHNPclBocmFzZXNGcm9tUGxhaW5UZXh0QW5kSW5kZXhNYXRjaGVzKHBsYWluVGV4dCwgaW5kZXhNYXRjaGVzKSB7XG4gIGxldCB3b3Jkc09yUGhyYXNlcztcblxuICBwbGFpblRleHQgPSBwcmVwYXJlUGxhaW5UZXh0KHBsYWluVGV4dCk7ICAvLy9cblxuICBpbmRleE1hdGNoZXMuZm9yRWFjaCgoaW5kZXhNYXRjaCkgPT4ge1xuICAgIHBsYWluVGV4dCA9IGluZGV4TWF0Y2gucmVwbGFjZShwbGFpblRleHQpO1xuICB9KTtcblxuICB3b3Jkc09yUGhyYXNlcyA9IHBsYWluVGV4dC5zcGxpdChTSU5HTEVfU1BBQ0UpO1xuXG4gIHdvcmRzT3JQaHJhc2VzID0gd29yZHNPclBocmFzZXMubWFwKCh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICB3b3JkT3JQaHJhc2UgPSBJbmRleE1hdGNoLnJldmVydCh3b3JkT3JQaHJhc2UpOyAgLy8vXG5cbiAgICByZXR1cm4gd29yZE9yUGhyYXNlO1xuICB9KTtcblxuICByZXR1cm4gd29yZHNPclBocmFzZXM7XG59XG5cbmZ1bmN0aW9uIGNvbXByZXNzUGFnZU51bWJlcnMoaW5kZXhNYXApIHtcbiAgbWFwVmFsdWVzKGluZGV4TWFwLCAod29yZE9yUGhyYXNlLCBwYWdlTnVtYmVycykgPT4ge1xuICAgIGNvbXByZXNzKHBhZ2VOdW1iZXJzLCAocGFnZU51bWJlckEsIHBhZ2VOdW1iZXJCKSA9PiB7XG4gICAgICBpZiAocGFnZU51bWJlckEgPT09IHBhZ2VOdW1iZXJCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFnZU51bWJlcnMuc29ydCgocGFnZU51bWJlckIsIHBhZ2VOdW1iZXJBKSA9PiB7XG4gICAgICBwYWdlTnVtYmVyQSA9IE51bWJlcihwYWdlTnVtYmVyQSk7ICAvLy9cblxuICAgICAgcGFnZU51bWJlckIgPSBOdW1iZXIocGFnZU51bWJlckIpOyAgLy8vXG5cbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBwYWdlTnVtYmVyQiAtIHBhZ2VOdW1iZXJBO1xuXG4gICAgICByZXR1cm4gZGlmZmVyZW5jZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVycztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUlnbm9yZWRXb3JkcyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGlnbm9yZWRXb3JkcyA9IFtdIH0gPSBjb250ZXh0O1xuXG4gIGlnbm9yZWRXb3Jkcy5mb3JFYWNoKChpZ25vcmVkV29yZCkgPT4ge1xuICAgIGRlbGV0ZSBpbmRleE1hcFtpZ25vcmVkV29yZF07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RQcm9wZXJOb3VucyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IHByb3Blck5vdW5zID0gW10gfSA9IGNvbnRleHQsXG4gICAgICAgIGxvd2VyQ2FzZVByb3Blck5vdW5zID0gcHJvcGVyTm91bnMubWFwKChwcm9wZXJOb3VuKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlUHJvcGVyTm91biA9IHByb3Blck5vdW4udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIHJldHVybiBsb3dlckNhc2VQcm9wZXJOb3VuO1xuICAgICAgICB9KTtcblxuICBtYXBLZXlzKGluZGV4TWFwLCAod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBsb3dlckNhc2VQcm9wZXJOb3Vucy5maW5kSW5kZXgoKGxvd2VyQ2FzZVByb3Blck5hbWUpID0+IHtcbiAgICAgIGlmIChsb3dlckNhc2VQcm9wZXJOYW1lID09PSB3b3JkT3JQaHJhc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgcHJvcGVyTm91biA9IHByb3Blck5vdW5zW2luZGV4XTtcblxuICAgICAgd29yZE9yUGhyYXNlID0gcHJvcGVyTm91bjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3b3JkT3JQaHJhc2U7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlUGxhaW5UZXh0KHBsYWluVGV4dCkge1xuICBwbGFpblRleHQgPSBwbGFpblRleHQudG9Mb3dlckNhc2UoKTsgIC8vL1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9bXmEtejAtOVxcLSBdL2csIFNJTkdMRV9TUEFDRSk7XG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoL1xccysvZywgU0lOR0xFX1NQQUNFKTtcblxuICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcGxhaW5UZXh0O1xufVxuXG5mdW5jdGlvbiBhZGp1c3RBY3JvbnltcyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGFjcm9ueW1zID0gW10gfSA9IGNvbnRleHQsXG4gICAgICAgIGxvd2VyQ2FzZUFjcm9ueW1zID0gYWNyb255bXMubWFwKChhY3JvbnltKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlQWNyb255bSA9IGFjcm9ueW0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIHJldHVybiBsb3dlckNhc2VBY3JvbnltO1xuICAgICAgICB9KTtcblxuICBtYXBLZXlzKGluZGV4TWFwLCAod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBsb3dlckNhc2VBY3Jvbnltcy5maW5kSW5kZXgoKGxvd2VyQ2FzZVByb3Blck5hbWUpID0+IHtcbiAgICAgIGlmIChsb3dlckNhc2VQcm9wZXJOYW1lID09PSB3b3JkT3JQaHJhc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgYWNyb255bSA9IGFjcm9ueW1zW2luZGV4XTtcblxuICAgICAgd29yZE9yUGhyYXNlID0gYWNyb255bTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3b3JkT3JQaHJhc2U7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBwbHVyYWxzID0gW10gfSA9IGNvbnRleHQsXG4gICAgICAgIG1peGVkUGx1cmFscyA9IHJlZHVjZVBsdXJhbHMocGx1cmFscywgaXNNaXhlZCksXG4gICAgICAgIHBsdXJhbFBsdXJhbHMgPSBtYXBQbHVyYWxzKG1peGVkUGx1cmFscywgbWl4ZWRUb1BsdXJhbCksXG4gICAgICAgIHNpbmd1bGFyUGx1cmFscyA9IG1hcFBsdXJhbHMobWl4ZWRQbHVyYWxzLCBtaXhlZFRvU2luZ3VsYXIpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29uc3Qgc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSkge1xuICAgICAgY29uc3Qgc2luZ3VsYXJXb3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UsICAvLy9cbiAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgbWl4ZWRXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclRvTWl4ZWQoc2luZ3VsYXJXb3JkT3JQaHJhc2UpLFxuICAgICAgICAgICAgbWl4ZWRQYWdlTnVtYmVycyA9IGluZGV4TWFwW21peGVkV29yZE9yUGhyYXNlXSB8fCBbXTtcblxuICAgICAgcGFnZU51bWJlcnMgPSBbXG4gICAgICAgIC4uLnNpbmd1bGFyUGFnZU51bWJlcnMsXG4gICAgICAgIC4uLm1peGVkUGFnZU51bWJlcnNcbiAgICAgIF07XG5cbiAgICAgIGRlbGV0ZSBpbmRleE1hcFtzaW5ndWxhcldvcmRPclBocmFzZV07XG5cbiAgICAgIGluZGV4TWFwW21peGVkV29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IHBsdXJhbFBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSA9IHBsdXJhbFBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChwbHVyYWxQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UpIHtcbiAgICAgIGNvbnN0IHBsdXJhbFdvcmRPclBocmFzZSA9IHdvcmRPclBocmFzZSwgIC8vL1xuICAgICAgICAgICAgcGx1cmFsUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgbWl4ZWRXb3JkT3JQaHJhc2UgPSBwbHVyYWxUb01peGVkKHBsdXJhbFdvcmRPclBocmFzZSksXG4gICAgICAgICAgICBtaXhlZFBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbbWl4ZWRXb3JkT3JQaHJhc2VdIHx8IFtdO1xuXG4gICAgICBwYWdlTnVtYmVycyA9IFtcbiAgICAgICAgLi4ucGx1cmFsUGFnZU51bWJlcnMsXG4gICAgICAgIC4uLm1peGVkUGFnZU51bWJlcnNcbiAgICAgIF07XG5cbiAgICAgIGRlbGV0ZSBpbmRleE1hcFtwbHVyYWxXb3JkT3JQaHJhc2VdO1xuXG4gICAgICBpbmRleE1hcFttaXhlZFdvcmRPclBocmFzZV0gPSBwYWdlTnVtYmVycztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RQbHVyYWxQbHVyYWxzKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcGx1cmFscyA9IFtdIH0gPSBjb250ZXh0LFxuICAgICAgICBwbHVyYWxQbHVyYWxzID0gcmVkdWNlUGx1cmFscyhwbHVyYWxzLCBpc1BsdXJhbCksXG4gICAgICAgIHNpbmd1bGFyUGx1cmFscyA9IG1hcFBsdXJhbHMocGx1cmFsUGx1cmFscywgcGx1cmFsVG9TaW5ndWxhcik7XG5cbiAgZm9yRWFjaChpbmRleE1hcCwgKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpID0+IHtcbiAgICBjb25zdCBzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSA9IHNpbmd1bGFyUGx1cmFscy5pbmNsdWRlcyh3b3JkT3JQaHJhc2UpO1xuXG4gICAgaWYgKHNpbmd1bGFyUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlKSB7XG4gICAgICBjb25zdCBzaW5ndWxhcldvcmRPclBocmFzZSA9IHdvcmRPclBocmFzZSwgIC8vL1xuICAgICAgICAgICAgc2luZ3VsYXJQYWdlTnVtYmVycyA9IHBhZ2VOdW1iZXJzLCAgLy8vXG4gICAgICAgICAgICBwbHVyYWxXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclRvUGx1cmFsKHdvcmRPclBocmFzZSksXG4gICAgICAgICAgICBwbHVyYWxQYWdlTnVtYmVycyA9IGluZGV4TWFwW3BsdXJhbFdvcmRPclBocmFzZV0gfHwgW107XG5cbiAgICAgIHBhZ2VOdW1iZXJzID0gW1xuICAgICAgICAuLi5zaW5ndWxhclBhZ2VOdW1iZXJzLFxuICAgICAgICAuLi5wbHVyYWxQYWdlTnVtYmVyc1xuICAgICAgXTtcblxuICAgICAgZGVsZXRlIGluZGV4TWFwW3Npbmd1bGFyV29yZE9yUGhyYXNlXTtcblxuICAgICAgaW5kZXhNYXBbcGx1cmFsV29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdFNpbmd1bGFyUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IHBsdXJhbHMgPSBbXSB9ID0gY29udGV4dCxcbiAgICAgICAgc2luZ3VsYXJQbHVyYWxzID0gcmVkdWNlUGx1cmFscyhwbHVyYWxzLCBpc1Npbmd1bGFyKSxcbiAgICAgICAgcGx1cmFsUGx1cmFscyA9IG1hcFBsdXJhbHMoc2luZ3VsYXJQbHVyYWxzLCBzaW5ndWxhclRvUGx1cmFsKTtcblxuICBmb3JFYWNoKGluZGV4TWFwLCAod29yZE9yUGhyYXNlLCBwYWdlTnVtYmVycykgPT4ge1xuICAgICAgY29uc3QgcGx1cmFsUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlID0gcGx1cmFsUGx1cmFscy5pbmNsdWRlcyh3b3JkT3JQaHJhc2UpO1xuXG4gICAgICBpZiAocGx1cmFsUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlKSB7XG4gICAgICAgIGNvbnN0IHNpbmd1bGFyV29yZE9yUGhyYXNlID0gcGx1cmFsVG9TaW5ndWxhcih3b3JkT3JQaHJhc2UpLFxuICAgICAgICAgICAgICBzaW5ndWxhclBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbc2luZ3VsYXJXb3JkT3JQaHJhc2VdIHx8IFtdLFxuICAgICAgICAgICAgICBwbHVyYWxXb3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UsICAvLy9cbiAgICAgICAgICAgICAgcGx1cmFsUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVyczsgIC8vL1xuXG4gICAgICAgIHBhZ2VOdW1iZXJzID0gW1xuICAgICAgICAgIC4uLnNpbmd1bGFyUGFnZU51bWJlcnMsXG4gICAgICAgICAgLi4ucGx1cmFsUGFnZU51bWJlcnNcbiAgICAgICAgXTtcblxuICAgICAgICBkZWxldGUgaW5kZXhNYXBbcGx1cmFsV29yZE9yUGhyYXNlXTtcblxuICAgICAgICBpbmRleE1hcFtzaW5ndWxhcldvcmRPclBocmFzZV0gPSBwYWdlTnVtYmVycztcbiAgICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVBsdXJhbHMocGx1cmFscywgY2FsbGJhY2spIHtcbiAgcGx1cmFscyA9IHBsdXJhbHMucmVkdWNlKChwbHVyYWxzLCBwbHVyYWwpID0+IHsgLy8vXG4gICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2socGx1cmFsKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHBsdXJhbHMucHVzaChwbHVyYWwpO1xuICAgIH1cblxuICAgIHJldHVybiBwbHVyYWxzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHBsdXJhbHM7XG59XG5cbmZ1bmN0aW9uIG1hcFBsdXJhbHMocGx1cmFscywgY2FsbGJhY2spIHtcbiAgcGx1cmFscyA9IHBsdXJhbHMubWFwKChwbHVyYWwpID0+IHsgLy8vXG4gICAgcGx1cmFsID0gY2FsbGJhY2socGx1cmFsKTtcblxuICAgIHJldHVybiBwbHVyYWw7XG4gIH0pO1xuXG4gIHJldHVybiBwbHVyYWxzO1xufVxuXG5mdW5jdGlvbiBpc1Npbmd1bGFyKHRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXRjaGVzID0gL1tecyldJC8udGVzdCh0ZXh0KSxcbiAgICAgICAgc2luZ3VsYXIgPSBpbmRleE1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBzaW5ndWxhcjtcbn1cblxuZnVuY3Rpb24gaXNQbHVyYWwodGV4dCkge1xuICBjb25zdCBpbmRleE1hdGNoZXMgPSAvKGllc3xzKSQvLnRlc3QodGV4dCksXG4gICAgICAgIHBsdXJhbCA9IGluZGV4TWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIHBsdXJhbDtcbn1cblxuZnVuY3Rpb24gaXNNaXhlZCh0ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWF0Y2hlcyA9IC9cXChzXFwpJC8udGVzdCh0ZXh0KSxcbiAgICAgICAgbWl4ZWQgPSBpbmRleE1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBtaXhlZDtcbn1cblxuZnVuY3Rpb24gbWl4ZWRUb1BsdXJhbCh0ZXh0KSB7XG4gIHRleHQgPSB0ZXh0IC8vL1xuICAgICAgICAgICAucmVwbGFjZSgvXFwoc1xcKSQvLCBTX1NUUklORyk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFRvTWl4ZWQodGV4dCkge1xuICB0ZXh0ID0gdGV4dCAvLy9cbiAgICAgICAgICAgLnJlcGxhY2UoL3MkLywgUEFSRU5USEVTSVNFRF9TX1NUUklORylcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gbWl4ZWRUb1Npbmd1bGFyKHRleHQpIHtcbiAgdGV4dCA9IHRleHQgLy8vXG4gICAgICAgICAgLnJlcGxhY2UoL1xcKHNcXCkkLywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gc2luZ3VsYXJUb01peGVkKHRleHQpIHtcbiAgdGV4dCA9IGAke3RleHR9KHMpYDtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gc2luZ3VsYXJUb1BsdXJhbCh0ZXh0KSB7XG4gIHRleHQgPSBgJHt0ZXh0fXNgIC8vL1xuICAgICAgICAgICAucmVwbGFjZSgveXMkLywgSUVTX1NUUklORyk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFRvU2luZ3VsYXIodGV4dCkge1xuICB0ZXh0ID0gdGV4dCAvLy9cbiAgICAgICAgICAgLnJlcGxhY2UoL2llcyQvLCBZX1NUUklORylcbiAgICAgICAgICAgLnJlcGxhY2UoL3MkLywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gdGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJpbmRleE1hcEZyb21JbmRleERpcmVjdGl2ZUhUTUxOb2RlQW5kRGl2aXNpb25IVE1MTm9kZXMiLCJjb21wcmVzcyIsImFycmF5VXRpbGl0aWVzIiwiaXNMZXNzVGhhbiIsIm5vZGVVdGlsaXRpZXMiLCJpc0FuY2VzdG9yT2YiLCJpbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJjb250ZXh0IiwiaW5kZXhNYXAiLCJjcmVhdGVJbmRleE1hcCIsInJlbW92ZUlnbm9yZWRXb3JkcyIsImFkanVzdE1peGVkUGx1cmFscyIsImFkanVzdFBsdXJhbFBsdXJhbHMiLCJhZGp1c3RTaW5ndWxhclBsdXJhbHMiLCJhZGp1c3RQcm9wZXJOb3VucyIsImFkanVzdEFjcm9ueW1zIiwiY29tcHJlc3NQYWdlTnVtYmVycyIsInBocmFzZXMiLCJpbmRleE1hdGNoZXMiLCJtYXAiLCJwaHJhc2UiLCJpbmRleE1hdGNoIiwiSW5kZXhNYXRjaCIsImZyb21QaHJhc2UiLCJmb3JFYWNoIiwiZGl2aXNpb25IVE1MTm9kZSIsImRpdmlzaW9uSFRNTE5vZGVMZXNzVGhhbkluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJkaXZpc2lvbkhUTUxOb2RlQW5jZXN0b3JPZkluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJwYWdlTnVtYmVyIiwicGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJ3b3Jkc09yUGhyYXNlcyIsIndvcmRzT3JQaHJhc2VzRnJvbVBsYWluVGV4dEFuZEluZGV4TWF0Y2hlcyIsIndvcmRPclBocmFzZSIsInBhZ2VOdW1iZXJzIiwiaGFzT3duUHJvcGVydHkiLCJwdXNoIiwicHJlcGFyZVBsYWluVGV4dCIsInJlcGxhY2UiLCJzcGxpdCIsIlNJTkdMRV9TUEFDRSIsInJldmVydCIsIm1hcFZhbHVlcyIsInBhZ2VOdW1iZXJBIiwicGFnZU51bWJlckIiLCJzb3J0IiwiTnVtYmVyIiwiZGlmZmVyZW5jZSIsImlnbm9yZWRXb3JkcyIsImlnbm9yZWRXb3JkIiwicHJvcGVyTm91bnMiLCJsb3dlckNhc2VQcm9wZXJOb3VucyIsInByb3Blck5vdW4iLCJsb3dlckNhc2VQcm9wZXJOb3VuIiwidG9Mb3dlckNhc2UiLCJtYXBLZXlzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJsb3dlckNhc2VQcm9wZXJOYW1lIiwiRU1QVFlfU1RSSU5HIiwiYWNyb255bXMiLCJsb3dlckNhc2VBY3JvbnltcyIsImFjcm9ueW0iLCJsb3dlckNhc2VBY3JvbnltIiwicGx1cmFscyIsIm1peGVkUGx1cmFscyIsInJlZHVjZVBsdXJhbHMiLCJpc01peGVkIiwicGx1cmFsUGx1cmFscyIsIm1hcFBsdXJhbHMiLCJtaXhlZFRvUGx1cmFsIiwic2luZ3VsYXJQbHVyYWxzIiwibWl4ZWRUb1Npbmd1bGFyIiwic2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UiLCJpbmNsdWRlcyIsInNpbmd1bGFyV29yZE9yUGhyYXNlIiwic2luZ3VsYXJQYWdlTnVtYmVycyIsIm1peGVkV29yZE9yUGhyYXNlIiwic2luZ3VsYXJUb01peGVkIiwibWl4ZWRQYWdlTnVtYmVycyIsInBsdXJhbFBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSIsInBsdXJhbFdvcmRPclBocmFzZSIsInBsdXJhbFBhZ2VOdW1iZXJzIiwicGx1cmFsVG9NaXhlZCIsImlzUGx1cmFsIiwicGx1cmFsVG9TaW5ndWxhciIsInNpbmd1bGFyVG9QbHVyYWwiLCJpc1Npbmd1bGFyIiwiY2FsbGJhY2siLCJyZWR1Y2UiLCJwbHVyYWwiLCJyZXN1bHQiLCJ0ZXh0IiwidGVzdCIsInNpbmd1bGFyIiwibWl4ZWQiLCJTX1NUUklORyIsIlBBUkVOVEhFU0lTRURfU19TVFJJTkciLCJJRVNfU1RSSU5HIiwiWV9TVFJJTkciXSwi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