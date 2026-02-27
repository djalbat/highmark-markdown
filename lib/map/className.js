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
const classNameMap = {};
(0, _html.forEachHTMLNode)((Class, markdownRuleName)=>{
    const { className } = Class;
    classNameMap[markdownRuleName] = className;
});
const _default = classNameMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY2xhc3NOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmb3JFYWNoSFRNTE5vZGUgfSBmcm9tIFwiLi4vbWFwL25vZGUvaHRtbFwiO1xuXG5jb25zdCBjbGFzc05hbWVNYXAgPSB7fTtcblxuZm9yRWFjaEhUTUxOb2RlKChDbGFzcywgbWFya2Rvd25SdWxlTmFtZSkgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gQ2xhc3M7XG5cbiAgY2xhc3NOYW1lTWFwW21hcmtkb3duUnVsZU5hbWVdID0gY2xhc3NOYW1lO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzTmFtZU1hcDtcbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVNYXAiLCJmb3JFYWNoSFRNTE5vZGUiLCJDbGFzcyIsIm1hcmtkb3duUnVsZU5hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3NCQVZnQztBQUVoQyxNQUFNQSxlQUFlLENBQUM7QUFFdEJDLElBQUFBLHFCQUFlLEVBQUMsQ0FBQ0MsT0FBT0M7SUFDdEIsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0Y7SUFFdEJGLFlBQVksQ0FBQ0csaUJBQWlCLEdBQUdDO0FBQ25DO01BRUEsV0FBZUoifQ==