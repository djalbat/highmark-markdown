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
var classNameMap = {};
(0, _html.forEachHTMLNode)(function(Class, ruleName) {
    var className = Class.className;
    classNameMap[ruleName] = className;
});
var _default = classNameMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY2xhc3NOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmb3JFYWNoSFRNTE5vZGUgfSBmcm9tIFwiLi4vbWFwL25vZGUvaHRtbFwiO1xuXG5jb25zdCBjbGFzc05hbWVNYXAgPSB7fTtcblxuZm9yRWFjaEhUTUxOb2RlKChDbGFzcywgcnVsZU5hbWUpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IENsYXNzO1xuXG4gIGNsYXNzTmFtZU1hcFtydWxlTmFtZV0gPSBjbGFzc05hbWU7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NOYW1lTWFwO1xuIl0sIm5hbWVzIjpbImNsYXNzTmFtZU1hcCIsImZvckVhY2hIVE1MTm9kZSIsIkNsYXNzIiwicnVsZU5hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O29CQVZnQztBQUVoQyxJQUFNQSxlQUFlLENBQUM7QUFFdEJDLElBQUFBLHFCQUFlLEVBQUMsU0FBQ0MsT0FBT0M7SUFDdEIsSUFBTSxBQUFFQyxZQUFjRixNQUFkRTtJQUVSSixZQUFZLENBQUNHLFNBQVMsR0FBR0M7QUFDM0I7SUFFQSxXQUFlSiJ9