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
            key: "fromDivisionMarkdownNodes",
            value: function fromDivisionMarkdownNodes(divisionMarkdownNodes, context) {
                var indexMap = (0, _index.indexMapFromDivisionMarkdownNodes)(divisionMarkdownNodes, context), indexItems = indexItemsFromIndexMap(indexMap), indexList = new IndexList(indexItems);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBJbmRleEl0ZW0gZnJvbSBcIi4uL2luZGV4L2l0ZW1cIjtcblxuaW1wb3J0IHsgaW5kZXhNYXBGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbmRleFwiO1xuXG5jb25zdCB7IHN0cmNtcCB9ID0gc3RyaW5nVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleExpc3Qge1xuICBjb25zdHJ1Y3RvcihpbmRleEl0ZW1zKSB7XG4gICAgdGhpcy5pbmRleEl0ZW1zID0gaW5kZXhJdGVtcztcbiAgfVxuXG4gIGdldEluZGV4SXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXhJdGVtcztcbiAgfVxuXG4gIHJlZHVjZUluZGV4SXRlbUJ5TGV0dGVyKGxldHRlciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBpbmRleEl0ZW1zID0gdGhpcy5pbmRleEl0ZW1zLmZpbHRlcigoaW5kZXhJdGVtKSA9PiB7XG4gICAgICBjb25zdCBpbmRleEl0ZW1NYXRjaGVzTGV0dGVyID0gaW5kZXhJdGVtLm1hdGNoTGV0dGVyKGxldHRlcik7XG5cbiAgICAgIGlmIChpbmRleEl0ZW1NYXRjaGVzTGV0dGVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gaW5kZXhJdGVtcy5tYXAoY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGluZGV4TWFwID0gaW5kZXhNYXBGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgaW5kZXhJdGVtcyA9IGluZGV4SXRlbXNGcm9tSW5kZXhNYXAoaW5kZXhNYXApLFxuICAgICAgICAgIGluZGV4TGlzdCA9IG5ldyBJbmRleExpc3QoaW5kZXhJdGVtcyk7XG5cbiAgICByZXR1cm4gaW5kZXhMaXN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGluZGV4SXRlbXNGcm9tSW5kZXhNYXAoaW5kZXhNYXApIHtcbiAgY29uc3Qgd29yZHNPclBocmFzZXMgPSBPYmplY3Qua2V5cyhpbmRleE1hcCk7IC8vL1xuXG4gIHdvcmRzT3JQaHJhc2VzLnNvcnQoKHdvcmRPclBocmFzZUEsIHdvcmRPclBocmFzZUIpID0+IHtcbiAgICBjb25zdCBsb3dlckNhc2VXb3JkT3JQaHJhc2VBID0gd29yZE9yUGhyYXNlQS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIGxvd2VyQ2FzZVdvcmRPclBocmFzZUIgPSB3b3JkT3JQaHJhc2VCLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgZGlmZmVyZW5jZSA9IHN0cmNtcChsb3dlckNhc2VXb3JkT3JQaHJhc2VCLCBsb3dlckNhc2VXb3JkT3JQaHJhc2VBKTtcblxuICAgIHJldHVybiBkaWZmZXJlbmNlO1xuICB9KTtcblxuICBjb25zdCBpbmRleEl0ZW1zID0gd29yZHNPclBocmFzZXMubWFwKCh3b3JkT3JQaHJhc2UsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFnZU51bWJlcnMgPSBpbmRleE1hcFt3b3JkT3JQaHJhc2VdLFxuICAgICAgICAgIGluZGV4SXRlbSA9IEluZGV4SXRlbS5mcm9tV29yZE9yUGhyYXNlQW5kUGFnZU51bWJlcnMod29yZE9yUGhyYXNlLCBwYWdlTnVtYmVycyk7XG5cbiAgICByZXR1cm4gaW5kZXhJdGVtO1xuICB9KVxuXG4gIHJldHVybiBpbmRleEl0ZW1zO1xufVxuIl0sIm5hbWVzIjpbIkluZGV4TGlzdCIsInN0cmNtcCIsInN0cmluZ1V0aWxpdGllcyIsImluZGV4SXRlbXMiLCJnZXRJbmRleEl0ZW1zIiwicmVkdWNlSW5kZXhJdGVtQnlMZXR0ZXIiLCJsZXR0ZXIiLCJjYWxsYmFjayIsImZpbHRlciIsImluZGV4SXRlbSIsImluZGV4SXRlbU1hdGNoZXNMZXR0ZXIiLCJtYXRjaExldHRlciIsInJlc3VsdCIsIm1hcCIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJjb250ZXh0IiwiaW5kZXhNYXAiLCJpbmRleE1hcEZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJpbmRleEl0ZW1zRnJvbUluZGV4TWFwIiwiaW5kZXhMaXN0Iiwid29yZHNPclBocmFzZXMiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsIndvcmRPclBocmFzZUEiLCJ3b3JkT3JQaHJhc2VCIiwibG93ZXJDYXNlV29yZE9yUGhyYXNlQSIsInRvTG93ZXJDYXNlIiwibG93ZXJDYXNlV29yZE9yUGhyYXNlQiIsImRpZmZlcmVuY2UiLCJ3b3JkT3JQaHJhc2UiLCJpbmRleCIsInBhZ2VOdW1iZXJzIiwiSW5kZXhJdGVtIiwiZnJvbVdvcmRPclBocmFzZUFuZFBhZ2VOdW1iZXJzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVzsyREFFVjtxQkFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEQsSUFBTSxBQUFFQyxTQUFXQywwQkFBZSxDQUExQkQ7QUFFTyxJQUFBLEFBQU1ELDBCQUFOO2FBQU1BLFVBQ1BHLFVBQVU7Z0NBREhIO1FBRWpCLElBQUksQ0FBQ0csVUFBVSxHQUFHQTs7a0JBRkRIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLHdCQUF3QkMsTUFBTSxFQUFFQyxRQUFRO2dCQUN0QyxJQUFNSixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDSyxNQUFNLENBQUMsU0FBQ0M7b0JBQ3pDLElBQU1DLHlCQUF5QkQsVUFBVUUsV0FBVyxDQUFDTDtvQkFFckQsSUFBSUksd0JBQXdCO3dCQUMxQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQU1FLFNBQVNULFdBQVdVLEdBQUcsQ0FBQ047Z0JBRTlCLE9BQU9LO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxxQkFBcUIsRUFBRUMsT0FBTztnQkFDN0QsSUFBTUMsV0FBV0MsSUFBQUEsd0NBQWlDLEVBQUNILHVCQUF1QkMsVUFDcEViLGFBQWFnQix1QkFBdUJGLFdBQ3BDRyxZQUFZLElBMUJEcEIsVUEwQmVHO2dCQUVoQyxPQUFPaUI7WUFDVDs7O1dBN0JtQnBCOztBQWdDckIsU0FBU21CLHVCQUF1QkYsUUFBUTtJQUN0QyxJQUFNSSxpQkFBaUJDLE9BQU9DLElBQUksQ0FBQ04sV0FBVyxHQUFHO0lBRWpESSxlQUFlRyxJQUFJLENBQUMsU0FBQ0MsZUFBZUM7UUFDbEMsSUFBTUMseUJBQXlCRixjQUFjRyxXQUFXLElBQ2xEQyx5QkFBeUJILGNBQWNFLFdBQVcsSUFDbERFLGFBQWE3QixPQUFPNEIsd0JBQXdCRjtRQUVsRCxPQUFPRztJQUNUO0lBRUEsSUFBTTNCLGFBQWFrQixlQUFlUixHQUFHLENBQUMsU0FBQ2tCLGNBQWNDO1FBQ25ELElBQU1DLGNBQWNoQixRQUFRLENBQUNjLGFBQWEsRUFDcEN0QixZQUFZeUIsYUFBUyxDQUFDQyw4QkFBOEIsQ0FBQ0osY0FBY0U7UUFFekUsT0FBT3hCO0lBQ1Q7SUFFQSxPQUFPTjtBQUNUIn0=