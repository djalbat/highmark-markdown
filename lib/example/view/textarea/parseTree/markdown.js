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
const _parseTree = /*#__PURE__*/ _interop_require_default(require("../../textarea/parseTree"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MarkdownParseTreeTextarea extends _parseTree.default {
    parentContext() {
        const clearMarkdownParseTreeTextarea = this.clear.bind(this), updateMarkdownParseTreeTextarea = this.update.bind(this); ///
        return {
            clearMarkdownParseTreeTextarea,
            updateMarkdownParseTreeTextarea
        };
    }
    static defaultProperties = {
        className: "markdown"
    };
}
const _default = (0, _easywithstyle.default)(MarkdownParseTreeTextarea)`

  flex: 1;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4uLy4uL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuXG5jbGFzcyBNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgUGFyc2VUcmVlVGV4dGFyZWEge1xuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEsXG4gICAgICB1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1hcmtkb3duXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEpYFxuXG4gIGZsZXg6IDE7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJwYXJlbnRDb250ZXh0IiwiY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXIiLCJiaW5kIiwidXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQkE7OztlQUFBOzs7c0VBcEJzQjtrRUFFUTs7Ozs7O0FBRTlCLE1BQU1BLGtDQUFrQ0Msa0JBQWlCO0lBQ3ZEQyxnQkFBZ0I7UUFDZCxNQUFNQyxpQ0FBaUMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ3JEQyxrQ0FBa0MsSUFBSSxDQUFDQyxNQUFNLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztRQUVuRSxPQUFRO1lBQ05GO1lBQ0FHO1FBQ0Y7SUFDRjtJQUVBLE9BQU9FLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNWLDBCQUEwQixDQUFDOzs7O0FBSXBELENBQUMifQ==