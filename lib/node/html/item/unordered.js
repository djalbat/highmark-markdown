"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return UnorderedItemHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class UnorderedItemHTMLNode extends _html.default {
    static tagName = "li";
    static className = null;
    static fromNothing() {
        return _html.default.fromNothing(UnorderedItemHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _html.default.fromOuterNode(UnorderedItemHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS91bm9yZGVyZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVub3JkZXJlZEl0ZW1IVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcImxpXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoVW5vcmRlcmVkSXRlbUhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShVbm9yZGVyZWRJdGVtSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJVbm9yZGVyZWRJdGVtSFRNTE5vZGUiLCJIVE1MTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJmcm9tTm90aGluZyIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7NkRBRkE7Ozs7OztBQUVOLE1BQU1BLDhCQUE4QkMsYUFBUTtJQUN6RCxPQUFPQyxVQUFVLEtBQUs7SUFFdEIsT0FBT0MsWUFBWSxLQUFLO0lBRXhCLE9BQU9DLGNBQWM7UUFBRSxPQUFPSCxhQUFRLENBQUNHLFdBQVcsQ0FBQ0o7SUFBd0I7SUFFM0UsT0FBT0ssY0FBY0MsU0FBUyxFQUFFO1FBQUUsT0FBT0wsYUFBUSxDQUFDSSxhQUFhLENBQUNMLHVCQUF1Qk07SUFBWTtBQUNyRyJ9