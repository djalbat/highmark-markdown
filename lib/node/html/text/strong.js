"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StrongTextHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class StrongTextHTMLNode extends _html.default {
    adjustIndent(indent) {
        indent = null;
        return indent;
    }
    static tagName = "strong";
    static className = null;
    static fromNothing() {
        return _html.default.fromNothing(StrongTextHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _html.default.fromOuterNode(StrongTextHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC9zdHJvbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cm9uZ1RleHRIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIGluZGVudCA9IG51bGw7XG5cbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInN0cm9uZ1wiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKFN0cm9uZ1RleHRIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoU3Ryb25nVGV4dEhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiU3Ryb25nVGV4dEhUTUxOb2RlIiwiSFRNTE5vZGUiLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiZnJvbU5vdGhpbmciLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzZEQUZBOzs7Ozs7QUFFTixNQUFNQSwyQkFBMkJDLGFBQVE7SUFDdERDLGFBQWFDLE1BQU0sRUFBRTtRQUNuQkEsU0FBUztRQUVULE9BQU9BO0lBQ1Q7SUFFQSxPQUFPQyxVQUFVLFNBQVM7SUFFMUIsT0FBT0MsWUFBWSxLQUFLO0lBRXhCLE9BQU9DLGNBQWM7UUFBRSxPQUFPTCxhQUFRLENBQUNLLFdBQVcsQ0FBQ047SUFBcUI7SUFFeEUsT0FBT08sY0FBY0MsU0FBUyxFQUFFO1FBQUUsT0FBT1AsYUFBUSxDQUFDTSxhQUFhLENBQUNQLG9CQUFvQlE7SUFBWTtBQUNsRyJ9