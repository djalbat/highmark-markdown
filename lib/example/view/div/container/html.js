"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HTMLContainerDiv;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../div/html"));
const _container = /*#__PURE__*/ _interop_require_default(require("../../div/container"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class HTMLContainerDiv extends _container.default {
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_html.default, null)
        ];
    }
    parentContext() {
        const context = this.getContext(), showHTMLContainerDiv = this.show.bind(this), hideHTMLContainerDiv = this.hide.bind(this); ///
        return {
            ...context,
            showHTMLContainerDiv,
            hideHTMLContainerDiv
        };
    }
    static defaultProperties = {
        className: "html"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2NvbnRhaW5lci9odG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTERpdiBmcm9tIFwiLi4vLi4vZGl2L2h0bWxcIjtcbmltcG9ydCBDb250YWluZXJEaXYgZnJvbSBcIi4uLy4uL2Rpdi9jb250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRNTENvbnRhaW5lckRpdiBleHRlbmRzIENvbnRhaW5lckRpdiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxIVE1MRGl2Lz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2hvd0hUTUxDb250YWluZXJEaXYgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGhpZGVIVE1MQ29udGFpbmVyRGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNob3dIVE1MQ29udGFpbmVyRGl2LFxuICAgICAgaGlkZUhUTUxDb250YWluZXJEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaHRtbFwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiSFRNTENvbnRhaW5lckRpdiIsIkNvbnRhaW5lckRpdiIsImNoaWxkRWxlbWVudHMiLCJIVE1MRGl2IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwic2hvd0hUTUxDb250YWluZXJEaXYiLCJzaG93IiwiYmluZCIsImhpZGVIVE1MQ29udGFpbmVyRGl2IiwiaGlkZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXFCQTs7OzZEQUhEO2tFQUNLOzs7Ozs7QUFFVixNQUFNQSx5QkFBeUJDLGtCQUFZO0lBQ3hEQyxnQkFBZ0I7UUFDZCxPQUFROzBCQUVOLG9CQUFDQyxhQUFPO1NBRVQ7SUFDSDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsdUJBQXVCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUMxQ0MsdUJBQXVCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7UUFFdkQsT0FBUTtZQUNOLEdBQUdKLE9BQU87WUFDVkU7WUFDQUc7UUFDRjtJQUNGO0lBRUEsT0FBT0Usb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKIn0=