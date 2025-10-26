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
    var indexOptions = context.indexOptions, phrases = indexOptions.phrases, indexMatches = phrases.map(function(phrase) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZG9tXCJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSW5kZXhNYXRjaCBmcm9tIFwiLi4vaW5kZXgvbWF0Y2hcIjtcblxuaW1wb3J0IHsgZm9yRWFjaCwgbWFwS2V5cywgbWFwVmFsdWVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IFlfU1RSSU5HLCBTX1NUUklORywgSUVTX1NUUklORywgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UsIFBBUkVOVEhFU0lTRURfU19TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc0xlc3NUaGFuLCBpc0FuY2VzdG9yT2YgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE1hcEZyb21JbmRleERpcmVjdGl2ZUhUTUxOb2RlQW5kRGl2aXNpb25IVE1MTm9kZXMoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSwgZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXAgPSBjcmVhdGVJbmRleE1hcChpbmRleERpcmVjdGl2ZUhUTUxOb2RlLCBkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG5cbiAgcmVtb3ZlSWdub3JlZFdvcmRzKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBhZGp1c3RNaXhlZFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFBsdXJhbFBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdFNpbmd1bGFyUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCk7XG5cbiAgYWRqdXN0UHJvcGVyTm91bnMoaW5kZXhNYXAsIGNvbnRleHQpO1xuXG4gIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KTtcblxuICBjb21wcmVzc1BhZ2VOdW1iZXJzKGluZGV4TWFwKTtcblxuICByZXR1cm4gaW5kZXhNYXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4TWFwKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWFwID0ge307XG5cbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgcGhyYXNlcyB9ID0gaW5kZXhPcHRpb25zLFxuICAgICAgICBpbmRleE1hdGNoZXMgPSBwaHJhc2VzLm1hcCgocGhyYXNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXhNYXRjaCA9IEluZGV4TWF0Y2guZnJvbVBocmFzZShwaHJhc2UpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZGV4TWF0Y2g7XG4gICAgICAgIH0pO1xuXG4gIGRpdmlzaW9uSFRNTE5vZGVzLmZvckVhY2goKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlTGVzc1RoYW5JbmRleERpcmVjdGl2ZUhUTUxOb2RlID0gaXNMZXNzVGhhbihkaXZpc2lvbkhUTUxOb2RlLCBpbmRleERpcmVjdGl2ZUhUTUxOb2RlKTtcblxuICAgIGlmIChkaXZpc2lvbkhUTUxOb2RlTGVzc1RoYW5JbmRleERpcmVjdGl2ZUhUTUxOb2RlKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlQW5jZXN0b3JPZkluZGV4RGlyZWN0aXZlSFRNTE5vZGUgPSBpc0FuY2VzdG9yT2YoZGl2aXNpb25IVE1MTm9kZSwgaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSk7XG5cbiAgICAgIGlmICghZGl2aXNpb25IVE1MTm9kZUFuY2VzdG9yT2ZJbmRleERpcmVjdGl2ZUhUTUxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBkaXZpc2lvbkhUTUxOb2RlLnBhZ2VOdW1iZXIoKTtcblxuICAgICAgICBpZiAocGFnZU51bWJlciAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHBsYWluVGV4dCA9IGRpdmlzaW9uSFRNTE5vZGUuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgICAgICAgd29yZHNPclBocmFzZXMgPSB3b3Jkc09yUGhyYXNlc0Zyb21QbGFpblRleHRBbmRJbmRleE1hdGNoZXMocGxhaW5UZXh0LCBpbmRleE1hdGNoZXMpO1xuXG4gICAgICAgICAgd29yZHNPclBocmFzZXMuZm9yRWFjaCgod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYWdlTnVtYmVycyA9IGluZGV4TWFwLmhhc093blByb3BlcnR5KHdvcmRPclBocmFzZSkgP1xuICAgICAgICAgICAgICAgICAgICBpbmRleE1hcFt3b3JkT3JQaHJhc2VdIDpcbiAgICAgICAgICAgICAgICAgICAgICBbXTtcblxuICAgICAgICAgICAgaW5kZXhNYXBbd29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuXG4gICAgICAgICAgICBwYWdlTnVtYmVycy5wdXNoKHBhZ2VOdW1iZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXhNYXA7XG59XG5cbmZ1bmN0aW9uIHdvcmRzT3JQaHJhc2VzRnJvbVBsYWluVGV4dEFuZEluZGV4TWF0Y2hlcyhwbGFpblRleHQsIGluZGV4TWF0Y2hlcykge1xuICBsZXQgd29yZHNPclBocmFzZXM7XG5cbiAgcGxhaW5UZXh0ID0gcHJlcGFyZVBsYWluVGV4dChwbGFpblRleHQpOyAgLy8vXG5cbiAgaW5kZXhNYXRjaGVzLmZvckVhY2goKGluZGV4TWF0Y2gpID0+IHtcbiAgICBwbGFpblRleHQgPSBpbmRleE1hdGNoLnJlcGxhY2UocGxhaW5UZXh0KTtcbiAgfSk7XG5cbiAgd29yZHNPclBocmFzZXMgPSBwbGFpblRleHQuc3BsaXQoU0lOR0xFX1NQQUNFKTtcblxuICB3b3Jkc09yUGhyYXNlcyA9IHdvcmRzT3JQaHJhc2VzLm1hcCgod29yZE9yUGhyYXNlKSA9PiB7XG4gICAgd29yZE9yUGhyYXNlID0gSW5kZXhNYXRjaC5yZXZlcnQod29yZE9yUGhyYXNlKTsgIC8vL1xuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdvcmRzT3JQaHJhc2VzO1xufVxuXG5mdW5jdGlvbiBjb21wcmVzc1BhZ2VOdW1iZXJzKGluZGV4TWFwKSB7XG4gIG1hcFZhbHVlcyhpbmRleE1hcCwgKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpID0+IHtcbiAgICBjb21wcmVzcyhwYWdlTnVtYmVycywgKHBhZ2VOdW1iZXJBLCBwYWdlTnVtYmVyQikgPT4ge1xuICAgICAgaWYgKHBhZ2VOdW1iZXJBID09PSBwYWdlTnVtYmVyQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VOdW1iZXJzLnNvcnQoKHBhZ2VOdW1iZXJCLCBwYWdlTnVtYmVyQSkgPT4ge1xuICAgICAgcGFnZU51bWJlckEgPSBOdW1iZXIocGFnZU51bWJlckEpOyAgLy8vXG5cbiAgICAgIHBhZ2VOdW1iZXJCID0gTnVtYmVyKHBhZ2VOdW1iZXJCKTsgIC8vL1xuXG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gcGFnZU51bWJlckIgLSBwYWdlTnVtYmVyQTtcblxuICAgICAgcmV0dXJuIGRpZmZlcmVuY2U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlcnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJZ25vcmVkV29yZHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgaWdub3JlZFdvcmRzIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgaWdub3JlZFdvcmRzLmZvckVhY2goKGlnbm9yZWRXb3JkKSA9PiB7XG4gICAgZGVsZXRlIGluZGV4TWFwW2lnbm9yZWRXb3JkXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdFByb3Blck5vdW5zKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHByb3Blck5vdW5zIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgY29uc3QgbG93ZXJDYXNlUHJvcGVyTm91bnMgPSBwcm9wZXJOb3Vucy5tYXAoKHByb3Blck5vdW4pID0+IHtcbiAgICBjb25zdCBsb3dlckNhc2VQcm9wZXJOb3VuID0gcHJvcGVyTm91bi50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIGxvd2VyQ2FzZVByb3Blck5vdW47XG4gIH0pO1xuXG4gIG1hcEtleXMoaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGxvd2VyQ2FzZVByb3Blck5vdW5zLmZpbmRJbmRleCgobG93ZXJDYXNlUHJvcGVyTmFtZSkgPT4ge1xuICAgICAgaWYgKGxvd2VyQ2FzZVByb3Blck5hbWUgPT09IHdvcmRPclBocmFzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBwcm9wZXJOb3VuID0gcHJvcGVyTm91bnNbaW5kZXhdO1xuXG4gICAgICB3b3JkT3JQaHJhc2UgPSBwcm9wZXJOb3VuOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVQbGFpblRleHQocGxhaW5UZXh0KSB7XG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC50b0xvd2VyQ2FzZSgpOyAgLy8vXG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoL1teYS16MC05XFwtIF0vZywgU0lOR0xFX1NQQUNFKTtcblxuICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSgvXFxzKy9nLCBTSU5HTEVfU1BBQ0UpO1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBwbGFpblRleHQ7XG59XG5cbmZ1bmN0aW9uIGFkanVzdEFjcm9ueW1zKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGFjcm9ueW1zIH0gPSBpbmRleE9wdGlvbnM7XG5cbiAgY29uc3QgbG93ZXJDYXNlQWNyb255bXMgPSBhY3Jvbnltcy5tYXAoKGFjcm9ueW0pID0+IHtcbiAgICBjb25zdCBsb3dlckNhc2VBY3JvbnltID0gYWNyb255bS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIGxvd2VyQ2FzZUFjcm9ueW07XG4gIH0pO1xuXG4gIG1hcEtleXMoaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGxvd2VyQ2FzZUFjcm9ueW1zLmZpbmRJbmRleCgobG93ZXJDYXNlUHJvcGVyTmFtZSkgPT4ge1xuICAgICAgaWYgKGxvd2VyQ2FzZVByb3Blck5hbWUgPT09IHdvcmRPclBocmFzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBhY3JvbnltID0gYWNyb255bXNbaW5kZXhdO1xuXG4gICAgICB3b3JkT3JQaHJhc2UgPSBhY3JvbnltOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkanVzdE1peGVkUGx1cmFscyhpbmRleE1hcCwgY29udGV4dCkge1xuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwbHVyYWxzIH0gPSBpbmRleE9wdGlvbnMsXG4gICAgICAgIG1peGVkUGx1cmFscyA9IHJlZHVjZVBsdXJhbHMocGx1cmFscywgaXNNaXhlZCksXG4gICAgICAgIHBsdXJhbFBsdXJhbHMgPSBtYXBQbHVyYWxzKG1peGVkUGx1cmFscywgbWl4ZWRUb1BsdXJhbCksXG4gICAgICAgIHNpbmd1bGFyUGx1cmFscyA9IG1hcFBsdXJhbHMobWl4ZWRQbHVyYWxzLCBtaXhlZFRvU2luZ3VsYXIpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29uc3Qgc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSkge1xuICAgICAgY29uc3Qgc2luZ3VsYXJXb3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UsICAvLy9cbiAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgbWl4ZWRXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclRvTWl4ZWQoc2luZ3VsYXJXb3JkT3JQaHJhc2UpLFxuICAgICAgICAgICAgbWl4ZWRQYWdlTnVtYmVycyA9IGluZGV4TWFwW21peGVkV29yZE9yUGhyYXNlXSB8fCBbXTtcblxuICAgICAgcGFnZU51bWJlcnMgPSBbXG4gICAgICAgIC4uLnNpbmd1bGFyUGFnZU51bWJlcnMsXG4gICAgICAgIC4uLm1peGVkUGFnZU51bWJlcnNcbiAgICAgIF07XG5cbiAgICAgIGRlbGV0ZSBpbmRleE1hcFtzaW5ndWxhcldvcmRPclBocmFzZV07XG5cbiAgICAgIGluZGV4TWFwW21peGVkV29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IHBsdXJhbFBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSA9IHBsdXJhbFBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChwbHVyYWxQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UpIHtcbiAgICAgIGNvbnN0IHBsdXJhbFdvcmRPclBocmFzZSA9IHdvcmRPclBocmFzZSwgIC8vL1xuICAgICAgICAgICAgcGx1cmFsUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgbWl4ZWRXb3JkT3JQaHJhc2UgPSBwbHVyYWxUb01peGVkKHBsdXJhbFdvcmRPclBocmFzZSksXG4gICAgICAgICAgICBtaXhlZFBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbbWl4ZWRXb3JkT3JQaHJhc2VdIHx8IFtdO1xuXG4gICAgICBwYWdlTnVtYmVycyA9IFtcbiAgICAgICAgLi4ucGx1cmFsUGFnZU51bWJlcnMsXG4gICAgICAgIC4uLm1peGVkUGFnZU51bWJlcnNcbiAgICAgIF07XG5cbiAgICAgIGRlbGV0ZSBpbmRleE1hcFtwbHVyYWxXb3JkT3JQaHJhc2VdO1xuXG4gICAgICBpbmRleE1hcFttaXhlZFdvcmRPclBocmFzZV0gPSBwYWdlTnVtYmVycztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RQbHVyYWxQbHVyYWxzKGluZGV4TWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHBsdXJhbHMgfSA9IGluZGV4T3B0aW9ucyxcbiAgICAgICAgcGx1cmFsUGx1cmFscyA9IHJlZHVjZVBsdXJhbHMocGx1cmFscywgaXNQbHVyYWwpLFxuICAgICAgICBzaW5ndWxhclBsdXJhbHMgPSBtYXBQbHVyYWxzKHBsdXJhbFBsdXJhbHMsIHBsdXJhbFRvU2luZ3VsYXIpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgY29uc3Qgc2luZ3VsYXJQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UgPSBzaW5ndWxhclBsdXJhbHMuaW5jbHVkZXMod29yZE9yUGhyYXNlKTtcblxuICAgIGlmIChzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSkge1xuICAgICAgY29uc3Qgc2luZ3VsYXJXb3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UsICAvLy9cbiAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycywgIC8vL1xuICAgICAgICAgICAgcGx1cmFsV29yZE9yUGhyYXNlID0gc2luZ3VsYXJUb1BsdXJhbCh3b3JkT3JQaHJhc2UpLFxuICAgICAgICAgICAgcGx1cmFsUGFnZU51bWJlcnMgPSBpbmRleE1hcFtwbHVyYWxXb3JkT3JQaHJhc2VdIHx8IFtdO1xuXG4gICAgICBwYWdlTnVtYmVycyA9IFtcbiAgICAgICAgLi4uc2luZ3VsYXJQYWdlTnVtYmVycyxcbiAgICAgICAgLi4ucGx1cmFsUGFnZU51bWJlcnNcbiAgICAgIF07XG5cbiAgICAgIGRlbGV0ZSBpbmRleE1hcFtzaW5ndWxhcldvcmRPclBocmFzZV07XG5cbiAgICAgIGluZGV4TWFwW3BsdXJhbFdvcmRPclBocmFzZV0gPSBwYWdlTnVtYmVycztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RTaW5ndWxhclBsdXJhbHMoaW5kZXhNYXAsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpbmRleE9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgcGx1cmFscyB9ID0gaW5kZXhPcHRpb25zLFxuICAgICAgICBzaW5ndWxhclBsdXJhbHMgPSByZWR1Y2VQbHVyYWxzKHBsdXJhbHMsIGlzU2luZ3VsYXIpLFxuICAgICAgICBwbHVyYWxQbHVyYWxzID0gbWFwUGx1cmFscyhzaW5ndWxhclBsdXJhbHMsIHNpbmd1bGFyVG9QbHVyYWwpO1xuXG4gIGZvckVhY2goaW5kZXhNYXAsICh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgICBjb25zdCBwbHVyYWxQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UgPSBwbHVyYWxQbHVyYWxzLmluY2x1ZGVzKHdvcmRPclBocmFzZSk7XG5cbiAgICAgIGlmIChwbHVyYWxQbHVyYWxzSW5jbHVkZXNXb3JkT3JQaHJhc2UpIHtcbiAgICAgICAgY29uc3Qgc2luZ3VsYXJXb3JkT3JQaHJhc2UgPSBwbHVyYWxUb1Npbmd1bGFyKHdvcmRPclBocmFzZSksXG4gICAgICAgICAgICAgIHNpbmd1bGFyUGFnZU51bWJlcnMgPSBpbmRleE1hcFtzaW5ndWxhcldvcmRPclBocmFzZV0gfHwgW10sXG4gICAgICAgICAgICAgIHBsdXJhbFdvcmRPclBocmFzZSA9IHdvcmRPclBocmFzZSwgIC8vL1xuICAgICAgICAgICAgICBwbHVyYWxQYWdlTnVtYmVycyA9IHBhZ2VOdW1iZXJzOyAgLy8vXG5cbiAgICAgICAgcGFnZU51bWJlcnMgPSBbXG4gICAgICAgICAgLi4uc2luZ3VsYXJQYWdlTnVtYmVycyxcbiAgICAgICAgICAuLi5wbHVyYWxQYWdlTnVtYmVyc1xuICAgICAgICBdO1xuXG4gICAgICAgIGRlbGV0ZSBpbmRleE1hcFtwbHVyYWxXb3JkT3JQaHJhc2VdO1xuXG4gICAgICAgIGluZGV4TWFwW3Npbmd1bGFyV29yZE9yUGhyYXNlXSA9IHBhZ2VOdW1iZXJzO1xuICAgICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUGx1cmFscyhwbHVyYWxzLCBjYWxsYmFjaykge1xuICBwbHVyYWxzID0gcGx1cmFscy5yZWR1Y2UoKHBsdXJhbHMsIHBsdXJhbCkgPT4geyAvLy9cbiAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhwbHVyYWwpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcGx1cmFscy5wdXNoKHBsdXJhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsdXJhbHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcGx1cmFscztcbn1cblxuZnVuY3Rpb24gbWFwUGx1cmFscyhwbHVyYWxzLCBjYWxsYmFjaykge1xuICBwbHVyYWxzID0gcGx1cmFscy5tYXAoKHBsdXJhbCkgPT4geyAvLy9cbiAgICBwbHVyYWwgPSBjYWxsYmFjayhwbHVyYWwpO1xuXG4gICAgcmV0dXJuIHBsdXJhbDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBsdXJhbHM7XG59XG5cbmZ1bmN0aW9uIGlzU2luZ3VsYXIodGV4dCkge1xuICBjb25zdCBpbmRleE1hdGNoZXMgPSAvW15zKV0kLy50ZXN0KHRleHQpLFxuICAgICAgICBzaW5ndWxhciA9IGluZGV4TWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIHNpbmd1bGFyO1xufVxuXG5mdW5jdGlvbiBpc1BsdXJhbCh0ZXh0KSB7XG4gIGNvbnN0IGluZGV4TWF0Y2hlcyA9IC8oaWVzfHMpJC8udGVzdCh0ZXh0KSxcbiAgICAgICAgcGx1cmFsID0gaW5kZXhNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gcGx1cmFsO1xufVxuXG5mdW5jdGlvbiBpc01peGVkKHRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXRjaGVzID0gL1xcKHNcXCkkLy50ZXN0KHRleHQpLFxuICAgICAgICBtaXhlZCA9IGluZGV4TWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIG1peGVkO1xufVxuXG5mdW5jdGlvbiBtaXhlZFRvUGx1cmFsKHRleHQpIHtcbiAgdGV4dCA9IHRleHQgLy8vXG4gICAgICAgICAgIC5yZXBsYWNlKC9cXChzXFwpJC8sIFNfU1RSSU5HKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVG9NaXhlZCh0ZXh0KSB7XG4gIHRleHQgPSB0ZXh0IC8vL1xuICAgICAgICAgICAucmVwbGFjZSgvcyQvLCBQQVJFTlRIRVNJU0VEX1NfU1RSSU5HKVxuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBtaXhlZFRvU2luZ3VsYXIodGV4dCkge1xuICB0ZXh0ID0gdGV4dCAvLy9cbiAgICAgICAgICAucmVwbGFjZSgvXFwoc1xcKSQvLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBzaW5ndWxhclRvTWl4ZWQodGV4dCkge1xuICB0ZXh0ID0gYCR7dGV4dH0ocylgO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBzaW5ndWxhclRvUGx1cmFsKHRleHQpIHtcbiAgdGV4dCA9IGAke3RleHR9c2AgLy8vXG4gICAgICAgICAgIC5yZXBsYWNlKC95cyQvLCBJRVNfU1RSSU5HKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVG9TaW5ndWxhcih0ZXh0KSB7XG4gIHRleHQgPSB0ZXh0IC8vL1xuICAgICAgICAgICAucmVwbGFjZSgvaWVzJC8sIFlfU1RSSU5HKVxuICAgICAgICAgICAucmVwbGFjZSgvcyQvLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuIl0sIm5hbWVzIjpbImluZGV4TWFwRnJvbUluZGV4RGlyZWN0aXZlSFRNTE5vZGVBbmREaXZpc2lvbkhUTUxOb2RlcyIsImNvbXByZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJpc0xlc3NUaGFuIiwibm9kZVV0aWxpdGllcyIsImlzQW5jZXN0b3JPZiIsImluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJkaXZpc2lvbkhUTUxOb2RlcyIsImNvbnRleHQiLCJpbmRleE1hcCIsImNyZWF0ZUluZGV4TWFwIiwicmVtb3ZlSWdub3JlZFdvcmRzIiwiYWRqdXN0TWl4ZWRQbHVyYWxzIiwiYWRqdXN0UGx1cmFsUGx1cmFscyIsImFkanVzdFNpbmd1bGFyUGx1cmFscyIsImFkanVzdFByb3Blck5vdW5zIiwiYWRqdXN0QWNyb255bXMiLCJjb21wcmVzc1BhZ2VOdW1iZXJzIiwiaW5kZXhPcHRpb25zIiwicGhyYXNlcyIsImluZGV4TWF0Y2hlcyIsIm1hcCIsInBocmFzZSIsImluZGV4TWF0Y2giLCJJbmRleE1hdGNoIiwiZnJvbVBocmFzZSIsImZvckVhY2giLCJkaXZpc2lvbkhUTUxOb2RlIiwiZGl2aXNpb25IVE1MTm9kZUxlc3NUaGFuSW5kZXhEaXJlY3RpdmVIVE1MTm9kZSIsImRpdmlzaW9uSFRNTE5vZGVBbmNlc3Rvck9mSW5kZXhEaXJlY3RpdmVIVE1MTm9kZSIsInBhZ2VOdW1iZXIiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsIndvcmRzT3JQaHJhc2VzIiwid29yZHNPclBocmFzZXNGcm9tUGxhaW5UZXh0QW5kSW5kZXhNYXRjaGVzIiwid29yZE9yUGhyYXNlIiwicGFnZU51bWJlcnMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJwcmVwYXJlUGxhaW5UZXh0IiwicmVwbGFjZSIsInNwbGl0IiwiU0lOR0xFX1NQQUNFIiwicmV2ZXJ0IiwibWFwVmFsdWVzIiwicGFnZU51bWJlckEiLCJwYWdlTnVtYmVyQiIsInNvcnQiLCJOdW1iZXIiLCJkaWZmZXJlbmNlIiwiaWdub3JlZFdvcmRzIiwiaWdub3JlZFdvcmQiLCJwcm9wZXJOb3VucyIsImxvd2VyQ2FzZVByb3Blck5vdW5zIiwicHJvcGVyTm91biIsImxvd2VyQ2FzZVByb3Blck5vdW4iLCJ0b0xvd2VyQ2FzZSIsIm1hcEtleXMiLCJpbmRleCIsImZpbmRJbmRleCIsImxvd2VyQ2FzZVByb3Blck5hbWUiLCJFTVBUWV9TVFJJTkciLCJhY3JvbnltcyIsImxvd2VyQ2FzZUFjcm9ueW1zIiwiYWNyb255bSIsImxvd2VyQ2FzZUFjcm9ueW0iLCJwbHVyYWxzIiwibWl4ZWRQbHVyYWxzIiwicmVkdWNlUGx1cmFscyIsImlzTWl4ZWQiLCJwbHVyYWxQbHVyYWxzIiwibWFwUGx1cmFscyIsIm1peGVkVG9QbHVyYWwiLCJzaW5ndWxhclBsdXJhbHMiLCJtaXhlZFRvU2luZ3VsYXIiLCJzaW5ndWxhclBsdXJhbHNJbmNsdWRlc1dvcmRPclBocmFzZSIsImluY2x1ZGVzIiwic2luZ3VsYXJXb3JkT3JQaHJhc2UiLCJzaW5ndWxhclBhZ2VOdW1iZXJzIiwibWl4ZWRXb3JkT3JQaHJhc2UiLCJzaW5ndWxhclRvTWl4ZWQiLCJtaXhlZFBhZ2VOdW1iZXJzIiwicGx1cmFsUGx1cmFsc0luY2x1ZGVzV29yZE9yUGhyYXNlIiwicGx1cmFsV29yZE9yUGhyYXNlIiwicGx1cmFsUGFnZU51bWJlcnMiLCJwbHVyYWxUb01peGVkIiwiaXNQbHVyYWwiLCJwbHVyYWxUb1Npbmd1bGFyIiwic2luZ3VsYXJUb1BsdXJhbCIsImlzU2luZ3VsYXIiLCJjYWxsYmFjayIsInJlZHVjZSIsInBsdXJhbCIsInJlc3VsdCIsInRleHQiLCJ0ZXN0Iiwic2luZ3VsYXIiLCJtaXhlZCIsIlNfU1RSSU5HIiwiUEFSRU5USEVTSVNFRF9TX1NUUklORyIsIklFU19TVFJJTkciLCJZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYWdCQTs7O2VBQUFBOzs7d0JBWGM7eUJBQ0M7NERBRVI7c0JBRXFCO3lCQUN1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRyxJQUFNLEFBQUVDLFdBQWFDLHlCQUFjLENBQTNCRCxVQUNBRSxhQUE2QkMsdUJBQWEsQ0FBMUNELFlBQVlFLGVBQWlCRCx1QkFBYSxDQUE5QkM7QUFFYixTQUFTTCx1REFBdURNLHNCQUFzQixFQUFFQyxpQkFBaUIsRUFBRUMsT0FBTztJQUN2SCxJQUFNQyxXQUFXQyxlQUFlSix3QkFBd0JDLG1CQUFtQkM7SUFFM0VHLG1CQUFtQkYsVUFBVUQ7SUFFN0JJLG1CQUFtQkgsVUFBVUQ7SUFFN0JLLG9CQUFvQkosVUFBVUQ7SUFFOUJNLHNCQUFzQkwsVUFBVUQ7SUFFaENPLGtCQUFrQk4sVUFBVUQ7SUFFNUJRLGVBQWVQLFVBQVVEO0lBRXpCUyxvQkFBb0JSO0lBRXBCLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTQyxlQUFlSixzQkFBc0IsRUFBRUMsaUJBQWlCLEVBQUVDLE9BQU87SUFDeEUsSUFBTUMsV0FBVyxDQUFDO0lBRWxCLElBQU0sQUFBRVMsZUFBaUJWLFFBQWpCVSxjQUNGLEFBQUVDLFVBQVlELGFBQVpDLFNBQ0ZDLGVBQWVELFFBQVFFLEdBQUcsQ0FBQyxTQUFDQztRQUMxQixJQUFNQyxhQUFhQyxjQUFVLENBQUNDLFVBQVUsQ0FBQ0g7UUFFekMsT0FBT0M7SUFDVDtJQUVOaEIsa0JB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