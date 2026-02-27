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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TabButton extends _easy.Button {
    didMount() {
        const { disabled = false } = this.properties;
        if (disabled) {
            this.disable();
        }
    }
    willUnmount() {
    ///
    }
    static ignoredProperties = [
        "disabled"
    ];
    static defaultProperties = {
        className: "tab"
    };
}
const _default = (0, _easywithstyle.default)(TabButton)`

  color: black;
  cursor: pointer;
  padding: 1rem;
  font-size: 2rem;
  background: transparent;  
  font-family: serif;

  border: 1px solid black;
  font-weight: bold;
  border-bottom: 0;
  
  :enabled {
    border: 0;
    font-weight: normal;
    border-bottom: 1px solid black;
  }
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYnV0dG9uL3RhYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuY2xhc3MgVGFiQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCA9IGZhbHNlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiZGlzYWJsZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidGFiXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFRhYkJ1dHRvbilgXG5cbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICBcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgXG4gIDplbmFibGVkIHtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlRhYkJ1dHRvbiIsIkJ1dHRvbiIsImRpZE1vdW50IiwiZGlzYWJsZWQiLCJwcm9wZXJ0aWVzIiwiZGlzYWJsZSIsIndpbGxVbm1vdW50IiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNEJBOzs7ZUFBQTs7O3NFQTFCc0I7c0JBRUM7Ozs7OztBQUV2QixNQUFNQSxrQkFBa0JDLFlBQU07SUFDNUJDLFdBQVc7UUFDVCxNQUFNLEVBQUVDLFdBQVcsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxVQUFVO1FBRTVDLElBQUlELFVBQVU7WUFDWixJQUFJLENBQUNFLE9BQU87UUFDZDtJQUNGO0lBRUFDLGNBQWM7SUFDWixHQUFHO0lBQ0w7SUFFQSxPQUFPQyxvQkFBb0I7UUFDekI7S0FDRCxDQUFDO0lBRUYsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ1YsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJwQyxDQUFDIn0=