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
const _xmp = /*#__PURE__*/ _interop_require_default(require("../xmp"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class HTMLDiv extends _easy.Element {
    childElements() {
        return /*#__PURE__*/ React.createElement(_xmp.default, null);
    }
    static tagName = "div";
    static defaultProperties = {
        className: "html"
    };
}
const _default = (0, _easywithstyle.default)(HTMLDiv)`

  height: 100%;
  border: 1px solid darkgrey;
  overflow: scroll;
  position: relative;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgWE1QIGZyb20gXCIuLi94bXBcIjtcblxuY2xhc3MgSFRNTERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxYTVAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImh0bWxcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSFRNTERpdilgXG5cbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiSFRNTERpdiIsIkVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwiWE1QIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3QkE7OztlQUFBOzs7c0VBdEJzQjtzQkFFRTs0REFFUjs7Ozs7O0FBRWhCLE1BQU1BLGdCQUFnQkMsYUFBTztJQUMzQkMsZ0JBQWdCO1FBQ2QscUJBRUUsb0JBQUNDLFlBQUc7SUFHUjtJQUVBLE9BQU9DLFVBQVUsTUFBTTtJQUV2QixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDUCxRQUFRLENBQUM7Ozs7Ozs7QUFPbEMsQ0FBQyJ9