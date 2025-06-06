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
var _css = require("../map/node/css");
var markdownStyleQueries = [];
(0, _css.forEachCSSNode)(function(Class, markdownStyleRuleName) {
    var expressionString = "//".concat(markdownStyleRuleName), query = _occamquery.Query.fromExpressionString(expressionString), markdownStyleQuery = query; ///
    markdownStyleQueries.push(markdownStyleQuery);
});
var _default = markdownStyleQueries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWVyaWVzL21hcmtkb3duU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCB7IGZvckVhY2hDU1NOb2RlIH0gZnJvbSBcIi4uL21hcC9ub2RlL2Nzc1wiO1xuXG5jb25zdCBtYXJrZG93blN0eWxlUXVlcmllcyA9IFtdO1xuXG5mb3JFYWNoQ1NTTm9kZSgoQ2xhc3MsIG1hcmtkb3duU3R5bGVSdWxlTmFtZSkgPT4ge1xuICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gYC8vJHttYXJrZG93blN0eWxlUnVsZU5hbWV9YCxcbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKSxcbiAgICAgICAgbWFya2Rvd25TdHlsZVF1ZXJ5ID0gcXVlcnk7ICAvLy9cblxuICBtYXJrZG93blN0eWxlUXVlcmllcy5wdXNoKG1hcmtkb3duU3R5bGVRdWVyeSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbWFya2Rvd25TdHlsZVF1ZXJpZXM7XG4iXSwibmFtZXMiOlsibWFya2Rvd25TdHlsZVF1ZXJpZXMiLCJmb3JFYWNoQ1NTTm9kZSIsIkNsYXNzIiwibWFya2Rvd25TdHlsZVJ1bGVOYW1lIiwiZXhwcmVzc2lvblN0cmluZyIsInF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsIm1hcmtkb3duU3R5bGVRdWVyeSIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQUE7OzswQkFkc0I7bUJBRVM7QUFFL0IsSUFBTUEsdUJBQXVCLEVBQUU7QUFFL0JDLElBQUFBLG1CQUFjLEVBQUMsU0FBQ0MsT0FBT0M7SUFDckIsSUFBTUMsbUJBQW1CLEFBQUMsS0FBMEIsT0FBdEJELHdCQUN4QkUsUUFBUUMsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUNILG1CQUNuQ0kscUJBQXFCSCxPQUFRLEdBQUc7SUFFdENMLHFCQUFxQlMsSUFBSSxDQUFDRDtBQUM1QjtJQUVBLFdBQWVSIn0=