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
var _phraseMatcher = /*#__PURE__*/ _interop_require_default(require("../index/phraseMatcher"));
var _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function indexMapFromDivisionMarkdownNodes(divisionMarkdownNodes, context) {
    var indexMap = {};
    var indexOptions = context.indexOptions, phrases = indexOptions.phrases, ignoredWords = indexOptions.ignoredWords, phraseMatchers = phraseMatchersFromPhrases(phrases);
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode, index) {
        var pageNumber = divisionMarkdownNode.getPageNumber();
        if (pageNumber !== null) {
            var plainText = divisionMarkdownNode.asPlainText(context), entries = entriesFromPlainTextAndPhraseMatchers(plainText, phraseMatchers);
            entries.forEach(function(entry) {
                var pageNumbers = indexMap[entry] || null;
                if (pageNumbers === null) {
                    pageNumbers = [];
                    indexMap[entry] = pageNumbers;
                }
                var pageNumbersIncludesPageNumber = pageNumbers.includes(pageNumber);
                if (!pageNumbersIncludesPageNumber) {
                    pageNumbers.push(pageNumber);
                }
            });
        }
    });
    ignoredWords.forEach(function(ignoredWord) {
        delete indexMap[ignoredWord];
    });
    return indexMap;
}
function entriesFromPlainTextAndPhraseMatchers(plainText, phraseMatchers) {
    plainText = preparePlainText(plainText); ///
    phraseMatchers.forEach(function(phraseMatcher) {
        plainText = phraseMatcher.replace(plainText);
    });
    var entries = plainText.split(_constants.SINGLE_SPACE);
    return entries;
}
function phraseMatchersFromPhrases(phrases) {
    var phraseMatchers = phrases.map(function(phrase) {
        var phraseMatcher = _phraseMatcher.default.fromPhrase(phrase);
        return phraseMatcher;
    });
    return phraseMatchers;
}
function preparePlainText(plainText) {
    plainText = plainText.toLowerCase(); ///
    plainText = plainText.replace(/[^a-z ]/g, _constants.SINGLE_SPACE);
    plainText = plainText.replace(/\s+/g, _constants.SINGLE_SPACE);
    plainText = plainText.replace(/^\s+|\s+$/g, _constants.EMPTY_STRING);
    return plainText;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQaHJhc2VNYXRjaGVyIGZyb20gXCIuLi9pbmRleC9waHJhc2VNYXRjaGVyXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgU0lOR0xFX1NQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhNYXBGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBpbmRleE1hcCA9IHt9O1xuXG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IHBocmFzZXMsIGlnbm9yZWRXb3JkcyB9ID0gaW5kZXhPcHRpb25zLFxuICAgICAgICBwaHJhc2VNYXRjaGVycyA9IHBocmFzZU1hdGNoZXJzRnJvbVBocmFzZXMocGhyYXNlcyk7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG5cbiAgICBpZiAocGFnZU51bWJlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGxhaW5UZXh0ID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0Zyb21QbGFpblRleHRBbmRQaHJhc2VNYXRjaGVycyhwbGFpblRleHQsIHBocmFzZU1hdGNoZXJzKTtcblxuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBsZXQgcGFnZU51bWJlcnMgPSBpbmRleE1hcFtlbnRyeV0gfHwgbnVsbDtcblxuICAgICAgICBpZiAocGFnZU51bWJlcnMgPT09IG51bGwpIHtcbiAgICAgICAgICBwYWdlTnVtYmVycyA9IFtdO1xuXG4gICAgICAgICAgaW5kZXhNYXBbZW50cnldID0gcGFnZU51bWJlcnM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYWdlTnVtYmVyc0luY2x1ZGVzUGFnZU51bWJlciA9IHBhZ2VOdW1iZXJzLmluY2x1ZGVzKHBhZ2VOdW1iZXIpO1xuXG4gICAgICAgIGlmICghcGFnZU51bWJlcnNJbmNsdWRlc1BhZ2VOdW1iZXIpIHtcbiAgICAgICAgICBwYWdlTnVtYmVycy5wdXNoKHBhZ2VOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGlnbm9yZWRXb3Jkcy5mb3JFYWNoKChpZ25vcmVkV29yZCkgPT4ge1xuICAgIGRlbGV0ZSBpbmRleE1hcFtpZ25vcmVkV29yZF07XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleE1hcDtcbn1cblxuZnVuY3Rpb24gZW50cmllc0Zyb21QbGFpblRleHRBbmRQaHJhc2VNYXRjaGVycyhwbGFpblRleHQsIHBocmFzZU1hdGNoZXJzKSB7XG4gIHBsYWluVGV4dCA9IHByZXBhcmVQbGFpblRleHQocGxhaW5UZXh0KTsgIC8vL1xuXG4gIHBocmFzZU1hdGNoZXJzLmZvckVhY2goKHBocmFzZU1hdGNoZXIpID0+IHtcbiAgICBwbGFpblRleHQgPSBwaHJhc2VNYXRjaGVyLnJlcGxhY2UocGxhaW5UZXh0KTtcbiAgfSk7XG5cbiAgY29uc3QgZW50cmllcyA9IHBsYWluVGV4dC5zcGxpdChTSU5HTEVfU1BBQ0UpO1xuXG4gIHJldHVybiBlbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBwaHJhc2VNYXRjaGVyc0Zyb21QaHJhc2VzKHBocmFzZXMpIHtcbiAgY29uc3QgcGhyYXNlTWF0Y2hlcnMgPSBwaHJhc2VzLm1hcCgocGhyYXNlKSA9PiB7XG4gICAgY29uc3QgcGhyYXNlTWF0Y2hlciA9IFBocmFzZU1hdGNoZXIuZnJvbVBocmFzZShwaHJhc2UpO1xuXG4gICAgcmV0dXJuIHBocmFzZU1hdGNoZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwaHJhc2VNYXRjaGVycztcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVBsYWluVGV4dChwbGFpblRleHQpIHtcbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnRvTG93ZXJDYXNlKCk7ICAvLy9cblxuICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSgvW15hLXogXS9nLCBTSU5HTEVfU1BBQ0UpO1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9cXHMrL2csIFNJTkdMRV9TUEFDRSk7XG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoL15cXHMrfFxccyskL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHBsYWluVGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJpbmRleE1hcEZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJjb250ZXh0IiwiaW5kZXhNYXAiLCJpbmRleE9wdGlvbnMiLCJwaHJhc2VzIiwiaWdub3JlZFdvcmRzIiwicGhyYXNlTWF0Y2hlcnMiLCJwaHJhc2VNYXRjaGVyc0Zyb21QaHJhc2VzIiwiZm9yRWFjaCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaW5kZXgiLCJwYWdlTnVtYmVyIiwiZ2V0UGFnZU51bWJlciIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwiZW50cmllcyIsImVudHJpZXNGcm9tUGxhaW5UZXh0QW5kUGhyYXNlTWF0Y2hlcnMiLCJlbnRyeSIsInBhZ2VOdW1iZXJzIiwicGFnZU51bWJlcnNJbmNsdWRlc1BhZ2VOdW1iZXIiLCJpbmNsdWRlcyIsInB1c2giLCJpZ25vcmVkV29yZCIsInByZXBhcmVQbGFpblRleHQiLCJwaHJhc2VNYXRjaGVyIiwicmVwbGFjZSIsInNwbGl0IiwiU0lOR0xFX1NQQUNFIiwibWFwIiwicGhyYXNlIiwiUGhyYXNlTWF0Y2hlciIsImZyb21QaHJhc2UiLCJ0b0xvd2VyQ2FzZSIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTWdCQTs7O2VBQUFBOzs7b0VBSlU7eUJBRWlCOzs7Ozs7QUFFcEMsU0FBU0Esa0NBQWtDQyxxQkFBcUIsRUFBRUMsT0FBTztJQUM5RSxJQUFNQyxXQUFXLENBQUM7SUFFbEIsSUFBTSxBQUFFQyxlQUFpQkYsUUFBakJFLGNBQ0FDLFVBQTBCRCxhQUExQkMsU0FBU0MsZUFBaUJGLGFBQWpCRSxjQUNYQyxpQkFBaUJDLDBCQUEwQkg7SUFFakRKLHNCQUFzQlEsT0FBTyxDQUFDLFNBQUNDLHNCQUFzQkM7UUFDbkQsSUFBTUMsYUFBYUYscUJBQXFCRyxhQUFhO1FBRXJELElBQUlELGVBQWUsTUFBTTtZQUN2QixJQUFNRSxZQUFZSixxQkFBcUJLLFdBQVcsQ0FBQ2IsVUFDN0NjLFVBQVVDLHNDQUFzQ0gsV0FBV1A7WUFFakVTLFFBQVFQLE9BQU8sQ0FBQyxTQUFDUztnQkFDZixJQUFJQyxjQUFjaEIsUUFBUSxDQUFDZSxNQUFNLElBQUk7Z0JBRXJDLElBQUlDLGdCQUFnQixNQUFNO29CQUN4QkEsY0FBYyxFQUFFO29CQUVoQmhCLFFBQVEsQ0FBQ2UsTUFBTSxHQUFHQztnQkFDcEI7Z0JBRUEsSUFBTUMsZ0NBQWdDRCxZQUFZRSxRQUFRLENBQUNUO2dCQUUzRCxJQUFJLENBQUNRLCtCQUErQjtvQkFDbENELFlBQVlHLElBQUksQ0FBQ1Y7Z0JBQ25CO1lBQ0Y7UUFDRjtJQUNGO0lBRUFOLGFBQWFHLE9BQU8sQ0FBQyxTQUFDYztRQUNwQixPQUFPcEIsUUFBUSxDQUFDb0IsWUFBWTtJQUM5QjtJQUVBLE9BQU9wQjtBQUNUO0FBRUEsU0FBU2Msc0NBQXNDSCxTQUFTLEVBQUVQLGNBQWM7SUFDdEVPLFlBQVlVLGlCQUFpQlYsWUFBYSxHQUFHO0lBRTdDUCxlQUFlRSxPQUFPLENBQUMsU0FBQ2dCO1FBQ3RCWCxZQUFZVyxjQUFjQyxPQUFPLENBQUNaO0lBQ3BDO0lBRUEsSUFBTUUsVUFBVUYsVUFBVWEsS0FBSyxDQUFDQyx1QkFBWTtJQUU1QyxPQUFPWjtBQUNUO0FBRUEsU0FBU1IsMEJBQTBCSCxPQUFPO0lBQ3hDLElBQU1FLGlCQUFpQkYsUUFBUXdCLEdBQUcsQ0FBQyxTQUFDQztRQUNsQyxJQUFNTCxnQkFBZ0JNLHNCQUFhLENBQUNDLFVBQVUsQ0FBQ0Y7UUFFL0MsT0FBT0w7SUFDVDtJQUVBLE9BQU9sQjtBQUNUO0FBRUEsU0FBU2lCLGlCQUFpQlYsU0FBUztJQUNqQ0EsWUFBWUEsVUFBVW1CLFdBQVcsSUFBSyxHQUFHO0lBRXpDbkIsWUFBWUEsVUFBVVksT0FBTyxDQUFDLFlBQVlFLHVCQUFZO0lBRXREZCxZQUFZQSxVQUFVWSxPQUFPLENBQUMsUUFBUUUsdUJBQVk7SUFFbERkLFlBQVlBLFVBQVVZLE9BQU8sQ0FBQyxjQUFjUSx1QkFBWTtJQUV4RCxPQUFPcEI7QUFDVCJ9