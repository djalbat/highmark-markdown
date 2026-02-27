"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CSSContainerDiv;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../textarea/css"));
const _container = /*#__PURE__*/ _interop_require_default(require("../../div/container"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CSSContainerDiv extends _container.default {
    childElements() {
        return /*#__PURE__*/ React.createElement(_css.default, null);
    }
    parentContext() {
        const context = this.getContext(), showCSSContainerDiv = this.show.bind(this), hideCSSContainerDiv = this.hide.bind(this); ///
        return {
            ...context,
            showCSSContainerDiv,
            hideCSSContainerDiv
        };
    }
    static defaultProperties = {
        className: "css"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2NvbnRhaW5lci9jc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NUZXh0YXJlYSBmcm9tIFwiLi4vLi4vdGV4dGFyZWEvY3NzXCI7XG5pbXBvcnQgQ29udGFpbmVyRGl2IGZyb20gXCIuLi8uLi9kaXYvY29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENTU0NvbnRhaW5lckRpdiBleHRlbmRzIENvbnRhaW5lckRpdiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENTU1RleHRhcmVhLz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaG93Q1NTQ29udGFpbmVyRGl2ID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlQ1NTQ29udGFpbmVyRGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNob3dDU1NDb250YWluZXJEaXYsXG4gICAgICBoaWRlQ1NTQ29udGFpbmVyRGl2XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNzc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ1NTQ29udGFpbmVyRGl2IiwiQ29udGFpbmVyRGl2IiwiY2hpbGRFbGVtZW50cyIsIkNTU1RleHRhcmVhIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwic2hvd0NTU0NvbnRhaW5lckRpdiIsInNob3ciLCJiaW5kIiwiaGlkZUNTU0NvbnRhaW5lckRpdiIsImhpZGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUFxQkE7Ozs0REFIRztrRUFDQzs7Ozs7O0FBRVYsTUFBTUEsd0JBQXdCQyxrQkFBWTtJQUN2REMsZ0JBQWdCO1FBQ2QscUJBRUUsb0JBQUNDLFlBQVc7SUFHaEI7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLHNCQUFzQixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDekNDLHNCQUFzQixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO1FBRXRELE9BQVE7WUFDTixHQUFHSixPQUFPO1lBQ1ZFO1lBQ0FHO1FBQ0Y7SUFDRjtJQUVBLE9BQU9FLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9