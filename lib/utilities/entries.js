"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ruleNamesExpressionFromElementMap", {
    enumerable: true,
    get: function() {
        return ruleNamesExpressionFromElementMap;
    }
});
function ruleNamesExpressionFromElementMap(elementMap) {
    var ruleNames = Object.keys(elementMap);
    ruleNames.reverse();
    var ruleNamesExpression = ruleNames.reduce(function(ruleNamesExpression, ruleName) {
        var tagName = elementMap[ruleName].tagName;
        if (tagName !== null) {
            ruleNamesExpression = ruleNamesExpression === null ? ruleName : "".concat(ruleNamesExpression, "|").concat(ruleName);
        }
        return ruleNamesExpression;
    }, null);
    return ruleNamesExpression;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVOYW1lc0V4cHJlc3Npb25Gcm9tRWxlbWVudE1hcChlbGVtZW50TWFwKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IE9iamVjdC5rZXlzKGVsZW1lbnRNYXApO1xuXG4gIHJ1bGVOYW1lcy5yZXZlcnNlKCk7XG5cbiAgY29uc3QgcnVsZU5hbWVzRXhwcmVzc2lvbiA9IHJ1bGVOYW1lcy5yZWR1Y2UoKHJ1bGVOYW1lc0V4cHJlc3Npb24sIHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB0YWdOYW1lIH0gPSBlbGVtZW50TWFwW3J1bGVOYW1lXTtcblxuICAgICAgICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgICBydWxlTmFtZXNFeHByZXNzaW9uID0gKHJ1bGVOYW1lc0V4cHJlc3Npb24gPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtydWxlTmFtZXNFeHByZXNzaW9ufXwke3J1bGVOYW1lfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJ1bGVOYW1lc0V4cHJlc3Npb247XG4gICAgICAgIH0sIG51bGwpO1xuXG4gIHJldHVybiBydWxlTmFtZXNFeHByZXNzaW9uXG59XG4iXSwibmFtZXMiOlsicnVsZU5hbWVzRXhwcmVzc2lvbkZyb21FbGVtZW50TWFwIiwiZWxlbWVudE1hcCIsInJ1bGVOYW1lcyIsIk9iamVjdCIsImtleXMiLCJyZXZlcnNlIiwicnVsZU5hbWVzRXhwcmVzc2lvbiIsInJlZHVjZSIsInJ1bGVOYW1lIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSxrQ0FBa0NDLFVBQVU7SUFDMUQsSUFBTUMsWUFBWUMsT0FBT0MsSUFBSSxDQUFDSDtJQUU5QkMsVUFBVUcsT0FBTztJQUVqQixJQUFNQyxzQkFBc0JKLFVBQVVLLE1BQU0sQ0FBQyxTQUFDRCxxQkFBcUJFO1FBQzNELElBQU0sQUFBRUMsVUFBWVIsVUFBVSxDQUFDTyxTQUFTLENBQWhDQztRQUVSLElBQUlBLFlBQVksTUFBTTtZQUNwQkgsc0JBQXNCLEFBQUNBLHdCQUF3QixPQUN2QkUsV0FDQyxBQUFDLEdBQXlCQSxPQUF2QkYscUJBQW9CLEtBQVksT0FBVEU7UUFDckQ7UUFFQSxPQUFPRjtJQUNULEdBQUc7SUFFVCxPQUFPQTtBQUNUIn0=