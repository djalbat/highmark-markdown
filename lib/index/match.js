"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexMatch;
    }
});
var _constants = require("../constants");
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
var IndexMatch = /*#__PURE__*/ function() {
    function IndexMatch(regularExpression, replacement) {
        _class_call_check(this, IndexMatch);
        this.regularExpression = regularExpression;
        this.replacement = replacement;
    }
    _create_class(IndexMatch, [
        {
            key: "getRegularExpression",
            value: function getRegularExpression() {
                return this.regularExpression;
            }
        },
        {
            key: "getReplacement",
            value: function getReplacement() {
                return this.replacement;
            }
        },
        {
            key: "replace",
            value: function replace(plainText) {
                plainText = plainText.replace(this.regularExpression, this.replacement); ///
                return plainText;
            }
        }
    ], [
        {
            key: "revert",
            value: function revert(wordOrPhrase) {
                wordOrPhrase = wordOrPhrase.replace(/_/g, _constants.SINGLE_SPACE);
                return wordOrPhrase;
            }
        },
        {
            key: "fromPhrase",
            value: function fromPhrase(phrase) {
                var regularExpression = new RegExp(phrase, _constants.GLOBAL_FLAG), replacement = phrase.replace(/\s/g, _constants.UNDERSCORE), indexMatch = new IndexMatch(regularExpression, replacement);
                return indexMatch;
            }
        }
    ]);
    return IndexMatch;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC9tYXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVU5ERVJTQ09SRSwgR0xPQkFMX0ZMQUcsIFNJTkdMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHJlZ3VsYXJFeHByZXNzaW9uLCByZXBsYWNlbWVudCkge1xuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgICB0aGlzLnJlcGxhY2VtZW50ID0gcmVwbGFjZW1lbnQ7XG4gIH1cblxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50O1xuICB9XG5cbiAgcmVwbGFjZShwbGFpblRleHQpIHtcbiAgICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uLCB0aGlzLnJlcGxhY2VtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyByZXZlcnQod29yZE9yUGhyYXNlKSB7XG4gICAgd29yZE9yUGhyYXNlID0gd29yZE9yUGhyYXNlLnJlcGxhY2UoL18vZywgU0lOR0xFX1NQQUNFKTtcblxuICAgIHJldHVybiB3b3JkT3JQaHJhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBocmFzZShwaHJhc2UpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvbiA9IG5ldyBSZWdFeHAocGhyYXNlLCBHTE9CQUxfRkxBRyksXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBwaHJhc2UucmVwbGFjZSgvXFxzL2csIFVOREVSU0NPUkUpLFxuICAgICAgICAgIGluZGV4TWF0Y2ggPSBuZXcgSW5kZXhNYXRjaChyZWd1bGFyRXhwcmVzc2lvbiwgcmVwbGFjZW1lbnQpO1xuXG4gICAgcmV0dXJuIGluZGV4TWF0Y2g7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleE1hdGNoIiwicmVndWxhckV4cHJlc3Npb24iLCJyZXBsYWNlbWVudCIsImdldFJlZ3VsYXJFeHByZXNzaW9uIiwiZ2V0UmVwbGFjZW1lbnQiLCJyZXBsYWNlIiwicGxhaW5UZXh0IiwicmV2ZXJ0Iiwid29yZE9yUGhyYXNlIiwiU0lOR0xFX1NQQUNFIiwiZnJvbVBocmFzZSIsInBocmFzZSIsIlJlZ0V4cCIsIkdMT0JBTF9GTEFHIiwiVU5ERVJTQ09SRSIsImluZGV4TWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3lCQUZpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsSUFBQSxBQUFNQSwyQkFBTjthQUFNQSxXQUNQQyxpQkFBaUIsRUFBRUMsV0FBVztnQ0FEdkJGO1FBRWpCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBO1FBQ3pCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBSEZGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixpQkFBaUI7WUFDL0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsU0FBUztnQkFDZkEsWUFBWUEsVUFBVUQsT0FBTyxDQUFDLElBQUksQ0FBQ0osaUJBQWlCLEVBQUUsSUFBSSxDQUFDQyxXQUFXLEdBQUksR0FBRztnQkFFN0UsT0FBT0k7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxPQUFPQyxZQUFZO2dCQUN4QkEsZUFBZUEsYUFBYUgsT0FBTyxDQUFDLE1BQU1JLHVCQUFZO2dCQUV0RCxPQUFPRDtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsV0FBV0MsTUFBTTtnQkFDdEIsSUFBTVYsb0JBQW9CLElBQUlXLE9BQU9ELFFBQVFFLHNCQUFXLEdBQ2xEWCxjQUFjUyxPQUFPTixPQUFPLENBQUMsT0FBT1MscUJBQVUsR0FDOUNDLGFBQWEsSUE3QkZmLFdBNkJpQkMsbUJBQW1CQztnQkFFckQsT0FBT2E7WUFDVDs7O1dBaENtQmYifQ==