"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownStyleTabButton;
    }
});
const _tab = /*#__PURE__*/ _interop_require_default(require("../../button/tab"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MarkdownStyleTabButton extends _tab.default {
    childElements() {
        return "Markdown style";
    }
    parentContext() {
        const enableMarkdownStyleTabButton = this.enable.bind(this), disableMarkdownStyleTabButton = this.disable.bind(this); ///
        return {
            enableMarkdownStyleTabButton,
            disableMarkdownStyleTabButton
        };
    }
    static defaultProperties = {
        className: "markdown-style"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYnV0dG9uL3RhYi9tYXJrZG93blN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGFiQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vdGFiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duU3R5bGVUYWJCdXR0b24gZXh0ZW5kcyBUYWJCdXR0b24ge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBcIk1hcmtkb3duIHN0eWxlXCI7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGVuYWJsZU1hcmtkb3duU3R5bGVUYWJCdXR0b24gPSB0aGlzLmVuYWJsZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZU1hcmtkb3duU3R5bGVUYWJCdXR0b24gPSB0aGlzLmRpc2FibGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBlbmFibGVNYXJrZG93blN0eWxlVGFiQnV0dG9uLFxuICAgICAgZGlzYWJsZU1hcmtkb3duU3R5bGVUYWJCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFya2Rvd24tc3R5bGVcIlxuICB9XG59XG4iXSwibmFtZXMiOlsiTWFya2Rvd25TdHlsZVRhYkJ1dHRvbiIsIlRhYkJ1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRDb250ZXh0IiwiZW5hYmxlTWFya2Rvd25TdHlsZVRhYkJ1dHRvbiIsImVuYWJsZSIsImJpbmQiLCJkaXNhYmxlTWFya2Rvd25TdHlsZVRhYkJ1dHRvbiIsImRpc2FibGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozs0REFGQzs7Ozs7O0FBRVAsTUFBTUEsK0JBQStCQyxZQUFTO0lBQzNEQyxnQkFBZ0I7UUFDZCxPQUFPO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsK0JBQStCLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUNwREMsZ0NBQWdDLElBQUksQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7UUFFbkUsT0FBUTtZQUNORjtZQUNBRztRQUNGO0lBQ0Y7SUFFQSxPQUFPRSxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFDO0FBQ0gifQ==