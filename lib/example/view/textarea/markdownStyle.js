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
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MarkdownStyleTextarea extends _textarea.default {
    getMarkdownStyle() {
        const value = this.getValue(), markdownStyle = value; ///
        return markdownStyle;
    }
    setMarkdownStyle(markdownStyle) {
        const value = markdownStyle; ///
        this.setValue(value);
    }
    parentContext() {
        const getMarkdownStyle = this.getMarkdownStyle.bind(this), setMarkdownStyle = this.setMarkdownStyle.bind(this);
        return {
            getMarkdownStyle,
            setMarkdownStyle
        };
    }
    static defaultProperties = {
        className: "markdown-style",
        spellCheck: "false"
    };
}
const _default = (0, _easywithstyle.default)(MarkdownStyleTextarea)`

  height: 32em;
  resize: vertical;
  min-height: 12rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbWFya2Rvd25TdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5jbGFzcyBNYXJrZG93blN0eWxlVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldE1hcmtkb3duU3R5bGUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlO1xuICB9XG5cbiAgc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBtYXJrZG93blN0eWxlOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldE1hcmtkb3duU3R5bGUgPSB0aGlzLnNldE1hcmtkb3duU3R5bGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TWFya2Rvd25TdHlsZSxcbiAgICAgIHNldE1hcmtkb3duU3R5bGVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFya2Rvd24tc3R5bGVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtkb3duU3R5bGVUZXh0YXJlYSlgXG5cbiAgaGVpZ2h0OiAzMmVtO1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiAxMnJlbTtcbiAgXG5gOyJdLCJuYW1lcyI6WyJNYXJrZG93blN0eWxlVGV4dGFyZWEiLCJUZXh0YXJlYSIsImdldE1hcmtkb3duU3R5bGUiLCJ2YWx1ZSIsImdldFZhbHVlIiwibWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duU3R5bGUiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQ0E7OztlQUFBOzs7c0VBbENzQjtpRUFFRDs7Ozs7O0FBRXJCLE1BQU1BLDhCQUE4QkMsaUJBQVE7SUFDMUNDLG1CQUFtQjtRQUNqQixNQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsZ0JBQWdCRixPQUFPLEdBQUc7UUFFaEMsT0FBT0U7SUFDVDtJQUVBQyxpQkFBaUJELGFBQWEsRUFBRTtRQUM5QixNQUFNRixRQUFRRSxlQUFnQixHQUFHO1FBRWpDLElBQUksQ0FBQ0UsUUFBUSxDQUFDSjtJQUNoQjtJQUVBSyxnQkFBZ0I7UUFDZCxNQUFNTixtQkFBbUIsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ08sSUFBSSxDQUFDLElBQUksR0FDbERILG1CQUFtQixJQUFJLENBQUNBLGdCQUFnQixDQUFDRyxJQUFJLENBQUMsSUFBSTtRQUV4RCxPQUFRO1lBQ05QO1lBQ0FJO1FBQ0Y7SUFDRjtJQUVBLE9BQU9JLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO0lBQ2QsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2Isc0JBQXNCLENBQUM7Ozs7OztBQU1oRCxDQUFDIn0=