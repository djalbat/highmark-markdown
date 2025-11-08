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
    get removeWhitespace () {
        return removeWhitespace;
    },
    get replaceSpacesWithHyphens () {
        return replaceSpacesWithHyphens;
    }
});
var _constants = require("../constants");
function removeBackticks(string) {
    return string.replace(/^`|`$/g, _constants.EMPTY_STRING);
}
function removeWhitespace(string) {
    return string.replace(/^[\n ]+|[\n ]+$/g, _constants.EMPTY_STRING);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBIWVBIRU4sIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJhY2t0aWNrcyhzdHJpbmcpIHsgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9eYHxgJC9nLCBFTVBUWV9TVFJJTkcpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVXaGl0ZXNwYWNlKHN0cmluZykgeyByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL15bXFxuIF0rfFtcXG4gXSskL2csIEVNUFRZX1NUUklORykgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGVhZGluZ1doaXRlc3BhY2Uoc3RyaW5nKSB7IHJldHVybiBzdHJpbmcucmVwbGFjZSgvXltcXG4gXSsvLCBFTVBUWV9TVFJJTkcpIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nV2hpdGVzcGFjZShzdHJpbmcpIHsgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFxuIF0rJC8sIEVNUFRZX1NUUklORykgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zKHN0cmluZykgeyByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyArL2csIEhZUEhFTik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vbkFscGhhYmV0aWNDaGFyYWN0ZXJzKHN0cmluZykgeyByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1teYS16XFwtXS9nLCBFTVBUWV9TVFJJTkcpOyB9XG4iXSwibmFtZXMiOlsicmVtb3ZlQmFja3RpY2tzIiwicmVtb3ZlTGVhZGluZ1doaXRlc3BhY2UiLCJyZW1vdmVOb25BbHBoYWJldGljQ2hhcmFjdGVycyIsInJlbW92ZVRyYWlsaW5nV2hpdGVzcGFjZSIsInJlbW92ZVdoaXRlc3BhY2UiLCJyZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMiLCJzdHJpbmciLCJyZXBsYWNlIiwiRU1QVFlfU1RSSU5HIiwiSFlQSEVOIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFJZ0JBO2VBQUFBOztRQUlBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBSkFDO2VBQUFBOztRQUpBQztlQUFBQTs7UUFNQUM7ZUFBQUE7Ozt5QkFWcUI7QUFFOUIsU0FBU0wsZ0JBQWdCTSxNQUFNO0lBQUksT0FBT0EsT0FBT0MsT0FBTyxDQUFDLFVBQVVDLHVCQUFZO0FBQUc7QUFFbEYsU0FBU0osaUJBQWlCRSxNQUFNO0lBQUksT0FBT0EsT0FBT0MsT0FBTyxDQUFDLG9CQUFvQkMsdUJBQVk7QUFBRTtBQUU1RixTQUFTUCx3QkFBd0JLLE1BQU07SUFBSSxPQUFPQSxPQUFPQyxPQUFPLENBQUMsV0FBV0MsdUJBQVk7QUFBRTtBQUUxRixTQUFTTCx5QkFBeUJHLE1BQU07SUFBSSxPQUFPQSxPQUFPQyxPQUFPLENBQUMsV0FBV0MsdUJBQVk7QUFBRTtBQUUzRixTQUFTSCx5QkFBeUJDLE1BQU07SUFBSSxPQUFPQSxPQUFPQyxPQUFPLENBQUMsT0FBT0UsaUJBQU07QUFBRztBQUVsRixTQUFTUCw4QkFBOEJJLE1BQU07SUFBSSxPQUFPQSxPQUFPQyxPQUFPLENBQUMsYUFBYUMsdUJBQVk7QUFBRyJ9