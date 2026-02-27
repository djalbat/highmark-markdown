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
class PageButton extends _easy.Button {
    getIndex() {
        const { index } = this.properties;
        return index;
    }
    childElements() {
        const index = this.getIndex(), childElements = `${index + 1}`;
        return childElements;
    }
    static ignoredProperties = [
        "index"
    ];
    static defaultProperties = {
        className: "page"
    };
}
const _default = (0, _easywithstyle.default)(PageButton)`

  color: black;
  border: 1px solid black;
  padding: 0.5rem;
  font-size: 1.7rem;
  background: white;  
  font-family: serif;
  margin-left: 1rem;
  
  cursor: pointer;
  font-weight: bold;

  [disabled] {
    cursor: auto;
    font-weight: normal;
  }
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYnV0dG9uL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIFBhZ2VCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBnZXRJbmRleCgpIHtcbiAgICBjb25zdCB7IGluZGV4IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleCgpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBgJHtpbmRleCArIDF9YDtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiaW5kZXhcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGFnZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQYWdlQnV0dG9uKWBcblxuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgIFxuICBmb250LWZhbWlseTogc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICBbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiUGFnZUJ1dHRvbiIsIkJ1dHRvbiIsImdldEluZGV4IiwiaW5kZXgiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZCQTs7O2VBQUE7OztzRUEzQnNCO3NCQUVDOzs7Ozs7QUFFdkIsTUFBTUEsbUJBQW1CQyxZQUFNO0lBQzdCQyxXQUFXO1FBQ1QsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUNDLFVBQVU7UUFFakMsT0FBT0Q7SUFDVDtJQUVBRSxnQkFBZ0I7UUFDZCxNQUFNRixRQUFRLElBQUksQ0FBQ0QsUUFBUSxJQUNyQkcsZ0JBQWdCLEdBQUdGLFFBQVEsR0FBRztRQUVwQyxPQUFPRTtJQUNUO0lBRUEsT0FBT0Msb0JBQW9CO1FBQ3pCO0tBQ0QsQ0FBQztJQUVGLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNULFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JyQyxDQUFDIn0=