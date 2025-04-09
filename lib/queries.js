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
var _html = require("./nodeMap/html");
var queries = _html.ruleNames.map(function(ruleName) {
    var expressionString = "//".concat(ruleName), query = _occamquery.Query.fromExpressionString(expressionString);
    return query;
});
var _default = queries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgeyBydWxlTmFtZXMgfSBmcm9tIFwiLi9ub2RlTWFwL2h0bWxcIjtcblxuY29uc3QgcXVlcmllcyA9IHJ1bGVOYW1lcy5tYXAoKHJ1bGVOYW1lKSA9PiB7XG4gIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBgLy8ke3J1bGVOYW1lfWAsXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJpZXM7Il0sIm5hbWVzIjpbInF1ZXJpZXMiLCJydWxlTmFtZXMiLCJtYXAiLCJydWxlTmFtZSIsImV4cHJlc3Npb25TdHJpbmciLCJxdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzBCQVhzQjtvQkFFSTtBQUUxQixJQUFNQSxVQUFVQyxlQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFDQztJQUM3QixJQUFNQyxtQkFBbUIsQUFBQyxLQUFhLE9BQVRELFdBQ3hCRSxRQUFRQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQ0g7SUFFekMsT0FBT0M7QUFDVDtJQUVBLFdBQWVMIn0=