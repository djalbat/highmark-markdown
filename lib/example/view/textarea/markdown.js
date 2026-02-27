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
class MarkdownTextarea extends _textarea.default {
    getMarkdown() {
        const value = this.getValue(), markdown = value; ///
        return markdown;
    }
    setMarkdown(markdown) {
        const value = markdown; ///
        this.setValue(value);
    }
    parentContext() {
        const getMarkdown = this.getMarkdown.bind(this), setMarkdown = this.setMarkdown.bind(this);
        return {
            getMarkdown,
            setMarkdown
        };
    }
    static defaultProperties = {
        className: "markdown",
        spellCheck: "false"
    };
}
const _default = (0, _easywithstyle.default)(MarkdownTextarea)`

  height: 32em;
  resize: vertical;
  min-height: 12rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgTWFya2Rvd25UZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0TWFya2Rvd24oKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbWFya2Rvd24gPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gbWFya2Rvd247XG4gIH1cblxuICBzZXRNYXJrZG93bihtYXJrZG93bikge1xuICAgIGNvbnN0IHZhbHVlID0gbWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldE1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldE1hcmtkb3duID0gdGhpcy5zZXRNYXJrZG93bi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRNYXJrZG93bixcbiAgICAgIHNldE1hcmtkb3duXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1hcmtkb3duXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNYXJrZG93blRleHRhcmVhKWBcblxuICBoZWlnaHQ6IDMyZW07XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDEycmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiTWFya2Rvd25UZXh0YXJlYSIsIlRleHRhcmVhIiwiZ2V0TWFya2Rvd24iLCJ2YWx1ZSIsImdldFZhbHVlIiwibWFya2Rvd24iLCJzZXRNYXJrZG93biIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9DQTs7O2VBQUE7OztzRUFsQ3NCO2lFQUVEOzs7Ozs7QUFFckIsTUFBTUEseUJBQXlCQyxpQkFBUTtJQUNyQ0MsY0FBYztRQUNaLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxXQUFXRixPQUFPLEdBQUc7UUFFM0IsT0FBT0U7SUFDVDtJQUVBQyxZQUFZRCxRQUFRLEVBQUU7UUFDcEIsTUFBTUYsUUFBUUUsVUFBVSxHQUFHO1FBRTNCLElBQUksQ0FBQ0UsUUFBUSxDQUFDSjtJQUNoQjtJQUVBSyxnQkFBZ0I7UUFDZCxNQUFNTixjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUN4Q0gsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0csSUFBSSxDQUFDLElBQUk7UUFFOUMsT0FBUTtZQUNOUDtZQUNBSTtRQUNGO0lBQ0Y7SUFFQSxPQUFPSSxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWEMsWUFBWTtJQUNkLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNiLGlCQUFpQixDQUFDOzs7Ozs7QUFNM0MsQ0FBQyJ9