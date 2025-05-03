"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    removeBackticks: function() {
        return removeBackticks;
    },
    removeNonAlphabeticCharacters: function() {
        return removeNonAlphabeticCharacters;
    },
    removeTrailingWhitespace: function() {
        return removeTrailingWhitespace;
    },
    removedLeadingWhitespace: function() {
        return removedLeadingWhitespace;
    },
    replaceSpacesWithHyphens: function() {
        return replaceSpacesWithHyphens;
    }
});
var _constants = require("../constants");
function removeBackticks(string) {
    return string.replace(/^`|`$/g, _constants.EMPTY_STRING);
}
function replaceSpacesWithHyphens(string) {
    return string.replace(/ +/g, _constants.HYPHEN);
}
function removedLeadingWhitespace(string) {
    return string.replace(/^ +/, _constants.EMPTY_STRING);
}
function removeTrailingWhitespace(string) {
    return string.replace(/ +$/, _constants.EMPTY_STRING);
}
function removeNonAlphabeticCharacters(string) {
    return string.replace(/[^a-z]/g, _constants.EMPTY_STRING);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBIWVBIRU4sIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJhY2t0aWNrcyhzdHJpbmcpIHsgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9eYHxgJC9nLCBFTVBUWV9TVFJJTkcpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMoc3RyaW5nKSB7IHJldHVybiBzdHJpbmcucmVwbGFjZSgvICsvZywgSFlQSEVOKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlZExlYWRpbmdXaGl0ZXNwYWNlKHN0cmluZykgeyByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL14gKy8sIEVNUFRZX1NUUklORykgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVHJhaWxpbmdXaGl0ZXNwYWNlKHN0cmluZykgeyByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyArJC8sIEVNUFRZX1NUUklORykgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9uQWxwaGFiZXRpY0NoYXJhY3RlcnMoc3RyaW5nKSB7IHJldHVybiBzdHJpbmcucmVwbGFjZSgvW15hLXpdL2csIEVNUFRZX1NUUklORyk7IH1cbiJdLCJuYW1lcyI6WyJyZW1vdmVCYWNrdGlja3MiLCJyZW1vdmVOb25BbHBoYWJldGljQ2hhcmFjdGVycyIsInJlbW92ZVRyYWlsaW5nV2hpdGVzcGFjZSIsInJlbW92ZWRMZWFkaW5nV2hpdGVzcGFjZSIsInJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucyIsInN0cmluZyIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciLCJIWVBIRU4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsZUFBZTtlQUFmQTs7SUFRQUMsNkJBQTZCO2VBQTdCQTs7SUFGQUMsd0JBQXdCO2VBQXhCQTs7SUFGQUMsd0JBQXdCO2VBQXhCQTs7SUFGQUMsd0JBQXdCO2VBQXhCQTs7O3lCQUpxQjtBQUU5QixTQUFTSixnQkFBZ0JLLE1BQU07SUFBSSxPQUFPQSxPQUFPQyxPQUFPLENBQUMsVUFBVUMsdUJBQVk7QUFBRztBQUVsRixTQUFTSCx5QkFBeUJDLE1BQU07SUFBSSxPQUFPQSxPQUFPQyxPQUFPLENBQUMsT0FBT0UsaUJBQU07QUFBRztBQUVsRixTQUFTTCx5QkFBeUJFLE1BQU07SUFBSSxPQUFPQSxPQUFPQyxPQUFPLENBQUMsT0FBT0MsdUJBQVk7QUFBRTtBQUV2RixTQUFTTCx5QkFBeUJHLE1BQU07SUFBSSxPQUFPQSxPQUFPQyxPQUFPLENBQUMsT0FBT0MsdUJBQVk7QUFBRTtBQUV2RixTQUFTTiw4QkFBOEJJLE1BQU07SUFBSSxPQUFPQSxPQUFPQyxPQUFPLENBQUMsV0FBV0MsdUJBQVk7QUFBRyJ9