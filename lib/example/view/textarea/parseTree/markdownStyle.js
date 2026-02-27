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
class MarkdownStyleParseTreeTextarea extends _parseTree.default {
    parentContext() {
        const clearMarkdownStyleParseTreeTextarea = this.clear.bind(this), updateMarkdownStyleParseTreeTextarea = this.update.bind(this); ///
        return {
            clearMarkdownStyleParseTreeTextarea,
            updateMarkdownStyleParseTreeTextarea
        };
    }
    static defaultProperties = {
        className: "markdown-style"
    };
}
const _default = (0, _easywithstyle.default)(MarkdownStyleParseTreeTextarea)`

  flex: 1;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL21hcmtkb3duU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi4vLi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5cbmNsYXNzIE1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIFBhcnNlVHJlZVRleHRhcmVhIHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhLFxuICAgICAgdXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1hcmtkb3duLXN0eWxlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSlgXG5cbiAgZmxleDogMTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwicGFyZW50Q29udGV4dCIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXIiLCJiaW5kIiwidXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNCQTs7O2VBQUE7OztzRUFwQnNCO2tFQUVROzs7Ozs7QUFFOUIsTUFBTUEsdUNBQXVDQyxrQkFBaUI7SUFDNURDLGdCQUFnQjtRQUNkLE1BQU1DLHNDQUFzQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDMURDLHVDQUF1QyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO1FBRXhFLE9BQVE7WUFDTkY7WUFDQUc7UUFDRjtJQUNGO0lBRUEsT0FBT0Usb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ1YsK0JBQStCLENBQUM7Ozs7QUFJekQsQ0FBQyJ9