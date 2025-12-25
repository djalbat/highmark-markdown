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
                var pageNumber = divisionHTMLNode.pageNumber(context);
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
            if (pageNumberA !== pageNumberB) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZG9tXCJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSW5kZXhNYXRjaCBmcm9tIFwiLi4vaW5kZXgvbWF0Y2hcIjtcblxuaW1wb3J0IHsgZm9yRWFjaCwgbWFwS2V5cywgbWFwVmFsdWVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IFlfU1RSSU5HLCBTX1NUUklORywgSUVTX1NUUklORywgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UsIFBBUkVOVEhFU0lTRURfU19TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc0xlc3NUaGFuLCBpc0FuY2VzdG9yT2YgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE1hcEZyb21JbmRleERpcmVjdGl2ZUhUTUxOb2RlQW5kRGl2aXNpb25IVE1MTm9kZXMoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSwgZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXAgPSBjcmVhdGVJbmRleE1hcChpbmRleERpcmVjdGl2ZUhUTUxOb2RlLCBkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG5cbiAgcmVtb3ZlSWdub3JlZFdvcmRzKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFBsdXJhbFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFNpbmd1bGFyUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgYWRqdXN0UHJvcGVyTm91bnMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBjb21wcmVzc1BhZ2VOdW1iZXJzKGluZGV4TWFwKTtcblxuICByZXR1cm4gaW5kZXhNYXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4TWFwKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWFwID0ge307XG5cbiAgY29uc3QgeyBwaHJhc2VzID0gW10gfSA9IGNvbnRleHQsXG4gICAgICAgIGluZGV4TWF0Y2hlcyA9IHBocmFzZXMubWFwKChwaHJhc2UpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmRleE1hdGNoID0gSW5kZXhNYXRjaC5mcm9tUGhyYXNlKHBocmFzZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5kZXhNYXRjaDtcbiAgICAgICAgfSk7XG5cbiAgZGl2aXNpb25IVE1MTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVMZXNzVGhhbkluZGV4RGlyZWN0aXZlSFRNTE5vZGUgPSBpc0xlc3NUaGFuKGRpdmlzaW9uSFRNTE5vZGUsIGluZGV4RGlyZWN0aXZlSFRNTE5vZGUpO1xuXG4gICAgaWYgKGRpdmlzaW9uSFRNTE5vZGVMZXNzVGhhbkluZGV4RGlyZWN0aXZlSFRNTE5vZGUpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVBbmNlc3Rvck9mSW5kZXhEaXJlY3RpdmVIVE1MTm9kZSA9IGlzQW5jZXN0b3JPZihkaXZpc2lvbkhUTUxOb2RlLCBpbmRleERpcmVjdGl2ZUhUTUxOb2RlKTtcblxuICAgICAgaWYgKCFkaXZpc2lvbkhUTUxOb2RlQW5jZXN0b3JPZkluZGV4RGlyZWN0aXZlSFRNTE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IGRpdmlzaW9uSFRNTE5vZGUucGFnZU51bWJlcihjb250ZXh0KTtcblxuICAgICAgICBpZiAocGFnZU51bWJlciAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHBsYWluVGV4dCA9IGRpdmlzaW9uSFRNTE5vZGUuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgICAgICAgd29yZHNPclBocmFzZXMgPSB3b3Jkc09yUGhyYXNlc0Zyb21QbGFpblRleHRBbmRJbmRleE1hdGNoZXMocGxhaW5UZXh0LCBpbmRleE1hdGNoZXMpO1xuXG4gICAgICAgICAgd29yZHNPclBocmFzZXMuZm9yRWFjaCgod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYWdlTnVtYmVycyA9IGluZGV4TWFwLmhhc093blByb3BlcnR5KHdvcmRPclBocmFzZSkgP1xuICAgICAgICAgICAgICAgICAgICBpbmRleE1hcFt3b3JkT3JQaHJhc2VdIDpcbiAgICAgICAgICAgICAgICAgICAgICBbXTtcblxuICAgICAgICAgICAgaW5kZXhNYXBbd29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuXG4gICAgICAgICAgICBwYWdlTnVtYmVycy5wdXNoKHBhZ2VOdW1iZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXhNYXA7XG59XG5cbmZ1bmN0aW9uIHdvcmRzT3JQaHJhc2VzRnJvbVBsYWluVGV4dEFuZEluZGV4TWF0Y2hlcyhwbGFpblRleHQsIGluZGV4TWF0Y2hlcykge1xuICBsZXQgd29yZHNPclBocmFzZXM7XG5cbiAgcGxhaW5UZXh0ID0gcHJlcGFyZVBsYWluVGV4dChwbGFpblRleHQpOyAgLy8vXG5cbiAgaW5kZXhNYXRjaGVzLmZvckVhY2goKGluZGV4TWF0Y2gpID0+IHtcbiAgICBwbGFpblRleHQgPSBpbmRleE1hdGNoLnJlcGxhY2UocGxhaW5UZXh0KTtcbiAgfSk7XG5cbiAgd29yZHNPclBocmFzZXMgPSBwbGFpblRleHQuc3BsaXQoU0lOR0xFX1NQQUNFKTtcblxuICB3b3Jkc09yUGhyYXNlcyA9IHdvcmRzT3JQaHJhc2VzLm1hcCgod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgd29yZE9yUGhyYXNlID0gSW5kZXhNYXRjaC5yZXZlcnQod29yZE9yUGhyYXNlKTsgIC8vL1xuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdvcmRzT3JQaHJhc2VzO1xufVxuXG5mdW5jdGlvbiBjb21wcmVzc1BhZ2VOdW1iZXJzKGluZGV4TWFwKSB7XG4gIG1hcFZhbHVlcyhpbmRleE1hcCwgKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpID0+IHtcbiAgICBjb21wcmVzcyhwYWdlTnVtYmVycywgKHBhZ2VOdW1iZXJBLCBwYWdlTnVtYmVyQikgPT4ge1xuICAgICAgaWYgKHBhZ2VOdW1iZXJBICE9PSBwYWdlTnVtYmVyQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VOdW1iZXJzLnNvcnQoKHBhZ2VOdW1iZXJCLCBwYWdlTnVtYmVyQSkgPT4ge1xuICAgICAgcGFnZU51bWJlckEgPSBOdW1iZXIocGFnZU51bWJlckEpOyAgLy8vXG5cbiAgICAgIHBhZ2VOdW1iZXJCID0gTnVtYmVyKHBhZ2VOdW1iZXJCKTsgIC8vL1xuXG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gcGFnZU51bWJlckIgLSBwYWdlTnVtYmVyQTtcblxuICAgICAgcmV0dXJuIGRpZmZlcmVuY2U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlcnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJZ25vcmVkV29yZHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpZ25vcmVkV29yZHMgPSBbXSB9ID0gY29udGV4dDtcblxuICBpZ25vcmVkV29yZHMuZm9yRWFjaCgoaWdub3JlZFdvcmQpID0+IHtcbiAgICBkZWxldGUgaW5kZXhNYXBbaWdub3JlZFdvcmRdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0UHJvcGVyTm91bnMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBwcm9wZXJOb3VucyA9IFtdIH0gPSBjb250ZXh0LFxuICAgICAgICBsb3dlckNhc2VQcm9wZXJOb3VucyA9IHByb3Blck5vdW5zLm1hcCgocHJvcGVyTm91bikgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyQ2FzZVByb3Blck5vdW4gPSBwcm9wZXJOb3VuLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICByZXR1cm4gbG93ZXJDYXNlUHJvcGVyTm91bjtcbiAgICAgICAgfSk7XG5cbiAgbWFwS2V5cyhpbmRleE1hcCwgKHdvcmRPclBocmFzZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gbG93ZXJDYXNlUHJvcGVyTm91bnMuZmluZEluZGV4KChsb3dlckNhc2VQcm9wZXJOYW1lKSA9PiB7XG4gICAgICBpZiAobG93ZXJDYXNlUHJvcGVyTmFtZSA9PT0gd29yZE9yUGhyYXNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHByb3Blck5vdW4gPSBwcm9wZXJOb3Vuc1tpbmRleF07XG5cbiAgICAgIHdvcmRPclBocmFzZSA9IHByb3Blck5vdW47ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gd29yZE9yUGhyYXNlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVBsYWluVGV4dChwbGFpblRleHQpIHtcbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnRvTG93ZXJDYXNlKCk7ICAvLy9cblxuICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSgvW15hLXowLTlcXC0gXS9nLCBTSU5HTEVfU1BBQ0UpO1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9cXHMrL2csIFNJTkdMRV9TUEFDRSk7XG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoL15cXHMrfFxccyskL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHBsYWluVGV4dDtcbn1cblxuZnVuY3Rpb24gYWRqdXN0QWNyb255bXMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBhY3JvbnltcyA9IFtdIH0gPSBjb250ZXh0LFxuICAgICAgICBsb3dlckNhc2VBY3JvbnltcyA9IGFjcm9ueW1zLm1hcCgoYWNyb255bSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyQ2FzZUFjcm9ueW0gPSBhY3JvbnltLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICByZXR1cm4gbG93ZXJDYXNlQWNyb255bTtcbiAgICAgICAgfSk7XG5cbiAgbWFwS2V5cyhpbmRleE1hcCwgKHdvcmRPclBocmFzZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gbG93ZXJDYXNlQWNyb255bXMuZmluZEluZGV4KChsb3dlckNhc2VQcm9wZXJOYW1lKSA9PiB7XG4gICAgICBpZiAobG93ZXJDYXNlUHJvcGVyTmFtZSA9PT0gd29yZE9yUGhyYXNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IGFjcm9ueW0gPSBhY3Jvbnltc1tpbmRleF07XG5cbiAgICAgIHdvcmRPclBocmFzZSA9IGFjcm9ueW07ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gd29yZE9yUGhyYXNlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0TWl4ZWRQbHVyYWxzKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcGx1cmFscyA9IFtdIH0gPSBjb250ZXh0LFxuICAgICAgICBtaXhlZFBsdXJhbHMgPSByZWR1Y2VQbHVyYWxzKHBsdXJhbHMsIGlzTWl4ZWQpLFxuICAgICAgICBwbHVyYWxQbHVyYWxzID0gbWFwUGx1cmFscyhtaXhlZFBsdXJhbHMsIG1peGVkVG9QbHVyYWwpLFxuICAgICAgICBzaW5ndWxhclBsdXJhbHMgPSBtYXBQbHVyYWxzKG1peGVkUGx1cmFscywgbWl4ZWRUb1Npbmd1bGFyKTtcblxuICBmb3JFYWNoKGluZGV4TWFwLCAod29yZE9yUGhyYXNlLCBwYWdlTnVtYmVycykgPT4ge1xuICAgIGNvbnN0IHNpbmd1bGFyUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlID0gc2luZ3VsYXJQbHVyYWxzLmluY2x1ZGVzKHdvcmRPclBocmFzZSk7XG5cbiAgICBpZiAoc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UpIHtcbiAgICAgIGNvbnN0IHNpbmd1bGFyV29yZE9yUGhyYXNlID0gd29yZE9yUGhyYXNlLCAgLy8vXG4gICAgICAgICAgICBzaW5ndWxhclBhZ2VOdW1iZXJzID0gcGFnZU51bWJlcnMsICAvLy9cbiAgICAgICAgICAgIG1peGVkV29yZE9yUGhyYXNlID0gc2luZ3VsYXJUb01peGVkKHNpbmd1bGFyV29yZE9yUGhyYXNlKSxcbiAgICAgICAgICAgIG1peGVkUGFnZU51bWJlcnMgPSBpbmRleE1hcFttaXhlZFdvcmRPclBocmFzZV0gfHwgW107XG5cbiAgICAgIHBhZ2VOdW1iZXJzID0gW1xuICAgICAgICAuLi5zaW5ndWxhclBhZ2VOdW1iZXJzLFxuICAgICAgICAuLi5taXhlZFBhZ2VOdW1iZXJzXG4gICAgICBdO1xuXG4gICAgICBkZWxldGUgaW5kZXhNYXBbc2luZ3VsYXJXb3JkT3JQaHJhc2VdO1xuXG4gICAgICBpbmRleE1hcFttaXhlZFdvcmRPclBocmFzZV0gPSBwYWdlTnVtYmVycztcbiAgICB9XG5cbiAgICBjb25zdCBwbHVyYWxQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UgPSBwbHVyYWxQbHVyYWxzLmluY2x1ZGVzKHdvcmRPclBocmFzZSk7XG5cbiAgICBpZiAocGx1cmFsUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlKSB7XG4gICAgICBjb25zdCBwbHVyYWxXb3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UsICAvLy9cbiAgICAgICAgICAgIHBsdXJhbFBhZ2VOdW1iZXJzID0gcGFnZU51bWJlcnMsICAvLy9cbiAgICAgICAgICAgIG1peGVkV29yZE9yUGhyYXNlID0gcGx1cmFsVG9NaXhlZChwbHVyYWxXb3JkT3JQaHJhc2UpLFxuICAgICAgICAgICAgbWl4ZWRQYWdlTnVtYmVycyA9IGluZGV4TWFwW21peGVkV29yZE9yUGhyYXNlXSB8fCBbXTtcblxuICAgICAgcGFnZU51bWJlcnMgPSBbXG4gICAgICAgIC4uLnBsdXJhbFBhZ2VOdW1iZXJzLFxuICAgICAgICAuLi5taXhlZFBhZ2VOdW1iZXJzXG4gICAgICBdO1xuXG4gICAgICBkZWxldGUgaW5kZXhNYXBbcGx1cmFsV29yZE9yUGhyYXNlXTtcblxuICAgICAgaW5kZXhNYXBbbWl4ZWRXb3JkT3JQaHJhc2VdID0gcGFnZU51bWJlcnM7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0UGx1cmFsUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IHBsdXJhbHMgPSBbXSB9ID0gY29udGV4dCxcbiAgICAgICAgcGx1cmFsUGx1cmFscyA9IHJlZHVjZVBsdXJhbHMocGx1cmFscywgaXNQbHVyYWwpLFxuICAgICAgICBzaW5ndWxhclBsdXJhbHMgPSBtYXBQbHVyYWxzKHBsdXJhbFBsdXJhbHMsIHBsdXJhbFRvU2luZ3VsYXIpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29uc3Qgc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSkge1xuICAgICAgY29uc3Qgc2luZ3VsYXJXb3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UsICAvLy9cbiAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgcGx1cmFsV29yZE9yUGhyYXNlID0gc2luZ3VsYXJUb1BsdXJhbCh3b3JkT3JQaHJhc2UpLFxuICAgICAgICAgICAgcGx1cmFsUGFnZU51bWJlcnMgPSBpbmRleE1hcFtwbHVyYWxXb3JkT3JQaHJhc2VdIHx8IFtdO1xuXG4gICAgICBwYWdlTnVtYmVycyA9IFtcbiAgICAgICAgLi4uc2luZ3VsYXJQYWdlTnVtYmVycyxcbiAgICAgICAgLi4ucGx1cmFsUGFnZU51bWJlcnNcbiAgICAgIF07XG5cbiAgICAgIGRlbGV0ZSBpbmRleE1hcFtzaW5ndWxhcldvcmRPclBocmFzZV07XG5cbiAgICAgIGluZGV4TWFwW3BsdXJhbFdvcmRPclBocmFzZV0gPSBwYWdlTnVtYmVycztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RTaW5ndWxhclBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBwbHVyYWxzID0gW10gfSA9IGNvbnRleHQsXG4gICAgICAgIHNpbmd1bGFyUGx1cmFscyA9IHJlZHVjZVBsdXJhbHMocGx1cmFscywgaXNTaW5ndWxhciksXG4gICAgICAgIHBsdXJhbFBsdXJhbHMgPSBtYXBQbHVyYWxzKHNpbmd1bGFyUGx1cmFscywgc2luZ3VsYXJUb1BsdXJhbCk7XG5cbiAgZm9yRWFjaChpbmRleE1hcCwgKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpID0+IHtcbiAgICAgIGNvbnN0IHBsdXJhbFBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSA9IHBsdXJhbFBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgICAgaWYgKHBsdXJhbFBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSkge1xuICAgICAgICBjb25zdCBzaW5ndWxhcldvcmRPclBocmFzZSA9IHBsdXJhbFRvU2luZ3VsYXIod29yZE9yUGhyYXNlKSxcbiAgICAgICAgICAgICAgc2luZ3VsYXJQYWdlTnVtYmVycyA9IGluZGV4TWFwW3Npbmd1bGFyV29yZE9yUGhyYXNlXSB8fCBbXSxcbiAgICAgICAgICAgICAgcGx1cmFsV29yZE9yUGhyYXNlID0gd29yZE9yUGhyYXNlLCAgLy8vXG4gICAgICAgICAgICAgIHBsdXJhbFBhZ2VOdW1iZXJzID0gcGFnZU51bWJlcnM7ICAvLy9cblxuICAgICAgICBwYWdlTnVtYmVycyA9IFtcbiAgICAgICAgICAuLi5zaW5ndWxhclBhZ2VOdW1iZXJzLFxuICAgICAgICAgIC4uLnBsdXJhbFBhZ2VOdW1iZXJzXG4gICAgICAgIF07XG5cbiAgICAgICAgZGVsZXRlIGluZGV4TWFwW3BsdXJhbFdvcmRPclBocmFzZV07XG5cbiAgICAgICAgaW5kZXhNYXBbc2luZ3VsYXJXb3JkT3JQaHJhc2VdID0gcGFnZU51bWJlcnM7XG4gICAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VQbHVyYWxzKHBsdXJhbHMsIGNhbGxiYWNrKSB7XG4gIHBsdXJhbHMgPSBwbHVyYWxzLnJlZHVjZSgocGx1cmFscywgcGx1cmFsKSA9PiB7IC8vL1xuICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKHBsdXJhbCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBwbHVyYWxzLnB1c2gocGx1cmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGx1cmFscztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBwbHVyYWxzO1xufVxuXG5mdW5jdGlvbiBtYXBQbHVyYWxzKHBsdXJhbHMsIGNhbGxiYWNrKSB7XG4gIHBsdXJhbHMgPSBwbHVyYWxzLm1hcCgocGx1cmFsKSA9PiB7IC8vL1xuICAgIHBsdXJhbCA9IGNhbGxiYWNrKHBsdXJhbCk7XG5cbiAgICByZXR1cm4gcGx1cmFsO1xuICB9KTtcblxuICByZXR1cm4gcGx1cmFscztcbn1cblxuZnVuY3Rpb24gaXNTaW5ndWxhcih0ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWF0Y2hlcyA9IC9bXnMpXSQvLnRlc3QodGV4dCksXG4gICAgICAgIHNpbmd1bGFyID0gaW5kZXhNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gc2luZ3VsYXI7XG59XG5cbmZ1bmN0aW9uIGlzUGx1cmFsKHRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXRjaGVzID0gLyhpZXN8cykkLy50ZXN0KHRleHQpLFxuICAgICAgICBwbHVyYWwgPSBpbmRleE1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBwbHVyYWw7XG59XG5cbmZ1bmN0aW9uIGlzTWl4ZWQodGV4dCkge1xuICBjb25zdCBpbmRleE1hdGNoZXMgPSAvXFwoc1xcKSQvLnRlc3QodGV4dCksXG4gICAgICAgIG1peGVkID0gaW5kZXhNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gbWl4ZWQ7XG59XG5cbmZ1bmN0aW9uIG1peGVkVG9QbHVyYWwodGV4dCkge1xuICB0ZXh0ID0gdGV4dCAvLy9cbiAgICAgICAgICAgLnJlcGxhY2UoL1xcKHNcXCkkLywgU19TVFJJTkcpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUb01peGVkKHRleHQpIHtcbiAgdGV4dCA9IHRleHQgLy8vXG4gICAgICAgICAgIC5yZXBsYWNlKC9zJC8sIFBBUkVOVEhFU0lTRURfU19TVFJJTkcpXG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIG1peGVkVG9TaW5ndWxhcih0ZXh0KSB7XG4gIHRleHQgPSB0ZXh0IC8vL1xuICAgICAgICAgIC5yZXBsYWNlKC9cXChzXFwpJC8sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIHNpbmd1bGFyVG9NaXhlZCh0ZXh0KSB7XG4gIHRleHQgPSBgJHt0ZXh0fShzKWA7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIHNpbmd1bGFyVG9QbHVyYWwodGV4dCkge1xuICB0ZXh0ID0gYCR7dGV4dH1zYCAvLy9cbiAgICAgICAgICAgLnJlcGxhY2UoL3lzJC8sIElFU19TVFJJTkcpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUb1Npbmd1bGFyKHRleHQpIHtcbiAgdGV4dCA9IHRleHQgLy8vXG4gICAgICAgICAgIC5yZXBsYWNlKC9pZXMkLywgWV9TVFJJTkcpXG4gICAgICAgICAgIC5yZXBsYWNlKC9zJC8sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG4iXSwibmFtZXMiOlsiaW5kZXhNYXBGcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZUFuZERpdmlzaW9uSFRNTE5vZGVzIiwiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsImlzTGVzc1RoYW4iLCJub2RlVXRpbGl0aWVzIiwiaXNBbmNlc3Rvck9mIiwiaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSIsImRpdmlzaW9uSFRNTE5vZGVzIiwiY29udGV4dCIsImluZGV4TWFwIiwiY3JlYXRlSW5kZXhNYXAiLCJyZW1vdmVJZ25vcmVkV29yZHMiLCJhZGp1c3RNaXhlZFBsdXJhbHMiLCJhZGp1c3RQbHVyYWxQbHVyYWxzIiwiYWRqdXN0U2luZ3VsYXJQbHVyYWxzIiwiYWRqdXN0UHJvcGVyTm91bnMiLCJhZGp1c3RBY3JvbnltcyIsImNvbXByZXNzUGFnZU51bWJlcnMiLCJwaHJhc2VzIiwiaW5kZXhNYXRjaGVzIiwibWFwIiwicGhyYXNlIiwiaW5kZXhNYXRjaCIsIkluZGV4TWF0Y2giLCJmcm9tUGhyYXNlIiwiZm9yRWFjaCIsImRpdmlzaW9uSFRNTE5vZGUiLCJkaXZpc2lvbkhUTUxOb2RlTGVzc1RoYW5JbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiZGl2aXNpb25IVE1MTm9kZUFuY2VzdG9yT2ZJbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwicGFnZU51bWJlciIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0Iiwid29yZHNPclBocmFzZXMiLCJ3b3Jkc09yUGhyYXNlc0Zyb21QbGFpblRleHRBbmRJbmRleE1hdGNoZXMiLCJ3b3JkT3JQaHJhc2UiLCJwYWdlTnVtYmVycyIsImhhc093blByb3BlcnR5IiwicHVzaCIsInByZXBhcmVQbGFpblRleHQiLCJyZXBsYWNlIiwic3BsaXQiLCJTSU5HTEVfU1BBQ0UiLCJyZXZlcnQiLCJtYXBWYWx1ZXMiLCJwYWdlTnVtYmVyQSIsInBhZ2VOdW1iZXJCIiwic29ydCIsIk51bWJlciIsImRpZmZlcmVuY2UiLCJpZ25vcmVkV29yZHMiLCJpZ25vcmVkV29yZCIsInByb3Blck5vdW5zIiwibG93ZXJDYXNlUHJvcGVyTm91bnMiLCJwcm9wZXJOb3VuIiwibG93ZXJDYXNlUHJvcGVyTm91biIsInRvTG93ZXJDYXNlIiwibWFwS2V5cyIsImluZGV4IiwiZmluZEluZGV4IiwibG93ZXJDYXNlUHJvcGVyTmFtZSIsIkVNUFRZX1NUUklORyIsImFjcm9ueW1zIiwibG93ZXJDYXNlQWNyb255bXMiLCJhY3JvbnltIiwibG93ZXJDYXNlQWNyb255bSIsInBsdXJhbHMiLCJtaXhlZFBsdXJhbHMiLCJyZWR1Y2VQbHVyYWxzIiwiaXNNaXhlZCIsInBsdXJhbFBsdXJhbHMiLCJtYXBQbHVyYWxzIiwibWl4ZWRUb1BsdXJhbCIsInNpbmd1bGFyUGx1cmFscyIsIm1peGVkVG9TaW5ndWxhciIsInNpbmd1bGFyUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlIiwiaW5jbHVkZXMiLCJzaW5ndWxhcldvcmRPclBocmFzZSIsInNpbmd1bGFyUGFnZU51bWJlcnMiLCJtaXhlZFdvcmRPclBocmFzZSIsInNpbmd1bGFyVG9NaXhlZCIsIm1peGVkUGFnZU51bWJlcnMiLCJwbHVyYWxQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UiLCJwbHVyYWxXb3JkT3JQaHJhc2UiLCJwbHVyYWxQYWdlTnVtYmVycyIsInBsdXJhbFRvTWl4ZWQiLCJpc1BsdXJhbCIsInBsdXJhbFRvU2luZ3VsYXIiLCJzaW5ndWxhclRvUGx1cmFsIiwiaXNTaW5ndWxhciIsImNhbGxiYWNrIiwicmVkdWNlIiwicGx1cmFsIiwicmVzdWx0IiwidGV4dCIsInRlc3QiLCJzaW5ndWxhciIsIm1peGVkIiwiU19TVFJJTkciLCJQQVJFTlRIRVNJU0VEX1NfU1RSSU5HIiwiSUVTX1NUUklORyIsIllfU1RS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