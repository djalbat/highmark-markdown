"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PseudoClassCSSNode;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PseudoClassCSSNode extends _css.default {
    asCSS(context) {
        let css;
        css = super.asCSS(context);
        css = `:${css}`;
        return css;
    }
    static fromNothing() {
        return _css.default.fromNothing(PseudoClassCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(PseudoClassCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9wc2V1ZG9DbGFzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uLy4uL25vZGUvY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBzZXVkb0NsYXNzQ1NTTm9kZSBleHRlbmRzIENTU05vZGUge1xuICBhc0NTUyhjb250ZXh0KSB7XG4gICAgbGV0IGNzcztcblxuICAgIGNzcyA9IHN1cGVyLmFzQ1NTKGNvbnRleHQpO1xuXG4gICAgY3NzID0gYDoke2Nzc31gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENTU05vZGUuZnJvbU5vdGhpbmcoUHNldWRvQ2xhc3NDU1NOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tT3V0ZXJOb2RlKFBzZXVkb0NsYXNzQ1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlBzZXVkb0NsYXNzQ1NTTm9kZSIsIkNTU05vZGUiLCJhc0NTUyIsImNvbnRleHQiLCJjc3MiLCJmcm9tTm90aGluZyIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7NERBRkQ7Ozs7OztBQUVMLE1BQU1BLDJCQUEyQkMsWUFBTztJQUNyREMsTUFBTUMsT0FBTyxFQUFFO1FBQ2IsSUFBSUM7UUFFSkEsTUFBTSxLQUFLLENBQUNGLE1BQU1DO1FBRWxCQyxNQUFNLENBQUMsQ0FBQyxFQUFFQSxLQUFLO1FBRWYsT0FBT0E7SUFDVDtJQUVBLE9BQU9DLGNBQWM7UUFBRSxPQUFPSixZQUFPLENBQUNJLFdBQVcsQ0FBQ0w7SUFBcUI7SUFFdkUsT0FBT00sY0FBY0MsU0FBUyxFQUFFO1FBQUUsT0FBT04sWUFBTyxDQUFDSyxhQUFhLENBQUNOLG9CQUFvQk87SUFBWTtBQUNqRyJ9