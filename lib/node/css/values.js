"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ValuesCSSNode;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ValuesCSSNode extends _css.default {
    asCSS(context) {
        const css = this.reduceChildNode((css, childNode)=>{
            const childNodeCSS = childNode.asCSS(context);
            css = css !== null ? `${css} ${childNodeCSS}` : childNodeCSS; ///
            return css;
        }, null);
        return css;
    }
    static fromNothing() {
        return _css.default.fromNothing(ValuesCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(ValuesCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy92YWx1ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWx1ZXNDU1NOb2RlIGV4dGVuZHMgQ1NTTm9kZSB7XG4gIGFzQ1NTKGNvbnRleHQpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY3NzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUNTUyA9IGNoaWxkTm9kZS5hc0NTUyhjb250ZXh0KTtcblxuICAgICAgY3NzID0gKGNzcyAhPT0gbnVsbCk/XG4gICAgICAgICAgICAgYCR7Y3NzfSAke2NoaWxkTm9kZUNTU31gIDpcbiAgICAgICAgICAgICAgIGNoaWxkTm9kZUNTUzsgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tTm90aGluZyhWYWx1ZXNDU1NOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tT3V0ZXJOb2RlKFZhbHVlc0NTU05vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJWYWx1ZXNDU1NOb2RlIiwiQ1NTTm9kZSIsImFzQ1NTIiwiY29udGV4dCIsImNzcyIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUNTUyIsImZyb21Ob3RoaW5nIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozs0REFGRDs7Ozs7O0FBRUwsTUFBTUEsc0JBQXNCQyxZQUFPO0lBQ2hEQyxNQUFNQyxPQUFPLEVBQUU7UUFDYixNQUFNQyxNQUFNLElBQUksQ0FBQ0MsZUFBZSxDQUFDLENBQUNELEtBQUtFO1lBQ3JDLE1BQU1DLGVBQWVELFVBQVVKLEtBQUssQ0FBQ0M7WUFFckNDLE1BQU0sQUFBQ0EsUUFBUSxPQUNSLEdBQUdBLElBQUksQ0FBQyxFQUFFRyxjQUFjLEdBQ3RCQSxjQUFjLEdBQUc7WUFFMUIsT0FBT0g7UUFDVCxHQUFHO1FBRUgsT0FBT0E7SUFDVDtJQUVBLE9BQU9JLGNBQWM7UUFBRSxPQUFPUCxZQUFPLENBQUNPLFdBQVcsQ0FBQ1I7SUFBZ0I7SUFFbEUsT0FBT1MsY0FBY0MsU0FBUyxFQUFFO1FBQUUsT0FBT1QsWUFBTyxDQUFDUSxhQUFhLENBQUNULGVBQWVVO0lBQVk7QUFDNUYifQ==