"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InlineListingHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _dom = require("../../../utilities/dom");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class InlineListingHTMLNode extends _html.default {
    content(context) {
        const markdownNode = this.getMarkdownNode(), content = markdownNode.content(context);
        return content;
    }
    adjustIndent(indent) {
        indent = null;
        return indent;
    }
    createDOMElement(context) {
        let domElement;
        const content = this.content(context), textNode = document.createTextNode(content);
        domElement = super.createDOMElement(context);
        const parentDOMElement = domElement; ///
        domElement = textNode; ///
        (0, _dom.insertAfterwards)(domElement, parentDOMElement);
        domElement = parentDOMElement; ///
        return domElement;
    }
    childNodesAsHTML(indent, context) {
        const content = this.content(context), childNodesHTML = content; ///
        return childNodesHTML;
    }
    childNodesAsPlainText(indent, context) {
        const content = this.content(context), childNodesPlainText = content; ///
        return childNodesPlainText;
    }
    static tagName = "code";
    static className = "inline";
    static fromNothing() {
        return _html.default.fromNothing(InlineListingHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _html.default.fromOuterNode(InlineListingHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdGluZy9pbmxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IGluc2VydEFmdGVyd2FyZHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmxpbmVMaXN0aW5nSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duTm9kZS5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBzdXBlci5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpXG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAvLy9cblxuICAgIGluc2VydEFmdGVyd2FyZHMoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImNvZGVcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJpbmxpbmVcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhJbmxpbmVMaXN0aW5nSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKElubGluZUxpc3RpbmdIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIklubGluZUxpc3RpbmdIVE1MTm9kZSIsIkhUTUxOb2RlIiwiY29udGVudCIsImNvbnRleHQiLCJtYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93bk5vZGUiLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJjcmVhdGVET01FbGVtZW50IiwiZG9tRWxlbWVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsInBhcmVudERPTUVsZW1lbnQiLCJpbnNlcnRBZnRlcndhcmRzIiwiY2hpbGROb2Rlc0FzSFRNTCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJmcm9tTm90aGluZyIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7NkRBSkE7cUJBRVk7Ozs7OztBQUVsQixNQUFNQSw4QkFBOEJDLGFBQVE7SUFDekRDLFFBQVFDLE9BQU8sRUFBRTtRQUNmLE1BQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DSCxVQUFVRSxhQUFhRixPQUFPLENBQUNDO1FBRXJDLE9BQU9EO0lBQ1Q7SUFFQUksYUFBYUMsTUFBTSxFQUFFO1FBQ25CQSxTQUFTO1FBRVQsT0FBT0E7SUFDVDtJQUVBQyxpQkFBaUJMLE9BQU8sRUFBRTtRQUN4QixJQUFJTTtRQUVKLE1BQU1QLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNDLFVBQ3ZCTyxXQUFXQyxTQUFTQyxjQUFjLENBQUNWO1FBRXpDTyxhQUFhLEtBQUssQ0FBQ0QsaUJBQWlCTDtRQUVwQyxNQUFNVSxtQkFBbUJKLFlBQWEsR0FBRztRQUV6Q0EsYUFBYUMsVUFBVSxHQUFHO1FBRTFCSSxJQUFBQSxxQkFBZ0IsRUFBQ0wsWUFBWUk7UUFFN0JKLGFBQWFJLGtCQUFtQixHQUFHO1FBRW5DLE9BQU9KO0lBQ1Q7SUFFQU0saUJBQWlCUixNQUFNLEVBQUVKLE9BQU8sRUFBRTtRQUNoQyxNQUFNRCxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxVQUN2QmEsaUJBQWlCZCxTQUFTLEdBQUc7UUFFbkMsT0FBT2M7SUFDVDtJQUVBQyxzQkFBc0JWLE1BQU0sRUFBRUosT0FBTyxFQUFFO1FBQ3JDLE1BQU1ELFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNDLFVBQ3ZCZSxzQkFBc0JoQixTQUFTLEdBQUc7UUFFeEMsT0FBT2dCO0lBQ1Q7SUFFQSxPQUFPQyxVQUFVLE9BQU87SUFFeEIsT0FBT0MsWUFBWSxTQUFTO0lBRTVCLE9BQU9DLGNBQWM7UUFBRSxPQUFPcEIsYUFBUSxDQUFDb0IsV0FBVyxDQUFDckI7SUFBd0I7SUFFM0UsT0FBT3NCLGNBQWNDLFNBQVMsRUFBRTtRQUFFLE9BQU90QixhQUFRLENBQUNxQixhQUFhLENBQUN0Qix1QkFBdUJ1QjtJQUFZO0FBQ3JHIn0=