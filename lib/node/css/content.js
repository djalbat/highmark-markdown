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
    content(context) {
        const markdownStyleNode = this.getMarkdownStyleNode(), contentMarkdownStyleNode = markdownStyleNode, content = contentMarkdownStyleNode.content(context);
        return content;
    }
    static fromNothing() {
        return _css.default.fromNothing(ContentCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(ContentCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudENTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZU5vZGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVOb2RlKCksXG4gICAgICAgICAgY29udGVudE1hcmtkb3duU3R5bGVOb2RlID0gbWFya2Rvd25TdHlsZU5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gY29udGVudE1hcmtkb3duU3R5bGVOb2RlLmNvbnRlbnQoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENTU05vZGUuZnJvbU5vdGhpbmcoQ29udGVudENTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoQ29udGVudENTU05vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50Q1NTTm9kZSIsIkNTU05vZGUiLCJjb250ZW50IiwiY29udGV4dCIsIm1hcmtkb3duU3R5bGVOb2RlIiwiZ2V0TWFya2Rvd25TdHlsZU5vZGUiLCJjb250ZW50TWFya2Rvd25TdHlsZU5vZGUiLCJmcm9tTm90aGluZyIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7NERBRkQ7Ozs7OztBQUVMLE1BQU1BLHVCQUF1QkMsWUFBTztJQUNqREMsUUFBUUMsT0FBTyxFQUFFO1FBQ2YsTUFBTUMsb0JBQW9CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzdDQywyQkFBMkJGLG1CQUMzQkYsVUFBVUkseUJBQXlCSixPQUFPLENBQUNDO1FBRWpELE9BQU9EO0lBQ1Q7SUFFQSxPQUFPSyxjQUFjO1FBQUUsT0FBT04sWUFBTyxDQUFDTSxXQUFXLENBQUNQO0lBQWlCO0lBRW5FLE9BQU9RLGNBQWNDLFNBQVMsRUFBRTtRQUFFLE9BQU9SLFlBQU8sQ0FBQ08sYUFBYSxDQUFDUixnQkFBZ0JTO0lBQVk7QUFDN0YifQ==