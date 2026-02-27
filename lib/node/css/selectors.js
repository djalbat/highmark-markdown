"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorsCSSNode;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SelectorsCSSNode extends _css.default {
    asCSS(context) {
        let css;
        const { cssSelectorsString } = context;
        css = this.reduceChildNode((css, childNode)=>{
            const childNodeCSS = childNode.asCSS(context);
            css = css !== null ? `${css}${childNodeCSS}` : childNodeCSS; ///
            return css;
        }, null);
        css = `${cssSelectorsString} ${css}`;
        return css;
    }
    static fromNothing() {
        return _css.default.fromNothing(SelectorsCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(SelectorsCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvcnNDU1NOb2RlIGV4dGVuZHMgQ1NTTm9kZSB7XG4gIGFzQ1NTKGNvbnRleHQpIHtcbiAgICBsZXQgY3NzO1xuXG4gICAgY29uc3QgeyBjc3NTZWxlY3RvcnNTdHJpbmcgfSA9IGNvbnRleHQ7XG5cbiAgICBjc3MgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY3NzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUNTUyA9IGNoaWxkTm9kZS5hc0NTUyhjb250ZXh0KTtcblxuICAgICAgY3NzID0gKGNzcyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICBgJHtjc3N9JHtjaGlsZE5vZGVDU1N9YCA6XG4gICAgICAgICAgICAgICAgY2hpbGROb2RlQ1NTOyAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBudWxsKTtcblxuICAgIGNzcyA9IGAke2Nzc1NlbGVjdG9yc1N0cmluZ30gJHtjc3N9YDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDU1NOb2RlLmZyb21Ob3RoaW5nKFNlbGVjdG9yc0NTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoU2VsZWN0b3JzQ1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9yc0NTU05vZGUiLCJDU1NOb2RlIiwiYXNDU1MiLCJjb250ZXh0IiwiY3NzIiwiY3NzU2VsZWN0b3JzU3RyaW5nIiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlQ1NTIiwiZnJvbU5vdGhpbmciLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzREQUZEOzs7Ozs7QUFFTCxNQUFNQSx5QkFBeUJDLFlBQU87SUFDbkRDLE1BQU1DLE9BQU8sRUFBRTtRQUNiLElBQUlDO1FBRUosTUFBTSxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHRjtRQUUvQkMsTUFBTSxJQUFJLENBQUNFLGVBQWUsQ0FBQyxDQUFDRixLQUFLRztZQUMvQixNQUFNQyxlQUFlRCxVQUFVTCxLQUFLLENBQUNDO1lBRXJDQyxNQUFNLEFBQUNBLFFBQVEsT0FDUCxHQUFHQSxNQUFNSSxjQUFjLEdBQ3JCQSxjQUFjLEdBQUc7WUFFM0IsT0FBT0o7UUFDVCxHQUFHO1FBRUhBLE1BQU0sR0FBR0MsbUJBQW1CLENBQUMsRUFBRUQsS0FBSztRQUVwQyxPQUFPQTtJQUNUO0lBRUEsT0FBT0ssY0FBYztRQUFFLE9BQU9SLFlBQU8sQ0FBQ1EsV0FBVyxDQUFDVDtJQUFtQjtJQUVyRSxPQUFPVSxjQUFjQyxTQUFTLEVBQUU7UUFBRSxPQUFPVixZQUFPLENBQUNTLGFBQWEsQ0FBQ1Ysa0JBQWtCVztJQUFZO0FBQy9GIn0=