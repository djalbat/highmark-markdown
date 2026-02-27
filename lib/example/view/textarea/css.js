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
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CSSTextarea extends _textarea.default {
    setCSS(css) {
        const value = css; ///
        this.setValue(value);
    }
    clearCSS() {
        const css = _constants.EMPTY_STRING;
        this.setCSS(css);
    }
    parentContext() {
        const setCSS = this.setCSS.bind(this), clearCSS = this.clearCSS.bind(this);
        return {
            setCSS,
            clearCSS
        };
    }
    static defaultProperties = {
        readOnly: true,
        className: "css",
        spellCheck: "false"
    };
}
const _default = (0, _easywithstyle.default)(CSSTextarea)`

  height: 100%;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5pbXBvcnQge0VNUFRZX1NUUklOR30gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBDU1NUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2V0Q1NTKGNzcykge1xuICAgIGNvbnN0IHZhbHVlID0gY3NzOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNsZWFyQ1NTKCkge1xuICAgIGNvbnN0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldENTUyA9IHRoaXMuc2V0Q1NTLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJDU1MgPSB0aGlzLmNsZWFyQ1NTLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldENTUyxcbiAgICAgIGNsZWFyQ1NTXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgcmVhZE9ubHk6IHRydWUsXG4gICAgY2xhc3NOYW1lOiBcImNzc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ1NTVGV4dGFyZWEpYFxuXG4gIGhlaWdodDogMTAwJTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkNTU1RleHRhcmVhIiwiVGV4dGFyZWEiLCJzZXRDU1MiLCJjc3MiLCJ2YWx1ZSIsInNldFZhbHVlIiwiY2xlYXJDU1MiLCJFTVBUWV9TVFJJTkciLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwicmVhZE9ubHkiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxQ0E7OztlQUFBOzs7c0VBbkNzQjtpRUFFRDsyQkFDTTs7Ozs7O0FBRTNCLE1BQU1BLG9CQUFvQkMsaUJBQVE7SUFDaENDLE9BQU9DLEdBQUcsRUFBRTtRQUNWLE1BQU1DLFFBQVFELEtBQU0sR0FBRztRQUV2QixJQUFJLENBQUNFLFFBQVEsQ0FBQ0Q7SUFDaEI7SUFFQUUsV0FBVztRQUNULE1BQU1ILE1BQU1JLHVCQUFZO1FBRXhCLElBQUksQ0FBQ0wsTUFBTSxDQUFDQztJQUNkO0lBRUFLLGdCQUFnQjtRQUNkLE1BQU1OLFNBQVMsSUFBSSxDQUFDQSxNQUFNLENBQUNPLElBQUksQ0FBQyxJQUFJLEdBQzlCSCxXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDRyxJQUFJLENBQUMsSUFBSTtRQUV4QyxPQUFRO1lBQ05QO1lBQ0FJO1FBQ0Y7SUFDRjtJQUVBLE9BQU9JLG9CQUFvQjtRQUN6QkMsVUFBVTtRQUNWQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZCxFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDZCxZQUFZLENBQUM7Ozs7QUFJdEMsQ0FBQyJ9