"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexList;
    }
});
var _necessary = require("necessary");
var _item = /*#__PURE__*/ _interop_require_default(require("../index/item"));
var _index = require("../utilities/index");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var strcmp = _necessary.stringUtilities.strcmp;
var IndexList = /*#__PURE__*/ function() {
    function IndexList(indexItems) {
        _class_call_check(this, IndexList);
        this.indexItems = indexItems;
    }
    _create_class(IndexList, [
        {
            key: "getIndexItems",
            value: function getIndexItems() {
                return this.indexItems;
            }
        },
        {
            key: "reduceIndexItemByLetter",
            value: function reduceIndexItemByLetter(letter, callback) {
                var indexItems = this.indexItems.filter(function(indexItem) {
                    var indexItemMatchesLetter = indexItem.matchLetter(letter);
                    if (indexItemMatchesLetter) {
                        return true;
                    }
                });
                var result = indexItems.map(callback);
                return result;
            }
        }
    ], [
        {
            key: "fromIndexDirectiveHTMLNodeAndDivisionHTMLNodes",
            value: function fromIndexDirectiveHTMLNodeAndDivisionHTMLNodes(indexDirectiveHTMLNode, divisionHTMLNodes, context) {
                var indexMap = (0, _index.indexMapFromIndexDirectiveHTMLNodeAndDivisionHTMLNodes)(indexDirectiveHTMLNode, divisionHTMLNodes, context), indexItems = indexItemsFromIndexMap(indexMap), indexList = new IndexList(indexItems);
                return indexList;
            }
        }
    ]);
    return IndexList;
}();
function indexItemsFromIndexMap(indexMap) {
    var wordsOrPhrases = Object.keys(indexMap); ///
    wordsOrPhrases.sort(function(wordOrPhraseA, wordOrPhraseB) {
        var lowerCaseWordOrPhraseA = wordOrPhraseA.toLowerCase(), lowerCaseWordOrPhraseB = wordOrPhraseB.toLowerCase(), difference = strcmp(lowerCaseWordOrPhraseB, lowerCaseWordOrPhraseA);
        return difference;
    });
    var indexItems = wordsOrPhrases.map(function(wordOrPhrase, index) {
        var pageNumbers = indexMap[wordOrPhrase], indexItem = _item.default.fromWordOrPhraseAndPageNumbers(wordOrPhrase, pageNumbers);
        return indexItem;
    });
    return indexItems;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBJbmRleEl0ZW0gZnJvbSBcIi4uL2luZGV4L2l0ZW1cIjtcblxuaW1wb3J0IHsgaW5kZXhNYXBGcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZUFuZERpdmlzaW9uSFRNTE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbmRleFwiO1xuXG5jb25zdCB7IHN0cmNtcCB9ID0gc3RyaW5nVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleExpc3Qge1xuICBjb25zdHJ1Y3RvcihpbmRleEl0ZW1zKSB7XG4gICAgdGhpcy5pbmRleEl0ZW1zID0gaW5kZXhJdGVtcztcbiAgfVxuXG4gIGdldEluZGV4SXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXhJdGVtcztcbiAgfVxuXG4gIHJlZHVjZUluZGV4SXRlbUJ5TGV0dGVyKGxldHRlciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBpbmRleEl0ZW1zID0gdGhpcy5pbmRleEl0ZW1zLmZpbHRlcigoaW5kZXhJdGVtKSA9PiB7XG4gICAgICBjb25zdCBpbmRleEl0ZW1NYXRjaGVzTGV0dGVyID0gaW5kZXhJdGVtLm1hdGNoTGV0dGVyKGxldHRlcik7XG5cbiAgICAgIGlmIChpbmRleEl0ZW1NYXRjaGVzTGV0dGVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gaW5kZXhJdGVtcy5tYXAoY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZUFuZERpdmlzaW9uSFRNTE5vZGVzKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW5kZXhNYXAgPSBpbmRleE1hcEZyb21JbmRleERpcmVjdGl2ZUhUTUxOb2RlQW5kRGl2aXNpb25IVE1MTm9kZXMoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSwgZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGluZGV4SXRlbXMgPSBpbmRleEl0ZW1zRnJvbUluZGV4TWFwKGluZGV4TWFwKSxcbiAgICAgICAgICBpbmRleExpc3QgPSBuZXcgSW5kZXhMaXN0KGluZGV4SXRlbXMpO1xuXG4gICAgcmV0dXJuIGluZGV4TGlzdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmRleEl0ZW1zRnJvbUluZGV4TWFwKGluZGV4TWFwKSB7XG4gIGNvbnN0IHdvcmRzT3JQaHJhc2VzID0gT2JqZWN0LmtleXMoaW5kZXhNYXApOyAvLy9cblxuICB3b3Jkc09yUGhyYXNlcy5zb3J0KCh3b3JkT3JQaHJhc2VBLCB3b3JkT3JQaHJhc2VCKSA9PiB7XG4gICAgY29uc3QgbG93ZXJDYXNlV29yZE9yUGhyYXNlQSA9IHdvcmRPclBocmFzZUEudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICBsb3dlckNhc2VXb3JkT3JQaHJhc2VCID0gd29yZE9yUGhyYXNlQi50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIGRpZmZlcmVuY2UgPSBzdHJjbXAobG93ZXJDYXNlV29yZE9yUGhyYXNlQiwgbG93ZXJDYXNlV29yZE9yUGhyYXNlQSk7XG5cbiAgICByZXR1cm4gZGlmZmVyZW5jZTtcbiAgfSk7XG5cbiAgY29uc3QgaW5kZXhJdGVtcyA9IHdvcmRzT3JQaHJhc2VzLm1hcCgod29yZE9yUGhyYXNlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbd29yZE9yUGhyYXNlXSxcbiAgICAgICAgICBpbmRleEl0ZW0gPSBJbmRleEl0ZW0uZnJvbVdvcmRPclBocmFzZUFuZFBhZ2VOdW1iZXJzKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpO1xuXG4gICAgcmV0dXJuIGluZGV4SXRlbTtcbiAgfSlcblxuICByZXR1cm4gaW5kZXhJdGVtcztcbn1cbiJdLCJuYW1lcyI6WyJJbmRleExpc3QiLCJzdHJjbXAiLCJzdHJpbmdVdGlsaXRpZXMiLCJpbmRleEl0ZW1zIiwiZ2V0SW5kZXhJdGVtcyIsInJlZHVjZUluZGV4SXRlbUJ5TGV0dGVyIiwibGV0dGVyIiwiY2FsbGJhY2siLCJmaWx0ZXIiLCJpbmRleEl0ZW0iLCJpbmRleEl0ZW1NYXRjaGVzTGV0dGVyIiwibWF0Y2hMZXR0ZXIiLCJyZXN1bHQiLCJtYXAiLCJmcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZUFuZERpdmlzaW9uSFRNTE5vZGVzIiwiaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSIsImRpdmlzaW9uSFRNTE5vZGVzIiwiY29udGV4dCIsImluZGV4TWFwIiwiaW5kZXhNYXBGcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZUFuZERpdmlzaW9uSFRNTE5vZGVzIiwiaW5kZXhJdGVtc0Zyb21JbmRleE1hcCIsImluZGV4TGlzdCIsIndvcmRzT3JQaHJhc2VzIiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJ3b3JkT3JQaHJhc2VBIiwid29yZE9yUGhyYXNlQiIsImxvd2VyQ2FzZVdvcmRPclBocmFzZUEiLCJ0b0xvd2VyQ2FzZSIsImxvd2VyQ2FzZVdvcmRPclBocmFzZUIiLCJkaWZmZXJlbmNlIiwid29yZE9yUGhyYXNlIiwiaW5kZXgiLCJwYWdlTnVtYmVycyIsIkluZGV4SXRlbSIsImZyb21Xb3JkT3JQaHJhc2VBbmRQYWdlTnVtYmVycyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlc7MkRBRVY7cUJBRWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZFLElBQU0sQUFBRUMsU0FBV0MsMEJBQWUsQ0FBMUJEO0FBRU8sSUFBQSxBQUFNRCwwQkFBTjthQUFNQSxVQUNQRyxVQUFVO2dDQURISDtRQUVqQixJQUFJLENBQUNHLFVBQVUsR0FBR0E7O2tCQUZESDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLE1BQU0sRUFBRUMsUUFBUTtnQkFDdEMsSUFBTUosYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0ssTUFBTSxDQUFDLFNBQUNDO29CQUN6QyxJQUFNQyx5QkFBeUJELFVBQVVFLFdBQVcsQ0FBQ0w7b0JBRXJELElBQUlJLHdCQUF3Qjt3QkFDMUIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFNRSxTQUFTVCxXQUFXVSxHQUFHLENBQUNOO2dCQUU5QixPQUFPSztZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLCtDQUErQ0Msc0JBQXNCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPO2dCQUN0RyxJQUFNQyxXQUFXQyxJQUFBQSw2REFBc0QsRUFBQ0osd0JBQXdCQyxtQkFBbUJDLFVBQzdHZCxhQUFhaUIsdUJBQXVCRixXQUNwQ0csWUFBWSxJQTFCRHJCLFVBMEJlRztnQkFFaEMsT0FBT2tCO1lBQ1Q7OztXQTdCbUJyQjs7QUFnQ3JCLFNBQVNvQix1QkFBdUJGLFFBQVE7SUFDdEMsSUFBTUksaUJBQWlCQyxPQUFPQyxJQUFJLENBQUNOLFdBQVcsR0FBRztJQUVqREksZUFBZUcsSUFBSSxDQUFDLFNBQUNDLGVBQWVDO1FBQ2xDLElBQU1DLHlCQUF5QkYsY0FBY0csV0FBVyxJQUNsREMseUJBQXlCSCxjQUFjRSxXQUFXLElBQ2xERSxhQUFhOUIsT0FBTzZCLHdCQUF3QkY7UUFFbEQsT0FBT0c7SUFDVDtJQUVBLElBQU01QixhQUFhbUIsZUFBZVQsR0FBRyxDQUFDLFNBQUNtQixjQUFjQztRQUNuRCxJQUFNQyxjQUFjaEIsUUFBUSxDQUFDYyxhQUFhLEVBQ3BDdkIsWUFBWTBCLGFBQVMsQ0FBQ0MsOEJBQThCLENBQUNKLGNBQWNFO1FBRXpFLE9BQU96QjtJQUNUO0lBRUEsT0FBT047QUFDVCJ9