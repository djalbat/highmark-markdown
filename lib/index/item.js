"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexItem;
    }
});
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
var IndexItem = /*#__PURE__*/ function() {
    function IndexItem(wordOrPhrase, pageNumbers) {
        _class_call_check(this, IndexItem);
        this.wordOrPhrase = wordOrPhrase;
        this.pageNumbers = pageNumbers;
    }
    _create_class(IndexItem, [
        {
            key: "getWordOrPhrase",
            value: function getWordOrPhrase() {
                return this.wordOrPhrase;
            }
        },
        {
            key: "getPageNumbers",
            value: function getPageNumbers() {
                return this.pageNumbers;
            }
        }
    ], [
        {
            key: "fromWordOrPhraseAndPageNumbers",
            value: function fromWordOrPhraseAndPageNumbers(wordOrPhrase, pageNumbers) {
                var indexItem = new IndexItem(wordOrPhrase, pageNumbers);
                return indexItem;
            }
        }
    ]);
    return IndexItem;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC9pdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleEl0ZW0ge1xuICBjb25zdHJ1Y3Rvcih3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSB7XG4gICAgdGhpcy53b3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2U7XG4gICAgdGhpcy5wYWdlTnVtYmVycyA9IHBhZ2VOdW1iZXJzO1xuICB9XG5cbiAgZ2V0V29yZE9yUGhyYXNlKCkge1xuICAgIHJldHVybiB0aGlzLndvcmRPclBocmFzZTtcbiAgfVxuXG4gIGdldFBhZ2VOdW1iZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2VOdW1iZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Xb3JkT3JQaHJhc2VBbmRQYWdlTnVtYmVycyh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKSB7XG4gICAgY29uc3QgaW5kZXhJdGVtID0gbmV3IEluZGV4SXRlbSh3b3JkT3JQaHJhc2UsIHBhZ2VOdW1iZXJzKTtcblxuICAgIHJldHVybiBpbmRleEl0ZW07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleEl0ZW0iLCJ3b3JkT3JQaHJhc2UiLCJwYWdlTnVtYmVycyIsImdldFdvcmRPclBocmFzZSIsImdldFBhZ2VOdW1iZXJzIiwiZnJvbVdvcmRPclBocmFzZUFuZFBhZ2VOdW1iZXJzIiwiaW5kZXhJdGVtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDBCQUFELEFBQUw7YUFBTUEsVUFDUEMsWUFBWSxFQUFFQyxXQUFXO2dDQURsQkY7UUFFakIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBSEZGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQkosWUFBWSxFQUFFQyxXQUFXO2dCQUM3RCxJQUFNSSxZQUFZLElBZkROLFVBZWVDLGNBQWNDO2dCQUU5QyxPQUFPSTtZQUNUOzs7V0FsQm1CTiJ9