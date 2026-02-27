"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ArgumentCSSNode;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ArgumentCSSNode extends _css.default {
    asCSS(context) {
        let css;
        css = super.asCSS(context);
        css = `(${css})`;
        return css;
    }
    static fromNothing() {
        return _css.default.fromNothing(ArgumentsCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(ArgumentCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9hcmd1bWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmd1bWVudENTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgYXNDU1MoY29udGV4dCkge1xuICAgIGxldCBjc3M7XG5cbiAgICBjc3MgPSBzdXBlci5hc0NTUyhjb250ZXh0KTtcblxuICAgIGNzcyA9IGAoJHtjc3N9KWA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tTm90aGluZyhBcmd1bWVudHNDU1NOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tT3V0ZXJOb2RlKEFyZ3VtZW50Q1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkFyZ3VtZW50Q1NTTm9kZSIsIkNTU05vZGUiLCJhc0NTUyIsImNvbnRleHQiLCJjc3MiLCJmcm9tTm90aGluZyIsIkFyZ3VtZW50c0NTU05vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzREQUZEOzs7Ozs7QUFFTCxNQUFNQSx3QkFBd0JDLFlBQU87SUFDbERDLE1BQU1DLE9BQU8sRUFBRTtRQUNiLElBQUlDO1FBRUpBLE1BQU0sS0FBSyxDQUFDRixNQUFNQztRQUVsQkMsTUFBTSxDQUFDLENBQUMsRUFBRUEsSUFBSSxDQUFDLENBQUM7UUFFaEIsT0FBT0E7SUFDVDtJQUVBLE9BQU9DLGNBQWM7UUFBRSxPQUFPSixZQUFPLENBQUNJLFdBQVcsQ0FBQ0M7SUFBbUI7SUFFckUsT0FBT0MsY0FBY0MsU0FBUyxFQUFFO1FBQUUsT0FBT1AsWUFBTyxDQUFDTSxhQUFhLENBQUNQLGlCQUFpQlE7SUFBWTtBQUM5RiJ9