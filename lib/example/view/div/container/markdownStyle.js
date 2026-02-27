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
const _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../textarea/markdownStyle"));
const _markdownStyle1 = /*#__PURE__*/ _interop_require_default(require("../../textarea/parseTree/markdownStyle"));
const _constants = require("../../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MarkdownStyleContainerDiv extends _container.default {
    show() {
        const displayStyle = _constants.FLEX;
        this.display(displayStyle);
    }
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                onKeyUp: this.keyUpHandler
            }),
            /*#__PURE__*/ React.createElement(_markdownStyle1.default, null)
        ];
    }
    parentContext() {
        const context = this.getContext(), showMarkdownStyleContainerDiv = this.show.bind(this), hideMarkdownStyleContainerDiv = this.hide.bind(this); ///
        return {
            ...context,
            showMarkdownStyleContainerDiv,
            hideMarkdownStyleContainerDiv
        };
    }
    static Textarea = _markdownStyle.default;
    static defaultProperties = {
        className: "markdown-style"
    };
}
const _default = (0, _easywithstyle.default)(MarkdownStyleContainerDiv)`

  gap: 1rem;
  height: 97rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgQ29udGFpbmVyRGl2IGZyb20gXCIuLi8uLi9kaXYvY29udGFpbmVyXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZVRleHRhcmVhIGZyb20gXCIuLi8uLi90ZXh0YXJlYS9tYXJrZG93blN0eWxlXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZVBhcnNlVGVlVGV4dGFyZWEgZnJvbSBcIi4uLy4uL3RleHRhcmVhL3BhcnNlVHJlZS9tYXJrZG93blN0eWxlXCI7XG5cbmltcG9ydCB7IEZMRVggfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZXh0ZW5kcyBDb250YWluZXJEaXYge1xuICBzaG93KCkge1xuICAgIGNvbnN0IGRpc3BsYXlTdHlsZSA9IEZMRVg7XG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxNYXJrZG93blN0eWxlVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+LFxuICAgICAgPE1hcmtkb3duU3R5bGVQYXJzZVRlZVRleHRhcmVhLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2LFxuICAgICAgaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBUZXh0YXJlYSA9IE1hcmtkb3duU3R5bGVUZXh0YXJlYTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1hcmtkb3duLXN0eWxlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYpYFxuXG4gIGdhcDogMXJlbTtcbiAgaGVpZ2h0OiA5N3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBcbmA7Il0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJDb250YWluZXJEaXYiLCJzaG93IiwiZGlzcGxheVN0eWxlIiwiRkxFWCIsImRpc3BsYXkiLCJjaGlsZEVsZW1lbnRzIiwiTWFya2Rvd25TdHlsZVRleHRhcmVhIiwib25LZXlVcCIsImtleVVwSGFuZGxlciIsIk1hcmtkb3duU3R5bGVQYXJzZVRlZVRleHRhcmVhIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJiaW5kIiwiaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJoaWRlIiwiVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkNBOzs7ZUFBQTs7O3NFQTNDc0I7a0VBRUc7c0VBQ1M7dUVBQ1E7MkJBRXJCOzs7Ozs7QUFFckIsTUFBTUEsa0NBQWtDQyxrQkFBWTtJQUNsREMsT0FBTztRQUNMLE1BQU1DLGVBQWVDLGVBQUk7UUFFekIsSUFBSSxDQUFDQyxPQUFPLENBQUNGO0lBQ2Y7SUFFQUcsZ0JBQWdCO1FBQ2QsT0FBUTswQkFFTixvQkFBQ0Msc0JBQXFCO2dCQUFDQyxTQUFTLElBQUksQ0FBQ0MsWUFBWTs7MEJBQ2pELG9CQUFDQyx1QkFBNkI7U0FFL0I7SUFDSDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsZ0NBQWdDLElBQUksQ0FBQ1osSUFBSSxDQUFDYSxJQUFJLENBQUMsSUFBSSxHQUNuREMsZ0NBQWdDLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7UUFFaEUsT0FBUTtZQUNOLEdBQUdILE9BQU87WUFDVkU7WUFDQUU7UUFDRjtJQUNGO0lBRUEsT0FBT0UsV0FBV1gsc0JBQXFCLENBQUM7SUFFeEMsT0FBT1ksb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3JCLDBCQUEwQixDQUFDOzs7Ozs7OztBQVFwRCxDQUFDIn0=