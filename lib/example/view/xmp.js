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
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class XMP extends _easy.Element {
    update(html) {
        this.html(html);
    }
    clear() {
        const html = _constants.EMPTY_STRING;
        this.html(html);
    }
    parentContext() {
        const clearXMP = this.clear.bind(this), updateXMP = this.update.bind(this); ///
        return {
            clearXMP,
            updateXMP
        };
    }
    static tagName = "xmp";
}
const _default = (0, _easywithstyle.default)(XMP)`

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-family: monospace;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcveG1wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBYTVAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgdXBkYXRlKGh0bWwpIHtcbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjb25zdCBodG1sID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjbGVhclhNUCA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlWE1QID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjbGVhclhNUCxcbiAgICAgIHVwZGF0ZVhNUFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInhtcFwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoWE1QKWBcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJYTVAiLCJFbGVtZW50IiwidXBkYXRlIiwiaHRtbCIsImNsZWFyIiwiRU1QVFlfU1RSSU5HIiwicGFyZW50Q29udGV4dCIsImNsZWFyWE1QIiwiYmluZCIsInVwZGF0ZVhNUCIsInRhZ05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdDQTs7O2VBQUE7OztzRUE5QnNCO3NCQUVFOzJCQUVLOzs7Ozs7QUFFN0IsTUFBTUEsWUFBWUMsYUFBTztJQUN2QkMsT0FBT0MsSUFBSSxFQUFFO1FBQ1gsSUFBSSxDQUFDQSxJQUFJLENBQUNBO0lBQ1o7SUFFQUMsUUFBUTtRQUNOLE1BQU1ELE9BQU9FLHVCQUFZO1FBRXpCLElBQUksQ0FBQ0YsSUFBSSxDQUFDQTtJQUNaO0lBRUFHLGdCQUFnQjtRQUNkLE1BQU1DLFdBQVcsSUFBSSxDQUFDSCxLQUFLLENBQUNJLElBQUksQ0FBQyxJQUFJLEdBQy9CQyxZQUFZLElBQUksQ0FBQ1AsTUFBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7UUFFOUMsT0FBUTtZQUNORDtZQUNBRTtRQUNGO0lBQ0Y7SUFFQSxPQUFPQyxVQUFVLE1BQU07QUFDekI7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDWCxJQUFJLENBQUM7Ozs7Ozs7Ozs7O0FBVzlCLENBQUMifQ==