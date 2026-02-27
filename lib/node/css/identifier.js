"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IdentifierCSSNode;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class IdentifierCSSNode extends _css.default {
    content() {
        const markdownStyleNode = this.getMarkdownStyleNode(), content = markdownStyleNode.content();
        return content;
    }
    asCSS(context) {
        const content = this.content(), css = content; ///
        return css;
    }
    static fromNothing() {
        return _css.default.fromNothing(IdentifierCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(IdentifierCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9pZGVudGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlbnRpZmllckNTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgY29udGVudCgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZU5vZGUoKSxcbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd25TdHlsZU5vZGUuY29udGVudCgpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhc0NTUyhjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudCgpLFxuICAgICAgICAgIGNzcyA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENTU05vZGUuZnJvbU5vdGhpbmcoSWRlbnRpZmllckNTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoSWRlbnRpZmllckNTU05vZGUsIG91dGVyTm9kZSk7IH1cbn0iXSwibmFtZXMiOlsiSWRlbnRpZmllckNTU05vZGUiLCJDU1NOb2RlIiwiY29udGVudCIsIm1hcmtkb3duU3R5bGVOb2RlIiwiZ2V0TWFya2Rvd25TdHlsZU5vZGUiLCJhc0NTUyIsImNvbnRleHQiLCJjc3MiLCJmcm9tTm90aGluZyIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7NERBRkQ7Ozs7OztBQUVMLE1BQU1BLDBCQUEwQkMsWUFBTztJQUNwREMsVUFBVTtRQUNSLE1BQU1DLG9CQUFvQixJQUFJLENBQUNDLG9CQUFvQixJQUM3Q0YsVUFBVUMsa0JBQWtCRCxPQUFPO1FBRXpDLE9BQU9BO0lBQ1Q7SUFFQUcsTUFBTUMsT0FBTyxFQUFFO1FBQ2IsTUFBTUosVUFBVSxJQUFJLENBQUNBLE9BQU8sSUFDdEJLLE1BQU1MLFNBQVMsR0FBRztRQUV4QixPQUFPSztJQUNUO0lBRUEsT0FBT0MsY0FBYztRQUFFLE9BQU9QLFlBQU8sQ0FBQ08sV0FBVyxDQUFDUjtJQUFvQjtJQUV0RSxPQUFPUyxjQUFjQyxTQUFTLEVBQUU7UUFBRSxPQUFPVCxZQUFPLENBQUNRLGFBQWEsQ0FBQ1QsbUJBQW1CVTtJQUFZO0FBQ2hHIn0=