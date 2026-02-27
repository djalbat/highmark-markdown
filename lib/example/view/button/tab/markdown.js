"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownTabButton;
    }
});
const _tab = /*#__PURE__*/ _interop_require_default(require("../../button/tab"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MarkdownTabButton extends _tab.default {
    childElements() {
        return "Markdown";
    }
    parentContext() {
        const enableMarkdownTabButton = this.enable.bind(this), disableMarkdownTabButton = this.disable.bind(this); ///
        return {
            enableMarkdownTabButton,
            disableMarkdownTabButton
        };
    }
    static defaultProperties = {
        className: "markdown"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYnV0dG9uL3RhYi9tYXJrZG93bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRhYkJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL3RhYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blRhYkJ1dHRvbiBleHRlbmRzIFRhYkJ1dHRvbiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFwiTWFya2Rvd25cIjtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZW5hYmxlTWFya2Rvd25UYWJCdXR0b24gPSB0aGlzLmVuYWJsZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBkaXNhYmxlTWFya2Rvd25UYWJCdXR0b24gPSB0aGlzLmRpc2FibGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGVuYWJsZU1hcmtkb3duVGFiQnV0dG9uLFxuICAgICAgZGlzYWJsZU1hcmtkb3duVGFiQnV0dG9uXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1hcmtkb3duXCJcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duVGFiQnV0dG9uIiwiVGFiQnV0dG9uIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJlbmFibGVNYXJrZG93blRhYkJ1dHRvbiIsImVuYWJsZSIsImJpbmQiLCJkaXNhYmxlTWFya2Rvd25UYWJCdXR0b24iLCJkaXNhYmxlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7NERBRkM7Ozs7OztBQUVQLE1BQU1BLDBCQUEwQkMsWUFBUztJQUN0REMsZ0JBQWdCO1FBQ2QsT0FBTztJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLDBCQUEwQixJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDL0NDLDJCQUEyQixJQUFJLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO1FBRTdELE9BQVE7WUFDTkY7WUFDQUc7UUFDRjtJQUNGO0lBRUEsT0FBT0Usb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBQztBQUNIIn0=