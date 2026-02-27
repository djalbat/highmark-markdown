"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NameCSSNode;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NameCSSNode extends _css.default {
    asCSS(context) {
        let css = super.asCSS(context);
        css = css.replace(/colour/g, _constants.COLOUR);
        return css;
    }
    static fromNothing() {
        return _css.default.fromNothing(NameCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(NameCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcblxuaW1wb3J0IHsgQ09MT1VSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYW1lQ1NTTm9kZSBleHRlbmRzIENTU05vZGUge1xuICBhc0NTUyhjb250ZXh0KSB7XG4gICAgbGV0IGNzcyA9IHN1cGVyLmFzQ1NTKGNvbnRleHQpO1xuXG4gICAgY3NzID0gY3NzLnJlcGxhY2UoL2NvbG91ci9nLCBDT0xPVVIpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENTU05vZGUuZnJvbU5vdGhpbmcoTmFtZUNTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoTmFtZUNTU05vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJOYW1lQ1NTTm9kZSIsIkNTU05vZGUiLCJhc0NTUyIsImNvbnRleHQiLCJjc3MiLCJyZXBsYWNlIiwiQ09MT1VSIiwiZnJvbU5vdGhpbmciLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzREQUpEOzJCQUVHOzs7Ozs7QUFFUixNQUFNQSxvQkFBb0JDLFlBQU87SUFDOUNDLE1BQU1DLE9BQU8sRUFBRTtRQUNiLElBQUlDLE1BQU0sS0FBSyxDQUFDRixNQUFNQztRQUV0QkMsTUFBTUEsSUFBSUMsT0FBTyxDQUFDLFdBQVdDLGlCQUFNO1FBRW5DLE9BQU9GO0lBQ1Q7SUFFQSxPQUFPRyxjQUFjO1FBQUUsT0FBT04sWUFBTyxDQUFDTSxXQUFXLENBQUNQO0lBQWM7SUFFaEUsT0FBT1EsY0FBY0MsU0FBUyxFQUFFO1FBQUUsT0FBT1IsWUFBTyxDQUFDTyxhQUFhLENBQUNSLGFBQWFTO0lBQVk7QUFDMUYifQ==