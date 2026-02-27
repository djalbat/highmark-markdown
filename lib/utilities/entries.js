"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ruleNamesExpressionFromTagNameMap", {
    enumerable: true,
    get: function() {
        return ruleNamesExpressionFromTagNameMap;
    }
});
function ruleNamesExpressionFromTagNameMap(tagNameMap) {
    const ruleNames = Object.keys(tagNameMap);
    ruleNames.reverse();
    const ruleNamesExpression = ruleNames.reduce((ruleNamesExpression, ruleName)=>{
        const tagName = tagNameMap[ruleName];
        if (tagName !== null) {
            ruleNamesExpression = ruleNamesExpression === null ? ruleName : `${ruleNamesExpression}|${ruleName}`;
        }
        return ruleNamesExpression;
    }, null);
    return ruleNamesExpression;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVOYW1lc0V4cHJlc3Npb25Gcm9tVGFnTmFtZU1hcCh0YWdOYW1lTWFwKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IE9iamVjdC5rZXlzKHRhZ05hbWVNYXApO1xuXG4gIHJ1bGVOYW1lcy5yZXZlcnNlKCk7XG5cbiAgY29uc3QgcnVsZU5hbWVzRXhwcmVzc2lvbiA9IHJ1bGVOYW1lcy5yZWR1Y2UoKHJ1bGVOYW1lc0V4cHJlc3Npb24sIHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFnTmFtZSA9IHRhZ05hbWVNYXBbcnVsZU5hbWVdO1xuXG4gICAgICAgICAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJ1bGVOYW1lc0V4cHJlc3Npb24gPSAocnVsZU5hbWVzRXhwcmVzc2lvbiA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3J1bGVOYW1lc0V4cHJlc3Npb259fCR7cnVsZU5hbWV9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcnVsZU5hbWVzRXhwcmVzc2lvbjtcbiAgICAgICAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lc0V4cHJlc3Npb25cbn1cbiJdLCJuYW1lcyI6WyJydWxlTmFtZXNFeHByZXNzaW9uRnJvbVRhZ05hbWVNYXAiLCJ0YWdOYW1lTWFwIiwicnVsZU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInJldmVyc2UiLCJydWxlTmFtZXNFeHByZXNzaW9uIiwicmVkdWNlIiwicnVsZU5hbWUiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFZ0JBOzs7ZUFBQUE7OztBQUFULFNBQVNBLGtDQUFrQ0MsVUFBVTtJQUMxRCxNQUFNQyxZQUFZQyxPQUFPQyxJQUFJLENBQUNIO0lBRTlCQyxVQUFVRyxPQUFPO0lBRWpCLE1BQU1DLHNCQUFzQkosVUFBVUssTUFBTSxDQUFDLENBQUNELHFCQUFxQkU7UUFDM0QsTUFBTUMsVUFBVVIsVUFBVSxDQUFDTyxTQUFTO1FBRXBDLElBQUlDLFlBQVksTUFBTTtZQUNwQkgsc0JBQXNCLEFBQUNBLHdCQUF3QixPQUN2QkUsV0FDQyxHQUFHRixvQkFBb0IsQ0FBQyxFQUFFRSxVQUFVO1FBQy9EO1FBRUEsT0FBT0Y7SUFDVCxHQUFHO0lBRVQsT0FBT0E7QUFDVCJ9