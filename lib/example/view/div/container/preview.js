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
const _preview = /*#__PURE__*/ _interop_require_default(require("../../div/preview"));
const _container = /*#__PURE__*/ _interop_require_default(require("../../div/container"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PreviewContainerDiv extends _container.default {
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_preview.default, null)
        ];
    }
    parentContext() {
        const context = this.getContext(), showPreviewContainerDiv = this.show.bind(this), hidePreviewContainerDiv = this.hide.bind(this); ///
        return {
            ...context,
            showPreviewContainerDiv,
            hidePreviewContainerDiv
        };
    }
}
const _default = (0, _easywithstyle.default)(PreviewContainerDiv)`
  
  padding: 0;
  position: relative;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2NvbnRhaW5lci9wcmV2aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi4vLi4vZGl2L3ByZXZpZXdcIjtcbmltcG9ydCBDb250YWluZXJEaXYgZnJvbSBcIi4uLy4uL2Rpdi9jb250YWluZXJcIjtcblxuY2xhc3MgUHJldmlld0NvbnRhaW5lckRpdiBleHRlbmRzIENvbnRhaW5lckRpdiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxQcmV2aWV3RGl2Lz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2hvd1ByZXZpZXdDb250YWluZXJEaXYgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGhpZGVQcmV2aWV3Q29udGFpbmVyRGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNob3dQcmV2aWV3Q29udGFpbmVyRGl2LFxuICAgICAgaGlkZVByZXZpZXdDb250YWluZXJEaXZcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUHJldmlld0NvbnRhaW5lckRpdilgXG4gIFxuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJQcmV2aWV3Q29udGFpbmVyRGl2IiwiQ29udGFpbmVyRGl2IiwiY2hpbGRFbGVtZW50cyIsIlByZXZpZXdEaXYiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJzaG93UHJldmlld0NvbnRhaW5lckRpdiIsInNob3ciLCJiaW5kIiwiaGlkZVByZXZpZXdDb250YWluZXJEaXYiLCJoaWRlIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2QkE7OztlQUFBOzs7c0VBM0JzQjtnRUFFQztrRUFDRTs7Ozs7O0FBRXpCLE1BQU1BLDRCQUE0QkMsa0JBQVk7SUFDNUNDLGdCQUFnQjtRQUNkLE9BQVE7MEJBRU4sb0JBQUNDLGdCQUFVO1NBRVo7SUFDSDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsMEJBQTBCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUM3Q0MsMEJBQTBCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7UUFFMUQsT0FBUTtZQUNOLEdBQUdKLE9BQU87WUFDVkU7WUFDQUc7UUFDRjtJQUNGO0FBQ0Y7TUFFQSxXQUFlRSxJQUFBQSxzQkFBUyxFQUFDWixvQkFBb0IsQ0FBQzs7Ozs7QUFLOUMsQ0FBQyJ9