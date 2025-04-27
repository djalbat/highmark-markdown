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
var _html = require("../map/node/html");
var tagNameMap = {};
(0, _html.forEachHTMLNode)(function(Class, ruleName) {
    var tagName = Class.tagName;
    tagNameMap[ruleName] = tagName;
});
var _default = tagNameMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvdGFnTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZm9yRWFjaEhUTUxOb2RlIH0gZnJvbSBcIi4uL21hcC9ub2RlL2h0bWxcIjtcblxuY29uc3QgdGFnTmFtZU1hcCA9IHt9O1xuXG5mb3JFYWNoSFRNTE5vZGUoKENsYXNzLCBydWxlTmFtZSkgPT4ge1xuICBjb25zdCB7IHRhZ05hbWUgfSA9IENsYXNzO1xuXG4gIHRhZ05hbWVNYXBbcnVsZU5hbWVdID0gdGFnTmFtZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0YWdOYW1lTWFwO1xuIl0sIm5hbWVzIjpbInRhZ05hbWVNYXAiLCJmb3JFYWNoSFRNTE5vZGUiLCJDbGFzcyIsInJ1bGVOYW1lIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7b0JBVmdDO0FBRWhDLElBQU1BLGFBQWEsQ0FBQztBQUVwQkMsSUFBQUEscUJBQWUsRUFBQyxTQUFDQyxPQUFPQztJQUN0QixJQUFNLEFBQUVDLFVBQVlGLE1BQVpFO0lBRVJKLFVBQVUsQ0FBQ0csU0FBUyxHQUFHQztBQUN6QjtJQUVBLFdBQWVKIn0=