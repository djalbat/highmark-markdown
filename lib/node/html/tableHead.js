"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TableHeadHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TableHeadHTMLNode extends _html.default {
    static tagName = "thead";
    static className = null;
    static fromNothing() {
        return _html.default.fromNothing(TableHeadHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _html.default.fromOuterNode(TableHeadHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGFibGVIZWFkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUhlYWRIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcInRoZWFkXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoVGFibGVIZWFkSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKFRhYmxlSGVhZEhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiVGFibGVIZWFkSFRNTE5vZGUiLCJIVE1MTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJmcm9tTm90aGluZyIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7NkRBRkE7Ozs7OztBQUVOLE1BQU1BLDBCQUEwQkMsYUFBUTtJQUNyRCxPQUFPQyxVQUFVLFFBQVE7SUFFekIsT0FBT0MsWUFBWSxLQUFLO0lBRXhCLE9BQU9DLGNBQWM7UUFBRSxPQUFPSCxhQUFRLENBQUNHLFdBQVcsQ0FBQ0o7SUFBb0I7SUFFdkUsT0FBT0ssY0FBY0MsU0FBUyxFQUFFO1FBQUUsT0FBT0wsYUFBUSxDQUFDSSxhQUFhLENBQUNMLG1CQUFtQk07SUFBWTtBQUNqRyJ9