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
var queries = [];
(0, _html.forEachHTMLNode)(function(Class, ruleName) {
    var expressionString = "//".concat(ruleName), query = _occamquery.Query.fromExpressionString(expressionString);
    queries.push(query);
});
var _default = queries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgeyBmb3JFYWNoSFRNTE5vZGUgfSBmcm9tIFwiLi9tYXAvbm9kZS8vaHRtbFwiO1xuXG5jb25zdCBxdWVyaWVzID0gW107XG5cbmZvckVhY2hIVE1MTm9kZSgoQ2xhc3MsIHJ1bGVOYW1lKSA9PiB7XG4gIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBgLy8ke3J1bGVOYW1lfWAsXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcXVlcmllcy5wdXNoKHF1ZXJ5KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyaWVzOyJdLCJuYW1lcyI6WyJxdWVyaWVzIiwiZm9yRWFjaEhUTUxOb2RlIiwiQ2xhc3MiLCJydWxlTmFtZSIsImV4cHJlc3Npb25TdHJpbmciLCJxdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQUE7OzswQkFic0I7b0JBRVU7QUFFaEMsSUFBTUEsVUFBVSxFQUFFO0FBRWxCQyxJQUFBQSxxQkFBZSxFQUFDLFNBQUNDLE9BQU9DO0lBQ3RCLElBQU1DLG1CQUFtQixBQUFDLEtBQWEsT0FBVEQsV0FDeEJFLFFBQVFDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDSDtJQUV6Q0osUUFBUVEsSUFBSSxDQUFDSDtBQUNmO0lBRUEsV0FBZUwifQ==