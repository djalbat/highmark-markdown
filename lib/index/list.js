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
            key: "mapIndexItem",
            value: function mapIndexItem(callback) {
                return this.indexItems.map(callback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBJbmRleEl0ZW0gZnJvbSBcIi4uL2luZGV4L2l0ZW1cIjtcblxuaW1wb3J0IHsgaW5kZXhNYXBGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbmRleFwiO1xuXG5jb25zdCB7IHN0cmNtcCB9ID0gc3RyaW5nVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleExpc3Qge1xuICBjb25zdHJ1Y3RvcihpbmRleEl0ZW1zKSB7XG4gICAgdGhpcy5pbmRleEl0ZW1zID0gaW5kZXhJdGVtcztcbiAgfVxuXG4gIGdldEluZGV4SXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXhJdGVtcztcbiAgfVxuXG4gIG1hcEluZGV4SXRlbShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5pbmRleEl0ZW1zLm1hcChjYWxsYmFjayk7IH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbmRleE1hcCA9IGluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGluZGV4SXRlbXMgPSBpbmRleEl0ZW1zRnJvbUluZGV4TWFwKGluZGV4TWFwKSxcbiAgICAgICAgICBpbmRleExpc3QgPSBuZXcgSW5kZXhMaXN0KGluZGV4SXRlbXMpO1xuXG4gICAgcmV0dXJuIGluZGV4TGlzdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmRleEl0ZW1zRnJvbUluZGV4TWFwKGluZGV4TWFwKSB7XG4gIGNvbnN0IHdvcmRzT3JQaHJhc2VzID0gT2JqZWN0LmtleXMoaW5kZXhNYXApOyAvLy9cblxuICB3b3Jkc09yUGhyYXNlcy5zb3J0KCh3b3JkT3JQaHJhc2VBLCB3b3JkT3JQaHJhc2VCKSA9PiB7XG4gICAgY29uc3QgbG93ZXJDYXNlV29yZE9yUGhyYXNlQSA9IHdvcmRPclBocmFzZUEudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICBsb3dlckNhc2VXb3JkT3JQaHJhc2VCID0gd29yZE9yUGhyYXNlQi50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIGRpZmZlcmVuY2UgPSBzdHJjbXAobG93ZXJDYXNlV29yZE9yUGhyYXNlQiwgbG93ZXJDYXNlV29yZE9yUGhyYXNlQSk7XG5cbiAgICByZXR1cm4gZGlmZmVyZW5jZTtcbiAgfSk7XG5cbiAgY29uc3QgaW5kZXhJdGVtcyA9IHdvcmRzT3JQaHJhc2VzLm1hcCgod29yZE9yUGhyYXNlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbd29yZE9yUGhyYXNlXSxcbiAgICAgICAgICBpbmRleEl0ZW0gPSBJbmRleEl0ZW0uZnJvbVdvcmRPclBocmFzZUFuZFBhZ2VOdW1iZXJzKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpO1xuXG4gICAgcmV0dXJuIGluZGV4SXRlbTtcbiAgfSlcblxuICByZXR1cm4gaW5kZXhJdGVtcztcbn1cbiJdLCJuYW1lcyI6WyJJbmRleExpc3QiLCJzdHJjbXAiLCJzdHJpbmdVdGlsaXRpZXMiLCJpbmRleEl0ZW1zIiwiZ2V0SW5kZXhJdGVtcyIsIm1hcEluZGV4SXRlbSIsImNhbGxiYWNrIiwibWFwIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImNvbnRleHQiLCJpbmRleE1hcCIsImluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImluZGV4SXRlbXNGcm9tSW5kZXhNYXAiLCJpbmRleExpc3QiLCJ3b3Jkc09yUGhyYXNlcyIsIk9iamVjdCIsImtleXMiLCJzb3J0Iiwid29yZE9yUGhyYXNlQSIsIndvcmRPclBocmFzZUIiLCJsb3dlckNhc2VXb3JkT3JQaHJhc2VBIiwidG9Mb3dlckNhc2UiLCJsb3dlckNhc2VXb3JkT3JQaHJhc2VCIiwiZGlmZmVyZW5jZSIsIndvcmRPclBocmFzZSIsImluZGV4IiwicGFnZU51bWJlcnMiLCJpbmRleEl0ZW0iLCJJbmRleEl0ZW0iLCJmcm9tV29yZE9yUGhyYXNlQW5kUGFnZU51bWJlcnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJXOzJEQUVWO3FCQUU0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFNLEFBQUVDLFNBQVdDLDBCQUFlLENBQTFCRDtBQUVPLElBQUEsQUFBTUQsMEJBQUQsQUFBTDthQUFNQSxVQUNQRyxVQUFVO2dDQURISDtRQUVqQixJQUFJLENBQUNHLFVBQVUsR0FBR0E7O2tCQUZESDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDSCxVQUFVLENBQUNJLEdBQUcsQ0FBQ0Q7WUFBVzs7OztZQUV4REUsS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxxQkFBcUIsRUFBRUMsT0FBTztnQkFDN0QsSUFBTUMsV0FBV0MsSUFBQUEsd0NBQWlDLEVBQUNILHVCQUF1QkMsVUFDcEVQLGFBQWFVLHVCQUF1QkYsV0FDcENHLFlBQVksSUFkRGQsVUFjZUc7Z0JBRWhDLE9BQU9XO1lBQ1Q7OztXQWpCbUJkOztBQW9CckIsU0FBU2EsdUJBQXVCRixRQUFRO0lBQ3RDLElBQU1JLGlCQUFpQkMsT0FBT0MsSUFBSSxDQUFDTixXQUFXLEdBQUc7SUFFakRJLGVBQWVHLElBQUksQ0FBQyxTQUFDQyxlQUFlQztRQUNsQyxJQUFNQyx5QkFBeUJGLGNBQWNHLFdBQVcsSUFDbERDLHlCQUF5QkgsY0FBY0UsV0FBVyxJQUNsREUsYUFBYXZCLE9BQU9zQix3QkFBd0JGO1FBRWxELE9BQU9HO0lBQ1Q7SUFFQSxJQUFNckIsYUFBYVksZUFBZVIsR0FBRyxDQUFDLFNBQUNrQixjQUFjQztRQUNuRCxJQUFNQyxjQUFjaEIsUUFBUSxDQUFDYyxhQUFhLEVBQ3BDRyxZQUFZQyxhQUFTLENBQUNDLDhCQUE4QixDQUFDTCxjQUFjRTtRQUV6RSxPQUFPQztJQUNUO0lBRUEsT0FBT3pCO0FBQ1QifQ==