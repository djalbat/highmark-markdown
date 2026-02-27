"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _container = /*#__PURE__*/ _interop_require_default(require("../../div/container"));
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../textarea/markdown"));
const _markdown1 = /*#__PURE__*/ _interop_require_default(require("../../textarea/parseTree/markdown"));
const _constants = require("../../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MarkdownContainerDiv extends _container.default {
    show() {
        const displayStyle = _constants.FLEX;
        this.display(displayStyle);
    }
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_markdown.default, {
                onKeyUp: this.keyUpHandler
            }),
            /*#__PURE__*/ React.createElement(_markdown1.default, null)
        ];
    }
    parentContext() {
        const context = this.getContext(), showMarkdownContainerDiv = this.show.bind(this), hideMarkdownContainerDiv = this.hide.bind(this); ///
        return {
            ...context,
            showMarkdownContainerDiv,
            hideMarkdownContainerDiv
        };
    }
    static defaultProperties = {
        className: "markdown"
    };
}
const _default = (0, _easywithstyle.default)(MarkdownContainerDiv)`

  gap: 1rem;
  height: 97rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IENvbnRhaW5lckRpdiBmcm9tIFwiLi4vLi4vZGl2L2NvbnRhaW5lclwiO1xuaW1wb3J0IE1hcmtkb3duVGV4dGFyZWEgZnJvbSBcIi4uLy4uL3RleHRhcmVhL21hcmtkb3duXCI7XG5pbXBvcnQgTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi4vLi4vdGV4dGFyZWEvcGFyc2VUcmVlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEZMRVggfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE1hcmtkb3duQ29udGFpbmVyRGl2IGV4dGVuZHMgQ29udGFpbmVyRGl2IHtcbiAgc2hvdygpIHtcbiAgICBjb25zdCBkaXNwbGF5U3R5bGUgPSBGTEVYO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8TWFya2Rvd25UZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz4sXG4gICAgICA8TWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYS8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNob3dNYXJrZG93bkNvbnRhaW5lckRpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNob3dNYXJrZG93bkNvbnRhaW5lckRpdixcbiAgICAgIGhpZGVNYXJrZG93bkNvbnRhaW5lckRpdlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtYXJrZG93blwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNYXJrZG93bkNvbnRhaW5lckRpdilgXG5cbiAgZ2FwOiAxcmVtO1xuICBoZWlnaHQ6IDk3cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJNYXJrZG93bkNvbnRhaW5lckRpdiIsIkNvbnRhaW5lckRpdiIsInNob3ciLCJkaXNwbGF5U3R5bGUiLCJGTEVYIiwiZGlzcGxheSIsImNoaWxkRWxlbWVudHMiLCJNYXJrZG93blRleHRhcmVhIiwib25LZXlVcCIsImtleVVwSGFuZGxlciIsIk1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJiaW5kIiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2IiwiaGlkZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyQ0E7OztlQUFBOzs7c0VBekNzQjtrRUFFRztpRUFDSTtrRUFDUzsyQkFFakI7Ozs7OztBQUVyQixNQUFNQSw2QkFBNkJDLGtCQUFZO0lBQzdDQyxPQUFPO1FBQ0wsTUFBTUMsZUFBZUMsZUFBSTtRQUV6QixJQUFJLENBQUNDLE9BQU8sQ0FBQ0Y7SUFDZjtJQUVBRyxnQkFBZ0I7UUFDZCxPQUFROzBCQUVOLG9CQUFDQyxpQkFBZ0I7Z0JBQUNDLFNBQVMsSUFBSSxDQUFDQyxZQUFZOzswQkFDNUMsb0JBQUNDLGtCQUF5QjtTQUUzQjtJQUNIO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQywyQkFBMkIsSUFBSSxDQUFDWixJQUFJLENBQUNhLElBQUksQ0FBQyxJQUFJLEdBQzlDQywyQkFBMkIsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztRQUUzRCxPQUFRO1lBQ04sR0FBR0gsT0FBTztZQUNWRTtZQUNBRTtRQUNGO0lBQ0Y7SUFFQSxPQUFPRSxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDcEIscUJBQXFCLENBQUM7Ozs7Ozs7O0FBUS9DLENBQUMifQ==