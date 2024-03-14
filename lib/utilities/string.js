"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "trim", {
    enumerable: true,
    get: function() {
        return trim;
    }
});
var _constants = require("../constants");
function trim(string) {
    var trimmedString = string.replace(/[\n\r]$/gm, _constants.EMPTY_STRING);
    return trimmedString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmltKHN0cmluZykge1xuICBjb25zdCB0cmltbWVkU3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1tcXG5cXHJdJC9nbSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gdHJpbW1lZFN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJ0cmltIiwic3RyaW5nIiwidHJpbW1lZFN0cmluZyIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlnQkE7OztlQUFBQTs7O3lCQUZhO0FBRXRCLFNBQVNBLEtBQUtDLE1BQU07SUFDekIsSUFBTUMsZ0JBQWdCRCxPQUFPRSxPQUFPLENBQUMsYUFBYUMsdUJBQVk7SUFFOUQsT0FBT0Y7QUFDVCJ9