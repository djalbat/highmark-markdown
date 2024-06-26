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
var _constants = require("../constants");
function indexMapFromDivisionMarkdownNodes(divisionMarkdownNodes, context) {
    var indexMap = {};
    var indexOptions = context.indexOptions, phrases = indexOptions.phrases, ignoredWords = indexOptions.ignoredWords, phraseMatchers = phraseMatchersFromPhrase(phrases);
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
        var regularExpression = phraseMatcher.regularExpression, replacement = phraseMatcher.replacement;
        plainText = plainText.replace(regularExpression, replacement);
    });
    var entries = plainText.split(_constants.SINGLE_SPACE);
    return entries;
}
function phraseMatchersFromPhrase(phrases) {
    var phraseMatchers = phrases.map(function(phrase) {
        var regularExpression = new RegExp(phrase, _constants.GLOBAL_FLAG), replacement = phrase.replace(/\s/g, _constants.UNDERSCORE), phraseMatcher = {
            regularExpression: regularExpression,
            replacement: replacement
        };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFVOREVSU0NPUkUsIEdMT0JBTF9GTEFHLCBFTVBUWV9TVFJJTkcsIFNJTkdMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaW5kZXhNYXAgPSB7fTtcblxuICBjb25zdCB7IGluZGV4T3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBwaHJhc2VzLCBpZ25vcmVkV29yZHMgfSA9IGluZGV4T3B0aW9ucyxcbiAgICAgICAgcGhyYXNlTWF0Y2hlcnMgPSBwaHJhc2VNYXRjaGVyc0Zyb21QaHJhc2UocGhyYXNlcyk7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG5cbiAgICBpZiAocGFnZU51bWJlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGxhaW5UZXh0ID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0Zyb21QbGFpblRleHRBbmRQaHJhc2VNYXRjaGVycyhwbGFpblRleHQsIHBocmFzZU1hdGNoZXJzKTtcblxuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBsZXQgcGFnZU51bWJlcnMgPSBpbmRleE1hcFtlbnRyeV0gfHwgbnVsbDtcblxuICAgICAgICBpZiAocGFnZU51bWJlcnMgPT09IG51bGwpIHtcbiAgICAgICAgICBwYWdlTnVtYmVycyA9IFtdO1xuXG4gICAgICAgICAgaW5kZXhNYXBbZW50cnldID0gcGFnZU51bWJlcnM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYWdlTnVtYmVyc0luY2x1ZGVzUGFnZU51bWJlciA9IHBhZ2VOdW1iZXJzLmluY2x1ZGVzKHBhZ2VOdW1iZXIpO1xuXG4gICAgICAgIGlmICghcGFnZU51bWJlcnNJbmNsdWRlc1BhZ2VOdW1iZXIpIHtcbiAgICAgICAgICBwYWdlTnVtYmVycy5wdXNoKHBhZ2VOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGlnbm9yZWRXb3Jkcy5mb3JFYWNoKChpZ25vcmVkV29yZCkgPT4ge1xuICAgIGRlbGV0ZSBpbmRleE1hcFtpZ25vcmVkV29yZF07XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleE1hcDtcbn1cblxuZnVuY3Rpb24gZW50cmllc0Zyb21QbGFpblRleHRBbmRQaHJhc2VNYXRjaGVycyhwbGFpblRleHQsIHBocmFzZU1hdGNoZXJzKSB7XG4gIHBsYWluVGV4dCA9IHByZXBhcmVQbGFpblRleHQocGxhaW5UZXh0KTsgIC8vL1xuXG4gIHBocmFzZU1hdGNoZXJzLmZvckVhY2goKHBocmFzZU1hdGNoZXIpID0+IHtcbiAgICBjb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uLCByZXBsYWNlbWVudCB9ID0gcGhyYXNlTWF0Y2hlcjtcblxuICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKHJlZ3VsYXJFeHByZXNzaW9uLCByZXBsYWNlbWVudCk7XG4gIH0pO1xuXG4gIGNvbnN0IGVudHJpZXMgPSBwbGFpblRleHQuc3BsaXQoU0lOR0xFX1NQQUNFKTtcblxuICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gcGhyYXNlTWF0Y2hlcnNGcm9tUGhyYXNlKHBocmFzZXMpIHtcbiAgY29uc3QgcGhyYXNlTWF0Y2hlcnMgPSBwaHJhc2VzLm1hcCgocGhyYXNlKSA9PiB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKHBocmFzZSwgR0xPQkFMX0ZMQUcpLFxuICAgICAgICAgIHJlcGxhY2VtZW50ID0gcGhyYXNlLnJlcGxhY2UoL1xccy9nLCBVTkRFUlNDT1JFKSxcbiAgICAgICAgICBwaHJhc2VNYXRjaGVyID0ge1xuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb24sXG4gICAgICAgICAgICByZXBsYWNlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gcGhyYXNlTWF0Y2hlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBocmFzZU1hdGNoZXJzO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlUGxhaW5UZXh0KHBsYWluVGV4dCkge1xuICBwbGFpblRleHQgPSBwbGFpblRleHQudG9Mb3dlckNhc2UoKTsgIC8vL1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9bXmEteiBdL2csIFNJTkdMRV9TUEFDRSk7XG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoL1xccysvZywgU0lOR0xFX1NQQUNFKTtcblxuICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcGxhaW5UZXh0O1xufVxuIl0sIm5hbWVzIjpbImluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImNvbnRleHQiLCJpbmRleE1hcCIsImluZGV4T3B0aW9ucyIsInBocmFzZXMiLCJpZ25vcmVkV29yZHMiLCJwaHJhc2VNYXRjaGVycyIsInBocmFzZU1hdGNoZXJzRnJvbVBocmFzZSIsImZvckVhY2giLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImluZGV4IiwicGFnZU51bWJlciIsImdldFBhZ2VOdW1iZXIiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsImVudHJpZXMiLCJlbnRyaWVzRnJvbVBsYWluVGV4dEFuZFBocmFzZU1hdGNoZXJzIiwiZW50cnkiLCJwYWdlTnVtYmVycyIsInBhZ2VOdW1iZXJzSW5jbHVkZXNQYWdlTnVtYmVyIiwiaW5jbHVkZXMiLCJwdXNoIiwiaWdub3JlZFdvcmQiLCJwcmVwYXJlUGxhaW5UZXh0IiwicGhyYXNlTWF0Y2hlciIsInJlZ3VsYXJFeHByZXNzaW9uIiwicmVwbGFjZW1lbnQiLCJyZXBsYWNlIiwic3BsaXQiLCJTSU5HTEVfU1BBQ0UiLCJtYXAiLCJwaHJhc2UiLCJSZWdFeHAiLCJHTE9CQUxfRkxBRyIsIlVOREVSU0NPUkUiLCJ0b0xvd2VyQ2FzZSIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWdCQTs7O2VBQUFBOzs7eUJBRm9EO0FBRTdELFNBQVNBLGtDQUFrQ0MscUJBQXFCLEVBQUVDLE9BQU87SUFDOUUsSUFBTUMsV0FBVyxDQUFDO0lBRWxCLElBQU0sQUFBRUMsZUFBaUJGLFFBQWpCRSxjQUNBQyxVQUEwQkQsYUFBMUJDLFNBQVNDLGVBQWlCRixhQUFqQkUsY0FDWEMsaUJBQWlCQyx5QkFBeUJIO0lBRWhESixzQkFBc0JRLE9BQU8sQ0FBQyxTQUFDQyxzQkFBc0JDO1FBQ25ELElBQU1DLGFBQWFGLHFCQUFxQkcsYUFBYTtRQUVyRCxJQUFJRCxlQUFlLE1BQU07WUFDdkIsSUFBTUUsWUFBWUoscUJBQXFCSyxXQUFXLENBQUNiLFVBQzdDYyxVQUFVQyxzQ0FBc0NILFdBQVdQO1lBRWpFUyxRQUFRUCxPQUFPLENBQUMsU0FBQ1M7Z0JBQ2YsSUFBSUMsY0FBY2hCLFFBQVEsQ0FBQ2UsTUFBTSxJQUFJO2dCQUVyQyxJQUFJQyxnQkFBZ0IsTUFBTTtvQkFDeEJBLGNBQWMsRUFBRTtvQkFFaEJoQixRQUFRLENBQUNlLE1BQU0sR0FBR0M7Z0JBQ3BCO2dCQUVBLElBQU1DLGdDQUFnQ0QsWUFBWUUsUUFBUSxDQUFDVDtnQkFFM0QsSUFBSSxDQUFDUSwrQkFBK0I7b0JBQ2xDRCxZQUFZRyxJQUFJLENBQUNWO2dCQUNuQjtZQUNGO1FBQ0Y7SUFDRjtJQUVBTixhQUFhRyxPQUFPLENBQUMsU0FBQ2M7UUFDcEIsT0FBT3BCLFFBQVEsQ0FBQ29CLFlBQVk7SUFDOUI7SUFFQSxPQUFPcEI7QUFDVDtBQUVBLFNBQVNjLHNDQUFzQ0gsU0FBUyxFQUFFUCxjQUFjO0lBQ3RFTyxZQUFZVSxpQkFBaUJWLFlBQWEsR0FBRztJQUU3Q1AsZUFBZUUsT0FBTyxDQUFDLFNBQUNnQjtRQUN0QixJQUFRQyxvQkFBbUNELGNBQW5DQyxtQkFBbUJDLGNBQWdCRixjQUFoQkU7UUFFM0JiLFlBQVlBLFVBQVVjLE9BQU8sQ0FBQ0YsbUJBQW1CQztJQUNuRDtJQUVBLElBQU1YLFVBQVVGLFVBQVVlLEtBQUssQ0FBQ0MsdUJBQVk7SUFFNUMsT0FBT2Q7QUFDVDtBQUVBLFNBQVNSLHlCQUF5QkgsT0FBTztJQUN2QyxJQUFNRSxpQkFBaUJGLFFBQVEwQixHQUFHLENBQUMsU0FBQ0M7UUFDbEMsSUFBTU4sb0JBQW9CLElBQUlPLE9BQU9ELFFBQVFFLHNCQUFXLEdBQ2xEUCxjQUFjSyxPQUFPSixPQUFPLENBQUMsT0FBT08scUJBQVUsR0FDOUNWLGdCQUFnQjtZQUNkQyxtQkFBQUE7WUFDQUMsYUFBQUE7UUFDRjtRQUVOLE9BQU9GO0lBQ1Q7SUFFQSxPQUFPbEI7QUFDVDtBQUVBLFNBQVNpQixpQkFBaUJWLFNBQVM7SUFDakNBLFlBQVlBLFVBQVVzQixXQUFXLElBQUssR0FBRztJQUV6Q3RCLFlBQVlBLFVBQVVjLE9BQU8sQ0FBQyxZQUFZRSx1QkFBWTtJQUV0RGhCLFlBQVlBLFVBQVVjLE9BQU8sQ0FBQyxRQUFRRSx1QkFBWTtJQUVsRGhCLFlBQVlBLFVBQVVjLE9BQU8sQ0FBQyxjQUFjUyx1QkFBWTtJQUV4RCxPQUFPdkI7QUFDVCJ9