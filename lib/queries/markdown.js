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
var _html = require("../map/node//html");
var markdownQueries = [];
(0, _html.forEachHTMLNode)(function(Class, ruleName) {
    var expressionString = "//".concat(ruleName), query = _occamquery.Query.fromExpressionString(expressionString), markdownQuery = query; ///
    markdownQueries.push(markdownQuery);
});
var _default = markdownQueries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWVyaWVzL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgeyBmb3JFYWNoSFRNTE5vZGUgfSBmcm9tIFwiLi4vbWFwL25vZGUvL2h0bWxcIjtcblxuY29uc3QgbWFya2Rvd25RdWVyaWVzID0gW107XG5cbmZvckVhY2hIVE1MTm9kZSgoQ2xhc3MsIHJ1bGVOYW1lKSA9PiB7XG4gIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBgLy8ke3J1bGVOYW1lfWAsXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyksXG4gICAgICAgIG1hcmtkb3duUXVlcnkgPSBxdWVyeTsgIC8vL1xuXG4gIG1hcmtkb3duUXVlcmllcy5wdXNoKG1hcmtkb3duUXVlcnkpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1hcmtkb3duUXVlcmllcztcbiJdLCJuYW1lcyI6WyJtYXJrZG93blF1ZXJpZXMiLCJmb3JFYWNoSFRNTE5vZGUiLCJDbGFzcyIsInJ1bGVOYW1lIiwiZXhwcmVzc2lvblN0cmluZyIsInF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsIm1hcmtkb3duUXVlcnkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUFBOzs7MEJBZHNCO29CQUVVO0FBRWhDLElBQU1BLGtCQUFrQixFQUFFO0FBRTFCQyxJQUFBQSxxQkFBZSxFQUFDLFNBQUNDLE9BQU9DO0lBQ3RCLElBQU1DLG1CQUFtQixBQUFDLEtBQWEsT0FBVEQsV0FDeEJFLFFBQVFDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDSCxtQkFDbkNJLGdCQUFnQkgsT0FBUSxHQUFHO0lBRWpDTCxnQkFBZ0JTLElBQUksQ0FBQ0Q7QUFDdkI7SUFFQSxXQUFlUiJ9