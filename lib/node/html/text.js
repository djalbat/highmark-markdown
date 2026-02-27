"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TextHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TextHTMLNode extends _html.default {
    text(context) {
        const markdownNode = this.getMarkdownNode(), text = markdownNode.text(context);
        return text;
    }
    createDOMElement(context) {
        const text = this.text(context), content = text, textNode = document.createTextNode(content), domElement = textNode; ///
        return domElement;
    }
    asHTML(indent, context) {
        const text = this.text(context), html = text; ///
        return html;
    }
    asPlainText(context) {
        const text = this.text(context), plainText = text; ///
        return plainText;
    }
    static fromNothing(Class, ...remainingArguments) {
        return _html.default.fromNothing(Class, ...remainingArguments);
    }
    static fromOuterNode(Class, outerNode, ...remainingArguments) {
        return _html.default.fromOuterNode(Class, outerNode, ...remainingArguments);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICB0ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHRleHQgPSBtYXJrZG93bk5vZGUudGV4dChjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMudGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50ID0gdGV4dCwgLy8vXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLnRleHQoY29udGV4dCksXG4gICAgICAgICAgaHRtbCA9IHRleHQ7IC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMudGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHQgPSB0ZXh0OyAvLy9cblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRleHRIVE1MTm9kZSIsIkhUTUxOb2RlIiwidGV4dCIsImNvbnRleHQiLCJtYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93bk5vZGUiLCJjcmVhdGVET01FbGVtZW50IiwiY29udGVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImRvbUVsZW1lbnQiLCJhc0hUTUwiLCJpbmRlbnQiLCJodG1sIiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozs2REFGQTs7Ozs7O0FBRU4sTUFBTUEscUJBQXFCQyxhQUFRO0lBQ2hEQyxLQUFLQyxPQUFPLEVBQUU7UUFDWixNQUFNQyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0gsT0FBT0UsYUFBYUYsSUFBSSxDQUFDQztRQUUvQixPQUFPRDtJQUNUO0lBRUFJLGlCQUFpQkgsT0FBTyxFQUFFO1FBQ3hCLE1BQU1ELE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNDLFVBQ2pCSSxVQUFVTCxNQUNWTSxXQUFXQyxTQUFTQyxjQUFjLENBQUNILFVBQ25DSSxhQUFhSCxVQUFXLEdBQUc7UUFFakMsT0FBT0c7SUFDVDtJQUVBQyxPQUFPQyxNQUFNLEVBQUVWLE9BQU8sRUFBRTtRQUN0QixNQUFNRCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxVQUNqQlcsT0FBT1osTUFBTSxHQUFHO1FBRXRCLE9BQU9ZO0lBQ1Q7SUFFQUMsWUFBWVosT0FBTyxFQUFFO1FBQ25CLE1BQU1ELE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNDLFVBQ2pCYSxZQUFZZCxNQUFNLEdBQUc7UUFFM0IsT0FBT2M7SUFDVDtJQUVBLE9BQU9DLFlBQVlDLEtBQUssRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUFFLE9BQU9sQixhQUFRLENBQUNnQixXQUFXLENBQUNDLFVBQVVDO0lBQXFCO0lBRTlHLE9BQU9DLGNBQWNGLEtBQUssRUFBRUcsU0FBUyxFQUFFLEdBQUdGLGtCQUFrQixFQUFFO1FBQUUsT0FBT2xCLGFBQVEsQ0FBQ21CLGFBQWEsQ0FBQ0YsT0FBT0csY0FBY0Y7SUFBcUI7QUFDMUkifQ==