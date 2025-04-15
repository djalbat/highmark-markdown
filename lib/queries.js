"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _occamquery = require("occam-query");
var _html = require("./map/node//html");
var queries = _html.ruleNames.map(function(ruleName) {
    var expressionString = "//".concat(ruleName), query = _occamquery.Query.fromExpressionString(expressionString);
    return query;
});
var _default = queries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgeyBydWxlTmFtZXMgfSBmcm9tIFwiLi9tYXAvbm9kZS8vaHRtbFwiO1xuXG5jb25zdCBxdWVyaWVzID0gcnVsZU5hbWVzLm1hcCgocnVsZU5hbWUpID0+IHtcbiAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGAvLyR7cnVsZU5hbWV9YCxcbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcmllczsiXSwibmFtZXMiOlsicXVlcmllcyIsInJ1bGVOYW1lcyIsIm1hcCIsInJ1bGVOYW1lIiwiZXhwcmVzc2lvblN0cmluZyIsInF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MEJBWHNCO29CQUVJO0FBRTFCLElBQU1BLFVBQVVDLGVBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDO0lBQzdCLElBQU1DLG1CQUFtQixBQUFDLEtBQWEsT0FBVEQsV0FDeEJFLFFBQVFDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDSDtJQUV6QyxPQUFPQztBQUNUO0lBRUEsV0FBZUwifQ==