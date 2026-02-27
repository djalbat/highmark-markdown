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
const _html = require("../map/node/html");
const tagNameMap = {};
(0, _html.forEachHTMLNode)((Class, markdownRuleName)=>{
    const { tagName } = Class;
    tagNameMap[markdownRuleName] = tagName;
});
const _default = tagNameMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvdGFnTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZm9yRWFjaEhUTUxOb2RlIH0gZnJvbSBcIi4uL21hcC9ub2RlL2h0bWxcIjtcblxuY29uc3QgdGFnTmFtZU1hcCA9IHt9O1xuXG5mb3JFYWNoSFRNTE5vZGUoKENsYXNzLCBtYXJrZG93blJ1bGVOYW1lKSA9PiB7XG4gIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3M7XG5cbiAgdGFnTmFtZU1hcFttYXJrZG93blJ1bGVOYW1lXSA9IHRhZ05hbWU7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGFnTmFtZU1hcDtcbiJdLCJuYW1lcyI6WyJ0YWdOYW1lTWFwIiwiZm9yRWFjaEhUTUxOb2RlIiwiQ2xhc3MiLCJtYXJrZG93blJ1bGVOYW1lIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7c0JBVmdDO0FBRWhDLE1BQU1BLGFBQWEsQ0FBQztBQUVwQkMsSUFBQUEscUJBQWUsRUFBQyxDQUFDQyxPQUFPQztJQUN0QixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHRjtJQUVwQkYsVUFBVSxDQUFDRyxpQkFBaUIsR0FBR0M7QUFDakM7TUFFQSxXQUFlSiJ9