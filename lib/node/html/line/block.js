"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockLineHTMLNode;
    }
});
const _line = /*#__PURE__*/ _interop_require_default(require("../../../node/html/line"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BlockLineHTMLNode extends _line.default {
    lines(context) {
        const { lines } = this.constructor;
        return lines;
    }
    static lines = 1;
    static tagName = "span";
    static className = "block-line";
    static fromNothing() {
        return _line.default.fromNothing(BlockLineHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _line.default.fromOuterNode(BlockLineHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExpbmVIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaW5lSFRNTE5vZGUgZXh0ZW5kcyBMaW5lSFRNTE5vZGUge1xuICBsaW5lcyhjb250ZXh0KSB7XG4gICAgY29uc3QgeyBsaW5lcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIHN0YXRpYyBsaW5lcyA9IDE7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNwYW5cIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJibG9jay1saW5lXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gTGluZUhUTUxOb2RlLmZyb21Ob3RoaW5nKEJsb2NrTGluZUhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gTGluZUhUTUxOb2RlLmZyb21PdXRlck5vZGUoQmxvY2tMaW5lSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpbmVIVE1MTm9kZSIsIkxpbmVIVE1MTm9kZSIsImxpbmVzIiwiY29udGV4dCIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJmcm9tTm90aGluZyIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7NkRBRkk7Ozs7OztBQUVWLE1BQU1BLDBCQUEwQkMsYUFBWTtJQUN6REMsTUFBTUMsT0FBTyxFQUFFO1FBQ2IsTUFBTSxFQUFFRCxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVztRQUVsQyxPQUFPQTtJQUNUO0lBRUEsT0FBT0EsUUFBUSxFQUFFO0lBRWpCLE9BQU9FLFVBQVUsT0FBTztJQUV4QixPQUFPQyxZQUFZLGFBQWE7SUFFaEMsT0FBT0MsY0FBYztRQUFFLE9BQU9MLGFBQVksQ0FBQ0ssV0FBVyxDQUFDTjtJQUFvQjtJQUUzRSxPQUFPTyxjQUFjQyxTQUFTLEVBQUU7UUFBRSxPQUFPUCxhQUFZLENBQUNNLGFBQWEsQ0FBQ1AsbUJBQW1CUTtJQUFZO0FBQ3JHIn0=