"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PlainTextContainerDiv;
    }
});
const _container = /*#__PURE__*/ _interop_require_default(require("../../div/container"));
const _plainText = /*#__PURE__*/ _interop_require_default(require("../../textarea/plainText"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PlainTextContainerDiv extends _container.default {
    childElements() {
        return /*#__PURE__*/ React.createElement(_plainText.default, null);
    }
    parentContext() {
        const context = this.getContext(), showPlainTextContainerDiv = this.show.bind(this), hidePlainTextContainerDiv = this.hide.bind(this); ///
        return {
            ...context,
            showPlainTextContainerDiv,
            hidePlainTextContainerDiv
        };
    }
    static defaultProperties = {
        className: "plain-text"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2NvbnRhaW5lci9wbGFpblRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250YWluZXJEaXYgZnJvbSBcIi4uLy4uL2Rpdi9jb250YWluZXJcIjtcbmltcG9ydCBQbGFpblRleHRUZXh0YXJlYSBmcm9tIFwiLi4vLi4vdGV4dGFyZWEvcGxhaW5UZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluVGV4dENvbnRhaW5lckRpdiBleHRlbmRzIENvbnRhaW5lckRpdiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPFBsYWluVGV4dFRleHRhcmVhLz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2ID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNob3dQbGFpblRleHRDb250YWluZXJEaXYsXG4gICAgICBoaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBsYWluLXRleHRcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlBsYWluVGV4dENvbnRhaW5lckRpdiIsIkNvbnRhaW5lckRpdiIsImNoaWxkRWxlbWVudHMiLCJQbGFpblRleHRUZXh0YXJlYSIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInNob3dQbGFpblRleHRDb250YWluZXJEaXYiLCJzaG93IiwiYmluZCIsImhpZGVQbGFpblRleHRDb250YWluZXJEaXYiLCJoaWRlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBcUJBOzs7a0VBSEk7a0VBQ0s7Ozs7OztBQUVmLE1BQU1BLDhCQUE4QkMsa0JBQVk7SUFDN0RDLGdCQUFnQjtRQUNkLHFCQUVFLG9CQUFDQyxrQkFBaUI7SUFHdEI7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLDRCQUE0QixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDL0NDLDRCQUE0QixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO1FBRTVELE9BQVE7WUFDTixHQUFHSixPQUFPO1lBQ1ZFO1lBQ0FHO1FBQ0Y7SUFDRjtJQUVBLE9BQU9FLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9