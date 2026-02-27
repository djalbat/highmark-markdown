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
class HTMLParseTreeTextarea extends _parseTree.default {
    parentContext() {
        const showHTMLParseTreeTextarea = this.show.bind(this), hideHTMLParseTreeTextarea = this.hide.bind(this), clearHTMLParseTreeTextarea = this.clear.bind(this), updateHTMLParseTreeTextarea = this.update.bind(this); ///
        return {
            showHTMLParseTreeTextarea,
            hideHTMLParseTreeTextarea,
            clearHTMLParseTreeTextarea,
            updateHTMLParseTreeTextarea
        };
    }
    static defaultProperties = {
        className: "html"
    };
}
const _default = (0, _easywithstyle.default)(HTMLParseTreeTextarea)`

  margin-top: 1rem;
  height: 48rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi4vLi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5cbmNsYXNzIEhUTUxQYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIFBhcnNlVHJlZVRleHRhcmVhIHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEgPSB0aGlzLmhpZGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEgPSB0aGlzLmNsZWFyLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHVwZGF0ZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhLFxuICAgICAgaGlkZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSxcbiAgICAgIGNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhLFxuICAgICAgdXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImh0bWxcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSFRNTFBhcnNlVHJlZVRleHRhcmVhKWBcblxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBoZWlnaHQ6IDQ4cmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJwYXJlbnRDb250ZXh0Iiwic2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInNob3ciLCJiaW5kIiwiaGlkZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsImhpZGUiLCJjbGVhckhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyIiwidXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBCQTs7O2VBQUE7OztzRUF4QnNCO2tFQUVROzs7Ozs7QUFFOUIsTUFBTUEsOEJBQThCQyxrQkFBaUI7SUFDbkRDLGdCQUFnQjtRQUNkLE1BQU1DLDRCQUE0QixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDL0NDLDRCQUE0QixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FDL0NHLDZCQUE2QixJQUFJLENBQUNDLEtBQUssQ0FBQ0osSUFBSSxDQUFDLElBQUksR0FDakRLLDhCQUE4QixJQUFJLENBQUNDLE1BQU0sQ0FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO1FBRS9ELE9BQVE7WUFDTkY7WUFDQUc7WUFDQUU7WUFDQUU7UUFDRjtJQUNGO0lBRUEsT0FBT0Usb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2Qsc0JBQXNCLENBQUM7Ozs7O0FBS2hELENBQUMifQ==