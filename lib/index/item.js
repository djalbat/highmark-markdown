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
var _necessary = require("necessary");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
var first = _necessary.arrayUtilities.first;
var IndexItem = /*#__PURE__*/ function() {
    function IndexItem(lowerCaseLetter, wordOrPhrase, pageNumbers) {
        _class_call_check(this, IndexItem);
        this.lowerCaseLetter = lowerCaseLetter;
        this.wordOrPhrase = wordOrPhrase;
        this.pageNumbers = pageNumbers;
    }
    _create_class(IndexItem, [
        {
            key: "getLowerCaseLetter",
            value: function getLowerCaseLetter() {
                return this.lowerCaseLetter;
            }
        },
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
        },
        {
            key: "matchLetter",
            value: function matchLetter(letter) {
                var matchesLetter = this.lowerCaseLetter === letter;
                return matchesLetter;
            }
        }
    ], [
        {
            key: "fromWordOrPhraseAndPageNumbers",
            value: function fromWordOrPhraseAndPageNumbers(wordOrPhrase, pageNumbers) {
                var lowerCaseWordOrPhrase = wordOrPhrase.toLowerCase(), lowerCaseLetters = _to_consumable_array(lowerCaseWordOrPhrase), firstLowerCaseLetter = first(lowerCaseLetters), lowerCaseLetter = firstLowerCaseLetter, indexItem = new IndexItem(lowerCaseLetter, wordOrPhrase, pageNumbers);
                return indexItem;
            }
        }
    ]);
    return IndexItem;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC9pdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SXRlbSB7XG4gIGNvbnN0cnVjdG9yKGxvd2VyQ2FzZUxldHRlciwgd29yZE9yUGhyYXNlLCBwYWdlTnVtYmVycykge1xuICAgIHRoaXMubG93ZXJDYXNlTGV0dGVyID0gbG93ZXJDYXNlTGV0dGVyO1xuICAgIHRoaXMud29yZE9yUGhyYXNlID0gd29yZE9yUGhyYXNlO1xuICAgIHRoaXMucGFnZU51bWJlcnMgPSBwYWdlTnVtYmVycztcbiAgfVxuXG4gIGdldExvd2VyQ2FzZUxldHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb3dlckNhc2VMZXR0ZXI7XG4gIH1cblxuICBnZXRXb3JkT3JQaHJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud29yZE9yUGhyYXNlO1xuICB9XG5cbiAgZ2V0UGFnZU51bWJlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZU51bWJlcnM7XG4gIH1cblxuICBtYXRjaExldHRlcihsZXR0ZXIpIHtcbiAgICBjb25zdCBtYXRjaGVzTGV0dGVyID0gKHRoaXMubG93ZXJDYXNlTGV0dGVyID09PSBsZXR0ZXIpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMZXR0ZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVdvcmRPclBocmFzZUFuZFBhZ2VOdW1iZXJzKHdvcmRPclBocmFzZSwgcGFnZU51bWJlcnMpIHtcbiAgICBjb25zdCBsb3dlckNhc2VXb3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICBsb3dlckNhc2VMZXR0ZXJzID0gW1xuICAgICAgICAgICAgLi4ubG93ZXJDYXNlV29yZE9yUGhyYXNlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBmaXJzdExvd2VyQ2FzZUxldHRlciA9IGZpcnN0KGxvd2VyQ2FzZUxldHRlcnMpLFxuICAgICAgICAgIGxvd2VyQ2FzZUxldHRlciA9IGZpcnN0TG93ZXJDYXNlTGV0dGVyLCAvLy9cbiAgICAgICAgICBpbmRleEl0ZW0gPSBuZXcgSW5kZXhJdGVtKGxvd2VyQ2FzZUxldHRlciwgd29yZE9yUGhyYXNlLCBwYWdlTnVtYmVycyk7XG5cbiAgICByZXR1cm4gaW5kZXhJdGVtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhJdGVtIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxvd2VyQ2FzZUxldHRlciIsIndvcmRPclBocmFzZSIsInBhZ2VOdW1iZXJzIiwiZ2V0TG93ZXJDYXNlTGV0dGVyIiwiZ2V0V29yZE9yUGhyYXNlIiwiZ2V0UGFnZU51bWJlcnMiLCJtYXRjaExldHRlciIsImxldHRlciIsIm1hdGNoZXNMZXR0ZXIiLCJmcm9tV29yZE9yUGhyYXNlQW5kUGFnZU51bWJlcnMiLCJsb3dlckNhc2VXb3JkT3JQaHJhc2UiLCJ0b0xvd2VyQ2FzZSIsImxvd2VyQ2FzZUxldHRlcnMiLCJmaXJzdExvd2VyQ2FzZUxldHRlciIsImluZGV4SXRlbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSlU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsMEJBQU47YUFBTUEsVUFDUEcsZUFBZSxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7Z0NBRG5DTDtRQUVqQixJQUFJLENBQUNHLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBSkZMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxlQUFlO1lBQzdCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxZQUFZO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLE1BQU07Z0JBQ2hCLElBQU1DLGdCQUFpQixJQUFJLENBQUNSLGVBQWUsS0FBS087Z0JBRWhELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCUixZQUFZLEVBQUVDLFdBQVc7Z0JBQzdELElBQU1RLHdCQUF3QlQsYUFBYVUsV0FBVyxJQUNoREMsbUJBQ0UscUJBQUdGLHdCQUVMRyx1QkFBdUJmLE1BQU1jLG1CQUM3Qlosa0JBQWtCYSxzQkFDbEJDLFlBQVksSUFoQ0RqQixVQWdDZUcsaUJBQWlCQyxjQUFjQztnQkFFL0QsT0FBT1k7WUFDVDs7O1dBbkNtQmpCIn0=