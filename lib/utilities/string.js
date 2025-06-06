"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get removeBackticks () {
        return removeBackticks;
    },
    get removeLeadingWhitespace () {
        return removeLeadingWhitespace;
    },
    get removeNonAlphabeticCharacters () {
        return removeNonAlphabeticCharacters;
    },
    get removeTrailingWhitespace () {
        return removeTrailingWhitespace;
    },
    get replaceSpacesWithHyphens () {
        return replaceSpacesWithHyphens;
    }
});
var _constants = require("../constants");
function removeBackticks(string) {
    return string.replace(/^`|`$/g, _constants.EMPTY_STRING);
}
function removeLeadingWhitespace(string) {
    return string.replace(/^[\n ]+/, _constants.EMPTY_STRING);
}
function removeTrailingWhitespace(string) {
    return string.replace(/[\n ]+$/, _constants.EMPTY_STRING);
}
function replaceSpacesWithHyphens(string) {
    return string.replace(/ +/g, _constants.HYPHEN);
}
function removeNonAlphabeticCharacters(string) {
    return string.replace(/[^a-z\-]/g, _constants.EMPTY_STRING);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBIWVBIRU4sIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJhY2t0aWNrcyhzdHJpbmcpIHsgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9eYHxgJC9nLCBFTVBUWV9TVFJJTkcpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMZWFkaW5nV2hpdGVzcGFjZShzdHJpbmcpIHsgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9eW1xcbiBdKy8sIEVNUFRZX1NUUklORykgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVHJhaWxpbmdXaGl0ZXNwYWNlKHN0cmluZykgeyByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1tcXG4gXSskLywgRU1QVFlfU1RSSU5HKSB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMoc3RyaW5nKSB7IHJldHVybiBzdHJpbmcucmVwbGFjZSgvICsvZywgSFlQSEVOKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9uQWxwaGFiZXRpY0NoYXJhY3RlcnMoc3RyaW5nKSB7IHJldHVybiBzdHJpbmcucmVwbGFjZSgvW15hLXpcXC1dL2csIEVNUFRZX1NUUklORyk7IH1cbiJdLCJuYW1lcyI6WyJyZW1vdmVCYWNrdGlja3MiLCJyZW1vdmVMZWFkaW5nV2hpdGVzcGFjZSIsInJlbW92ZU5vbkFscGhhYmV0aWNDaGFyYWN0ZXJzIiwicmVtb3ZlVHJhaWxpbmdXaGl0ZXNwYWNlIiwicmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zIiwic3RyaW5nIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyIsIkhZUEhFTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBSWdCQTtlQUFBQTs7UUFFQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQUpBQztlQUFBQTs7UUFFQUM7ZUFBQUE7Ozt5QkFScUI7QUFFOUIsU0FBU0osZ0JBQWdCSyxNQUFNO0lBQUksT0FBT0EsT0FBT0MsT0FBTyxDQUFDLFVBQVVDLHVCQUFZO0FBQUc7QUFFbEYsU0FBU04sd0JBQXdCSSxNQUFNO0lBQUksT0FBT0EsT0FBT0MsT0FBTyxDQUFDLFdBQVdDLHVCQUFZO0FBQUU7QUFFMUYsU0FBU0oseUJBQXlCRSxNQUFNO0lBQUksT0FBT0EsT0FBT0MsT0FBTyxDQUFDLFdBQVdDLHVCQUFZO0FBQUU7QUFFM0YsU0FBU0gseUJBQXlCQyxNQUFNO0lBQUksT0FBT0EsT0FBT0MsT0FBTyxDQUFDLE9BQU9FLGlCQUFNO0FBQUc7QUFFbEYsU0FBU04sOEJBQThCRyxNQUFNO0lBQUksT0FBT0EsT0FBT0MsT0FBTyxDQUFDLGFBQWFDLHVCQUFZO0FBQUcifQ==