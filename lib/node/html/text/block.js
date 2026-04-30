"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockTextHTMLNode;
    }
});
const _text = /*#__PURE__*/ _interop_require_default(require("../../../node/html/text"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BlockTextHTMLNode extends _text.default {
    static tagName = null;
    static className = null;
    static fromNothing() {
        return _text.default.fromNothing(BlockTextHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _text.default.fromOuterNode(BlockTextHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tUZXh0SFRNTE5vZGUgZXh0ZW5kcyBUZXh0SFRNTE5vZGUge1xuICBzdGF0aWMgdGFnTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gVGV4dEhUTUxOb2RlLmZyb21Ob3RoaW5nKEJsb2NrVGV4dEhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gVGV4dEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQmxvY2tUZXh0SFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja1RleHRIVE1MTm9kZSIsIlRleHRIVE1MTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJmcm9tTm90aGluZyIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7NkRBRkk7Ozs7OztBQUVWLE1BQU1BLDBCQUEwQkMsYUFBWTtJQUN6RCxPQUFPQyxVQUFVLEtBQUs7SUFFdEIsT0FBT0MsWUFBWSxLQUFLO0lBRXhCLE9BQU9DLGNBQWM7UUFBRSxPQUFPSCxhQUFZLENBQUNHLFdBQVcsQ0FBQ0o7SUFBb0I7SUFFM0UsT0FBT0ssY0FBY0MsU0FBUyxFQUFFO1FBQUUsT0FBT0wsYUFBWSxDQUFDSSxhQUFhLENBQUNMLG1CQUFtQk07SUFBWTtBQUNyRyJ9