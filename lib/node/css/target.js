"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentCSSNode;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContentCSSNode extends _css.default {
    target(context) {
        const markdownStyleNode = this.getMarkdownStyleNode(), targetMarkdownStyleNode = markdownStyleNode, target = targetMarkdownStyleNode.target(context);
        return target;
    }
    static fromNothing() {
        return _css.default.fromNothing(ContentCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(ContentCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy90YXJnZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50Q1NTTm9kZSBleHRlbmRzIENTU05vZGUge1xuICB0YXJnZXQoY29udGV4dCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVOb2RlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlTm9kZSgpLFxuICAgICAgICAgIHRhcmdldE1hcmtkb3duU3R5bGVOb2RlID0gbWFya2Rvd25TdHlsZU5vZGUsICAvLy9cbiAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRNYXJrZG93blN0eWxlTm9kZS50YXJnZXQoY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tTm90aGluZyhDb250ZW50Q1NTTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIENTU05vZGUuZnJvbU91dGVyTm9kZShDb250ZW50Q1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRDU1NOb2RlIiwiQ1NTTm9kZSIsInRhcmdldCIsImNvbnRleHQiLCJtYXJrZG93blN0eWxlTm9kZSIsImdldE1hcmtkb3duU3R5bGVOb2RlIiwidGFyZ2V0TWFya2Rvd25TdHlsZU5vZGUiLCJmcm9tTm90aGluZyIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7NERBRkQ7Ozs7OztBQUVMLE1BQU1BLHVCQUF1QkMsWUFBTztJQUNqREMsT0FBT0MsT0FBTyxFQUFFO1FBQ2QsTUFBTUMsb0JBQW9CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzdDQywwQkFBMEJGLG1CQUMxQkYsU0FBU0ksd0JBQXdCSixNQUFNLENBQUNDO1FBRTlDLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPSyxjQUFjO1FBQUUsT0FBT04sWUFBTyxDQUFDTSxXQUFXLENBQUNQO0lBQWlCO0lBRW5FLE9BQU9RLGNBQWNDLFNBQVMsRUFBRTtRQUFFLE9BQU9SLFlBQU8sQ0FBQ08sYUFBYSxDQUFDUixnQkFBZ0JTO0lBQVk7QUFDN0YifQ==