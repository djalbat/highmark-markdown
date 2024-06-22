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
    removeNonAlphabeticAndSpaceCharacters: function() {
        return removeNonAlphabeticAndSpaceCharacters;
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
function removeNonAlphabeticAndSpaceCharacters(string) {
    return string.replace(/[^a-z ]/g, _constants.EMPTY_STRING);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBIWVBIRU4sIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJhY2t0aWNrcyhzdHJpbmcpIHsgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9eYHxgJC9nLCBFTVBUWV9TVFJJTkcpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMoc3RyaW5nKSB7IHJldHVybiBzdHJpbmcucmVwbGFjZSgvICsvZywgSFlQSEVOKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlZExlYWRpbmdXaGl0ZXNwYWNlKHN0cmluZykgeyByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL14gKy8sIEVNUFRZX1NUUklORykgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9uQWxwaGFiZXRpY0FuZFNwYWNlQ2hhcmFjdGVycyhzdHJpbmcpIHsgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXmEteiBdL2csIEVNUFRZX1NUUklORyk7IH1cbiJdLCJuYW1lcyI6WyJyZW1vdmVCYWNrdGlja3MiLCJyZW1vdmVOb25BbHBoYWJldGljQW5kU3BhY2VDaGFyYWN0ZXJzIiwicmVtb3ZlZExlYWRpbmdXaGl0ZXNwYWNlIiwicmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zIiwic3RyaW5nIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyIsIkhZUEhFTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxlQUFlO2VBQWZBOztJQU1BQyxxQ0FBcUM7ZUFBckNBOztJQUZBQyx3QkFBd0I7ZUFBeEJBOztJQUZBQyx3QkFBd0I7ZUFBeEJBOzs7eUJBSnFCO0FBRTlCLFNBQVNILGdCQUFnQkksTUFBTTtJQUFJLE9BQU9BLE9BQU9DLE9BQU8sQ0FBQyxVQUFVQyx1QkFBWTtBQUFHO0FBRWxGLFNBQVNILHlCQUF5QkMsTUFBTTtJQUFJLE9BQU9BLE9BQU9DLE9BQU8sQ0FBQyxPQUFPRSxpQkFBTTtBQUFHO0FBRWxGLFNBQVNMLHlCQUF5QkUsTUFBTTtJQUFJLE9BQU9BLE9BQU9DLE9BQU8sQ0FBQyxPQUFPQyx1QkFBWTtBQUFFO0FBRXZGLFNBQVNMLHNDQUFzQ0csTUFBTTtJQUFJLE9BQU9BLE9BQU9DLE9BQU8sQ0FBQyxZQUFZQyx1QkFBWTtBQUFHIn0=