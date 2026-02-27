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
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _customEventTypes = require("../../customEventTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContainerDiv extends _easy.Element {
    keyUpHandler = (event, element)=>{
        const customEventType = _customEventTypes.KEY_UP_CUSTOM_EVENT_TYPE;
        this.callCustomHandlers(customEventType, event, element);
    };
    static tagName = "div";
    static defaultProperties = {
        className: "container"
    };
}
const _default = (0, _easywithstyle.default)(ContainerDiv)`

  border: 1px solid black;
  height: 48rem;
  padding: 1rem;
  overflow: hidden;
  border-top: 0;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2NvbnRhaW5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEtFWV9VUF9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi8uLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNsYXNzIENvbnRhaW5lckRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBLRVlfVVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDb250YWluZXJEaXYpYFxuXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDQ4cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItdG9wOiAwO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiQ29udGFpbmVyRGl2IiwiRWxlbWVudCIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIktFWV9VUF9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVycyIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0JBOzs7ZUFBQTs7O3NFQXBCc0I7c0JBRUU7a0NBRWlCOzs7Ozs7QUFFekMsTUFBTUEscUJBQXFCQyxhQUFPO0lBQ2hDQyxlQUFlLENBQUNDLE9BQU9DO1FBQ3JCLE1BQU1DLGtCQUFrQkMsMENBQXdCO1FBRWhELElBQUksQ0FBQ0Msa0JBQWtCLENBQUNGLGlCQUFpQkYsT0FBT0M7SUFDbEQsRUFBQztJQUVELE9BQU9JLFVBQVUsTUFBTTtJQUV2QixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDWCxhQUFhLENBQUM7Ozs7Ozs7O0FBUXZDLENBQUMifQ==