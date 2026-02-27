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
class ParseTreeTextarea extends _textarea.default {
    update(parseTree) {
        const parseTreeString = parseTree.asString(), value = parseTreeString; ///
        this.setValue(value);
    }
    clear() {
        const value = _constants.EMPTY_STRING;
        this.setValue(value);
    }
    static defaultProperties = {
        readOnly: true,
        className: "parse-tree",
        spellCheck: "false"
    };
}
const _default = (0, _easywithstyle.default)(ParseTreeTextarea)`

  height: 48rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgUGFyc2VUcmVlVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHVwZGF0ZShwYXJzZVRyZWUpIHtcbiAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZSA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgIGNsYXNzTmFtZTogXCJwYXJzZS10cmVlXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQYXJzZVRyZWVUZXh0YXJlYSlgXG5cbiAgaGVpZ2h0OiA0OHJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlBhcnNlVHJlZVRleHRhcmVhIiwiVGV4dGFyZWEiLCJ1cGRhdGUiLCJwYXJzZVRyZWUiLCJwYXJzZVRyZWVTdHJpbmciLCJhc1N0cmluZyIsInZhbHVlIiwic2V0VmFsdWUiLCJjbGVhciIsIkVNUFRZX1NUUklORyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwicmVhZE9ubHkiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2QkE7OztlQUFBOzs7c0VBM0JzQjtpRUFFRDsyQkFFUTs7Ozs7O0FBRTdCLE1BQU1BLDBCQUEwQkMsaUJBQVE7SUFDdENDLE9BQU9DLFNBQVMsRUFBRTtRQUNoQixNQUFNQyxrQkFBa0JELFVBQVVFLFFBQVEsSUFDcENDLFFBQVFGLGlCQUFrQixHQUFHO1FBRW5DLElBQUksQ0FBQ0csUUFBUSxDQUFDRDtJQUNoQjtJQUVBRSxRQUFRO1FBQ04sTUFBTUYsUUFBUUcsdUJBQVk7UUFFMUIsSUFBSSxDQUFDRixRQUFRLENBQUNEO0lBQ2hCO0lBRUEsT0FBT0ksb0JBQW9CO1FBQ3pCQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsWUFBWTtJQUNkLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNkLGtCQUFrQixDQUFDOzs7O0FBSTVDLENBQUMifQ==